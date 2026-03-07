---
title: "Conventional Commits"
category: "Languages & Code"
icon: "📝"
---
# Conventional Commits Cheatsheet

The [Conventional Commits](https://www.conventionalcommits.org/) specification provides a lightweight convention for structuring commit messages. It integrates with [Semantic Versioning](https://semver.org/) (SemVer) and enables automated changelog generation, consistent team workflows, and predictable release processes.

---

## Format

Every conventional commit follows this structure:

```
<type>[optional scope][optional !]: <description>

[optional body]

[optional footer(s)]
```

Here is a labeled breakdown:

```
feat(auth)!: add OAuth2 login support
│    │    │   │
│    │    │   └─► description: short summary in imperative mood
│    │    └─────► !: indicates a breaking change (optional)
│    └──────────► scope: section of the codebase affected (optional)
└───────────────► type: what kind of change this is

Implement Google and GitHub OAuth2 providers with
token refresh support. Deprecate the legacy session-based
authentication flow.
│
└─► body: detailed explanation of the change (optional)

BREAKING CHANGE: the /api/login endpoint now returns a
JWT token instead of a session cookie.
Refs: #482
│
└─► footer(s): metadata like breaking changes, issue refs (optional)
```

| Element     | Required | Description                                                                                |
|-------------|----------|--------------------------------------------------------------------------------------------|
| Type        | Yes      | Describes the nature of the change (e.g., `feat`, `fix`).                                  |
| Scope       | No       | A noun in parentheses identifying the affected area of the codebase.                       |
| `!`         | No       | Placed before the colon to flag a breaking change.                                         |
| Description | Yes      | A short, imperative-mood summary of the change. Do not capitalize. No period at the end.   |
| Body        | No       | Free-form detailed explanation, separated from the description by a blank line.             |
| Footer(s)   | No       | One or more `token: value` pairs for metadata (issue refs, breaking change notes, etc.).   |

---

## Commit Types

| Type       | Description                                                        | SemVer Impact | Example Message                                          |
|------------|--------------------------------------------------------------------|---------------|----------------------------------------------------------|
| `feat`     | Introduces a new feature                                           | MINOR         | `feat: add user profile page`                            |
| `fix`      | Patches a bug                                                      | PATCH         | `fix: resolve null pointer on empty cart`                |
| `docs`     | Documentation-only changes                                         | -             | `docs: add API rate limiting guide`                      |
| `style`    | Code style changes (formatting, semicolons, whitespace)            | -             | `style: run prettier on all components`                  |
| `refactor` | Code restructuring without changing external behavior              | -             | `refactor: extract validation into shared utility`       |
| `perf`     | Performance improvements                                           | PATCH         | `perf: lazy-load dashboard charts`                       |
| `test`     | Adding or updating tests                                           | -             | `test: add integration tests for payment flow`           |
| `build`    | Changes to the build system or external dependencies               | -             | `build: upgrade webpack to v5`                           |
| `ci`       | Changes to CI configuration files and scripts                      | -             | `ci: add Node 20 to GitHub Actions matrix`               |
| `chore`    | Maintenance tasks that do not modify src or test files             | -             | `chore: update .gitignore for IDE files`                 |
| `revert`   | Reverts a previous commit                                          | varies        | `revert: revert "feat: add user profile page"`          |

- `feat` and `fix` are the only two types **required** by the specification.
- The remaining types are widely adopted conventions (based on the [Angular convention](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-format.md)).
- Any type can trigger a MAJOR version bump when paired with a breaking change.

---

## Scope

A **scope** is an optional noun in parentheses placed after the type. It identifies which part of the codebase is affected.

Common scope examples:

| Scope   | Meaning                        |
|---------|--------------------------------|
| `api`   | REST/GraphQL API layer         |
| `auth`  | Authentication/authorization   |
| `ui`    | User interface components      |
| `core`  | Core business logic            |
| `deps`  | Dependency updates             |
| `db`    | Database schema or migrations  |
| `router`| Routing logic                  |
| `config`| Configuration files            |
| `i18n`  | Internationalization           |
| `a11y`  | Accessibility                  |

```
feat(auth): add two-factor authentication
fix(api): return 404 instead of 500 for missing resources
docs(readme): add contributing guidelines
build(deps): bump express from 4.18 to 4.19
ci(docker): cache node_modules layer in Dockerfile
```

- Scopes should be agreed upon by the team and kept consistent.
- They can be enforced via tooling (see [Tools](#tools) below).

---

## Breaking Changes

A breaking change introduces an incompatible API or behavior change. There are **two ways** to indicate one (they can be combined):

### 1. Using `!` after the type/scope

```
feat(api)!: change authentication to use Bearer tokens
```

### 2. Using a `BREAKING CHANGE` footer

```
feat(api): change authentication to use Bearer tokens

BREAKING CHANGE: the X-Auth-Token header is no longer accepted.
Use the standard Authorization: Bearer <token> header instead.
```

### Combined (recommended for clarity)

```
feat(api)!: change authentication to use Bearer tokens

BREAKING CHANGE: the X-Auth-Token header is no longer accepted.
Use the standard Authorization: Bearer <token> header instead.
```

- Any commit type can include a breaking change, not just `feat` or `fix`.
- A breaking change always triggers a **MAJOR** version bump (in SemVer).

---

## Multi-line Commit Messages

The **body** and **footer** allow you to provide context beyond the short description.

### Rules

- The body must be separated from the description by **one blank line**.
- Each footer must be separated from the body (or previous footer) by **one blank line**.
- Footer tokens use `token: value` or `token #value` format.
- `BREAKING CHANGE` must be uppercase and can be followed by a colon and a space.

### Example

```
fix(auth): prevent session fixation on login

The server was reusing the existing session ID after
authentication, allowing an attacker to fixate a known
session ID before the victim logs in.

Generate a new session ID after successful authentication
and invalidate the old one.

BREAKING CHANGE: existing sessions are invalidated on deploy.
Reviewed-by: Alice <alice@example.com>
Refs: #1024, #1030
```

---

## Real-world Examples

```bash
# New feature
git commit -m "feat: add dark mode toggle to settings page"

# Bug fix with scope
git commit -m "fix(cart): correct quantity calculation on item removal"

# Documentation update
git commit -m "docs: add environment variable reference to README"

# Code style cleanup
git commit -m "style: enforce consistent import ordering"

# Refactor without behavior change
git commit -m "refactor(auth): replace callback chains with async/await"

# Performance improvement
git commit -m "perf(images): convert hero images to WebP format"

# Adding tests
git commit -m "test(api): add edge-case tests for rate limiter"

# Build system change
git commit -m "build: migrate from CRA to Vite"

# CI pipeline update
git commit -m "ci: add automated lighthouse audit to PR checks"

# Chore / maintenance
git commit -m "chore: remove unused environment variables"

# Revert a previous commit
git commit -m 'revert: revert "feat: add dark mode toggle"'

# Breaking change with body
git commit -m "feat(api)!: return paginated responses by default

All list endpoints now return paginated results with a
default page size of 25. Clients must handle the new
pagination envelope.

BREAKING CHANGE: list endpoints return { data, meta }
instead of a plain array."

# Dependency update
git commit -m "build(deps): bump next from 14.1 to 15.0"

# Fix referencing an issue
git commit -m "fix(upload): handle zero-byte file uploads gracefully

Refs: #2847"
```

---

## Benefits

- **Automated changelogs** -- Tools can categorize commits by type and generate human-readable changelogs automatically.
- **Semantic versioning** -- Commit types map directly to SemVer bumps: `fix` = PATCH, `feat` = MINOR, `BREAKING CHANGE` = MAJOR.
- **Readable git history** -- A consistent format makes `git log` scannable at a glance.
- **Team alignment** -- Shared conventions reduce bike-shedding over commit message style.
- **CI/CD integration** -- Automated pipelines can trigger releases, deployments, or notifications based on commit types.
- **Easier code review** -- Reviewers can quickly gauge the scope and risk of a change from its commit message.

---

## Tools

| Tool               | Purpose                                               | Link                                                            |
|--------------------|-------------------------------------------------------|-----------------------------------------------------------------|
| **commitlint**     | Lint commit messages against conventional commit rules | [commitlint.js.org](https://commitlint.js.org/)                |
| **commitizen**     | Interactive CLI prompt to compose conforming messages  | [commitizen-tools](http://commitizen-tools.github.io/commitizen/) |
| **husky**          | Git hooks manager (run commitlint on `commit-msg`)    | [typicode.github.io/husky](https://typicode.github.io/husky/)  |
| **release-please** | Automated releases and changelogs (by Google)         | [github.com/googleapis/release-please](https://github.com/googleapis/release-please) |
| **standard-version** | Automate versioning and changelog generation        | [github.com/conventional-changelog/standard-version](https://github.com/conventional-changelog/standard-version) |
| **semantic-release** | Fully automated version management and publishing  | [semantic-release.gitbook.io](https://semantic-release.gitbook.io/) |

### Quick setup: commitlint + husky

```bash
# Install dependencies
npm install -D @commitlint/{cli,config-conventional} husky

# Create commitlint config
echo "export default { extends: ['@commitlint/config-conventional'] };" \
  > commitlint.config.mjs

# Initialize husky
npx husky init

# Add the commit-msg hook
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

### Quick setup: commitizen

```bash
# Install commitizen globally
npm install -g commitizen

# Initialize your repo with the conventional changelog adapter
commitizen init cz-conventional-changelog --save-dev --save-exact

# Now use `git cz` or `cz` instead of `git commit`
```

---

## Reference

- [Conventional Commits Specification v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
- [Angular Commit Message Format](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-format.md)
- [Semantic Versioning 2.0.0](https://semver.org/)
