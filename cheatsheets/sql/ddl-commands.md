# SQL DDL Commands Cheatsheet

This cheatsheet provides a list of useful SQL DDL commands.

## CREATE

- `CREATE DATABASE <database>;` - Creates a new database.
    - Example: `CREATE DATABASE test_db;`
- `CREATE TABLE <table> (<column1> <type1>, <column2> <type2>, ...);` - Creates a new table.
    - Example: `CREATE TABLE employees (id INT, name VARCHAR(100), email VARCHAR(100));`

## ALTER

- `ALTER TABLE <table> ADD <column> <type>;` - Adds a new column to a table.
    - Example: `ALTER TABLE employees ADD age INT;`
- `ALTER TABLE <table> DROP COLUMN <column>;` - Removes a column from a table.
    - Example: `ALTER TABLE employees DROP COLUMN age;`
- `ALTER TABLE <table> MODIFY <column> <type>;` - Modifies the data type of a column in a table.
    - Example: `ALTER TABLE employees MODIFY age SMALLINT;`
- `ALTER TABLE <table> RENAME TO <new_table>;` - Renames a table.
    - Example: `ALTER TABLE employees RENAME TO staff;`

## DROP

- `DROP TABLE <table>;` - Deletes a table.
    - Example: `DROP TABLE staff;`
- `DROP DATABASE <database>;` - Deletes a database.
    - Example: `DROP DATABASE test_db;`

## TRUNCATE

- `TRUNCATE TABLE <table>;` - Deletes all rows from a table without deleting the table.
    - Example: `TRUNCATE TABLE staff;`

Next steps could include:
- Save this content in a Markdown file in your `cheatsheets` directory.
- Add a link to this cheatsheet in your `README.md` file.
- Push the changes to the remote repository.