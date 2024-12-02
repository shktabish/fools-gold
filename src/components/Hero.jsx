const HeroSection = () => {
	return (
		<div className="relative bg-black text-white rounded-xl overflow-hidden h-[65dvh] sm:h-[90dvh] w-full">
			{/* Background TV Animation */}
			<div className="absolute inset-0 z-0">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="w-full h-full object-cover"
				>
					<source src="/HeroAnimation.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

			{/* Top-right Star */}
			<img
				src="./rightstar.png"
				alt="Star"
				className="absolute right-0 top-0 max-w-[50%] sm:max-w-96 z-5"
			/>

			{/* Bottom-left Star */}
			<img
				src="./leftstar.png"
				alt="Star"
				className="absolute left-0 bottom-0 max-w-[50%] sm:max-w-96 z-5"
			/>

			{/* Content */}
			<div className="relative z-10 sm:px-6 sm:py-4 h-full">
				<div className="space-y-4 max-w-full flex flex-col sm:flex-row sm:items-start h-full justify-between items-center text-center sm:text-start">
					{/* Heading */}
					<div className="">
						<h1
							className="font-mistral text-2xl sm:text-3xl md:text-5xl max-w-sm lg:text-5xl mt-4 mb-2 italic"
							style={{ fontFamily: "Helvetica, cursive" }}
						>
							Welcome to the world of
						</h1>
						<h2
							className="font-mistral text-6xl lg:text-9xl max-w-sm"
							style={{
								fontFamily: "Mistral, cursive",
								textShadow: "brown 4px 4px",
							}}
						>
							FOOLS GOLD
						</h2>
					</div>

					{/* Subheading */}
					<div className="md:max-w-sm w-full backdrop-blur-sm md:backdrop-blur-none sm:text-end sm:self-end md:pb-12 lg:pb-48 md:scale-90 lg:scale-100">
						<h1
							className="font-mistral text-3xl md:text-4xl lg:text-7xl md:mb-2 uppercase"
							style={{ fontFamily: "Mistral, cursive" }}
						>
							The First Crypto Memeworld
						</h1>
						<h2 className="font-helvetica italic text-sm md:text-2xl lg:text-3xl">
							where the collection of ecosystem points link directly to NFTS
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
