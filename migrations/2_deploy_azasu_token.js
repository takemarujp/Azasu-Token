var AzasuToken = artifacts.require("./AzasuToken.sol");

module.exports = function(deployer) {
  var initialSupply = 1000e18;
  deployer.deploy(AzasuToken, initialSupply,{
     gas: 2000000
  });
}
