"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input, Textarea } from "@heroui/react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { personalInfo } from "@/data/portfolio";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Contact Portfolio - ${formState.name}&body=${encodeURIComponent(formState.message)}%0A%0ADe: ${formState.name} (${formState.email})`;
    window.open(mailtoLink);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Contact"
          subtitle="Envie de collaborer ? Contactez-moi !"
        />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <ScrollReveal variant="slideLeft" className="md:col-span-2">
            <div className="space-y-6">
              <GlassCard className="p-6">
                <div className="space-y-5">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 text-zinc-300 hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                      <FiMail size={18} className="text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Email</p>
                      <p className="text-sm">{personalInfo.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 text-zinc-300 hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <FiPhone size={18} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Telephone</p>
                      <p className="text-sm">{personalInfo.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                      <FiMapPin size={18} className="text-pink-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Localisation</p>
                      <p className="text-sm">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Social links */}
              <div className="flex gap-3">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                >
                  <FiLinkedin size={20} />
                </motion.a>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal variant="slideRight" delay={0.2} className="md:col-span-3">
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Nom"
                  placeholder="Votre nom"
                  value={formState.name}
                  onValueChange={(v) => setFormState((s) => ({ ...s, name: v }))}
                  variant="bordered"
                  classNames={{
                    inputWrapper: "border-white/[0.08] hover:border-indigo-500/40 bg-white/[0.02]",
                    label: "text-zinc-400",
                    input: "text-white",
                  }}
                  isRequired
                />
                <Input
                  label="Email"
                  placeholder="votre@email.com"
                  type="email"
                  value={formState.email}
                  onValueChange={(v) => setFormState((s) => ({ ...s, email: v }))}
                  variant="bordered"
                  classNames={{
                    inputWrapper: "border-white/[0.08] hover:border-indigo-500/40 bg-white/[0.02]",
                    label: "text-zinc-400",
                    input: "text-white",
                  }}
                  isRequired
                />
                <Textarea
                  label="Message"
                  placeholder="Votre message..."
                  value={formState.message}
                  onValueChange={(v) => setFormState((s) => ({ ...s, message: v }))}
                  variant="bordered"
                  minRows={5}
                  classNames={{
                    inputWrapper: "border-white/[0.08] hover:border-indigo-500/40 bg-white/[0.02]",
                    label: "text-zinc-400",
                    input: "text-white",
                  }}
                  isRequired
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/20"
                >
                  {submitted ? (
                    "Message envoye !"
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Envoyer
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
