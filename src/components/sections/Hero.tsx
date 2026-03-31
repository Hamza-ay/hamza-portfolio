"use client";

import { motion } from "framer-motion";
import TypewriterEffect from "@/components/ui/TypewriterEffect";
import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiMail, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
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
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-amber-200 text-xs sm:text-sm font-medium">{personalInfo.availability}</span>
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight">
            <span className="text-white">Salut, je suis</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              {personalInfo.name}
            </span>
          </h1>

          {/* Typewriter */}
          <div className="mt-4 sm:mt-8 text-base sm:text-xl md:text-3xl text-stone-300 font-light">
            <span>{personalInfo.title}</span>
            <br />
            <span>Je crée </span>
            <TypewriterEffect words={personalInfo.typingWords} />
          </div>

          {/* Bio */}
          <p className="mt-5 sm:mt-8 text-stone-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg px-2">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-8 sm:mt-12"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-all duration-300 hover:scale-105"
          >
            <FiMail size={18} />
            Me contacter
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full border-2 border-stone-700 text-stone-300 font-medium text-sm sm:text-base hover:border-amber-500 hover:text-white hover:bg-amber-500/10 transition-all duration-300 backdrop-blur-sm"
          >
            <FiGithub size={18} />
            GitHub
          </a>
          <a
            href={`${process.env.NODE_ENV === "production" ? "/hamza-portfolio" : ""}/cv-hamza.docx`}
            download="CV_Hamza_AIT_YAHIATENE.docx"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full border-2 border-stone-700 text-stone-300 font-medium text-sm sm:text-base hover:border-orange-500 hover:text-white hover:bg-orange-500/10 transition-all duration-300 backdrop-blur-sm"
          >
            <FiDownload size={18} />
            Télécharger CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
