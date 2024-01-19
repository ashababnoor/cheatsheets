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

In the tables, "O(1)" denotes constant time/space complexity, "O(n)" denotes linear time/space complexity, "O(n^2)" denotes quadratic time complexity, "O(log n)" denotes logarithmic time complexity, and "O(n log n)" denotes linearithmic time complexity. These are average-case complexities. Worst-case complexities may be different.