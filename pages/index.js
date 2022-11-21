import styles from "../styles/HHome.module.css"
import react, { useState } from "react";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme} = useTheme()

  return (
    
    <div className="flex flex-col justify-center items-center">
      yooo
    </div>
  )
}