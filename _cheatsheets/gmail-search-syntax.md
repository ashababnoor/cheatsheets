---
title: "Gmail Search Syntax"
description: "Gmail search operators and syntax — filter by sender, date, attachments, labels, and advanced search combinations."
category: "Search"
logo: "gmail"
---
# Gmail Search Syntax Cheatsheet

A comprehensive reference for all Gmail search operators, combining techniques, and practical examples.

## Sender & Recipient Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `from:` | Emails from a specific sender | `from:john@example.com` |
| `to:` | Emails sent to a specific recipient | `to:jane@example.com` |
| `cc:` | Emails where a specific address was CC'd | `cc:boss@example.com` |
| `bcc:` | Emails where a specific address was BCC'd | `bcc:hr@example.com` |
| `deliveredto:` | Emails delivered to a specific address | `deliveredto:me@example.com` |
| `list:` | Messages from a mailing list | `list:info@newsletter.example.com` |

## Subject & Content Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `subject:` | Words in the subject line | `subject:meeting agenda` |
| `"phrase"` | Exact phrase match | `"quarterly report"` |
| `AROUND` | Words near each other (within n words) | `budget AROUND 5 approval` |

## Label & Category Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `label:` | Emails with a specific label | `label:work` |
| `category:primary` | Primary inbox category | `category:primary` |
| `category:social` | Social category | `category:social` |
| `category:promotions` | Promotions category | `category:promotions` |
| `category:updates` | Updates category | `category:updates` |
| `category:forums` | Forums category | `category:forums` |

## Attachment Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `has:attachment` | Emails with any attachment | `has:attachment` |
| `has:drive` | Emails with Google Drive attachments | `has:drive` |
| `has:document` | Emails with Google Docs attachments | `has:document` |
| `has:spreadsheet` | Emails with Google Sheets attachments | `has:spreadsheet` |
| `has:presentation` | Emails with Google Slides attachments | `has:presentation` |
| `has:youtube` | Emails with YouTube links | `has:youtube` |
| `filename:` | Emails with a specific file type or name | `filename:pdf` |
| `filename:` | Specific filename | `filename:report.xlsx` |

## Location Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `in:inbox` | Emails in the inbox | `in:inbox` |
| `in:sent` | Emails in sent mail | `in:sent` |
| `in:drafts` | Emails in drafts | `in:drafts` |
| `in:trash` | Emails in trash | `in:trash` |
| `in:spam` | Emails in spam | `in:spam` |
| `in:anywhere` | Search all mail including spam and trash | `in:anywhere invoice` |
| `in:chats` | Search chat messages | `in:chats` |

## Status Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `is:read` | Read emails | `is:read` |
| `is:unread` | Unread emails | `is:unread` |
| `is:starred` | Starred emails | `is:starred` |
| `is:important` | Emails marked as important | `is:important` |
| `is:snoozed` | Snoozed emails | `is:snoozed` |
| `is:muted` | Muted conversations | `is:muted` |
| `has:userlabels` | Emails with user-created labels | `has:userlabels` |
| `has:nouserlabels` | Emails without user-created labels | `has:nouserlabels` |
| `has:yellow-star` | Emails with a specific star type | `has:yellow-star` |

## Date Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `before:` | Emails before a date | `before:2024/06/01` |
| `after:` | Emails after a date | `after:2024/01/01` |
| `older_than:` | Emails older than a time period | `older_than:1y` |
| `newer_than:` | Emails newer than a time period | `newer_than:2d` |

Time period units for `older_than:` and `newer_than:`:

| Unit | Meaning | Example |
|------|---------|---------|
| `d` | Days | `newer_than:7d` |
| `m` | Months | `older_than:3m` |
| `y` | Years | `older_than:1y` |

## Size Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `size:` | Emails larger than a size in bytes | `size:5000000` |
| `larger:` | Emails larger than a specified size | `larger:10M` |
| `smaller:` | Emails smaller than a specified size | `smaller:1M` |

Size units: `K` (kilobytes), `M` (megabytes).

## Boolean & Grouping Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `OR` | Match either condition | `from:alice OR from:bob` |
| `AND` | Match both conditions (implicit default) | `from:alice AND subject:report` |
| `-` | Exclude a term or operator | `-category:promotions` |
| `""` | Exact phrase match | `"board meeting minutes"` |
| `()` | Group operators together | `(from:alice OR from:bob) subject:report` |

## Message ID Operator

| Operator | Description | Example |
|----------|-------------|---------|
| `rfc822msgid:` | Find by unique message ID | `rfc822msgid:<abc123@mail.example.com>` |

## Example Searches

Practical combined queries for common scenarios:

| Goal | Query |
|------|-------|
| Large attachments from last year | `has:attachment larger:5M after:2025/01/01 before:2026/01/01` |
| Unread emails from your boss | `from:boss@company.com is:unread` |
| PDFs in any folder | `in:anywhere filename:pdf` |
| Newsletters to clean up | `category:promotions older_than:3m` |
| Find a specific invoice | `subject:invoice "INV-2024" has:attachment` |
| Emails between two people about a project | `(from:alice OR to:alice) (from:bob OR to:bob) subject:project` |
| Starred emails with Drive links | `is:starred has:drive` |
| Recent large emails | `newer_than:7d larger:2M` |
| Exclude mailing lists from search | `budget report -list:` |
| Sent emails with attachments this month | `in:sent has:attachment newer_than:30d` |
| Exact phrase in subject | `subject:"Q4 financial review"` |
| Emails near a keyword pair | `deadline AROUND 3 extension` |
| All unread important mail | `is:important is:unread` |
| Chat messages with a contact | `in:chats from:colleague@example.com` |
| Emails delivered to an alias | `deliveredto:alias@example.com -category:promotions` |
