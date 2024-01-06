# SQL Data Control Language (DCL) Commands Cheatsheet

## GRANT

```sql
GRANT <permissions> ON <object> TO <user>;
```

- **Description**: Grants specific permissions on a database object (table, view, etc.) to a user or a group.
- **Permissions**: Examples include SELECT, INSERT, UPDATE, DELETE, ALL PRIVILEGES.
- **Example**: 
  ```sql
  GRANT SELECT, INSERT ON employees TO 'user1';
  ```

## REVOKE

```sql
REVOKE <permissions> ON <object> FROM <user>;
```

- **Description**: Revokes previously granted permissions on a database object from a user or a group.
- **Permissions**: Revoke specific permissions previously granted.
- **Example**: 
  ```sql
  REVOKE DELETE ON customers FROM 'user2';
  ```

## Useful Information:

- **Access Control**: DCL commands ensure security by managing access privileges and permissions within a database system.

- **Object-Level Permissions**: These commands operate at the object level, allowing control over who can perform specific actions (such as SELECT, INSERT, UPDATE, DELETE) on database objects like tables, views, procedures, etc.

- **User Management**: Grants and revokes permissions from specific users or groups, providing fine-grained control over the actions permitted within the database.

- **Granular Control**: Allows administrators to grant or restrict access based on the principle of least privilege, ensuring users only have the necessary permissions to perform their tasks.

These DCL commands play a critical role in ensuring data security and access control within a database system, controlling who can do what within the database objects.