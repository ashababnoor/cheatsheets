# Git Commands Cheatsheet

This cheatsheet provides a list of useful Git commands for both beginners and advanced users.

## Setup and Config

| Command | Description |
|---------|-------------|
| `git config --global user.name "<name>"` | Set the name that will be attached to your commits |
| `git config --global user.email "<email>"` | Set the email that will be attached to your commits |

## Getting and Creating Projects

| Command | Description |
|---------|-------------|
| `git init` | Initialize a new local Git repository |
| `git clone <url>` | Download a project and its entire version history |

## Basic Snapshotting

| Command | Description |
|---------|-------------|
| `git status` | Show modified files in working directory |
| `git add <file>` | Add a file to staging area |
| `git commit -m "<message>"` | Commit your staged content as a new commit snapshot |

## Branching and Merging

| Command | Description |
|---------|-------------|
| `git branch` | List your branches |
| `git branch -a` | List all branches (local and remote) |
| `git branch <name>` | Create a new branch |
| `git branch -d <name>` | Delete a branch |
| `git checkout -b <name>` | Create a new branch and switch to it |
| `git checkout <name>` | Switch to an existing branch |
| `git merge <branch>` | Merge a branch into the active branch |

## Sharing and Updating Projects

| Command | Description |
|---------|-------------|
| `git push origin <branch>` | Push a branch to your remote repository |
| `git pull` | Update your local repository with the newest commits |

## Inspection and Comparison

| Command | Description |
|---------|-------------|
| `git log` | Show commit history |
| `git diff` | Show changes between commits, commit and working tree, etc |

## Advanced Commands

| Command | Description |
|---------|-------------|
| `git rebase <branch>` | Reapply commits on top of another base tip |
| `git stash` | Stash changes in a dirty working directory |
| `git cherry-pick <commit>` | Apply the changes introduced by some existing commits |
| `git revert <commit>` | Revert some existing commits |
| `git fetch` | Download objects and refs from another repository |
| `git tag <tag>` | Create, list, delete or verify a tag object signed with GPG |