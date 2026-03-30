"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";

const navLinks = [
  { label: "A propos", href: "#about" },
  { label: "Competences", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-zinc-900/80 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-8">
          <a href="#" className="font-bold text-lg text-white tracking-tight">
            H<span className="text-indigo-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <Button
            as="a"
            href="#contact"
            size="sm"
            className="hidden md:flex bg-indigo-600 text-white hover:bg-indigo-500 rounded-full px-5"
          >
            Me contacter
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-1"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 mx-4 p-6 rounded-2xl bg-zinc-900/95 backdrop-blur-xl border border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-zinc-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                as="a"
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-indigo-600 text-white rounded-full mt-2"
              >
                Me contacter
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
