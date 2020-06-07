const BasePool = artifacts.require("BasePool");
const SafeMath = artifacts.require("SafeMath")
const Roles = artifacts.require("Roles")
const UniformRandomNumber = artifacts.require("UniformRandomNumber")
const SortitionSumTreeFactory = artifacts.require("SortitionSumTreeFactory")
const DrawManager = artifacts.require("DrawManager")
const FixidityLib = artifacts.require("FixidityLib")
const Blocklock = artifacts.require("Blocklock")
const Address = artifacts.require("Address")

module.exports = async deployer => {
  DrawManager.address = '0xe2F16Bcdc7f482B7E2b11B046Af2a52a9EbEBD4B'
  FixidityLib.address = '0xBb28DbD993F4BdaB2249B0577D7caad46100B935'
  Blocklock.address = '0x37247BF1Aff2B1fCE0B963Ba049178E618B7FfC4'
  await deployer.link(DrawManager, BasePool)
  await deployer.link(FixidityLib, BasePool)
  await deployer.link(Blocklock, BasePool)
  await deployer.deploy(BasePool);
};
