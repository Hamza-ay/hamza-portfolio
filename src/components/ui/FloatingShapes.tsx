"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const shapes = [
  // Left side
  { x: "5%", y: "15%", size: 60, rotation: 45, color: "rgba(99,102,241,0.08)", type: "square" },
  { x: "8%", y: "35%", size: 40, rotation: 0, color: "rgba(139,92,246,0.06)", type: "circle" },
  { x: "3%", y: "55%", size: 80, rotation: 30, color: "rgba(99,102,241,0.05)", type: "triangle" },
  { x: "10%", y: "75%", size: 50, rotation: 60, color: "rgba(236,72,153,0.06)", type: "square" },
  // Right side
  { x: "90%", y: "10%", size: 45, rotation: 15, color: "rgba(139,92,246,0.07)", type: "circle" },
  { x: "85%", y: "30%", size: 70, rotation: 0, color: "rgba(99,102,241,0.06)", type: "triangle" },
  { x: "92%", y: "50%", size: 55, rotation: 45, color: "rgba(236,72,153,0.05)", type: "square" },
  { x: "88%", y: "70%", size: 35, rotation: 20, color: "rgba(6,182,212,0.06)", type: "circle" },
  { x: "95%", y: "88%", size: 65, rotation: 0, color: "rgba(99,102,241,0.05)", type: "triangle" },
  // Center scattered
  { x: "25%", y: "45%", size: 30, rotation: 30, color: "rgba(139,92,246,0.04)", type: "circle" },
  { x: "70%", y: "60%", size: 35, rotation: 60, color: "rgba(99,102,241,0.04)", type: "square" },
  { x: "50%", y: "85%", size: 25, rotation: 0, color: "rgba(236,72,153,0.04)", type: "circle" },
];

function Shape({ shape, index }: { shape: typeof shapes[0]; index: number }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 5000], [0, -(index % 2 === 0 ? 200 : 300)]);
  const rotate = useTransform(scrollY, [0, 5000], [shape.rotation, shape.rotation + 180]);

  return (
    <motion.div
      style={{
        left: shape.x,
        top: shape.y,
        y,
        rotate,
        width: shape.size,
        height: shape.size,
      }}
      className="absolute pointer-events-none"
    >
      {shape.type === "square" && (
        <div
          className="w-full h-full rounded-lg border"
          style={{ borderColor: shape.color, background: shape.color }}
        />
      )}
      {shape.type === "circle" && (
        <div
          className="w-full h-full rounded-full border"
          style={{ borderColor: shape.color, background: shape.color }}
        />
      )}
      {shape.type === "triangle" && (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,95 5,95"
            fill={shape.color}
            stroke={shape.color}
            strokeWidth="1"
          />
        </svg>
      )}
    </motion.div>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <Shape key={i} shape={shape} index={i} />
      ))}
    </div>
  );
}
