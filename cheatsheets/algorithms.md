# Algorithms Cheatsheet

This cheatsheet provides a list of common algorithms, their time complexities, and space complexities.

## Sorting Algorithms

### Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(n^2)          | O(1)             |

### Selection Sort

Selection Sort is a simple sorting algorithm that divides the input into a sorted and an unsorted region, and iteratively shrinks the unsorted region by extracting the smallest element and moving that to the sorted region.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(n^2)          | O(1)             |

### Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(n^2)          | O(1)             |

### Quick Sort

Quick Sort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(n log n)      | O(log n)         |

### Merge Sort

Merge Sort is a divide-and-conquer algorithm that was invented by John von Neumann in 1945. It divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and repeatedly merges sublists to produce new sorted sublists until there is only one sublist remaining.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(n log n)      | O(n)             |

## Search Algorithms

### Linear Search

Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(n)            | O(1)             |

### Binary Search

Binary Search is a search algorithm that finds the position of a target value within a sorted array.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(log n)        | O(1)             |

## Graph Algorithms

### Depth-First Search (DFS)

DFS is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root and explores as far as possible along each branch before backtracking.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(V + E)        | O(V)             |

### Breadth-First Search (BFS)

BFS is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root and explores all of the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(V + E)        | O(V)             |

## Dynamic Programming Algorithms

### Fibonacci Sequence

The Fibonacci Sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. Dynamic programming can be used to calculate Fibonacci numbers efficiently.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(n)            | O(1)             |

### Knapsack Problem

The knapsack problem is a problem in combinatorial optimization: Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(nW)           | O(nW)            |

## String Matching Algorithms

### Naive String Matching

Naive string matching algorithm slides the pattern over text one by one and checks for a match. If a match is found, then slides by 1 again to check for subsequent matches.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(m(n-m+1))     | O(1)             |

### KMP (Knuth Morris Pratt) 

KMP is a linear time complexity algorithm used to find the occurrences of a "word" within a "text". It does preprocessing over the pattern to save time.

| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(n)            | O(m)             |

<br>

In the tables, 
- `O(1)` denotes constant time/space complexity
- `O(n)` denotes linear time/space complexity 
- `O(n^2)` denotes quadratic time complexity
- `O(log n)` denotes logarithmic time complexity
- `O(n log n)` denotes linearithmic time complexity
- `O(m(n-m+1))` denotes worst-case time complexity for naive string matching
- `O(V + E)` denotes linear time complexity in terms of vertices and edges for graph algorithms, and 
- `O(nW)` denotes the time complexity for the knapsack problem where 'n' is the number of items and 'W' is the capacity of the knapsack. 

These are average-case complexities. Worst-case complexities may be different.

| Symbol | Meaning |
|--------|---------|
| n      | The size of the input data |
| m      | Typically represents the size of another input data |
| V      | The number of vertices in a graph |
| E      | The number of edges in a graph |
| W      | The maximum capacity of the knapsack in the Knapsack Problem |