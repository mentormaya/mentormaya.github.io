#!/bin/sh

# Loading common functions
. .devcontainer/utils.sh

banner "Running Post Create Script"

# Install the version of Bundler.
banner "Installing the version of Bundler"
if [ -f Gemfile.lock ] && grep "BUNDLED WITH" Gemfile.lock >/dev/null; then
	tail <Gemfile.lock -n 2 | grep -C2 "BUNDLED WITH" | tail -n 1 | xargs gem install bundler -v
fi

# If there's a Gemfile, then run `bundle install`
# It's assumed that the Gemfile will install Jekyll too
if [ -f Gemfile ]; then
	banner "Gem file found! Running bundle install"
	bundle install
else
	banner "No Gem file found! Skipping bundle install"
fi

# Adding aliases for git
banner "Adding git aliases"
if [ -f /etc/bash.bashrc ]; then
  echo "Adding aliases to bashrc"
  echo "alias addall='git add .'">> /etc/bash.bashrc
  echo "alias commit='f() { git add . && if [ \"\$1\" = \"\" ]; then read -p \"Commit Message: \" msg; else msg=\"\$1\"; fi && git commit -m \"\$msg\"; }; f'">> /etc/bash.bashrc
  echo "alias push='f() { commit && git push; }; f'" >> /etc/bash.bashrc
  echo "alias init='git init'" >> /etc/bash.bashrc
  echo "alias pull='git pull'" >> /etc/bash.bashrc
  echo "alias test-ssh='ssh -T git@github.com'" >> /etc/bash.bashrc
  echo "alias debug-ssh='ssh -vT git@github.com'" >> /etc/bash.bashrc
  echo "alias kill-gpg='gpgconf --kill gpg-agent'" >> /etc/bash.bashrc
  verifyln "Failed to add aliases to bashrc"
else
  echo "No bashrc file found!"
fi