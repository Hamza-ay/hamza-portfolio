"use client";

import { motion } from "framer-motion";
import TypewriterEffect from "@/components/ui/TypewriterEffect";
import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiMail, FiDownload, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px] -z-10" />
      <div className="absolute top-2/3 left-1/2 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-indigo-200 text-sm font-medium">{personalInfo.availability}</span>
          </motion.div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight">
            <span className="text-white">Salut, je suis</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">
              {personalInfo.name}
            </span>
          </h1>

          {/* Typewriter */}
          <div className="mt-8 text-xl md:text-3xl text-zinc-300 font-light">
            <span>{personalInfo.title}</span>
            <br className="md:hidden" />
            <span className="hidden md:inline"> — </span>
            <span>Je cree </span>
            <TypewriterEffect words={personalInfo.typingWords} />
          </div>

          {/* Bio */}
          <p className="mt-8 text-zinc-500 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-5 mt-12"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-105"
          >
            <FiMail size={18} />
            Me contacter
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-zinc-700 text-zinc-300 font-medium text-base hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10 transition-all duration-300 backdrop-blur-sm"
          >
            <FiGithub size={18} />
            GitHub
          </a>
          <a
            href="/cv-hamza.pdf"
            download
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-zinc-700 text-zinc-300 font-medium text-base hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm"
          >
            <FiDownload size={18} />
            Telecharger CV
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <FiArrowDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
