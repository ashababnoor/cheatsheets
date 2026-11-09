---
title: "Linux Terminal Commands"
description: "Essential Linux terminal commands — file management, permissions, processes, networking, and system administration."
category: "Tools & DevOps"
logo: "linux"
---
# Linux Terminal Commands Cheatsheet

A comprehensive reference for essential Linux terminal commands organized by category.

## File & Directory Operations

| Command | Description | Example |
|---------|-------------|---------|
| `ls` | List directory contents | `ls` |
| `ls -l` | Long format with permissions, size, date | `ls -l /var/log` |
| `ls -la` | Include hidden files in long format | `ls -la ~` |
| `ls -lh` | Human-readable file sizes | `ls -lh *.tar.gz` |
| `ls -lS` | Sort by file size (largest first) | `ls -lS /tmp` |
| `ls -lt` | Sort by modification time (newest first) | `ls -lt` |
| `ls -R` | List recursively into subdirectories | `ls -R src/` |
| `cd <dir>` | Change directory | `cd /etc/nginx` |
| `cd ..` | Go up one directory | `cd ../..` |
| `cd ~` or `cd` | Go to home directory | `cd ~` |
| `cd -` | Go to previous directory | `cd -` |
| `pwd` | Print current working directory | `pwd` |
| `mkdir <dir>` | Create a directory | `mkdir projects` |
| `mkdir -p <path>` | Create nested directories | `mkdir -p a/b/c` |
| `rmdir <dir>` | Remove an empty directory | `rmdir old_folder` |
| `rm <file>` | Remove a file | `rm temp.txt` |
| `rm -r <dir>` | Remove directory and contents recursively | `rm -r build/` |
| `rm -rf <dir>` | Force remove without prompts | `rm -rf node_modules/` |
| `rm -i <file>` | Prompt before each removal | `rm -i *.log` |
| `cp <src> <dst>` | Copy a file | `cp config.yml config.bak` |
| `cp -r <src> <dst>` | Copy directory recursively | `cp -r src/ src_backup/` |
| `cp -i <src> <dst>` | Prompt before overwrite | `cp -i a.txt b.txt` |
| `mv <src> <dst>` | Move or rename a file/directory | `mv old.txt new.txt` |
| `touch <file>` | Create empty file or update timestamp | `touch index.html` |
| `ln -s <target> <link>` | Create a symbolic link | `ln -s /usr/bin/python3 /usr/bin/python` |
| `ln <target> <link>` | Create a hard link | `ln file.txt hardlink.txt` |
| `find <path> <expr>` | Search for files in a directory tree | `find / -name "*.conf"` |
| `find <path> -type f` | Find only files | `find . -type f -name "*.js"` |
| `find <path> -type d` | Find only directories | `find . -type d -name node_modules` |
| `find <path> -mtime -N` | Find files modified in last N days | `find . -mtime -7` |
| `find <path> -size +N` | Find files larger than N | `find / -size +100M` |
| `find <path> -exec` | Execute command on results | `find . -name "*.tmp" -exec rm {} \;` |
| `locate <pattern>` | Find files by name (uses database) | `locate nginx.conf` |
| `tree` | Display directory structure as a tree | `tree -L 2` |
| `tree -a` | Include hidden files in tree | `tree -a -I .git` |

## File Viewing & Editing

| Command | Description | Example |
|---------|-------------|---------|
| `cat <file>` | Display entire file contents | `cat /etc/hosts` |
| `cat -n <file>` | Display with line numbers | `cat -n script.sh` |
| `less <file>` | View file with scrollable pager | `less /var/log/syslog` |
| `more <file>` | View file page by page (forward only) | `more largefile.txt` |
| `head <file>` | Display first 10 lines | `head README.md` |
| `head -n N <file>` | Display first N lines | `head -n 20 data.csv` |
| `tail <file>` | Display last 10 lines | `tail error.log` |
| `tail -n N <file>` | Display last N lines | `tail -n 50 app.log` |
| `tail -f <file>` | Follow file in real time | `tail -f /var/log/syslog` |
| `nano <file>` | Open file in nano editor | `nano ~/.bashrc` |
| `vi <file>` | Open file in vi editor | `vi config.yml` |
| `vim <file>` | Open file in vim editor | `vim server.py` |
| `wc <file>` | Count lines, words, and bytes | `wc essay.txt` |
| `wc -l <file>` | Count lines only | `wc -l *.py` |
| `sort <file>` | Sort lines alphabetically | `sort names.txt` |
| `sort -n <file>` | Sort numerically | `sort -n scores.txt` |
| `sort -r <file>` | Sort in reverse order | `sort -rn scores.txt` |
| `sort -u <file>` | Sort and remove duplicates | `sort -u emails.txt` |
| `sort -k N <file>` | Sort by Nth field | `sort -k 2 data.txt` |
| `uniq` | Remove adjacent duplicate lines | `sort names.txt \| uniq` |
| `uniq -c` | Count occurrences of each line | `sort access.log \| uniq -c` |
| `uniq -d` | Show only duplicated lines | `sort list.txt \| uniq -d` |
| `cut -d'X' -fN` | Extract fields by delimiter | `cut -d',' -f1,3 data.csv` |
| `cut -cN-M` | Extract characters by position | `cut -c1-10 file.txt` |
| `paste <f1> <f2>` | Merge lines from multiple files | `paste names.txt ages.txt` |
| `paste -d',' <f1> <f2>` | Merge with custom delimiter | `paste -d',' col1.txt col2.txt` |
| `tr 'a' 'b'` | Translate/replace characters | `echo "hello" \| tr 'a-z' 'A-Z'` |
| `tr -d 'X'` | Delete characters | `echo "a1b2c3" \| tr -d '0-9'` |
| `tr -s ' '` | Squeeze repeated characters | `echo "a  b" \| tr -s ' '` |

### Vi/Vim Quick Reference

| Key | Description |
|-----|-------------|
| `i` | Enter insert mode |
| `Esc` | Return to normal mode |
| `:w` | Save file |
| `:q` | Quit |
| `:wq` or `ZZ` | Save and quit |
| `:q!` | Quit without saving |
| `dd` | Delete current line |
| `yy` | Yank (copy) current line |
| `p` | Paste after cursor |
| `/pattern` | Search forward |
| `n` / `N` | Next / previous search result |
| `u` | Undo |
| `Ctrl+r` | Redo |
| `gg` / `G` | Go to first / last line |
| `:set number` | Show line numbers |

## File Permissions & Ownership

### Understanding Permission Notation

| Numeric | Symbolic | Permission |
|---------|----------|------------|
| `0` | `---` | No permission |
| `1` | `--x` | Execute only |
| `2` | `-w-` | Write only |
| `4` | `r--` | Read only |
| `5` | `r-x` | Read + execute |
| `6` | `rw-` | Read + write |
| `7` | `rwx` | Read + write + execute |

### Permission Commands

| Command | Description | Example |
|---------|-------------|---------|
| `chmod 755 <file>` | Set rwxr-xr-x (numeric) | `chmod 755 deploy.sh` |
| `chmod 644 <file>` | Set rw-r--r-- (numeric) | `chmod 644 index.html` |
| `chmod u+x <file>` | Add execute for owner (symbolic) | `chmod u+x script.sh` |
| `chmod g-w <file>` | Remove write for group | `chmod g-w shared.txt` |
| `chmod o-rwx <file>` | Remove all for others | `chmod o-rwx secret.key` |
| `chmod a+r <file>` | Add read for all | `chmod a+r public.txt` |
| `chmod -R 755 <dir>` | Apply recursively to directory | `chmod -R 755 /var/www` |
| `chown <user> <file>` | Change file owner | `chown alice report.txt` |
| `chown <user>:<group> <file>` | Change owner and group | `chown www-data:www-data site/` |
| `chown -R <user> <dir>` | Change owner recursively | `chown -R deploy /opt/app` |
| `chgrp <group> <file>` | Change group ownership | `chgrp developers project/` |
| `umask` | Display current umask value | `umask` |
| `umask <value>` | Set default permission mask | `umask 022` |

## Searching & Filtering

| Command | Description | Example |
|---------|-------------|---------|
| `grep <pattern> <file>` | Search for pattern in file | `grep "error" app.log` |
| `grep -i <pattern> <file>` | Case-insensitive search | `grep -i "warning" log.txt` |
| `grep -r <pattern> <dir>` | Search recursively in directory | `grep -r "TODO" src/` |
| `grep -n <pattern> <file>` | Show line numbers with matches | `grep -n "def " app.py` |
| `grep -c <pattern> <file>` | Count matching lines | `grep -c "404" access.log` |
| `grep -l <pattern> <dir>/*` | List files containing pattern | `grep -rl "API_KEY" config/` |
| `grep -v <pattern> <file>` | Invert match (exclude pattern) | `grep -v "^#" config.ini` |
| `grep -E <regex> <file>` | Extended regex (same as `egrep`) | `grep -E "err(or\|no)" log.txt` |
| `grep -w <word> <file>` | Match whole words only | `grep -w "main" code.c` |
| `grep -A N <pattern>` | Show N lines after match | `grep -A 3 "Exception" app.log` |
| `grep -B N <pattern>` | Show N lines before match | `grep -B 2 "FATAL" app.log` |
| `which <cmd>` | Show path of a command binary | `which python` |
| `whereis <cmd>` | Locate binary, source, and man page | `whereis gcc` |
| `awk '{print $N}'` | Print Nth field (space-delimited) | `ls -l \| awk '{print $5, $9}'` |
| `awk -F'X' '{print $N}'` | Print field with custom delimiter | `awk -F':' '{print $1}' /etc/passwd` |
| `awk '/pattern/'` | Filter lines matching pattern | `awk '/error/' app.log` |
| `awk '{sum+=$1} END {print sum}'` | Sum values in a column | `awk '{sum+=$1} END {print sum}' nums.txt` |
| `sed 's/old/new/' <file>` | Replace first occurrence per line | `sed 's/http/https/' urls.txt` |
| `sed 's/old/new/g' <file>` | Replace all occurrences | `sed 's/foo/bar/g' data.txt` |
| `sed -i 's/old/new/g' <file>` | Edit file in place | `sed -i 's/v1/v2/g' config.yml` |
| `sed 'Nd' <file>` | Delete line N | `sed '1d' data.csv` |
| `sed '/pattern/d' <file>` | Delete lines matching pattern | `sed '/^$/d' file.txt` |
| `xargs <cmd>` | Build commands from stdin | `find . -name "*.log" \| xargs rm` |
| `xargs -I{} <cmd>` | Use placeholder for each input | `cat urls.txt \| xargs -I{} curl {}` |
| `xargs -P N <cmd>` | Run N processes in parallel | `find . -name "*.png" \| xargs -P 4 optipng` |

## Process Management

| Command | Description | Example |
|---------|-------------|---------|
| `ps` | Show current shell processes | `ps` |
| `ps aux` | Show all running processes | `ps aux` |
| `ps aux \| grep <name>` | Find a specific process | `ps aux \| grep nginx` |
| `ps -ef` | Full-format listing of all processes | `ps -ef --forest` |
| `top` | Real-time process monitor | `top` |
| `htop` | Interactive process viewer (enhanced) | `htop` |
| `kill <pid>` | Send SIGTERM to a process | `kill 1234` |
| `kill -9 <pid>` | Force kill a process (SIGKILL) | `kill -9 1234` |
| `kill -HUP <pid>` | Send SIGHUP (reload config) | `kill -HUP $(cat nginx.pid)` |
| `killall <name>` | Kill all processes by name | `killall firefox` |
| `pkill <pattern>` | Kill processes matching pattern | `pkill -f "python server"` |
| `Ctrl+Z` | Suspend current foreground process | |
| `bg` | Resume suspended process in background | `bg` |
| `bg %N` | Resume job N in background | `bg %2` |
| `fg` | Bring background process to foreground | `fg` |
| `fg %N` | Bring job N to foreground | `fg %1` |
| `jobs` | List background/suspended jobs | `jobs -l` |
| `<cmd> &` | Run command in background | `./build.sh &` |
| `nohup <cmd> &` | Run command immune to hangups | `nohup python server.py &` |
| `nice -n N <cmd>` | Start process with priority (N: -20 to 19) | `nice -n 10 make -j4` |
| `renice N -p <pid>` | Change priority of running process | `renice 5 -p 1234` |
| `wait` | Wait for all background jobs to finish | `wait` |
| `wait <pid>` | Wait for specific process | `wait 1234` |

## System Information

| Command | Description | Example |
|---------|-------------|---------|
| `uname -a` | Print all system information | `uname -a` |
| `uname -r` | Print kernel release version | `uname -r` |
| `hostname` | Show or set system hostname | `hostname` |
| `uptime` | Show how long the system has been running | `uptime` |
| `whoami` | Print current username | `whoami` |
| `id` | Print user and group IDs | `id` |
| `id <user>` | Print IDs for a specific user | `id www-data` |
| `df -h` | Disk space usage (human-readable) | `df -h` |
| `df -i` | Show inode usage | `df -i` |
| `du -sh <path>` | Disk usage of a directory (summary) | `du -sh /var/log` |
| `du -h --max-depth=1` | Disk usage one level deep | `du -h --max-depth=1 /home` |
| `du -ah <path>` | Disk usage of all files | `du -ah /opt/app` |
| `free -h` | Memory usage (human-readable) | `free -h` |
| `free -m` | Memory usage in megabytes | `free -m` |
| `lscpu` | Display CPU architecture info | `lscpu` |
| `lsblk` | List block devices (disks, partitions) | `lsblk` |
| `mount` | Show mounted filesystems | `mount \| grep ext4` |
| `mount <dev> <dir>` | Mount a filesystem | `mount /dev/sdb1 /mnt/usb` |
| `umount <dir>` | Unmount a filesystem | `umount /mnt/usb` |
| `dmesg` | Print kernel ring buffer messages | `dmesg \| tail -20` |
| `lsof` | List open files | `lsof -i :8080` |
| `env` | Print environment variables | `env \| grep PATH` |
| `date` | Display current date and time | `date "+%Y-%m-%d %H:%M"` |

## Networking

| Command | Description | Example |
|---------|-------------|---------|
| `ping <host>` | Send ICMP echo requests | `ping -c 4 google.com` |
| `ping -c N <host>` | Send N pings then stop | `ping -c 3 192.168.1.1` |
| `curl <url>` | Transfer data from a URL | `curl https://api.example.com` |
| `curl -o <file> <url>` | Download to a file | `curl -o page.html https://example.com` |
| `curl -I <url>` | Fetch headers only | `curl -I https://example.com` |
| `curl -X POST -d '<data>'` | Send POST request | `curl -X POST -d '{"key":"val"}' url` |
| `curl -s <url>` | Silent mode (no progress) | `curl -s https://api.example.com` |
| `wget <url>` | Download a file | `wget https://example.com/file.zip` |
| `wget -c <url>` | Resume interrupted download | `wget -c https://example.com/big.iso` |
| `wget -r <url>` | Download recursively | `wget -r -l 2 https://example.com` |
| `ssh <user>@<host>` | Remote login via SSH | `ssh deploy@10.0.0.5` |
| `ssh -p <port> <user>@<host>` | SSH on custom port | `ssh -p 2222 user@host` |
| `ssh -i <key> <user>@<host>` | SSH with identity file | `ssh -i ~/.ssh/id_rsa user@host` |
| `scp <src> <user>@<host>:<dst>` | Copy file to remote host | `scp app.tar.gz user@server:/tmp/` |
| `scp <user>@<host>:<src> <dst>` | Copy file from remote host | `scp user@server:/var/log/app.log .` |
| `scp -r <dir> <user>@<host>:<dst>` | Copy directory recursively | `scp -r dist/ user@server:/var/www/` |
| `rsync -avz <src> <dst>` | Sync files efficiently | `rsync -avz ./site/ server:/var/www/` |
| `rsync --delete <src> <dst>` | Sync and delete extraneous files | `rsync -avz --delete src/ dst/` |
| `rsync --dry-run` | Preview changes without applying | `rsync -avzn src/ dst/` |
| `ss -tlnp` | Show listening TCP sockets | `ss -tlnp` |
| `ss -ulnp` | Show listening UDP sockets | `ss -ulnp` |
| `netstat -tlnp` | Show listening ports (legacy) | `netstat -tlnp` |
| `ip addr` | Show IP addresses | `ip addr show eth0` |
| `ip route` | Show routing table | `ip route` |
| `ifconfig` | Show network interfaces (legacy) | `ifconfig eth0` |
| `dig <domain>` | DNS lookup | `dig example.com` |
| `dig +short <domain>` | Short DNS answer | `dig +short example.com` |
| `nslookup <domain>` | Query DNS name servers | `nslookup example.com` |
| `traceroute <host>` | Trace route to host | `traceroute google.com` |
| `host <domain>` | Simple DNS lookup | `host example.com` |

## Compression & Archives

| Command | Description | Example |
|---------|-------------|---------|
| `tar -cf <archive> <files>` | Create tar archive | `tar -cf backup.tar /etc/` |
| `tar -czf <archive> <files>` | Create gzip-compressed tar | `tar -czf app.tar.gz src/` |
| `tar -cjf <archive> <files>` | Create bzip2-compressed tar | `tar -cjf data.tar.bz2 data/` |
| `tar -cJf <archive> <files>` | Create xz-compressed tar | `tar -cJf logs.tar.xz /var/log/` |
| `tar -xf <archive>` | Extract tar archive | `tar -xf backup.tar` |
| `tar -xzf <archive>` | Extract gzip-compressed tar | `tar -xzf app.tar.gz` |
| `tar -xjf <archive>` | Extract bzip2-compressed tar | `tar -xjf data.tar.bz2` |
| `tar -xJf <archive>` | Extract xz-compressed tar | `tar -xJf logs.tar.xz` |
| `tar -xf <archive> -C <dir>` | Extract to specific directory | `tar -xzf app.tar.gz -C /opt/` |
| `tar -tf <archive>` | List archive contents | `tar -tzf app.tar.gz` |
| `gzip <file>` | Compress file (replaces original) | `gzip access.log` |
| `gunzip <file.gz>` | Decompress gzip file | `gunzip access.log.gz` |
| `gzip -k <file>` | Compress and keep original | `gzip -k data.csv` |
| `zip <archive> <files>` | Create zip archive | `zip bundle.zip *.txt` |
| `zip -r <archive> <dir>` | Zip a directory recursively | `zip -r project.zip src/` |
| `unzip <archive>` | Extract zip archive | `unzip bundle.zip` |
| `unzip -l <archive>` | List zip contents | `unzip -l project.zip` |
| `unzip <archive> -d <dir>` | Extract to specific directory | `unzip project.zip -d /tmp/` |
| `bzip2 <file>` | Compress with bzip2 | `bzip2 database.sql` |
| `bunzip2 <file.bz2>` | Decompress bzip2 | `bunzip2 database.sql.bz2` |
| `xz <file>` | Compress with xz (best ratio) | `xz largefile.bin` |
| `unxz <file.xz>` | Decompress xz | `unxz largefile.bin.xz` |

## User Management

| Command | Description | Example |
|---------|-------------|---------|
| `useradd <user>` | Create a new user | `useradd -m alice` |
| `useradd -m -s /bin/bash <user>` | Create user with home dir and shell | `useradd -m -s /bin/bash bob` |
| `userdel <user>` | Delete a user | `userdel alice` |
| `userdel -r <user>` | Delete user and home directory | `userdel -r alice` |
| `usermod -aG <group> <user>` | Add user to a group | `usermod -aG docker alice` |
| `usermod -s <shell> <user>` | Change user's login shell | `usermod -s /bin/zsh bob` |
| `passwd` | Change current user's password | `passwd` |
| `passwd <user>` | Change another user's password | `passwd alice` |
| `groups` | Show groups for current user | `groups` |
| `groups <user>` | Show groups for a user | `groups alice` |
| `su <user>` | Switch to another user | `su alice` |
| `su -` | Switch to root with root environment | `su -` |
| `sudo <cmd>` | Execute command as superuser | `sudo systemctl restart nginx` |
| `sudo -u <user> <cmd>` | Execute command as another user | `sudo -u postgres psql` |
| `visudo` | Safely edit sudoers file | `sudo visudo` |

## Package Management

### Debian/Ubuntu (`apt`)

| Command | Description |
|---------|-------------|
| `apt update` | Update package index |
| `apt upgrade` | Upgrade all installed packages |
| `apt install <pkg>` | Install a package |
| `apt remove <pkg>` | Remove a package |
| `apt purge <pkg>` | Remove package and config files |
| `apt autoremove` | Remove unused dependencies |
| `apt search <query>` | Search for packages |
| `apt show <pkg>` | Show package details |
| `apt list --installed` | List installed packages |

### RHEL/CentOS/Fedora (`yum`/`dnf`)

| Command | Description |
|---------|-------------|
| `dnf check-update` | Check for available updates |
| `dnf upgrade` | Upgrade all installed packages |
| `dnf install <pkg>` | Install a package |
| `dnf remove <pkg>` | Remove a package |
| `dnf search <query>` | Search for packages |
| `dnf info <pkg>` | Show package info |
| `dnf list installed` | List installed packages |
| `yum install <pkg>` | Install (older RHEL/CentOS) |

### macOS (Homebrew)

| Command | Description |
|---------|-------------|
| `brew update` | Update Homebrew itself |
| `brew upgrade` | Upgrade all installed packages |
| `brew install <pkg>` | Install a formula |
| `brew uninstall <pkg>` | Uninstall a formula |
| `brew search <query>` | Search for packages |
| `brew list` | List installed packages |
| `brew info <pkg>` | Show package info |
| `brew doctor` | Check system for issues |

## I/O Redirection & Pipes

| Operator | Description | Example |
|----------|-------------|---------|
| `>` | Redirect stdout to file (overwrite) | `echo "hello" > file.txt` |
| `>>` | Redirect stdout to file (append) | `echo "world" >> file.txt` |
| `<` | Redirect file to stdin | `sort < unsorted.txt` |
| `2>` | Redirect stderr to file | `cmd 2> errors.log` |
| `2>>` | Append stderr to file | `cmd 2>> errors.log` |
| `2>&1` | Redirect stderr to stdout | `cmd > all.log 2>&1` |
| `&>` | Redirect both stdout and stderr | `cmd &> output.log` |
| `\|` | Pipe stdout to next command | `cat log.txt \| grep "error"` |
| `\| tee <file>` | Pipe and write to file simultaneously | `cmd \| tee output.log` |
| `\| tee -a <file>` | Pipe and append to file | `cmd \| tee -a output.log` |
| `<<EOF` | Here document (inline input) | `cat <<EOF > file.txt` |
| `/dev/null` | Discard output | `cmd > /dev/null 2>&1` |

## Shortcuts & Tips

### Keyboard Shortcuts

| Shortcut | Description |
|----------|-------------|
| `Ctrl+C` | Kill/interrupt current process |
| `Ctrl+Z` | Suspend current process |
| `Ctrl+D` | Exit current shell / send EOF |
| `Ctrl+R` | Reverse search command history |
| `Ctrl+L` | Clear the terminal screen |
| `Ctrl+A` | Move cursor to start of line |
| `Ctrl+E` | Move cursor to end of line |
| `Ctrl+U` | Delete from cursor to start of line |
| `Ctrl+K` | Delete from cursor to end of line |
| `Ctrl+W` | Delete word before cursor |
| `Alt+B` | Move back one word |
| `Alt+F` | Move forward one word |
| `Tab` | Autocomplete command or path |
| `Tab Tab` | Show all completions |
| `Up/Down` | Navigate command history |

### History & Aliases

| Command | Description | Example |
|---------|-------------|---------|
| `history` | Show command history | `history` |
| `history N` | Show last N commands | `history 20` |
| `!!` | Repeat last command | `sudo !!` |
| `!N` | Execute command number N from history | `!42` |
| `!<string>` | Execute last command starting with string | `!ssh` |
| `!$` | Last argument of previous command | `mkdir /tmp/test && cd !$` |
| `alias <name>='<cmd>'` | Create a command alias | `alias ll='ls -la'` |
| `alias` | List all defined aliases | `alias` |
| `unalias <name>` | Remove an alias | `unalias ll` |
| `type <cmd>` | Show how a command is resolved | `type ls` |
