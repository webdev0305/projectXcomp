//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import './ERC20.sol';

contract Token is ERC20 {
  constructor() ERC20('Test Token', 'TTK') {
    _mint(msg.sender, 1000000000000000 ether);
  }
}
