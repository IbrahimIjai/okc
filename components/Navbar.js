import RenderThemeChanger from "./Switch";
import Link from "next/link";
import Connect from "../constants/Connect";
import useMediaQuery from "./hooks/useMediaQueryhooks";
import MobileNavModal from "./NavMobile Modal/MobileNavModal";
import { ImMenu } from "react-icons/im";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navar() {
  const isDesktop = useMediaQuery('(min-width: 640px)');
  const [openModal, setModal] = useState(false);
  const router = useRouter();
  const curRoute = router.pathname;
  const toggleModal = () => {
    setModal(!openModal)
  }
  const navLinks = [
    {
      Id: 1,
      Title: "Home",
      Link: "/",
      },
    {
      Id: 2,
      Title: "Stake",
      Link: "/Stake",
      },
      {
        Id: 3,
        Title: "Liquidity",
        Link: "/Liquidity",
        },
        {
          Id: 2,
          Title: "About us",
          Link: "/About",
          },
  ]

  return (
    <div>
      <div className="NavContainer" >
        <div className="NavLeft">
          {isDesktop ? "" : <div onClick={toggleModal}><ImMenu/></div>}
          <div className="Logo">Scake</div>
        </div>
        <div className="NavLinks">
          
          {
            isDesktop && navLinks.map(( d) => {
              return (
                <div 
                      key={d.Id} 
                      className={`px-1 lg:px-4 ${curRoute==d.Link ? "scale-130 text-LightText dark:text-white border-b-4 border-LightText" : ""}`}
                >
                  <Link href={d.Link}>
                    <a> {d.Title}</a>
                  </Link>
                </div> 
              );
            })
          }
        </div>

        <div className="Btns">
          <div className="border-2 rounded-md border-Text-green text-Text-green px-2 mx-3 py-1"><Connect/></div>
          <RenderThemeChanger/>
        </div>
      </div>
      <div>
        {
         isDesktop ? "" : openModal && <MobileNavModal openModal={openModal} toggleModal={toggleModal}/>
        }
      </div>
    </div>
  
  );
}


