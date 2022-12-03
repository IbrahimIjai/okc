import { Contract, ethers } from "ethers";

const protocolABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "byteData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimFees",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "byteData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_homeScore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_awayScore",
        type: "uint256",
      },
    ],
    name: "closeMatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_HomeTeam",
        type: "string",
      },
      {
        internalType: "string",
        name: "_AwayTeam",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
    ],
    name: "instantiateMatch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "Pause",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_reason",
        type: "string",
      },
    ],
    name: "pauseProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "enum DistantFinancePrediction.Choices",
        name: "_predictionChoice",
        type: "uint8",
      },
    ],
    name: "placePrediction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum DistantFinancePrediction.Choices",
        name: "choice",
        type: "uint8",
      },
    ],
    name: "PredictionMade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum DistantFinancePrediction.Choices",
        name: "choice",
        type: "uint8",
      },
    ],
    name: "PredictionUpdate",
    type: "event",
  },
  {
    inputs: [],
    name: "recoverContractBalance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "byteData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "Unpause",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "homeTeamScore",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "awayTeamScore",
        type: "uint256",
      },
    ],
    name: "closeMatchEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "homeTeam",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "awayTeam",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
    ],
    name: "instantiateMatchEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_reason",
        type: "string",
      },
    ],
    name: "unpauseProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_HomeTeam",
        type: "string",
      },
      {
        internalType: "string",
        name: "_AwayTeam",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
    ],
    name: "updateInstantiatedMatch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "homeTeam",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "awayTeam",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
    ],
    name: "updateMatchEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "enum DistantFinancePrediction.Choices",
        name: "_predictionChoice",
        type: "uint8",
      },
    ],
    name: "updatePrediction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allGames",
    outputs: [
      {
        internalType: "string",
        name: "HomeTeam",
        type: "string",
      },
      {
        internalType: "string",
        name: "AwayTeam",
        type: "string",
      },
      {
        internalType: "uint16",
        name: "homeCount",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "awayCount",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "drawCount",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "predictionsValue",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "Home_score",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "Away_score",
            type: "uint256",
          },
        ],
        internalType: "struct DistantFinancePrediction.Results",
        name: "results",
        type: "tuple",
      },
      {
        internalType: "enum DistantFinancePrediction.Choices",
        name: "gameResult",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "fetchAddressAndPredictions",
    outputs: [
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
      {
        internalType: "enum DistantFinancePrediction.Choices[]",
        name: "choice",
        type: "uint8[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "fetchAllPredictionsForAnEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "getPlayers",
    outputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBetValuePlaced",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userPrediction",
    outputs: [
      {
        internalType: "enum DistantFinancePrediction.Choices",
        name: "userPredictionChoice",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "winAmounts",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stake",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "played",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const abi = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const protocolAddress = "0x962a4663818a7E3f0d44Fc62354ee54739A9B702";
const token = "0x0039f574ee5cc39bdd162e9a88e3eb1f111baf48";
const okex = "https://rpc-mainnet.kcc.network";
const provider = new ethers.providers.JsonRpcProvider(okex);
const protocol = new Contract(protocolAddress, protocolABI, provider);
const deadAddress = "0x0000000000000000000000000000000000000000";
const queryHost = "https://qatar.distant.finance";
const okc = new Contract(token, abi, provider);
const CUSDT = "0x1298808344aD08A76dCB381A4797810e87ED2685";
const Stakingpool = "0x02fCFb90ba1A3f20f985Be636b0f2a8E227bDC92";
const usdt = "0x0039f574ee5cc39bdd162e9a88e3eb1f111baf48";

const contracts = {
  protocolAddress,
  okex,
  deadAddress,
  provider,
  protocol,
  queryHost,
  okc,
  CUSDT,
  Stakingpool,
  usdt,
};

export { protocolABI, contracts, abi };
