"use client";

import ScrollReveal from "./ScrollReveal";

/**
 * Titre de section : aligné à gauche comme le hero, d'une seule couleur.
 * La version précédente appliquait un dégradé sur le texte, ce qui teintait
 * arbitrairement une partie du mot selon sa longueur. Ici la structure est
 * portée par un filet vertical, pas par la couleur du texte.
 */
export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <ScrollReveal className="mb-12 sm:mb-16">
      <div className="flex gap-4 sm:gap-5">
        <span
          aria-hidden
          className="mt-1.5 w-[3px] shrink-0 rounded-full bg-gradient-to-b from-accent-500 to-accent2-500"
        />
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-mist-100">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-mist-400 text-base sm:text-lg max-w-[60ch]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
