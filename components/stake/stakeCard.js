import Image from "next/image";
import {useTheme} from "next-themes";
import { useState } from "react";

  export default function StakeCard(
                                        {
                                            unStakeLoading, setStakeAmount, stakeLoading,
                                            getRewards, unStake,
                                            Rewards,stakingBal, usdtBalance,
                                        }
                                    ) {
    const {systemTheme , theme, setTheme} = useTheme ();
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className="w-screen flex flex-col lg:flex-row items-center justify-center">
            <div className="StakeBag">
                <p>Stake</p>
                <div className="StakeCardContainer">
                        <div className="StakeCardHead">
                            <div>
                                <div className="flex flex-row  ">
                                    <Image src="/folder.png" width={30} height={30} alt="folder"/>
                                    <p className="font-bold"> OKC</p>
                                </div>
                                <div><p>Balance: {usdtBalance}USDT</p></div>
                            </div>
                            {/* <div>0.00</div>  */}
                        </div>
                        <div className="StakeCardMiddle">
                            <div className="flex flex-col gap-4">
                                <p className="font-bold">You will recieve</p>
                                <div  className="flex  items-center justify-center gap-4">
                                    <Image src="/folder.png" width={30} height={30} alt="folder"/>
                                    <div><p className="font-semibold">OKC</p></div>
                                </div>
                                <div> Balance : {usdtBalance}</div>
                            </div>
                            <div><p>{usdtBalance}</p></div>
                        </div>

                        <div className="StakeBtn"><button>Stake OKC</button></div>
                        <div className="StakeTable">
                            <div className="StakeTableLef">
                                <p>Exchange Rate</p>
                                <p>Deposite fees</p>
                                <p>Staking APY</p>
                            </div>
                            <div className="StakeTableRight ">
                                <p>1 sOKC = 1.06 OKC</p>
                                <p>0%</p>
                                <p>6.5%</p>
                            </div>
                        </div>

                </div>
            </div>

        <div className="StakeBag">
            <p>UnStake</p>
            <div className="StakeCardContainer">
                    <div className="StakeCardHead">
                        <div>
                            <div className="flex flex-row  ">
                                <Image src={theme == "dark" ? "/darkfolder.png": "/folder.png"} width={30} height={30} alt="folder"/>
                                <p className="font-bold"> OKC</p>
                            </div>
                            <div><p>Stake Balance: {stakingBal} USDT</p></div>
                        </div>
                        {/* <div>0.00</div>  */}
                    </div>

                    <div className="StakeCardMiddle">
                        <div className="flex flex-col gap-4">
                            <p className="font-bold">YStaking Rewards</p>
                            <div  className="flex  items-center justify-center gap-4">
                                <Image src={theme == "dark" ? "/darkfolder.png": "/folder.png"} width={30} height={30} alt="folder"/>
                                <div><p className="font-semibold">OKC</p></div>
                            </div>
                            {/* <div> Balance : 0.00</div> */}
                        </div>
                        <div><p>0.00</p></div>
                    </div>

                    <div className="StakeBtn"><button>Stake OKC</button></div>
                    <div className="StakeTable mb-[3.1rem]">
                        <div className="StakeTableLeft">
                            <p>Exchange Rate</p>
                        </div>
                        <div className="StakeTableRight ">
                            <p>1 sOKC = 1.06 OKC</p>
                        </div>
                    </div>

            </div>
        </div>
        </div>
    );
  }
  

//   staking contracnt  0x02fCFb90ba1A3f20f985Be636b0f2a8E227bDC92 mainnet
// cusdt contract 0x1298808344aD08A76dCB381A4797810e87ED2685
