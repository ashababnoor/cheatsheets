---
title: "Algorithms"
category: "CS Fundamentals"
icon: "⚙️"
---
# Algorithms Cheatsheet

A comprehensive reference for common algorithms, their complexities, and when to use them.

**Notation:** `n` = input size, `m` = pattern/secondary input size, `V` = vertices, `E` = edges, `k` = range of input values, `d` = number of digits, `W` = knapsack capacity.

---

## Sorting Algorithms

| Algorithm | Best | Average | Worst | Space | Stable | In-Place |
|-----------|------|---------|-------|-------|--------|----------|
| Bubble Sort | O(n) | O(n^2) | O(n^2) | O(1) | Yes | Yes |
| Selection Sort | O(n^2) | O(n^2) | O(n^2) | O(1) | No | Yes |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) | Yes | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes | No |
| Quick Sort | O(n log n) | O(n log n) | O(n^2) | O(log n) | No | Yes |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No | Yes |
| Counting Sort | O(n + k) | O(n + k) | O(n + k) | O(k) | Yes | No |
| Radix Sort | O(d(n + k)) | O(d(n + k)) | O(d(n + k)) | O(n + k) | Yes | No |
| Bucket Sort | O(n + k) | O(n + k) | O(n^2) | O(n) | Yes | No |

### Bubble Sort

Repeatedly swaps adjacent elements if they are in the wrong order. Each pass "bubbles" the largest unsorted element to its correct position.

**When to use:** Educational purposes. Useful when data is nearly sorted (best case O(n) with early termination).

### Selection Sort

Finds the minimum element from the unsorted portion and places it at the beginning. Always performs O(n^2) comparisons regardless of input.

**When to use:** When memory writes are expensive (makes at most O(n) swaps). Simple to implement.

### Insertion Sort

Builds the sorted array one element at a time by inserting each element into its correct position among the previously sorted elements.

**When to use:** Small datasets (n < 50), nearly sorted data, or as the base case for hybrid sorts like Timsort. Online algorithm (can sort as data arrives).

### Merge Sort

Divides the array in half, recursively sorts each half, then merges the two sorted halves.

**When to use:** When stable sort is needed with guaranteed O(n log n). Preferred for linked lists (no extra space needed). Good for external sorting (large files).

### Quick Sort

Picks a pivot, partitions the array so elements less than the pivot come before it and elements greater come after, then recursively sorts the partitions.

**When to use:** General-purpose sorting. Fastest in practice for most inputs. Use randomized pivot or median-of-three to avoid worst case. Not stable.

### Heap Sort

Builds a max-heap from the array, then repeatedly extracts the maximum element to build the sorted array from the end.

**When to use:** When guaranteed O(n log n) is needed with O(1) extra space. Not stable. Poor cache performance compared to quicksort.

### Counting Sort

Counts occurrences of each value, then calculates positions. Works only on non-negative integers (or values that can be mapped to them).

**When to use:** When the range of input values `k` is not significantly greater than `n`. Linear time.

### Radix Sort

Sorts numbers digit by digit, from least significant to most significant (LSD) or vice versa (MSD), using a stable sort (usually counting sort) as a subroutine.

**When to use:** Fixed-length integers or strings. When `d` (digits) is constant, runs in O(n).

### Bucket Sort

Distributes elements into buckets, sorts each bucket individually (often with insertion sort), then concatenates results.

**When to use:** Uniformly distributed floating-point data over a known range. Average case O(n) when data is evenly distributed.

---

## Searching Algorithms

| Algorithm | Best | Average | Worst | Space | Prerequisite |
|-----------|------|---------|-------|-------|-------------|
| Linear Search | O(1) | O(n) | O(n) | O(1) | None |
| Binary Search | O(1) | O(log n) | O(log n) | O(1) | Sorted array |
| Interpolation Search | O(1) | O(log log n) | O(n) | O(1) | Sorted, uniform distribution |
| Jump Search | O(1) | O(sqrt(n)) | O(sqrt(n)) | O(1) | Sorted array |
| Exponential Search | O(1) | O(log n) | O(log n) | O(1) | Sorted array |

### Linear Search

Scans each element sequentially until the target is found or the end is reached. Works on any collection.

### Binary Search

Repeatedly divides the search interval in half. Compares the target to the middle element and eliminates one half.

```
low, high = 0, n-1
while low <= high:
    mid = (low + high) // 2
    if arr[mid] == target: return mid
    elif arr[mid] < target: low = mid + 1
    else: high = mid - 1
```

### Interpolation Search

Like binary search but estimates the position of the target based on its value relative to the min/max of the current range. Probe position: `low + ((target - arr[low]) * (high - low)) // (arr[high] - arr[low])`.

**When to use:** Uniformly distributed sorted data. Degrades to O(n) on skewed distributions.

### Jump Search

Jumps ahead by fixed steps of size `sqrt(n)`, then performs a linear search within the identified block.

**When to use:** Sorted array where jumping back is costly (e.g., linked lists with forward-only traversal).

### Exponential Search

Finds a range by doubling the index (1, 2, 4, 8, ...) until the target is exceeded, then performs binary search within that range.

**When to use:** Unbounded or infinite lists. Also efficient when the target is near the beginning.

---

## Graph Algorithms

| Algorithm | Time | Space | Use Case |
|-----------|------|-------|----------|
| BFS | O(V + E) | O(V) | Shortest path (unweighted) |
| DFS | O(V + E) | O(V) | Cycle detection, topological sort |
| Dijkstra | O((V + E) log V) | O(V) | Shortest path (non-negative weights) |
| Bellman-Ford | O(VE) | O(V) | Shortest path (handles negative weights) |
| Floyd-Warshall | O(V^3) | O(V^2) | All-pairs shortest paths |
| Kruskal | O(E log E) | O(V) | Minimum spanning tree (sparse graphs) |
| Prim | O((V + E) log V) | O(V) | Minimum spanning tree (dense graphs) |
| Topological Sort | O(V + E) | O(V) | Ordering DAG dependencies |
| A* | O(E) to O(b^d) | O(V) | Shortest path with heuristic |

### BFS (Breadth-First Search)

Explores all neighbors at the current depth before moving to the next depth level. Uses a queue. Guarantees shortest path in unweighted graphs.

### DFS (Depth-First Search)

Explores as far as possible along each branch before backtracking. Uses a stack (or recursion). Useful for cycle detection, connected components, and topological sorting.

### Dijkstra's Algorithm

Greedy algorithm that finds the shortest path from a source to all other vertices. Uses a priority queue (min-heap). Does not work with negative edge weights.

### Bellman-Ford Algorithm

Relaxes all edges `V-1` times. Can detect negative-weight cycles (if any edge can still be relaxed after `V-1` iterations). Slower than Dijkstra but handles negative weights.

### Floyd-Warshall Algorithm

Computes shortest paths between all pairs of vertices using dynamic programming. `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])` for each intermediate vertex `k`.

### Kruskal's Algorithm

Builds MST by sorting all edges by weight, then adding edges that do not form a cycle (uses Union-Find/Disjoint Set). Best for sparse graphs.

### Prim's Algorithm

Builds MST by starting from any vertex and greedily adding the cheapest edge connecting the tree to a non-tree vertex. Uses a priority queue. Best for dense graphs.

### Topological Sort

Linear ordering of vertices in a DAG such that for every directed edge `u -> v`, `u` comes before `v`. Can be done via DFS (reverse post-order) or Kahn's algorithm (BFS with in-degree tracking).

### A* Search

Extension of Dijkstra that uses a heuristic `h(n)` to estimate distance to the goal. Evaluates nodes by `f(n) = g(n) + h(n)`. Optimal when the heuristic is admissible (never overestimates). Widely used in pathfinding.

---

## Dynamic Programming

Dynamic programming (DP) solves problems by breaking them into overlapping subproblems and storing results to avoid redundant computation.

### Memoization vs Tabulation

| Approach | Direction | Storage | When to Use |
|----------|-----------|---------|-------------|
| Memoization (top-down) | Recursive, stores results as computed | Hash map / array | When not all subproblems need solving |
| Tabulation (bottom-up) | Iterative, fills table from base case up | Array / table | When all subproblems are needed, avoids recursion overhead |

### Classic DP Problems

**Fibonacci Sequence** -- Each number is the sum of the two preceding ones. Naive recursion is O(2^n). DP reduces to O(n) time, O(1) space (only track last two values).

**0/1 Knapsack** -- Given `n` items with weights and values, maximize total value without exceeding capacity `W`. Build a table `dp[i][w]` where each cell is `max(dp[i-1][w], dp[i-1][w - weight[i]] + value[i])`. Time: O(nW), Space: O(nW) (reducible to O(W)).

**Longest Common Subsequence (LCS)** -- Find the longest subsequence common to two strings of lengths `m` and `n`. `dp[i][j] = dp[i-1][j-1] + 1` if characters match, else `max(dp[i-1][j], dp[i][j-1])`. Time: O(mn), Space: O(mn) (reducible to O(min(m,n))).

**Longest Increasing Subsequence (LIS)** -- Find the longest strictly increasing subsequence. Classic DP is O(n^2). Patience sorting with binary search achieves O(n log n).

**Coin Change** -- Given coin denominations, find the minimum coins to make amount `A`. `dp[a] = min(dp[a], dp[a - coin] + 1)` for each coin. Time: O(nA) where `n` = number of denominations.

**Edit Distance (Levenshtein)** -- Minimum insertions, deletions, and substitutions to transform one string into another. `dp[i][j]` considers three operations. Time: O(mn), Space: O(mn) (reducible to O(min(m,n))).

---

## Greedy Algorithms

Greedy algorithms make the locally optimal choice at each step, hoping to find the global optimum. They work when the problem has **optimal substructure** and the **greedy choice property** (a locally optimal choice leads to a globally optimal solution).

**When to use:** Optimization problems where choosing the best option at each step yields the correct answer. Always verify the greedy choice property holds.

### Classic Greedy Problems

**Activity Selection** -- Given activities with start/end times, select the maximum number of non-overlapping activities. Sort by end time, greedily pick the earliest finishing activity. Time: O(n log n).

**Huffman Coding** -- Build an optimal prefix-free binary code for data compression. Repeatedly merge the two lowest-frequency nodes into a new internal node. Uses a priority queue. Time: O(n log n).

**Fractional Knapsack** -- Unlike 0/1 knapsack, items can be divided. Sort by value/weight ratio, greedily take the highest ratio items. Time: O(n log n).

---

## Divide and Conquer

Divide the problem into smaller subproblems, solve each recursively, then combine results. Unlike DP, subproblems typically do not overlap.

**Merge Sort** -- Divide array in half, sort each half, merge. T(n) = 2T(n/2) + O(n) = O(n log n).

**Quick Sort** -- Partition around pivot, sort each side. Average T(n) = 2T(n/2) + O(n) = O(n log n). Worst case O(n^2).

**Binary Search** -- Divide search space in half each step. T(n) = T(n/2) + O(1) = O(log n).

**Closest Pair of Points** -- Find the two closest points in a 2D plane. Divide points by x-coordinate, solve each half, check the strip near the dividing line. Time: O(n log n).

**Karatsuba Multiplication** -- Multiply two n-digit numbers using 3 recursive multiplications instead of 4. T(n) = 3T(n/2) + O(n) = O(n^1.585), faster than the naive O(n^2).

---

## String Algorithms

| Algorithm | Time | Space | Description |
|-----------|------|-------|-------------|
| KMP | O(n + m) | O(m) | Pattern matching with failure function |
| Rabin-Karp | O(n + m) avg, O(nm) worst | O(1) | Rolling hash-based pattern matching |
| Trie Insert/Search | O(m) | O(alphabet * m * n) | Prefix tree operations |
| Longest Common Substring | O(mn) | O(mn) | DP-based string comparison |

### KMP (Knuth-Morris-Pratt)

Preprocesses the pattern to build a "failure function" (partial match table) that indicates how much of the pattern can be reused after a mismatch. Never backtracks in the text. Time: O(n + m).

### Rabin-Karp

Uses a rolling hash to compare the hash of the pattern with hashes of substrings of the text. Only compares characters when hashes match. Efficient for multiple-pattern search. Average O(n + m), worst O(nm) due to hash collisions.

### Trie Operations

A tree-like data structure where each node represents a character. Supports insert, search, and prefix search in O(m) time (m = key length). Used for autocomplete, spell checking, and IP routing. Space can be large: O(alphabet size * total characters stored).

### Longest Common Substring

Find the longest string that is a substring of two given strings. Build a DP table where `dp[i][j] = dp[i-1][j-1] + 1` if characters match, else 0. Track the maximum value. Time: O(mn). Can also be solved with suffix arrays in O(n log n).

---

## Tree Algorithms

### Traversals

| Traversal | Order | Use Case |
|-----------|-------|----------|
| In-order | Left, Root, Right | BST sorted output |
| Pre-order | Root, Left, Right | Copy/serialize tree |
| Post-order | Left, Right, Root | Delete tree, evaluate expressions |
| Level-order | BFS by level | Print level by level, find min depth |

All traversals visit every node once: **O(n) time, O(h) space** where `h` = tree height (O(n) worst case for skewed trees, O(log n) for balanced).

### BST Operations

| Operation | Average | Worst (unbalanced) |
|-----------|---------|---------------------|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |

### AVL Trees

Self-balancing BST where the height difference between left and right subtrees of any node is at most 1. Rebalances using four rotations: **Left**, **Right**, **Left-Right**, and **Right-Left**. All operations guaranteed O(log n).

### Segment Tree

A binary tree used for range queries (sum, min, max) and point/range updates on an array. Build: O(n). Query: O(log n). Update: O(log n). Space: O(n). Supports lazy propagation for efficient range updates.

### Fenwick Tree (Binary Indexed Tree)

A compact tree structure for prefix sum queries and point updates. Build: O(n log n). Query: O(log n). Update: O(log n). Space: O(n). Simpler and more memory-efficient than a segment tree but less versatile (primarily for prefix sums).

---

## Master Complexity Table

| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| **Sorting** | | | | |
| Bubble Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Selection Sort | O(n^2) | O(n^2) | O(n^2) | O(1) |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n^2) | O(log n) |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) |
| Counting Sort | O(n + k) | O(n + k) | O(n + k) | O(k) |
| Radix Sort | O(d(n + k)) | O(d(n + k)) | O(d(n + k)) | O(n + k) |
| Bucket Sort | O(n + k) | O(n + k) | O(n^2) | O(n) |
| **Searching** | | | | |
| Linear Search | O(1) | O(n) | O(n) | O(1) |
| Binary Search | O(1) | O(log n) | O(log n) | O(1) |
| Interpolation Search | O(1) | O(log log n) | O(n) | O(1) |
| Jump Search | O(1) | O(sqrt(n)) | O(sqrt(n)) | O(1) |
| Exponential Search | O(1) | O(log n) | O(log n) | O(1) |
| **Graph** | | | | |
| BFS | O(V + E) | O(V + E) | O(V + E) | O(V) |
| DFS | O(V + E) | O(V + E) | O(V + E) | O(V) |
| Dijkstra (min-heap) | -- | -- | O((V + E) log V) | O(V) |
| Bellman-Ford | -- | -- | O(VE) | O(V) |
| Floyd-Warshall | O(V^3) | O(V^3) | O(V^3) | O(V^2) |
| Kruskal | -- | -- | O(E log E) | O(V) |
| Prim (min-heap) | -- | -- | O((V + E) log V) | O(V) |
| Topological Sort | O(V + E) | O(V + E) | O(V + E) | O(V) |
| **String** | | | | |
| KMP | O(n + m) | O(n + m) | O(n + m) | O(m) |
| Rabin-Karp | -- | O(n + m) | O(nm) | O(1) |
| **Dynamic Programming** | | | | |
| Fibonacci (DP) | O(n) | O(n) | O(n) | O(1) |
| 0/1 Knapsack | -- | -- | O(nW) | O(nW) |
| LCS | -- | -- | O(mn) | O(mn) |
| LIS (optimal) | -- | -- | O(n log n) | O(n) |
| Coin Change | -- | -- | O(nA) | O(A) |
| Edit Distance | -- | -- | O(mn) | O(mn) |
| **Tree** | | | | |
| BST Search (balanced) | O(1) | O(log n) | O(log n) | O(1) |
| BST Search (unbalanced) | O(1) | O(log n) | O(n) | O(1) |
| Segment Tree Query | -- | -- | O(log n) | O(n) |
| Fenwick Tree Query | -- | -- | O(log n) | O(n) |
