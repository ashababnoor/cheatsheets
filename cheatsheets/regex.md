# Regular Expressions (Regex) Cheatsheet

This cheatsheet provides a list of common regular expressions patterns for specific use-cases.

## Basic Patterns

| Pattern | Description |
|---------|-------------|
| `.` | Matches any character except newline |
| `*` | Matches 0 or more repetitions of the preceding character |
| `+` | Matches 1 or more repetitions of the preceding character |
| `?` | Matches 0 or 1 repetitions of the preceding character |
| `^` | Matches the start of the string |
| `$` | Matches the end of the string |
| `\d` | Matches any decimal digit; equivalent to `[0-9]` |
| `\D` | Matches any non-digit character; equivalent to `[^0-9]` |
| `\s` | Matches any whitespace character |
| `\S` | Matches any non-whitespace character |
| `\w` | Matches any alphanumeric character; equivalent to `[a-zA-Z0-9_]` |
| `\W` | Matches any non-alphanumeric character; equivalent to `[^a-zA-Z0-9_]` |
| `[abc]` | Matches any of the characters `a`, `b`, or `c` |
| `(abc|def)` | Matches either `abc` or `def` |

## Common Use-Cases

| Pattern | Description |
|---------|-------------|
| `^\d{10}$` | Matches a 10-digit phone number |
| `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$` | Matches an email address |
| `^(http\|https)://[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$` | Matches a URL |
| `^\d{5}$` | Matches a 5-digit ZIP code |
| `^[a-zA-Z0-9]{8,}$` | Matches a password with at least 8 alphanumeric characters |
| `^\d{2}/\d{2}/\d{4}$` | Matches a date in MM/DD/YYYY format |
| `^[a-zA-Z]{2,}$` | Matches a name with only alphabetic characters |