const VerySimple = artifacts.require("VerySimple");

module.exports = function (deployer) {
  deployer.deploy(VerySimple,0);
};
