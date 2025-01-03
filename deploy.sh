#!/bin/bash
# Check if Node.js is already installed
if ! node -v > /dev/null 2>&1; then
  # Install Node.js 20.x if not already installed
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
else
  echo "Node.js is already installed.."
fi

#create folder
sudo mkdir /app

# Set the directory where you want to clone your repository
REPO_DIR="/app/nexus-app"

if [ ! -d "$REPO_DIR/.git" ]; then
  echo "Git repository not found. Cloning..."
  cd /app
  sudo git clone https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/nexus-app.git
else
  echo "Git repository found. Pulling latest changes..."
  cd $REPO_DIR
  sudo git pull origin main
fi

# Navigate to the project directory (if needed)
cd $REPO_DIR/nexus-app

# stop running npm
sudo pkill -f 'npm'
sudo ps aux | grep 'npm'
sudo pkill -f 'node'
sudo ps aux | grep 'node'

# Install dependencies and deploy (for example, run npm install or npm run deploy)
echo "Installing dependencies and deploying..."
# Install project dependencies
sudo npm install

# Run the desired npm script (e.g., start the app)
sudo npm run build
sudo nohup npm run dev > /dev/null 2>&1 &
