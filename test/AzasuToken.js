var AzasuToken = artifacts.require("./AzasuToken.sol")

contract('AzasuToken',function(accounts){
  // 3
  it("should put 100 AzasuToken in the first account", function(){
    return AzasuToken.deployed().then(function(instance){
      return instance.balanceOf.call(accounts[0]);
  // 4
    }).then(function(balance){
      assert.equal(balance.valueOf(),1000,"1000 wasn't in the first account");
    });
  });
});
