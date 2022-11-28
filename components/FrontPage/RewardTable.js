
export default function RewardsTable() {
    return (
      <div className="text-DarkTextColor w-screen bg-green-100 
                  dark:bg-BgDarkGreen flex items-center justify-center">

      <div className="rewardsTable lg:scale-150 lg:mt-[8rem] lg:mb-[8rem] border border-LightGreen">  
            <div className="text-DarkTextColor font-semibold">Rewards Calculator</div>
            
           
            <div className="">
              <div className="pt-4">
                <div class="text-[12px] pb-3">Enter amount to stake</div>
                <div className="flex flex-row relative">
                      <input className="input" required /> 
                      <div className="inputAfter">OKC</div>
                </div>
              </div>
              <div className="rewards"> 
                <div className="rewardsDiv">
                  <p className="font-bold"> APY</p>
                  <p>0.00</p>
                </div>
                <div className="rewardsDiv">
                  <p className="font-bold">Monthly Rewards</p>
                  <p>0.00 OKC</p>
                </div>
                <div className="rewardsDiv">
                  <p className="font-bold">Annual Rewards</p>
                  <p>0.00 OkC</p>
                </div>
              </div>              
            </div>  

            <div>
              <button>connect Wallet</button>
            </div>
      </div>


      </div>
    );
  }
  