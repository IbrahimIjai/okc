import Image from "next/image";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQueryhooks";

  export default function LiquidityTableBtn() {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const AllPairs = [
        {
            pair: "OKC",
            marker: 1,
            apy: "5%",
            tvl: "$30.4M",
            me: "Staking",
            type: "Staking"
        },
        {
            pair: "OKC/BTC",
            apy: "5%",
            marker: 2,
            tvl: "$30.4M",
            me: "Staking",
            type: "Liquidity Pool"
        },
        {
            pair: "OKC/SBTC",
            marker: 2,
            apy: "5%",
            tvl: "$30.4M",
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
                CurTab.Content.map((d, i) => {
                        return (
                            <div key={i} className="TableData">
                                {d.pair}
                            </div>
                        );
                    }
                )
            }
        </div>
      </div>
    );
  }
  