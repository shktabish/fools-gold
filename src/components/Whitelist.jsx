const Whitelist = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="max-sm:h-[75vh] h-[50vh] md:min-h-[95vh] md:h-auto grid max-sm:grid-rows-2 grid-rows-1 md:grid-rows-2 max-sm:grid-cols-1 grid-cols-2 md:grid-cols-1 gap-4">
        <div className="bg-[#FFD677] rounded-xl p-2">
          <img
            src="./people.png"
            alt="people image"
            className="object-cover object-center mx-auto rounded-xl h-full w-fit"
          />
        </div>
        <div className="relative bg-[#FFD677] rounded-xl flex justify-center items-center">
          <img
            src="./bg-effect.png"
            alt="background effect"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-5"
          />
          <div className="font-helvetica italic text-xl lg:text-[1.75rem] font-semibold w-[95%] relative z-50 text-center">
            <div className="text-[#E12F2A] uppercase mb-2">
              No income tax, no VAT, No money back, and no guarantee
            </div>{" "}
            Black or white, rich or poor, We'll cut prices at a straw
          </div>
        </div>
      </div>
      <div className="min-h-[95vh] md:col-span-2 grid grid-rows-3 gap-4">
        <div className="relative rounded-xl bg-[#DE1F26] flex flex-col justify-center items-center gap-2 py-6">
          <img
            src="./bg-effect.png"
            alt="background effect"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
          />
          <div className="uppercase font-mistral text-[#FFD677] text-center text-4xl md:text-5xl lg:text-[5rem] w-[min(750px,95%)] relative z-50 max-w-3xl">
            START COLLECTING $PLONKERS FOR PERKS
          </div>
          <div className="text-white text-center font-helvetica italic w-[95%] max-sm:text-xs md:text-base relative z-50 max-w-2xl">
            &quot;I&apos;ll fetch the suitcase from the van &apos;Cause if you
            want the best ones But you don&apos;t ask questions Then brother,
            I&apos;m your man&quot;
          </div>
        </div>
        <div className="relative row-span-2 rounded-xl bg-[#fffefb] overflow-hidden h-full sm:flex sm:flex-col sm:justify-between sm:items-start gap-4">
          <img
            src="./bg-effect.png"
            alt="background effect"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-5"
          />
          <img
            src="./coin.png"
            alt="coin image"
            className="absolute -bottom-[10%] left-[30%]"
          />
          <div className="max-sm:w-4/5 w-2/3 md:w-1/2 px-4 py-2 text-lg md:text-xl xl:text-3xl font-semibold italic font-helvetica text-[#C5232A] relative z-50">
            Cause where it all comes from is a mystery it’s like the changing of
            the seasons and the tides of the sea but here’s the one that’s
            driving me berserk why does only Fools Gold work!
          </div>
          <img
            src="./whitelist-button.png"
            alt="whitelist button"
            className="mx-4 max-md:w-52 md:h-20 relative z-50 sm:my-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Whitelist;
