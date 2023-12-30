# Markdown Syntax Cheatsheet

This cheatsheet provides a list of useful Markdown syntax for formatting text documents.

## Headers

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

## Emphasis

```markdown
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

*You **can** combine them*
```

## Lists

### Unordered

```markdown
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

### Ordered

```markdown
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b
```

## Links

```markdown
[GitHub](http://github.com)
```

## Images

```markdown
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
```

## Blockquotes

```markdown
As Kanye West said:

> We're living the future so
> the present is our past.
```

## Inline code

```markdown
I think you should use an
`<addr>` element here instead.
```

## Code Blocks

````markdown
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```   
`````

## Tables

```markdown
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

## Task Lists

```markdown
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [ ] this is a complete item
- [ ] this is an incomplete item
```

## Strikethrough

```markdown
~~this is a strikethrough text~~
```
