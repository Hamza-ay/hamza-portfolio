"use client";

import { motion } from "framer-motion";
import DeployPipeline from "@/components/sections/DeployPipeline";
import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiMail, FiDownload } from "react-icons/fi";

const basePath = process.env.NODE_ENV === "production" ? "/hamza-portfolio" : "";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-5 sm:px-8">
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Identité : le nom d'abord, le rôle ensuite, sans détour. */}
          <p className="font-mono text-xs sm:text-sm text-accent-400">
            {personalInfo.name} {personalInfo.lastName} · {personalInfo.location}
          </p>

          <h1 className="mt-5 text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl font-semibold tracking-tightest text-mist-100 max-w-3xl">
            Une mise en production
            <br />
            devrait être
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent2-400">
              un non-événement.
            </span>
          </h1>

          <p className="mt-7 text-base sm:text-lg text-mist-400 max-w-[54ch] leading-relaxed">
            {personalInfo.title} à Lille. Je construis les chaînes qui mènent du
            code à la production — intégration continue, conteneurisation,
            déploiement automatisé, supervision.
          </p>
        </motion.div>

        {/* Le pipeline de ce site même : la démonstration avant l'argument. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.7, ease: "easeOut" }}
          className="mt-11 max-w-3xl"
        >
          <p className="font-mono text-[11px] text-mist-500 mb-3">
            la page que vous lisez est publiée par ce pipeline
          </p>
          <DeployPipeline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md bg-accent-500 text-[#2A0616] font-semibold text-sm hover:bg-accent-400 transition-colors duration-200"
          >
            <FiMail size={17} />
            Me contacter
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md border border-ink-line text-mist-300 font-medium text-sm hover:border-accent-500/60 hover:text-mist-100 transition-colors duration-200"
          >
            <FiGithub size={17} />
            GitHub
          </a>
          <a
            href={`${basePath}/cv-hamza.pdf`}
            download="CV-Hamza-AIT-YAHIATENE-DevOps.pdf"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md border border-ink-line text-mist-300 font-medium text-sm hover:border-accent2-500/60 hover:text-mist-100 transition-colors duration-200"
          >
            <FiDownload size={17} />
            Télécharger le CV
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex items-center gap-2.5 font-mono text-xs text-mist-500"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ok" />
          {personalInfo.availability}
        </motion.p>
      </div>
    </section>
  );
}
