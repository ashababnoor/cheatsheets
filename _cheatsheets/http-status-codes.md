---
title: "HTTP Status Codes"
subtitle: "Every standard status code grouped by class (`1xx` to `5xx`), with what each one means."
description: "Complete HTTP status code reference — 1xx informational, 2xx success, 3xx redirection, 4xx client errors, and 5xx server errors."
category: "Web & Formats"
icon: "globe"
---

Each status code indicates the result of the server's attempt to understand and satisfy a request.

## Quick Reference: Most Common Status Codes

| Code | Name | Description |
|------|------|-------------|
| 200  | OK | Request succeeded |
| 201  | Created | Resource successfully created |
| 204  | No Content | Success with no response body |
| 301  | Moved Permanently | Resource has a new permanent URL |
| 302  | Found | Resource temporarily at a different URL |
| 400  | Bad Request | Malformed or invalid request |
| 401  | Unauthorized | Authentication required |
| 403  | Forbidden | Authenticated but not authorized |
| 404  | Not Found | Resource does not exist |
| 500  | Internal Server Error | Unexpected server failure |
| 502  | Bad Gateway | Invalid response from upstream server |
| 503  | Service Unavailable | Server temporarily unable to handle request |

## 1xx Informational

Indicates that the request was received and the server is continuing to process it.

| Code | Name | Description | Common Use Case |
|------|------|-------------|-----------------|
| 100  | Continue | The server has received the request headers and the client should proceed to send the request body | Large file uploads where the client sends `Expect: 100-continue` to check if the server will accept the request before transmitting the body |
| 101  | Switching Protocols | The server is switching to the protocol requested by the client via the `Upgrade` header | Upgrading an HTTP connection to a WebSocket connection |
| 102  | Processing | The server has received the request and is still processing it, but no response is available yet | Long-running WebDAV operations to prevent the client from timing out |
| 103  | Early Hints | Used to return some response headers before the final response | Preloading CSS, fonts, or scripts via `Link` headers while the server prepares the full response |

## 2xx Success

Indicates that the request was successfully received, understood, and accepted.

| Code | Name | Description | Common Use Case |
|------|------|-------------|-----------------|
| 200  | OK | The request has succeeded; the meaning of the success depends on the HTTP method used | Standard successful response for GET requests returning data or POST requests returning a result |
| 201  | Created | The request has been fulfilled and a new resource has been created | Responding to a successful POST or PUT that creates a new record; typically includes a `Location` header pointing to the new resource |
| 202  | Accepted | The request has been accepted for processing, but processing has not been completed | Asynchronous operations like batch jobs, queued tasks, or webhook deliveries that will be handled later |
| 204  | No Content | The server successfully processed the request but is not returning any content | Successful DELETE requests or PUT/PATCH updates where no response body is needed |
| 206  | Partial Content | The server is delivering only part of the resource due to a `Range` header sent by the client | Resumable file downloads, video streaming, or loading large files in chunks |
| 207  | Multi-Status | Provides status for multiple independent operations in the response body (WebDAV) | Batch operations where some items succeed and others fail, returning per-item status in an XML body |

## 3xx Redirection

Indicates that further action needs to be taken by the client to complete the request.

| Code | Name | Description | Common Use Case |
|------|------|-------------|-----------------|
| 301  | Moved Permanently | The resource has been permanently moved to a new URL; all future requests should use the new URL | Domain migrations, URL restructuring, or enforcing canonical URLs; search engines transfer SEO ranking to the new URL |
| 302  | Found | The resource is temporarily located at a different URL; the client should continue to use the original URL for future requests | Temporary redirects during maintenance, A/B testing, or redirecting after login to a different page |
| 303  | See Other | The response to the request can be found at another URL using a GET request | Redirecting after a POST form submission to a confirmation page (Post/Redirect/Get pattern) to prevent duplicate submissions |
| 304  | Not Modified | The resource has not been modified since the last request; the client can use the cached version | Browser caching via `If-Modified-Since` or `If-None-Match` headers; saves bandwidth by skipping the response body |
| 307  | Temporary Redirect | The resource is temporarily at a different URL; the client must use the same HTTP method for the redirected request | Same as 302 but guarantees the HTTP method and body are not changed during the redirect (e.g., POST stays POST) |
| 308  | Permanent Redirect | The resource has permanently moved to a new URL; the client must use the same HTTP method for the redirected request | Same as 301 but guarantees the HTTP method and body are not changed during the redirect; used for API endpoint migrations |

## 4xx Client Error

Indicates that the request contains bad syntax or cannot be fulfilled by the server due to a client-side issue.

| Code | Name | Description | Common Use Case |
|------|------|-------------|-----------------|
| 400  | Bad Request | The server cannot process the request due to malformed syntax, invalid parameters, or missing required fields | Invalid JSON in a request body, missing required query parameters, or data validation failures |
| 401  | Unauthorized | The request requires authentication; the client must provide valid credentials | Accessing a protected API endpoint without a token, or with an expired/invalid token; server includes a `WWW-Authenticate` header |
| 403  | Forbidden | The server understood the request but refuses to authorize it, regardless of authentication | A user attempting to access another user's private resource, or an API key lacking the required permissions/scope |
| 404  | Not Found | The server cannot find the requested resource at the given URL | Requesting a deleted or non-existent page, API resource, or file path |
| 405  | Method Not Allowed | The HTTP method used is not supported for the requested resource | Sending a DELETE request to a read-only endpoint; the server should include an `Allow` header listing valid methods |
| 406  | Not Acceptable | The server cannot produce a response matching the client's `Accept` headers | Requesting `application/xml` from an endpoint that only serves `application/json` |
| 408  | Request Timeout | The server timed out waiting for the client to finish sending the request | Slow or stalled client connections; the server closes the connection after waiting too long for data |
| 409  | Conflict | The request conflicts with the current state of the resource on the server | Concurrent edit conflicts, attempting to create a resource that already exists, or version mismatch on an update |
| 410  | Gone | The resource was previously available at this URL but has been permanently removed and no forwarding address is known | Intentionally removed API endpoints or content; unlike 404, this signals the removal is deliberate and permanent |
| 411  | Length Required | The server requires a `Content-Length` header in the request | Rejecting chunked transfer requests on endpoints that need to know the full size upfront |
| 413  | Payload Too Large | The request body exceeds the server's size limit | Uploading a file that exceeds the maximum allowed size; the server may include a `Retry-After` header if the condition is temporary |
| 414  | URI Too Long | The request URL exceeds the server's length limit | Extremely long query strings, typically caused by sending too much data via GET instead of POST |
| 415  | Unsupported Media Type | The server does not support the media type of the request body | Sending `text/plain` to an endpoint that only accepts `application/json`, or uploading an unsupported file format |
| 418  | I'm a Teapot | The server refuses to brew coffee because it is, permanently, a teapot (RFC 2324) | An Easter egg from the Hyper Text Coffee Pot Control Protocol; sometimes used humorously in APIs or as a deliberate rejection |
| 422  | Unprocessable Entity | The server understands the content type and syntax of the request, but the contained instructions are semantically invalid | Well-formed JSON that fails business logic validation, such as an end date before a start date or an invalid email format |
| 429  | Too Many Requests | The client has sent too many requests in a given time period (rate limiting) | API rate limiting; the server typically includes a `Retry-After` header indicating how long the client should wait |
| 451  | Unavailable For Legal Reasons | The resource is unavailable due to legal demands such as government censorship or court orders | Content blocked due to DMCA takedown notices, GDPR compliance, or regional legal restrictions |

## 5xx Server Error

Indicates that the server failed to fulfill an apparently valid request due to an error on its side.

| Code | Name | Description | Common Use Case |
|------|------|-------------|-----------------|
| 500  | Internal Server Error | The server encountered an unexpected condition that prevented it from fulfilling the request | Unhandled exceptions, programming bugs, database errors, or any unforeseen server-side failure |
| 501  | Not Implemented | The server does not support the functionality required to fulfill the request | The server does not recognize the HTTP method or lacks the ability to fulfill it; often seen with newer or uncommon methods like PATCH on legacy servers |
| 502  | Bad Gateway | The server, acting as a gateway or proxy, received an invalid response from an upstream server | A reverse proxy (e.g., Nginx) cannot reach the application server, or the upstream server returned a malformed response |
| 503  | Service Unavailable | The server is temporarily unable to handle the request, usually due to overload or scheduled maintenance | Planned downtime, server overload, or dependency failures; the server should include a `Retry-After` header when possible |
| 504  | Gateway Timeout | The server, acting as a gateway or proxy, did not receive a timely response from an upstream server | A reverse proxy times out waiting for the application server to respond, often due to long-running queries or external API delays |
| 505  | HTTP Version Not Supported | The server does not support the HTTP protocol version used in the request | A request using HTTP/2 to a server that only supports HTTP/1.1, or vice versa |
