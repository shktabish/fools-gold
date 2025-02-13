const Tokenomics = () => {
  const tokenomicsData = [
    "1B $PLONKERS FIXED SUPPLY",
    "IMMUTABLE CONTRACT",
    "ONCHAIN ONLY 100% VERIFIED",
    "0 TAXES",
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center py-10 px-4 text-center bg-[#C5232A] rounded-lg">
      <h2 className="text-[#FFD677] font-bold text-4xl italic pb-2">
        TOKONOMICS
      </h2>
      <div className="mt-6 w-full max-w-5xl space-y-4">
        {tokenomicsData.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFD677] p-6 rounded-lg text-[#C5232A] font-bold sm:text-5xl italic font-helvetica"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
