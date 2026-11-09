---
title: "GitHub Search Syntax"
subtitle: "Qualifiers for finding repositories, code, issues, pull requests, users, and commits."
description: "GitHub search syntax cheatsheet — qualifiers for repositories, code, issues, pull requests, commits, and users, plus operators, sorting, and examples."
category: "Search"
logo: "github"
---

## How GitHub Search Works

Type words, then narrow with **qualifiers** written as `key:value`. Combine as many as you like.

```plaintext
is:issue is:open label:bug author:octocat sort:updated-desc
└──┬───┘ └──┬──┘ └───┬───┘ └─────┬──────┘ └───────┬───────┘
 type    state    label       author            sort order
```

| Where | What it searches |
|-------|------------------|
| Top search bar | Repositories, code, issues, PRs, users, and more |
| Issues and PRs tab | Only that repository, with the filter box |
| `github.com/search?q=...&type=code` | Direct URL form |

## Operators

| Syntax | Meaning | Example |
|--------|---------|---------|
| `a b` | Both words (AND) | `login timeout` |
| `a OR b` | Either word | `bug OR defect` |
| `NOT a` or `-a` | Exclude | `-label:wontfix` |
| `"exact phrase"` | Exact match | `"null pointer"` |
| `( )` | Group terms | `(bug OR crash) AND is:open` |
| `*` | Wildcard inside a qualifier | `user:octo*` |
| `\` | Escape a quote | `"say \"hi\""` |

## Comparison and Range Qualifiers

Numeric and date qualifiers accept comparisons.

| Syntax | Meaning |
|--------|---------|
| `stars:>100` | More than 100 |
| `stars:>=100` | 100 or more |
| `stars:<10` | Fewer than 10 |
| `stars:10..50` | Between 10 and 50 |
| `stars:100..*` | 100 or more |
| `created:>2024-01-01` | After a date |
| `pushed:2024-01-01..2024-06-30` | Within a range |
| `created:>=2024-05-01T10:00:00Z` | Date and time |
| `updated:>@today-7d` | Relative dates (`@today`) |

## Repository Search

| Qualifier | Example | Finds |
|-----------|---------|-------|
| `in:name` `in:description` `in:readme` | `cheatsheet in:name,description` | Where the words appear |
| `user:` / `org:` | `org:github` | Repos owned by a user or org |
| `language:` | `language:go` | Primary language |
| `topic:` | `topic:kubernetes` | Repos with a topic |
| `topics:` | `topics:>5` | Number of topics |
| `stars:` | `stars:>1000` | Star count |
| `forks:` | `forks:50..100` | Fork count |
| `size:` | `size:<1000` | Size in KB |
| `pushed:` / `created:` | `pushed:>2025-01-01` | Dates |
| `license:` | `license:mit` | License key |
| `is:public` / `is:private` | `is:private` | Visibility |
| `archived:` | `archived:false` | Archived state |
| `fork:` | `fork:only` | `true` includes, `only` shows forks only |
| `mirror:` | `mirror:false` | Mirrors |
| `template:` | `template:true` | Template repos |
| `good-first-issues:` | `good-first-issues:>5` | Beginner-friendly repos |
| `help-wanted-issues:` | `help-wanted-issues:>5` | Repos wanting help |

```plaintext
language:python topic:machine-learning stars:>5000 pushed:>2025-01-01 archived:false
```

## Code Search

| Qualifier | Example | Finds |
|-----------|---------|-------|
| `repo:` | `repo:owner/name` | One repository |
| `org:` / `user:` | `org:github` | All repos of an owner |
| `language:` | `language:python` | Files in a language |
| `path:` | `path:src/ **/*.test.js` | File path (glob-style) |
| `path:/regex/` | `path:/\.github\/workflows\//` | Path by regex |
| `filename:` | `filename:Dockerfile` | Exact file name |
| `extension:` | `extension:yml` | File extension |
| `symbol:` | `symbol:handleRequest` | Function or class definitions |
| `content:` | `content:TODO` | Match file contents only |
| `is:fork` | `NOT is:fork` | Include or skip forks |
| `/regex/` | `/api[_-]?key/` | Regular expression in code |

```plaintext
repo:facebook/react language:javascript path:packages/ useEffect
org:myorg filename:.env NOT path:examples
language:yaml path:.github/workflows "actions/checkout@v3"
/TODO\(\w+\)/ language:go
```

Code search covers the default branch only, and large or generated files may be skipped.

## Issue and Pull Request Search

| Qualifier | Example | Finds |
|-----------|---------|-------|
| `is:issue` / `is:pr` | `is:pr` | Type |
| `is:open` / `is:closed` | `is:open` | State |
| `is:merged` / `is:unmerged` | `is:merged` | PR merge state |
| `is:draft` | `is:draft` | Draft PRs |
| `state:` | `state:open` | State (alternative) |
| `author:` | `author:octocat` | Who opened it |
| `assignee:` | `assignee:@me` | Assigned to |
| `mentions:` | `mentions:octocat` | Mentions a user |
| `commenter:` | `commenter:octocat` | Commented on |
| `involves:` | `involves:@me` | Author, assignee, mention, or commenter |
| `team:` | `team:org/team` | Mentions a team |
| `label:` | `label:"good first issue"` | Label (quote spaces) |
| `no:` | `no:label` `no:assignee` | Missing a field |
| `milestone:` | `milestone:"v2.0"` | Milestone |
| `project:` | `project:org/1` | Project |
| `repo:` | `repo:owner/name` | Repository |
| `in:title` `in:body` `in:comments` | `crash in:title` | Where text appears |
| `comments:` | `comments:>10` | Comment count |
| `reactions:` | `reactions:>5` | Reaction count |
| `interactions:` | `interactions:>10` | Reactions plus comments |
| `created:` `updated:` `closed:` `merged:` | `closed:>2025-01-01` | Dates |
| `linked:pr` / `linked:issue` | `is:issue linked:pr` | Linked work |

### Pull Request Only

| Qualifier | Example | Finds |
|-----------|---------|-------|
| `review:` | `review:approved` `review:required` `review:changes_requested` | Review state |
| `review-requested:` | `review-requested:@me` | Waiting for your review |
| `reviewed-by:` | `reviewed-by:octocat` | Reviewed by someone |
| `status:` | `status:success` `status:failure` `status:pending` | CI status |
| `base:` / `head:` | `base:main` `head:feature/x` | Branches |
| `draft:` | `draft:false` | Draft state |
| `team-review-requested:` | `team-review-requested:org/team` | Team review |

## Commit Search

| Qualifier | Example | Finds |
|-----------|---------|-------|
| `author:` | `author:octocat` | Commit author |
| `committer:` | `committer:octocat` | Committer |
| `author-date:` / `committer-date:` | `author-date:>2025-01-01` | Dates |
| `hash:` | `hash:a1b2c3d` | Commit SHA |
| `merge:` | `merge:false` | Exclude merge commits |
| `repo:` | `repo:owner/name` | Repository |

## User and Organization Search

| Qualifier | Example | Finds |
|-----------|---------|-------|
| `type:user` / `type:org` | `type:user` | Account type |
| `in:login` `in:name` `in:email` | `ada in:name` | Where the text appears |
| `location:` | `location:berlin` | Location |
| `language:` | `language:rust` | Common language |
| `repos:` | `repos:>50` | Repo count |
| `followers:` | `followers:>1000` | Followers |
| `created:` | `created:>2020-01-01` | Join date |
| `sponsorable:true` | | Accepting sponsors |

## Sorting

Add `sort:` to the query, or use the sort menu.

| Sort | Meaning |
|------|---------|
| `sort:stars-desc` | Most starred (repos) |
| `sort:forks` | Most forked |
| `sort:updated-desc` | Recently updated |
| `sort:created-asc` | Oldest first |
| `sort:comments-desc` | Most commented (issues) |
| `sort:reactions-+1-desc` | Most 👍 reactions |
| `sort:interactions-desc` | Most active |

## Handy @me and Date Shortcuts

| Shortcut | Meaning |
|----------|---------|
| `@me` | You (for `author:`, `assignee:`, `involves:`, `review-requested:`) |
| `@today` | Today's date, with math: `@today-1w`, `@today-30d` |
| `-` before a qualifier | Negate it: `-label:bug` |

## Search Recipes

```plaintext
is:pr is:open review-requested:@me                      # PRs waiting for my review
is:pr is:open author:@me draft:false                    # my open PRs
is:issue is:open assignee:@me sort:updated-desc         # my open issues
is:issue is:open no:assignee label:"good first issue"   # beginner-friendly, unclaimed
is:pr is:merged merged:>@today-7d                       # merged this week
is:pr is:open status:failure                            # PRs with failing checks
is:issue is:closed linked:pr                            # closed through a PR
stars:>1000 language:rust pushed:>@today-30d            # active popular Rust repos
filename:package.json "react": org:myorg                # who uses React in the org
```

## Tips

- Quote phrases and any value with spaces: `label:"help wanted"`.
- Search is case-insensitive.
- Results are capped (code search shows a limited set), so narrow with `repo:`, `org:`, or `path:`.
- You can save useful queries as bookmarks, or use them in the GitHub CLI: `gh search issues "is:open label:bug"` and `gh search repos "topic:cli stars:>500"`.
- Do not paste secrets into search. Use secret scanning for leaked keys.
