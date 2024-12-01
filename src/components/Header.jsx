export default function Header() {
	return (
		<div className="rounded-xl bg-[#FFD677] flex flex-row w-full justify-between items-center px-4 py-2 md:py-4 md:px-6 overflow-x-hidden">
			<img src="logo.png" alt="" className="h-12 md:h-20" />
			<div className="relative">
				<img src="connect-button.png" alt="" className="sm:h-12 h-6" />
				<div className="absolute inset-0 z-10 cursor-pointer scale-x-150 md:ml-11 mt-1 opacity-0">
					<w3m-button />
				</div>
			</div>
		</div>
	);
}
