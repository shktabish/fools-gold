import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
	const links = [
		{ name: "X", icon: FaXTwitter, link: "https://twitter.com/" },
		{
			name: "Facebook",
			icon: FaFacebookF,
			link: "https://www.facebook.com/",
		},
		{
			name: "LinkedIn",
			icon: FaLinkedinIn,
			link: "https://www.linkedin.com/",
		},
		{
			name: "Instagram",
			icon: FaInstagram,
			link: "https://www.instagram.com/",
		},
	];

	const data = ["cookies", "privacy policy", "terms & conditions"];

	return (
		<div className="h-max md:h-72 p-4 md:p-10 bg-[#E45048] flex flex-col md:flex-row justify-between items-center max-md:gap-10 rounded-xl overflow-x-hidden">
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
				<div className="flex justify-center items-center gap-x-6 uppercase">
					{data.map((data, index) => (
						<div
							key={index}
							className="font-helvetica font-semibold relative group cursor-pointer max-lg:text-xs"
						>
							{data}
							<span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
