// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface IKRC20 is IERC20 {
    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function decimals() external view returns (uint8);
}

interface IWKCS {
    function deposit() external payable;

    function withdraw(uint256) external;

    function transfer(address to, uint256 value) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);

    function approve(address to, uint256 value) external returns (bool);
}
// is IERC721Receiver, ReentrancyGuard 
contract DistantFiAuction is ERC721Holder {

    using EnumerableSet for EnumerableSet.AddressSet;
    using EnumerableSet for EnumerableSet.UintSet;
    using Address for address;
    using SafeERC20 for IKRC20;

    address public immutable USDT;
    EnumerableSet.AddressSet private collectionAddresses;

    event ItemAuctioned(
        address indexed seller,
        address collectionAddress,
        uint256 indexed tokenId,
        uint256 price
    );

    event AuctionEnded(
        address collectionAddress,
        uint256 indexed tokenId
    );

    event bidMade(
        address indexed Bidder,
        address collectionAddress,
        uint256 indexed tokenId,
        uint256 price
    );

    enum Status {
        Verified,
        Unverified
    }
    event CollectionAdded(address collection);

    struct Collection {
        address collectionAddress;
        // uint256 royaltyFees;
        Status status;
    }

    struct bids{
        address bidder;
        uint price;
    }

    struct bidderdata {
        uint bidAmount;
        bool canWithdraw;
    }
    struct auctionDetails {
        address seller;
        address nftCollectionAddress;
        uint tokenId;
        uint startTime;
        uint EndTime;
        uint Currentprice;
        address highestBidder;
        uint highestbid;
        mapping(address => bidderdata)  biddersFunds;
        uint bidsCount;
        bool ongoing;
    }
    
    bids [] public biddersInfo;
    mapping( address => mapping (uint => auctionDetails)) public AuctionedNFTs;
    mapping(address => EnumerableSet.UintSet) private AuctionCheck;
    mapping(address => mapping(uint => bids[] )) public bidders;
    mapping(address => Collection) public collection;
    
    auctionDetails[] RecentAuction;

     modifier alreadyAuctioned(
        address _collection,
        address _creator,
        uint256 _tokenId
    ) {
        require(
            AuctionCheck[_collection].contains(_tokenId),
            "Auction doesn't exist"
        );
        _;
    }

    error NFTAlreadyAuctioned(uint tokenId);

    // EnumerableSet.AddressSet private collectionAddresses;

    // ERC721Enumerable nft;

     constructor(
        address _USDT
    ) {
        USDT = _USDT;
    }


    function Auction (
        address _collectionAddress,
        uint _tokenId,
        uint _duration,//uint value in minutes eg, 2minutes
        uint curPrice
    ) external {
        IERC721 nft = IERC721(_collectionAddress);
        require(msg.sender == nft.ownerOf(_tokenId), "msg.sender != owner");
        require(
            collectionAddresses.contains(_collectionAddress),
            "Collection is not supported for auctioning"
        );
        if (AuctionCheck[_collectionAddress].contains(_tokenId)) {
            revert NFTAlreadyAuctioned(_tokenId);
        }
        // uint AuctionId = block.timestamp;
        uint realduration = _duration * 60;
        uint endTime = block.timestamp + realduration;
        //highest bidder initialization
        address highestbidder = address(0);
        
        //transfer nft from user to contract
        nft.transferFrom(msg.sender, address(this), _tokenId);

        //generate auction ID
        // string memory aucId =   abi.encode(_collectionAddress, _tokenId);
        // string memory aucId = _collectionAddress + _tokenId;
        // AuctionedNFTs[block.timestamp]
        // string memory strA = _collectionAddress.toString();
        // string memory strB = _tokenId.toString();
        // string memory strAB = strA + strB;
        AuctionedNFTs[_collectionAddress][_tokenId].seller = msg.sender;
        AuctionedNFTs[_collectionAddress][_tokenId].nftCollectionAddress = _collectionAddress;
        AuctionedNFTs[_collectionAddress][_tokenId].tokenId = _tokenId;
        AuctionedNFTs[_collectionAddress][_tokenId].startTime = block.timestamp;
        AuctionedNFTs[_collectionAddress][_tokenId].EndTime = endTime;
        AuctionedNFTs[_collectionAddress][_tokenId].Currentprice = curPrice;
        AuctionedNFTs[_collectionAddress][_tokenId].highestBidder = highestbidder;
        AuctionedNFTs[_collectionAddress][_tokenId].highestbid = 0;
        AuctionedNFTs[_collectionAddress][_tokenId].biddersFunds[highestbidder].bidAmount = 0;
        AuctionedNFTs[_collectionAddress][_tokenId].ongoing = true;
        AuctionedNFTs[_collectionAddress][_tokenId].bidsCount = 0;
        // AuctionedNFTs[block.timestamp] = 
        //                     auctionDetails(msg.sender, _collectionAddress,
        //                      _tokenId, block.timestamp, endTime, curPrice, highestbidder,
        //                     biddersFunds[highestbidder] = 0
        //                      );
        AuctionCheck[_collectionAddress].add(_tokenId);
        // nft.safeTransferFrom(AuctionedNFTs[AuctionId].seller, this, _tokenId);
        emit ItemAuctioned(msg.sender, _collectionAddress, _tokenId, curPrice);
    }

    function PlaceBid (
        address _collectionAddress,
        uint _tokenId,
        uint _bidAmout
    ) external  {
        require(AuctionedNFTs[_collectionAddress][_tokenId].Currentprice < _bidAmout, 
        "Your bid cant be less than the current highest bid"
        );
        require(AuctionedNFTs[_collectionAddress][_tokenId].EndTime > block.timestamp,
        "Auction ended"
        );
        require(AuctionedNFTs[_collectionAddress][_tokenId].ongoing = true,
        "auction is not available"
        );
        if (AuctionedNFTs[_collectionAddress][_tokenId].highestBidder == address(0)){
            return ;
        }else{
            address previousbidder = AuctionedNFTs[_collectionAddress][_tokenId].highestBidder; 
            // uint previousBid = AuctionedNFTs[_auctionId].biddersFunds[previousbidder].bidAmount;
            AuctionedNFTs[_collectionAddress][_tokenId].biddersFunds[previousbidder].canWithdraw = true;
        }
        IKRC20(USDT).safeTransfer(address(this), _bidAmout);
        bidders[_collectionAddress][_tokenId].push(bids(msg.sender, _bidAmout ));
        AuctionedNFTs[_collectionAddress][_tokenId].Currentprice  = _bidAmout;
        AuctionedNFTs[_collectionAddress][_tokenId].highestBidder = msg.sender;
        AuctionedNFTs[_collectionAddress][_tokenId].biddersFunds[msg.sender].bidAmount = _bidAmout;
        AuctionedNFTs[_collectionAddress][_tokenId].biddersFunds[msg.sender].canWithdraw = false;
        AuctionedNFTs[_collectionAddress][_tokenId].bidsCount = AuctionedNFTs[_collectionAddress][_tokenId].bidsCount + 1;
        emit bidMade (msg.sender, _collectionAddress, _tokenId, _bidAmout);
    }

    function EndAuction (
        address _collectionAddress, 
        uint _tokenId
    ) external {
        require(AuctionedNFTs[_collectionAddress][_tokenId].seller == msg.sender,
        "You are not the seller"
        );
        require(AuctionedNFTs[_collectionAddress][_tokenId].EndTime < block.timestamp,
        "You can not End Auction beforetime")
        ;
        IERC721 nft = IERC721(_collectionAddress);

        //transfer bidders funds
        if(AuctionedNFTs[_collectionAddress][_tokenId].bidsCount > 0){
            nft.safeTransferFrom(address(this), AuctionedNFTs[_collectionAddress][_tokenId].highestBidder, _tokenId);
            IKRC20(USDT).transfer( AuctionedNFTs[_collectionAddress][_tokenId].seller, AuctionedNFTs[_collectionAddress][_tokenId].highestbid);

            //end auction
            AuctionCheck[_collectionAddress].remove(_tokenId); 
            AuctionedNFTs[_collectionAddress][_tokenId].ongoing = false;
            AuctionedNFTs[_collectionAddress][_tokenId].bidsCount = 0;
        } else {
            //transfer nft
             nft.safeTransferFrom(address(this), msg.sender, _tokenId);
           
            //end auction
            AuctionCheck[_collectionAddress].remove(_tokenId); 
            AuctionedNFTs[_collectionAddress][_tokenId].ongoing = false;
            AuctionedNFTs[_collectionAddress][_tokenId].bidsCount = 0;
        }
        // AuctionedNFTs[_collectionAddress][_tokenId].seller = address(0);
        // AuctionedNFTs[_collectionAddress][_tokenId].tokenId = _tokenId;
        // AuctionedNFTs[_collectionAddress][_tokenId].startTime =  0;
        // AuctionedNFTs[_collectionAddress][_tokenId].EndTime = 0;
        // AuctionedNFTs[_collectionAddress][_tokenId].Currentprice = 0;];
        emit AuctionEnded(_collectionAddress, _tokenId);
    }

    function claimbid (
        address _collectionAddress,
        uint _tokenId
    ) public  {
        require( AuctionedNFTs[_collectionAddress][_tokenId].biddersFunds[msg.sender].bidAmount > 0, 
        "you are a thieve"
        );
        require(AuctionedNFTs[_collectionAddress][_tokenId].biddersFunds[msg.sender].canWithdraw = true,
        "cant claim, until a new bid has been made"
        );
        uint claimAmount =  AuctionedNFTs[_collectionAddress][_tokenId].biddersFunds[msg.sender].bidAmount;
        AuctionedNFTs[_collectionAddress][_tokenId].biddersFunds[msg.sender].bidAmount = 0; 
        IKRC20(USDT).transfer( msg.sender, claimAmount);
    }

    function addCollection(
        address _collection,
        address _collectionAddress
    ) external  {
        require(
            !collectionAddresses.contains(_collection),
            "Collection already exists"
        );
        require(
            IERC721(_collection).supportsInterface(0x80ac58cd),
            "Collections's NFT Standards not supported"
        );
        collectionAddresses.add(_collection);
        collection[_collection] = Collection(
            _collectionAddress,
            Status.Unverified
        );
        emit CollectionAdded(_collection);
    }

}