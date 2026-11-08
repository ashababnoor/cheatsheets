---
title: "Python One-Liners"
description: "Collection of useful Python one-liners — list comprehensions, file operations, string manipulation, and handy shortcuts."
category: "Languages & Code"
logo: "python"
---
# Python One-Liners Cheatsheet

## Strings

### Reverse a String
```python
reversed_str = "hello world"[::-1]
```
Reverses the characters in a string using slice notation.

### Palindrome Check
```python
is_palindrome = lambda s: s.lower().replace(" ", "") == s.lower().replace(" ", "")[::-1]
```
Checks whether a string reads the same forwards and backwards, ignoring case and spaces.

### Count Words
```python
word_count = len("Hello, this is a sample text".split())
```
Splits on whitespace and counts the resulting words.

### Title Case
```python
titled = " ".join(w.capitalize() for w in "hello world from python".split())
```
Capitalizes the first letter of every word in a string.

### Remove Duplicate Characters
```python
unique_chars = "".join(dict.fromkeys("abracadabra"))
```
Removes duplicate characters while preserving the original order.

### Anagram Check
```python
is_anagram = lambda a, b: sorted(a.lower()) == sorted(b.lower())
```
Returns `True` if two strings are anagrams of each other.

### Caesar Cipher
```python
caesar = lambda s, k: "".join(chr((ord(c) - 97 + k) % 26 + 97) if c.isalpha() else c for c in s.lower())
```
Shifts each letter in a lowercase string by `k` positions in the alphabet.

### Most Common Character
```python
most_common = max("abracadabra", key="abracadabra".count)
```
Finds the character that appears most frequently in a string.

## Lists

### Flatten a List of Lists
```python
flat = [item for sublist in [[1, 2], [3, 4], [5, 6]] for item in sublist]
```
Flattens one level of nesting from a list of lists into a single list.

### Remove Duplicates (Preserve Order)
```python
unique = list(dict.fromkeys([1, 3, 2, 3, 1, 4, 2]))
```
Removes duplicate values from a list while keeping the original order.

### Transpose a Matrix
```python
transposed = [list(row) for row in zip(*[[1, 2, 3], [4, 5, 6], [7, 8, 9]])]
```
Transposes rows and columns of a matrix using `zip` with unpacking.

### Chunk a List
```python
chunks = lambda lst, n: [lst[i:i+n] for i in range(0, len(lst), n)]
```
Splits a list into sublists of size `n`.

### Interleave Two Lists
```python
interleaved = [x for pair in zip([1, 2, 3], ["a", "b", "c"]) for x in pair]
```
Merges two lists by alternating their elements.

### Rotate a List
```python
rotated = lambda lst, k: lst[k:] + lst[:k]
```
Rotates a list by `k` positions to the left.

### Partition by Predicate
```python
partition = lambda lst, fn: ([x for x in lst if fn(x)], [x for x in lst if not fn(x)])
```
Splits a list into two lists based on whether each element satisfies a predicate.

### Running Sum
```python
running = [sum(lst[:i+1]) for i, _ in enumerate(lst := [1, 2, 3, 4, 5])]
```
Computes the cumulative sum at each position in the list.

## Dictionaries

### Merge Dictionaries
```python
merged = {**{"a": 1, "b": 2}, **{"b": 3, "c": 4}}
```
Merges two dictionaries; later values overwrite earlier ones for duplicate keys.

### Invert a Dictionary
```python
inverted = {v: k for k, v in {"a": 1, "b": 2, "c": 3}.items()}
```
Swaps keys and values in a dictionary.

### Filter by Value
```python
filtered = {k: v for k, v in {"a": 1, "b": 5, "c": 3}.items() if v > 2}
```
Keeps only key-value pairs where the value meets a condition.

### Group By
```python
group_by = lambda lst, fn: {k: [x for x in lst if fn(x) == k] for k in set(map(fn, lst))}
```
Groups list elements into a dictionary keyed by the result of a function.

### Frequency Count
```python
freq = {x: lst.count(x) for x in (lst := ["a", "b", "a", "c", "b", "a"])}
```
Counts occurrences of each element in a list.

### Sort by Value
```python
sorted_dict = dict(sorted({"a": 3, "b": 1, "c": 2}.items(), key=lambda x: x[1]))
```
Returns a new dictionary sorted by its values in ascending order.

## Math & Numbers

### Factorial
```python
factorial = lambda n: __import__("math").factorial(n)
```
Computes the factorial of `n` using the standard library.

### Fibonacci Sequence
```python
fib = lambda n: [((f := [0, 1]) and [f.append(f[-1]+f[-2]) or f[-1] for _ in range(n-2)]) and f[:n] or f[:n]][0]
```
Generates the first `n` Fibonacci numbers.

### Generate Primes (Sieve)
```python
primes = [i for i in range(2, 101) if all(i % j != 0 for j in range(2, int(i**0.5) + 1))]
```
Generates all prime numbers up to 100 using trial division.

### GCD of Two Numbers
```python
gcd = lambda a, b: a if b == 0 else gcd(b, a % b)
```
Computes the greatest common divisor using the Euclidean algorithm.

### Primality Check
```python
is_prime = lambda n: n > 1 and all(n % i for i in range(2, int(n**0.5) + 1))
```
Returns `True` if `n` is a prime number.

### Digit Sum
```python
digit_sum = lambda n: sum(int(d) for d in str(abs(n)))
```
Sums all the digits of a number.

### Base Conversion
```python
to_base = lambda n, b: "" if n == 0 else to_base(n // b, b) + "0123456789abcdef"[n % b]
```
Converts an integer `n` to a string in base `b` (up to 16).

### Power Set
```python
power_set = lambda s: [[s[j] for j in range(len(s)) if i >> j & 1] for i in range(2**len(s))]
```
Generates all subsets of a list.

## File I/O

### Read File to String
```python
content = open("file.txt").read()
```
Reads the entire contents of a file into a single string.

### Read Lines into List
```python
lines = open("file.txt").read().splitlines()
```
Reads a file and returns a list of lines without newline characters.

### Write List to File
```python
open("out.txt", "w").writelines(line + "\n" for line in ["one", "two", "three"])
```
Writes each element of a list as a separate line in a file.

### Count Lines in File
```python
line_count = sum(1 for _ in open("file.txt"))
```
Counts the number of lines in a file using a generator expression.

### Find String in Files
```python
matches = [(f, i) for f in __import__("glob").glob("*.txt") for i, l in enumerate(open(f)) if "query" in l]
```
Searches for a string across all `.txt` files, returning filenames and matching line numbers.

## Functional

### Map
```python
squared = list(map(lambda x: x**2, [1, 2, 3, 4, 5]))
```
Applies a function to every element in a list.

### Filter
```python
evens = list(filter(lambda x: x % 2 == 0, range(1, 11)))
```
Keeps only elements that satisfy a predicate.

### Reduce
```python
product = __import__("functools").reduce(lambda a, b: a * b, [1, 2, 3, 4, 5])
```
Reduces a list to a single value by applying a function cumulatively.

### Zip to Dict
```python
zipped = dict(zip(["a", "b", "c"], [1, 2, 3]))
```
Pairs elements from two lists into a dictionary.

### Enumerate to Dict
```python
indexed = {i: v for i, v in enumerate(["a", "b", "c"])}
```
Creates a dictionary mapping indices to list values.

### Any / All
```python
has_neg, all_pos = any(x < 0 for x in nums), all(x > 0 for x in nums)
```
Checks if any or all elements satisfy a condition (short-circuits for performance).

## Misc

### Swap Variables
```python
a, b = b, a
```
Swaps two variables without a temporary variable using tuple unpacking.

### Ternary Expression
```python
result = "even" if x % 2 == 0 else "odd"
```
Inline conditional that picks a value based on a condition.

### Walrus Operator
```python
filtered = [y for x in data if (y := f(x)) is not None]
```
Uses `:=` to assign and test a value inside a comprehension.

### Quick Timeit
```python
__import__("timeit").timeit(lambda: sum(range(1000)), number=10000)
```
Benchmarks an expression by running it 10,000 times and returning total seconds.

### Flatten Arbitrarily Nested List
```python
flatten = lambda x: [a for i in x for a in (flatten(i) if isinstance(i, list) else [i])]
```
Recursively flattens a list with any depth of nesting.

### Matrix Multiply
```python
mat_mul = lambda A, B: [[sum(a*b for a, b in zip(row, col)) for col in zip(*B)] for row in A]
```
Multiplies two matrices using nested list comprehensions and `zip`.
