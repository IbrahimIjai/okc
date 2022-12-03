import React, { useState } from "react";
import TableHelper from "./TableHelper";
// import { id } from 'ethers/lib/utils';
import Image from "next/image";

export default function Table11() {
  const faq = [
    {
      id: 1,
      data: [{
                pair: "OKC",
                marker: 1,
                apy: "5%",
                tvl: "$20.4M",
                me: "Staking",
                type: "Staking",
             }],
      Head: (
            data.map((d) => {
            return(
            <div key={i} className="TableData">
                <div  className="TableRow flex">
                    {d.marker > 1 ?
                            <div className="flex">
                                <Image src="/Star.png" width={20} height={20} alt="stars"/>
                                <Image src="/Star.png" width={20} height={20} alt="stars"/>
                            </div>
                        :   <div>
                                <Image src="/Star.png" width={20} height={20} alt="stars"/>
                            </div>
                    } 
                    <div>{d.pair}</div>
                </div>
                <div className="TableRow"> {d.apy} </div>
                <div className="TableRow"> {d.type} </div>
                <div className="TableRow">{active? "Deposite": "connect wallet"}</div>
                <div className="TableRow"> {d.tvl} </div>
            </div>
            )
            })
        ),
      Body: (
        data.map((d, i) => {
            return(
            <div key={i}>
                <div><button>Get {d.pair}</button></div>
                <div>
                <div><p>Earned rewards : 0.000</p></div>
                <p>Staked: 0.00{d.pair}</p>
                <p>Price of {d.pair} : $2000</p>
                </div>
                <div><button>Activate</button></div>
                <div>{d.pais} :  in wallet</div>
            </div>
            )}
      ))
    },
    {
        id: 2,
        data: [{
            pair: "OKC",
            marker: 1,
            apy: "5%",
            tvl: "$20.4M",
            me: "Staking",
            type: "Staking",
         }],
        Head: (
            data.map((d) => {
            return(
            <div key={i} className="TableData">
                <div  className="TableRow flex">
                    {d.marker > 1 ?
                            <div className="flex">
                                <Image src="/Star.png" width={20} height={20} alt="stars"/>
                                <Image src="/Star.png" width={20} height={20} alt="stars"/>
                            </div>
                        :   <div>
                                <Image src="/Star.png" width={20} height={20} alt="stars"/>
                            </div>
                    } 
                    <div>{d.pair}</div>
                </div>
                <div className="TableRow"> {d.apy} </div>
                <div className="TableRow"> {d.type} </div>
                <div className="TableRow">{active? "Deposite": "connect wallet"}</div>
                <div className="TableRow"> {d.tvl} </div>
            </div>
            )
            })
        ),
        Body: (
            data.map((d, i) => {
                return(
                <div key={i}>
                    <div><button>Get {d.pair}</button></div>
                    <div>
                    <div><p>Earned rewards : 0.000</p></div>
                    <p>Staked: 0.00{d.pair}</p>
                    <p>Price of {d.pair} : $2000</p>
                    </div>
                    <div><button>Activate</button></div>
                    <div>{d.pais} :  in wallet</div>
                </div>
                )}
          ))
      },
      {
        id: 3,
        data: [{
            pair: "OKC",
            marker: 1,
            apy: "5%",
            tvl: "$20.4M",
            me: "Staking",
            type: "Staking",
         }],
        Head: (
            data.map((d) => {
            return(
            <div key={i} className="TableData">
                <div  className="TableRow flex">
                    {d.marker > 1 ?
                            <div className="flex">
                                <Image src="/Star.png" width={20} height={20} alt="stars"/>
                                <Image src="/Star.png" width={20} height={20} alt="stars"/>
                            </div>
                        :   <div>
                                <Image src="/Star.png" width={20} height={20} alt="stars"/>
                            </div>
                    } 
                    <div>{d.pair}</div>
                </div>
                <div className="TableRow"> {d.apy} </div>
                <div className="TableRow"> {d.type} </div>
                <div className="TableRow">{active? "Deposite": "connect wallet"}</div>
                <div className="TableRow"> {d.tvl} </div>
            </div>
            )
            })
        ),
        Body: (
            data.map((d, i) => {
                return(
                <div key={i}>
                    <div><button>Get {d.pair}</button></div>
                    <div>
                    <div><p>Earned rewards : 0.000</p></div>
                    <p>Staked: 0.00{d.pair}</p>
                    <p>Price of {d.pair} : $2000</p>
                    </div>
                    <div><button>Activate</button></div>
                    <div>{d.pais} :  in wallet</div>
                </div>
                )}
          ))
      },
   
  ];

  return (
    <div className="flex flex-col items-center w-screen bg-green-100 dark:bg-BgDarkGreen">
      <div className="topicHead">
        <h3> Frequently Asked Question</h3>
      </div>
      <div className="questionsContainer">
        {faq.map((d, i) => {
          return (
            <div key={d.id}>
              <TableHelper id={d.id} Body={d.Body} Head={d.Head} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
