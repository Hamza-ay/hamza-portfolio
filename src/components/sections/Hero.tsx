"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import DotGrid from "@/components/ui/DotGrid";
import TypewriterEffect from "@/components/ui/TypewriterEffect";
import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiMail, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DotGrid />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium"
          >
            {personalInfo.availability}
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">Salut, je suis </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              {personalInfo.name}
            </span>
          </h1>

          <div className="mt-6 text-xl md:text-2xl text-zinc-400 font-light">
            <span>{personalInfo.title} — Je cree </span>
            <TypewriterEffect words={personalInfo.typingWords} />
          </div>

          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <Button
            as="a"
            href="#contact"
            size="lg"
            className="bg-indigo-600 text-white hover:bg-indigo-500 rounded-full px-8 font-medium shadow-lg shadow-indigo-600/25"
          >
            <FiMail className="mr-2" />
            Me contacter
          </Button>
          <Button
            as="a"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="bordered"
            className="border-zinc-700 text-zinc-300 hover:border-indigo-500 hover:text-white rounded-full px-8"
          >
            <FiGithub className="mr-2" />
            GitHub
          </Button>
          <Button
            as="a"
            href="/cv-hamza.pdf"
            download
            size="lg"
            variant="bordered"
            className="border-zinc-700 text-zinc-300 hover:border-purple-500 hover:text-white rounded-full px-8"
          >
            <FiDownload className="mr-2" />
            CV
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-zinc-600 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
