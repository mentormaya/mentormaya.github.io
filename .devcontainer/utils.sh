#!/bin/sh

# Function to show banner messages
banner() {
    echo "----------------------------------------------------------------------------"
    echo "$1"
    echo "----------------------------------------------------------------------------"
}

# Function to verify execution of last command
verifyln() {
    if [ $? -ne 0 ]; then
        echo "$1"
        exit 1
    fi
}