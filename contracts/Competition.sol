// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./common/IERC20.sol";

struct TicketInfo {
    address account;
    uint32 amount;
}

struct MemberInfo {
    uint256 balance; // Balance membership
    uint256 creditsPlus;
    uint256 creditsMinus;
    uint256 timeStart;
    uint256 timeUntil;
    uint256 timeLastPaid;
}

struct PrizeInfo {
    address token; // any-Token, this-Credit
    uint256 amount;
}

struct CompInfo {
    uint256 id;
    uint32 countTotal;
    uint32 countSold;
    int256 priceForGuest;
    int256 priceForMember;
    uint32 maxPerPerson;
    uint256 timeStart;
    uint256 timeEnd;
    // PrizeInfo[] winningPrize; // prize1 or prize2 ...
    address winner;
    uint8 status; // 0-Created, 1-Started, 2-SaleEnd, 3-Past
}

contract Competition {
    address private _owner;
    CompInfo[] public competitions;
    mapping(address => bool) public sponsers;
    mapping(address => mapping(uint256 => uint32)) public ticketPerson;
    mapping(uint256 => TicketInfo[]) public ticketSold;
    mapping(address => MemberInfo) public members;
    mapping(uint256 => PrizeInfo) private winningPrizes;
    address public token = address(0);
    uint256 public discount5 = 250;
    uint256 public discount10 = 500;
    uint256 public discountCancel = 5000;
    uint256 public feePerMonth = 1e18;
    uint256 public feePerYear = 10e18;
    uint256 public creditsPerMonth = 5e17;

    constructor(address tokenAddress) {
        _owner = msg.sender;
        sponsers[msg.sender] = true;
        token = tokenAddress;
    }

    modifier forOwner() {
        require(_owner == msg.sender, "Modifier: Only owner call.");
        _;
    }

    modifier forSponser() {
        require(sponsers[msg.sender] == true, "Modifier: Only sponser call.");
        _;
    }

    function owner() public view returns (address) {
        return _owner;
    }

    function setOwner(address account) public forOwner {
        _owner = account;
    }

    function setSponser(address account, bool active) public forOwner {
        sponsers[account] = active;
    }

    function getCompetitions() public view returns (CompInfo[] memory) {
        CompInfo[] memory id = new CompInfo[](competitions.length);
        for (uint256 i = 0; i < competitions.length; i++) {
            CompInfo storage competition = competitions[i];
            id[i] = competition;
        }
        return id;
    }

    function create(
        uint32 countTotal,
        int256 priceForGuest,
        int256 priceForMember,
        uint32 maxPerPerson
    ) public forSponser returns (uint256) {
        require(countTotal > 0, "Create: CountTotal must be positive.");
        require(
            maxPerPerson > 0 && maxPerPerson <= countTotal,
            "Create: MaxPerPerson is invalid."
        );
        require(
            priceForGuest > 0 && priceForGuest > priceForMember,
            "Create: Invalid Price."
        );
        uint256 idNew = competitions.length + 1;
        competitions.push(
            CompInfo({
                id: idNew,
                countTotal: countTotal,
                countSold: 0,
                priceForGuest: priceForGuest,
                priceForMember: priceForMember,
                maxPerPerson: maxPerPerson,
                timeStart: 0,
                timeEnd: 0,
                winner: address(0),
                status: 0
            })
        );
        return idNew;
    }

    function update(
        uint256 id,
        uint32 countTotal,
        int256 priceForGuest,
        int256 priceForMember,
        uint32 maxPerPerson
    ) public forSponser {
        require(id > 0 && id <= competitions.length, "Update: Invalid id.");
        require(countTotal > 0, "Update: CountTotal must be positive.");
        require(
            maxPerPerson > 0 && maxPerPerson <= countTotal,
            "Update: MaxPerPerson is invalid."
        );
        require(
            priceForGuest > 0 && priceForGuest > priceForMember,
            "Update: Invalid Price."
        );
        CompInfo storage competition = competitions[id - 1];
        require(id == competition.id, "Update: Unregistered competition.");
        require(competition.status == 0, "Update: CompInfo was started.");
        competition.countTotal = countTotal;
        competition.priceForGuest = priceForGuest;
        competition.priceForMember = priceForMember;
        competition.maxPerPerson = maxPerPerson;
    }

    function start(uint256 id, uint256 endTime) public forSponser {
        require(id > 0 && id <= competitions.length, "Start: Invalid id.");
        CompInfo storage competition = competitions[id - 1];
        require(competition.status == 0, "Start: CompInfo was started.");
        require(
            endTime > block.timestamp,
            "Start: EndTime must be later than now."
        );
        competition.timeStart = block.timestamp;
        competition.timeEnd = endTime;
        competition.status = 1;
    }

    function finish(uint256 id) public forSponser returns (address) {
        require(id > 0 && id <= competitions.length, "Finish: Invalid id.");
        CompInfo storage competition = competitions[id - 1];
        require(competition.status == 1, "Finish: CompInfo was not started.");
        require(
            competition.timeEnd <= block.timestamp,
            "Finish: CompInfo is not ready to finish."
        );
        require(competition.countSold > 0, "Finish: No ticket was sold.");
        TicketInfo[] storage tickets = ticketSold[id - 1];
        require(tickets.length > 0, "Finish: No ticket was sold.");
        uint256 seed = uint256(
            keccak256(
                abi.encodePacked(
                    (block.timestamp - competition.timeStart) +
                        block.difficulty +
                        ((
                            uint256(keccak256(abi.encodePacked(block.coinbase)))
                        ) / (block.timestamp)) +
                        block.gaslimit +
                        ((uint256(keccak256(abi.encodePacked(id)))) /
                            (block.timestamp)) +
                        block.number
                )
            )
        ) % competition.countSold;
        uint256 sum = 0;
        uint256 i = 0;
        for (i = 0; i < tickets.length; i++) {
            if (tickets[i].amount == 0) continue;
            sum = sum + tickets[i].amount;
            if (sum > seed) {
                competition.winner = tickets[i].account;
                competition.status = 2;
                return competition.winner;
            }
        }
        return address(0);
    }

    function buy(uint256 id, uint32 count) public {
        require(id > 0 && id <= competitions.length, "Buy: Invalid id.");
        CompInfo storage competition = competitions[id - 1];
        require(competition.status == 1, "Buy: CompInfo is not pending.");
        require(
            competition.timeEnd > block.timestamp,
            "Buy: CompInfo is timeout."
        );
        bool hasMembership = isMember(msg.sender);
        if (competition.priceForGuest == -1)
            require(hasMembership, "Buy: Only Members can buy.");
        uint256 price = uint256(
            competition.priceForGuest > -1
                ? competition.priceForMember
                : competition.priceForGuest
        ) * count;
        if (count >= 10) price -= (price * discount10) / 10000;
        else if (count >= 5) price -= (price * discount5) / 10000;
        if (hasMembership && competition.priceForMember > -1) {
            MemberInfo storage member = members[msg.sender];
            uint256 credits = creditBalance(msg.sender);
            if (credits > price) {
                price = 0;
                member.creditsMinus += price;
            } else if (credits > 0) {
                price -= credits;
                member.creditsMinus += credits;
            }
        }
        if (price > 0) {
            require(
                IERC20(token).balanceOf(address(msg.sender)) >= price,
                "Buy: Insufficent balance."
            );
            IERC20(token).transferFrom(
                address(msg.sender),
                address(this),
                price
            );
        }
        ticketPerson[msg.sender][id] += count;
        competition.countSold += count;
        require(
            ticketPerson[msg.sender][id] <= competition.maxPerPerson,
            "Buy: You cannot buy more than MaxPerPerson."
        );
        TicketInfo[] storage tickets = ticketSold[id - 1];
        tickets.push(TicketInfo({account: msg.sender, amount: count}));
    }

    function sell(uint256 id, uint32 count) public {
        require(id > 0 && id <= competitions.length, "Sell: Invalid id.");
        CompInfo storage competition = competitions[id - 1];
        require(competition.status == 1, "Sell: CompInfo is not pending.");
        require(
            competition.timeEnd > block.timestamp,
            "Sell: CompInfo is timeout."
        );
        require(
            ticketPerson[msg.sender][id] >= count,
            "Sell: You didnot purchase so."
        );
        uint256 price = uint256(competition.priceForGuest) * count;
        price -= (price * discountCancel) / 10000;
        IERC20(token).transfer(address(msg.sender), price);
        ticketPerson[msg.sender][id] -= count;
        competition.countSold -= count;
        TicketInfo[] storage tickets = ticketSold[id - 1];
        uint256 i = 0;
        for (i = 0; i < tickets.length; i++) {
            if (msg.sender == tickets[i].account && tickets[i].amount > 0) {
                if (count > tickets[i].amount) {
                    count -= tickets[i].amount;
                    tickets[i].amount = 0;
                } else {
                    tickets[i].amount -= count;
                    count = 0;
                }
                if (count == 0) break;
            }
        }
    }

    function withdraw(uint256 amount) public forSponser {
        require(
            IERC20(token).balanceOf(address(this)) >= amount,
            "Withdraw: Insufficent balance."
        );
        IERC20(token).transfer(address(msg.sender), amount);
    }

    function payFeePerMonth(uint8 count) public {
        require(count > 0 && count < 12, "PayFee: Invalid number of months.");
        MemberInfo storage member = members[msg.sender];
        if (member.timeUntil < block.timestamp) {
            member.balance = 0;
            member.creditsMinus = 0;
            member.creditsPlus = 0;
            member.timeStart = block.timestamp;
            member.timeUntil = block.timestamp + count * 30 days;
        } else {
            member.timeUntil += count * 30 days;
        }
        uint256 fee = feePerMonth * count;
        IERC20(token).transferFrom(address(msg.sender), address(this), fee);
        member.balance += fee;
    }

    function payFeePerYear(uint8 count) public {
        require(count > 0, "PayFee: Invalid number of years.");
        MemberInfo storage member = members[msg.sender];
        if (member.timeUntil < block.timestamp) {
            member.balance = 0;
            member.creditsMinus = 0;
            member.creditsPlus = 0;
            member.timeStart = block.timestamp;
            member.timeUntil = block.timestamp + count * 360 days;
        } else {
            member.timeUntil += count * 360 days;
        }
        uint256 fee = feePerYear * count;
        IERC20(token).transferFrom(address(msg.sender), address(this), fee);
        member.balance += fee;
    }

    function claimTokens(uint256 id) public {
        require(id > 0 && id <= competitions.length, "Claim: Invalid id.");
        CompInfo storage competition = competitions[id - 1];
        require(competition.status == 2, "Claim: CompInfo is not finished.");
        require(
            competition.timeEnd <= block.timestamp,
            "Claim: CompInfo is not finished."
        );
        require(
            ticketPerson[msg.sender][id] > 0,
            "Claim: You purchased no tickets."
        );
        require(
            competition.winner == msg.sender,
            "Claim: You are not a winner."
        );
        PrizeInfo storage winningPrize = winningPrizes[id];
        require(winningPrize.amount > 0, "Claim: There is no prize.");
        IERC20(winningPrize.token).transfer(
            address(msg.sender),
            winningPrize.amount
        );
        competition.status = 3;
    }

    function sendCredits(address account, uint256 amount) public forSponser {
        require(amount > 0, "Send: Invalid amount.");
        require(
            isMember(account) == true,
            "Send: Credits can be sent to only a member."
        );
        MemberInfo storage member = members[account];
        member.creditsPlus += amount;
    }

    function claimCredits(uint256 id) public {
        require(
            isMember(msg.sender) == true,
            "Claim: Only Member can claim credits."
        );
        require(id > 0 && id <= competitions.length, "Claim: Invalid id.");
        CompInfo storage competition = competitions[id - 1];
        require(competition.status == 2, "Claim: CompInfo is not finished.");
        require(
            competition.timeEnd <= block.timestamp,
            "Claim: CompInfo is not finished."
        );
        require(
            ticketPerson[msg.sender][id] > 0,
            "Claim: You purchased no tickets."
        );
        require(
            competition.winner == msg.sender,
            "Claim: You are not a winner."
        );
        PrizeInfo storage winningPrize = winningPrizes[id];
        require(winningPrize.amount > 0, "Claim: There is no prize.");
        MemberInfo storage member = members[msg.sender];
        member.creditsPlus += winningPrize.amount;
        competition.status = 3;
    }

    function setDiscount5(uint256 discount) public forSponser {
        discount5 = discount;
    }

    function setDiscount10(uint256 discount) public forSponser {
        discount10 = discount;
    }

    function setDiscountCancel(uint256 discount) public forSponser {
        discountCancel = discount;
    }

    function setFeePerMonth(uint256 fee) public forSponser {
        feePerMonth = fee;
    }

    function setFeePerYear(uint256 fee) public forSponser {
        feePerYear = fee;
    }

    function setToken(address _token) public forSponser {
        token = _token;
    }

    function setCreditsPerMonth(uint256 credits) public forSponser {
        creditsPerMonth = credits;
    }

    function creditBalance(address account) public view returns (uint256) {
        MemberInfo storage member = members[account];
        if (member.timeUntil < block.timestamp) return 0;
        return
            creditsPerMonth *
            ((block.timestamp - member.timeStart - 1) / 30 days + 1) +
            member.creditsPlus -
            member.creditsMinus;
    }

    function isMember(address account) public view returns (bool) {
        MemberInfo storage member = members[account];
        if (member.timeUntil < block.timestamp) return false;
        return true;
    }
}
