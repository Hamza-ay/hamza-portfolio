"use client";

import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <ScrollReveal className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-zinc-400 mt-3 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
    </ScrollReveal>
  );
}
