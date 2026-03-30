import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hamza AIT YAHIATENE | Developpeur Full-Stack",
  description:
    "Portfolio de Hamza AIT YAHIATENE — Developpeur Full-Stack React, Next.js, Node.js, TypeScript. Disponible immediatement.",
  keywords: [
    "Hamza AIT YAHIATENE",
    "Developpeur Full-Stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Hamza AIT YAHIATENE | Developpeur Full-Stack",
    description:
      "Developpeur Full-Stack avec experience en React, Next.js, Node.js et TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-zinc-200`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
