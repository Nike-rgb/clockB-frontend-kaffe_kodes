"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const carouselTexts = ["Start", "Grow", "Operate"];

const HeroText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-4 flex flex-col items-center justify-center h-auto space-y-4 text-center">
      <div className="text-[22px] font-bold text-textPrimary">
        Kafee Code platform to
      </div>

      <div className="relative w-full h-12 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full font-sans text-4xl font-[900] text-brand">
            {carouselTexts[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="text-[26px] font-extrabold font-sans text-gray-800">
        Your Bakery/ Tea/ Coffee Business
      </div>

      <div className="text-[18px] font-normal font-sans text-textPrimary">
        Kaffe Codes is the platform to run a successful online business in
        Nepal.
      </div>
    </div>
  );
};

export default HeroText;
