---
title: "REST API Best Practices"
subtitle: "Resource naming, HTTP methods, status codes, pagination, errors, versioning, and security."
description: "REST API design best practices — URL naming, HTTP methods, status codes, pagination, filtering, error format, versioning, caching, and security."
category: "Web & Formats"
icon: "plug"
---

## Resource Naming

Model the API around **resources** (nouns). The HTTP method is the verb.

| Rule | Good | Avoid |
|------|------|-------|
| Use plural nouns | `/users` | `/user`, `/getUsers` |
| Use lowercase and hyphens | `/order-items` | `/orderItems`, `/order_items` |
| Nest to show ownership | `/users/42/orders` | `/getOrdersForUser?id=42` |
| Keep nesting shallow (2 levels) | `/orders/7/items` | `/users/42/orders/7/items/3/tax` |
| No trailing slash or file extension | `/users/42` | `/users/42/`, `/users/42.json` |
| Identify by ID, not by action | `/users/42` | `/users/42/delete` |

For an action that does not fit CRUD, use a sub-resource or a verb as a last resort:

```plaintext
POST /orders/7/cancel
POST /users/42/password-reset
```

## HTTP Methods

| Method | Purpose | Safe | Idempotent | Typical success |
|--------|---------|:----:|:----------:|-----------------|
| `GET` | Read a resource or a list | Yes | Yes | `200` |
| `POST` | Create a resource, or run an action | No | No | `201` |
| `PUT` | Replace a resource completely | No | Yes | `200` or `204` |
| `PATCH` | Update part of a resource | No | No* | `200` or `204` |
| `DELETE` | Remove a resource | No | Yes | `204` |

- **Safe** means the call does not change server state.
- **Idempotent** means repeating the call gives the same end state as calling it once.
- *`PATCH` can be made idempotent, but it is not guaranteed to be.

```plaintext
GET    /users          # list users
POST   /users          # create a user
GET    /users/42       # read one user
PUT    /users/42       # replace user 42
PATCH  /users/42       # update some fields of user 42
DELETE /users/42       # delete user 42
```

## Status Codes

Return the most specific code that fits. See the
[HTTP Status Codes cheatsheet]({{ '/http-status-codes' | relative_url }}) for the full list.

| Situation | Code |
|-----------|------|
| Read or update succeeded | `200 OK` |
| Resource created (send a `Location` header) | `201 Created` |
| Success with nothing to return | `204 No Content` |
| Malformed JSON or invalid fields | `400 Bad Request` |
| Missing or invalid credentials | `401 Unauthorized` |
| Authenticated but not allowed | `403 Forbidden` |
| Resource does not exist | `404 Not Found` |
| Method not supported on this URL | `405 Method Not Allowed` |
| Conflict with current state (duplicate, version clash) | `409 Conflict` |
| Valid syntax but fails business rules | `422 Unprocessable Content` |
| Rate limit exceeded | `429 Too Many Requests` |
| Unexpected server failure | `500 Internal Server Error` |
| Upstream or dependency is down | `503 Service Unavailable` |

Never return `200` with an error in the body. Clients and proxies rely on the status code.

## Request and Response Design

- Use `JSON` with `Content-Type: application/json`, and honour the `Accept` header.
- Use one casing style for field names (`snake_case` or `camelCase`) across the whole API.
- Use ISO 8601 for dates and times, in UTC: `2025-03-14T09:30:00Z`.
- Use strings for IDs and money amounts you cannot lose precision on. Use integer minor
  units (cents) for currency.
- Return the created or updated resource, so the client does not need a second call.
- Never expose internal details such as database column names or stack traces.

```json
{
  "id": "usr_42",
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "created_at": "2025-03-14T09:30:00Z"
}
```

## Filtering, Sorting, and Fields

Put these in the query string, and keep them optional.

```plaintext
GET /users?role=admin&status=active          # filter
GET /users?sort=-created_at,name             # sort (- means descending)
GET /users?fields=id,name,email              # return only some fields
GET /users?q=ada                             # free-text search
GET /orders?created_after=2025-01-01         # range filter
```

## Pagination

Never return an unbounded list. Set a default and a maximum page size.

| Style | Request | Best for | Trade-off |
|-------|---------|----------|-----------|
| Offset | `?limit=20&offset=40` | Small data, page numbers | Slow on large tables, can skip or repeat rows |
| Page | `?page=3&per_page=20` | Simple UIs | Same as offset |
| Cursor | `?limit=20&cursor=eyJpZCI6NDJ9` | Large or changing data, feeds | No jumping to page N |

```json
{
  "data": [{ "id": "usr_41" }, { "id": "usr_42" }],
  "page": {
    "limit": 20,
    "next_cursor": "eyJpZCI6NDJ9",
    "has_more": true
  }
}
```

## Error Format

Use one error shape for every endpoint. A machine-readable code lets clients react
without parsing messages. The structure below follows RFC 9457 (Problem Details).

```json
{
  "type": "https://api.example.com/errors/validation-failed",
  "title": "Validation failed",
  "status": 422,
  "detail": "One or more fields are invalid.",
  "errors": [
    { "field": "email", "code": "invalid_format", "message": "Must be a valid email." }
  ],
  "request_id": "req_8f2c1a"
}
```

Send it with `Content-Type: application/problem+json`. Include a `request_id` so support
can find the matching log line.

## Versioning

| Approach | Example | Notes |
|----------|---------|-------|
| URL path | `/v1/users` | Most common and easy to see and cache |
| Header | `Accept: application/vnd.example.v2+json` | Clean URLs, harder to test |
| Query | `/users?version=2` | Easy, but easy to forget |

- Version only for **breaking** changes. Adding a field or an endpoint is not breaking.
- Support the old version for a published period, and announce the end date with a
  `Deprecation` or `Sunset` header.

## Idempotency and Retries

`POST` is not idempotent, so a retry after a timeout can create a duplicate. Let the client
send a unique key, and return the stored result if you see it again.

```http
POST /payments
Idempotency-Key: 6f1d2c7e-9b3a-4c1e-8e55-0a1b2c3d4e5f
Content-Type: application/json

{ "amount": 1999, "currency": "usd" }
```

## Caching and Conditional Requests

| Header | Direction | Purpose |
|--------|-----------|---------|
| `Cache-Control` | Response | How long and by whom a response can be cached |
| `ETag` | Response | Version fingerprint of the resource |
| `If-None-Match` | Request | Send the `ETag`; get `304 Not Modified` if unchanged |
| `If-Match` | Request | Update only if the `ETag` still matches (stops lost updates) |
| `Last-Modified` | Response | Time of the last change |

```http
GET /users/42
If-None-Match: "v7"

HTTP/1.1 304 Not Modified
```

## Security

- Use **HTTPS** only. Redirect or reject plain HTTP.
- Authenticate with `Authorization: Bearer <token>` (OAuth 2.0 / JWT) or an API key.
  Never put secrets in the URL, since URLs end up in logs.
- Check **authorisation** on every request, down to the object (does this user own order 7?).
  Skipping this is the most common API flaw (BOLA).
- Validate all input: types, length, ranges, and allowed values. Reject unknown fields if you can.
- Apply **rate limits** and tell clients where they stand.
- Set a CORS policy that lists the origins you trust. Avoid `*` on authenticated APIs.
- Do not leak details in errors, and do not reveal whether an account exists on login.

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 30
RateLimit-Limit: 100
RateLimit-Remaining: 0
RateLimit-Reset: 30
```

## Documentation and Operations

- Describe the API with an **OpenAPI** spec, and generate docs and clients from it.
- Provide a `GET /health` endpoint for load balancers and monitors.
- Log a `request_id` on every request, and return it in a response header.
- Make changes backward compatible: add fields, never remove or rename them in one version.
- Keep responses stable. Adding a new enum value can break strict clients, so document it.
