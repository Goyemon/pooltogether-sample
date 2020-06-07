const GoyemonProxyAdmin = artifacts.require("GoyemonProxyAdmin")

module.exports = async (deployer, networks, accounts) => {
  await deployer.deploy(GoyemonProxyAdmin)
}
