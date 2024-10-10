#!/bin/bash

# Set up error logging
exec 1> >(tee -a "/home/ajay/workspace/.jekyll-startup.log") 2>&1

echo "Starting Jekyll server at $(date)"

# Function for cleaner exit
cleanup() {
    echo "Cleaning up..."
    pkill -f "jekyll serve" || true
}
trap cleanup EXIT

# Navigate to the workspace directory
cd /home/ajay/workspace || {
    echo "Failed to change to workspace directory"
    exit 1
}

# Check if Jekyll is already running
if pgrep -f "jekyll serve" > /dev/null; then
    echo "Jekyll is already running. Stopping previous instance..."
    pkill -f "jekyll serve"
    sleep 2
fi

# Ensure bundle is available
if ! command -v bundle >/dev/null; then
    echo "Bundler is not installed. Installing..."
    gem install bundler
fi

# Ensure necessary gems are installed
echo "Running bundle install..."
bundle install || {
    echo "Bundle install failed"
    exit 1
}

echo "Starting Jekyll server in background..."
nohup bundle exec jekyll serve --config _config.yml,_config_development.yml > .jekyll-server.log 2>&1 &

# Store the PID of Jekyll
JEKYLL_PID=$!

# Wait for Jekyll to start
echo "Waiting for Jekyll server to start..."
for i in {1..30}; do
    if curl -s http://localhost:4000 >/dev/null; then
        echo "Jekyll server is up and running!"
        disown $JEKYLL_PID
        exit 0
    fi
    if ! ps -p $JEKYLL_PID > /dev/null; then
        echo "Jekyll process died. Check .jekyll-server.log for details"
        cat .jekyll-server.log
        exit 1
    fi
    echo "Attempt $i/30: Server not ready yet..."
    sleep 1
done

echo "Failed to start Jekyll server within 30 seconds."
echo "Jekyll server log:"
cat .jekyll-server.log
exit 1