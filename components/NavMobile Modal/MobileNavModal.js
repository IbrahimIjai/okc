import Link from "next/link";
import { useRouter } from "next/router";


export default function MobileNavModal({toggleModal, openModal}) {
  const router = useRouter();
 const curRoute = router.pathname;
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
    <div className=" absolute top-[8vh] z-10 bg-green-200 flex items-center 
                      justify-center w-screen h-screen">
        <div className="flex flex-col items-center justify-center
                       px-[6rem] mt-[-8rem] rounded-lg ">

            {
            navLinks.map(( d) => {
                return (
                <div key={d.Id}
                    className={` py-6 font-semibold ${curRoute==d.Link ? "scale-125 " : ""} `}
                    onClick={toggleModal}
                    >
                      
                    <Link href={d.Link}>
                    <a> {d.Title}</a>
                    </Link>
                </div>
                );
                })
            }
        </div>

    </div>
  );
}
