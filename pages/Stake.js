import StakeHero from "../components/stake/Heros";
import StakeCard from "../components/stake/stakeCard";
import Getstarted from "../components/FrontPage/Getstarted";
import RewardsTable from "../components/FrontPage/RewardTable";
import Faq from "../components/FrontPage/Faq";

export default function Stake() {
    return (
      <div className="flex flex-col justify-center items-center">
        <StakeHero/>
        <StakeCard/>
        <Getstarted/>
        <RewardsTable/>
        <Faq/>
      </div>
    );
  }