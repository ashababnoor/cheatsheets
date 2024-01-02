# SQL DQL Commands & Functions Cheatsheet

## SELECT

```sql
SELECT <columns> FROM <table>;
```

- **Description**: Retrieves data from a table.
- **Example**: 
  ```sql
  SELECT * FROM employees;
  ```

## WHERE Clause

```sql
SELECT <columns> FROM <table> WHERE <condition>;
```

- **Description**: Filters rows based on specified conditions.
- **Example**: 
  ```sql
  SELECT name, department FROM employees WHERE salary > 50000;
  ```

## DISTINCT

```sql
SELECT DISTINCT <column> FROM <table>;
```

- **Description**: Retrieves unique values from a column.
- **Example**: 
  ```sql
  SELECT DISTINCT department FROM employees;
  ```

## ORDER BY

```sql
SELECT <columns> FROM <table> ORDER BY <column> ASC/DESC;
```

- **Description**: Orders results by a specified column.
- **Example**: 
  ```sql
  SELECT * FROM products ORDER BY price DESC;
  ```

## GROUP BY & Aggregate Functions

```sql
SELECT <aggregate_function>(<column>) FROM <table> GROUP BY <column>;
```

- **Description**: Groups rows and performs aggregate functions.
- **Example**: 
  ```sql
  SELECT department, COUNT(*) FROM employees GROUP BY department;
  ```

## HAVING Clause

```sql
SELECT <column>, <aggregate_function>(<column>) FROM <table> GROUP BY <column> HAVING <condition>;
```

- **Description**: Filters grouped results based on conditions.
- **Example**: 
  ```sql
  SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 60000;
  ```

## JOINS

JOIN in SQL is used to combine rows from two or more tables based on a related column between them.

Different types of JOINs in SQL include:

1. INNER JOIN: Retrieves records with matching values in both tables based on a specified condition.

2. LEFT JOIN (or LEFT OUTER JOIN): Retrieves all records from the left table and matching records from the right table based on a specified condition. If there's no match in the right table, NULL values are filled in.

3. RIGHT JOIN (or RIGHT OUTER JOIN): Retrieves all records from the right table and matching records from the left table based on a specified condition. If there's no match in the left table, NULL values are filled in.

4. FULL OUTER JOIN: Retrieves all records when there is a match in either the left or right table. It combines the results of both LEFT and RIGHT JOINs.


Consider two tables:

**Table A (employees)**:

| id | name    | department |
|----|---------|------------|
| 1  | John    | HR         |
| 2  | Jane    | Finance    |
| 3  | Alice   | Marketing  |

**Table B (salaries)**:

| id | employee_id | salary |
|----|-------------|--------|
| 1  | 1           | 60000  |
| 2  | 3           | 55000  |
| 3  | 2           | 62000  |


### INNER JOIN

```sql
SELECT <columns> 
FROM <table1> 
INNER JOIN <table2> ON <condition>;
```

- **Description**: Retrieves records with matching values in both tables.

**Visual Example**  
Visual Representation of INNER JOIN:

```
+----+------+-----------+-------------+--------+
| id | name | department| employee_id | salary |
+----+------+-----------+-------------+--------+
| 1  | John | HR        | 1           | 60000  |
| 2  | Jane | Finance   | 2           | 62000  |
| 3  | Alice| Marketing | 3           | 55000  |
+----+------+-----------+-------------+--------+
```

## LEFT JOIN

```sql
SELECT <columns> 
FROM <table1> 
LEFT JOIN <table2> ON <condition>;
```

- **Description**: Retrieves all records from the left table and matching records from the right table.

**Visual Example**  
Visual Representation of LEFT JOIN:

```
+----+------+-----------+-------------+--------+
| id | name | department| employee_id | salary |
+----+------+-----------+-------------+--------+
| 1  | John | HR        | 1           | 60000  |
| 2  | Jane | Finance   | 2           | 62000  |
| 3  | Alice| Marketing | 3           | 55000  |
| 4  | Mark | Sales     | NULL        | NULL   |
+----+------+-----------+-------------+--------+
```

## RIGHT JOIN

```sql
SELECT <columns> 
FROM <table1> 
RIGHT JOIN <table2> ON <condition>;
```

- **Description**: Retrieves all records from the right table and matching records from the left table.

**Visual Example**  
Visual Representation of RIGHT JOIN:

```
+-----+------+-----------+-------------+--------+
| id  | name | department| employee_id | salary |
+-----+------+-----------+-------------+--------+
| 1   | John | HR        | 1           | 60000  |
| 2   | Jane | Finance   | 2           | 62000  |
| 3   | Alice| Marketing | 3           | 55000  |
| NULL| NULL | NULL      | 4           | 70000  |
+-----+------+-----------+-------------+--------+
```

## FULL OUTER JOIN

```sql
SELECT <columns> 
FROM <table1> 
FULL OUTER JOIN <table2> ON <condition>;
```

- **Description**: Retrieves all records when there is a match in either the left or right table.

**Visual Example**  
Visual Representation of FULL OUTER JOIN:

```
+-----+------+-----------+-------------+--------+
| id  | name | department| employee_id | salary |
+-----+------+-----------+-------------+--------+
| 1   | John | HR        | 1           | 60000  |
| 2   | Jane | Finance   | 2           | 62000  |
| 3   | Alice| Marketing | 3           | 55000  |
| NULL| NULL | NULL      | 4           | 70000  |
+-----+------+-----------+-------------+--------+
```


## String Functions

- **Description**: Manipulate strings within queries.
- **Examples**:
  - `CONCAT(str1, str2)`: Concatenates strings.
  - `SUBSTRING(string, start, length)`: Retrieves part of a string.
  - `UPPER(string)` / `LOWER(string)`: Converts string to uppercase/lowercase.

## Numeric Functions

- **Description**: Perform calculations on numeric data.
- **Examples**:
  - `ROUND(number, decimals)`: Rounds a number to a specified number of decimal places.
  - `ABS(number)`: Returns the absolute value of a number.
  - `SUM(column)`: Calculates the sum of values in a column.

## Date Functions

- **Description**: Manipulate and retrieve date and time data.
- **Examples**:
  - `GETDATE()`: Retrieves the current date and time.
  - `DATEADD(unit, value, date)`: Adds/subtracts a specified time interval to/from a date.
