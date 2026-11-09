---
title: "Google Search Syntax"
subtitle: "Operators for exact match, site and file-type filters, date ranges, and advanced searches."
description: "Google search operators and advanced syntax — site search, filetype filters, exact match, and boolean operators."
category: "Search"
logo: "google"
---

## Basic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `""` | Exact phrase match | `"machine learning"` |
| `-` | Exclude a term from results | `python programming -snake` |
| `OR` | Match either term | `python OR java tutorial` |
| `AND` | Require both terms (default behavior) | `python AND flask` |
| `*` | Wildcard, matches any word | `"the * of the rings"` |
| `..` | Number range | `camera $200..$500` |
| `()` | Group operators | `(python OR java) tutorial` |

## Site & URL Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `site:` | Limit results to a specific site or domain | `site:github.com python flask` |
| `inurl:` | Find pages with a keyword in the URL | `inurl:admin login` |
| `allinurl:` | All keywords must appear in the URL | `allinurl:python flask tutorial` |
| `related:` | Find sites similar to a given domain | `related:nytimes.com` |
| `cache:` | View Google's cached version of a page | `cache:example.com` |

## Title & Text Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `intitle:` | Find pages with a word in the title | `intitle:python tutorial` |
| `allintitle:` | All keywords must appear in the title | `allintitle:python flask api` |
| `intext:` | Find pages with a word in the body text | `intext:configuration guide` |
| `allintext:` | All keywords must appear in the body text | `allintext:docker compose setup` |

## File & Content Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `filetype:` | Search for specific file types | `filetype:pdf python handbook` |
| `ext:` | Alias for `filetype:` | `ext:csv sales data` |
| `imagesize:` | Find images of a specific size (WxH) | `imagesize:1920x1080 wallpaper` |

## Date Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `before:` | Results published before a date | `before:2024-01-01 python tutorial` |
| `after:` | Results published after a date | `after:2025-01-01 AI news` |

Date format: `YYYY-MM-DD`.

## Proximity Operator

| Operator | Description | Example |
|----------|-------------|---------|
| `AROUND(n)` | Two terms must appear within n words of each other | `python AROUND(3) tutorial` |

## Specialized Searches

| Operator | Description | Example |
|----------|-------------|---------|
| `define:` | Get a definition of a word | `define:ephemeral` |
| `weather:` | Get weather for a location | `weather:Tokyo` |
| `stocks:` | Get stock information | `stocks:GOOGL` |
| `map:` | Show map results for a location | `map:Central Park` |
| `movie:` | Find movie showtimes and info | `movie:Inception` |
| `source:` | Search within a specific news source (Google News) | `source:reuters AI regulation` |
| `in` | Unit and currency conversions | `100 USD in EUR` |

## Google Search Tips

| Tip | Example | Description |
|-----|---------|-------------|
| Calculator | `sqrt(144) + 15 * 2` | Perform math directly in search |
| Currency conversion | `100 USD to EUR` | Convert between currencies |
| Unit conversion | `50 meters to feet` | Convert between units |
| Timer | `timer 10 minutes` | Set a countdown timer |
| Color picker | `color picker` | Opens an interactive color picker |
| Sunrise/Sunset | `sunrise Tokyo` | Get sunrise or sunset times |
| Translate | `translate hello to Japanese` | Quick translations |
| Track packages | Paste a tracking number | Shows delivery status |

## Example Searches

Practical combined queries for common scenarios:

| Goal | Query |
|------|-------|
| Find PDF cheatsheets on a topic | `filetype:pdf "git cheatsheet"` |
| Research a topic on a specific site | `site:stackoverflow.com python async await` |
| Find login pages (security testing) | `intitle:"login" inurl:admin site:example.com` |
| Exclude Pinterest from image searches | `landscape wallpaper -site:pinterest.com` |
| Find open directory listings | `intitle:"index of" filetype:mp4` |
| Search for recent news from a source | `source:bbc "climate change" after:2025-06-01` |
| Find exact error messages | `"TypeError: cannot unpack non-sequence"` |
| Compare competing products | `(react OR vue OR angular) "state management" site:dev.to` |
| Find CSV datasets | `filetype:csv "population data" after:2024-01-01` |
| Wildcard phrase search | `"how to * a REST API in python"` |
| Proximity search for related concepts | `kubernetes AROUND(5) "service mesh"` |
| Find high-res images of a subject | `imagesize:3840x2160 "northern lights"` |
| Number range for product pricing | `"mechanical keyboard" $50..$150` |
| Find alternatives to a website | `related:notion.so` |
| Exclude results from forums | `python decorators -site:reddit.com -site:quora.com` |
