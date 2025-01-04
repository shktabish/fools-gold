export default function Telegram() {
	return (
		<div className="min-h-[85dvh] bg-[#E03938] p-2 md:p-4 lg:p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 md:grid-rows-[30%_60%] place-content-between md:gap-6 gap-2">
			<div
				className="md:col-span-2 bg-[#FFD677] grid grid-cols-1 md:grid-cols-[50%_10%_40%] xl:grid-cols-[60%_10%_30%] p-4 lg:p-6 rounded-lg md:rounded-xl h-fit relative bg-no-repeat bg-contain bg-left"
				style={{ backgroundImage: "url(/fullstar.png)" }}
			>
				<p className="font-mistral uppercase md:text-end text-center md:col-span-3 text-lg lg:text-3xl text-[#D73939] w-full col-span-1">
					Don&apos;t be a plonker you know it makes sense this time
					next year
				</p>
				<div
					className="text-6xl md:text-8xl xl:text-9xl font-mistral uppercase text-[#E03938] text-center md:text-start"
					style={{ textShadow: "white 4px 4px 1px" }}
				>
					Lovely jubbly
				</div>
				<img
					src="/sparkle.png"
					alt="sparkle image"
					className="h-[100%] place-content-center my-auto hidden md:block"
				/>
				<div className="font-mistral uppercase text-2xl md:text-5xl lg:text-7xl text-[#D73939] md:text-end text-center w-full col-span-1">
					we&apos;ll be millionaires
				</div>
			</div>
			<div className="h-full bg-white md:rounded-xl rounded-lg lg:p-8 space-y-4 flex flex-col md:items-start items-center justify-center relative overflow-hidden p-4">
				<img
					src="./bg-effect.png"
					alt="bg-effect image"
					className="absolute inset-0 z-10 opacity-5"
				/>
				<p className="font-helvetica font-bold italic text-[#D73939] text-sm md:text-lg lg:text-2xl text-center md:text-start z-20 relative">
					This meme ecosystem is a complete world that captures the
					essence of cheeky charm and good old-fashioned savvy. Like
					Del Boy and Rodney&apos;s outrageous schemes, our coin is
					about seizing opportunities to generate Cushty ATHs!
				</p>
				<div className="z-20 relative w-full flex justify-center md:justify-start">
					<a href="https://t.me/+uVp96dilrh44Y2E1">
						<img
							src="./telegram.png"
							alt="telegram action button"
							className="max-w-[200px] md:max-w-full"
						/>
					</a>
				</div>
				<p className="font-helvetica uppercase text-[#D73939] text-xs md:text-sm lg:text-md text-center md:text-start font-bold tracking-tighter z-20 relative">
					Not your normal meme this is the real deal coded by industry
					experts. A genuine token built for the community. No inside
					shady shenanigans.
				</p>
			</div>
			<div className="relative h-[250px] md:h-full bg-white md:rounded-xl rounded-lg overflow-hidden">
				<img
					src="./telegrampeople2.jpg"
					alt="telegram people"
					className="absolute inset-0 object-cover w-full h-full"
				/>
			</div>
		</div>
	);
}
