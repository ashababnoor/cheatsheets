# Conventional Commits Cheatsheet

The Conventional Commits specification offers a simple framework for structuring commit messages. This cheatsheet provides a list of Conventional Commits commit types and related useful information.


## Commit Message Structure
```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

| Element     | Optional |Description                                                                                |
|-------------|----------|-------------------------------------------------------------------------------------------|
| Type        | No       | Describes the nature of the change (e.g., `feat` for a new feature, `fix` for a bug fix). |
| Scope       | Yes      | Optionally specifies the affected part of the codebase.                                   |
| Description | No       | Briefly summarizes the changes made.                                                      |
| Body        | Yes      | Provides more detailed information about the changes.                                     |
| Footer      | Yes      | Contains additional details like references to issues or breaking changes.                |


## Type
Following are the different commit types

###  1. Features and Fixes

| Commit Type | Description                                |
|-------------|--------------------------------------------|
| feat        | Adding a new feature for users.            |
| fix         | Correcting a bug or issue in the codebase. |

### 2. Documentation and Code Structure

| Commit Type | Description                                                |
|-------------|------------------------------------------------------------|
| docs        | Changes or additions to documentation.                     |
| style       | Non-functional changes like formatting, white-space, etc.  |
| refactor    | Restructuring code without changing its external behavior. |

### 3. Testing and Miscellaneous

| Commit Type | Description                                                                |
|-------------|----------------------------------------------------------------------------|
| test        | Adding or modifying tests.                                                 |
| chore       | Miscellaneous tasks that don't affect code, like build configuration, etc. |

### 4. Performance and Dependencies

| Commit Type | Descriptionm                                 |
|-------------|----------------------------------------------|
| perf        | Commits related to performance improvements. |
| deps        | Changes to project dependencies.             |

### 5. Security, Release, and Operations

| Commit Type | Description                                                                  |
|-------------|------------------------------------------------------------------------------|
| security    | Commits related to security fixes or enhancements.                           |
| release     | Commits specific to release tasks or changes.                                |
| merge       | Commits related to merge operations (especially in version control systems). |

### 6. Build, Configuration, and Automation

| Commit Type | Description                                                        |
|-------------|--------------------------------------------------------------------|
| build       | Changes related to the build system or processes.                  |
| config      | Commits related to configuration settings.                         |
| ci          | Changes to Continuous Integration (CI) configuration or workflows. |


## Scope

A scope, if used, can follow the type. It should comprise a descriptive noun enclosed in parentheses, delineating a specific section of the codebase. For instance, `fix(parser):` indicates a fix in the parser section.

**Example**
```
fix(parser): Resolve issue with parsing JSON arrays
```


## Reference

Read more about conventional commits here: [Conventional Commits](https://www.conventionalcommits.org/)