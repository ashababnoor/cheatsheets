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

### LEFT JOIN

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

### RIGHT JOIN

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

### FULL OUTER JOIN

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


## Functions in SQL

In SQL, there are two primary categories of functions: General (or Scalar) Functions and Aggregate Functions.

### General (Scalar) Functions:

These functions operate on a single row at a time and return a single result per row.

#### String Functions:

- **`CONCAT(str1, str2)`**: Concatenates two strings.
  ```sql
  SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;
  ```

- **`SUBSTRING(string, start, length)`**: Retrieves a substring from a string.
  ```sql
  SELECT SUBSTRING(product_name, 1, 3) AS short_name FROM products;
  ```

- **`UPPER(string)` / `LOWER(string)`**: Converts a string to uppercase/lowercase.
  ```sql
  SELECT UPPER(city) AS city_upper FROM customers;
  ```

#### Numeric Functions:

- **`ROUND(number, decimals)`**: Rounds a number to a specified number of decimal places.
  ```sql
  SELECT ROUND(salary, 2) AS rounded_salary FROM employees;
  ```

- **`ABS(number)`**: Returns the absolute value of a number.
  ```sql
  SELECT ABS(profit_loss) AS absolute_profit_loss FROM financial_data;
  ```

#### Date Functions:

- **`GETDATE()`**: Retrieves the current date and time.
  ```sql
  SELECT GETDATE() AS current_datetime;
  ```

- **`DATEADD(unit, value, date)`**: Adds/subtracts a specified time interval to/from a date.
  ```sql
  SELECT DATEADD(day, 7, order_date) AS delivery_date FROM orders;
  ```

### Aggregate Functions:

These functions operate on multiple rows of a table and return a single value based on the group of rows.

#### Aggregate Functions:

- **`COUNT(column)`**: Counts the number of rows or non-null values in a column.
  ```sql
  SELECT COUNT(product_id) AS total_products FROM products;
  ```

- **`SUM(column)`**: Calculates the sum of values in a column.
  ```sql
  SELECT SUM(sales_amount) AS total_sales FROM sales_data;
  ```

- **`AVG(column)`**: Calculates the average value of a column.
  ```sql
  SELECT AVG(price) AS average_price FROM products;
  ```

- **`MIN(column)` / `MAX(column)`**: Retrieves the minimum/maximum value in a column.
  ```sql
  SELECT MIN(salary) AS min_salary FROM employees;
  SELECT MAX(age) AS max_age FROM users;
  ```

Aggregate functions often accompany a `GROUP BY` clause to calculate values for specific groups within a dataset. Here are some examples of aggregate functions with the `GROUP BY` clause:

#### Aggregate Functions with GROUP BY

##### `COUNT()` with `GROUP BY`:

Counts the number of occurrences in a specific column for each group.

```sql
SELECT department, COUNT(*) AS num_employees
FROM employees
GROUP BY department;
```

##### `SUM()` with `GROUP BY`:

Calculates the sum of a column for each group.

```sql
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;
```

##### `AVG()` with `GROUP BY`:

Finds the average value of a column for each group.

```sql
SELECT department, AVG(age) AS avg_age
FROM users
GROUP BY department;
```

##### `MIN()` and `MAX()` with `GROUP BY`:

Retrieves the minimum and maximum values of a column for each group.

```sql
SELECT category, MIN(price) AS min_price, MAX(price) AS max_price
FROM products
GROUP BY category;
```

When using aggregate functions with `GROUP BY`, the results are aggregated based on the groups defined by the `GROUP BY` clause. Each row in the output represents a unique group along with the aggregated value(s) calculated for that group.


These functions serve different purposes: general functions operate on individual rows, modifying or transforming data, while aggregate functions perform calculations on groups of rows to derive summary information.