"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const codeLines = [
  { x: 3, y: 5, text: "01001000 01100001 01101101 01111010 01100001" },
  { x: 55, y: 8, text: "const dev = new FullStack();" },
  { x: 10, y: 18, text: "interface Portfolio { skills: Tech[]; }" },
  { x: 60, y: 21, text: "async function deploy() { await build(); }" },
  { x: 5, y: 33, text: "10110100 11001010 01010011 01110100" },
  { x: 50, y: 36, text: "export default function App()" },
  { x: 15, y: 48, text: "docker compose up -d --build" },
  { x: 65, y: 51, text: "git push origin main && deploy" },
  { x: 8, y: 63, text: "SELECT * FROM skills WHERE level = 'expert';" },
  { x: 55, y: 66, text: "01110100 01100101 01100011 01101000" },
  { x: 20, y: 78, text: "import { motion } from 'framer-motion';" },
  { x: 60, y: 81, text: "return { success: true, data: portfolio };" },
  { x: 5, y: 92, text: "npm run build && npx next export" },
  { x: 50, y: 95, text: "const AI = await openai.generate();" },
];

const symbols = [
  { x: 5, y: 12, text: "{ }", size: 38 },
  { x: 88, y: 18, text: "[ ]", size: 35 },
  { x: 80, y: 45, text: "</>", size: 40 },
  { x: 10, y: 55, text: "( )", size: 32 },
  { x: 92, y: 72, text: "{ }", size: 36 },
  { x: 15, y: 85, text: "=>", size: 34 },
  { x: 85, y: 90, text: "++", size: 30 },
];

export default function Background() {
  const { scrollYProgress } = useScroll();

  const blob1X = useTransform(scrollYProgress, [0, 0.5, 1], ["15%", "65%", "25%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 0.5, 1], ["15%", "45%", "80%"]);
  const blob2X = useTransform(scrollYProgress, [0, 0.5, 1], ["80%", "25%", "70%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 0.5, 1], ["25%", "65%", "30%"]);
  const blob3X = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "15%", "85%"]);
  const blob3Y = useTransform(scrollYProgress, [0, 0.5, 1], ["60%", "25%", "55%"]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Base dark color */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Moving gradient blobs - ON TOP of dark bg */}
      <motion.div
        style={{ left: blob1X, top: blob1Y }}
        className="absolute w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] bg-indigo-600/20"
      />
      <motion.div
        style={{ left: blob2X, top: blob2Y }}
        className="absolute w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] bg-purple-600/15"
      />
      <motion.div
        style={{ left: blob3X, top: blob3Y }}
        className="absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] bg-pink-600/10"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Code text layer */}
      {codeLines.map((line, i) => (
        <div
          key={i}
          className="absolute font-mono text-[11px] text-indigo-400/[0.08] whitespace-nowrap select-none"
          style={{ left: `${line.x}%`, top: `${line.y}%` }}
        >
          {line.text}
        </div>
      ))}

      {/* Large floating code symbols */}
      {symbols.map((sym, i) => (
        <div
          key={`sym-${i}`}
          className="absolute font-mono text-indigo-400/[0.05] select-none"
          style={{ left: `${sym.x}%`, top: `${sym.y}%`, fontSize: sym.size }}
        >
          {sym.text}
        </div>
      ))}

      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <line x1="0" y1="50%" x2="15%" y2="50%" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
        <line x1="15%" y1="50%" x2="17%" y2="48%" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
        <line x1="17%" y1="48%" x2="30%" y2="48%" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
        <circle cx="15%" cy="50%" r="3" fill="rgba(99,102,241,0.15)" />
        <circle cx="30%" cy="48%" r="3" fill="rgba(99,102,241,0.15)" />

        <line x1="100%" y1="30%" x2="85%" y2="30%" stroke="rgba(139,92,246,0.08)" strokeWidth="1" />
        <line x1="85%" y1="30%" x2="83%" y2="32%" stroke="rgba(139,92,246,0.08)" strokeWidth="1" />
        <line x1="83%" y1="32%" x2="70%" y2="32%" stroke="rgba(139,92,246,0.08)" strokeWidth="1" />
        <circle cx="85%" cy="30%" r="3" fill="rgba(139,92,246,0.15)" />
        <circle cx="70%" cy="32%" r="3" fill="rgba(139,92,246,0.15)" />
      </svg>
    </div>
  );
}
