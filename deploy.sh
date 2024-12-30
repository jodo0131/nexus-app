#!/bin/bash
# Check if Node.js is already installed
if ! node -v > /dev/null 2>&1; then
  # Install Node.js 20.x if not already installed
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
else
  echo "Node.js is already installed."
fi

#create folder
sudo mkdir /app

# Navigate to your project directory (adjust this path if necessary)
cd /app

# Pull the latest code (optional, depending on your strategy)
sudo git pull origin main

# Install project dependencies
sudo npm install

# Run the desired npm script (e.g., start the app)
sudo npm run build
sudo npm run dev
