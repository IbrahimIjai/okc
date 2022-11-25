import {  BsMoonStars, BsSun } from "react-icons/bs";
import {useTheme} from "next-themes";
import React, { useState, useEffect} from "react";

const RenderThemeChanger= () => {

  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);


  useEffect(() =>{
    setMounted(true);
  },[])


  if(!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme ;

  if(currentTheme ==="dark"){
    return (
      <BsSun className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
    )
  }

  

  else {
    return (
      <BsMoonStars className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
    )
  }
};

export default RenderThemeChanger;