"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export default function ScrollArrow() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setShow(!atBottom);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollDown}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-amber-600/80 backdrop-blur-sm border border-amber-500/30 flex items-center justify-center text-white shadow-lg shadow-amber-600/30 hover:bg-amber-500 hover:scale-110 transition-all duration-300"
          aria-label="Descendre"
        >
          <FiArrowDown size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
