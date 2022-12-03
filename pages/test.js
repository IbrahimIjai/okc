import Image from "next/image";
import Connect from "../constants/Modals/conectModal";
import DisConnectOKC from "../constants/Modals/disconnectModal";
import StakeCard from "../components/stake/stakeCard";
import LiquidityHero from "../components/liquidityy/Hero";
import MobileNavModal from "../components/NavMobile Modal/MobileNavModal";
import Table11 from "../components/liquidityy/Table1";
import StakeModal from "../components/stake/Modal/stakeModal";

export default function Test() {
    return (
      <div className="bg-LightGreen w-screen h-screen">
        {/* <Connect/> */}
        {/* <DisConnectOKC/> */}
        {/* <StakeCard/> */}
       {/* < LiquidityHero/> */}
       {/* <MobileNavModal/> */}
       {/* <Table11/> */}
       <StakeModal/>
      </div>
    );
  }