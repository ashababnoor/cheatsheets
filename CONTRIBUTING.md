# Contributing

Thanks for helping out. This page covers how to add a cheatsheet and the conventions the pages follow. To run the site on your machine, see [Running Locally](README.md#running-locally).

## Adding a Cheatsheet

1. Create `_cheatsheets/<topic>.md`. Use a lowercase, hyphenated name, since it becomes the URL (`regex.md` is served at `/cheatsheets/regex`).
2. Start the file with front matter (see below) and leave a blank line after it.
3. Write the content. Do not add a `# ` heading. The layout renders `<title> Cheatsheet` as the page `h1` and the `subtitle` under it.
4. Run the site locally and check the page in both the light and the dark theme.

```yaml
---
title: "Git Commands"
subtitle: "Commands for setup, branching, merging, remotes, stashing, and undoing changes."
description: "Git command reference — branching, merging, rebasing, stashing, remotes, and common workflows."
category: "Tools & DevOps"
logo: "git"
---
```

| Key | Required | Meaning |
|-----|----------|---------|
| `title` | yes | Short topic name. The page heading is `<title> Cheatsheet`, so leave "Cheatsheet" out |
| `subtitle` | yes | One sentence shown under the heading. Say what is covered, and keep it short |
| `description` | yes | One sentence for search results and link previews (not shown on the page) |
| `category` | yes | One of the names in `cheatsheet_categories` in `_config.yml`. To add a category, add it there |
| `icon` or `logo` | one of them | Card image on the homepage (see [Icons and logos](#icons-and-logos)) |
| `order` | no | Sort position inside its category (lower first). Pages without it follow file name order |
| `toc` | no | Set `false` to hide the "On this page" sidebar (used by the 404 page) |


## Conventions

These keep the pages consistent. They come from the patterns already used across the repo.

### Structure

- Use `##` for each major topic and `###` for subtopics. Both appear in the "On this page" sidebar.
- Do not put `---` rules between sections. The `h2` underline and spacing already separate them.
- Start with a `##` heading. Add an intro paragraph only when it says something the subtitle does not (for example a notation key, or how the page is organised).
- Prefer a table for command and syntax reference (`Command | Description`, plus `Example` when it helps). Use a code block when order or layout matters.

### Technical terms

- Put code words in backticks everywhere, including headings and subtitles: `async`/`await`, `*args`, `if`/`elif`/`else`, module names such as `datetime`, literal values such as `2xx`, and tool names such as `getopts` or `trap`.
- Plain concept words (for example "Memoization" or "Branching") stay as normal text.
- Headings render code in the monospace font without a box, so there is nothing extra to do.

### Code blocks

- Always give the fence a language: `python`, `javascript`, `bash`, `sql`, `css`, and so on. Use `plaintext` for output, ASCII diagrams, and anything that is not code.
- Write readable, multi-line code instead of dense one-liners, and add short comments where they help. In CSS, a rule with one declaration may stay on one line (`.grid { display: grid; }`). Rules with more get one declaration per line.
- **Align trailing comments.** Inside a block, trailing comments share one column, two spaces after the longest commented line:

  ```python
  nums = [1, 2, 3, 4, 5]
  nums[1:3]      # [2, 3]
  nums[::2]      # [1, 3, 5]
  nums[::-1]     # [5, 4, 3, 2, 1]
  ```

  Do not push a comment more than about 20 columns away from its code. If two groups of lines are very different in length, align them as two groups.
- Keep lines under about 95 characters so the block does not scroll sideways.
- The site adds a copy button to every code block, and line numbers to `python`, `js`, `javascript`, `css`, `sql`, `html`, `bash`, and `sh` blocks that have four or more lines. You do not need to write anything for this.

### Diagrams

- **ASCII** (a `plaintext` block) suits traces, tables, and short graphs. Line them up by column, not by eye: the font renders `->` and `<=` as ligatures, but every character still takes one cell. Count columns, and check the result in the browser.
- **Mermaid** (a `mermaid` block) suits trees and graphs. Its colours match the theme selected when the page loads. Keep node labels short and quote them (`A["[5, 2, 4, 1]"]`).
- Prefer a small worked example (a real array, a short history) over an abstract picture.

### Math

Write formulas between `$$ ... $$`, `\[ ... \]`, or `\( ... \)`. They are rendered by KaTeX.

### Icons and logos

Each cheatsheet needs one image on the homepage card:

- **`logo: "<name>"`** is for a language or tool that has a brand logo. Put `<name>.svg` in `assets/logos/`. Use the official or Devicon SVG, and check that it reads well in both themes. If a logo is dark and disappears on the dark theme, add its class to the `invert` rule in `assets/css/style.css` (see `logo-markdown`).
- **`icon: "<name>"`** is for everything else. Add a [Lucide](https://lucide.dev) icon as `_includes/icons/<name>.svg`, in the same format as the existing ones (`viewBox="0 0 24 24"`, `stroke="currentColor"`, no fixed size).

### Commits

Follow Conventional Commits, as in the [Conventional Commits cheatsheet](_cheatsheets/conventional-commits.md): `docs:` for content, `feat:` for site features, `fix:` for bugs, `chore:` for housekeeping. Name branches `feature/…`, `fix/…`, `docs/…`, and so on.
