#!/bin/bash

# Update the package list and install necessary dependencies
sudo apt update -y

# Check if Node.js is already installed
if ! node -v > /dev/null 2>&1; then
  # Install Node.js 20.x if not already installed
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
else
  echo "Node.js is already installed."
fi

#create folder
mkdir /app

# Navigate to your project directory (adjust this path if necessary)
cd /app

# Pull the latest code (optional, depending on your strategy)
git pull origin main

# Install project dependencies
npm install

# Run the desired npm script (e.g., start the app)
npm run build
npm run dev
