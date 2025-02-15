import React from "react";
import { motion } from "framer-motion";

const Whitelist = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const buttonHover = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const viewportSettings = { once: true, amount: 0.5 };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeIn}
        className="max-sm:h-[75vh] h-[50vh] md:min-h-[95vh] md:h-auto grid max-sm:grid-rows-2 grid-rows-1 md:grid-rows-2 max-sm:grid-cols-1 grid-cols-2 md:grid-cols-1 gap-4"
      >
        <motion.div variants={scaleIn} className="bg-[#FFD677] rounded-xl">
          <motion.img
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            src="./people2.png"
            alt="people image"
            className="object-cover object-center mx-auto translate-y-5 rounded-xl h-96 w-fit"
            style={{
              filter: "drop-shadow(12px 2px 4px rgba(0, 0, 0, 0.75))",
            }}
          />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="relative bg-[#FFD677] rounded-xl flex justify-center items-center"
        >
          <img
            src="./bg-effect.png"
            alt="background effect"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-5"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportSettings}
            transition={{ delay: 0.4, duration: 0.2 }}
            className="font-helvetica italic text-xl lg:text-[1.75rem] font-semibold w-[95%] relative z-50 text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="text-[#E12F2A] uppercase mb-2"
            >
              No income tax, no VAT, No money back, and no guarantee
            </motion.div>{" "}
            <motion.div variants={fadeInUp}>
              Black or white, rich or poor, We'll cut prices at a straw
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeIn}
        className="min-h-[95vh] md:col-span-2 grid grid-rows-3 gap-4"
      >
        <motion.div
          variants={scaleIn}
          className="relative rounded-xl bg-[#DE1F26] flex flex-col justify-center items-center gap-2 py-6"
        >
          <img
            src="./bg-effect.png"
            alt="background effect"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
          />
          <motion.div
            variants={fadeInUp}
            className="uppercase font-mistral text-[#FFD677] text-center text-4xl md:text-5xl lg:text-[5rem] w-[min(750px,95%)] relative z-50 max-w-3xl"
          >
            START COLLECTING $PLONKERS FOR PERKS
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="text-white text-center font-helvetica italic w-[95%] max-sm:text-xs md:text-base relative z-50 max-w-2xl"
          >
            &quot;I&apos;ll fetch the suitcase from the van &apos;cause if you
            want the best ones but you don&apos;t ask questions then brother,
            I&apos;m your man&quot;
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          className="relative row-span-2 rounded-xl bg-[#fffefb] overflow-hidden h-full sm:flex sm:flex-col sm:justify-between items-center sm:items-start gap-4"
        >
          <img
            src="./bg-effect.png"
            alt="background effect"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-5"
          />
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 1, delay: 0.6 }}
            src="./coin.png"
            alt="coin image"
            className="absolute -bottom-[10%] left-[30%]"
          />
          <motion.div
            variants={fadeInUp}
            className="max-sm:w-4/5 w-2/3 md:w-1/2 px-4 py-2 text-lg md:text-xl xl:text-3xl font-semibold italic font-helvetica text-[#C5232A] relative z-50"
          >
            Cause where it all comes from is a mystery it's like the changing of
            the seasons and the tides of the sea but here's the one that's
            driving me berserk why does only Fools Gold work!
          </motion.div>
          <motion.img
            whileHover="hover"
            variants={buttonHover}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.3, delay: 0.8 }}
            src="./whitelist-button.png"
            alt="whitelist button"
            className="mx-4 max-xl:w-72 md:h-20 relative z-50 sm:my-12 cursor-pointer"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Whitelist;
