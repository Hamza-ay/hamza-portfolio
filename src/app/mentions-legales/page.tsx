import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Hamza AIT YAHIATENE",
  description: "Mentions légales du portfolio de Hamza AIT YAHIATENE.",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-zinc-200 py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 mb-8 transition-colors"
        >
          &larr; Retour au portfolio
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Mentions légales
        </h1>

        <div className="space-y-8 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Éditeur du site
            </h2>
            <p>
              Ce site est édité par <strong className="text-zinc-200">Hamza AIT YAHIATENE</strong>,
              personne physique.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>Email : aityahiatenehamza0@gmail.com</li>
              <li>Localisation : Lille, France</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Hébergement
            </h2>
            <p>
              Ce site est hébergé par <strong className="text-zinc-200">GitHub Pages</strong>,
              un service de GitHub, Inc.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>GitHub, Inc.</li>
              <li>88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis</li>
              <li>Site : https://github.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Propriété intellectuelle
            </h2>
            <p>
              Le code source de ce portfolio est distribué sous licence MIT.
              Les contenus textuels, images et créations graphiques sont la propriété
              de Hamza AIT YAHIATENE, sauf mention contraire.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Protection des données personnelles (RGPD)
            </h2>
            <p>
              Ce site est un portfolio statique hébergé sur GitHub Pages.
              <strong className="text-zinc-200"> Aucune donnée personnelle n&apos;est collectée,
              stockée ou traitée</strong> par ce site.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <strong className="text-zinc-300">Formulaire de contact :</strong> Le formulaire
                ouvre votre client email (mailto:). Aucune donnée n&apos;est transmise à un serveur.
              </li>
              <li>
                <strong className="text-zinc-300">Cookies :</strong> Ce site n&apos;utilise aucun
                cookie ni traceur analytique.
              </li>
              <li>
                <strong className="text-zinc-300">Hébergeur :</strong> GitHub Pages peut collecter
                des données techniques (adresse IP, logs d&apos;accès) conformément à sa propre{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  politique de confidentialité
                </a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Droit applicable
            </h2>
            <p>
              Le présent site et ses mentions légales sont régis par le droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Contact
            </h2>
            <p>
              Pour toute question relative à ces mentions légales, vous pouvez me contacter
              à l&apos;adresse : <a href="mailto:aityahiatenehamza0@gmail.com" className="text-indigo-400 hover:text-indigo-300 underline">aityahiatenehamza0@gmail.com</a>
            </p>
          </section>
        </div>

        <p className="mt-12 text-xs text-zinc-600">
          Dernière mise à jour : mars 2026
        </p>
      </div>
    </main>
  );
}
