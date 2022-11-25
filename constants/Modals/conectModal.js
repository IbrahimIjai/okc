import Image from "next/image";
import { BsBoxArrowUpRight, BsClipboard } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";


export default function ConnectOKC({closeModal}) {
    return (
      <div className="conDicv">
            <div className="connectModalBigDiv" onClick={closeModal}>
              <div className="connectCard">
                <p className="cP">Connect Wallet</p>
                <div className="wallets">
                  <div className="walletLink"
                        // onClick={connect}
                        >
                    <span>Metamask</span>
                  </div>
                  <div className="walletLink"
                //    onClick={connect}
                   >
                    <span>TokenPocket</span>
                  </div>
                  <div className="walletLink"
                    // onClick={connectWC}
                    >
                    <span>WalletConnect</span>
                  </div>
                </div>
              </div>


            </div>

      </div>
    );
  }