"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Fond : une console d'exploitation au repos, pas un terminal de film.
 * Une grille technique discrète, deux nappes lumineuses qui dérivent très
 * lentement au scroll, rien d'autre. Toute l'audace visuelle est dépensée
 * dans le pipeline du hero.
 */
export default function Background() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  const auroraY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const auroraY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-ink" />

      {/* Nappe rose : ancrée en haut à gauche, suit le regard à la lecture. */}
      <motion.div
        style={{ y: reduce ? 0 : auroraY }}
        className="absolute -top-[18rem] -left-[10rem] w-[46rem] h-[46rem] rounded-full blur-[140px] bg-accent-600/20"
      />
      {/* Nappe périwinkle : contrepoids froid en bas à droite. */}
      <motion.div
        style={{ y: reduce ? 0 : auroraY2 }}
        className="absolute top-[42rem] -right-[14rem] w-[40rem] h-[40rem] rounded-full blur-[130px] bg-accent2-600/18"
      />

      {/* Grille : la trame d'un plan technique, estompée sur les bords. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,140,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(108,140,255,0.055) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 78%)",
        }}
      />

      {/* Voile sombre : garantit la lisibilité du texte par-dessus les nappes. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
    </div>
  );
}
