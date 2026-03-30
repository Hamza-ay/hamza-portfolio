"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Projets" subtitle="Ce que j'ai construit" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <TiltCard>
                <div className="p-6 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:border-indigo-500/30 transition-all duration-300 h-full group">
                  {/* Project image */}
                  <div className="w-full h-44 rounded-xl overflow-hidden border border-white/[0.08] mb-5 bg-[#0d1117]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                      <FiCode size={14} className="text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">{project.title}</h3>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-white/[0.05] text-zinc-300 border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-white/[0.03] text-zinc-500">
                        +{project.tags.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 text-sm hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10 transition-all duration-300"
                      >
                        <FiGithub size={14} />
                        Code
                      </a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-600/20"
                      >
                        <FiExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
