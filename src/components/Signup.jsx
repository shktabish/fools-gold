const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="h-[30vh] md:h-[95vh] rounded-xl bg-[#E03938] relative p-4 text-[#FFD677] flex  flex-row md:flex-col justify-around">
        <img
          src="./bg-effect.png"
          alt="background effect"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-10"
        />
        <img
          src="./logo.png"
          alt="logo"
          className="mx-auto relative z-50 w-3/4 max-sm:w-1/2 object-contain"
        />
        <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:ml-4">
          <div className="max-sm:text-2xl text-xl md:text-6xl xl:text-8xl font-mistral uppercase max-sm:w-full w-1/2 relative md:left-[20%] z-50">
            He who dares wins
          </div>
          <div className="text-xs sm:text-base font-helvetica uppercase md:w-[95%] mx-auto font-semibold relative z-50 md:mt-4"></div>
        </div>
      </div>
      <div className="max-sm:h-max h-[95vh] md:col-span-3 grid grid-rows-2 gap-4">
        <div className="rounded-xl bg-[#FFD677] p-2">
          <div className="rounded-xl h-full w-full overflow-hidden">
            <img
              src="./sign-up.png"
              alt="people image"
              className="h-full object-cover sm:w-full object-top"
            />
          </div>
        </div>

        <div className="rounded-xl text-[#C5232A] flex flex-col justify-around ">
          <div>
            <div className="text-2xl lg:text-4xl xl:text-[2.5rem] font-mistral font-medium uppercase">
              Winners will increase their points, credibility score and win
              prizes
            </div>
            <div className="font-helvetica italic text-base xl:text-xl font-semibold">
              Regular competitions will happen to see who can shift the most
              gear that came off the back of a lorry. Winners will increase
              their credibility score increase their NFTS value and win prize
            </div>
          </div>
          <div>
            <img
              src="./sign-up-button.png"
              alt="button"
              className="h-16 xl:h-24 max-sm:my-4"
            />
          </div>
          <div className="text-sm xl:text-base font-helvetica uppercase font-semibold">
            Expect things like Peckham Spring Water, Triggers sweeping brush,
            Del&apos;s mobile phone, the robin reliant and much more to come.
            All the lovely jubbly airdrops token burns and competitions are
            executed by an AI agent to ensure they are executed exactly
            according to the rules of Fools Gold
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
