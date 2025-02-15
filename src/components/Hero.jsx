import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white rounded-xl overflow-hidden h-[65dvh] sm:h-[90dvh] w-full">
      {/* Background TV Animation */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/HeroAnimation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Top-right Star with animation */}
      <motion.img
        src="./rightstar.png"
        alt="Star"
        className="absolute right-0 top-0 max-w-[50%] sm:max-w-96 z-5"
        initial={{ opacity: 0, x: 100, y: -100, rotate: 45 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />

      {/* Bottom-left Star with animation */}
      <motion.img
        src="./leftstar.png"
        alt="Star"
        className="absolute left-0 bottom-0 max-w-[50%] sm:max-w-96 z-5"
        initial={{ opacity: 0, x: -100, y: 100, rotate: -45 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
          delay: 0.2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 sm:px-6 sm:py-4 h-full">
        <div className="space-y-4 max-w-full flex flex-col sm:flex-row sm:items-start h-full justify-between items-center text-center sm:text-start">
          {/* Heading with staggered animations */}
          <div className="">
            <motion.h1
              className="font-mistral text-2xl sm:text-3xl md:text-5xl max-w-sm lg:text-5xl mt-4 mb-2 italic"
              style={{ fontFamily: "Helvetica, cursive" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.4,
              }}
            >
              Welcome to the world of
            </motion.h1>
            <motion.h2
              className="font-mistral text-6xl lg:text-9xl max-w-sm"
              style={{
                fontFamily: "Mistral, cursive",
                textShadow: "brown 4px 4px",
              }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.8,
                ease: "easeOut",
              }}
            >
              FOOLS GOLD
            </motion.h2>
          </div>

          {/* Subheading with animations */}
          <motion.div
            className="md:max-w-sm w-full backdrop-blur-sm md:backdrop-blur-none sm:text-end sm:self-end md:pb-12 lg:pb-48 md:scale-90 lg:scale-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.2,
              delay: 1.2,
            }}
          >
            <motion.h1
              className="font-mistral text-3xl md:text-4xl lg:text-7xl md:mb-2 uppercase"
              style={{ fontFamily: "Mistral, cursive" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 1.6,
              }}
            >
              The First Crypto Memeworld
            </motion.h1>
            <motion.h2
              className="font-helvetica italic text-sm md:text-2xl lg:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 2.0,
              }}
            >
              Collect $PLONKERS for NFTs with perks
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
