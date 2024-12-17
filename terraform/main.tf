module "server" {
  source                     = "./modules/server"
  ami_id                     = "ami-0b8c6b923777519db"
  instance_name              = var.instance_name
  environment                = var.environment
  existing_eip_allocation_id = var.existing_eip_allocation_id
}