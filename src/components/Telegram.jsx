import React from "react";
import { motion } from "framer-motion";

export default function Telegram() {
  return (
    <motion.div
      className="min-h-[85dvh] bg-[#E03938] p-2 md:p-4 lg:p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-[30%_60%] place-content-between md:gap-6 gap-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.2 }}
    >
      {/* Top section */}
      <motion.div
        className="md:col-span-2 bg-[#FFD677] grid grid-cols-1 md:grid-cols-[50%_10%_40%] xl:grid-cols-[60%_10%_30%] p-4 lg:p-6 rounded-lg md:rounded-xl max-sm:h-full h-fit relative bg-no-repeat bg-contain bg-left-top "
        style={{ backgroundImage: "url(/fullstar.png)" }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        <motion.p
          className="font-mistral uppercase md:text-end text-center md:col-span-3 text-lg lg:text-3xl text-[#D73939] w-full col-span-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          Don&apos;t be a plonker you know it makes sense this time next year
        </motion.p>
        <motion.div
          className="text-6xl md:text-8xl xl:text-9xl font-mistral uppercase text-[#E03938] text-center md:text-start"
          style={{ textShadow: "white 4px 4px 1px" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.8 }}
        >
          Lovely jubbly
        </motion.div>
        <motion.img
          src="/sparkle.png"
          alt="sparkle image"
          className="h-[100%] place-content-center my-auto hidden md:block"
          initial={{ opacity: 0, rotate: -90 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.0 }}
        />
        <motion.div
          className="font-mistral uppercase text-2xl md:text-5xl lg:text-7xl text-[#D73939] md:text-end text-center w-full col-span-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 1.2 }}
        >
          we&apos;ll be millionaires
        </motion.div>
      </motion.div>

      {/* Bottom left - Telegram button */}
      <motion.div
        className="h-full bg-white md:rounded-xl rounded-lg lg:p-8 space-y-4 flex flex-col md:items-start items-center justify-center relative overflow-hidden p-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 1.4 }}
      >
        <img
          src="./bg-effect.png"
          alt="bg-effect image"
          className="absolute inset-0 z-10 opacity-5"
        />
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.2,
                delay: 1.5,
                type: "spring",
                stiffness: 200,
              }}
            />
          </motion.a>
        </div>
      </motion.div>

      {/* Bottom right - People image */}
      <motion.div
        className="relative h-[250px] md:h-full bg-white md:rounded-xl rounded-lg overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 1.2 }}
      >
        <motion.img
          src="./telegrampeople2.jpg"
          alt="telegram people"
          className="absolute inset-0 object-cover w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.6 }}
        />
      </motion.div>
    </motion.div>
  );
}
