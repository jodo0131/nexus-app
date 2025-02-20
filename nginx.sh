#!/bin/bash
# Check if nginx is already installed
if nginx -v > /dev/null 2>&1; then
  sudo apt install -y nginx
else
  echo "nginx is already installed.."
fi

NGINX_CONF_PATH="/etc/nginx/sites-available/nexus-app"
NGINX_ENABLED_PATH="/etc/nginx/sites-enabled/nexus-app"

# NGINX configuration for the reverse proxy
NGINX_CONFIG="
server {
    listen 80;
    server_name 18.206.89.27;  # Replace with your domain or EC2 public IP

    location / {
        proxy_pass http://localhost:5173/nexus-app/;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    # Error handling (optional)
    error_page 404 /404.html;
    location = /404.html {
        root /usr/share/nginx/html;
    }
}
"

# Create the NGINX configuration file
echo "Creating NGINX configuration file at $NGINX_CONF_PATH"

echo "$NGINX_CONFIG" | sudo tee $NGINX_CONF_PATH > /dev/null

# Enable the site by creating a symbolic link in sites-enabled
echo "Enabling the NGINX site configuration"
sudo ln -s $NGINX_CONF_PATH /etc/nginx/sites-enabled/

# Test the NGINX configuration for syntax errors
echo "Testing NGINX configuration"
sudo nginx -t

# Restart NGINX to apply the new configuration
echo "Restarting NGINX to apply the changes"
sudo systemctl restart nginx

echo "NGINX reverse proxy setup completed successfully!"
