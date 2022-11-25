import useMediaQuery from "../hooks/useMediaQueryhooks"
import Image from "next/image";
export default function Getstarted() {
  
  const isDesktop = useMediaQuery('(min-width: 960px)');


    const data = [
      {
        text: "Connect wallet",
        image: "/folder.png",
        mobileArrow: "/mobileArrow.png",
        desktopArrow: "/desktopArrow.png"
      },
      {
        text: "Stake OKC",
        image: "/stake.png",
        mobileArrow: "/mobileArrow.png",
        desktopArrow: "/desktopArrow.png"
      },
      {
        text: "Recieve sOKC",
        image: "/recieveOKC.png",
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
                  <Image src={d.image} width={30} height={30} alt="a folder image"/>
                  <div>{d.text}</div>
                </div>
                <div><Image src={isDesktop ? d.desktopArrow : d.mobileArrow} width={isDesktop ? 50 : 20} height={isDesktop ? 17 : 40} alt="arrow"/></div>
              </div>
              )
            })
          }
          
              <div className= "getStartDivContainer">
                <div className="getStartDiv">
                  <Image src="/guard.png" width={30} height={30} alt="a folder image"/>
                  <div>Use sOKC</div>
                </div>
              </div>

        </div>
      </div>
    );
  }
  