"use client";

import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}. Tous droits reserves.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            <FiMail size={18} />
          </a>
        </div>

        <p className="text-xs text-zinc-600">
          Built with Next.js, HeroUI & Framer Motion
        </p>
      </div>
    </footer>
  );
}
