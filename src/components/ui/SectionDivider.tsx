"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionDivider({ color = "amber" }: { color?: "amber" | "orange" | "yellow" | "cyan" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const colors = {
    amber: "from-transparent via-amber-500/50 to-transparent",
    orange: "from-transparent via-orange-500/50 to-transparent",
    yellow: "from-transparent via-yellow-500/40 to-transparent",
    cyan: "from-transparent via-cyan-500/40 to-transparent",
  };

  const glowColors = {
    amber: "shadow-amber-500/20",
    orange: "shadow-orange-500/20",
    yellow: "shadow-yellow-500/20",
    cyan: "shadow-cyan-500/20",
  };

  return (
    <div ref={ref} className="relative h-24 flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ width, opacity }}
        className={`h-px bg-gradient-to-r ${colors[color]} shadow-lg ${glowColors[color]}`}
      />
      <motion.div
        style={{ opacity }}
        className={`absolute w-2 h-2 rounded-full bg-${color}-400 shadow-lg shadow-${color}-400/50`}
      />
    </div>
  );
}
