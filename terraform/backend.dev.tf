terraform {
  cloud {
    organization = "nojblog"
    workspaces {
      name = "nexus-app"
    }
  }
}