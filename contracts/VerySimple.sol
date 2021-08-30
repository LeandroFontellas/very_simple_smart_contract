//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract VerySimple {
  int256 balance;
  constructor(int i) public{
    balance = i;
  }
  function inc() public {
    if((balance>=0)&&(balance+1 < 0)){
      revert("balance overflow");
    }
    balance = balance +1;
  }

  function dec() public {
    if((balance<=0)&&(balance-1 > 0)){
      revert("balance underflow");
    }
    balance = balance -1;
  }

  function check(int c) public view returns (bool) {
    return c==balance;
  }

  function positive() public view returns (bool) {
    return balance>0;
  }
  function getBalance() public view returns (int) {
    return balance;
  }
}