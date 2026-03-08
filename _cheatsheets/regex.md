---
title: "Regular Expressions"
description: "Regex cheatsheet — character classes, quantifiers, anchors, groups, lookaheads, and common patterns."
category: "Web & Formats"
icon: "🔍"
---
# Regular Expressions (Regex) Cheatsheet

A comprehensive reference for regular expression syntax, flags, and common patterns.

---

## Character Classes

| Pattern | Description | Example |
|---------|-------------|---------|
| `.` | Any character except newline | `a.c` matches `abc`, `a1c` |
| `\d` | Any digit `[0-9]` | `\d{3}` matches `123` |
| `\D` | Any non-digit `[^0-9]` | `\D+` matches `abc` |
| `\w` | Any word character `[a-zA-Z0-9_]` | `\w+` matches `hello_1` |
| `\W` | Any non-word character `[^a-zA-Z0-9_]` | `\W` matches `@` |
| `\s` | Any whitespace (space, tab, newline) | `\s+` matches `   ` |
| `\S` | Any non-whitespace character | `\S+` matches `hello` |
| `[abc]` | Any one of `a`, `b`, or `c` | `[aeiou]` matches `e` |
| `[^abc]` | Any character except `a`, `b`, or `c` | `[^0-9]` matches `x` |
| `[a-z]` | Any character in range `a` to `z` | `[a-f]` matches `c` |
| `[A-Z]` | Any uppercase letter | `[A-Z]` matches `G` |
| `[0-9]` | Any digit (same as `\d`) | `[0-9]+` matches `42` |
| `[a-zA-Z0-9]` | Any alphanumeric character | `[a-zA-Z0-9]+` matches `Test1` |

---

## Quantifiers

| Pattern | Description | Example |
|---------|-------------|---------|
| `*` | 0 or more (greedy) | `ab*c` matches `ac`, `abc`, `abbc` |
| `+` | 1 or more (greedy) | `ab+c` matches `abc`, `abbc` but not `ac` |
| `?` | 0 or 1 (optional) | `colou?r` matches `color`, `colour` |
| `{n}` | Exactly `n` times | `\d{4}` matches `2026` |
| `{n,}` | `n` or more times | `\d{2,}` matches `12`, `123`, `1234` |
| `{n,m}` | Between `n` and `m` times | `\d{2,4}` matches `12`, `123`, `1234` |

### Greedy vs Lazy

By default, quantifiers are **greedy** (match as much as possible). Append `?` to make them **lazy** (match as little as possible).

| Greedy | Lazy | Behavior |
|--------|------|----------|
| `*` | `*?` | 0 or more, prefer fewer |
| `+` | `+?` | 1 or more, prefer fewer |
| `?` | `??` | 0 or 1, prefer 0 |
| `{n,m}` | `{n,m}?` | Between n and m, prefer fewer |

```
Input:   <div>hello</div>
Greedy:  <.*>   matches  <div>hello</div>
Lazy:    <.*?>  matches  <div>
```

---

## Anchors & Boundaries

| Pattern | Description | Example |
|---------|-------------|---------|
| `^` | Start of string (or line in multiline mode) | `^Hello` matches `Hello world` |
| `$` | End of string (or line in multiline mode) | `world$` matches `Hello world` |
| `\b` | Word boundary | `\bcat\b` matches `cat` but not `cats` or `concatenate` |
| `\B` | Non-word boundary | `\Bcat\B` matches `concatenate` but not `cat` |
| `\A` | Start of string (ignores multiline flag) | `\AHello` matches only at absolute start |
| `\Z` | End of string (ignores multiline flag) | `end\Z` matches only at absolute end |

---

## Groups & Backreferences

| Pattern | Description | Example |
|---------|-------------|---------|
| `(abc)` | Capturing group | `(ha)+` matches `haha` and captures `ha` |
| `(?:abc)` | Non-capturing group | `(?:ha)+` matches `haha` without capturing |
| `(?P<name>...)` | Named group (Python) | `(?P<year>\d{4})` captures as `year` |
| `(?<name>...)` | Named group (JS/PCRE) | `(?<year>\d{4})` captures as `year` |
| `\1` | Backreference to group 1 | `(a|b)\1` matches `aa` or `bb` but not `ab` |
| `\k<name>` | Backreference to named group | `(?<w>\w+)\s\k<w>` matches `the the` |

### Group Examples

```
Pattern:  (\d{3})-(\d{4})
Input:    555-1234
Group 1:  555
Group 2:  1234

Pattern:  (?P<area>\d{3})-(?P<num>\d{4})
Input:    555-1234
area:     555
num:      1234
```

---

## Lookahead & Lookbehind

Lookarounds assert that a pattern exists (or does not exist) before or after the current position **without consuming characters**.

| Pattern | Name | Description | Example |
|---------|------|-------------|---------|
| `(?=...)` | Positive lookahead | Asserts what follows matches | `\d+(?= dollars)` matches `100` in `100 dollars` |
| `(?!...)` | Negative lookahead | Asserts what follows does not match | `\d+(?! dollars)` matches `100` in `100 euros` |
| `(?<=...)` | Positive lookbehind | Asserts what precedes matches | `(?<=\$)\d+` matches `50` in `$50` |
| `(?<!...)` | Negative lookbehind | Asserts what precedes does not match | `(?<!\$)\d+` matches `50` in `EUR50` |

### Lookaround Examples

```
# Password must contain at least one digit and one uppercase letter
(?=.*\d)(?=.*[A-Z]).{8,}

# Match a word NOT preceded by "Mr. "
(?<!Mr\. )\b[A-Z][a-z]+\b

# Match "foo" only if NOT followed by "bar"
foo(?!bar)
```

---

## Alternation & OR

The pipe `|` acts as a boolean OR, matching the expression before or after it.

| Pattern | Description | Example |
|---------|-------------|---------|
| `a\|b` | Matches `a` or `b` | `cat\|dog` matches `cat` or `dog` |
| `(a\|b)c` | Group alternation | `(re\|un)do` matches `redo` or `undo` |

```
Pattern:  (Mon|Tue|Wed|Thu|Fri|Sat|Sun)day
Matches:  Monday, Tuesday, ..., Sunday
```

---

## Common Flags

| Flag | Name | Description |
|------|------|-------------|
| `g` | Global | Match all occurrences, not just the first |
| `i` | Case-insensitive | `Hello` matches `hello`, `HELLO`, `hElLo` |
| `m` | Multiline | `^` and `$` match start/end of each line |
| `s` | Dotall / Single-line | `.` matches newline characters as well |
| `u` | Unicode | Enable full Unicode matching |
| `x` | Extended / Verbose | Ignore whitespace and allow `#` comments in pattern |

### Flag Usage

```
# JavaScript
/pattern/gi

# Python
re.compile(r"pattern", re.IGNORECASE | re.MULTILINE)

# Inline flags (most engines)
(?i)pattern
(?im)^start
```

---

## Escaping Special Characters

These characters have special meaning in regex and must be escaped with `\` to match literally:

```
.  ^  $  *  +  ?  {  }  [  ]  (  )  |  \  /
```

| Literal Match | Escaped Pattern |
|---------------|-----------------|
| `.` | `\.` |
| `*` | `\*` |
| `+` | `\+` |
| `?` | `\?` |
| `(` `)` | `\(` `\)` |
| `[` `]` | `\[` `\]` |
| `{` `}` | `\{` `\}` |
| `\|` | `\\|` |
| `\` | `\\` |
| `^` | `\^` |
| `$` | `\$` |
| `/` | `\/` |

---

## Common Patterns

### Email Address
```
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### URL
```
^https?:\/\/(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$
```

### IPv4 Address
```
^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$
```

### Phone Number (US, various formats)
```
^(\+1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$
```

### Date (YYYY-MM-DD)
```
^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
```

### Date (DD/MM/YYYY)
```
^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$
```

### Hex Color Code
```
^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$
```

### Strong Password (min 8 chars, uppercase, lowercase, digit, special character)
```
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$
```

### Username (alphanumeric, underscores, hyphens, 3-16 chars)
```
^[a-zA-Z0-9_-]{3,16}$
```

### File Extension
```
^.+\.(jpg|jpeg|png|gif|pdf|doc|docx)$
```

### HTML Tag
```
<\/?[a-zA-Z][a-zA-Z0-9]*(\s[^>]*)?>
```

### Credit Card Number (Visa, MasterCard, Amex, Discover)
```
^(?:4\d{12}(?:\d{3})?|5[1-5]\d{14}|3[47]\d{13}|6(?:011|5\d{2})\d{12})$
```

### UUID (v4)
```
^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
```
