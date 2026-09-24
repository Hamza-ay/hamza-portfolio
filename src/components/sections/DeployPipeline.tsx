"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Le pipeline qui publie réellement ce site : commit sur main, build Next,
 * export statique, publication sur gh-pages, mise en ligne. C'est le geste du
 * métier, montré sur l'objet que le visiteur a sous les yeux — pas une
 * illustration abstraite.
 *
 * Une seule séquence orchestrée au chargement : les étapes s'allument l'une
 * après l'autre, puis plus rien ne bouge. `prefers-reduced-motion` affiche
 * l'état final immédiatement.
 */
const STAGES = [
  { id: "commit", label: "commit", detail: "main" },
  { id: "build", label: "build", detail: "next build" },
  { id: "export", label: "export", detail: "static" },
  { id: "deploy", label: "deploy", detail: "gh-pages" },
  { id: "live", label: "live", detail: "en ligne" },
];

const STEP_MS = 420;

export default function DeployPipeline() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(reduce ? STAGES.length : 0);

  useEffect(() => {
    if (reduce) {
      setDone(STAGES.length);
      return;
    }
    const timers = STAGES.map((_, i) =>
      setTimeout(() => setDone(i + 1), 700 + i * STEP_MS)
    );
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  const complete = done >= STAGES.length;

  return (
    <div
      className="w-full rounded-lg border border-ink-line bg-ink-raised/70 backdrop-blur-sm hairline-top overflow-hidden"
      role="img"
      aria-label="Pipeline de déploiement de ce site : commit, build, export, déploiement, mise en ligne."
    >
      <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-ink-line/70">
        <span className="font-mono text-[11px] sm:text-xs text-mist-400">
          hamza-portfolio
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] sm:text-xs">
          <motion.span
            animate={complete ? { opacity: [1, 0.35, 1] } : { opacity: 0.35 }}
            transition={
              complete && !reduce
                ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0 }
            }
            className={`w-1.5 h-1.5 rounded-full ${complete ? "bg-ok" : "bg-mist-600"}`}
          />
          <span className={complete ? "text-ok" : "text-mist-500"}>
            {complete ? "déployé" : "en cours"}
          </span>
        </span>
      </div>

      {/* Desktop : le pipeline se lit horizontalement, comme dans un CI. */}
      <ol className="hidden sm:flex items-stretch px-5 py-5">
        {STAGES.map((stage, i) => {
          const lit = i < done;
          return (
            <li key={stage.id} className="flex-1 flex items-center min-w-0">
              <div className="flex flex-col items-start gap-1.5 min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-300 ${
                      lit
                        ? "bg-accent-500 shadow-[0_0_10px_rgba(255,77,141,0.8)]"
                        : "bg-mist-700"
                    }`}
                  />
                  <span
                    className={`font-mono text-xs transition-colors duration-300 ${
                      lit ? "text-mist-100" : "text-mist-600"
                    }`}
                  >
                    {stage.label}
                  </span>
                </span>
                <span className="font-mono text-[10px] text-mist-600 pl-[18px] truncate">
                  {stage.detail}
                </span>
              </div>
              {i < STAGES.length - 1 && (
                <span className="flex-1 h-px mx-3 bg-mist-800 relative overflow-hidden">
                  <motion.span
                    initial={{ scaleX: reduce ? 1 : 0 }}
                    animate={{ scaleX: i < done - 1 || complete ? 1 : 0 }}
                    transition={{ duration: reduce ? 0 : 0.34, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                    className="absolute inset-0 bg-gradient-to-r from-accent-500/80 to-accent2-500/80"
                  />
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* Mobile : même lecture, en colonne. */}
      <ol className="sm:hidden px-5 py-4 space-y-3">
        {STAGES.map((stage, i) => {
          const lit = i < done;
          return (
            <li key={stage.id} className="flex items-center gap-3">
              <span
                className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-300 ${
                  lit ? "bg-accent-500 shadow-[0_0_8px_rgba(255,77,141,0.8)]" : "bg-mist-700"
                }`}
              />
              <span
                className={`font-mono text-xs transition-colors duration-300 ${
                  lit ? "text-mist-100" : "text-mist-600"
                }`}
              >
                {stage.label}
              </span>
              <span className="font-mono text-[10px] text-mist-600 ml-auto">
                {stage.detail}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
