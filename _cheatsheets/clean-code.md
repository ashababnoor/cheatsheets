---
title: "Clean Code Practices"
subtitle: "Naming, functions, comments, error handling, SOLID, and refactoring habits for readable, maintainable code."
description: "Best practices for writing clean, readable, and maintainable code — naming, functions, formatting, and refactoring principles."
category: "Languages & Code"
icon: "code-xml"
---

## Naming Conventions

Good names replace the need for comments. A name should reveal intent, avoid ambiguity, and be easy to search for.

### Variables

- Use nouns that describe what the value represents.
- Avoid single-letter names except in tiny loop scopes.

**Don't:**
```python
d = 7  # elapsed time in days
```

**Do:**
```python
elapsed_days = 7
```

### Functions

- Use verbs or verb phrases that describe the action performed.

**Don't:**
```javascript
function data(url) { /* ... */ }
```

**Do:**
```javascript
function fetchUserProfile(url) { /* ... */ }
```

### Classes

- Use singular nouns. Avoid vague suffixes like `Manager`, `Processor`, or `Data`.

**Don't:**
```python
class DataProcessor:
    pass
```

**Do:**
```python
class InvoiceParser:
    pass
```

### Constants

- Use UPPER_SNAKE_CASE. The name should explain the meaning, not the value.

**Don't:**
```python
T = 86400
```

**Do:**
```python
SECONDS_PER_DAY = 86400
```

### Booleans

- Phrase as a yes/no question using prefixes like `is`, `has`, `can`, `should`.

**Don't:**
```javascript
let login = true;
```

**Do:**
```javascript
let isLoggedIn = true;
```

---

## Functions

### Single Responsibility

- A function should do one thing, do it well, and do it only.

**Don't:**
```python
def process_order(order):
    validate(order)
    charge_payment(order)
    send_email(order)
```

**Do:**
```python
def validate_order(order):
    # only validation logic
    ...
```

### Keep Functions Small

- Aim for 5-20 lines. If a function needs a comment to explain a section, extract that section into its own function.

### Limit Parameters

- Ideal: 0-2 parameters. If you need more, group them into an object or data class.

**Don't:**
```javascript
function createUser(name, email, age, role, dept) { }
```

**Do:**
```javascript
function createUser(userDetails) { }
```

### No Side Effects

- A function that claims to do one thing should not secretly modify global state, mutate arguments, or perform I/O.

### Command-Query Separation

- A function should either **do something** (command) or **answer something** (query), never both.

**Don't:**
```python
def set_and_check_age(user, age):
    user.age = age
    return user.age >= 18
```

**Do:**
```python
def set_age(user, age):
    user.age = age

def is_adult(user):
    return user.age >= 18
```

### DRY (Don't Repeat Yourself)

- If you see the same logic in two places, extract it into a shared function.

---

## Comments

### When to Comment

- Legal or license headers.
- Explanation of **why**, not **what** (intent behind a non-obvious decision).
- Warnings of consequences (e.g., "This test takes 10 minutes to run").
- `TODO` markers for known technical debt.

### When NOT to Comment

- To restate what the code already says.
- To explain bad naming -- rename instead.
- To keep old code around -- use version control.

### Good Comments

```python
# Using binary search here because the dataset exceeds 1M records
# and linear scan caused p99 latency spikes.
index = bisect_left(sorted_ids, target_id)
```

### Bad Comments

```python
# increment i by 1
i += 1

# default constructor
def __init__(self):
    pass
```

- Commented-out code: delete it. Git remembers.
- Journal comments at the top of files: let the commit log handle history.

---

## Error Handling

### Use Exceptions Over Error Codes

- Error codes force callers into deeply nested `if` chains.

**Don't:**
```python
result = withdraw(account, amount)
if result == -1:
    # handle insufficient funds
```

**Do:**
```python
try:
    withdraw(account, amount)
except InsufficientFundsError as e:
    notify_user(e.message)
```

### Don't Return Null

- Returning `null` forces every caller to add a null check. Return an empty collection, a default object, or raise an exception instead.

**Don't:**
```javascript
function getUsers() {
  if (noResults) return null;
}
```

**Do:**
```javascript
function getUsers() {
  if (noResults) return [];
}
```

### Fail Fast

- Validate inputs at the boundary. Catch problems as early as possible rather than letting bad data propagate.

### Write Meaningful Error Messages

- Include **what** failed, **why** it failed, and **how** to fix it when possible.

**Don't:**
```python
raise ValueError("Invalid input")
```

**Do:**
```python
raise ValueError(f"Age must be 0-150, got {age}")
```

---

## Code Formatting

### Consistent Indentation

- Pick a style (2 spaces, 4 spaces, tabs) and enforce it project-wide with a formatter.

### Vertical Spacing

- Use blank lines to separate logical sections within a file: imports, class definitions, methods.
- Keep related lines together -- do not scatter them across the file.

### Line Length

- Keep lines under 80-120 characters. Long lines force horizontal scrolling and reduce readability.

### Group Related Code

- Declare variables close to where they are used.
- Order methods so that callers appear above callees (step-down rule).
- Keep related functions in the same file or module.

---

## SOLID Principles

### S -- Single Responsibility Principle

- A class should have only one reason to change. One job, one owner.

### O -- Open/Closed Principle

- Open for extension, closed for modification. Add new behavior by adding new code, not changing existing code.

### L -- Liskov Substitution Principle

- Subtypes must be usable in place of their parent types without breaking behavior.

### I -- Interface Segregation Principle

- No client should be forced to depend on methods it does not use. Prefer many small interfaces over one large one.

### D -- Dependency Inversion Principle

- Depend on abstractions, not concretions. High-level modules should not import from low-level modules directly.

```python
# Don't: high-level code depends on a concrete database
class OrderService:
    def __init__(self):
        self.db = MySQLDatabase()

# Do: depend on an abstraction
class OrderService:
    def __init__(self, db: DatabasePort):
        self.db = db
```

---

## Code Smells

- **Long Methods** -- If a method exceeds 20-30 lines, it likely does too much. Extract smaller functions.
- **Large Classes** -- A class with many instance variables or methods is trying to do too much. Split it.
- **Duplicate Code** -- The same logic in multiple places. Extract into a shared function or module.
- **Magic Numbers** -- Raw numeric or string literals without explanation. Replace with named constants.
- **Deep Nesting** -- More than 2-3 levels of indentation. Use early returns, guard clauses, or extract methods.
- **Feature Envy** -- A method that uses more data from another class than its own. Move it to the class it envies.
- **God Class** -- One class that knows or does everything. Break it apart by responsibility.

### Deep Nesting Example

**Don't:**
```python
def process(user):
    if user:
        if user.is_active:
            if user.has_permission:
                do_work(user)
```

**Do:**
```python
def process(user):
    if not user or not user.is_active:
        return
    if not user.has_permission:
        return
    do_work(user)
```

---

## Refactoring Tips

- **Extract Method** -- Pull a block of code into a well-named function.
- **Rename** -- If a name does not communicate intent, change it immediately. IDEs make this safe.
- **Replace Magic Numbers** -- Swap literals with named constants.
- **Simplify Conditionals** -- Use guard clauses, decompose complex boolean expressions into named variables or functions.
- **Remove Dead Code** -- Unreachable code, unused variables, and commented-out blocks should be deleted.

### Simplify Conditionals Example

**Don't:**
```javascript
if (user.age >= 18 && user.hasId && !user.isBanned) {
  serve(user);
}
```

**Do:**
```javascript
const isEligible = user.age >= 18 && user.hasId && !user.isBanned;
if (isEligible) serve(user);
```

---

## Testing Practices

### AAA Pattern

- **Arrange** -- Set up test data and preconditions.
- **Act** -- Execute the behavior under test.
- **Assert** -- Verify the outcome.

```python
def test_withdraw_reduces_balance():
    account = Account(balance=100)     # Arrange
    account.withdraw(40)               # Act
    assert account.balance == 60       # Assert
```

### One Assert Per Test

- Each test should verify a single behavior. Multiple asserts per test obscure which behavior actually broke.

### Descriptive Test Names

- A test name should describe the scenario and expected outcome.

**Don't:**
```python
def test_1():
```

**Do:**
```python
def test_withdraw_with_insufficient_funds_raises_error():
```

### Test Edge Cases

- Empty inputs, boundary values, null/None, very large inputs, and concurrent access.

### F.I.R.S.T. Principles

- **Fast** -- Tests should run in milliseconds.
- **Independent** -- No test should depend on another test's state.
- **Repeatable** -- Same result every time, in any environment.
- **Self-Validating** -- Pass or fail with no manual inspection.
- **Timely** -- Written at the same time as (or before) the production code.

---

## General Principles

- **KISS (Keep It Simple, Stupid)** -- The simplest solution that works is usually the best. Avoid cleverness.
- **YAGNI (You Aren't Gonna Need It)** -- Do not build features or abstractions until you actually need them.
- **DRY (Don't Repeat Yourself)** -- Every piece of knowledge should have a single, authoritative representation.
- **Boy Scout Rule** -- Leave the code cleaner than you found it. Small improvements on every commit add up.
- **Principle of Least Surprise** -- Code should behave the way a reasonable reader would expect. Avoid hidden side effects and unconventional patterns.
- **Composition Over Inheritance** -- Favor combining small, focused objects over deep inheritance hierarchies. Inheritance creates tight coupling; composition keeps things flexible.
