# thibaultsimon.fr

Personal website of Thibault Simon, built with [Jekyll](https://jekyllrb.com)
(via the `github-pages` gem) and deployed on GitHub Pages.

## Requirements

- Ruby + Bundler

## Development

```sh
bundle install
bundle exec jekyll serve # http://localhost:4000
```

## Production build

```sh
bundle exec jekyll build # output in _site/
```

CI builds the site on every push to `master` and on pull requests
(see `.github/workflows/ci.yml`).

## Structure

- `_config.yml` — site settings, plugins, Sass compression
- `_data/` — content as data: `career.yml`, `publications.yml`, `talks.yml`
- `_includes/` — reusable markup fragments (`cv-entry`, `publication-entry`,
  `talk-entry`, `action-links`, `profile-link`)
- `_layouts/` — `default` and `post` layouts
- `assets/` — stylesheets (`site.scss`, compiled and minified by Jekyll),
  scripts, self-hosted fonts, images, logos
- `blog/`, `_posts/` — blog index and posts
- `presentations/` — standalone reveal.js slide decks

## Formatting

Formatting is enforced with pre-commit (Prettier + Liquid plugin):

```sh
pre-commit install
pre-commit run --all-files
```
