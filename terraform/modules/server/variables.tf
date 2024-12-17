variable "ami_id" {
  description = "AMI ID for the EC2 instance"
  type        = string
}

variable "instance_type" {
  description = "Instance type for the EC2 instance"
  type        = string
  default     = "t2.micro"
}

variable "instance_name" {
  description = "Instance name for the EC2 instance"
  type        = string
}

variable "environment" {
  description = "Environment for the EC2 instance"
  type        = string
}

variable "existing_eip_allocation_id" {
  description = "The allocation ID of the existing Elastic IP"
  type        = string
}