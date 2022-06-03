//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './IERC20.sol';
import './ERC20.sol';
import './Ownable.sol';

interface INFT {
    function getCreditsAirdropAmount(address account) external view returns (uint256);
    function useCredits(address _account, uint256 _amount) external ;
}

contract Compx is ERC20, Ownable{

  address public nftAddress;
  constructor() ERC20('Compx Token', 'CXT') {}


  function setNftAddress(address _address) public onlyOwner() {
    nftAddress = _address;
  }

  function claimToken() public {
    uint256 amount = INFT(nftAddress).getCreditsAirdropAmount(msg.sender);
    require(amount > 0, "Claimable amount must be greater than ZERO!");
    _mint(msg.sender, amount);
    INFT(nftAddress).useCredits(msg.sender, amount);
  }
}