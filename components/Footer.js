import Image from "next/image";

export default function Footer() {
    return (
      <div className="bg-LightGreen px-5 py-5 ">
        <div className="font-bold text-xl py-2">Scake</div>
        <div className="py-2">The first staking platform on the OKC Network</div>
        <div className="w-[12rem] flex flex-row justify-between py-2" >
          <Image src="/tg.png" alt="TelegramLogo" width={28} height={28}/>
          <Image src="/twitter.png" alt="TwitterLogo" width={28} height={28}/>
          <Image src="/medium.png" alt="TMediumLogo" width={28} height={28}/>
          <Image src="/discord.png" alt="DiscordLogo" width={28} height={28}/>
        </div>
        <div className="flex justify-between px-1 py-4 ">
          <div className="text-left flex flex-col gap-3">
            <p className="font-bold">About Us</p>
            <p>FAQ</p>
            <p>Medium</p>
            <p>Whitepaper</p>
          </div>

          <div className="text-right flex flex-col gap-3">
            <p className="font-bold">Contact Us</p>
            <p>Twitter</p>
            <p>Telegram</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    );
  }