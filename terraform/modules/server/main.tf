resource "aws_instance" "server" {
  ami           = "ami-0b8c6b923777519db"
  instance_type = var.instance_type

  subnet_id = data.aws_subnets.default.ids[0]

  key_name = "jtkey"
  
  root_block_device {
    volume_size = 8
    volume_type = "gp2"
    encrypted  = true
  }

  user_data = <<-EOF
              #!/bin/bash
              # Update and install Node.js
              apt-get update -y
              apt-get install -y nodejs

              # install npm
              apt-get install -y npm

              # Verify installations
              node -v

              #Clone git repo
              mkdir /app
              cd /app
              git clone https://github.com/jodo0131/nexus-app.git

              #deploy app
              cd /app
              npm install
              npm run build
              npm run dev
              EOF

  tags = {
    Name = var.instance_name
    Environment = var.environment
  }

    metadata_options {
    http_tokens = "required"  # Enforce IMDSv2
    http_endpoint = "enabled"
  }
}

resource "aws_eip_association" "server_eip_association" {
  instance_id   = aws_instance.server.id
  allocation_id = var.existing_eip_allocation_id
}