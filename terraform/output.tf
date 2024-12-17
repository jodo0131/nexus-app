output "ec2_name" {
  description = "EC2 Name"
  value       = module.server.name
}

output "Instance_id" {
  value = module.server.instance_id
}

output "Public_ip" {
  value = module.server.public_ip
}

output "aws_regions" {
  value = var.aws_region
}

output "Environment" {
  description = "Environment of the EC2 Instance"
  value       = module.server.environment
}