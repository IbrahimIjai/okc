import RenderThemeChanger from "./Switch";
import Link from "next/link";
import Connect from "../constants/Connect";


export default function Navar() {
  return (
    <div className="NavContainer" >
      <div className="Logo">Scake</div>
      <div className="NavLinks">
            <div >
              <Link href="/collections">
                <a> Home</a>
              </Link>
            </div>
            <div >
              <Link href="/Stake">
                <a> Stake</a>
              </Link>
            </div>
            <div >
              <Link href="/Liquidity">
                <a> Liquidity</a>
              </Link>
            </div>
            <div >
              <Link href="/About">
                <a> About us</a>
              </Link>
            </div>
      </div>
      <div className="Btns">
        <RenderThemeChanger/>
        <button className="border-2 rounded-md border-Text-green text-Text-green px-2 py-1" >Connect Wallet</button>
        <Connect/>
      </div>
    </div>
  );
}


