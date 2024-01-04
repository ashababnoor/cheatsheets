# Python One-Liners Cheatsheet

## Count Unique Words in a String

```python
unique_words_count = len(set("Hello, this is a sample text".split()))
```
**Explanation:** Splits the string into words, converts it to a set to get unique words, and calculates the count.

## Print a List in Reverse Order

```python
reversed_list = [1, 2, 3, 4][::-1]
```
**Explanation:** Uses slicing with step -1 to reverse the order of elements in the list.

## Flatten a List of Lists

```python
flattened_list = [item for sublist in [[1, 2], [3, 4], [5, 6]] for item in sublist]
```
**Explanation:** Utilizes list comprehension to flatten a list of lists into a single list.

## Check Palindrome

```python
is_palindrome = lambda s: s == s[::-1]
```
**Explanation:** Defines a lambda function to check if a string is a palindrome.

## Transpose a Matrix

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transposed = [list(row) for row in zip(*matrix)]
```
**Explanation:** Uses `zip` with `*` unpacking to transpose a matrix.

## Generate Prime Numbers

```python
primes = [i for i in range(2, 101) if all(i % j != 0 for j in range(2, int(i ** 0.5) + 1))]
```
**Explanation:** Uses list comprehension and a primality check to generate prime numbers up to 100.

## Find Unique Characters in a String

```python
unique_chars = ''.join(sorted(set("hello")))
```
**Explanation:** Converts the string to a set to get unique characters, sorts them, and joins back into a string.

## Calculate Factorials

```python
import math
factorials = [math.factorial(i) for i in range(1, 6)]
```
**Explanation:** Uses `math.factorial` within a list comprehension to calculate factorials.

## Read File and Count Lines

```python
line_count = sum(1 for line in open('file.txt'))
```
**Explanation:** Uses a generator expression to count lines in a file.

## Execute Shell Commands

```python
import os
output = os.popen('ls').read()
```
**Explanation:** Uses `os.popen` to execute a shell command ('ls' in this case) and reads the output.

---

These Python one-liners showcase various functionalities and concise approaches to achieve specific tasks efficiently. Each line performs a specific operation or solves a problem within a single line of Python code, along with an explanatory note for clarity.