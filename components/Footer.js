import Image from "next/image";

export default function Footer() {
    return (
      <div className="bg-LightGreen px-12 py-8 w-screen flex items-center justify-center">
        <div className="lg:flex items-center  w-[90%]
        justify-between ">
          <div className="lg:w-[50%] dark:text-Black ">
            <div className="font-bold text-xl py-2">Scake</div>
            <p className="py-2 md:text-[1.2rem]">The first staking platform on the OKC Network</p>
            <div className="w-[12rem] flex flex-row justify-between py-2" >
              <Image src="/tg.png" alt="TelegramLogo" width={28} height={28}/>
              <Image src="/twitter.png" alt="TwitterLogo" width={28} height={28}/>
              <Image src="/medium.png" alt="TMediumLogo" width={28} height={28}/>
              <Image src="/discord.png" alt="DiscordLogo" width={28} height={28}/>
            </div>          
          </div>

          <div className="flex justify-between px-1 py-4 md:text-[1rem] lg:w-[35%] dark:text-Black ">
            <div className="text-left flex flex-col gap-3">
              <p className="font-semibold">About Us</p>
              <p>FAQ</p>
              <p>Medium</p>
              <p>Whitepaper</p> 
            </div>

            <div className="text-right flex flex-col gap-3 ">
              <p className="font-semibold">Contact Us</p>
              <p>Twitter</p>
              <p>Telegram</p>
              <p>Email</p>
            </div>
          </div>
        </div>

      </div>

    );
  }