const Roadmap = () => {
  const roadmapData = [
    {
      quarter: "Quarter 1",
      title: "RISE OF THE FOOLS",
      subtitle: [
        "TG MiniApp Launch V1",
        "Community Building",
        "$PLONKERS Launch",
        "Trotter’s Trading Empire - DEX integration",
        "Genesis NFT Character Minting, Giveaway & Airdrop",
        "$PLONKERS Burns",
        "Community Liquidity Championships V1 Kickoff",
      ],
    },
    {
      quarter: "Quarter 2",
      title: "THE TROTTERS’ TECH REVOLUTION  ",
      subtitle: [
        "Cushty Collaborations - Cross-Project Partnerships",
        "MiniApp V2",
        "First Character AI Bots Launch",
        "$PLONKERS Airdrop & Burns",
      ],
    },
    {
      quarter: "Quarter 3",
      title: "THE GOLD RUSH CONTINUES  ",
      subtitle: [
        "Peckham’s Finest - Merchandise Drop",
        "MiniApp V3",
        "Batch 2 Character NFTs & AI Bots",
        "Community Liquidity Championships V2 Kickoff",
        "Moar Airdrops & Burns",
      ],
    },
    {
      quarter: "Quarter 4",
      title: "LOVELY JUBLY - YOU KNOW IT MAKES SENSE!  ",
      subtitle: [
        "Trigger’s Broom - Token Utility Expansion",
        "Rodney’s Gamble - Play-to-Earn Beta",
        "Grandad’s Legacy - Charity Initiative",
        "Mega Airdrop Bonanza - Final Airdrop of the Year",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 text-center">
      <div className="flex w-full max-w-6xl flex-col sm:flex-row items-center justify-between text-4xl sm:text-5xl">
        <h1 className="text-[#C5232A] font-bold font-mistral text-5xl sm:text-6xl">
          HE WHO DARES WINS!
        </h1>
        <h2 className="text-[#C5232A] font-bold mt-2 font-helvetica italic">
          ROADMAP
        </h2>
      </div>
      <div className="mt-6 w-full max-w-6xl space-y-4">
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFD677] p-4 rounded-lg text-[#C5232A] font-bold text-lg md:flex items-center justify-center gap-20 px-[10%]"
          >
            <span className="italic md:text-6xl">
              <span>2025</span>
              <span className="block md:text-xl">{item.quarter}</span>
            </span>
            <div className="md:mr-auto md:text-start">
              <span className="block sm:text-3xl text-2xl font-helvetica">
                {item.title}
              </span>
              <div className="mt-2 space-y-1 text-base font-helvetica sm:text-left">
                {item.subtitle.map((sub, i) => (
                  <div key={i}>{sub}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#C5232A] py-8 text-4xl text-[#FFD677] mt-6 px-6 rounded-lg font-bold italic max-w-6xl w-full">
        BELIEVE & HOLD TO INFINITY
      </div>
    </div>
  );
};

export default Roadmap;
