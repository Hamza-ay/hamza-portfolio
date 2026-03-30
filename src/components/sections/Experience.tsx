"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Mon parcours professionnel"
        />

        <div ref={containerRef} className="relative">
          {/* Background line */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-0.5 bg-zinc-800" />

          {/* Animated drawn line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-10 top-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 origin-top"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineEntry key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex items-start pl-14 sm:pl-20 md:pl-24"
    >
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
        className="absolute left-[25px] md:left-[33px] w-[13px] h-[13px] rounded-full bg-indigo-500 border-3 border-[#0a0a0f] z-10 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
      />

      {/* Card */}
      <div className="flex-1 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-indigo-500/30 transition-colors duration-300">
        <span className="text-xs font-mono text-indigo-400">{experience.period}</span>
        <h3 className="text-lg font-bold text-white mt-1">{experience.title}</h3>
        <p className="text-sm text-purple-300 mt-0.5">
          {experience.company} — {experience.location}
          {experience.description && (
            <span className="text-zinc-500"> ({experience.description})</span>
          )}
        </p>

        <ul className="mt-4 space-y-2">
          {experience.tasks.map((task, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
              <span className="text-indigo-400 mt-1 shrink-0">&#9656;</span>
              {task}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
