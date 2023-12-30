# Python (and More) strftime Format Specifiers Cheatsheet

| Specifier | Description |
|-----------|-------------|
| `%a` | Weekday as locale’s abbreviated name. |
| `%A` | Weekday as locale’s full name. |
| `%w` | Weekday as a decimal number, where 0 is Sunday and 6 is Saturday. |
| `%d` | Day of the month as a zero-padded decimal number. |
| `%b` | Month as locale’s abbreviated name. |
| `%B` | Month as locale’s full name. |
| `%m` | Month as a zero-padded decimal number. |
| `%y` | Year without century as a zero-padded decimal number. |
| `%Y` | Year with century as a decimal number. |
| `%H` | Hour (24-hour clock) as a zero-padded decimal number. |
| `%I` | Hour (12-hour clock) as a zero-padded decimal number. |
| `%p` | Locale’s equivalent of either AM or PM. |
| `%M` | Minute as a zero-padded decimal number. |
| `%S` | Second as a zero-padded decimal number. |
| `%f` | Microsecond as a decimal number, zero-padded on the left. |
| `%z` | UTC offset in the form +HHMM or -HHMM. |
| `%Z` | Time zone name. |
| `%j` | Day of the year as a zero-padded decimal number. |
| `%U` | Week number of the year (Sunday as the first day of the week). |
| `%W` | Week number of the year (Monday as the first day of the week). |
| `%c` | Locale’s appropriate date and time representation. |
| `%x` | Locale’s appropriate date representation. |
| `%X` | Locale’s appropriate time representation. |
| `%%` | A literal '%' character. |


The format specifiers provided are specific to Python's `strftime` function, which is part of the `datetime` module in Python.

However, similar format specifiers are also used in other languages that have C-style `strftime` functions, such as C, C++, and Ruby as well as shell scripting languages such as Bash and Zsh. The exact specifiers and their meanings can vary between languages, so it's important to check the documentation for the specific language you're using.

For example:

- In C and C++, you can use the `strftime` function in the `ctime` library.
- In Ruby, you can use the `strftime` method of the `Time` class.
- In Bash or Zsh, you can use the `date` command.

```bash
#!/bin/bash

# Current date and time in the format: YYYY-MM-DD HH:MM:SS
date '+%Y-%m-%d %H:%M:%S'
```

In contrast, languages like JavaScript and Java use different methods and format specifiers for date and time formatting. For instance, JavaScript uses the `Date` object and its methods like `toLocaleDateString`, while Java uses classes like `SimpleDateFormat` or `DateTimeFormatter` for date and time formatting.