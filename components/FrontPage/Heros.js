export default function Heros() {
    return (
      <div 
      className="font-roboto  w-screen h-[90vh] mt-[-14vh]
      bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400 dark:from-BgLightGreen to-white dark:via-BgDarkGreen  dark:to-BgDarkGreen">

        <div className="mt-[18rem]  flex flex-col items-center justify-around gap-4 px-3">
          <div className="text-[30px] text-center font-bold ">A Liquidity Staking Platform For The OKC Ecosystem</div>
          <div className="text-[20px] text-center py-6">Hop into the first liquidity staking platform on the OKC Ecosystem and enjoy the best of DeFi investments with our mouthwatering APY</div>
          <div className="flex flex-row">
              <button className="mx-2 border-2 rounded-md border-Text-green text-Text-green px-2 py-1">Stake</button>
              <button className="mx-2 text-[#fff] bg-Text-green border-2 rounded-md border-Text-green text-Text-green px-2 py-1">Get Started</button>
          </div>
        </div>


      </div>
    );
  }
  