# Clean Code Practices Cheatsheet

This cheatsheet provides a list of best practices for writing clean code.

## Naming

| Practice | Description |
|---------|-------------|
| Use Intention-Revealing Names | Names should tell why it exists, what it does, and how it is used. |
| Avoid Disinformation | Do not refer to a grouping of accounts as an `accountList` unless it's actually a `List`. |
| Make Meaningful Distinctions | If classes or objects are different, they should have different names. |
| Use Pronounceable Names | If you can't pronounce it, you can't discuss it without sounding silly. |

## Functions

| Practice | Description |
|---------|-------------|
| Small! | The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that. |
| Do One Thing | Functions should do one thing. They should do it well. They should do it only. |
| Use Descriptive Names | A long descriptive name is better than a short enigmatic name. |
| Function Arguments | The ideal number of arguments for a function is zero. Next comes one, followed by two. Three should be avoided where possible. |

## Comments

| Practice | Description |
|---------|-------------|
| Explain Yourself in Code | Rather than writing comments, make the code self-explanatory. |
| Good Comments | Some comments are necessary or beneficial, but only if they represent a failure to express yourself in code. |
| Don't Use a Comment When You Can Use a Function or a Variable | Comments should not be used as a substitute for good code. |

## Formatting

| Practice | Description |
|---------|-------------|
| Vertical Openness Between Concepts | Separate concepts with blank lines. |
| Keep Lines Short | Limit lines to around 80 characters. |
| Don't Align Right | Don't write code that lines up with the code in the previous line. |
