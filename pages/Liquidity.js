import LiquidityHero from "../components/liquidityy/Hero";
import Getstarted from "../components/FrontPage/Getstarted";
import RewardsTable from "../components/FrontPage/RewardTable";
import Faq from "../components/FrontPage/Faq";
import LiquidityTableBtn from "../components/liquidityy/Table";

export default function Home() {

  return (
    
    <div className="flex flex-col justify-center items-center ">
        <LiquidityHero/>
        <LiquidityTableBtn/>
    </div>
  )
}
