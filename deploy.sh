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

if [ ! -d "$REPO_DIR/.git" ]; then
  echo "Git repository not found. Cloning..."
  cd $REPO_DIR
  sudo git clone https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/nexus-app.git
else
  echo "Git repository found. Pulling latest changes..."
  cd $REPO_DIR
  sudo git pull origin main
fi

# Navigate to the project directory (if needed)
cd $REPO_DIR/nexus-app

# Define the port where your dev server is running
PORT=5173

# Check if there is already a process running on the specified port
echo "Checking for any existing processes running on port $PORT..."

# Get the PID of the process running on the port
PID=$(lsof -t -i:$PORT)

if [ -n "$PID" ]; then
    echo "Process with PID $PID found running on port $PORT. Stopping it..."
    # Kill the existing process
    kill -9 $PID
else
    echo "No process found running on port $PORT."
fi

# Install dependencies and deploy (for example, run npm install or npm run deploy)
echo "Installing dependencies and deploying..."
# Install project dependencies
sudo npm install

# Run the desired npm script (e.g., start the app)
sudo npm run build
sudo nohup npm run dev > /dev/null 2>&1 &
