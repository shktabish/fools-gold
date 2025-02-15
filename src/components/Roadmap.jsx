import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Roadmap = () => {
  const tokenomicsData = [
    "1B $PLONKERS FIXED SUPPLY",
    "IMMUTABLE CONTRACT",
    "ONCHAIN ONLY 100% VERIFIED",
    "0 TAXES",
  ];

  const roadmapData = [
    {
      quarter: "Quarter 1",
      title: "RISE OF THE FOOLS",
      description: "This Time Next Year, We'll Be Millionaires!",
      subtitle: [
        "TG MiniApp Launch V1",
        "Community Building",
        "$PLONKERS Launch",
        "Trotter's Trading Empire - DEX integration",
        "Genesis NFT Character Minting, Giveaway & Airdrop",
        "$PLONKERS Burns",
        "Community Liquidity Championships V1 Kickoff",
      ],
    },
    {
      quarter: "Quarter 2",
      title: "THE TROTTERS' TECH REVOLUTION",
      description: "Cushty Upgrades and Bonkers Bots!",
      subtitle: [
        "Cushty Collaborations - Cross-Project Partnerships",
        "MiniApp V2",
        "First Character AI Bots Launch",
        "$PLONKERS Airdrop & Burns",
      ],
    },
    {
      quarter: "Quarter 3",
      title: "THE GOLD RUSH CONTINUES",
      description: "Minted Like a Diamond Geezer!",
      subtitle: [
        "Peckham's Finest - Merchandise Drop",
        "MiniApp V3",
        "Batch 2 Character NFTs & AI Bots",
        "Community Liquidity Championships V2 Kickoff",
        "Moar Airdrops & Burns",
      ],
    },
    {
      quarter: "Quarter 4",
      title: "LOVELY JUBLY - YOU KNOW IT MAKES SENSE!",
      description: "We've Only Gone and Done It!",
      subtitle: [
        "Trigger's Broom - Token Utility Expansion",
        "Rodney's Gamble - Play-to-Earn Beta",
        "Grandad's Legacy - Charity Initiative",
        "Mega Airdrop Bonanza - Final Airdrop of the Year",
      ],
    },
  ];

  // Track open state for each accordion
  const [openAccordion, setOpenAccordion] = useState(null);

  // Toggle accordion open/close
  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center py-10 px-4 text-center">
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
            <motion.div
              key={index}
              className="bg-[#FFD677] overflow-hidden rounded-lg text-[#C5232A] font-bold text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
            >
              <motion.div
                className="p-4 md:flex items-center justify-center gap-20 px-[10%] cursor-pointer relative"
                onClick={() => toggleAccordion(index)}
                whileHover={{
                  backgroundColor: "rgba(197, 35, 42, 0.05)",
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="italic md:text-6xl"
                  animate={{ scale: openAccordion === index ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>2025</span>
                  <span className="block md:text-xl">{item.quarter}</span>
                </motion.span>
                <div className="md:mr-auto md:text-start">
                  <span className="block sm:text-3xl text-2xl font-helvetica">
                    {item.title}
                  </span>
                  <span className="block mt-1 text-base font-helvetica">
                    {item.description}
                  </span>
                </div>
                <motion.div
                  className="hidden md:flex items-center justify-center h-8 w-8 rounded-full bg-[#C5232A] text-[#FFD677]"
                  animate={{
                    rotate: openAccordion === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-lg">▼</span>
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {openAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.3, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-[10%] pt-0 pb-4">
                      <div className=" rounded-lg p-4 ">
                        <div className="space-y-3 text-base font-helvetica text-left">
                          {item.subtitle.map((sub, i) => (
                            <motion.div
                              key={i}
                              className="flex items-center"
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.1 + i * 0.05,
                              }}
                            >
                              <div className="h-2 w-2 rounded-full bg-[#C5232A] mr-3 flex-shrink-0"></div>
                              <div>{sub}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
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
    </div>
  );
};

export default Roadmap;
