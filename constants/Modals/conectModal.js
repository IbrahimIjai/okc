import Image from "next/image";
import { BsBoxArrowUpRight, BsClipboard } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";



export default function ConnectOKC({closeModal, connectModal, connect, connectWC}) {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (connectModal && ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [closeModal,connectModal]);

    return (
      <div >
          <div className="connectModalBigDiv"  >
            <div className="connectCard"  ref={ref}>
              <p className="cP">Connect Wallet</p>
              <div className="wallets">
                <div className="walletLink"
                      onClick={connect}
                      >
                  <span>Metamask</span>
                </div>
                <div className="walletLink"
                 onClick={connect}
                  >
                  <span>TokenPocket</span>
                </div>
                <div className="walletLink"
                  onClick={connectWC}
                  >
                  <span>WalletConnect</span>
                </div>
              </div>
            </div>


            </div>

      </div>
    );
  }