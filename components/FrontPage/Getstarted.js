import useMediaQuery from "../hooks/useMediaQueryhooks"
import Image from "next/image";
import {useTheme} from "next-themes";

export default function Getstarted() {
  
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const {systemTheme , theme, setTheme} = useTheme ();

    const data = [
      {
        text: "Connect wallet",
        image: "/folder.png",
        image2: "/darkfolder.png",
        mobileArrow: "/mobileArrow.png",
        desktopArrow: "/desktopArrow.png"
      },
      {
        text: "Stake OKC",
        image: "/stake.png",
        image2: "/darkstake.png",
        mobileArrow: "/mobileArrow.png",
        desktopArrow: "/desktopArrow.png"
      },
      {
        text: "Recieve sOKC",
        image: "/recieveOKC.png",
        image2: "/darkrecieveOKC.png",
        mobileArrow: "/mobileArrow.png",
        desktopArrow: "/desktopArrow.png"
      },
    ]

    return (
      <div className="getStarted">
        <div className="font-bold text-[2rem] dark:text-LightGreen pt-8">How to get started</div>
        <div className="py-4 mt-2 flex flex-col lg:flex-row">
          {
            data.map((d, i) => {
              return (
              <div key={i} className= "getStartDivContainer">
                <div className="getStartDiv">
                  <Image src={theme == "dark" ? d.image2: d.image} width={30} height={30} alt="a folder image"/>
                  <div>{d.text}</div>
                </div>
                <div><Image src={isDesktop ? d.desktopArrow : d.mobileArrow} width={isDesktop ? 50 : 20} height={isDesktop ? 17 : 40} alt="arrow"/></div>
              </div>
              )
            })
          }
          
              <div className= "getStartDivContainer">
                <div className="getStartDiv">
                  <Image src={theme == "dark" ? "/darkguard.png": "/guard.png"} width={30} height={30} alt="a folder image"/>
                  <div>Use sOKC</div>
                </div>
              </div>

        </div>
      </div>
    );
  }
  