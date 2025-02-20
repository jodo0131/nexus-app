#!/bin/bash
branch=$1

# Check if Node.js is already installed
if ! node -v > /dev/null 2>&1; then
  # Install Node.js 20.x if not already installed
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
else
  echo "-----------Node.js is already installed..-----------"
fi

#create folder
sudo mkdir /app


# Set the directory where you want to clone your repository
REPO_DIR="/app/nexus-app"

if [ ! -d "$REPO_DIR/.git" ]; then
  echo "-----------Git repository not found. Cloning...-----------"
  cd /app
  git clone --branch $branch git@github.com:jodo0131/nexus-app.git
else
  echo "-----------Git repository found. Pulling latest changes...-----------"
  cd $REPO_DIR
  git pull origin $branch
fi

#set ownership
echo "-----------Changing ownership of /app-----------"
sudo chown -R ubuntu:ubuntu /app

# Navigate to the project directory (if needed)
cd $REPO_DIR
pwd

# stop running npm
echo "-----------Stopping current nexus-app running-----------"
ps aux | grep 'node /app/nexus-app/node_modules/.bin/vite' | grep -v 'grep' | awk '{print $2}' | xargs -I {} kill {}

# Install dependencies and deploy (for example, run npm install or npm run deploy))
echo "-----------Installing dependencies and deploying...-----------"
pwd
# Install project dependencies
echo "-----------NPM Install-----------"
npm install

# Run the desired npm script (e.g., start the app)
echo "-----------NPM RUN BUILD-----------"
npm run build
echo "-----------NPM RUN DEV-----------"
nohup npm run dev > /dev/null 2>&1 &

#checking netstat
echo "-----------NETSTAT-----------"
netstat -tulpn
