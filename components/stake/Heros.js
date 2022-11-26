import Image from "next/image";


  export default function StakeHero() {
    return (
      <div 
      className="HerosPages">

        <div className="HeroContainer">
          <div className="text-[30px] text-center font-bold ">Stake OKC</div>
          <div className="text-[20px] text-center py-6">Stake OKC, explore and enjoy your staking rewards</div>
          <div className="StakeBalanceCard"> 
              <Image src="/folder.png" width= {30} height= {30} alt="a folder imager"/>
              <div className="StakeCardMiddle">
                <p>Available Balance</p>
                <p className="font-bold">0.00OKC</p>
              </div>
              <p className="text-[1rem]">Get sOKC</p>
          </div>
        </div>


      </div>
    );
  }
  