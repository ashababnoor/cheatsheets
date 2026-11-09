---
title: "CSS"
subtitle: "Selectors, the box model, flexbox, grid, typography, animations, and responsive patterns."
description: "CSS cheatsheet — selectors, flexbox, grid, positioning, animations, and responsive design patterns."
category: "Web & Formats"
logo: "css"
---

## Selectors

### Basic Selectors

| Selector | Example | Description |
|----------|---------|-------------|
| Element | `p` | All `<p>` elements |
| Class | `.intro` | Elements with `class="intro"` |
| ID | `#main` | Element with `id="main"` |
| Universal | `*` | All elements |
| Grouping | `h1, h2, h3` | Multiple selectors |

### Attribute Selectors

| Selector | Description |
|----------|-------------|
| `[attr]` | Has attribute |
| `[attr="val"]` | Exact match |
| `[attr~="val"]` | Contains word |
| `[attr^="val"]` | Starts with |
| `[attr$="val"]` | Ends with |
| `[attr*="val"]` | Contains substring |

### Combinators

| Combinator | Example | Description |
|------------|---------|-------------|
| Descendant | `div p` | `p` inside `div` (any depth) |
| Child | `div > p` | Direct child `p` of `div` |
| Adjacent sibling | `h1 + p` | First `p` immediately after `h1` |
| General sibling | `h1 ~ p` | All `p` siblings after `h1` |

### Pseudo-Classes

| Pseudo-Class | Description |
|-------------|-------------|
| `:hover` | Mouse over element |
| `:focus` | Element has focus |
| `:active` | Element being activated |
| `:first-child` | First child of parent |
| `:last-child` | Last child of parent |
| `:nth-child(n)` | nth child (`2n`, `odd`, `3n+1`) |
| `:nth-of-type(n)` | nth of its type |
| `:not(selector)` | Negation |
| `:is(selector)` | Matches any in list |
| `:where(selector)` | Like `:is()` but zero specificity |
| `:has(selector)` | Parent selector |
| `:checked` | Checked inputs |
| `:disabled` | Disabled elements |
| `:empty` | No children |

### Pseudo-Elements

| Pseudo-Element | Description |
|---------------|-------------|
| `::before` | Insert before content |
| `::after` | Insert after content |
| `::first-line` | First line of text |
| `::first-letter` | First letter of text |
| `::placeholder` | Placeholder text in inputs |
| `::selection` | User-highlighted text |

---

## Box Model

```
┌──────────────── margin ────────────────┐
│ ┌──────────── border ────────────┐     │
│ │ ┌────────── padding ────────┐  │     │
│ │ │ ┌──────── content ──────┐ │  │     │
│ │ │ │  width × height       │ │  │     │
│ │ │ └───────────────────────┘ │  │     │
│ │ └───────────────────────────┘  │     │
│ └────────────────────────────────┘     │
└────────────────────────────────────────┘
```

| Property | Example | Notes |
|----------|---------|-------|
| `margin` | `10px 20px` | Shorthand: top right bottom left |
| `padding` | `1rem` | Same shorthand as margin |
| `border` | `1px solid #000` | width style color |
| `width` / `height` | `100%`, `300px` | Content area by default |
| `box-sizing` | `border-box` | Width/height includes padding+border |
| `outline` | `2px dashed red` | Like border but no space in layout |
| `min-width` / `max-width` | `min-width: 200px` | Constrain dimensions |

```css
/* Apply border-box globally */
*, *::before, *::after {
  box-sizing: border-box;
}
```

---

## Display & Positioning

### Display

| Value | Description |
|-------|-------------|
| `block` | Full width, new line |
| `inline` | Width of content, no width/height control |
| `inline-block` | Inline but respects width/height |
| `none` | Removed from layout |
| `flex` | Flex container |
| `grid` | Grid container |
| `contents` | Element removed, children promoted |

### Position

| Value | Description |
|-------|-------------|
| `static` | Default, normal flow |
| `relative` | Offset from normal position, keeps space |
| `absolute` | Removed from flow, relative to nearest positioned ancestor |
| `fixed` | Relative to viewport |
| `sticky` | Switches from relative to fixed at scroll threshold |

```css
.sticky-header {
  position: sticky;
  top: 0;
}
```

### Stacking & Flow

| Property | Values | Notes |
|----------|--------|-------|
| `z-index` | `integer` | Only works on positioned elements |
| `float` | `left`, `right`, `none` | Element floats to side |
| `clear` | `left`, `right`, `both` | Clears floated elements |
| `overflow` | `visible`, `hidden`, `scroll`, `auto` | Content overflow handling |

---

## Flexbox

### Container Properties

```css
.container { display: flex; }
```

| Property | Values | Default |
|----------|--------|---------|
| `flex-direction` | `row`, `row-reverse`, `column`, `column-reverse` | `row` |
| `flex-wrap` | `nowrap`, `wrap`, `wrap-reverse` | `nowrap` |
| `justify-content` | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` | `flex-start` |
| `align-items` | `stretch`, `flex-start`, `flex-end`, `center`, `baseline` | `stretch` |
| `align-content` | `stretch`, `flex-start`, `flex-end`, `center`, `space-between`, `space-around` | `stretch` |
| `gap` | `10px`, `1rem 2rem` | `0` |

### Item Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| `flex-grow` | `number` | `0` | How much item grows |
| `flex-shrink` | `number` | `1` | How much item shrinks |
| `flex-basis` | `auto`, length | `auto` | Initial size before grow/shrink |
| `flex` | `grow shrink basis` | `0 1 auto` | Shorthand |
| `align-self` | `auto`, `flex-start`, `flex-end`, `center`, `stretch` | `auto` | Override container align-items |
| `order` | `integer` | `0` | Visual order |

```css
/* Common flex shorthand values */
flex: 1;         /* flex: 1 1 0%   — equal sizing */
flex: auto;      /* flex: 1 1 auto — size based on content */
flex: none;      /* flex: 0 0 auto — inflexible */
```

---

## Grid

### Container Properties

```css
.grid { display: grid; }
```

| Property | Example |
|----------|---------|
| `grid-template-columns` | `200px 1fr 1fr` |
| `grid-template-rows` | `auto 1fr auto` |
| `grid-template-areas` | `"header header" "sidebar main" "footer footer"` |
| `gap` | `1rem` or `10px 20px` (row col) |
| `justify-items` | `start`, `end`, `center`, `stretch` |
| `align-items` | `start`, `end`, `center`, `stretch` |
| `justify-content` | `start`, `center`, `space-between`, etc. |
| `align-content` | `start`, `center`, `space-between`, etc. |

### Item Properties

| Property | Example | Description |
|----------|---------|-------------|
| `grid-column` | `1 / 3` or `span 2` | Column start / end |
| `grid-row` | `2 / 4` | Row start / end |
| `grid-area` | `header` | Named area or `row-start / col-start / row-end / col-end` |
| `justify-self` | `center` | Horizontal alignment in cell |
| `align-self` | `end` | Vertical alignment in cell |

### Grid Functions

| Function | Example | Description |
|----------|---------|-------------|
| `repeat()` | `repeat(3, 1fr)` | Repeat track pattern |
| `minmax()` | `minmax(200px, 1fr)` | Min and max size |
| `auto-fill` | `repeat(auto-fill, minmax(200px, 1fr))` | Fill with tracks, empty tracks preserved |
| `auto-fit` | `repeat(auto-fit, minmax(200px, 1fr))` | Fill with tracks, empty tracks collapsed |
| `fr` | `1fr 2fr` | Fraction of remaining space |

```css
/* Responsive grid with no media queries */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

---

## Typography

| Property | Example | Notes |
|----------|---------|-------|
| `font-family` | `'Inter', sans-serif` | Comma-separated fallback stack |
| `font-size` | `1rem`, `16px`, `clamp(1rem, 2vw, 1.5rem)` | Prefer `rem` for scalability |
| `font-weight` | `400`, `bold`, `700` | 100-900 or keywords |
| `font-style` | `normal`, `italic`, `oblique` | |
| `line-height` | `1.5` | Unitless preferred |
| `letter-spacing` | `0.05em` | Space between characters |
| `text-align` | `left`, `center`, `right`, `justify` | |
| `text-transform` | `uppercase`, `lowercase`, `capitalize`, `none` | |
| `text-decoration` | `none`, `underline`, `line-through` | |
| `word-wrap` / `overflow-wrap` | `break-word` | Break long words |
| `text-overflow` | `ellipsis`, `clip` | Requires `overflow: hidden` and `white-space: nowrap` |
| `white-space` | `normal`, `nowrap`, `pre`, `pre-wrap`, `pre-line` | Whitespace handling |

```css
/* Font shorthand: style weight size/line-height family */
font: italic 700 1rem/1.5 'Inter', sans-serif;
```

---

## Colors & Backgrounds

### Color Formats

| Format | Example | Notes |
|--------|---------|-------|
| Hex | `#ff6600`, `#f60` | 3, 6, or 8 (with alpha) digits |
| RGB | `rgb(255, 102, 0)` | 0-255 per channel |
| RGBA | `rgba(255, 102, 0, 0.5)` | With alpha |
| HSL | `hsl(24, 100%, 50%)` | Hue, saturation, lightness |
| HSLA | `hsla(24, 100%, 50%, 0.5)` | With alpha |
| Modern syntax | `rgb(255 102 0 / 50%)` | Space-separated, slash for alpha |
| Named | `red`, `transparent` | CSS named colors |

### Background Properties

| Property | Example |
|----------|---------|
| `background-color` | `#f5f5f5` |
| `background-image` | `url('bg.png')` |
| `background-size` | `cover`, `contain`, `100px 200px` |
| `background-position` | `center`, `top right`, `50% 50%` |
| `background-repeat` | `no-repeat`, `repeat-x` |
| `background-attachment` | `scroll`, `fixed` |
| `background` | `#f5f5f5 url('bg.png') no-repeat center/cover` |

### Gradients

```css
/* Linear gradient */
background: linear-gradient(to right, #ff6600, #ff0066);
background: linear-gradient(135deg, #ff6600 0%, #ff0066 100%);

/* Radial gradient */
background: radial-gradient(circle, #ff6600, #ff0066);

/* Conic gradient */
background: conic-gradient(from 0deg, red, yellow, green, blue, red);
```

### Opacity

```css
opacity: 0.5;                      /* Entire element */
background: rgba(0, 0, 0, 0.5);  /* Background only */
```

---

## Units

| Unit | Relative To | Best For |
|------|-------------|----------|
| `px` | Absolute | Borders, shadows, fine details |
| `em` | Parent font-size | Component-scoped spacing |
| `rem` | Root font-size | Font sizes, global spacing |
| `%` | Parent element | Fluid widths |
| `vw` | 1% viewport width | Full-width elements |
| `vh` | 1% viewport height | Full-height sections |
| `vmin` | Smaller of vw/vh | Responsive sizing |
| `vmax` | Larger of vw/vh | Responsive sizing |
| `ch` | Width of "0" character | Input/text widths |
| `fr` | Fraction of grid space | Grid tracks |
| `dvh` | Dynamic viewport height | Mobile-safe full height |
| `svh` / `lvh` | Small / large viewport | Mobile viewport variants |

---

## Transitions & Animations

### Transitions

```css
/* Shorthand: property duration timing-function delay */
transition: all 0.3s ease;
transition: transform 0.3s ease, opacity 0.2s linear;

/* Individual properties */
transition-property: transform;
transition-duration: 0.3s;
transition-timing-function: ease-in-out;
transition-delay: 0s;
```

| Timing Function | Description |
|----------------|-------------|
| `ease` | Slow start, fast, slow end (default) |
| `linear` | Constant speed |
| `ease-in` | Slow start |
| `ease-out` | Slow end |
| `ease-in-out` | Slow start and end |
| `cubic-bezier(n,n,n,n)` | Custom curve |

### Animations

```css
@keyframes slide-in {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
}

/* Shorthand: name duration timing-function delay iteration-count direction fill-mode */
animation: slide-in 0.5s ease-out forwards;
```

| Property | Values |
|----------|--------|
| `animation-name` | `@keyframes` name |
| `animation-duration` | `0.5s`, `200ms` |
| `animation-iteration-count` | `1`, `infinite` |
| `animation-direction` | `normal`, `reverse`, `alternate` |
| `animation-fill-mode` | `none`, `forwards`, `backwards`, `both` |
| `animation-play-state` | `running`, `paused` |

---

## Media Queries

### Syntax

```css
@media (max-width: 768px) { /* styles */ }
@media (min-width: 768px) and (max-width: 1024px) { /* styles */ }
@media screen and (orientation: landscape) { /* styles */ }
```

### Common Breakpoints

| Name | Width |
|------|-------|
| Mobile | `max-width: 480px` |
| Tablet | `max-width: 768px` |
| Laptop | `max-width: 1024px` |
| Desktop | `max-width: 1280px` |

### Preference Queries

```css
/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root { --bg: #1a1a1a; --text: #f0f0f0; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

### Container Queries

```css
.card-container { container-type: inline-size; }

@container (min-width: 400px) {
  .card { flex-direction: row; }
}
```

---

## CSS Variables (Custom Properties)

```css
/* Define variables */
:root {
  --color-primary: #0066ff;
  --spacing-md: 1rem;
  --font-body: 'Inter', sans-serif;
}

/* Use variables */
.button {
  background: var(--color-primary);
  padding: var(--spacing-md);
  font-family: var(--font-body);
}

/* Fallback value */
color: var(--undefined-var, #333);

/* Scoped override */
.dark-theme {
  --color-primary: #66aaff;
}

/* Use in calc() */
padding: calc(var(--spacing-md) * 2);
```

Variables are inherited and scoped. Define on `:root` for global, or on a selector for local scope.

---

## Common Patterns

### Centering

```css
/* Horizontal — block element */
margin: 0 auto;

/* Horizontal — inline/text */
text-align: center;

/* Vertical & horizontal — flexbox */
display: flex;
justify-content: center;
align-items: center;

/* Vertical & horizontal — grid */
display: grid;
place-items: center;

/* Vertical & horizontal — absolute positioning */
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

### Truncate Text

```css
/* Single line */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Multi-line (n lines) */
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### Aspect Ratio

```css
.video {
  aspect-ratio: 16 / 9;
}
```

### Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### Visually Hidden (Screen Reader Only)

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Reset / Normalize Basics

```css
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, sans-serif; line-height: 1.5; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }
```
