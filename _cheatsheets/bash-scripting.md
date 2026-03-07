---
title: "Bash Scripting"
category: "Tools & DevOps"
icon: "📜"
---

## Shebang & Basics

```bash
#!/bin/bash              # Standard shebang
#!/usr/bin/env bash      # Portable shebang (uses PATH lookup)

# This is a comment

set -e                   # Exit on error
set -u                   # Exit on undefined variable
set -o pipefail          # Exit on pipe failure
set -euo pipefail        # All three combined (recommended)

chmod +x script.sh       # Make script executable
./script.sh              # Run script
bash script.sh           # Run without execute permission
source script.sh         # Run in current shell (imports vars/functions)
```

Run **ShellCheck** to lint your scripts:

```bash
shellcheck script.sh     # Static analysis for common mistakes
```

---

## Variables

```bash
name="world"             # No spaces around =
readonly PI=3.14         # Constant, cannot reassign
local count=0            # Local to function scope
unset name               # Remove variable
```

### Quoting Rules

| Syntax | Behavior |
|---|---|
| `"double"` | Expands variables and command substitutions |
| `'single'` | Literal string, no expansion |
| `` `cmd` `` | Command substitution (legacy; prefer `$(cmd)`) |

### Variable Expansion & Defaults

```bash
echo "${var}"            # Explicit expansion (preferred)
echo "${var:-default}"   # Use default if var is unset/empty
echo "${var:=default}"   # Assign default if var is unset/empty
echo "${var:+alt}"       # Use alt if var IS set and non-empty
echo "${var:?error msg}" # Exit with error if var is unset/empty
```

---

## String Operations

```bash
str="Hello, World!"

echo "${#str}"               # Length: 13
echo "${str:7}"              # Substring from offset: World!
echo "${str:7:5}"            # Substring offset+length: World
echo "${str/World/Bash}"     # Replace first: Hello, Bash!
echo "${str//l/L}"           # Replace all: HeLLo, WorLd!
echo "${str#Hello, }"        # Remove shortest prefix: World!
echo "${str##*, }"           # Remove longest prefix: World!
echo "${str%!}"              # Remove shortest suffix: Hello, World
echo "${str%%o*}"            # Remove longest suffix: Hell
echo "${str^^}"              # Uppercase: HELLO, WORLD!
echo "${str,,}"              # Lowercase: hello, world!
echo "${str^}"               # Capitalize first: Hello, World!
```

---

## Arrays

### Indexed Arrays

```bash
arr=(one two three)          # Declare
arr[3]="four"                # Append/set by index
arr+=("five")                # Append

echo "${arr[0]}"             # Access element: one
echo "${arr[@]}"             # All elements
echo "${!arr[@]}"            # All indices
echo "${#arr[@]}"            # Length: 5
echo "${arr[@]:1:2}"         # Slice (offset:length): two three

unset 'arr[2]'               # Delete element
```

### Associative Arrays

```bash
declare -A map
map[name]="Alice"
map[age]=30

echo "${map[name]}"          # Access: Alice
echo "${!map[@]}"            # All keys
echo "${map[@]}"             # All values
```

### Iteration

```bash
for val in "${arr[@]}"; do echo "$val"; done
for key in "${!map[@]}"; do echo "$key=${map[$key]}"; done
```

---

## Conditionals

### if / elif / else

```bash
if [[ "$a" == "yes" ]]; then
    echo "yes"
elif [[ "$a" == "no" ]]; then
    echo "no"
else
    echo "unknown"
fi
```

### String Comparisons

| Operator | Meaning |
|---|---|
| `=` or `==` | Equal |
| `!=` | Not equal |
| `-z "$str"` | String is empty |
| `-n "$str"` | String is non-empty |
| `<` | Less than (lexicographic, use inside `[[ ]]`) |
| `>` | Greater than (lexicographic, use inside `[[ ]]`) |
| `=~` | Regex match (inside `[[ ]]` only) |

### Integer Comparisons

| Operator | Meaning |
|---|---|
| `-eq` | Equal |
| `-ne` | Not equal |
| `-lt` | Less than |
| `-le` | Less than or equal |
| `-gt` | Greater than |
| `-ge` | Greater than or equal |

### File Tests

| Operator | Meaning |
|---|---|
| `-f file` | Is regular file |
| `-d file` | Is directory |
| `-e file` | Exists |
| `-r file` | Is readable |
| `-w file` | Is writable |
| `-x file` | Is executable |
| `-s file` | Exists and is non-empty |
| `-L file` | Is symbolic link |

### Logical Operators

```bash
[[ "$a" && "$b" ]]          # AND
[[ "$a" || "$b" ]]          # OR
[[ ! "$a" ]]                # NOT
```

### case / esac

```bash
case "$input" in
    start)   echo "Starting";;
    stop)    echo "Stopping";;
    restart) echo "Restarting";;
    *)       echo "Unknown: $input";;
esac
```

---

## Loops

```bash
# For-in
for item in a b c; do echo "$item"; done

# C-style for
for ((i = 0; i < 5; i++)); do echo "$i"; done

# While
while [[ "$count" -lt 10 ]]; do
    ((count++))
done

# Until (runs while condition is false)
until [[ "$count" -ge 10 ]]; do
    ((count++))
done

# Infinite loop
while true; do echo "forever"; sleep 1; done

# Iterate over files
for f in *.txt; do echo "$f"; done

# Iterate over lines of a file
while IFS= read -r line; do
    echo "$line"
done < file.txt

# break / continue
for i in {1..10}; do
    [[ "$i" -eq 5 ]] && continue   # Skip 5
    [[ "$i" -eq 8 ]] && break      # Stop at 8
    echo "$i"
done
```

---

## Functions

```bash
greet() {
    local name="$1"            # Local variable
    echo "Hello, $name"
}
greet "Alice"                  # Call: Hello, Alice

# Arguments
demo() {
    echo "Func name: $0"       # Script name (not function name)
    echo "First arg: $1"
    echo "All args: $@"
    echo "Arg count: $#"
}

# Return values (0-255 exit code; use stdout for data)
add() {
    echo $(( $1 + $2 ))
}
result=$(add 3 4)              # Capture: 7

# Passing arrays
process_arr() {
    local -a items=("$@")
    for item in "${items[@]}"; do echo "$item"; done
}
my_arr=(x y z)
process_arr "${my_arr[@]}"
```

---

## Input / Output

```bash
echo "Hello"                   # Print with newline
echo -n "No newline"           # Suppress newline
echo -e "Tab:\tNew line:\n"    # Interpret escapes

# printf (formatted output)
printf "Name: %s, Age: %d\n" "Alice" 30
printf "%05d\n" 42             # Zero-padded: 00042
printf "%.2f\n" 3.14159        # Two decimals: 3.14

# Read input
read -p "Enter name: " name
read -s -p "Password: " pass   # Silent input
read -t 5 -p "Quick: " ans     # 5-second timeout
read -a arr <<< "a b c"        # Read into array

# Here document
cat <<EOF
Hello, $name
Today is $(date)
EOF

# Here document (no expansion)
cat <<'EOF'
Literal $name and $(date)
EOF

# Here string
grep "pattern" <<< "$var"
```

---

## Arithmetic

```bash
echo $(( 5 + 3 ))             # 8
echo $(( 10 % 3 ))            # 1 (modulo)
echo $(( 2 ** 10 ))           # 1024 (exponent)

x=5
(( x += 3 ))                  # x is now 8
(( x++ ))                     # x is now 9

let "y = 10 / 3"              # Integer division: 3

# Floating point with bc
echo "scale=2; 10 / 3" | bc   # 3.33
```

---

## Special Variables

| Variable | Description |
|---|---|
| `$0` | Script name / path |
| `$1` - `$9` | Positional arguments |
| `${10}` | 10th+ argument (braces required) |
| `$#` | Number of arguments |
| `$@` | All arguments (individually quoted) |
| `$*` | All arguments (as single string) |
| `$?` | Exit status of last command |
| `$$` | PID of current script |
| `$!` | PID of last background command |
| `$_` | Last argument of previous command |
| `$RANDOM` | Random integer 0-32767 |
| `$LINENO` | Current line number |
| `$SECONDS` | Seconds since script started |

---

## Process & Job Control

```bash
# Background execution
long_task &                    # Run in background
pid=$!                         # Capture its PID
wait "$pid"                    # Wait for it to finish
wait                           # Wait for all background jobs

# Subshells
(cd /tmp && ls)                # Runs in subshell; cwd unchanged after

# Command substitution
now=$(date +%Y-%m-%d)

# Trap & signal handling
cleanup() { rm -f "$tmpfile"; }
trap cleanup EXIT              # Run on script exit
trap cleanup SIGINT SIGTERM    # Run on Ctrl-C or kill

# Common signals: EXIT, ERR, SIGINT, SIGTERM, SIGHUP
```

---

## Useful Patterns

### Check If Command Exists

```bash
command_exists() { command -v "$1" &>/dev/null; }
if command_exists git; then echo "git is installed"; fi
```

### Parse CLI Arguments with getopts

```bash
while getopts ":v:o:h" opt; do
    case "$opt" in
        v) verbose="$OPTARG";;
        o) output="$OPTARG";;
        h) echo "Usage: $0 [-v level] [-o file] [-h]"; exit 0;;
        :) echo "Option -$OPTARG requires an argument" >&2; exit 1;;
        \?) echo "Invalid option: -$OPTARG" >&2; exit 1;;
    esac
done
shift $((OPTIND - 1))         # Remaining args in $@
```

### Logging Function

```bash
log() {
    local level="$1"; shift
    printf "[%s] [%s] %s\n" "$(date '+%Y-%m-%d %H:%M:%S')" "$level" "$*" >&2
}
log INFO "Script started"
log ERROR "Something failed"
```

### Error Handling with trap

```bash
set -euo pipefail
on_error() {
    echo "Error on line $1, exit code $2" >&2
}
trap 'on_error $LINENO $?' ERR
```

### Temp Files with mktemp

```bash
tmpfile=$(mktemp)              # Create temp file
tmpdir=$(mktemp -d)            # Create temp directory
trap 'rm -rf "$tmpfile" "$tmpdir"' EXIT
```

### Progress Indicator

```bash
spinner() {
    local chars='|/-\'
    while :; do
        for (( i=0; i<${#chars}; i++ )); do
            printf "\r%s" "${chars:$i:1}"
            sleep 0.1
        done
    done
}
spinner &
SPIN_PID=$!
# ... do work ...
kill "$SPIN_PID" 2>/dev/null
printf "\rDone.\n"
```

### Parallel Execution

```bash
pids=()
for url in "${urls[@]}"; do
    curl -sO "$url" &
    pids+=($!)
done
for pid in "${pids[@]}"; do wait "$pid"; done
echo "All downloads complete"
```
