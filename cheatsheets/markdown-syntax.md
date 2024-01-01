# Markdown Syntax Cheatsheet

This cheatsheet provides a list of useful Markdown syntax for formatting text documents.


## Headers

**Input**  
```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

**Output**  
# H1
## H2
### H3
#### H4
##### H5
###### H6


## Emphasis

**Input**  
```markdown
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

*You **can** combine them*
```

**Output**  
*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

*You **can** combine them*


## Lists

### Unordered

**Input**
```markdown
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

**Output**  
* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered

**Input**  
```markdown
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b
```

**Output**  
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b


## Links

**Input**
```markdown
[GitHub](http://github.com)
```
**Output**  
[GitHub](http://github.com)


## Images

**Input**
```markdown
![An image](https://picsum.photos/300/200)
Format: ![Alt Text](url)
```

**Output**  
![An image](https://picsum.photos/300/200)


## Blockquotes

**Input**  
```markdown
As Kanye West said:

> We're living the future so
> the present is our past.

> This is a blockquote
>> This is a nested blockquote
```

**Output**  
As Kanye West said:

> We're living the future so  
> the present is our past.

> This is a blockquote
>> This is a nested blockquote


## Inline code

**Input**
```markdown
I think you should use an `<addr>` element here instead.
```

**Output**  
I think you should use an `<addr>` element here instead.


## Code Blocks

**Input**
````markdown
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
`````

**Output**  
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```


## Tables

**Input**
```markdown
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

**Output**  
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |


## Task Lists

**Input**
```markdown
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [ ] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

**Output**  
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [ ] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item


## Strikethrough

**Input**
```markdown
~~this is a strikethrough text~~
```

**Output**
~~this is a strikethrough text~~