---
title: "SQL Commands"
category: "Languages & Code"
icon: "🗄️"
---
# SQL Commands Cheatsheet

This cheatsheet provides a list of useful SQL commands organized by category.

## Data Definition Language (DDL)

| Command | Description | Example |
|---------|-------------|---------|
| `CREATE DATABASE <database>` | Create a new database | `CREATE DATABASE test_db;` |
| `CREATE TABLE <table> (<column> <type>);` | Create a new table | `CREATE TABLE employees (id INT, name VARCHAR(100));` |
| `CREATE TABLE <table> AS SELECT ...;` | Create a table from a query | `CREATE TABLE active_users AS SELECT * FROM users WHERE active = 1;` |
| `CREATE INDEX <name> ON <table> (<column>);` | Create an index | `CREATE INDEX idx_name ON employees (name);` |
| `CREATE UNIQUE INDEX <name> ON <table> (<column>);` | Create a unique index | `CREATE UNIQUE INDEX idx_email ON employees (email);` |
| `CREATE VIEW <name> AS SELECT ...;` | Create a view | `CREATE VIEW active_employees AS SELECT * FROM employees WHERE active = 1;` |
| `ALTER TABLE <table> ADD <column> <type>;` | Add a column to a table | `ALTER TABLE employees ADD email VARCHAR(100);` |
| `ALTER TABLE <table> DROP COLUMN <column>;` | Remove a column | `ALTER TABLE employees DROP COLUMN email;` |
| `ALTER TABLE <table> MODIFY <column> <type>;` | Change a column's type | `ALTER TABLE employees MODIFY name VARCHAR(200);` |
| `ALTER TABLE <table> RENAME COLUMN <old> TO <new>;` | Rename a column | `ALTER TABLE employees RENAME COLUMN name TO full_name;` |
| `ALTER TABLE <table> ADD CONSTRAINT ...;` | Add a constraint | `ALTER TABLE employees ADD CONSTRAINT pk_id PRIMARY KEY (id);` |
| `DROP TABLE <table>;` | Delete a table | `DROP TABLE employees;` |
| `DROP TABLE IF EXISTS <table>;` | Delete a table if it exists | `DROP TABLE IF EXISTS employees;` |
| `DROP DATABASE <database>;` | Delete a database | `DROP DATABASE test_db;` |
| `DROP INDEX <name>;` | Delete an index | `DROP INDEX idx_name;` |
| `DROP VIEW <name>;` | Delete a view | `DROP VIEW active_employees;` |
| `TRUNCATE TABLE <table>;` | Delete all rows from a table | `TRUNCATE TABLE employees;` |
| `RENAME TABLE <old_name> TO <new_name>;` | Rename a table | `RENAME TABLE employees TO staff;` |

For details: [SQL DDL Commands Cheatsheet](/cheatsheets/sql/ddl-commands)

## Data Manipulation Language (DML)

| Command | Description | Example |
|---------|-------------|---------|
| `INSERT INTO <table> (<columns>) VALUES (<values>);` | Insert a new row | `INSERT INTO employees (id, name) VALUES (1, 'John Doe');` |
| `INSERT INTO <table> VALUES (<values>), (<values>);` | Insert multiple rows | `INSERT INTO employees VALUES (1, 'John'), (2, 'Jane');` |
| `INSERT INTO <table> SELECT ... FROM <source>;` | Insert from a query | `INSERT INTO employees SELECT id, name FROM temp_employees WHERE status='active';` |
| `UPDATE <table> SET <column>=<value> WHERE <condition>;` | Update rows | `UPDATE employees SET name='Jane Doe' WHERE id=1;` |
| `UPDATE <table> SET <col>=(SELECT ... FROM <other>);` | Update with subquery | `UPDATE employees SET dept_name=(SELECT name FROM departments WHERE departments.id=employees.dept_id);` |
| `DELETE FROM <table> WHERE <condition>;` | Delete rows | `DELETE FROM employees WHERE id=1;` |
| `DELETE FROM <table>;` | Delete all rows (logged) | `DELETE FROM employees;` |
| `MERGE INTO <table> USING <source> ON <condition> WHEN MATCHED THEN UPDATE ... WHEN NOT MATCHED THEN INSERT ...;` | Merge (upsert) operations | `MERGE INTO employees USING temp_employees ON employees.id = temp_employees.id WHEN MATCHED THEN UPDATE SET employees.name = temp_employees.name WHEN NOT MATCHED THEN INSERT (id, name) VALUES (temp_employees.id, temp_employees.name);` |
| `REPLACE INTO <table> (<columns>) VALUES (<values>);` | Replace row (MySQL) | `REPLACE INTO employees (id, name) VALUES (1, 'John Doe');` |

For details: [SQL DML Commands Cheatsheet](/cheatsheets/sql/dml-commands)

## Data Query Language (DQL)

| Command | Description | Example |
|---------|-------------|---------|
| `SELECT * FROM <table>;` | Select all columns | `SELECT * FROM employees;` |
| `SELECT <columns> FROM <table> WHERE <condition>;` | Select with condition | `SELECT name, email FROM employees WHERE id=1;` |
| `SELECT DISTINCT <column> FROM <table>;` | Select unique values | `SELECT DISTINCT department FROM employees;` |
| `SELECT COUNT(*), <column> FROM <table> GROUP BY <column>;` | Group and count | `SELECT COUNT(*), department FROM employees GROUP BY department;` |
| `SELECT ... GROUP BY <column> HAVING <condition>;` | Filter groups | `SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;` |
| `SELECT * FROM <table> ORDER BY <column> ASC/DESC;` | Order results | `SELECT * FROM employees ORDER BY salary DESC;` |
| `SELECT * FROM <table> LIMIT n OFFSET m;` | Paginate results | `SELECT * FROM employees LIMIT 10 OFFSET 20;` |
| `SELECT * FROM <table> WHERE <column> LIKE 'pattern';` | Pattern matching | `SELECT * FROM employees WHERE name LIKE 'J%';` |
| `SELECT * FROM <table> WHERE <column> IN (values);` | Match a set of values | `SELECT * FROM employees WHERE department IN ('Sales', 'Marketing');` |
| `SELECT * FROM <table> WHERE <column> BETWEEN a AND b;` | Range filter | `SELECT * FROM employees WHERE salary BETWEEN 50000 AND 100000;` |
| `SELECT * FROM <t1> JOIN <t2> ON <t1.col>=<t2.col>;` | Inner join | `SELECT * FROM employees JOIN departments ON employees.dept_id = departments.id;` |
| `SELECT * FROM <t1> LEFT JOIN <t2> ON <condition>;` | Left outer join | `SELECT * FROM employees LEFT JOIN departments ON employees.dept_id = departments.id;` |
| `SELECT * FROM <t1> CROSS JOIN <t2>;` | Cross join (cartesian product) | `SELECT * FROM sizes CROSS JOIN colors;` |
| `SELECT ... UNION SELECT ...;` | Combine results (deduplicated) | `SELECT name FROM employees UNION SELECT name FROM contractors;` |
| `SELECT ... UNION ALL SELECT ...;` | Combine results (with duplicates) | `SELECT name FROM employees UNION ALL SELECT name FROM contractors;` |
| `SELECT * FROM <table> WHERE EXISTS (SELECT ...);` | Exists subquery | `SELECT * FROM departments WHERE EXISTS (SELECT 1 FROM employees WHERE employees.dept_id = departments.id);` |

For details: [SQL DQL Commands Cheatsheet](/cheatsheets/sql/dql-commands)

## Data Control Language (DCL)

| Command | Description | Example |
|---------|-------------|---------|
| `GRANT <permission> ON <database>.<table> TO <user>@'localhost';` | Grant permissions to a user | `GRANT SELECT, INSERT ON test_db.employees TO 'user'@'localhost';` |
| `GRANT ALL PRIVILEGES ON <database>.* TO <user>;` | Grant all permissions | `GRANT ALL PRIVILEGES ON test_db.* TO 'user'@'localhost';` |
| `REVOKE <permission> ON <database>.<table> FROM <user>@'localhost';` | Revoke permissions from a user | `REVOKE INSERT ON test_db.employees FROM 'user'@'localhost';` |
| `CREATE USER <user> IDENTIFIED BY '<password>';` | Create a new user | `CREATE USER 'john' IDENTIFIED BY 'securepassword';` |
| `ALTER USER <user> IDENTIFIED BY '<password>';` | Change user password | `ALTER USER 'john' IDENTIFIED BY 'newpassword';` |
| `DROP USER <user>;` | Delete a user | `DROP USER 'john';` |
| `CREATE ROLE <role>;` | Create a role | `CREATE ROLE analyst;` |
| `GRANT <role> TO <user>;` | Grant a role to a user | `GRANT analyst TO 'john';` |
| `REVOKE <role> FROM <user>;` | Revoke a role from a user | `REVOKE analyst FROM 'john';` |
| `SHOW GRANTS FOR <user>;` | Show user permissions | `SHOW GRANTS FOR 'john'@'localhost';` |

For details: [SQL DCL Commands Cheatsheet](/cheatsheets/sql/dcl-commands)

## Transaction Control Language (TCL)

| Command | Description | Example |
|---------|-------------|---------|
| `BEGIN` or `START TRANSACTION` | Start a new transaction | `BEGIN;` |
| `COMMIT` | Save all changes made during the transaction | `COMMIT;` |
| `ROLLBACK` | Undo all changes made during the transaction | `ROLLBACK;` |
| `SAVEPOINT <name>` | Create a savepoint within a transaction | `SAVEPOINT before_update;` |
| `ROLLBACK TO SAVEPOINT <name>` | Roll back to a specific savepoint | `ROLLBACK TO SAVEPOINT before_update;` |
| `RELEASE SAVEPOINT <name>` | Remove a savepoint | `RELEASE SAVEPOINT before_update;` |
| `SET TRANSACTION ISOLATION LEVEL <level>` | Set isolation level | `SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;` |

### Transaction Isolation Levels

| Level | Dirty Read | Non-Repeatable Read | Phantom Read |
|-------|-----------|-------------------|-------------|
| `READ UNCOMMITTED` | Possible | Possible | Possible |
| `READ COMMITTED` | No | Possible | Possible |
| `REPEATABLE READ` | No | No | Possible |
| `SERIALIZABLE` | No | No | No |

## Common Patterns

Useful SQL snippets for everyday tasks.

### UPSERT (Insert or Update on Conflict)

**PostgreSQL:**
```sql
INSERT INTO employees (id, name, email)
VALUES (1, 'John Doe', 'john@example.com')
ON CONFLICT (id) DO UPDATE
SET name = EXCLUDED.name,
    email = EXCLUDED.email;
```

**MySQL:**
```sql
INSERT INTO employees (id, name, email)
VALUES (1, 'John Doe', 'john@example.com')
ON DUPLICATE KEY UPDATE
name = VALUES(name),
email = VALUES(email);
```

### Pagination

**LIMIT / OFFSET (MySQL, PostgreSQL, SQLite):**
```sql
-- Page 3, 20 rows per page
SELECT * FROM employees
ORDER BY id
LIMIT 20 OFFSET 40;
```

**ROW_NUMBER (SQL Server, all modern databases):**
```sql
SELECT * FROM (
  SELECT *, ROW_NUMBER() OVER (ORDER BY id) AS rn
  FROM employees
) t
WHERE rn BETWEEN 41 AND 60;
```

### String Aggregation

**PostgreSQL:**
```sql
SELECT department, STRING_AGG(name, ', ' ORDER BY name) AS members
FROM employees
GROUP BY department;
```

**MySQL:**
```sql
SELECT department, GROUP_CONCAT(name ORDER BY name SEPARATOR ', ') AS members
FROM employees
GROUP BY department;
```

**SQL Server:**
```sql
SELECT department, STRING_AGG(name, ', ') WITHIN GROUP (ORDER BY name) AS members
FROM employees
GROUP BY department;
```

### Window Functions

```sql
SELECT
  name,
  department,
  salary,
  -- Rank within each department
  RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank,
  -- Running total of salary within department
  SUM(salary) OVER (PARTITION BY department ORDER BY hire_date) AS running_total,
  -- Difference from department average
  salary - AVG(salary) OVER (PARTITION BY department) AS diff_from_avg,
  -- Previous employee's salary
  LAG(salary) OVER (PARTITION BY department ORDER BY hire_date) AS prev_salary,
  -- Next employee's salary
  LEAD(salary) OVER (PARTITION BY department ORDER BY hire_date) AS next_salary
FROM employees;
```

### Common Table Expressions (CTEs)

```sql
-- Recursive CTE: organizational hierarchy
WITH RECURSIVE org_tree AS (
  -- Base case: top-level managers
  SELECT id, name, manager_id, 1 AS level
  FROM employees
  WHERE manager_id IS NULL

  UNION ALL

  -- Recursive case: employees under each manager
  SELECT e.id, e.name, e.manager_id, t.level + 1
  FROM employees e
  JOIN org_tree t ON e.manager_id = t.id
)
SELECT * FROM org_tree ORDER BY level, name;
```

### Find Duplicates

```sql
SELECT email, COUNT(*) AS count
FROM employees
GROUP BY email
HAVING COUNT(*) > 1;
```

### Delete Duplicates (Keep One)

```sql
DELETE FROM employees
WHERE id NOT IN (
  SELECT MIN(id)
  FROM employees
  GROUP BY email
);
```

### Conditional Aggregation

```sql
SELECT
  department,
  COUNT(*) AS total,
  COUNT(*) FILTER (WHERE salary > 100000) AS high_earners,    -- PostgreSQL
  SUM(CASE WHEN salary > 100000 THEN 1 ELSE 0 END) AS high_earners_alt  -- All databases
FROM employees
GROUP BY department;
```
