"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionDivider({ color = "indigo" }: { color?: "indigo" | "purple" | "pink" | "cyan" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const colors = {
    indigo: "from-transparent via-indigo-500/50 to-transparent",
    purple: "from-transparent via-purple-500/50 to-transparent",
    pink: "from-transparent via-pink-500/40 to-transparent",
    cyan: "from-transparent via-cyan-500/40 to-transparent",
  };

  const glowColors = {
    indigo: "shadow-indigo-500/20",
    purple: "shadow-purple-500/20",
    pink: "shadow-pink-500/20",
    cyan: "shadow-cyan-500/20",
  };

  return (
    <div ref={ref} className="relative h-24 flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ width, opacity }}
        className={`h-px bg-gradient-to-r ${colors[color]} shadow-lg ${glowColors[color]}`}
      />
      {/* Center glow dot */}
      <motion.div
        style={{ opacity }}
        className={`absolute w-2 h-2 rounded-full bg-${color}-400 shadow-lg shadow-${color}-400/50`}
      />
    </div>
  );
}
