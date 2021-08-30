const VerySimple = artifacts.require("VerySimple");
const BN = web3.utils.BN;
const isBN = web3.utils.isBN;
const { expectRevert } = require('@openzeppelin/test-helpers');

contract("VerySimple", (accounts)=>{
  
  before(async ()=>{
    console.log(isBN(minValue));
    maxAboutToOverflowContract = await VerySimple.new((new BN(2)).pow(new BN(255)).sub(new BN(1)));
    // minAboutToOverflowContract = await VerySimple.new((new BN(-2).pow(new BN(255)).sub(new BN(1))));
  });

  describe("Testing integer overflow",async () => {
    it("should not increment max int value", async ()=>{
      await expectRevert(maxAboutToOverflowContract.inc({from:accounts[0]}), "balance overflow");
    });
    // it("should not decrement min int value", async ()=>{
    //   await expectRevert(minAboutToOverflowContract.dec({from:accounts[0]}), "balance underflow");
    // });
  });
});