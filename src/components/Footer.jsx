import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const links = [
    { name: "X", icon: FaXTwitter, link: "https://x.com/FoolsGoldWorld" },
    {
      name: "Telegram",
      icon: FaTelegram,
      link: "https://t.me/+iJTex2WpXKRhMjM1",
    },
  ];

  return (
    <div className="h-max md:h-72 p-4 md:p-10 bg-[#E45048] flex flex-col md:flex-row justify-between items-center max-md:gap-10 rounded-xl overflow-x-hidden text-white">
      <div className="h-full">
        <img
          src="./logo.png"
          alt="navbar-logo"
          className="h-[25vh] mix-blend-color-dodge"
        />
      </div>
      <div className="flex flex-col justify-around items-center md:items-end max-md:gap-6 h-full">
        {/* <div className="block">
					<img
						src="./connect-button.png"
						className="max-md:w-4/5 max-md:mx-auto"
					/>
				</div> */}
        <div className="relative">
          <img
            src="./connect-button.png"
            className="max-md:w-4/5 max-md:mx-auto"
          />
          <div className="absolute inset-0 z-10 cursor-pointer scale-x-[2.20] ml-28 mt-2 opacity-0">
            <w3m-button />
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-12">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="text-3xl"
            >
              <link.icon />
            </a>
          ))}
        </div>
        <div className="flex text-xs pt-2 md:pl-12 md:text-end text-center justify-center items-center gap-x-6 uppercase max-w-lg">
          Fools Gold is a memeverse with no intrinsic value or expectation of
          financial return. There is no formal team or roadmap. the $PLONKERS
          coin and all future NFTs are for entertainment purposes only.
        </div>
      </div>
    </div>
  );
};

export default Footer;
