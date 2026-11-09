---
title: "Python"
description: "Python cheatsheet — syntax, data types, functions, classes, file I/O, modules, and common standard library usage."
category: "Languages & Code"
logo: "python"
---
# Python Cheatsheet

A comprehensive reference for the Python programming language covering data types, control flow, functions, classes, and essential standard library modules.

---

## Data Types

| Type | Example | Description |
|------|---------|-------------|
| `int` | `x = 42` | Integer (arbitrary precision) |
| `float` | `x = 3.14` | Floating-point number |
| `str` | `x = "hello"` | Immutable text sequence |
| `bool` | `x = True` | Boolean (`True` / `False`) |
| `list` | `x = [1, 2, 3]` | Mutable ordered sequence |
| `tuple` | `x = (1, 2, 3)` | Immutable ordered sequence |
| `set` | `x = {1, 2, 3}` | Mutable unordered unique elements |
| `dict` | `x = {"a": 1}` | Mutable key-value mapping |
| `None` | `x = None` | Null / absence of value |

### Type Checking

```python
type(42)                      # <class 'int'>
isinstance(42, int)           # True
isinstance(42, (int, float))  # True — checks multiple types
```

---

## Strings

### F-Strings (Formatted String Literals)

```python
name, age = "Alice", 30
f"Name: {name}, Age: {age}"    # "Name: Alice, Age: 30"
f"{3.14159:.2f}"               # "3.14"
f"{'hello':>10}"               # "     hello"
```

### Common String Methods

| Method | Description | Example |
|--------|-------------|---------|
| `split(sep)` | Split into list | `"a,b,c".split(",")` → `['a','b','c']` |
| `join(iter)` | Join iterable with separator | `",".join(["a","b"])` → `"a,b"` |
| `strip()` | Remove leading/trailing whitespace | `" hi ".strip()` → `"hi"` |
| `replace(old, new)` | Replace occurrences | `"hello".replace("l","r")` → `"herro"` |
| `find(sub)` | Index of first match (-1 if not found) | `"hello".find("ll")` → `2` |
| `count(sub)` | Count occurrences | `"banana".count("a")` → `3` |
| `startswith(s)` | Check prefix | `"hello".startswith("he")` → `True` |
| `endswith(s)` | Check suffix | `"hello".endswith("lo")` → `True` |
| `upper()` | Uppercase | `"hi".upper()` → `"HI"` |
| `lower()` | Lowercase | `"HI".lower()` → `"hi"` |
| `title()` | Title case | `"hello world".title()` → `"Hello World"` |
| `center(w)` | Center-pad string | `"hi".center(10)` → `"    hi    "` |
| `zfill(w)` | Zero-pad left | `"42".zfill(5)` → `"00042"` |
| `encode(enc)` | Encode to bytes | `"hi".encode("utf-8")` → `b'hi'` |

### Slicing

```python
s = "Hello, World!"
s[0:5]    # "Hello"
s[-6:]    # "orld!"
s[::2]    # "Hlo ol!"
s[::-1]   # "!dlroW ,olleH"
```

### Multiline & Raw Strings

```python
multi = """Line 1
Line 2
Line 3"""

raw = r"No \n escape here"  # backslashes treated literally
```

---

## Lists

### Creation & Slicing

```python
nums = [1, 2, 3, 4, 5]
nums[1:3]    # [2, 3]
nums[::2]    # [1, 3, 5]
```

### List Methods

| Method | Description | Example |
|--------|-------------|---------|
| `append(x)` | Add item to end | `[1,2].append(3)` → `[1,2,3]` |
| `extend(iter)` | Extend with iterable | `[1].extend([2,3])` → `[1,2,3]` |
| `insert(i, x)` | Insert at index | `[1,3].insert(1,2)` → `[1,2,3]` |
| `remove(x)` | Remove first occurrence | `[1,2,2].remove(2)` → `[1,2]` |
| `pop(i)` | Remove and return at index | `[1,2,3].pop()` → `3` |
| `clear()` | Remove all items | `[1,2].clear()` → `[]` |
| `index(x)` | Index of first occurrence | `[1,2,3].index(2)` → `1` |
| `count(x)` | Count occurrences | `[1,2,2].count(2)` → `2` |
| `sort()` | Sort in place | `[3,1,2].sort()` → `[1,2,3]` |
| `reverse()` | Reverse in place | `[1,2,3].reverse()` → `[3,2,1]` |
| `copy()` | Shallow copy | `[1,2].copy()` → `[1,2]` |

### List Comprehensions

```python
squares = [x**2 for x in range(5)]                # [0, 1, 4, 9, 16]
evens = [x for x in range(10) if x % 2 == 0]      # [0, 2, 4, 6, 8]
flat = [x for row in [[1,2],[3,4]] for x in row]  # [1, 2, 3, 4]
```

### Unpacking

```python
a, b, *rest = [1, 2, 3, 4, 5]   # a=1, b=2, rest=[3,4,5]
first, *_, last = [1, 2, 3, 4]  # first=1, last=4
```

---

## Dictionaries

### Creation & Access

```python
d = {"name": "Alice", "age": 30}
d["name"]           # "Alice" (KeyError if missing)
d.get("name")       # "Alice" (None if missing)
d.get("x", 0)       # 0 (default if missing)
```

### Dictionary Methods

| Method | Description | Example |
|--------|-------------|---------|
| `keys()` | View of keys | `d.keys()` → `dict_keys([...])` |
| `values()` | View of values | `d.values()` → `dict_values([...])` |
| `items()` | View of (key, value) pairs | `d.items()` → `dict_items([...])` |
| `get(k, default)` | Get value or default | `d.get("x", 0)` → `0` |
| `setdefault(k, v)` | Get or set default | `d.setdefault("x", [])` |
| `update(other)` | Merge in another dict | `d.update({"age": 31})` |
| `pop(k)` | Remove and return value | `d.pop("age")` → `30` |
| `popitem()` | Remove and return last pair | `d.popitem()` → `("age", 30)` |
| `clear()` | Remove all items | `d.clear()` → `{}` |
| `copy()` | Shallow copy | `d.copy()` |

### Dict Comprehensions

```python
squares = {x: x**2 for x in range(5)}  # {0:0, 1:1, 2:4, 3:9, 4:16}
flipped = {v: k for k, v in d.items()}
```

### `defaultdict` & `Counter`

```python
from collections import defaultdict, Counter
dd = defaultdict(list)
dd["key"].append(1)         # no KeyError — auto-creates list

counts = Counter("banana")  # Counter({'a':3, 'n':2, 'b':1})
counts.most_common(2)       # [('a',3), ('n',2)]
```

---

## Sets

### Creation

```python
s = {1, 2, 3}
s = set([1, 2, 2, 3])  # {1, 2, 3}
empty = set()          # not {} — that's an empty dict
```

### Set Methods

| Method | Description | Example |
|--------|-------------|---------|
| `add(x)` | Add element | `{1,2}.add(3)` → `{1,2,3}` |
| `remove(x)` | Remove element (KeyError if missing) | `{1,2}.remove(1)` → `{2}` |
| `discard(x)` | Remove element (no error if missing) | `{1,2}.discard(9)` → `{1,2}` |
| `pop()` | Remove and return arbitrary element | `{1,2}.pop()` |
| `clear()` | Remove all elements | `{1,2}.clear()` → `set()` |
| `union(s2)` | Elements in either | `{1,2} \| {2,3}` → `{1,2,3}` |
| `intersection(s2)` | Elements in both | `{1,2} & {2,3}` → `{2}` |
| `difference(s2)` | Elements in first not second | `{1,2} - {2,3}` → `{1}` |
| `symmetric_difference(s2)` | Elements in one but not both | `{1,2} ^ {2,3}` → `{1,3}` |
| `issubset(s2)` | All elements in s2? | `{1}.issubset({1,2})` → `True` |
| `issuperset(s2)` | Contains all of s2? | `{1,2}.issuperset({1})` → `True` |

### Set Comprehensions & Frozenset

```python
evens = {x for x in range(10) if x % 2 == 0}  # {0, 2, 4, 6, 8}
fs = frozenset([1, 2, 3])                     # immutable set — can be used as dict key
```

---

## Tuples & Named Tuples

### Tuples

```python
t = (1, 2, 3)
single = (42,)        # trailing comma for single-element tuple
a, b, c = (1, 2, 3)   # unpacking
```

Tuples are immutable — use them for fixed collections, dict keys, and function return values.

### Named Tuples

```python
from collections import namedtuple
Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(p.x, p.y)  # 3 4
```

```python
from typing import NamedTuple
class Point(NamedTuple):
    x: float
    y: float
```

---

## Control Flow

### `if` / `elif` / `else`

```python
if x > 0:
    print("positive")
elif x == 0:
    print("zero")
else:
    print("negative")
```

### Ternary Expression

```python
result = "even" if x % 2 == 0 else "odd"
```

### `match`-`case` (Python 3.10+)

```python
match command:
    case "quit":
        exit()
    case "hello" | "hi":
        print("Hello!")
    case _:
        print("Unknown")
```

### `for` / `while`

```python
for item in [1, 2, 3]:
    print(item)

for i, val in enumerate(["a", "b"], start=1):
    print(i, val)  # 1 a, 2 b

while condition:
    do_something()
```

### `break` / `continue` / `pass`

```python
for x in range(10):
    if x == 5: break         # exit loop
    if x % 2 == 0: continue  # skip to next iteration
    pass                     # placeholder — does nothing
```

### `for...else` / `while...else`

```python
for x in items:
    if x == target:
        break
else:
    print("not found")  # runs only if loop completed without break
```

---

## Functions

### Basic Functions

```python
def greet(name: str, greeting: str = "Hello") -> str:
    return f"{greeting}, {name}!"
```

### `*args` and `**kwargs`

```python
def func(*args, **kwargs):
    print(args)    # tuple of positional args
    print(kwargs)  # dict of keyword args
```

### Lambda

```python
square = lambda x: x ** 2
sorted(items, key=lambda x: x["name"])
```

### Type Hints

```python
def process(items: list[str], count: int = 10) -> dict[str, int]:
    ...
from typing import Optional, Union
def find(name: str) -> Optional[str]: ...
```

### Decorators

```python
def timer(func):
    def wrapper(*args, **kwargs):
        import time; start = time.time()
        result = func(*args, **kwargs)
        print(f"{time.time() - start:.2f}s")
        return result
    return wrapper

@timer
def slow(): ...
```

### Generators (`yield`)

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

list(countdown(3))  # [3, 2, 1]
```

### Walrus Operator (`:=`)

```python
if (n := len(items)) > 10:
    print(f"Too many: {n}")

results = [y for x in data if (y := f(x)) is not None]
```

---

## Classes

### Basic Class

```python
class Dog:
    species = "Canis familiaris"  # class attribute

    def __init__(self, name: str, age: int):
        self.name = name  # instance attribute
        self.age = age

    def speak(self) -> str:
        return f"{self.name} says Woof!"
```

### Inheritance & `super()`

```python
class Puppy(Dog):
    def __init__(self, name: str, age: int, toy: str):
        super().__init__(name, age)
        self.toy = toy
```

### Properties

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0: raise ValueError
        self._radius = value
```

### `@staticmethod` & `@classmethod`

```python
class MyClass:
    @staticmethod
    def utility():     # no access to cls or self
        return 42

    @classmethod
    def create(cls):   # receives the class
        return cls()
```

### Common Dunder Methods

| Method | Purpose | Example Usage |
|--------|---------|---------------|
| `__str__` | Human-readable string | `str(obj)`, `print(obj)` |
| `__repr__` | Developer string representation | `repr(obj)`, debugger display |
| `__len__` | Length | `len(obj)` |
| `__getitem__` | Index access | `obj[key]` |
| `__iter__` | Iteration | `for x in obj` |
| `__eq__` | Equality | `obj == other` |
| `__lt__` | Less than (enables sorting) | `obj < other` |
| `__hash__` | Hash (for sets/dicts) | `hash(obj)` |
| `__enter__` | Context manager entry | `with obj as x:` |
| `__exit__` | Context manager exit | end of `with` block |

---

## File I/O

### `open` / `with`

```python
with open("file.txt", "r") as f:
    content = f.read()

with open("file.txt", "w") as f:
    f.write("Hello\n")
```

| Mode | Description |
|------|-------------|
| `"r"` | Read (default) |
| `"w"` | Write (truncates) |
| `"a"` | Append |
| `"rb"` / `"wb"` | Read/write binary |
| `"r+"` | Read and write |

### Reading Lines

```python
with open("file.txt") as f:
    lines = f.readlines()        # list of lines
    # or
    for line in f:               # memory-efficient iteration
        print(line.strip())
```

### `pathlib` Basics

```python
from pathlib import Path
p = Path("src") / "main.py"
p.exists()                    # True/False
p.read_text()                 # read entire file as string
p.write_text("content")       # write string to file
list(Path(".").glob("*.py"))  # list matching files
```

---

## Error Handling

### `try` / `except` / `else` / `finally`

```python
try:
    result = 10 / x
except ZeroDivisionError:
    print("Cannot divide by zero")
except (TypeError, ValueError) as e:
    print(f"Error: {e}")
else:
    print("Success")    # runs if no exception
finally:
    print("Always runs")
```

### `raise` & Custom Exceptions

```python
raise ValueError("Invalid input")

class AppError(Exception):
    def __init__(self, message, code):
        super().__init__(message)
        self.code = code
```

### Common Exception Types

| Exception | When It Occurs |
|-----------|---------------|
| `ValueError` | Wrong value (e.g., `int("abc")`) |
| `TypeError` | Wrong type (e.g., `"a" + 1`) |
| `KeyError` | Missing dictionary key |
| `IndexError` | List index out of range |
| `AttributeError` | Missing object attribute |
| `FileNotFoundError` | File does not exist |
| `ZeroDivisionError` | Division by zero |
| `ImportError` | Failed import |
| `StopIteration` | Iterator exhausted |
| `RuntimeError` | Generic runtime error |
| `OSError` | OS-level error (file, network) |
| `NameError` | Undefined variable |

---

## Common Standard Library

### `os`

```python
import os
os.listdir(".")              # list directory contents
os.environ.get("HOME")       # get environment variable
```

### `sys`

```python
import sys
sys.argv                     # command-line arguments
sys.exit(1)                  # exit with status code
```

### `json`

```python
import json
data = json.loads('{"a": 1}')       # parse JSON string → dict
json.dumps(data, indent=2)          # dict → JSON string
```

### `csv`

```python
import csv
with open("data.csv") as f:
    reader = csv.DictReader(f)
    for row in reader: print(row)
```

### `datetime`

```python
from datetime import datetime, timedelta
now = datetime.now()
tomorrow = now + timedelta(days=1)
now.strftime("%Y-%m-%d %H:%M:%S")
```

### `re` (Regular Expressions)

```python
import re
re.findall(r"\d+", "abc 123 def 456")  # ['123', '456']
re.sub(r"\s+", "-", "hello world")     # "hello-world"
```

### `collections`

```python
from collections import defaultdict, Counter, deque
d = deque([1, 2, 3])
d.appendleft(0)       # deque([0, 1, 2, 3])
```

### `itertools`

```python
from itertools import chain, product, combinations
list(chain([1,2], [3,4]))       # [1, 2, 3, 4]
list(combinations("ABC", 2))    # [('A','B'),('A','C'),('B','C')]
```

### `functools`

```python
from functools import lru_cache, reduce
@lru_cache(maxsize=128)
def fib(n): return n if n < 2 else fib(n-1) + fib(n-2)
```

### `pathlib`

```python
from pathlib import Path
files = list(Path(".").rglob("*.py"))   # recursive glob
Path("output").mkdir(exist_ok=True)
```

---

## Virtual Environments

### Creating & Activating

```python
# Create
python -m venv .venv

# Activate (macOS/Linux)
source .venv/bin/activate

# Activate (Windows)
.venv\Scripts\activate

# Deactivate
deactivate
```

### `pip` & Requirements

```python
pip install requests              # install a package
pip install -r requirements.txt   # install from file
pip freeze > requirements.txt     # export installed packages
pip list                          # list installed packages
```

---

## Useful Built-ins

| Function | Description | Example |
|----------|-------------|---------|
| `len(x)` | Length / item count | `len([1,2,3])` → `3` |
| `range(n)` | Integer sequence | `list(range(5))` → `[0,1,2,3,4]` |
| `enumerate(it)` | Index-value pairs | `list(enumerate("ab"))` → `[(0,'a'),(1,'b')]` |
| `zip(a, b)` | Pair elements | `list(zip([1,2],["a","b"]))` → `[(1,'a'),(2,'b')]` |
| `map(f, it)` | Apply function | `list(map(str, [1,2]))` → `['1','2']` |
| `filter(f, it)` | Filter by predicate | `list(filter(None, [0,1,2]))` → `[1,2]` |
| `sorted(it)` | Sorted copy | `sorted([3,1,2])` → `[1,2,3]` |
| `reversed(it)` | Reverse iterator | `list(reversed([1,2,3]))` → `[3,2,1]` |
| `any(it)` | True if any truthy | `any([0, False, 1])` → `True` |
| `all(it)` | True if all truthy | `all([1, True, "a"])` → `True` |
| `min(it)` | Minimum value | `min(3, 1, 2)` → `1` |
| `max(it)` | Maximum value | `max(3, 1, 2)` → `3` |
| `sum(it)` | Sum of elements | `sum([1, 2, 3])` → `6` |
| `abs(x)` | Absolute value | `abs(-5)` → `5` |
| `round(x, n)` | Round to n digits | `round(3.14159, 2)` → `3.14` |
| `isinstance(x, t)` | Type check | `isinstance(1, int)` → `True` |
| `type(x)` | Object type | `type("hi")` → `<class 'str'>` |
| `dir(x)` | List attributes | `dir([])` → `['append', ...]` |
| `help(x)` | Interactive help | `help(str.split)` |
| `id(x)` | Object identity | `id(obj)` → `140234866...` |
| `hash(x)` | Hash value | `hash("hello")` → `-1234...` |
| `callable(x)` | Is it callable? | `callable(len)` → `True` |
