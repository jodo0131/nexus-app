variable "aws_region" {
  type    = string
  default = "us-west-2"
}

variable "AWS_ACCESS_KEY_ID" {
  type = string
}

variable "AWS_SECRET_ACCESS_KEY" {
  type = string
}

variable "instance_name" {
  description = "The name of the EC2 instance"
  type        = string
}

variable "environment" {
  description = "Environment of the EC2 instance"
  type        = string
}

variable "existing_eip_allocation_id" {
  description = "The allocation ID of the existing Elastic IP"
  type        = string
}