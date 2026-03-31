"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink, FiCode, FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative w-full h-44 rounded-xl overflow-hidden border border-white/[0.08] mb-5 bg-[#0d1117] group/carousel">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-black/80"
            aria-label="Image précédente"
          >
            <FiChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-black/80"
            aria-label="Image suivante"
          >
            <FiChevronRight size={14} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  idx === currentIndex ? "bg-amber-400 w-3" : "bg-white/40"
                }`}
                aria-label={`Image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = !!project.details;

  return (
    <div className="p-6 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:border-amber-500/30 transition-all duration-300 h-full group flex flex-col">
      {/* Project image carousel */}
      <ImageCarousel images={project.images} title={project.title} />

      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
          <FiCode size={14} className="text-amber-400" />
        </div>
        <h3 className="text-lg font-bold text-white leading-snug">{project.title}</h3>
      </div>

      <p className={`text-sm text-stone-400 leading-relaxed mb-4 ${!expanded ? "line-clamp-2" : ""}`}>
        {project.description}
      </p>

      {/* Expandable details */}
      <AnimatePresence>
        {expanded && hasDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-1 border-t border-white/[0.06] mt-1">
              <div className="text-sm text-stone-400 leading-relaxed space-y-3 mt-3">
                {project.details!.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Details toggle button */}
      {hasDetails && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors mb-4 group/btn"
        >
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiChevronDown size={14} />
          </motion.span>
          {expanded ? "Masquer les détails" : "Voir les détails"}
        </button>
      )}

      <div className="flex flex-wrap gap-2 mb-5 mt-auto">
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs rounded-full bg-white/[0.05] text-stone-300 border border-white/[0.08]"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 5 && (
          <span className="px-3 py-1 text-xs rounded-full bg-white/[0.03] text-stone-500">
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
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-700 text-stone-300 text-sm hover:border-amber-500 hover:text-white hover:bg-amber-500/10 transition-all duration-300"
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
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-600 text-white text-sm hover:bg-amber-500 transition-all duration-300 shadow-lg shadow-amber-600/20"
          >
            <FiExternalLink size={14} />
            Démo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
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
                <ProjectCard project={project} />
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
