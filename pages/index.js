// import styles from "../styles/HHome.module.css"
import react, { useState } from "react";

import { useTheme } from "next-themes";
import Heros from "../components/FrontPage/Heros";
import Products from "../components/FrontPage/products";
import Getstarted from "../components/FrontPage/Getstarted";
import RewardsTable from "../components/FrontPage/RewardTable";
import Faq from "../components/FrontPage/Faq";

export default function Home() {
  const { theme, setTheme} = useTheme()

  return (
    
    <div className="flex flex-col justify-center items-center ">
        <Heros/>
        <Products/>
        <Getstarted/>
        <RewardsTable/>
        <Faq/>
    </div>
  )
}
