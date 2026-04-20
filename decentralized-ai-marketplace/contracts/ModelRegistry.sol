// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract ModelRegistry {
    struct Model {
        uint256 id;
        address owner;
        string ipfsHash; // IPFS hash of model artifacts
        uint256 pricePerInference; // Cost per run
        bool isActive;
        uint256 reputationScore; // Trust rating
        uint256 totalRuns;
    }

    uint256 public nextModelId;
    mapping(uint256 => Model) public models;
    mapping(address => uint256[]) public userModels;

    event ModelRegistered(uint256 indexed modelId, address indexed owner, string ipfsHash, uint256 price);
    event ModelUpdated(uint256 indexed modelId, uint256 newPrice, bool isActive);
    event ReputationUpdated(uint256 indexed modelId, uint256 newScore);

    function registerModel(string memory _ipfsHash, uint256 _pricePerInference) external {
        require(bytes(_ipfsHash).length > 0, "IPFS hash required");
        
        uint256 modelId = nextModelId++;
        
        models[modelId] = Model({
            id: modelId,
            owner: msg.sender,
            ipfsHash: _ipfsHash,
            pricePerInference: _pricePerInference,
            isActive: true,
            reputationScore: 100, // base score
            totalRuns: 0
        });
        
        userModels[msg.sender].push(modelId);
        
        emit ModelRegistered(modelId, msg.sender, _ipfsHash, _pricePerInference);
    }

    function updateModel(uint256 _modelId, uint256 _newPrice, bool _isActive) external {
        require(models[_modelId].owner == msg.sender, "Not model owner");
        
        models[_modelId].pricePerInference = _newPrice;
        models[_modelId].isActive = _isActive;
        
        emit ModelUpdated(_modelId, _newPrice, _isActive);
    }

    // Called by Escrow/Verifier after successful/failed inference
    function updateReputation(uint256 _modelId, bool _success) external {
        // In prod, restrict to trusted verifier contract
        Model storage model = models[_modelId];
        model.totalRuns += 1;
        
        if (_success) {
            model.reputationScore += 1;
        } else {
            model.reputationScore = model.reputationScore > 5 ? model.reputationScore - 5 : 0;
        }
        
        emit ReputationUpdated(_modelId, model.reputationScore);
    }
}
