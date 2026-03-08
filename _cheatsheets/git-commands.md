---
title: "Git Commands"
description: "Git command reference — branching, merging, rebasing, stashing, remotes, and common workflows."
category: "Tools & DevOps"
icon: "🔀"
---
# Git Commands Cheatsheet

## Setup & Config

| Command | Description |
|---------|-------------|
| `git config --global user.name "<name>"` | Set commit author name |
| `git config --global user.email "<email>"` | Set commit author email |
| `git config --global core.editor "<editor>"` | Set default text editor (e.g., `vim`, `code --wait`) |
| `git config --global init.defaultBranch main` | Set default branch name for new repos |
| `git config --global alias.<shortcut> "<command>"` | Create a command alias (e.g., `alias.co "checkout"`) |
| `git config --list` | List all configured settings |
| `git config --global --edit` | Open global config file in editor |

## Creating Repositories

| Command | Description |
|---------|-------------|
| `git init` | Initialize a new repository in the current directory |
| `git init <directory>` | Create a new repository in the specified directory |
| `git clone <url>` | Clone a repository and its full history |
| `git clone <url> <directory>` | Clone into a specific directory |
| `git clone -b <branch> <url>` | Clone a specific branch |
| `git clone --depth 1 <url>` | Shallow clone (latest commit only) |

## Basic Workflow

| Command | Description |
|---------|-------------|
| `git status` | Show working tree status |
| `git status -s` | Show status in short format |
| `git add <file>` | Stage a specific file |
| `git add .` | Stage all changes in current directory |
| `git add -p` | Interactively stage hunks of changes |
| `git commit -m "<message>"` | Commit staged changes with a message |
| `git commit -am "<message>"` | Stage tracked files and commit in one step |
| `git commit --amend` | Modify the last commit (message or contents) |
| `git diff` | Show unstaged changes vs working tree |
| `git diff --staged` | Show staged changes vs last commit |
| `git diff <branch1> <branch2>` | Show diff between two branches |

## Branching & Merging

| Command | Description |
|---------|-------------|
| `git branch` | List local branches |
| `git branch -a` | List all branches (local and remote) |
| `git branch <name>` | Create a new branch |
| `git branch -d <name>` | Delete a branch (safe, checks merge status) |
| `git branch -D <name>` | Force delete a branch |
| `git branch -m <old> <new>` | Rename a branch |
| `git checkout <branch>` | Switch to a branch |
| `git checkout -b <branch>` | Create and switch to a new branch |
| `git switch <branch>` | Switch to a branch (modern alternative) |
| `git switch -c <branch>` | Create and switch to a new branch |
| `git merge <branch>` | Merge a branch into the current branch |
| `git merge --no-ff <branch>` | Merge with a merge commit (no fast-forward) |
| `git merge --abort` | Abort a merge in progress |
| `git rebase <branch>` | Reapply commits on top of another branch |
| `git rebase -i <commit>` | Interactive rebase from a commit |
| `git rebase --abort` | Abort a rebase in progress |
| `git cherry-pick <commit>` | Apply a specific commit to the current branch |
| `git cherry-pick <c1> <c2>` | Apply multiple specific commits |

## Remote Repositories

| Command | Description |
|---------|-------------|
| `git remote -v` | List remote connections with URLs |
| `git remote add <name> <url>` | Add a new remote |
| `git remote remove <name>` | Remove a remote |
| `git remote rename <old> <new>` | Rename a remote |
| `git fetch <remote>` | Download objects/refs from a remote |
| `git fetch --all` | Fetch from all remotes |
| `git fetch --prune` | Fetch and remove deleted remote branches |
| `git pull` | Fetch and merge from tracking branch |
| `git pull --rebase` | Fetch and rebase instead of merge |
| `git push <remote> <branch>` | Push branch to a remote |
| `git push -u <remote> <branch>` | Push and set upstream tracking branch |
| `git push --all` | Push all local branches |
| `git push <remote> --delete <branch>` | Delete a remote branch |
| `git branch -vv` | List local branches with tracking info |

## Stashing

| Command | Description |
|---------|-------------|
| `git stash` | Stash uncommitted changes |
| `git stash -m "<message>"` | Stash with a description |
| `git stash -u` | Stash including untracked files |
| `git stash list` | List all stashes |
| `git stash pop` | Apply most recent stash and remove it |
| `git stash pop stash@{n}` | Apply a specific stash and remove it |
| `git stash apply` | Apply most recent stash, keep it in list |
| `git stash apply stash@{n}` | Apply a specific stash, keep it in list |
| `git stash drop stash@{n}` | Remove a specific stash |
| `git stash clear` | Remove all stashes |
| `git stash show -p stash@{n}` | Show the diff of a stash |

## Inspection & History

| Command | Description |
|---------|-------------|
| `git log` | Show commit history |
| `git log --oneline` | Show history in compact format |
| `git log --oneline --graph --all` | Show branch graph of all branches |
| `git log -n <number>` | Show last n commits |
| `git log --author="<name>"` | Filter commits by author |
| `git log --since="2 weeks ago"` | Filter commits by date |
| `git log -p <file>` | Show commit history with diffs for a file |
| `git log --stat` | Show commit history with file change stats |
| `git show <commit>` | Show details and diff of a specific commit |
| `git show <commit>:<file>` | Show a file at a specific commit |
| `git blame <file>` | Show who last modified each line of a file |
| `git blame -L <start>,<end> <file>` | Blame a specific line range |
| `git reflog` | Show log of all reference updates (local) |
| `git shortlog -sn` | Summarize commit count by author |

## Undoing Changes

| Command | Description |
|---------|-------------|
| `git restore <file>` | Discard working directory changes |
| `git restore --staged <file>` | Unstage a file (keep working changes) |
| `git checkout -- <file>` | Discard changes (pre-2.23 alternative) |
| `git reset --soft HEAD~1` | Undo last commit, keep changes staged |
| `git reset --mixed HEAD~1` | Undo last commit, unstage changes (default) |
| `git reset --hard HEAD~1` | Undo last commit, discard all changes |
| `git reset --hard <commit>` | Reset branch to a specific commit |
| `git revert <commit>` | Create a new commit that undoes a commit |
| `git revert --no-commit <commit>` | Revert changes without auto-committing |
| `git clean -n` | Dry run: show untracked files to be removed |
| `git clean -fd` | Remove untracked files and directories |

## Tags

| Command | Description |
|---------|-------------|
| `git tag` | List all tags |
| `git tag <name>` | Create a lightweight tag |
| `git tag -a <name> -m "<message>"` | Create an annotated tag |
| `git tag -a <name> <commit>` | Tag a specific commit |
| `git tag -l "<pattern>"` | List tags matching a pattern (e.g., `"v1.*"`) |
| `git tag -d <name>` | Delete a local tag |
| `git push <remote> <tag>` | Push a specific tag to remote |
| `git push <remote> --tags` | Push all tags to remote |
| `git push <remote> --delete <tag>` | Delete a remote tag |

## Advanced

| Command | Description |
|---------|-------------|
| `git bisect start` | Start binary search for a bad commit |
| `git bisect bad` | Mark current commit as bad |
| `git bisect good <commit>` | Mark a commit as good |
| `git bisect reset` | End bisect session |
| `git worktree add <path> <branch>` | Create a linked working tree for a branch |
| `git worktree list` | List all working trees |
| `git worktree remove <path>` | Remove a working tree |
| `git submodule add <url> <path>` | Add a submodule |
| `git submodule update --init --recursive` | Initialize and update all submodules |
| `git submodule status` | Show status of submodules |
| `git archive --format=tar HEAD` | Create a tar archive of HEAD |
| `git archive --format=zip -o out.zip HEAD` | Create a zip archive of HEAD |
| `git grep "<pattern>"` | Search tracked files for a pattern |
| `git grep -n "<pattern>"` | Search with line numbers |
