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

### Match 10-digit phone number
```
^\d{10}$
```

### Match an email address
```
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### Match a URL
```
^(http\|https)://[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### Match a 5-digit ZIP code
```
^\d{5}$
```

### Match password with at least 8 alphaneumeric characters
```
^[a-zA-Z0-9]{8,}$
```

### Match a date in DD/MM/YYYY format
```
^\d{2}/\d{2}/\d{4}$
```

### Match a name with only alphabetic characters 
```
^[a-zA-Z]{2,}$
```
