"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo, education, languages, interests } from "@/data/portfolio";
import { FiMapPin, FiCalendar } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="A propos" subtitle="Mon parcours et ce qui me motive" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Bio */}
          <ScrollReveal variant="slideLeft" delay={0.1}>
            <GlassCard className="p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-4">Qui suis-je ?</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                <span className="flex items-center gap-2">
                  <FiMapPin className="text-indigo-400" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-2">
                  <FiCalendar className="text-indigo-400" />
                  {personalInfo.availability}
                </span>
              </div>

              {/* Languages */}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <h4 className="text-sm font-semibold text-zinc-300 mb-3 uppercase tracking-wider">Langues</h4>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-zinc-300"
                    >
                      {lang.flag} {lang.name} — {lang.level}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <h4 className="text-sm font-semibold text-zinc-300 mb-3 uppercase tracking-wider">Centres d&apos;interet</h4>
                <div className="flex flex-wrap gap-3">
                  {interests.map((i) => (
                    <span
                      key={i.name}
                      className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-zinc-300"
                    >
                      {i.emoji} {i.name}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Right: Education */}
          <ScrollReveal variant="slideRight" delay={0.2}>
            <GlassCard className="p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Formation</h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-indigo-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500/20 border-2 border-indigo-500" />
                    <span className="text-xs font-mono text-indigo-400">{edu.period}</span>
                    <h4 className="text-base font-semibold text-white mt-1">{edu.title}</h4>
                    <p className="text-sm text-zinc-400 mt-0.5">{edu.school}</p>
                    <p className="text-xs text-zinc-500 mt-1">{edu.details}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
