import { useWeb3React } from "@web3-react/core";
import { useEffect, useRef, useState } from "react";

export default function DisConnectOKC({setDisconnectModal, disconnectModal, disconnect}) {
    const ref = useRef();
    const { active, account} = useWeb3React();

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (disconnectModal && ref.current && !ref.current.contains(e.target)) {
            setDisconnectModal();
          }
        };
    
        document.addEventListener("mousedown", checkIfClickedOutside);
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside);
        };
      }, [setDisconnectModal, disconnectModal]);


    return (
      <div >
        <div className="connectModalBigDiv">
            <div className="connectCard" ref={ref}>
                <div>Disconnect your wallet</div>
                <div>

                </div>
                <div className="wallets" onClick={setDisconnectModal}>
                    <span className="walletLink" onClick={disconnect}>Disconnect</span>
                </div>
            </div>
        </div>
      </div>
    );
  }