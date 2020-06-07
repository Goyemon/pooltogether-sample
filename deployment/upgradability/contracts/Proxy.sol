pragma solidity 0.5.16;

import "@openzeppelin/upgrades/contracts/upgradeability/AdminUpgradeabilityProxy.sol";

contract GoyemonProxy is AdminUpgradeabilityProxy {
    constructor(address _logic, address _admin, bytes memory _data)
    AdminUpgradeabilityProxy(_logic, _admin, _data) public payable {
    }
}
