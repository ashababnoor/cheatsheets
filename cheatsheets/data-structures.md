# Data Structures Cheatsheet

This cheatsheet provides a list of common data structures, their properties, definitions, and visual examples.

## Arrays

An array is a collection of elements identified by index or key.

```plaintext
Example: [12, 45, 32, 67, 40]
```

| Property | Time Complexity |
|---------|-------------|
| Access | O(1) |
| Search | O(n) |
| Insertion | O(n) |
| Deletion | O(n) |

## Linked Lists

A linked list is a linear collection of data elements whose order is not given by their physical placement in memory.

```plaintext
Example: 12 -> 45 -> 32 -> 67 -> 40
```

| Property | Time Complexity |
|---------|-------------|
| Access | O(n) |
| Search | O(n) |
| Insertion | O(1) |
| Deletion | O(1) |

## Stacks

A stack is a linear data structure that follows the LIFO (Last In First Out) principle.

```plaintext
Example: 
    40
    67
    32
    45
    12
```

| Property | Time Complexity |
|---------|-------------|
| Access | O(n) |
| Search | O(n) |
| Insertion | O(1) |
| Deletion | O(1) |

## Queues

A queue is a linear data structure that follows the FIFO (First In First Out) principle.

```plaintext
Example: 
    12 <- 45 <- 32 <- 67 <- 40
```

| Property | Time Complexity |
|---------|-------------|
| Access | O(n) |
| Search | O(n) |
| Insertion | O(1) |
| Deletion | O(1) |

## Hash Tables

A hash table, also known as a hash map, is a data structure that implements an associative array abstract data type, a structure that can map keys to values.

```plaintext
Example: 
    { 'one': 1, 'two': 2, 'three': 3, 'four': 4 }
```

| Property | Time Complexity |
|---------|-------------|
| Access | N/A |
| Search | O(1) |
| Insertion | O(1) |
| Deletion | O(1) |

## Binary Search Trees

A binary search tree is a rooted binary tree, whose internal nodes each store a key (and optionally, an associated value), and each have two distinguished sub-trees, commonly denoted left and right.

```plaintext
Example: 
         45
        /  \
      32    67
     /  \     \
   12    40    80
```

| Property | Time Complexity |
|---------|-------------|
| Access | O(log n) |
| Search | O(log n) |
| Insertion | O(log n) |
| Deletion | O(log n) |

<br>

In the tables, the time complexity notations have different meanings. They denote the following:

| Notation | Meaning          |
|----------|------------------|
| O(1)     | Constant Time    |
| O(n)     | Linear Time      |
| O(log n) | Logarithmic Time |

These are average-case time complexities. Worst-case time complexities may be different.