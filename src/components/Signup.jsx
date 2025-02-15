import React from "react";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
      {/* Left column with logo and tagline */}
      <motion.div
        className="h-[30vh] md:h-[95vh] rounded-xl md:col-span-2 bg-[#E03938] relative p-4 text-[#FFD677] flex flex-row md:flex-col justify-around"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src="./bg-effect.png"
          alt="background effect"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-10"
        />
        <motion.img
          src="./logo.png"
          alt="logo"
          className="mx-auto relative z-50 w-3/4 max-sm:w-1/2 object-contain"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:ml-4">
          <motion.div
            className="max-sm:text-2xl text-xl md:text-6xl xl:text-8xl font-mistral uppercase max-sm:w-full w-1/2 relative md:left-[20%] z-50"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            He who dares wins
          </motion.div>
          <motion.div
            className="text-xs sm:text-base font-helvetica uppercase md:w-[95%] mx-auto font-semibold relative z-50 md:mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Right column with image and button */}
      <motion.div
        className="max-sm:h-max md:h-[95vh] md:col-span-4 grid md:grid-rows-2 gap-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Top section with image */}
        <motion.div
          className="rounded-xl bg-[#FFD677] p-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="bg-[#2497c5] pt-28 sm:pt-0 rounded-xl h-full w-full overflow-hidden">
            <motion.img
              src="./sign-up-nobg.png"
              alt="people image"
              className="rounded-xl object-bottom sm:object-center mx-auto h-full w-auto sm:h-[130%]"
              style={{
                filter: "drop-shadow(14px 0px 4px rgba(0, 0, 0, 0.75))",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Bottom section with telegram button */}
        <motion.div
          className="rounded-xl text-[#C5232A] flex flex-col justify-around"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="z-20 relative w-full flex justify-center group">
            <motion.a
              href="https://t.me/+iJTex2WpXKRhMjM1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src="./telegram.png"
                alt="telegram action button"
                className="w-60 md:w-[450px] group-hover:shadow-xl transition-all shadow-black"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true, amount: 0.5 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;
