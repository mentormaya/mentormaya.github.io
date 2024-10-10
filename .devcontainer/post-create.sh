#!/bin/sh

# Function to show banner messages
banner() {
    echo "----------------------------------------------------------------------------"
    echo "$1"
    echo "----------------------------------------------------------------------------"
}

banner "Running Post Create Script"

# Install necessary dependencies
banner "Installing dependencies"
gem install bundler 
gem install jekyll -v 3.10.0

# Initialize Jekyll site if not already initialized
if [ ! -f "_config.yml" ]; then
    banner "Initializing new Jekyll site"
    jekyll new . --force
fi

# Install gems
banner "Installing gems"
bundle install

# Adding aliases
banner "Adding aliases"
if [ -f "$HOME/.bashrc" ]; then
    cat >> "$HOME/.bashrc" <<EOL
alias serve='bundle exec jekyll serve --livereload'
alias build='bundle exec jekyll build'
EOL
fi

banner "Post-create script completed successfully"