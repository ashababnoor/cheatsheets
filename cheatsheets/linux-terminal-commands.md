# Linux Terminal Commands Cheatsheet

This cheatsheet provides a list of useful Linux terminal commands with examples.

## File Operations

| Command | Description | Example |
|---------|-------------|---------|
| `ls` | List directory contents | `ls -l` |
| `cd <directory>` | Change the current directory | `cd /home/user` |
| `pwd` | Print the current directory | `pwd` |
| `touch <file>` | Create a new file | `touch example.txt` |
| `cp <source> <destination>` | Copy files or directories | `cp source.txt dest.txt` |
| `mv <source> <destination>` | Move or rename files or directories | `mv old.txt new.txt` |
| `rm <file>` | Remove a file | `rm example.txt` |
| `rm -r <directory>` | Remove a directory and its contents | `rm -r example_directory` |

## Process Management

| Command | Description | Example |
|---------|-------------|---------|
| `ps` | Report a snapshot of current processes | `ps -aux` |
| `top` | Display Linux processes | `top` |
| `kill <pid>` | Send a signal to a process | `kill 1234` |
| `bg` | Put a process in the background | `bg` |
| `fg` | Put a process in the foreground | `fg` |

## File Permissions

| Command | Description | Example |
|---------|-------------|---------|
| `chmod <permissions> <file>` | Change the permissions of a file | `chmod 755 example.txt` |
| `chown <owner>:<group> <file>` | Change the owner and group of a file | `chown user:group example.txt` |

## Networking

| Command | Description | Example |
|---------|-------------|---------|
| `ping <host>` | Send ICMP ECHO_REQUEST to network hosts | `ping www.google.com` |
| `netstat` | Network statistics | `netstat -a` |
| `ssh <user>@<host>` | Secure shell remote login | `ssh user@192.168.1.1` |
| `scp <source> <destination>` | Secure copy | `scp source.txt user@192.168.1.1:/path` |

## System Information

| Command | Description | Example |
|---------|-------------|---------|
| `uname -a` | Print all system information | `uname -a` |
| `df` | Report file system disk space usage | `df -h` |
| `free` | Display amount of free and used memory in the system | `free -m` |

## Package Management

| Command | Description | Example |
|---------|-------------|---------|
| `apt-get update` | Update package lists for upgrades | `sudo apt-get update` |
| `apt-get upgrade` | Install the newest versions of all packages | `sudo apt-get upgrade` |
| `apt-get install <package>` | Install a new package | `sudo apt-get install vim` |
| `apt-get remove <package>` | Remove a package | `sudo apt-get remove vim` |

