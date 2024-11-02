// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BugBounty {

    struct Bounty {
        uint id;
        string title;
        uint reward;
        address creator;
        bool isClaimed;
    }

    struct Report {
        uint bountyId;
        string description;
        address researcher;
    }

    uint public bountyCount;
    mapping(uint => Bounty) public bounties;
    mapping(uint => Report[]) public reports;

    event BountyPosted(uint bountyId, string title, uint reward, address creator);
    event ReportSubmitted(uint bountyId, string description, address researcher);
    event RewardReleased(uint bountyId, address researcher);

    function postBounty(string memory title) public payable {
        require(msg.value > 0, "Reward must be greater than 0");
        bounties[bountyCount] = Bounty(bountyCount, title, msg.value, msg.sender, false);
        emit BountyPosted(bountyCount, title, msg.value, msg.sender);
        bountyCount++;
    }

    function submitReport(uint bountyId, string memory description) public {
        reports[bountyId].push(Report(bountyId, description, msg.sender));
        emit ReportSubmitted(bountyId, description, msg.sender);
    }

    function releaseReward(uint bountyId, uint reportIndex) public {
        Bounty storage bounty = bounties[bountyId];
        require(msg.sender == bounty.creator, "Only the creator can release rewards.");
        require(!bounty.isClaimed, "Bounty already claimed");
        require(reports[bountyId].length > reportIndex, "Invalid report index");

        bounty.isClaimed = true;
        address researcher = reports[bountyId][reportIndex].researcher;
        payable(researcher).transfer(bounty.reward);
        emit RewardReleased(bountyId, researcher);
    }
}

