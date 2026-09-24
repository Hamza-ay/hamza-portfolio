import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// IBM Plex : dessinée pour la documentation technique d'IBM. Le registre mono
// porte tout ce qui relève de la machine (états, durées, versions), le sans
// porte la parole humaine.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const siteUrl = "https://hamza-ay.github.io/hamza-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hamza AIT YAHIATENE | Ingénieur DevOps",
  description:
    "Portfolio de Hamza AIT YAHIATENE — Ingénieur DevOps : intégration continue, déploiement automatisé et infrastructure. Jenkins, Docker, Linux, Apache, Tomcat, PostgreSQL. Disponible immédiatement à Lille, France.",
  keywords: [
    "Hamza AIT YAHIATENE",
    "Ingénieur DevOps",
    "DevOps",
    "CI/CD",
    "Jenkins",
    "Docker",
    "Linux",
    "Apache",
    "Tomcat",
    "Next.js",
    "TypeScript",
    "Python",
    "Portfolio",
    "Lille",
    "France",
    "Data Science",
    "Machine Learning",
  ],
  authors: [{ name: "Hamza AIT YAHIATENE" }],
  creator: "Hamza AIT YAHIATENE",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Hamza AIT YAHIATENE | Ingénieur DevOps",
    description:
      "Ingénieur DevOps : intégration continue, déploiement automatisé et infrastructure. Jenkins, Docker, Linux, Apache, Tomcat.",
    url: siteUrl,
    siteName: "Portfolio Hamza AIT YAHIATENE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza AIT YAHIATENE | Ingénieur DevOps",
    description:
      "Ingénieur DevOps : intégration continue, déploiement automatisé et infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hamza AIT YAHIATENE",
  jobTitle: "Ingénieur DevOps",
  url: siteUrl,
  sameAs: [
    "https://github.com/Hamza-ay",
    "https://www.linkedin.com/in/hamza-ait-yahiatene-7a795328a",
  ],
  email: "aityahiatenehamza0@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lille",
    addressCountry: "FR",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Python",
    "Docker",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark overflow-x-hidden" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plexSans.variable} ${plexMono.variable} antialiased font-sans text-mist-200 overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
