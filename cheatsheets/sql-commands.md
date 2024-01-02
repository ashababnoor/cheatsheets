# SQL Commands Cheatsheet

This cheatsheet provides a list of useful SQL commands.

## Data Definition Language (DDL)

| Command | Description | Example |
|---------|-------------|---------|
| `CREATE DATABASE <database>` | Create a new database | `CREATE DATABASE test_db;` |
| `CREATE TABLE <table> (<column> <type>);` | Create a new table | `CREATE TABLE employees (id INT, name VARCHAR(100));` |
| `ALTER TABLE <table> ADD <column> <type>;` | Add a column to a table | `ALTER TABLE employees ADD email VARCHAR(100);` |
| `DROP TABLE <table>;` | Delete a table | `DROP TABLE employees;` |
| `DROP DATABASE <database>;` | Delete a database | `DROP DATABASE test_db;` |
| `TRUNCATE TABLE <table>;` | Delete all rows from a table | `TRUNCATE TABLE employees;` |
| `RENAME TABLE <old_name> TO <new_name>;` | Rename a table | `RENAME TABLE employees TO staff;` |

## Data Manipulation Language (DML)

| Command | Description | Example |
|---------|-------------|---------|
| `INSERT INTO <table> (<column1>, <column2>) VALUES (<value1>, <value2>);` | Insert a new row into a table | `INSERT INTO employees (id, name) VALUES (1, 'John Doe');` |
| `UPDATE <table> SET <column>=<value> WHERE <condition>;` | Update rows in a table | `UPDATE employees SET name='Jane Doe' WHERE id=1;` |
| `DELETE FROM <table> WHERE <condition>;` | Delete rows from a table | `DELETE FROM employees WHERE id=1;` |
| `MERGE INTO <table> USING <source_table> ON <condition> WHEN MATCHED THEN UPDATE SET <column>=<value> WHEN NOT MATCHED THEN INSERT (<columns>) VALUES (<values>);` | Perform merge operations | `MERGE INTO employees USING temp_employees ON employees.id = temp_employees.id WHEN MATCHED THEN UPDATE SET employees.name = temp_employees.name WHEN NOT MATCHED THEN INSERT (id, name) VALUES (temp_employees.id, temp_employees.name);` |
| `INSERT INTO <table> SELECT <columns> FROM <source_table> WHERE <condition>;` | Insert data from another table | `INSERT INTO employees SELECT id, name FROM temp_employees WHERE status='active';` |

## Data Query Language (DQL)

| Command | Description | Example |
|---------|-------------|---------|
| `SELECT * FROM <table>;` | Select all columns from a table | `SELECT * FROM employees;` |
| `SELECT <column1>, <column2> FROM <table> WHERE <condition>;` | Select specific columns from a table with a condition | `SELECT name, email FROM employees WHERE id=1;` |
| `SELECT DISTINCT <column> FROM <table>;` | Select unique values from a column | `SELECT DISTINCT department FROM employees;` |
| `SELECT COUNT(*), <column> FROM <table> GROUP BY <column>;` | Count occurrences of values in a column | `SELECT COUNT(*), department FROM employees GROUP BY department;` |
| `SELECT * FROM <table> ORDER BY <column> ASC/DESC;` | Order results | `SELECT * FROM employees ORDER BY salary DESC;` |
| `SELECT * FROM <table> LIMIT n OFFSET m;` | Retrieve limited rows with an offset | `SELECT * FROM employees LIMIT 10 OFFSET 20;` |
| `SELECT * FROM <table> WHERE <column> LIKE 'pattern';` | Filter rows using patterns | `SELECT * FROM employees WHERE name LIKE 'J%';` |

## Data Control Language (DCL)

| Command | Description | Example |
|---------|-------------|---------|
| `GRANT <permission> ON <database>.<table> TO <user>@'localhost';` | Grant permissions to a user | `GRANT SELECT, INSERT ON test_db.employees TO 'user'@'localhost';` |
| `REVOKE <permission> ON <database>.<table> FROM <user>@'localhost';` | Revoke permissions from a user | `REVOKE INSERT ON test_db.employees FROM 'user'@'localhost';` |
| `CREATE USER <user> IDENTIFIED BY '<password>';` | Create a new user | `CREATE USER 'john' IDENTIFIED BY 'securepassword';` |
| `DROP USER <user>;` | Delete a user | `DROP USER 'john';` |
| `GRANT <role> TO <user>;` | Grant a role to a user | `GRANT admin TO 'john';` |
| `REVOKE <role> FROM <user>;` | Revoke a role from a user | `REVOKE admin FROM 'john';` |
