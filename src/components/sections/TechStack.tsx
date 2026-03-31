"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiNestjs, SiPostgresql, SiMysql, SiPython, SiPhp,
  SiGit, SiDocker, SiLinux, SiNginx, SiSupabase, SiWordpress,
  SiTensorflow, SiGithubcopilot,
} from "react-icons/si";
import { FiCpu } from "react-icons/fi";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5,
  SiCss3: SiCss,
  SiNodedotjs, SiNestjs, SiPostgresql, SiMysql, SiPython, SiPhp,
  SiGit, SiDocker, SiLinux, SiNginx, SiSupabase, SiWordpress,
  SiTensorflow, SiGithubcopilot,
  SiAnthropic: FiCpu,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 14 },
  },
};

const categories = [
  { key: "frontend" as const, label: "Front-End" },
  { key: "backend" as const, label: "Back-End" },
  { key: "tools" as const, label: "Outils & DevOps" },
  { key: "ai" as const, label: "IA & Automatisation" },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-orange-600/8 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Compétences"
          subtitle="Les technologies que je maîtrise"
        />

        <div className="grid gap-10">
          {categories.map((cat) => (
            <CategoryGrid key={cat.key} label={cat.label} items={skills[cat.key]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryGrid({
  label,
  items,
}: {
  label: string;
  items: { name: string; icon: string; color: string }[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div>
      <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-widest mb-4 ml-1">
        {label}
      </h3>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
      >
        {items.map((skill) => {
          const Icon = iconMap[skill.icon];
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-amber-500/40 hover:bg-white/[0.06] transition-colors duration-300"
            >
              {Icon && (
                <Icon
                  size={28}
                  color={skill.color}
                />
              )}
              <span className="text-xs text-stone-400 group-hover:text-stone-200 transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
