---
title: "Data Structures"
subtitle: "Arrays, lists, stacks, queues, hash tables, trees, heaps, and graphs, with operations and complexities."
description: "Quick reference for data structures — arrays, linked lists, trees, graphs, hash tables, stacks, queues, and their operations."
category: "CS Fundamentals"
icon: "blocks"
---

## Arrays

A contiguous block of memory storing elements of the same type, accessed by index.

```plaintext
Index:   0    1    2    3    4
       [12] [45] [32] [67] [40]
```

### Operations Complexity

| Operation        | Time Complexity |
|------------------|-----------------|
| Access by index  | O(1)            |
| Search (unsorted)| O(n)            |
| Search (sorted)  | O(log n)        |
| Insert at end    | O(1) amortized  |
| Insert at index  | O(n)            |
| Delete at end    | O(1)            |
| Delete at index  | O(n)            |

**Space complexity:** O(n)

### Static vs Dynamic Arrays

| Aspect         | Static Array              | Dynamic Array (e.g., `ArrayList`, `vector`) |
|----------------|---------------------------|----------------------------------------------|
| Size           | Fixed at creation         | Grows/shrinks automatically                  |
| Memory         | Stack or heap, no waste   | Heap, may over-allocate (capacity > size)    |
| Resize cost    | N/A                       | O(n) when capacity exceeded (amortized O(1)) |
| Cache locality | Excellent                 | Excellent                                    |

### When to Use

- Frequent random access by index.
- Data size is known or changes infrequently.
- Cache-friendly iteration is important.

## Linked Lists

A linear collection of nodes where each node holds data and a pointer to the next (and optionally previous) node. Order is maintained by links, not physical memory layout.

```plaintext
Singly:   [12] -> [45] -> [32] -> [67] -> [40] -> null

Doubly:   null <- [12] <-> [45] <-> [32] <-> [67] <-> [40] -> null

Circular: [12] -> [45] -> [32] -> [67] -> [40] -+
           ^                                    |
           +------------------------------------+
```

### Variants

| Variant         | Description                                                |
|-----------------|------------------------------------------------------------|
| Singly linked   | Each node points to the next node only                     |
| Doubly linked   | Each node points to both next and previous nodes           |
| Circular        | Tail node points back to the head, forming a loop          |

### Operations Complexity

| Operation              | Singly | Doubly |
|------------------------|--------|--------|
| Access by index        | O(n)   | O(n)   |
| Search                 | O(n)   | O(n)   |
| Insert at head         | O(1)   | O(1)   |
| Insert at tail (w/ref) | O(1)   | O(1)   |
| Insert at middle       | O(n)   | O(n)   |
| Delete head            | O(1)   | O(1)   |
| Delete given node      | O(n)   | O(1)   |
| Delete tail            | O(n)   | O(1)   |

**Space complexity:** O(n)

### Linked Lists vs Arrays

| Aspect            | Array                  | Linked List              |
|-------------------|------------------------|--------------------------|
| Random access     | O(1)                   | O(n)                     |
| Insert/delete head| O(n)                   | O(1)                     |
| Memory layout     | Contiguous             | Scattered                |
| Cache performance | Excellent              | Poor                     |
| Extra memory      | None                   | Pointer(s) per node      |
| Size flexibility  | Fixed (or resize cost) | Grows/shrinks freely     |

## Stacks

A linear data structure following the **LIFO** (Last In, First Out) principle. Only the top element is accessible.

```plaintext
        +----+
  Top   | 40 |  <- push / pop / peek
        +----+
        | 67 |
        +----+
        | 32 |
        +----+
        | 45 |
        +----+
        | 12 |
        +----+
```

### Operations Complexity

| Operation | Description                  | Time Complexity |
|-----------|------------------------------|-----------------|
| Push      | Add element to top           | O(1)            |
| Pop       | Remove element from top      | O(1)            |
| Peek/Top  | View top element             | O(1)            |
| Search    | Find element in stack        | O(n)            |
| isEmpty   | Check if stack is empty      | O(1)            |

**Space complexity:** O(n)

### Common Uses

- **Expression evaluation** -- converting and evaluating infix, postfix, and prefix expressions.
- **Undo/Redo mechanisms** -- each action is pushed; undo pops from the stack.
- **Depth-First Search (DFS)** -- explicit or implicit (call stack) traversal of graphs/trees.
- **Balanced parentheses** -- push opening brackets, pop and match on closing brackets.
- **Function call stack** -- managing return addresses, local variables, and parameters.
- **Browser back/forward navigation** -- history stored as a stack.

## Queues

A linear data structure following the **FIFO** (First In, First Out) principle. Elements are added at the rear and removed from the front.

```plaintext
  Dequeue                      Enqueue
  <---- [12] [45] [32] [67] [40] <----
  Front                           Rear
```

### Types of Queues

| Type           | Description                                                        |
|----------------|--------------------------------------------------------------------|
| Simple Queue   | Standard FIFO; insert at rear, remove from front                   |
| Circular Queue | Rear wraps around to front, efficiently reuses space               |
| Deque          | Double-ended queue; insert/remove from both front and rear         |
| Priority Queue | Elements dequeued by priority, not insertion order (often heap-backed) |

### Operations Complexity

| Operation       | Simple / Circular | Deque  | Priority Queue (heap) |
|-----------------|-------------------|--------|-----------------------|
| Enqueue (rear)  | O(1)              | O(1)   | O(log n)              |
| Dequeue (front) | O(1)              | O(1)   | O(log n)              |
| Peek front      | O(1)              | O(1)   | O(1)                  |
| Insert front    | N/A               | O(1)   | N/A                   |
| Remove rear     | N/A               | O(1)   | N/A                   |
| Search          | O(n)              | O(n)   | O(n)                  |

**Space complexity:** O(n)

### Common Uses

- **Breadth-First Search (BFS)** -- level-order traversal of graphs and trees.
- **Task scheduling** -- OS process scheduling, print queues.
- **Rate limiting / buffering** -- managing requests in order.
- **Message queues** -- asynchronous communication between services.

## Hash Tables

A data structure that maps keys to values using a **hash function** to compute an index into an array of buckets.

```plaintext
  Key     Hash Function       Bucket
  "one"   ---> h("one")   --> [0] -> (one, 1)
  "two"   ---> h("two")   --> [1] -> (two, 2)
  "three" ---> h("three") --> [2] -> (three, 3)
  "four"  ---> h("four")  --> [1] -> (two, 2) -> (four, 4)  [collision]
```

### Collision Handling

| Strategy                | Description                                                         | Pros                              | Cons                                  |
|-------------------------|---------------------------------------------------------------------|-----------------------------------|---------------------------------------|
| Chaining                | Each bucket stores a linked list (or other collection) of entries   | Simple, handles high load         | Extra memory for pointers             |
| Open Addressing (linear)| On collision, probe the next slot linearly                          | Cache-friendly, no extra pointers | Clustering degrades performance       |
| Open Addressing (quadratic) | Probe slots at quadratic intervals                             | Reduces clustering vs linear      | Secondary clustering possible         |
| Double Hashing          | Use a second hash function to determine probe step                  | Minimal clustering                | More complex to implement             |

### Operations Complexity

| Operation | Average | Worst Case |
|-----------|---------|------------|
| Search    | O(1)    | O(n)       |
| Insert    | O(1)    | O(n)       |
| Delete    | O(1)    | O(n)       |
| Access    | N/A     | N/A        |

**Space complexity:** O(n)

### Load Factor

- **Load factor** = number of entries / number of buckets.
- Typical threshold for resizing: 0.7 - 0.75.
- Higher load factor increases collisions; lower wastes memory.
- Resizing (rehashing) costs O(n) but happens infrequently (amortized O(1) inserts).

## Trees

A hierarchical data structure consisting of nodes connected by edges, with a single root node and no cycles.

```plaintext
Binary Search Tree:
           45
          /  \
        32    67
       /  \     \
     12    40    80
```

### Tree Types

| Type       | Key Property                                                                  |
|------------|-------------------------------------------------------------------------------|
| Binary Tree| Each node has at most 2 children                                              |
| BST        | Left child < parent < right child                                             |
| AVL Tree   | Self-balancing BST; heights of subtrees differ by at most 1                   |
| Red-Black  | Self-balancing BST; nodes colored red/black with balancing rules              |
| B-Tree     | Self-balancing; nodes can have many children; optimized for disk I/O          |

### Operations Complexity

| Operation | BST (avg) | BST (worst) | AVL / Red-Black | B-Tree (order m) |
|-----------|-----------|-------------|-----------------|-------------------|
| Access    | O(log n)  | O(n)        | O(log n)        | O(log n)          |
| Search    | O(log n)  | O(n)        | O(log n)        | O(log n)          |
| Insert    | O(log n)  | O(n)        | O(log n)        | O(log n)          |
| Delete    | O(log n)  | O(n)        | O(log n)        | O(log n)          |

**Space complexity:** O(n)

### Traversal Types

| Traversal    | Order                        | Use Case                         |
|--------------|------------------------------|----------------------------------|
| In-order     | Left, Root, Right            | BST sorted output                |
| Pre-order    | Root, Left, Right            | Copy/serialize a tree            |
| Post-order   | Left, Right, Root            | Delete a tree, evaluate expressions |
| Level-order  | Breadth-first (level by level)| BFS, shortest path in unweighted tree |

## Heaps

A complete binary tree satisfying the **heap property**: in a min-heap every parent is smaller than or equal to its children; in a max-heap every parent is greater than or equal to its children. Typically stored as an array.

```plaintext
Min-Heap:            Max-Heap:
      10                   80
     /  \                 /  \
   20    30             67    45
  / \                  / \
 40  50               12  32

Array: [10, 20, 30, 40, 50]    Array: [80, 67, 45, 12, 32]
Parent of i: (i-1)/2           Children of i: 2i+1, 2i+2
```

### Operations Complexity

| Operation       | Time Complexity |
|-----------------|-----------------|
| Find min/max    | O(1)            |
| Insert          | O(log n)        |
| Extract min/max | O(log n)        |
| Delete arbitrary| O(log n)        |
| Heapify (build) | O(n)            |
| Merge two heaps | O(n + m)        |

**Space complexity:** O(n)

### Common Uses

- **Priority queue** -- efficient retrieval of the highest/lowest priority element.
- **Top-K elements** -- maintain a heap of size K while streaming data.
- **Median finding** -- use a max-heap for the lower half and min-heap for the upper half.
- **Heap sort** -- O(n log n) in-place comparison sort.
- **Dijkstra's / Prim's algorithms** -- min-heap as the priority queue for graph algorithms.

## Graphs

A collection of **vertices** (nodes) connected by **edges** (links). Graphs model relationships and networks.

### Terminology

| Term       | Definition                                                   |
|------------|--------------------------------------------------------------|
| Vertex     | A node in the graph                                          |
| Edge       | A connection between two vertices                            |
| Directed   | Edges have a direction (A -> B)                              |
| Undirected | Edges have no direction (A -- B)                             |
| Weighted   | Edges carry a numerical cost/weight                          |
| Degree     | Number of edges connected to a vertex                        |
| Path       | A sequence of vertices connected by edges                    |
| Cycle      | A path that starts and ends at the same vertex               |
| DAG        | Directed Acyclic Graph; directed graph with no cycles        |

### Representations

| Aspect            | Adjacency List              | Adjacency Matrix           |
|-------------------|-----------------------------|----------------------------|
| Storage           | O(V + E)                    | O(V^2)                     |
| Add vertex        | O(1)                        | O(V^2) (rebuild matrix)    |
| Add edge          | O(1)                        | O(1)                       |
| Remove edge       | O(E)                        | O(1)                       |
| Check edge exists | O(degree)                   | O(1)                       |
| Best for          | Sparse graphs               | Dense graphs               |
| Memory efficient  | Yes, for sparse graphs      | No, wastes space if sparse |
| Iterate neighbors | O(degree)                   | O(V)                       |

### Traversals

| Traversal | Data Structure | Time Complexity | Use Cases                                      |
|-----------|----------------|-----------------|------------------------------------------------|
| BFS       | Queue          | O(V + E)        | Shortest path (unweighted), level-order        |
| DFS       | Stack / Recursion | O(V + E)     | Cycle detection, topological sort, pathfinding |

## Tries

A tree-like data structure where each node represents a character. Paths from root to marked nodes form stored strings. Also called a **prefix tree**.

```plaintext
         (root)
        /   |   \
       c    d    t
       |    |    |
       a    o    o
      / \   |    |
     r   t  g    p
     |
     s
   Stores: "car", "cars", "cat", "dog", "top"
```

### Operations Complexity

| Operation         | Time Complexity | Notes                  |
|-------------------|-----------------|------------------------|
| Insert word       | O(m)            | m = length of the word |
| Search word       | O(m)            |                        |
| Delete word       | O(m)            |                        |
| Prefix search     | O(m + k)        | k = number of matches  |
| Starts-with check | O(m)            |                        |

**Space complexity:** O(n * m) where n = number of words, m = average word length (worst case; can be reduced with shared prefixes)

### Common Uses

- **Autocomplete** -- traverse the trie from the prefix to list completions.
- **Spell checking** -- verify if a word exists; suggest corrections by exploring nearby branches.
- **Prefix matching** -- efficiently find all strings with a given prefix.
- **IP routing** -- longest prefix matching in routing tables.
- **Word games** -- fast dictionary lookups (e.g., Boggle, Scrabble solvers).

## Complexity Comparison Table

A master reference for average-case and worst-case time complexities across common data structures.

### Average Case

| Data Structure  | Access   | Search   | Insert   | Delete   |
|-----------------|----------|----------|----------|----------|
| Array           | O(1)     | O(n)     | O(n)     | O(n)     |
| Linked List     | O(n)     | O(n)     | O(1)     | O(1)     |
| Stack           | O(n)     | O(n)     | O(1)     | O(1)     |
| Queue           | O(n)     | O(n)     | O(1)     | O(1)     |
| Hash Table      | N/A      | O(1)     | O(1)     | O(1)     |
| BST             | O(log n) | O(log n) | O(log n) | O(log n) |
| AVL Tree        | O(log n) | O(log n) | O(log n) | O(log n) |
| Red-Black Tree  | O(log n) | O(log n) | O(log n) | O(log n) |
| B-Tree          | O(log n) | O(log n) | O(log n) | O(log n) |
| Heap            | O(n)     | O(n)     | O(log n) | O(log n) |
| Trie            | O(m)     | O(m)     | O(m)     | O(m)     |

### Worst Case

| Data Structure  | Access   | Search   | Insert   | Delete   |
|-----------------|----------|----------|----------|----------|
| Array           | O(1)     | O(n)     | O(n)     | O(n)     |
| Linked List     | O(n)     | O(n)     | O(1)     | O(1)     |
| Stack           | O(n)     | O(n)     | O(1)     | O(1)     |
| Queue           | O(n)     | O(n)     | O(1)     | O(1)     |
| Hash Table      | N/A      | O(n)     | O(n)     | O(n)     |
| BST             | O(n)     | O(n)     | O(n)     | O(n)     |
| AVL Tree        | O(log n) | O(log n) | O(log n) | O(log n) |
| Red-Black Tree  | O(log n) | O(log n) | O(log n) | O(log n) |
| B-Tree          | O(log n) | O(log n) | O(log n) | O(log n) |
| Heap            | O(n)     | O(n)     | O(log n) | O(log n) |
| Trie            | O(m)     | O(m)     | O(m)     | O(m)     |

> **Key:** n = number of elements, m = length of key/word. Linked list insert/delete assumes you already have a reference to the node. Hash table averages assume a good hash function and low load factor.

### Notation Reference

| Notation   | Name             | Example                          |
|------------|------------------|----------------------------------|
| O(1)       | Constant         | Array access by index            |
| O(log n)   | Logarithmic      | Binary search, balanced BST ops  |
| O(n)       | Linear           | Unsorted array search            |
| O(n log n) | Linearithmic     | Heap sort, merge sort            |
| O(m)       | Key-length       | Trie operations (m = key length) |
