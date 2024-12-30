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

# Set the directory where you want to clone your repository
REPO_DIR="/app"

# Check if the directory exists. If not, clone the repository
if [ ! -d "$REPO_DIR/.git" ]; then
  echo "Git repository not found. Cloning..."
  ggit clone https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/nexus-app.git $REPO_DIR
else
  echo "Git repository found. Pulling latest changes..."
  cd $REPO_DIR
  git pull origin main
fi
