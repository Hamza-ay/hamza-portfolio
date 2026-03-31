"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GradientBlobs() {
  const { scrollYProgress } = useScroll();

  const blob1X = useTransform(scrollYProgress, [0, 0.5, 1], ["15%", "65%", "25%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 0.5, 1], ["15%", "45%", "85%"]);

  const blob2X = useTransform(scrollYProgress, [0, 0.5, 1], ["85%", "25%", "75%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 0.5, 1], ["25%", "65%", "35%"]);

  const blob3X = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "15%", "85%"]);
  const blob3Y = useTransform(scrollYProgress, [0, 0.5, 1], ["65%", "25%", "55%"]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -30 }}>
      <motion.div
        style={{ left: blob1X, top: blob1Y }}
        className="absolute w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] bg-amber-600/20"
      />
      <motion.div
        style={{ left: blob2X, top: blob2Y }}
        className="absolute w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] bg-orange-600/15"
      />
      <motion.div
        style={{ left: blob3X, top: blob3Y }}
        className="absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] bg-yellow-600/10"
      />
    </div>
  );
}
