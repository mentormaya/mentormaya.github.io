#!/bin/bash

set -e

# Function to show banner messages
banner() {
    echo "----------------------------------------------------------------------------"
    echo "$1"
    echo "----------------------------------------------------------------------------"
}

banner "Running Post Create Script"

# Install necessary dependencies
banner "Installing dependencies"
gem install bundler jekyll

# Initialize Jekyll site if not already initialized
if [ ! -f "_config.yml" ]; then
    banner "Initializing new Jekyll site"
    jekyll new . --force
    
    # Update Gemfile for GitHub Pages
    cat > Gemfile <<EOL
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
gem "webrick", "~> 1.7"
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end
EOL
fi

# Install gems
banner "Installing gems"
bundle install

# Update _config.yml
banner "Updating Jekyll configuration"
cat > _config.yml <<EOL
# Site settings
title: Your Site Title
description: Your site description
baseurl: ""
url: ""

# Build settings
markdown: kramdown
theme: minima
plugins:
  - jekyll-feed

# Server settings
host: 0.0.0.0
port: 4000
livereload: true
livereload_port: 35729
force_polling: true

# Exclude from processing
exclude:
  - .devcontainer/
  - .vscode/
  - Gemfile
  - Gemfile.lock
  - node_modules/
  - vendor/bundle/
EOL

# Adding aliases
banner "Adding aliases"
if [ -f $HOME/.bashrc ]; then
    cat >> $HOME/.bashrc <<EOL
alias serve='bundle exec jekyll serve --livereload'
alias build='bundle exec jekyll build'
EOL
fi

banner "Post-create script completed successfully"