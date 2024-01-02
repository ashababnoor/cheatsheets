# SQL DDL Commands Cheatsheet

## CREATE DATABASE

```sql
CREATE DATABASE <database_name>;
```

- **Description**: Creates a new database with the specified name.
- **Example**: `CREATE DATABASE company_db;`

## DROP DATABASE

```sql
DROP DATABASE <database_name>;
```

- **Description**: Deletes the specified database.
- **Example**: `DROP DATABASE old_data_db;`

## CREATE TABLE

```sql
CREATE TABLE <table_name> (
    <column1> <datatype1>,
    <column2> <datatype2>,
    ...
);
```

- **Description**: Creates a new table with defined columns and data types.
- **Example**: 
  ```sql
  CREATE TABLE employees (
      id INT,
      name VARCHAR(50),
      department VARCHAR(50)
  );
  ```

### Column Constraints

- `NOT NULL`: Ensures a column cannot contain NULL values.
- `UNIQUE`: Ensures all values in a column are unique.
- `PRIMARY KEY`: Uniquely identifies each record in a table.
- `FOREIGN KEY`: Constrains data based on a column in another table.
- `CHECK`: Enforces specific conditions on data values in a column.

## ALTER TABLE

```sql
ALTER TABLE <table_name> ADD COLUMN <column_name> <datatype>;
```

- **Description**: Adds a new column to an existing table.
- **Example**: `ALTER TABLE employees ADD COLUMN email VARCHAR(100);`

```sql
ALTER TABLE <table_name> DROP COLUMN <column_name>;
```

- **Description**: Removes a column from an existing table.
- **Example**: `ALTER TABLE employees DROP COLUMN age;`

## DROP TABLE

```sql
DROP TABLE <table_name>;
```

- **Description**: Deletes the specified table.
- **Example**: `DROP TABLE customers;`

## TRUNCATE TABLE

```sql
TRUNCATE TABLE <table_name>;
```

- **Description**: Deletes all rows from a table while retaining the table structure.
- **Example**: `TRUNCATE TABLE sales_data;`

## RENAME TABLE

```sql
RENAME TABLE <old_name> TO <new_name>;
```

- **Description**: Renames an existing table.
- **Example**: `RENAME TABLE sales_data TO yearly_sales;`


Absolutely! Here are additional Data Definition Language (DDL) commands to further enrich the SQL DDL Commands cheatsheet:

## CREATE INDEX

```sql
CREATE INDEX <index_name> ON <table_name> (<column_name>);
```

- **Description**: Creates an index on a table column to improve query performance.
- **Example**: `CREATE INDEX idx_customer_id ON customers (customer_id);`

## DROP INDEX

```sql
DROP INDEX <index_name>;
```

- **Description**: Deletes the specified index from the database.
- **Example**: `DROP INDEX idx_customer_id;`

## CREATE VIEW

```sql
CREATE VIEW <view_name> AS
SELECT <columns>
FROM <table>
WHERE <condition>;
```

- **Description**: Creates a virtual table based on a query's result set.
- **Example**: 
  ```sql
  CREATE VIEW high_sales AS
  SELECT product_id, SUM(quantity) AS total_sold
  FROM sales
  WHERE quantity > 100
  GROUP BY product_id;
  ```

## DROP VIEW

```sql
DROP VIEW <view_name>;
```

- **Description**: Deletes the specified view.
- **Example**: `DROP VIEW high_sales;`

## CREATE SCHEMA

```sql
CREATE SCHEMA <schema_name>;
```

- **Description**: Creates a new schema within the current database.
- **Example**: `CREATE SCHEMA accounting_schema;`

## DROP SCHEMA

```sql
DROP SCHEMA <schema_name>;
```

- **Description**: Deletes the specified schema and all its objects.
- **Example**: `DROP SCHEMA accounting_schema;`
