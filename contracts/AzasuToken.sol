pragma solidity ^0.4.23;//1
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract AzasuToken is StandardToken {
  string public name = "AzasuToken";
  string public symbol = "AZS";
  uint public decimals = 18;

  constructor(uint initialSupply)public {
  totalSupply_ = initialSupply;
  balances[msg.sender] = initialSupply;
  }
}
