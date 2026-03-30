"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button, Chip } from "@heroui/react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projets"
          subtitle="Ce que j'ai construit"
        />

        {/* Featured projects */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <TiltCard>
                  <div className="p-8 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:border-indigo-500/30 transition-colors duration-300 h-full">
                    {/* Project image placeholder */}
                    <div className="w-full h-48 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-white/[0.06] mb-6 flex items-center justify-center">
                      <span className="text-4xl opacity-50">
                        {project.title.includes("Properis") ? "🏠" : "🧠"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          size="sm"
                          variant="flat"
                          classNames={{
                            base: "bg-indigo-500/10 border border-indigo-500/20",
                            content: "text-indigo-300 text-xs",
                          }}
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-6">
                      {project.github !== "#" && (
                        <Button
                          as="a"
                          href={project.github}
                          target="_blank"
                          size="sm"
                          variant="bordered"
                          className="border-zinc-700 text-zinc-300 hover:border-indigo-500 rounded-full"
                        >
                          <FiGithub size={14} className="mr-1.5" />
                          Code
                        </Button>
                      )}
                      {project.live && project.live !== "#" && (
                        <Button
                          as="a"
                          href={project.live}
                          target="_blank"
                          size="sm"
                          className="bg-indigo-600 text-white rounded-full"
                        >
                          <FiExternalLink size={14} className="mr-1.5" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
        </motion.div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <ScrollReveal key={project.title} variant="fadeUp" delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/20 transition-colors duration-300">
                  <h4 className="text-base font-semibold text-white">{project.title}</h4>
                  <p className="text-sm text-zinc-500 mt-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded bg-white/[0.05] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
}
