// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

interface INodeManager {
    function claimable(address) external view returns (uint256);
    function transferUnclaimed(address, address, uint256) external;
}

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

contract Competition is ERC20Upgradeable {
    address private _owner;
    CompInfo[] public competitions;
    mapping(address => bool) public sponsers;
    mapping(address => mapping(uint256 => uint32)) public ticketPerson;
    mapping(uint256 => TicketInfo[]) public ticketSold;
    mapping(address => MemberInfo) public members;
    mapping(uint256 => PrizeInfo) private winningPrizes;
    address public token;
    uint256 public discount5;
    uint256 public discount10;
    uint256 public discountCancel;
    uint256 public feePerMonth;
    uint256 public feePerYear;
    uint256 public creditsPerMonth;

    VRFCoordinatorV2Interface COORDINATOR;
    uint64 private subscriptionId;
    bytes32 private keyHash;
    mapping(uint256 => uint256) private drawRequests;
    mapping(uint256 => uint256) public drawResults;
    bool public canDrawMiddle;
    address public compxToken;
    INodeManager public nodeManager;
    event Drawn(uint256 indexed, uint256);
    event Finished(uint256 indexed, address);

    function initialize(address tokenAddress) public initializer {
        _owner = msg.sender;
        sponsers[msg.sender] = true;
        token = tokenAddress;
        discount5 = 0;
        discount10 = 0;
        discountCancel = 5000;
        feePerMonth = 1e18;
        feePerYear = 10e18;
        creditsPerMonth = 5e17;
        COORDINATOR = VRFCoordinatorV2Interface(0xd5D517aBE5cF79B7e95eC98dB0f0277788aFF634); // Avax Mainnet
        subscriptionId = 6;
        keyHash = 0x06eb0e2ea7cca202fc7c8258397a36f33d88568d2522b37aaa3b14ff6ee1b696;
    }

    function updateConsumer() public {
        COORDINATOR = VRFCoordinatorV2Interface(0xd5D517aBE5cF79B7e95eC98dB0f0277788aFF634); // Avax Mainnet
        subscriptionId = 6;
        keyHash = 0x06eb0e2ea7cca202fc7c8258397a36f33d88568d2522b37aaa3b14ff6ee1b696;
    }

    function rawFulfillRandomWords(uint256 requestId, uint256[] memory randomWords) external {
        if (msg.sender == address(COORDINATOR)) {
            fulfillRandomWords(requestId, randomWords);
        }
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

    function setCompXToken(address _compxToken) public forOwner{
        require(compxToken == address(0),"CompXToken already set!");        
        compxToken = _compxToken;
    }

    function setSponser(address account, bool active) public forOwner {
        sponsers[account] = active;
    }

    function setNodeManager(address _nodeManager) public forOwner {
        nodeManager = INodeManager(_nodeManager);
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

    function canDraw(uint256 id) public view returns (bool) {
        require(id > 0 && id <= competitions.length, "Draw: Invalid id.");
        CompInfo storage competition = competitions[id - 1];
        require(competition.status == 1, "Draw: CompInfo was not started.");
        if(canDrawMiddle)
            require(competition.countSold == competition.countTotal, "Draw: all ticket must be sold!");
        else
            require(
                competition.timeEnd <= block.timestamp,
                "Draw: CompInfo is not ready to draw."
            );
        
        require(competition.countSold > 0, "Draw: No ticket was sold.");
        require(ticketSold[id - 1].length > 0, "Draw: No ticket was sold.");
        return true;
    }

    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal {
        uint256 id = drawRequests[requestId];
        if(canDraw(id)) {
            CompInfo storage competition = competitions[id - 1];
            drawResults[id-1] = randomWords[0];
            competition.status = 2;
            emit Drawn(id, randomWords[0]);
        }

    }

    function finish(uint256 id) public forSponser {
        require(id > 0 && id <= competitions.length, "Finish: Invalid id.");
        CompInfo storage competition = competitions[id - 1];
        require(competition.status == 2, "Finish: CompInfo was not drawn.");
        require(competition.winner == address(0), "Finish: CompInfo was already finished.");
        TicketInfo[] storage tickets = ticketSold[id - 1];
        uint256 seed = drawResults[id-1] % competition.countSold;
        uint256 sum = 0;
        uint256 i = 0;
        for (i = 0; i < tickets.length; i++) {
            if (tickets[i].amount == 0) continue;
            sum = sum + tickets[i].amount;
            if (sum > seed) {
                competition.winner = tickets[i].account;
                emit Finished(id, competition.winner);
                break;
            }
        }
    }

    function draw(uint256 id) public forSponser {
        if(canDraw(id)) {
            uint256 requestId = COORDINATOR.requestRandomWords(
                keyHash,
                subscriptionId,
                3,
                100000,
                1
            );
            drawRequests[requestId] = id;
        }
        // uint256 seed = uint256(
        //     keccak256(
        //         abi.encodePacked(
        //             (block.timestamp - competition.timeStart) +
        //                 block.difficulty +
        //                 ((
        //                     uint256(keccak256(abi.encodePacked(block.coinbase)))
        //                 ) / (block.timestamp)) +
        //                 block.gaslimit +
        //                 ((uint256(keccak256(abi.encodePacked(id)))) /
        //                     (block.timestamp)) +
        //                 block.number
        //         )
        //     )
        // ) % competition.countSold;
        // uint256 sum = 0;
        // uint256 i = 0;
        // for (i = 0; i < tickets.length; i++) {
        //     if (tickets[i].amount == 0) continue;
        //     sum = sum + tickets[i].amount;
        //     if (sum > seed) {
        //         competition.winner = tickets[i].account;
        //         competition.status = 2;
        //         return competition.winner;
        //     }
        // }
       
    }

    function buyWithUnclaimed(uint256 id, uint32 count ) public{
        
        require(id > 0 && id <= competitions.length, "Buy: Invalid id.");
        CompInfo storage competition = competitions[id - 1];
        require(competition.status == 1, "Buy: CompInfo is not pending.");
        require(
            competition.timeEnd > block.timestamp,
            "Buy: CompInfo is timeout."
        );

        uint256 price = uint256(
            competition.priceForGuest > -1
                ? competition.priceForGuest
                : competition.priceForMember
        ) * count;
        if(price > 0){
            require(nodeManager.claimable(address(msg.sender)) >= price,
                "Buy: Insufficent balance."
            );
            nodeManager.transferUnclaimed(
                address(msg.sender),
                address(this),
                price
            );
        }
            
        ticketPerson[msg.sender][id] += count;
        competition.countSold += count;
        require(competition.countSold <= competition.countTotal, "Buy: There is no enough ticket");
        require(
            ticketPerson[msg.sender][id] <= competition.maxPerPerson,
            "Buy: You cannot buy more than MaxPerPerson."
        );
        TicketInfo[] storage tickets = ticketSold[id - 1];
        tickets.push(TicketInfo({account: msg.sender, amount: count}));
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
                ? competition.priceForGuest
                : competition.priceForMember
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
        if(compxToken != address(0) && price > 0){
            uint256 compxAmount = IERC20(compxToken).balanceOf(address(msg.sender));
            if(compxAmount > 0 ){
                if(compxAmount > price){
                    IERC20(compxToken).transferFrom(address(msg.sender), address(this), price);
                    price = 0;
                }else{
                    IERC20(compxToken).transferFrom(address(msg.sender), address(this), compxAmount);
                    price -= compxAmount;
                }
            }
        }
        if(price > 0){
            
            require(IERC20(token).balanceOf(address(msg.sender)) >= price,
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
        require(competition.countSold <= competition.countTotal, "Buy: There is no enough ticket");
        require(
            ticketPerson[msg.sender][id] <= competition.maxPerPerson,
            "Buy: You cannot buy more than MaxPerPerson."
        );
        TicketInfo[] storage tickets = ticketSold[id - 1];
        tickets.push(TicketInfo({account: msg.sender, amount: count}));
    }

    function getPurchasedTickets(address account, uint256 competitionId) public view returns(uint32){
        return ticketPerson[account][competitionId];
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

    function setCanDrawMiddle(bool value) public forSponser {
        canDrawMiddle = value;
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
