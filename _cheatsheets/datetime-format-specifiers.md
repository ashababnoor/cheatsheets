---
title: "Datetime Format Specifiers"
description: "Reference for datetime format specifiers across languages — strftime codes, ISO 8601, and common date/time patterns."
category: "Web & Formats"
icon: "calendar"
---
# Datetime Format Specifiers Cheatsheet

A comprehensive reference for date and time formatting across Python, JavaScript, Java, C#, Go, and the ISO 8601 standard.

## Python (`strftime` / `strptime`)

Used with `datetime.strftime()`, `datetime.strptime()`, and the `date` shell command.

| Specifier | Example | Description |
|-----------|---------|-------------|
| `%a` | Mon | Abbreviated weekday name |
| `%A` | Monday | Full weekday name |
| `%w` | 1 | Weekday as number (0 = Sunday, 6 = Saturday) |
| `%d` | 05 | Day of month, zero-padded |
| `%-d` | 5 | Day of month, no padding (platform-dependent) |
| `%b` | Jan | Abbreviated month name |
| `%B` | January | Full month name |
| `%m` | 01 | Month as zero-padded number |
| `%-m` | 1 | Month, no padding (platform-dependent) |
| `%y` | 21 | Year without century, zero-padded |
| `%Y` | 2021 | Year with century |
| `%H` | 13 | Hour (24-hour), zero-padded |
| `%I` | 01 | Hour (12-hour), zero-padded |
| `%p` | PM | AM or PM |
| `%M` | 30 | Minute, zero-padded |
| `%S` | 45 | Second, zero-padded |
| `%f` | 000123 | Microsecond, zero-padded to 6 digits |
| `%z` | +0530 | UTC offset (+HHMM or -HHMM) |
| `%Z` | EST | Time zone name |
| `%j` | 365 | Day of year, zero-padded |
| `%U` | 52 | Week number (Sunday as first day) |
| `%W` | 52 | Week number (Monday as first day) |
| `%G` | 2021 | ISO 8601 year |
| `%u` | 1 | ISO 8601 weekday (1 = Monday, 7 = Sunday) |
| `%V` | 52 | ISO 8601 week number |
| `%c` | Mon Sep 4 09:50:06 2017 | Locale date and time |
| `%x` | 09/04/17 | Locale date |
| `%X` | 09:50:06 | Locale time |
| `%%` | % | Literal percent sign |

These specifiers also work in C, C++ (`strftime`), Ruby (`Time#strftime`), PHP (`date()`), and shell commands (`date +'%Y-%m-%d'`).

## JavaScript

### `Intl.DateTimeFormat` / `toLocaleDateString` Options

```javascript
new Intl.DateTimeFormat('en-US', options).format(date)
// or
date.toLocaleDateString('en-US', options)
```

| Option | Values | Example Output |
|--------|--------|----------------|
| `year` | `"numeric"`, `"2-digit"` | 2024, 24 |
| `month` | `"numeric"`, `"2-digit"`, `"long"`, `"short"`, `"narrow"` | 1, 01, January, Jan, J |
| `day` | `"numeric"`, `"2-digit"` | 5, 05 |
| `weekday` | `"long"`, `"short"`, `"narrow"` | Monday, Mon, M |
| `hour` | `"numeric"`, `"2-digit"` | 3, 03 |
| `minute` | `"numeric"`, `"2-digit"` | 5, 05 |
| `second` | `"numeric"`, `"2-digit"` | 9, 09 |
| `hour12` | `true`, `false` | 3 PM vs 15 |
| `timeZone` | `"UTC"`, `"America/New_York"`, etc. | -- |
| `timeZoneName` | `"long"`, `"short"` | Eastern Standard Time, EST |
| `era` | `"long"`, `"short"`, `"narrow"` | Anno Domini, AD, A |
| `fractionalSecondDigits` | `1`, `2`, `3` | 1, 12, 123 |

### Moment.js / Day.js Format Tokens

| Token | Example | Description |
|-------|---------|-------------|
| `YYYY` | 2024 | 4-digit year |
| `YY` | 24 | 2-digit year |
| `MMMM` | January | Full month name |
| `MMM` | Jan | Abbreviated month name |
| `MM` | 01 | Month, zero-padded |
| `M` | 1 | Month, no padding |
| `DD` | 05 | Day of month, zero-padded |
| `D` | 5 | Day of month, no padding |
| `dddd` | Monday | Full weekday name |
| `ddd` | Mon | Abbreviated weekday name |
| `dd` | Mo | 2-letter weekday |
| `d` | 1 | Day of week (0 = Sunday) |
| `HH` | 13 | Hour (24-hour), zero-padded |
| `H` | 13 | Hour (24-hour), no padding |
| `hh` | 01 | Hour (12-hour), zero-padded |
| `h` | 1 | Hour (12-hour), no padding |
| `mm` | 05 | Minute, zero-padded |
| `m` | 5 | Minute, no padding |
| `ss` | 09 | Second, zero-padded |
| `s` | 9 | Second, no padding |
| `SSS` | 123 | Milliseconds |
| `A` | PM | Uppercase AM/PM |
| `a` | pm | Lowercase am/pm |
| `Z` | +05:30 | UTC offset |
| `ZZ` | +0530 | UTC offset (compact) |
| `X` | 1700000000 | Unix timestamp (seconds) |
| `x` | 1700000000000 | Unix timestamp (milliseconds) |

## Java (`DateTimeFormatter`)

| Pattern | Example | Description |
|---------|---------|-------------|
| `yyyy` | 2024 | 4-digit year |
| `yy` | 24 | 2-digit year |
| `MMMM` | January | Full month name |
| `MMM` | Jan | Abbreviated month name |
| `MM` | 01 | Month, zero-padded |
| `M` | 1 | Month, no padding |
| `dd` | 05 | Day of month, zero-padded |
| `d` | 5 | Day of month, no padding |
| `EEEE` | Monday | Full weekday name |
| `EEE` | Mon | Abbreviated weekday name |
| `HH` | 13 | Hour (24-hour), zero-padded |
| `H` | 13 | Hour (24-hour), no padding |
| `hh` | 01 | Hour (12-hour), zero-padded |
| `h` | 1 | Hour (12-hour), no padding |
| `mm` | 30 | Minute, zero-padded |
| `ss` | 45 | Second, zero-padded |
| `SSS` | 123 | Milliseconds |
| `a` | PM | AM/PM marker |
| `z` | EST | Time zone abbreviation |
| `Z` | +0530 | RFC 822 time zone |
| `XXX` | +05:30 | ISO 8601 time zone |
| `VV` | America/New_York | Time zone ID |
| `G` | AD | Era designator |
| `D` | 189 | Day of year |
| `u` | 1 | Day of week (1 = Monday) |

## C# (.NET `DateTime` Format Strings)

### Standard Format Strings

| Specifier | Name | Example Output |
|-----------|------|----------------|
| `d` | Short date | 1/15/2024 |
| `D` | Long date | Monday, January 15, 2024 |
| `t` | Short time | 3:30 PM |
| `T` | Long time | 3:30:45 PM |
| `f` | Full (short time) | Monday, January 15, 2024 3:30 PM |
| `F` | Full (long time) | Monday, January 15, 2024 3:30:45 PM |
| `g` | General (short time) | 1/15/2024 3:30 PM |
| `G` | General (long time) | 1/15/2024 3:30:45 PM |
| `o` | Round-trip (ISO 8601) | 2024-01-15T15:30:45.0000000 |
| `r` | RFC 1123 | Mon, 15 Jan 2024 15:30:45 GMT |
| `s` | Sortable | 2024-01-15T15:30:45 |
| `u` | Universal sortable | 2024-01-15 15:30:45Z |

### Custom Format Specifiers

| Specifier | Example | Description |
|-----------|---------|-------------|
| `yyyy` | 2024 | 4-digit year |
| `yy` | 24 | 2-digit year |
| `MMMM` | January | Full month name |
| `MMM` | Jan | Abbreviated month name |
| `MM` | 01 | Month, zero-padded |
| `M` | 1 | Month, no padding |
| `dddd` | Monday | Full weekday name |
| `ddd` | Mon | Abbreviated weekday name |
| `dd` | 05 | Day, zero-padded |
| `d` | 5 | Day, no padding |
| `HH` | 15 | Hour (24-hour), zero-padded |
| `H` | 15 | Hour (24-hour), no padding |
| `hh` | 03 | Hour (12-hour), zero-padded |
| `h` | 3 | Hour (12-hour), no padding |
| `mm` | 30 | Minute, zero-padded |
| `ss` | 45 | Second, zero-padded |
| `fff` | 123 | Milliseconds |
| `tt` | PM | AM/PM designator |
| `zzz` | +05:30 | UTC offset with colon |
| `zz` | +05 | UTC offset (hours only) |
| `K` | +05:30 | Time zone info |

## Go (`time.Format`)

Go uses a reference layout based on the reference time `Mon Jan 2 15:04:05 MST 2006` (01/02 03:04:05 PM '06 -0700).

| Layout Value | Description | Example |
|--------------|-------------|---------|
| `2006` | 4-digit year | 2024 |
| `06` | 2-digit year | 24 |
| `January` | Full month name | January |
| `Jan` | Abbreviated month name | Jan |
| `01` | Month, zero-padded | 01 |
| `1` | Month, no padding | 1 |
| `Monday` | Full weekday name | Monday |
| `Mon` | Abbreviated weekday name | Mon |
| `02` | Day, zero-padded | 05 |
| `2` | Day, no padding | 5 |
| `_2` | Day, space-padded | &nbsp;5 |
| `15` | Hour (24-hour) | 15 |
| `03` | Hour (12-hour), zero-padded | 03 |
| `3` | Hour (12-hour), no padding | 3 |
| `04` | Minute, zero-padded | 04 |
| `05` | Second, zero-padded | 05 |
| `.000` | Milliseconds (trailing zeros) | .123 |
| `.999` | Milliseconds (no trailing zeros) | .123 |
| `.000000` | Microseconds | .123456 |
| `.000000000` | Nanoseconds | .123456789 |
| `PM` | AM/PM (uppercase) | PM |
| `pm` | am/pm (lowercase) | pm |
| `MST` | Time zone abbreviation | EST |
| `-0700` | UTC offset (numeric) | -0500 |
| `-07:00` | UTC offset with colon | -05:00 |
| `Z0700` | UTC offset (Z for UTC) | Z or -0500 |
| `Z07:00` | UTC offset with colon (Z for UTC) | Z or -05:00 |

### Go Predefined Layouts

| Constant | Layout String |
|----------|---------------|
| `time.RFC3339` | `2006-01-02T15:04:05Z07:00` |
| `time.RFC3339Nano` | `2006-01-02T15:04:05.999999999Z07:00` |
| `time.RFC1123` | `Mon, 02 Jan 2006 15:04:05 MST` |
| `time.RFC822` | `02 Jan 06 15:04 MST` |
| `time.Kitchen` | `3:04PM` |
| `time.DateTime` | `2006-01-02 15:04:05` |
| `time.DateOnly` | `2006-01-02` |
| `time.TimeOnly` | `15:04:05` |

## ISO 8601 Reference

| Format | Example | Description |
|--------|---------|-------------|
| `YYYY-MM-DD` | 2024-01-15 | Date |
| `YYYY-MM-DDThh:mm:ss` | 2024-01-15T15:30:45 | Date and time (local) |
| `YYYY-MM-DDThh:mm:ssZ` | 2024-01-15T15:30:45Z | Date and time (UTC) |
| `YYYY-MM-DDThh:mm:ss+hh:mm` | 2024-01-15T15:30:45+05:30 | Date and time with offset |
| `YYYY-Www` | 2024-W03 | Week date (week 3 of 2024) |
| `YYYY-Www-D` | 2024-W03-1 | Week date with day (Monday) |
| `YYYY-DDD` | 2024-015 | Ordinal date (day 15 of 2024) |
| `hh:mm:ss` | 15:30:45 | Time only |
| `PnYnMnDTnHnMnS` | P1Y2M3DT4H5M6S | Duration (1y 2m 3d 4h 5m 6s) |
| `start/end` | 2024-01-01/2024-12-31 | Time interval |
| `start/duration` | 2024-01-01/P30D | Time interval with duration |
| `Rn/start/duration` | R5/2024-01-01/P1M | Repeating interval (5 times) |

## Common Formats Across Languages

How to produce common date/time formats in each language.

### `"2024-01-15"` (ISO Date)

| Language | Code |
|----------|------|
| Python | `dt.strftime('%Y-%m-%d')` |
| JavaScript | `dt.toISOString().slice(0, 10)` |
| Java | `dt.format(DateTimeFormatter.ISO_LOCAL_DATE)` |
| C# | `dt.ToString("yyyy-MM-dd")` |
| Go | `t.Format("2006-01-02")` |

### `"Jan 15, 2024"` (Readable Date)

| Language | Code |
|----------|------|
| Python | `dt.strftime('%b %d, %Y')` |
| JavaScript (Intl) | `new Intl.DateTimeFormat('en-US', {month:'short', day:'numeric', year:'numeric'}).format(dt)` |
| JavaScript (dayjs) | `dayjs(dt).format('MMM DD, YYYY')` |
| Java | `dt.format(DateTimeFormatter.ofPattern("MMM dd, yyyy"))` |
| C# | `dt.ToString("MMM dd, yyyy")` |
| Go | `t.Format("Jan 02, 2006")` |

### `"3:30 PM"` (12-Hour Time)

| Language | Code |
|----------|------|
| Python | `dt.strftime('%-I:%M %p')` |
| JavaScript (Intl) | `new Intl.DateTimeFormat('en-US', {hour:'numeric', minute:'2-digit', hour12:true}).format(dt)` |
| JavaScript (dayjs) | `dayjs(dt).format('h:mm A')` |
| Java | `dt.format(DateTimeFormatter.ofPattern("h:mm a"))` |
| C# | `dt.ToString("h:mm tt")` |
| Go | `t.Format("3:04 PM")` |

### `"Monday, January 15"` (Full Weekday + Date)

| Language | Code |
|----------|------|
| Python | `dt.strftime('%A, %B %d')` |
| JavaScript (Intl) | `new Intl.DateTimeFormat('en-US', {weekday:'long', month:'long', day:'numeric'}).format(dt)` |
| JavaScript (dayjs) | `dayjs(dt).format('dddd, MMMM D')` |
| Java | `dt.format(DateTimeFormatter.ofPattern("EEEE, MMMM d"))` |
| C# | `dt.ToString("dddd, MMMM d")` |
| Go | `t.Format("Monday, January 2")` |

### `"2024-01-15T15:30:45Z"` (ISO 8601 Full)

| Language | Code |
|----------|------|
| Python | `dt.strftime('%Y-%m-%dT%H:%M:%SZ')` |
| JavaScript | `dt.toISOString()` |
| Java | `dt.format(DateTimeFormatter.ISO_INSTANT)` |
| C# | `dt.ToUniversalTime().ToString("o")` |
| Go | `t.UTC().Format(time.RFC3339)` |
