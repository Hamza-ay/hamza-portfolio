"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > 100 && y > lastY);
      if (y > lastY && mobileOpen) setMobileOpen(false);
      lastY = y;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-4 z-50 px-6 py-3 rounded-full transition-all duration-500 left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 max-md:left-4 max-md:translate-x-0 ${
          scrolled
            ? "bg-neutral-900/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/30"
            : "bg-neutral-900/30 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center gap-8">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-1 order-first"
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <a href="#" className="font-bold text-xl text-white tracking-tight">
            H<span className="text-amber-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-amber-600 text-white text-sm font-medium hover:bg-amber-500 transition-colors shadow-lg shadow-amber-600/20"
          >
            Me contacter
          </a>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 z-40 w-52 p-4 rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-stone-300 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-amber-600 text-white text-sm font-medium hover:bg-amber-500 transition-colors mt-1"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
