source "https://rubygems.org"

# Plain Jekyll 4 — the site no longer uses the `github-pages` gem, which was
# pinning vulnerable dependencies (nokogiri, rubyzip, ...). Deployment is done
# via GitHub Actions (`.github/workflows/deploy.yml`), so we control gem
# versions ourselves instead of being limited to GitHub Pages' build image.
gem "jekyll", "~> 4.4"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Needed for `bundle exec jekyll serve` on Ruby >= 3
gem "webrick", "~> 1.8"
