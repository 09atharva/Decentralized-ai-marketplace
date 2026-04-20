// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract NodeStaking {
    struct Node {
        address nodeAddress;
        uint256 stakeAmount;
        uint256 reputation; // 0 to 1000
        bool isActive;
        uint256 totalJobs;
        uint256 failedJobs;
    }

    mapping(address => Node) public nodes;
    uint256 public constant MIN_STAKE = 1 ether; // 1 MATIC/ETH

    event NodeRegistered(address indexed node, uint256 stake);
    event NodeSlashed(address indexed node, uint256 slashAmount, string reason);
    event StakeWithdrawn(address indexed node, uint256 amount);

    function stake() external payable {
        require(msg.value >= MIN_STAKE, "Insufficient stake");
        
        if (nodes[msg.sender].nodeAddress == address(0)) {
            nodes[msg.sender] = Node({
                nodeAddress: msg.sender,
                stakeAmount: msg.value,
                reputation: 500, // Starting rep
                isActive: true,
                totalJobs: 0,
                failedJobs: 0
            });
        } else {
            nodes[msg.sender].stakeAmount += msg.value;
            nodes[msg.sender].isActive = true;
        }
        
        emit NodeRegistered(msg.sender, msg.value);
    }

    function recordJobResult(address _node, bool _success) external {
        // Should be restricted to Escrow/Verifier contract
        require(nodes[_node].isActive, "Node not active");
        
        nodes[_node].totalJobs += 1;
        
        if (_success) {
            if (nodes[_node].reputation < 1000) {
                nodes[_node].reputation += 2;
            }
        } else {
            nodes[_node].failedJobs += 1;
            nodes[_node].reputation = nodes[_node].reputation > 50 ? nodes[_node].reputation - 50 : 0;
            
            // Slashing logic
            if (nodes[_node].reputation < 300 && nodes[_node].stakeAmount > 0) {
                uint256 slashAmount = nodes[_node].stakeAmount / 10; // 10% slash
                nodes[_node].stakeAmount -= slashAmount;
                // Slash goes to DAO/treasury
                emit NodeSlashed(_node, slashAmount, "Low reputation/High failure");
            }
        }
    }

    function withdraw(uint256 _amount) external {
        require(nodes[msg.sender].isActive, "Node not active");
        require(nodes[msg.sender].stakeAmount >= _amount, "Insufficient stake");
        require(nodes[msg.sender].stakeAmount - _amount >= MIN_STAKE || _amount == nodes[msg.sender].stakeAmount, "Must leave min stake or withdraw all");
        
        nodes[msg.sender].stakeAmount -= _amount;
        if (nodes[msg.sender].stakeAmount == 0) {
            nodes[msg.sender].isActive = false;
        }
        
        payable(msg.sender).transfer(_amount);
        emit StakeWithdrawn(msg.sender, _amount);
    }
}
