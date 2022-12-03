import Image from "next/image";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQueryhooks";
import { useWeb3React } from "@web3-react/core";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

  export default function LiquidityTableBtn() {
    const { active, account, chainId, library, activate, deactivate } =
    useWeb3React();
    const isDesktop = useMediaQuery('(min-width: 640px)');
    
    const AllPairs = [
        {
            pair: "OKC",
            marker: 1,
            apy: "5%",
            tvl: "$20.4M",
            me: "Staking",
            type: "Staking",
            Content: {
              currentStake: 0,
              Balance: 0,
              earning: 0,
            }
        },
        {
            pair: "OKC/BTC",
            apy: "5%",
            marker: 2,
            tvl: "$50.4M",
            me: "Staking",
            type: "Liquidity Pool",
            Content: {
              currentStake: 0,
              Balance: 0,
              earning: 0,
            }
        },
        {
            pair: "OKC/SBTC",
            marker: 2,
            apy: "5%",
            tvl: "$90.4M",
            me: "Staking",
            type: "Lending and collateral",
            Content: {
              currentStake: 0,
              Balance: 0,
              earning: 0,
            }
        },
    ]
    const[openTab, setTabOpen] = useState("");

    const Buttons = [
        {
        Id: 1,
        Title: "All",
        Content: AllPairs,
        },
        {
        Id: 2,
        Title: "Liquidity Pools",
        Content: AllPairs,
        },
        {
        Id: 3,
        Title: "Lending and collateral",
        Content: AllPairs,
        },
        {
        Id: 4,
        Title: "Provide Liquidity",
        Content: AllPairs,
        
        },
    ];

  const [CurTab, setCurTab] = useState(Buttons[0]);
console.log(CurTab.Content)
    return (
      <div className="w-screen flex flex-col justify-center items-center">
        <div className="LiquidityTableBtn">

           {
           Buttons.map((d) => {
              return (
                <div
                  key={d.Id}
                  className="TableBtn"
                  onClick={() => CurTab.Id !== d.Id && setCurTab(d)}
                  active={CurTab.Id === d.Id}
                  style={{
                    backgroundColor: CurTab.Id === d.Id ? "#0C7744" : "",
                    color: CurTab.Id === d.Id ? "#fff": "",
                  }}
                >
                  {d.Title}
                </div>
              );
            })}
        </div>
        <div className="w-screen flex flex-col justify-center items-center">
            <div className="TableHead">
                <p className="TableHeaders">Pairs</p>
                <p className="TableHeaders">Apy</p>
                <p className="TableHeaders">Deposited</p>
                <p className="TableHeaders">Provider</p>
                <p className="TableHeaders">TVL</p>
            </div>
            {
                isDesktop && CurTab.Content.map((d, i) => {
                        return (
                          <>
                            <div key={i} className="TableData">
                               <div 
                                    className="TableRow flex"
                                    onClick={openTab? ()=>{setTabOpen(null)}: ()=>{setTabOpen(d.Content)}}
                                    >
                                  {d.marker > 1 ?
                                         <div className="flex">
                                            <Image src="/Star.png" width={20} height={20} alt="stars"/>
                                            <Image src="/Star.png" width={20} height={20} alt="stars"/>
                                          </div>
                                  
                                        :<div>
                                            <Image src="/Star.png" width={20} height={20} alt="stars"/>
                                          </div>
                                  } 
                                  
                                  <div>{d.pair} </div>
                                </div>
                               <div className="TableRow"> {d.apy} </div>
                               <div className="TableRow"> {d.type} </div>
                               <div className="TableRow">{active? "Deposite": "connect wallet"}</div>
                               <div className="TableRow"> {d.tvl} </div>
                            </div>
                            <div>
                              {
                                openTab &&
                                <div>
                                  <div><button>Get {d.pair}</button></div>
                                  <div>
                                    <div><p>Earned rewards : 0.000</p></div>
                                    <p>Staked: 0.00{d.pair}</p>
                                    <p>Price of {d.pair} : $2000</p>
                                  </div>
                                  <div><button>Activate</button></div>
                                  <div>{d.pais} :  in wallet</div>

                                </div>
                              }
                            </div>
                          
                          
                          </>
                        );
                    }
                )
            }
        </div>
      </div>
    );
  }
  