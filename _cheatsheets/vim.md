---
title: "Vim"
subtitle: "Modes, motions, editing, search and replace, registers, buffers, and macros."
description: "Vim cheatsheet — modes, navigation, editing, search/replace, buffers, and essential commands."
category: "Tools & DevOps"
logo: "vim"
---

## Modes

| Mode | Enter | Exit to Normal |
|------|-------|----------------|
| **Normal** | `Esc` or `Ctrl-[` | — |
| **Insert** | `i`, `I`, `a`, `A`, `o`, `O` | `Esc` |
| **Visual** | `v` | `Esc` |
| **Visual Line** | `V` | `Esc` |
| **Visual Block** | `Ctrl-v` | `Esc` |
| **Command-line** | `:`, `/`, `?` | `Esc` or `Enter` (execute) |
| **Replace** | `R` | `Esc` |

## Navigation

### Character & Word Movement

| Key | Action |
|-----|--------|
| `h` | Left |
| `j` | Down |
| `k` | Up |
| `l` | Right |
| `w` | Next word start |
| `W` | Next WORD start (whitespace-delimited) |
| `b` | Previous word start |
| `B` | Previous WORD start |
| `e` | Next word end |
| `E` | Next WORD end |

### Line Movement

| Key | Action |
|-----|--------|
| `0` | Beginning of line |
| `^` | First non-blank character |
| `$` | End of line |
| `f{x}` | Jump forward to character `x` |
| `F{x}` | Jump backward to character `x` |
| `t{x}` | Jump forward to before character `x` |
| `T{x}` | Jump backward to after character `x` |
| `;` | Repeat last `f`/`F`/`t`/`T` forward |
| `,` | Repeat last `f`/`F`/`t`/`T` backward |

### File & Screen Movement

| Key | Action |
|-----|--------|
| `gg` | First line of file |
| `G` | Last line of file |
| `nG` or `:n` | Go to line `n` |
| `{` | Previous blank-line-separated block |
| `}` | Next blank-line-separated block |
| `%` | Jump to matching bracket `()`, `{}`, `[]` |
| `H` | Top of screen |
| `M` | Middle of screen |
| `L` | Bottom of screen |

### Scrolling

| Key | Action |
|-----|--------|
| `Ctrl-d` | Scroll half-page down |
| `Ctrl-u` | Scroll half-page up |
| `Ctrl-f` | Scroll full page forward |
| `Ctrl-b` | Scroll full page backward |

## Editing

### Entering Insert Mode

| Key | Action |
|-----|--------|
| `i` | Insert before cursor |
| `I` | Insert at beginning of line |
| `a` | Append after cursor |
| `A` | Append at end of line |
| `o` | Open new line below |
| `O` | Open new line above |

### Modifying Text

| Key | Action |
|-----|--------|
| `x` | Delete character under cursor |
| `X` | Delete character before cursor |
| `r{x}` | Replace character under cursor with `x` |
| `R` | Enter Replace mode (overwrite) |
| `d{motion}` | Delete over motion |
| `dd` | Delete entire line |
| `D` | Delete to end of line (`d$`) |
| `c{motion}` | Change over motion (delete + insert) |
| `cc` | Change entire line |
| `C` | Change to end of line (`c$`) |
| `y{motion}` | Yank (copy) over motion |
| `yy` | Yank entire line |
| `Y` | Yank entire line (same as `yy`) |
| `p` | Paste after cursor |
| `P` | Paste before cursor |
| `J` | Join current line with next |
| `u` | Undo |
| `Ctrl-r` | Redo |
| `.` | Repeat last change |
| `~` | Toggle case of character |

## Operators + Motions

Vim follows the grammar: **`operator [count] motion/text-object`**

| Operator | Action |
|----------|--------|
| `d` | Delete |
| `c` | Change (delete + insert) |
| `y` | Yank (copy) |
| `>` | Indent right |
| `<` | Indent left |
| `=` | Auto-indent |
| `gU` | Uppercase |
| `gu` | Lowercase |

### Examples

| Command | Action |
|---------|--------|
| `dw` | Delete from cursor to next word start |
| `d$` | Delete to end of line |
| `diw` | Delete inner word |
| `di"` | Delete inside double quotes |
| `ci(` | Change inside parentheses |
| `yap` | Yank around paragraph |
| `>ip` | Indent inner paragraph |
| `gUiw` | Uppercase inner word |
| `3dw` | Delete next 3 words |
| `d2j` | Delete current line and 2 lines below |

## Text Objects

Used with operators: `{operator}{a|i}{object}`

- **`i`** = inner (contents only)
- **`a`** = around (contents + delimiters/whitespace)

| Text Object | Inner (`i`) | Around (`a`) |
|-------------|-------------|--------------|
| Word | `iw` — word | `aw` — word + surrounding space |
| WORD | `iW` — WORD | `aW` — WORD + surrounding space |
| Sentence | `is` — sentence | `as` — sentence + trailing space |
| Paragraph | `ip` — paragraph | `ap` — paragraph + trailing blank line |
| `"` double quotes | `i"` — inside quotes | `a"` — includes quotes |
| `'` single quotes | `i'` — inside quotes | `a'` — includes quotes |
| `` ` `` backticks | `` i` `` — inside backticks | `` a` `` — includes backticks |
| `(` or `)` parens | `i(` — inside parens | `a(` — includes parens |
| `{` or `}` braces | `i{` — inside braces | `a{` — includes braces |
| `[` or `]` brackets | `i[` — inside brackets | `a[` — includes brackets |
| `<` or `>` angle | `i<` — inside angle brackets | `a<` — includes angle brackets |
| Tag (HTML/XML) | `it` — inside tag | `at` — includes tag |

## Visual Mode

| Key | Action |
|-----|--------|
| `v` | Character-wise visual |
| `V` | Line-wise visual |
| `Ctrl-v` | Block-wise visual |
| `o` | Move to other end of selection |
| `gv` | Reselect last visual selection |

### Operations on Selection

| Key | Action |
|-----|--------|
| `d` / `x` | Delete selection |
| `c` | Change selection |
| `y` | Yank selection |
| `>` / `<` | Indent / unindent |
| `~` | Toggle case |
| `U` | Uppercase |
| `u` | Lowercase |
| `:` | Enter command for selection |

### Visual Block Tricks

| Key | Action |
|-----|--------|
| `Ctrl-v` → select → `I` | Insert text at start of each block line |
| `Ctrl-v` → select → `A` | Append text at end of each block line |
| `Ctrl-v` → select → `c` | Change each block line |
| `Ctrl-v` → select → `r{x}` | Replace every selected character with `x` |

## Search & Replace

### Searching

| Key | Action |
|-----|--------|
| `/pattern` | Search forward |
| `?pattern` | Search backward |
| `n` | Next match (same direction) |
| `N` | Next match (opposite direction) |
| `*` | Search forward for word under cursor |
| `#` | Search backward for word under cursor |

### Substitution

| Command | Action |
|---------|--------|
| `:s/old/new/` | Replace first occurrence on current line |
| `:s/old/new/g` | Replace all on current line |
| `:%s/old/new/g` | Replace all in file |
| `:%s/old/new/gc` | Replace all in file with confirmation |
| `:'<,'>s/old/new/g` | Replace all in visual selection |

Supports full regex: `:%s/\v(\w+)/\1_suffix/g`

## Registers

| Register | Description |
|----------|-------------|
| `""` | Default (unnamed) register — last delete/yank |
| `"0` | Yank register — last yank only |
| `"a` – `"z` | Named registers |
| `"A` – `"Z` | Append to named register |
| `"+` | System clipboard |
| `"*` | Primary selection (X11) / clipboard (macOS) |
| `"_` | Black hole register (discard) |
| `"/` | Last search pattern |
| `":` | Last command-line command |
| `".` | Last inserted text |
| `"%` | Current filename |

| Command | Action |
|---------|--------|
| `"ay` | Yank into register `a` |
| `"ap` | Paste from register `a` |
| `"+y` | Yank to system clipboard |
| `"+p` | Paste from system clipboard |
| `:reg` | Show all register contents |
| `:reg a` | Show contents of register `a` |

## Marks

| Command | Action |
|---------|--------|
| `m{a-z}` | Set local mark |
| `m{A-Z}` | Set global mark (across files) |
| `'{a}` | Jump to line of mark `a` |
| `` `{a} `` | Jump to exact position of mark `a` |
| `:marks` | List all marks |

### Special Marks

| Mark | Position |
|------|----------|
| `''` | Line before last jump |
| ` `` ` | Exact position before last jump |
| `` `. `` | Position of last change |
| `` `^ `` | Position of last insert |
| `` `[ `` / `` `] `` | Start / end of last yank or change |
| `` `< `` / `` `> `` | Start / end of last visual selection |

## Buffers, Windows & Tabs

### Buffers

| Command | Action |
|---------|--------|
| `:e {file}` | Open file in new buffer |
| `:ls` | List buffers |
| `:bn` | Next buffer |
| `:bp` | Previous buffer |
| `:bd` | Delete (close) buffer |
| `:b {n}` | Go to buffer number `n` |
| `:b {name}` | Go to buffer by partial name |

### Windows (Splits)

| Command | Action |
|---------|--------|
| `Ctrl-w s` | Horizontal split |
| `Ctrl-w v` | Vertical split |
| `Ctrl-w h/j/k/l` | Move to left/down/up/right window |
| `Ctrl-w w` | Cycle through windows |
| `Ctrl-w q` | Close current window |
| `Ctrl-w =` | Equalize window sizes |
| `Ctrl-w o` | Close all other windows |
| `Ctrl-w +/-` | Increase / decrease height |
| `Ctrl-w >/<` | Increase / decrease width |

### Tabs

| Command | Action |
|---------|--------|
| `:tabnew {file}` | Open file in new tab |
| `:tabn` or `gt` | Next tab |
| `:tabp` or `gT` | Previous tab |
| `:tabclose` | Close current tab |
| `:tabmove {n}` | Move tab to position `n` |

## Macros

| Command | Action |
|---------|--------|
| `q{a}` | Start recording macro into register `a` |
| `q` | Stop recording |
| `@{a}` | Play macro from register `a` |
| `@@` | Replay last played macro |
| `5@a` | Play macro `a` five times |
| `:5,10normal @a` | Run macro `a` on lines 5–10 |

## Command-line

| Command | Action |
|---------|--------|
| `:w` | Save |
| `:w {file}` | Save as |
| `:q` | Quit |
| `:q!` | Quit without saving |
| `:wq` or `:x` or `ZZ` | Save and quit |
| `:e {file}` | Open file |
| `:e!` | Reload file (discard changes) |
| `:!{cmd}` | Run shell command |
| `:r {file}` | Insert file contents below cursor |
| `:r !{cmd}` | Insert command output below cursor |
| `:set {option}` | Set an option |
| `:noh` | Clear search highlighting |
| `:earlier {n}` | Undo to `n` changes ago (or `1m`, `5s`) |
| `:later {n}` | Redo forward `n` changes |

## Configuration (`.vimrc`)

```vim
set number              " Show line numbers
set relativenumber      " Relative line numbers
set expandtab           " Spaces instead of tabs
set tabstop=4           " Tab width
set shiftwidth=4        " Indent width
set autoindent          " Auto-indent new lines
set smartindent         " Smart auto-indent
set hlsearch            " Highlight search results
set incsearch           " Incremental search
set ignorecase          " Case-insensitive search
set smartcase           " Case-sensitive if uppercase present
set clipboard=unnamedplus  " Use system clipboard
set scrolloff=8         " Keep 8 lines above/below cursor
set nowrap              " Don't wrap lines
set cursorline          " Highlight current line
syntax on               " Syntax highlighting
filetype plugin indent on
```

## Useful Combos

| Command | Action |
|---------|--------|
| `ciw` | Change inner word |
| `caw` | Change around word (includes space) |
| `dap` | Delete around paragraph |
| `yi"` | Yank inside double quotes |
| `va{` | Visual select around braces |
| `ggVG` | Select entire file |
| `gg=G` | Auto-indent entire file |
| `ggyG` | Yank entire file |
| `xp` | Swap two characters |
| `ddp` | Swap current line with next |
| `Ctrl-v` → `I` → type → `Esc` | Block insert on multiple lines |
| `:%s/\v(\w+)/\U\1/g` | Uppercase all words in file |
| `:%s/\s\+$//e` | Remove trailing whitespace |
| `:%s/^/  /` | Indent every line by 2 spaces |
| `da(` | Delete function arguments including parens |
| `dit` | Delete inner HTML tag content |
| `vip:sort` | Sort lines in paragraph |
