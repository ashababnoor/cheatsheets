# Cheatsheets

Welcome to this repository of concise, easy-to-reference cheatsheets for various programming languages and technologies. These cheatsheets are designed to provide quick help for both beginners and experienced developers.

Main Link: https://shababnoor.com/cheatsheets  
Alt Link: https://ashababnoor.github.io/cheatsheets  

Every cheatsheet is a Markdown file in [`_cheatsheets/`](_cheatsheets). The homepage and the 404 page build their lists from those files, so there is no list to keep up to date here.


## Contributing

We welcome contributions! If you would like to add a new cheatsheet or improve an existing one, please feel free to make a pull request. Read [CONTRIBUTING.md](CONTRIBUTING.md) first. It explains the front matter and the conventions every page follows.


## Running Locally

```bash
# Install dependencies
bundle install

# Serve the site with live reload
bundle exec jekyll serve --livereload --baseurl ""
```

The site will be available at `http://localhost:4000/`.

- Changes to `_config.yml` are not picked up while the server runs. Restart it.
- If the styles look stale after editing `assets/css/style.css`, do a hard refresh (Cmd+Shift+R).
- Keep `theme: null` in `_config.yml`. Without it, `github-pages` falls back to the Primer theme, whose stylesheet overwrites `assets/css/style.css`.
- Locally, `jekyll serve` rewrites `site.url` to `http://localhost:4000`, so the footer and canonical links point at localhost. The deployed site uses the actual URL.
