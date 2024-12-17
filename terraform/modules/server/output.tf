output "instance_id" {
  value = aws_instance.server.id
}

output "public_ip" {
  value = aws_instance.server.public_ip
}

output "name" {
  value = aws_instance.server.tags["Name"]
}

output "environment" {
  value = aws_instance.server.tags["Environment"]
}