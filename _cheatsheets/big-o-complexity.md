---
title: "Big-O & Complexity"
subtitle: "How to read Big-O, growth rates, and the time and space cost of common algorithms and data structures."
description: "Big-O complexity cheatsheet — growth rates, time and space complexity of sorting algorithms, data structure operations, recurrences, and amortised analysis."
category: "CS Fundamentals"
icon: "activity"
---

## What Big-O Means

Big-O describes how the cost of an algorithm **grows** with input size `n`, ignoring
constants and lower-order terms. It is usually the **worst case**.

| Notation | Meaning | Reads as |
|----------|---------|----------|
| $$O(f(n))$$ | Upper bound | "grows no faster than `f`" |
| $$\Omega(f(n))$$ | Lower bound | "grows at least as fast as `f`" |
| $$\Theta(f(n))$$ | Tight bound | "grows exactly like `f`" |

Rules of thumb:

- Drop constants: `3n` and `n/2` are both `O(n)`.
- Drop smaller terms: `n^2 + n` is `O(n^2)`.
- Add costs for steps in sequence: `O(n) + O(n^2)` is `O(n^2)`.
- Multiply for nested work: a loop of `n` that does `O(m)` inside is `O(n * m)`.

## Growth Rates

```plaintext
Operations for n = 1,000

O(1)         1
O(log n)     10
O(n)         1,000
O(n log n)   10,000
O(n^2)       1,000,000
O(n^3)       1,000,000,000
O(2^n)       about 10^301   (never finishes)
O(n!)        about 10^2567  (never finishes)
```

| Class | Name | Typical example | Practical limit for n |
|-------|------|-----------------|-----------------------|
| $$O(1)$$ | Constant | Array index, hash lookup | Any |
| $$O(\log n)$$ | Logarithmic | Binary search | Any |
| $$O(n)$$ | Linear | Scan a list | Billions |
| $$O(n \log n)$$ | Linearithmic | Merge sort | Tens of millions |
| $$O(n^2)$$ | Quadratic | Nested loops, bubble sort | About 10,000 |
| $$O(n^3)$$ | Cubic | Naive matrix multiply | About 500 |
| $$O(2^n)$$ | Exponential | Subsets, naive Fibonacci | About 25 |
| $$O(n!)$$ | Factorial | All permutations | About 11 |

## Spotting Complexity in Code

```python
def first(items):
    return items[0]                      # O(1)

def total(items):
    s = 0
    for x in items:                      # O(n): one pass
        s += x
    return s

def pairs(items):
    for a in items:                      # O(n^2): loop inside a loop
        for b in items:
            print(a, b)

def halve(n):
    while n > 1:                         # O(log n): size halves each step
        n //= 2

def sort_then_scan(items):
    items.sort()                         # O(n log n)
    return [x for x in items if x > 0]   # O(n), so overall O(n log n)
```

| Pattern | Complexity |
|---------|------------|
| Single loop over `n` | `O(n)` |
| Nested loops over `n` | `O(n^2)` |
| Loop that halves or doubles | `O(log n)` |
| Divide in half and process everything each level | `O(n log n)` |
| Recursion that branches twice per call (no sharing) | `O(2^n)` |
| Loop over all subsets or permutations | `O(2^n)` or `O(n!)` |

## Sorting Algorithms

| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|:------:|
| Bubble sort | `n` | `n^2` | `n^2` | `1` | Yes |
| Selection sort | `n^2` | `n^2` | `n^2` | `1` | No |
| Insertion sort | `n` | `n^2` | `n^2` | `1` | Yes |
| Merge sort | `n log n` | `n log n` | `n log n` | `n` | Yes |
| Quick sort | `n log n` | `n log n` | `n^2` | `log n` | No |
| Heap sort | `n log n` | `n log n` | `n log n` | `1` | No |
| Counting sort | `n + k` | `n + k` | `n + k` | `k` | Yes |
| Radix sort | `d(n + k)` | `d(n + k)` | `d(n + k)` | `n + k` | Yes |
| Timsort (Python, Java) | `n` | `n log n` | `n log n` | `n` | Yes |

Any sort that works only by comparing elements needs at least `O(n log n)` comparisons.

## Data Structure Operations

| Structure | Access | Search | Insert | Delete | Notes |
|-----------|--------|--------|--------|--------|-------|
| Array | `1` | `n` | `n` | `n` | Insert at end is amortised `1` |
| Dynamic array / list | `1` | `n` | `n` (end: `1` amortised) | `n` | |
| Linked list (singly) | `n` | `n` | `1` at head | `1` at head (if node known) | |
| Doubly linked list | `n` | `n` | `1` at ends | `1` at ends | |
| Stack, queue | `n` | `n` | `1` | `1` | Push, pop, enqueue, dequeue |
| Hash table | | `1` avg, `n` worst | `1` avg | `1` avg | Needs a good hash |
| Binary search tree | `log n` avg | `log n` avg, `n` worst | `log n` avg | `log n` avg | Unbalanced worst case `n` |
| Balanced BST (AVL, red-black) | `log n` | `log n` | `log n` | `log n` | Guaranteed |
| Heap | | `n` | `log n` | `log n` | Min or max in `1` |
| B-tree | `log n` | `log n` | `log n` | `log n` | Used in databases |
| Trie | | `L` | `L` | `L` | `L` is the key length |
| Skip list | | `log n` avg | `log n` avg | `log n` avg | |

## Common Language Operations (Python)

| Operation | Cost |
|-----------|------|
| `lst[i]`, `lst.append(x)` | `O(1)` |
| `lst.insert(0, x)`, `lst.pop(0)` | `O(n)` |
| `x in lst` | `O(n)` |
| `x in set`, `x in dict` | `O(1)` average |
| `lst.sort()`, `sorted(lst)` | `O(n log n)` |
| `lst[a:b]` | `O(b - a)` |
| `s1 + s2` (strings) | `O(len(s1) + len(s2))` |
| `"".join(parts)` | `O(total length)` |
| `heapq.heappush`, `heappop` | `O(log n)` |
| `collections.deque` append and pop at both ends | `O(1)` |

Concatenating strings in a loop with `+=` can be `O(n^2)`. Use `join`.

## Graph Algorithms

`V` is the number of vertices, `E` the number of edges.

| Algorithm | Time | Use |
|-----------|------|-----|
| BFS, DFS | `O(V + E)` | Traversal, reachability |
| Dijkstra (heap) | `O((V + E) log V)` | Shortest path, non-negative weights |
| Bellman-Ford | `O(V * E)` | Shortest path with negative weights |
| Floyd-Warshall | `O(V^3)` | All pairs shortest paths |
| Topological sort | `O(V + E)` | Ordering a DAG |
| Kruskal, Prim | `O(E log V)` | Minimum spanning tree |

## Common Algorithms

| Algorithm | Time | Space |
|-----------|------|-------|
| Binary search | `O(log n)` | `O(1)` |
| Linear search | `O(n)` | `O(1)` |
| Two pointers, sliding window | `O(n)` | `O(1)` |
| Merge two sorted lists | `O(n + m)` | `O(n + m)` |
| Fibonacci, naive recursion | `O(2^n)` | `O(n)` |
| Fibonacci, memoised or iterative | `O(n)` | `O(n)` or `O(1)` |
| Matrix multiply, naive | `O(n^3)` | `O(n^2)` |
| Knapsack (dynamic programming) | `O(n * W)` | `O(W)` |
| Generate all subsets | `O(2^n)` | `O(n)` |

## Space Complexity

How much extra memory grows with `n`.

| Pattern | Space |
|---------|-------|
| A few variables | `O(1)` |
| A new list the size of the input | `O(n)` |
| A 2D table of `n * m` | `O(n * m)` |
| Recursion depth `d` | `O(d)` on the call stack |
| Recursion on a balanced tree | `O(log n)` |
| Recursion on a skewed tree or a list | `O(n)` |

There is often a **time and space trade-off**. A hash set uses `O(n)` space to turn an `O(n)`
search into `O(1)`.

## Recurrences and the Master Theorem

A divide-and-conquer algorithm splits into `a` subproblems of size `n/b` and spends `f(n)`
combining them: $$T(n) = a \, T(n/b) + f(n)$$.

Let $$c = \log_b a$$.

| Case | Condition | Result |
|------|-----------|--------|
| 1 | $$f(n)$$ grows slower than $$n^c$$ | $$T(n) = \Theta(n^c)$$ |
| 2 | $$f(n)$$ grows like $$n^c$$ | $$T(n) = \Theta(n^c \log n)$$ |
| 3 | $$f(n)$$ grows faster than $$n^c$$ | $$T(n) = \Theta(f(n))$$ |

| Recurrence | Result | Example |
|------------|--------|---------|
| $$T(n) = T(n/2) + 1$$ | $$\Theta(\log n)$$ | Binary search |
| $$T(n) = 2T(n/2) + n$$ | $$\Theta(n \log n)$$ | Merge sort |
| $$T(n) = T(n-1) + 1$$ | $$\Theta(n)$$ | Linear recursion |
| $$T(n) = 2T(n-1) + 1$$ | $$\Theta(2^n)$$ | Towers of Hanoi |
| $$T(n) = T(n-1) + n$$ | $$\Theta(n^2)$$ | Selection sort style |

## Amortised Analysis

The **average cost per operation over a sequence**, even when a single step can be costly.

```plaintext
Dynamic array doubling (capacity 1, 2, 4, 8, ...):

append #   1   2   3   4   5   6   7   8   9
cost       1   2   3   1   5   1   1   1   9
                   ↑       ↑               ↑
                   resize copies 2, 4, 8 items

Total for n appends is less than 3n, so about 3 per append: O(1) amortised.
```

Other examples: hash table rehashing, splay trees, and a stack with `multipop`.

## Best, Average, and Worst Case

| Case | Meaning | Example (quick sort) |
|------|---------|----------------------|
| Best | Most favourable input | Pivot always splits evenly: `n log n` |
| Average | Expected over random inputs | `n log n` |
| Worst | Most expensive input | Already sorted with a bad pivot: `n^2` |

## Tips

- Say what `n` is (items, characters, edges, digits).
- Real speed also depends on constants, caches, and the input. `O(n)` with a heavy loop can
  lose to `O(n log n)` for small `n`.
- Check both **time** and **space**.
- Know the limits: about `10^8` simple operations per second in a compiled language, less in Python.
