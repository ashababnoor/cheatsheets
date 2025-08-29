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

Quick notes: modern Linux distros sometimes include `screen` by default. An alternative multiplexers are `tmux` and `byobu`.

## Terminology / contract
- Prefix/key: the default screen command prefix is `Ctrl-a` (written as `C-a`). You press `C-a`, then the command key. You can remap this in `.screenrc`.
- Session: a running group of windows managed by screen. You can have multiple sessions.
- Window: a shell (or program) inside a session. Each window has a numeric index and optional name.
- Region: a split area of the display showing a window.

Success criteria: create, list, attach/detach, name sessions, create/switch windows, split screen, use copy mode, log output.

## Quick reference (most-used commands)
- Start a new session (unnamed):

```bash
screen
```

- Start a new session and name it `work`:

```bash
screen -S work
```

- List screen sessions:

```bash
screen -ls
# or: screen --list
```

- Attach to a session (reattach):

```bash
screen -r work
```

- Reattach even if already attached elsewhere (force):

```bash
screen -d -r work
```

- Detach from current session (while inside screen):

Press: `C-a` `d`

- Create a new window (inside screen):

Press: `C-a` `c`

- Switch to next/previous window:

`C-a` `n` (next)
`C-a` `p` (previous)

- Switch to a specific window number (e.g., 2):

`C-a` `2`

- Rename current window (inside):

`C-a` `A` (then type name and Enter)

- Kill current window (inside):

`C-a` `k` (confirm with y)

- Kill a session from outside:

```bash
screen -S work -X quit
```

- Send a command to a session (run `ls` in window 0):

```bash
screen -S work -p 0 -X stuff $'ls\n'
```

## Windows, numbering, and navigation
- Create window: `C-a` `c`
- List windows (screen display): `C-a` `"` (double-quote)
- Switch by number: `C-a` `<number>`
- Next/prev: `C-a` `n` / `C-a` `p`
- Move window to another number index: C-a : number  (use screen's command line)

## Splitting the display (regions)
Not all screen builds support advanced split features; these are the common commands:
- Create vertical/horizontal split (older screen uses "split"):

`C-a` `S`  (split horizontally into two regions)
`C-a` `|`  (split vertically in some builds—rare)

- Switch focus region:

`C-a` `TAB`

- Create a window in the current region:

`C-a` `c`

- Remove a region:

`C-a` `X` (capital X) — removes the current region

Note: Many users prefer `tmux` for splitting because its split syntax is more consistent. Still, screen can do the job for simple layouts.

## Copy/scrollback mode (scrolling & copying text)
- Enter copy/scrollback mode: `C-a` `[`
- Move with arrow keys, PageUp/PageDown, or vi keys (k/j/h/l) depending on build and settings.
- Start selection: Space
- Move cursor to end of selection: Space (or Enter in some setups)
- Paste selection into current window: `C-a` `]`

Tip: You can configure a larger scrollback buffer in `.screenrc` (see below).

## Logging and session output
- Start logging for the current window (inside screen):

`C-a` `H`

This toggles logging to a file named `screenlog.0`, `screenlog.1`, etc. To specify a filename from outside:

```bash
screen -S work -X log on
screen -S work -X logfile /path/to/logfile.txt
```

- Turn logging off:

`C-a` `H`  (toggle) or

```bash
screen -S work -X log off
```

## Disconnect vs terminate
- Detach (leave processes running): `C-a` `d`
- Quit screen (terminate session and all windows): from outside

```bash
screen -S work -X quit
```

or inside screen: `C-a` `:quit`

## Example workflows
- Start a persistent session and run a long command:

```bash
screen -S longjob
# inside screen run: python long_script.py
# Detach: C-a d
# Reattach to check progress:
screen -r longjob
```

- Share a session with another user (they need permission to your tty or use multiuser):

Enable multiuser and addacl (requires `.screenrc` or commands):

```bash
# as owner inside screen
C-a :multiuser on
C-a :acladd friendusername
```
Then the other user can attach to the session by name if permissions allow.

- Run a background command in a screen from the outside and detach immediately:

```bash
screen -dmS backup bash -c 'tar -czf /tmp/home.tar.gz /home/you'
# -d -m: start detached, -S name
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

## Advanced tips and scripts
- Reattaching to the most recently detached session:

```bash
screen -RR
# -RR tries to reattach, and if multiple sessions exist, creates one
```

- Attach to a session and bring it to the foreground if it's attached elsewhere:

```bash
screen -d -r <sessionname>
```

- Send a literal Ctrl-C or other control sequence to a window:

Use `stuff` and escape sequences. For example, send Ctrl-C:

```bash
screen -S work -p 0 -X stuff $'\003'
```

- Scripting example: run a command in a new window and keep window named:

```bash
screen -S myproj -X screen -t build bash -c 'make build; exec bash'
```

## Troubleshooting
- Can't reattach: check `screen -ls` for session states (`Detached`, `Attached`, `Dead`). If a session says `Attached` and you need it, use `screen -d -r <id>` to detach it from the other terminal.

- Permission denied when sharing: ensure correct permissions for the pts device or use `multiuser` + `acladd` inside screen.

- Copy mode navigation doesn't respond: some terminals require `termcap` entries or proper `TERM` value. Try `export TERM=xterm-256color` or use alternate keys.

- Session name collisions: always choose unique session names with -S to avoid attaching to the wrong session.

## Short cheat list (TL;DR)
- Start named session: `screen -S name`
- List: `screen -ls`
- Attach: `screen -r name`
- Detach (inside): `C-a` `d`
- New window: `C-a` `c`
- List windows: `C-a` `"`~
- Copy mode: `C-a` `[`
- Toggle logging: `C-a` `H`
- Kill session: `screen -S name -X quit`

## Further reading
- `man screen`
- GNU Screen manual: https://www.gnu.org/software/screen/manual/
- Examples and `.screenrc` snippets on the web and GitHub dotfiles
