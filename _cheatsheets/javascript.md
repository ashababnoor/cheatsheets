---
title: "JavaScript"
description: "JavaScript cheatsheet — syntax, DOM manipulation, ES6+ features, promises, array methods, and common patterns."
category: "Languages & Code"
icon: "⚡"
---

## Variables & Types

```js
var x = 1;    // function-scoped, hoisted, re-declarable
let y = 2;    // block-scoped, reassignable
const z = 3;  // block-scoped, not reassignable
```

### Primitive Types

| Type        | Example                  |
|-------------|--------------------------|
| `string`    | `"hello"`, `'world'`     |
| `number`    | `42`, `3.14`, `NaN`      |
| `bigint`    | `9007199254740991n`      |
| `boolean`   | `true`, `false`          |
| `undefined` | `undefined`              |
| `null`      | `null`                   |
| `symbol`    | `Symbol("id")`           |

### Truthy / Falsy Values

| Falsy              | Truthy (examples)         |
|--------------------|---------------------------|
| `false`            | `true`                    |
| `0`, `-0`, `0n`    | `1`, `-1`, `3.14`         |
| `""` (empty string)| `"0"`, `"false"`          |
| `null`             | `[]`, `{}`                |
| `undefined`        | `function() {}`           |
| `NaN`              | `Infinity`                |

### Type Coercion

```js
+"42"            // 42 (string to number)
42 + ""          // "42" (number to string)
!!"hello"        // true (to boolean)
```

---

## Strings

```js
const str = `Hello, ${name}!`;  // template literal
const multi = `line1
line2`;                          // multiline
```

### Common Methods

| Method | Description | Example |
|--------|-------------|---------|
| `slice(start, end?)` | Extract substring (negative OK) | `"abcde".slice(1, 3)` → `"bc"` |
| `substring(start, end?)` | Extract substring (no negatives) | `"abcde".substring(1, 3)` → `"bc"` |
| `includes(str)` | Check if contains | `"hello".includes("ell")` → `true` |
| `startsWith(str)` | Check prefix | `"hello".startsWith("he")` → `true` |
| `endsWith(str)` | Check suffix | `"hello".endsWith("lo")` → `true` |
| `replace(a, b)` | Replace first match | `"aaa".replace("a", "b")` → `"baa"` |
| `replaceAll(a, b)` | Replace all matches | `"aaa".replaceAll("a", "b")` → `"bbb"` |
| `split(sep)` | Split into array | `"a,b,c".split(",")` → `["a","b","c"]` |
| `trim()` | Remove whitespace | `"  hi  ".trim()` → `"hi"` |
| `padStart(len, ch)` | Pad from start | `"5".padStart(3, "0")` → `"005"` |
| `padEnd(len, ch)` | Pad from end | `"5".padEnd(3, "0")` → `"500"` |
| `repeat(n)` | Repeat string | `"ha".repeat(3)` → `"hahaha"` |
| `at(index)` | Char at index (negative OK) | `"abc".at(-1)` → `"c"` |
| `indexOf(str)` | First index of match | `"hello".indexOf("l")` → `2` |

---

## Arrays

### Creation

```js
const a = [1, 2, 3];
const b = Array.from({ length: 5 }, (_, i) => i); // [0,1,2,3,4]
const c = new Array(3).fill(0);                    // [0,0,0]
```

### Mutating Methods

| Method | Description | Example |
|--------|-------------|---------|
| `push(val)` | Add to end | `[1,2].push(3)` → `[1,2,3]` |
| `pop()` | Remove from end | `[1,2,3].pop()` → returns `3` |
| `shift()` | Remove from start | `[1,2,3].shift()` → returns `1` |
| `unshift(val)` | Add to start | `[1,2].unshift(0)` → `[0,1,2]` |
| `splice(i, del, ...items)` | Insert/remove at index | `[1,2,3].splice(1, 1, 9)` → `[1,9,3]` |
| `sort(fn?)` | Sort in place | `[3,1,2].sort((a,b) => a-b)` → `[1,2,3]` |
| `reverse()` | Reverse in place | `[1,2,3].reverse()` → `[3,2,1]` |

### Non-Mutating Methods

| Method | Description | Example |
|--------|-------------|---------|
| `slice(start, end?)` | Extract portion | `[1,2,3,4].slice(1,3)` → `[2,3]` |
| `concat(arr)` | Merge arrays | `[1].concat([2,3])` → `[1,2,3]` |
| `flat(depth?)` | Flatten nested | `[1,[2,[3]]].flat(Infinity)` → `[1,2,3]` |
| `at(index)` | Element at index | `[1,2,3].at(-1)` → `3` |

### Iteration Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `map(fn)` | Array | Transform each element |
| `filter(fn)` | Array | Keep matching elements |
| `reduce(fn, init)` | Any | Accumulate to single value |
| `forEach(fn)` | `undefined` | Execute for each (no return) |
| `find(fn)` | Element | First matching element |
| `findIndex(fn)` | Number | Index of first match |
| `some(fn)` | Boolean | At least one matches? |
| `every(fn)` | Boolean | All match? |
| `includes(val)` | Boolean | Contains value? |

### Spread & Destructuring

```js
const merged = [...arr1, ...arr2];
const [first, second, ...rest] = [1, 2, 3, 4, 5];
const copy = [...original];
```

---

## Objects

### Creation & Access

```js
const obj = { name: "JS", year: 1995 };
obj.name;          // dot notation
obj["name"];       // bracket notation
const key = "name"; const val = obj[key]; // dynamic key
```

### Shorthand & Computed Properties

```js
const name = "JS";
const obj = { name, [`lang_${name}`]: true }; // { name: "JS", lang_JS: true }
```

### Methods

| Method | Description | Example |
|--------|-------------|---------|
| `Object.keys(obj)` | Array of keys | `Object.keys({a:1, b:2})` → `["a","b"]` |
| `Object.values(obj)` | Array of values | `Object.values({a:1, b:2})` → `[1,2]` |
| `Object.entries(obj)` | Array of [key, val] | `Object.entries({a:1})` → `[["a",1]]` |
| `Object.assign(t, s)` | Copy/merge into target | `Object.assign({}, a, b)` |
| `Object.freeze(obj)` | Make immutable (shallow) | `Object.freeze(obj)` |
| `Object.hasOwn(obj, k)` | Own property check | `Object.hasOwn({a:1}, "a")` → `true` |

### Spread, Destructuring & Operators

```js
const merged = { ...defaults, ...overrides };
const { name, year: y, lang = "EN" } = obj;  // destructuring with rename & default
```

```js
user?.address?.city      // optional chaining — returns undefined if null/undefined
val ?? "default"         // nullish coalescing — fallback only for null/undefined
```

---

## Functions

### Declaration Styles

```js
function greet(name) { return `Hi, ${name}`; }         // declaration (hoisted)
const greet = function(name) { return `Hi, ${name}`; }; // expression
const greet = (name) => `Hi, ${name}`;                  // arrow (implicit return)
```

### Parameters

```js
function sum(a, b = 0) { return a + b; }          // default params
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); } // rest params
```

### IIFE & Closures

```js
(function() { /* runs immediately */ })();
```

```js
function counter() {
  let n = 0;
  return () => ++n; // closure retains access to n
}
```

---

## Promises & Async

### Promise Basics

```js
const p = new Promise((resolve, reject) => { resolve("done"); });
p.then(val => console.log(val)).catch(err => console.error(err)).finally(() => {});
```

### Static Methods

| Method | Description |
|--------|-------------|
| `Promise.all(arr)` | Resolves when all resolve; rejects on first rejection |
| `Promise.allSettled(arr)` | Waits for all; never rejects |
| `Promise.race(arr)` | Settles with first settled |
| `Promise.any(arr)` | Resolves with first fulfilled; rejects if all reject |

### Async / Await

```js
async function fetchData(url) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) { console.error(err); }
}
```

---

## DOM Manipulation

### Selecting Elements

```js
document.querySelector(".class");       // first match
document.querySelectorAll("div.item");  // NodeList of all matches
document.getElementById("myId");        // by ID
```

### Creating & Modifying

```js
const el = document.createElement("div");
el.textContent = "Hello";
document.body.append(el);              // append to parent
el.remove();                           // remove from DOM
```

### Classes & Attributes

```js
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");
el.setAttribute("data-id", "42");
```

### Events

```js
el.addEventListener("click", (e) => { console.log(e.target); });
```

```js
// Event delegation — listen on parent, match child
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.matches("li")) console.log(e.target.textContent);
});
```

---

## ES6+ Features

| Feature | Syntax |
|---------|--------|
| `let` / `const` | Block-scoped variables |
| Arrow functions | `(x) => x * 2` |
| Template literals | `` `Hello, ${name}` `` |
| Destructuring | `const { a, b } = obj;` |
| Spread / Rest | `[...arr]`, `(...args) => {}` |
| Modules | `import { x } from "./mod.js"` / `export const x = 1` |
| `for...of` | `for (const item of iterable) {}` |
| Classes | `class Dog extends Animal { #name; constructor() {} }` |
| Private fields | `#field` — only accessible inside the class |
| `Map` | `new Map([["k", "v"]])` — any key type, ordered |
| `Set` | `new Set([1, 2, 3])` — unique values |
| `Symbol` | `Symbol("desc")` — unique identifier |

---

## Error Handling

### try / catch / finally

```js
try {
  JSON.parse(invalid);
} catch (err) {
  console.error(err.message);
} finally {
  cleanup();
}
```

### Custom Errors

```js
class ValidationError extends Error {
  constructor(msg) { super(msg); this.name = "ValidationError"; }
}
throw new ValidationError("Invalid input");
```

### Built-in Error Types

| Type | When |
|------|------|
| `RangeError` | Value out of range |
| `ReferenceError` | Undeclared variable |
| `SyntaxError` | Invalid syntax |
| `TypeError` | Wrong type operation |
| `URIError` | Malformed URI |

---

## Common Patterns

### Debounce

```js
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
```

### Throttle

```js
const throttle = (fn, ms) => { let last = 0; return (...a) => { if (Date.now() - last >= ms) { last = Date.now(); fn(...a); } }; };
```

### Deep Clone

```js
const clone = structuredClone(original);
```

### Array Shuffle (Fisher-Yates)

```js
const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
```

### Unique Array

```js
const unique = [...new Set(arr)];
```

### Sleep / Delay

```js
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
```

### Generate Range

```js
const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);
```

### Group By

```js
const groupBy = (arr, fn) => arr.reduce((acc, v) => { (acc[fn(v)] ??= []).push(v); return acc; }, {});
```

---

## Type Checking

| Expression | Result |
|------------|--------|
| `typeof "hello"` | `"string"` |
| `typeof 42` | `"number"` |
| `typeof 42n` | `"bigint"` |
| `typeof true` | `"boolean"` |
| `typeof undefined` | `"undefined"` |
| `typeof null` | `"object"` (legacy bug) |
| `typeof Symbol()` | `"symbol"` |
| `typeof {}` | `"object"` |
| `typeof []` | `"object"` |
| `typeof function(){}` | `"function"` |
| `Array.isArray([])` | `true` |
| `obj instanceof Class` | Prototype chain check |
| `Number.isNaN(NaN)` | `true` (strict, unlike global `isNaN`) |
| `Number.isFinite(42)` | `true` (`Infinity`/`NaN` → `false`) |
