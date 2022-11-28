import Image from "next/image";
import Connect from "../constants/Modals/conectModal";
import DisConnectOKC from "../constants/Modals/disconnectModal";
import StakeCard from "../components/stake/stakeCard";
import LiquidityHero from "../components/liquidityy/Hero";
import MobileNavModal from "../components/NavMobile Modal/MobileNavModal";

export default function Test() {
    return (
      <div className="bg-LightGreen w-screen h-screen">
        {/* <Connect/> */}
        {/* <DisConnectOKC/> */}
        {/* <StakeCard/> */}
       {/* < LiquidityHero/> */}
       <MobileNavModal/>
      </div>
    );
  }