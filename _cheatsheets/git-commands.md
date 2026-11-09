---
title: "Git Commands"
subtitle: "Commands for setup, branching, merging, remotes, stashing, and undoing changes."
description: "Git command reference — branching, merging, rebasing, stashing, remotes, and common workflows."
category: "Tools & DevOps"
logo: "git"
---

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

### Config levels

Settings are read from three files. The most specific one wins.

```plaintext
Level    Flag       File             Applies to
local    --local    .git/config      this repository (the default for git config)
global   --global   ~/.gitconfig     all your repositories
system   --system   /etc/gitconfig   every user on the machine

More specific wins: local overrides global, which overrides system.
```

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

### The three areas

Changes move between your files, the staging area (index), and the repository. Right arrows save work, left arrows copy it back.

```plaintext
  Working Directory               Staging Area                   Repository
          |                             |                             |
          |--------- git add ---------->|                             |
          |                             |                             |
          |                             |-------- git commit -------->|
          |                             |                             |
          |------ git commit -a --------+---------------------------->|
          |                             |                             |
          |                             |<-- git restore --staged ----|
          |                             |                             |
          |<------ git restore ---------|                             |
          |                             |                             |
          |<- git switch / checkout ----+-----------------------------|
          |                             |                             |

What git diff compares:

git diff            working directory  vs  staging area
git diff --staged   staging area       vs  last commit
git diff HEAD       working directory  vs  last commit
```

### File lifecycle

Every file is in one of four states, and `git status` tells you which.

```plaintext
Untracked ---- git add ---------------------------+
                                                  v
Unmodified -- edit --> Modified -- git add --> Staged
    ^                                             |
    +---------------- git commit -----------------+
```

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

### Branches and `HEAD`

A branch is just a movable label on a commit, and `HEAD` marks where you are. Committing while detached leaves commits no branch points to, so create a branch (`git switch -c <name>`) before you continue.

```plaintext
A---B---C          main
         \
          D---E    feature   <- HEAD

Attached (normal):         Detached (git checkout B):

A---B---C                  A---B---C
        ^                      ^
      HEAD                   HEAD
HEAD -> main (at C)        HEAD -> B, main still at C
```

### Fast-forward vs merge commit

`git merge` either moves the branch label forward or ties two histories together with a merge commit.

```plaintext
Fast-forward: main has nothing new, so its label just moves.

Before:
A---B          main
     \
      C---D    feature

After `git merge feature`:
A---B---C---D    main, feature

Diverged (or `--no-ff`): git creates a merge commit with two parents.

Before:
A---B---C      main
     \
      D---E    feature

After `git merge feature`:
A---B---C---M    main
     \     /
      D---E      feature   (M = merge commit)
```

### `git rebase`

Rebase replays your commits on top of another branch, giving a straight history. The replayed commits get new hashes, so do not rebase commits you have already shared.

```plaintext
Before (on feature):
A---B---C      main
     \
      D---E    feature   <- HEAD

After `git rebase main`:
A---B---C           main
         \
          D'--E'    feature   <- HEAD (D' and E' are new commits)

Then `git switch main && git merge feature` is a fast-forward:
A---B---C---D'--E'    main, feature
```

### Interactive rebase

`git rebase -i` opens a todo list, one line per commit (oldest first). Change the command word to reorder, squash, edit or drop commits.

```plaintext
$ git rebase -i HEAD~4

pick   a1b2c3d Add login form
squash d4e5f6a Fix typo
fixup  7a8b9c0 Fix lint
drop   1f2e3d4 Debug logging

p, pick     keep the commit as is
r, reword   keep the commit, edit its message
e, edit     stop here to amend the commit
s, squash   meld into the previous commit and combine messages
f, fixup    meld into the previous commit and discard this message
d, drop     remove the commit

Before:
A---B---C---D---E---F    main

After saving the todo list:
A---B---C'    main   (C' = C + D + E squashed, F dropped)
```

### `git cherry-pick`

Cherry-pick copies one commit onto the current branch as a new commit, leaving the original where it is.

```plaintext
Before:
A---B---C          main   <- HEAD
     \
      D---E---F    feature

After `git cherry-pick F` (on main):
A---B---C---F'     main   <- HEAD (F' is a copy of F)
     \
      D---E---F    feature
```

### Merge conflicts

When both sides change the same lines, git stops and marks both versions in the file.

```plaintext
<<<<<<< HEAD       start: the version on your current branch
timeout = 30
=======            separator
timeout = 60
>>>>>>> feature    end: the version from the branch being merged

1. Edit the file: keep the lines you want, delete the three marker lines
2. git add <file>
3. git commit               (merge)
   git rebase --continue    (rebase)
   git cherry-pick --continue
```

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

### Local and remote

`git fetch` only updates your copy of the remote branches (`origin/main`). `git pull` is a fetch followed by a merge (or a rebase with `--rebase`).

```plaintext
     Remote (origin)            Local Repository            Working Directory
            |                           |                           |
            |------- git fetch -------->|                           |
            |                           |                           |
            |<------- git push ---------|                           |
            |                           |                           |
            |-------- git pull ---------+-------------------------->|
            |                           |                           |
```

### `git pull` vs `git pull --rebase`

Both bring in the remote's new commits. Merge keeps both lines of history and adds a merge commit, rebase replays your commits on top.

```plaintext
Local main and origin/main have diverged:
A---B---C      origin/main
     \
      D---E    main   (your local commits D, E)

`git pull` (merge):
A---B---C---M    main   (M = merge commit, origin/main is still at C)
     \     /
      D---E

`git pull --rebase`:
A---B---C---D'--E'    main   (D' and E' replayed on top of origin/main)
```

### Tracking branches

`git branch -vv` shows each branch's upstream and how far ahead or behind it is. A branch with no brackets has no upstream.

```plaintext
A---B---C---D    main   (ahead 2)
    ^
origin/main

$ git branch -vv
* main     7c2e1a9 [origin/main: ahead 2] Add search filter
  feature  a81c07e [origin/feature: behind 1] Add search endpoint
  hotfix   3d92b4e Patch login redirect
```

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

### The stash stack

Stashes are saved on a stack, so you can park several sets of changes and bring them back later.

```plaintext
              +---------------------------------------+
git stash ->  | stash@{0}  WIP on main: login form    |  -> pop / apply (newest first)
              | stash@{1}  On feature: debug logging  |
              | stash@{2}  On main: experiment        |
              +---------------------------------------+

stash@{0} is always the newest. `pop` applies it and drops it, `apply` applies it and keeps it.
```

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

### Reading `git log --graph`

`*` is a commit. `|\` is where a branch splits off and `|/` is where it rejoins. Names in parentheses are branches and `HEAD`.

```plaintext
$ git log --oneline --graph --all
*   7c2e1a9 (HEAD -> main) Merge branch 'feature'
|\
| * 3b9d4f2 (feature) Add search filter
| * a81c07e Add search endpoint
* | d4f6e10 Fix typo in README
|/
* 5e0b3c8 Initial commit
```

### `git reflog`

The reflog records every place `HEAD` has been, including commits no branch points to any more. It is local only, and entries expire (about 90 days, 30 for unreachable ones).

```plaintext
$ git reflog
7c2e1a9 HEAD@{0}: reset: moving to HEAD~2
b81f3d0 HEAD@{1}: commit: Add payment tests
4f19a2c HEAD@{2}: commit: Add payment form
7c2e1a9 HEAD@{3}: commit: Add cart page

Before the reset:   7c2e1a9---4f19a2c---b81f3d0    <- HEAD, feature
After the reset:    7c2e1a9                        <- HEAD, feature

4f19a2c and b81f3d0 are on no branch now, but the reflog still has them.

Recover:

git reset --hard b81f3d0     # move the branch back (same as HEAD@{1})
git branch rescue b81f3d0    # or keep them on a new branch
```

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

### `git reset` modes

`git reset` moves the current branch to another commit. The mode decides what happens to the staging area and your files.

```plaintext
Before:
A---B---C    main   <- HEAD

After `git reset HEAD~1`:
A---B    main   <- HEAD   (C is no longer on any branch)
```

| Command | Branch / `HEAD` | Staging area | Working directory |
|---------|-----------------|--------------|-------------------|
| `git reset --soft <commit>` | moves | unchanged | unchanged |
| `git reset --mixed <commit>` | moves | reset to the commit | unchanged |
| `git reset --hard <commit>` | moves | reset to the commit | reset (changes are lost) |

### `git revert` vs `git reset`

Use `revert` on commits you have already pushed, since it adds a new commit instead of rewriting history. Use `reset` for local commits only.

```plaintext
Start:
A---B---C    main

`git reset --hard HEAD~1`:
A---B    main   history rewritten, C is gone from the branch

`git revert HEAD`:
A---B---C---R    main   history kept, R undoes C
```

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

### Tags vs branches

A branch label moves forward as you commit. A tag stays on one commit, which makes it a stable name for a release.

```plaintext
A---B---C---D   main   (moves with every new commit)
    |       |
  v1.0     v1.1   (tags never move)
```

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

### `git bisect`

Bisect binary-searches your history for the commit that introduced a bug. You tell it one good and one bad commit, then mark each commit it checks out.

```plaintext
        A    B    C    D    E    F    G    H
      good                                bad

step 1  test D -> good    first bad commit is in E..H
step 2  test F -> bad     first bad commit is in E..F
step 3  test E -> bad     first bad commit = E

3 tests instead of 6.
```

### `git worktree`

A worktree is another folder checked out from the same repository, so you can work on a second branch without stashing or cloning again.

```plaintext
one repository (shared .git and history)
|-- ~/project           main     the main working tree
`-- ~/project-hotfix    hotfix   git worktree add ../project-hotfix hotfix
```

### Submodules

A submodule is another repository nested in yours. The parent only records which commit of it to use.

```plaintext
my-project/                  (parent repository)
|-- src/
|-- libs/utils/              (submodule: its own repository, pinned to commit 9fceb02)
`-- .gitmodules              (records each submodule's path and URL)
```

