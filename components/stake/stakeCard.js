import Image from "next/image";


  export default function StakeCard() {
    return (
        <div className="w-screen flex flex-col lg:flex-row items-center w-screen justify-center">
            <div className="StakeBag">
                <p>Stake</p>
                <div className="StakeCardContainer">
                        <div className="StakeCardHead">
                            <div>
                                <div className="flex flex-row  ">
                                    <Image src="/folder.png" width={30} height={30} alt="folder"/>
                                    <p className="font-bold"> OKC</p>
                                </div>
                                <div><p>Balance: 0 0KC</p></div>
                            </div>
                            <div>0.00</div> 
                        </div>

                        <div className="StakeCardMiddle">
                            <div className="flex flex-col gap-4">
                                <p className="font-bold">You will recieve</p>
                                <div  className="flex  items-center justify-center gap-4">
                                    <Image src="/folder.png" width={30} height={30} alt="folder"/>
                                    <div><p className="font-semibold">OKC</p></div>
                                </div>
                                <div> Balance : 0.00</div>
                            </div>
                            <div><p>0.00</p></div>
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
                                <Image src="/folder.png" width={30} height={30} alt="folder"/>
                                <p className="font-bold"> OKC</p>
                            </div>
                            <div><p>Balance: 0 0KC</p></div>
                        </div>
                        <div>0.00</div> 
                    </div>

                    <div className="StakeCardMiddle">
                        <div className="flex flex-col gap-4">
                            <p className="font-bold">You will recieve</p>
                            <div  className="flex  items-center justify-center gap-4">
                                <Image src="/folder.png" width={30} height={30} alt="folder"/>
                                <div><p className="font-semibold">OKC</p></div>
                            </div>
                            <div> Balance : 0.00</div>
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
  