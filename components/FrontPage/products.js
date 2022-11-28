import Image from "next/image";
import {useTheme} from "next-themes";

export default function Products() {
    const product = [
        {
            name: "Liquidity Staking",
            Description: "Liquidity will be keep improving constantly to avoid extreme case of illiquidity",
            image: "/Shield.png",
            image2: "/darkShield.png",
        },
        {
            name: "Security",
            Description: "Liquidity will be keep improving constantly to avoid extreme case of illiquidity",
            image: "/Shield.png",
            image2: "/darkShield.png"
        },
        {
            name: "Decentralization",
            Description: "Liquidity will be keep improving constantly to avoid extreme case of illiquidity",
            image: "/Decentral.png",
            image2: "/darkDecentral.png"
        },
    ]
    const {systemTheme , theme, setTheme} = useTheme ();
    return (
      <div className="flex flex-col items-center w-screen bg-green-100 dark:bg-BgDarkGreen lg:h-[65vh]">
        <div className=" topicHead">What we Offer</div>
        <div className="cardContainer">
            {
                product.map((p, i) => {
                    return (
                            <div key={i} className="card"> 
                                <div className="lg:pt-8" ><Image src={theme=="dark" ? p.image2: p.image} width={30} height={30} alt="Logo"/></div>
                                
                                <div className="py-3 text-[1.3rem] font-semibold ">{p.name}</div>
                                <div className="py-2 lg:px-4 lg:pb-8">{p.Description}</div>
                            </div>
                    )
                })
            }
        </div>
      </div>
    );
  }
  