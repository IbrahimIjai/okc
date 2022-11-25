
export default function RewardsTable() {
    return (
      <div className="text-DarkTextColor w-screen bg-green-100 dark:bg-BgDarkGreen flex items-center justify-center">

      <div className="rewardsTable">  
            <div className="text-DarkTextColor font-semibold">Rewards Calculator</div>
            
           
              
            <div className="pt-4">
             <div class="text-[10px] pb-1">Enter amount to stake</div>
             <div className="flex flex-row relative">
                  <input className="input" required /> 
                  <div className="inputAfter">OKC</div>
              </div>
            </div>
            <div className="rewards">
              <div className="rewardsDiv">
                <p>APY</p>
                <p>0.00</p>
              </div>
              <div className="rewardsDiv">
                <p>Monthly Rewards</p>
                <p>0.00 OKC</p>
              </div>
              <div className="rewardsDiv">
                <p>Annual Rewards</p>
                <p>0.00 OkC</p>
              </div>
            </div>
            <div>
              <button>connect Wallet</button>
            </div>
      </div>


      </div>
    );
  }
  