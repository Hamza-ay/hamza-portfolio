"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { personalInfo } from "@/data/portfolio";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiAlertCircle, FiCheck } from "react-icons/fi";

const FORMSPREE_ID = "xlgongqa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", consent: false });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", consent: false });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Contact" subtitle="Envie de collaborer ? Contactez-moi !" />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <ScrollReveal variant="slideLeft" className="md:col-span-2">
            <div className="space-y-6">
              <GlassCard className="p-6">
                <div className="space-y-5">
                  <ContactItem
                    href={`mailto:${personalInfo.email}`}
                    icon={<FiMail size={18} className="text-indigo-400" />}
                    label="Email"
                    value={personalInfo.email}
                    colorClass="bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/20"
                  />
                  <ContactItem
                    href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                    icon={<FiPhone size={18} className="text-purple-400" />}
                    label="Téléphone"
                    value={personalInfo.phone}
                    colorClass="bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20"
                  />
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                      <FiMapPin size={18} className="text-pink-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Localisation</p>
                      <p className="text-sm">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <div className="flex gap-3">
                {[
                  { href: personalInfo.github, icon: <FiGithub size={20} /> },
                  { href: personalInfo.linkedin, icon: <FiLinkedin size={20} /> },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal variant="slideRight" delay={0.2} className="md:col-span-3">
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField
                  label="Nom"
                  type="text"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={(v) => setForm((s) => ({ ...s, name: v }))}
                  required
                />
                <FormField
                  label="Email"
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                  <textarea
                    placeholder="Votre message..."
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-colors resize-none"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="rgpd-consent"
                    checked={form.consent}
                    onChange={(e) => setForm((s) => ({ ...s, consent: e.target.checked }))}
                    required
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/[0.03] text-indigo-500 focus:ring-indigo-500/30 focus:ring-offset-0 accent-indigo-500"
                  />
                  <label htmlFor="rgpd-consent" className="text-xs text-zinc-500 leading-relaxed">
                    J&apos;accepte que mes informations soient utilisées pour me recontacter dans le cadre de ma demande.
                    Conformément au RGPD, aucune donnée n&apos;est stockée sur ce site.{" "}
                    <a href="/hamza-portfolio/mentions-legales" className="text-indigo-400 hover:text-indigo-300 underline">
                      Mentions légales
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "sending" && "Envoi en cours..."}
                  {status === "success" && (
                    <><FiCheck size={16} /> Message envoyé !</>
                  )}
                  {status === "error" && (
                    <><FiAlertCircle size={16} /> Erreur, réessayez</>
                  )}
                  {status === "idle" && (
                    <><FiSend size={16} /> Envoyer</>
                  )}
                </button>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  href,
  icon,
  label,
  value,
  colorClass,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  colorClass: string;
}) {
  return (
    <a href={href} className="flex items-center gap-4 text-zinc-300 hover:text-indigo-400 transition-colors group">
      <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${colorClass}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-zinc-500">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </a>
  );
}

function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-400 mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-colors"
      />
    </div>
  );
}
