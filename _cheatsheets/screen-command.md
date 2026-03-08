---
title: "Screen Command"
description: "GNU Screen command cheatsheet — sessions, windows, splitting, detaching, and key bindings."
category: "Tools & DevOps"
icon: "🖥️"
---
# `screen` — Terminal Multiplexing Cheatsheet

A compact, practical reference for GNU Screen (the `screen` terminal multiplexer).


## What is screen?
`screen` lets you run multiple terminal sessions inside one physical terminal. You can detach sessions and reattach later, share sessions between users, create named windows, split the display, use copy/scrollback mode, and log output.

Install

- macOS (Homebrew):

```bash
brew install screen
```

- Debian/Ubuntu:

```bash
sudo apt update && sudo apt install screen
```

- Fedora/CentOS/RHEL:

```bash
sudo dnf install screen
# or on older CentOS: sudo yum install screen
```

Quick notes: modern Linux distros sometimes include `screen` by default. Alternative multiplexers include `tmux` and `byobu`.

## Terminology / concepts
- **Prefix key**: the default screen command prefix is `Ctrl-a` (written as `C-a`). You press `C-a`, then the command key. You can remap this in `.screenrc`.
- **Session**: a running group of windows managed by screen. You can have multiple sessions.
- **Window**: a shell (or program) inside a session. Each window has a numeric index and optional name.
- **Region**: a split area of the display showing a window.

## Quick reference (most-used commands)

| Action | Command |
|--------|---------|
| Start a new session (unnamed) | `screen` |
| Start a named session | `screen -S work` |
| List sessions | `screen -ls` |
| Attach to a session | `screen -r work` |
| Force reattach (detach other first) | `screen -d -r work` |
| Multi-display attach (without detaching other) | `screen -x work` |
| Clean up dead sessions | `screen -wipe` |
| Reattach most recent session | `screen -RR` |
| Kill a session from outside | `screen -S work -X quit` |
| Send a command to a session (e.g., `ls` in window 0) | `screen -S work -p 0 -X stuff $'ls\n'` |
| Start a detached session running a command | `screen -dmS backup bash -c 'tar -czf /tmp/home.tar.gz ~'` |

## Key bindings inside screen

All key bindings use the prefix key `C-a` followed by the command key.

### General

| Key | Action |
|-----|--------|
| `C-a` `?` | Show all key bindings (help) |
| `C-a` `d` | Detach from current session |
| `C-a` `D D` | Power detach (detach and logout) |
| `C-a` `x` | Lock the screen session |
| `C-a` `:` | Enter command mode |

### Windows

| Key | Action |
|-----|--------|
| `C-a` `c` | Create a new window |
| `C-a` `A` | Rename current window (type name, then Enter) |
| `C-a` `k` | Kill current window (confirm with `y`) |
| `C-a` `n` | Switch to next window |
| `C-a` `p` | Switch to previous window |
| `C-a` `<number>` | Switch to window by number (e.g., `C-a` `2`) |
| `C-a` `"` | List windows (interactive selector) |
| `C-a` `w` | Show window list in status line |
| `C-a` `'` | Select window by name or number prompt |
| `C-a` `:number <n>` | Move current window to index `<n>` |

### Splitting the display (regions)

| Key | Action |
|-----|--------|
| `C-a` `S` | Split horizontally |
| `C-a` `\|` | Split vertically (screen 4.x+) |
| `C-a` `TAB` | Switch focus to next region |
| `C-a` `X` | Remove current region |
| `C-a` `Q` | Remove all regions except the current one |
| `C-a` `:resize <n>` | Resize current region to `<n>` lines |
| `C-a` `:fit` | Fit region to current terminal size |
| `C-a` `c` | Open a window in the current region |

### Copy/scrollback mode

| Key | Action |
|-----|--------|
| `C-a` `[` | Enter copy/scrollback mode |
| Arrow keys / `h j k l` | Navigate (vi-style, depending on config) |
| `PageUp` / `PageDown` | Scroll pages |
| `Space` | Start/end selection |
| `C-a` `]` | Paste copied text into current window |

Tip: Increase scrollback buffer in `.screenrc` with `defscrollback 5000`.

### Logging

| Key / Command | Action |
|---------------|--------|
| `C-a` `H` | Toggle logging for the current window |
| `screen -S work -X log on` | Enable logging from outside |
| `screen -S work -X logfile /path/to/log.txt` | Set log file path from outside |
| `screen -S work -X log off` | Disable logging from outside |

Log files are named `screenlog.0`, `screenlog.1`, etc. by default.

## Disconnect vs terminate

| Action | How |
|--------|-----|
| Detach (leave processes running) | `C-a` `d` |
| Power detach (detach + logout) | `C-a` `D D` |
| Quit session from inside | `C-a` `:quit` |
| Quit session from outside | `screen -S work -X quit` |

## Environment variables

| Variable | Description |
|----------|-------------|
| `$STY` | Name of the current screen session (empty if not inside screen) |
| `$WINDOW` | Number of the current window (useful for scripting and prompts) |

## Example workflows
- Start a persistent session and run a long command:

```bash
screen -S longjob
# inside screen run: python long_script.py
# Detach: C-a d
# Reattach to check progress:
screen -r longjob
```

- Share a session with another user (multiuser mode):

```bash
# as owner inside screen
C-a :multiuser on
C-a :acladd friendusername
```
Then the other user can attach to the session by name if permissions allow.

- Run a background command in a screen and detach immediately:

```bash
screen -dmS backup bash -c 'tar -czf /tmp/home.tar.gz /home/you'
# -d -m: start detached, -S name
```

- Send a literal Ctrl-C to a running window:

```bash
screen -S work -p 0 -X stuff $'\003'
```

- Run a command in a new named window:

```bash
screen -S myproj -X screen -t build bash -c 'make build; exec bash'
```

## Sample .screenrc
Drop this in `~/.screenrc` (small, sensible defaults):

```
# Use C-a as prefix (default). To change: escape ^Aa
# Increase scrollback buffer
defscrollback 5000

# Set a better hardstatus (shows session/window info) if your build supports it
hardstatus alwayslastline
hardstatus string "%{= kG}[ %H ] %=%{= kw}%{= kG}%S %=%{= kG}%Y-%m-%d %c"

# Start windows with names
screen -t editor 0 $SHELL
screen -t server 1 $SHELL

# Bind a key to quickly create a new named window
bind c screen -t "shell-#" 0 $SHELL

# Logging filename template
logfile $HOME/screenlogs/screenlog.%n

# Allow multiuser (turn on manually inside a session for safety):
# multiuser on

# Status line colors can be customized further

# Example: automatically create 3 windows at startup
# screen -t shell1 0
# screen -t shell2 1
# screen -t shell3 2
```

Create directory for logs (if you use the logfile above):

```bash
mkdir -p ~/screenlogs
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't reattach | Run `screen -ls` to check session state. If `Attached`, use `screen -d -r <id>` to steal it. |
| Dead sessions lingering | Run `screen -wipe` to clean them up. |
| Permission denied when sharing | Ensure correct pts permissions or use `multiuser` + `acladd` inside screen. |
| Copy mode navigation unresponsive | Try `export TERM=xterm-256color` or check `termcap` entries. |
| Session name collisions | Always use unique names with `-S` to avoid attaching to the wrong session. |

## TL;DR

| Action | Command |
|--------|---------|
| Start named session | `screen -S name` |
| List sessions | `screen -ls` |
| Attach | `screen -r name` |
| Detach (inside) | `C-a` `d` |
| New window | `C-a` `c` |
| List windows | `C-a` `"` |
| Show help | `C-a` `?` |
| Copy mode | `C-a` `[` |
| Toggle logging | `C-a` `H` |
| Kill session | `screen -S name -X quit` |
| Clean up dead sessions | `screen -wipe` |

## Further reading
- `man screen`
- GNU Screen manual: https://www.gnu.org/software/screen/manual/
- Examples and `.screenrc` snippets on the web and GitHub dotfiles
