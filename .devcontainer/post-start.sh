#!/bin/sh

# Load common functions
. .devcontainer/utils.sh

banner "Running Post Start Script"

# Set up the workspace
USER_NAME="Ajay Singh"
USER_EMAIL="admin@ajaysingh.com.np"
containerWorkspaceFolder="$1"

# Set up git
banner "Adding git user: ${USER_NAME}"
git config --global user.name "${USER_NAME}"
verifyln "Failed to set git user: ${USER_NAME}"


banner "Adding git email: ${USER_EMAIL}"
git config --global user.email "${USER_EMAIL}"
verifyln "Failed to set git email: ${USER_EMAIL}"

banner "Setting up safe workspace: ${containerWorkspaceFolder}"
git config --global --add safe.directory ${containerWorkspaceFolder}
verifyln "Failed to set safe workspace: ${containerWorkspaceFolder}"

banner "Post Start Script Completed"