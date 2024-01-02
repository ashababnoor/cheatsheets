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

## Data Manipulation Language (DML)

| Command | Description | Example |
|---------|-------------|---------|
| `INSERT INTO <table> (<column1>, <column2>) VALUES (<value1>, <value2>);` | Insert a new row into a table | `INSERT INTO employees (id, name) VALUES (1, 'John Doe');` |
| `UPDATE <table> SET <column>=<value> WHERE <condition>;` | Update rows in a table | `UPDATE employees SET name='Jane Doe' WHERE id=1;` |
| `DELETE FROM <table> WHERE <condition>;` | Delete rows from a table | `DELETE FROM employees WHERE id=1;` |

## Data Query Language (DQL)

| Command | Description | Example |
|---------|-------------|---------|
| `SELECT * FROM <table>;` | Select all columns from a table | `SELECT * FROM employees;` |
| `SELECT <column1>, <column2> FROM <table> WHERE <condition>;` | Select specific columns from a table with a condition | `SELECT name, email FROM employees WHERE id=1;` |
| `SELECT COUNT(*) FROM <table>;` | Count the number of rows in a table | `SELECT COUNT(*) FROM employees;` |

## Data Control Language (DCL)

| Command | Description | Example |
|---------|-------------|---------|
| `GRANT <permission> ON <database>.<table> TO <user>@'localhost';` | Grant permissions to a user | `GRANT SELECT, INSERT ON test_db.employees TO 'user'@'localhost';` |
| `REVOKE <permission> ON <database>.<table> FROM <user>@'localhost';` | Revoke permissions from a user | `REVOKE INSERT ON test_db.employees FROM 'user'@'localhost';` |

