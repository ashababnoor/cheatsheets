# SQL Data Manipulation Language (DML) Commands Cheatsheet

## INSERT INTO

```sql
INSERT INTO <table_name> (<column1>, <column2>, ...) VALUES (<value1>, <value2>, ...);
```

- **Description**: Inserts a new row into a table with specified column values.
- **Example**: 
  ```sql
  INSERT INTO employees (id, name, department) VALUES (1, 'John Doe', 'HR');
  ```

## UPDATE

```sql
UPDATE <table_name> SET <column>=<value> WHERE <condition>;
```

- **Description**: Modifies existing records in a table based on a condition.
- **Example**: 
  ```sql
  UPDATE employees SET department='Finance' WHERE id=1;
  ```

## DELETE FROM

```sql
DELETE FROM <table_name> WHERE <condition>;
```

- **Description**: Deletes records from a table based on a condition.
- **Example**: 
  ```sql
  DELETE FROM employees WHERE id=1;
  ```

## MERGE INTO

```sql
MERGE INTO <target_table> USING <source_table> ON <condition>
WHEN MATCHED THEN UPDATE SET <column>=<value>
WHEN NOT MATCHED THEN INSERT (<columns>) VALUES (<values>);
```

- **Description**: Performs merge operations (update/insert) based on a condition.
- **Example**: 
  ```sql
  MERGE INTO sales_data USING temp_data ON sales_data.product_id = temp_data.product_id
  WHEN MATCHED THEN UPDATE SET sales_data.quantity = temp_data.quantity
  WHEN NOT MATCHED THEN INSERT (product_id, quantity) VALUES (temp_data.product_id, temp_data.quantity);
  ```

## SELECT INTO

```sql
SELECT <columns> INTO <new_table> FROM <source_table> WHERE <condition>;
```

- **Description**: Selects data from a table into a new table based on a condition.
- **Example**: 
  ```sql
  SELECT id, name INTO temp_employees FROM employees WHERE department='IT';
  ```

## TRUNCATE TABLE

```sql
TRUNCATE TABLE <table_name>;
```

- **Description**: Deletes all rows from a table while retaining the table structure.
- **Example**: 
  ```sql
  TRUNCATE TABLE sales_data;
  ```