"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Séparateur : un filet qui se tend puis se relâche au passage. Une seule
 * variante — la précédente exposait un prop `color` dont les classes
 * (`bg-${color}-400`) étaient construites dynamiquement et n'étaient donc
 * jamais générées par Tailwind : le point central ne s'affichait pas.
 */
export default function SectionDivider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative h-20 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ width, opacity }}
        className="h-px bg-gradient-to-r from-transparent via-accent-500/45 to-transparent"
      />
      <motion.div
        style={{ opacity }}
        className="absolute w-1.5 h-1.5 rounded-full bg-accent-400 shadow-[0_0_12px_rgba(255,77,141,0.7)]"
      />
    </div>
  );
}
