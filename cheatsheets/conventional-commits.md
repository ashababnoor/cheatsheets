# Conventional Commits

The Conventional Commits specification offers a simple framework for structuring commit messages.


## Commit Message Structure
```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

1. **Type:** Describes the nature of the change (e.g., `feat` for a new feature, `fix` for a bug fix).
2. **Scope** *[optional]***:** Optionally specifies the affected part of the codebase.
3. **Description:** Briefly summarizes the changes made.
4. **Body** *[optional]***:** Provides more detailed information about the changes.
5. **Footer** *[optional]***:** Contains additional details like references to issues or breaking changes.


## Type
Following are the different commit types

### Major Types

#### **1. Features and Fixes:**
- **`feat`**: Adding a new feature for users.
- **`fix`**: Correcting a bug or issue in the codebase.

#### **2. Documentation and Code Structure:**
- **`docs`**: Changes or additions to documentation.
- **`style`**: Non-functional changes like formatting, white-space, etc.
- **`refactor`**: Restructuring code without changing its external behavior.

#### **3. Testing and Miscellaneous:**
- **`test`**: Adding or modifying tests.
- **`chore`**: Miscellaneous tasks that don't affect code, like build configuration, etc.

### Additional or Project-Specific Types

#### **4. Performance and Dependencies:**
- **`perf`**: Commits related to performance improvements.
- **`deps`**: Changes to project dependencies.

#### **5. Security, Release, and Operations:**
- **`security`**: Commits related to security fixes or enhancements.
- **`release`**: Commits specific to release tasks or changes.
- **`merge`**: Commits related to merge operations (especially in version control systems).

#### **6. Build, Configuration, and Automation:**
- **`build`**: Changes related to the build system or processes.
- **`config`**: Commits related to configuration settings.
- **`ci`**: Changes to Continuous Integration (CI) configuration or workflows.


## Scope

A scope, if used, can follow the type. It should comprise a descriptive noun enclosed in parentheses, delineating a specific section of the codebase. For instance, `fix(parser):` indicates a fix in the parser section.

**Example**
```
fix(parser): Resolve issue with parsing JSON arrays
```

## Reference

Read more about conventional commits here: [Conventional Commits](https://www.conventionalcommits.org/)