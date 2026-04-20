// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract PaymentEscrow {
    struct Job {
        uint256 jobId;
        uint256 modelId;
        address client;
        address worker;
        uint256 amountLocked;
        bool isResolved;
    }

    uint256 public nextJobId;
    mapping(uint256 => Job) public jobs;

    event JobCreated(uint256 indexed jobId, address indexed client, uint256 modelId, uint256 amount);
    event JobResolved(uint256 indexed jobId, address indexed worker, uint256 amountPaid);
    event JobRefunded(uint256 indexed jobId, address indexed client, uint256 amountRefunded);

    function createJob(uint256 _modelId) external payable returns (uint256) {
        require(msg.value > 0, "Payment required");

        uint256 jobId = nextJobId++;
        
        jobs[jobId] = Job({
            jobId: jobId,
            modelId: _modelId,
            client: msg.sender,
            worker: address(0),
            amountLocked: msg.value,
            isResolved: false
        });

        emit JobCreated(jobId, msg.sender, _modelId, msg.value);
        return jobId;
    }

    // Called by the Scheduler/Verifier once inference is complete
    function resolveJob(uint256 _jobId, address _worker, bool _success) external {
        // In prod, restrict this to a trusted oracle or consensus network
        Job storage job = jobs[_jobId];
        require(!job.isResolved, "Job already resolved");
        require(job.amountLocked > 0, "No funds locked");
        
        job.isResolved = true;
        job.worker = _worker;
        uint256 amount = job.amountLocked;
        job.amountLocked = 0;

        if (_success) {
            // Pay worker and platform fee
            uint256 platformFee = (amount * 2) / 100; // 2% fee
            uint256 workerPayment = amount - platformFee;
            
            payable(_worker).transfer(workerPayment);
            // Platform fee goes to contract owner (omitted for brevity)
            
            emit JobResolved(_jobId, _worker, workerPayment);
        } else {
            // Refund client
            payable(job.client).transfer(amount);
            emit JobRefunded(_jobId, job.client, amount);
        }
    }
}
