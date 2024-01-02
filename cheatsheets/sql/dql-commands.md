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

```sql
SELECT <columns> FROM <table1> INNER JOIN <table2> ON <condition>;
```

- **Description**: Retrieves records with matching values in both tables.
- **Example**: 
  ```sql
  SELECT orders.order_id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id;
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
