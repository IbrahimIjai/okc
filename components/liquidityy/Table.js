import Image from "next/image";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQueryhooks";
import { useWeb3React } from "@web3-react/core";

  export default function LiquidityTableBtn() {
    const { active, account, chainId, library, activate, deactivate } =
    useWeb3React();
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const AllPairs = [
        {
            pair: "OKC",
            marker: 1,
            apy: "5%",
            tvl: "$15.4M",
            me: "Staking",
            type: "Staking"
        },
        {
            pair: "OKC/BTC",
            apy: "5%",
            marker: 2,
            tvl: "$50.4M",
            me: "Staking",
            type: "Liquidity Pool"
        },
        {
            pair: "OKC/SBTC",
            marker: 2,
            apy: "5%",
            tvl: "$90.4M",
            me: "Staking",
            type: "Lending and collateral"
        },
    ]


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
                <p className="TableHeaders">TVL</p>
                <p className="TableHeaders">Provider</p>
                <p>{"          "}</p>
            </div>
            {
                isDesktop && CurTab.Content.map((d, i) => {
                        return (
                            <div key={i} className="TableData">
                               <div className="TableRow flex ">
                                  {d.marker > 1 ?
                                         <div className="flex">
                                            <Image src="/Star.png" width={15} height={15} alt="stars"/>
                                            <Image src="/Star.png" width={15} height={15} alt="stars"/>
                                          </div>
                                  
                                        :<div>
                                            <Image src="/Star.png" width={15} height={15} alt="stars"/>
                                          </div>
                                  } 
                                  
                                  <div>{d.pair} </div>
                                </div>
                               <div className="TableRow"> {d.apy} </div>
                               <div className="TableRow"> {d.tvl} </div>
                               <div className="TableRow"> {d.type} </div>
                               <div>{active? "Deposite": "connect wallet"}</div>
                            </div>
                        );
                    }
                )
            }
        </div>
      </div>
    );
  }
  