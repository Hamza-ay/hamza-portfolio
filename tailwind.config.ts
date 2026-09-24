import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");

/**
 * Palette "control plane" — le portfolio se lit comme une console d'exploitation,
 * pas comme un terminal de hacker. Base indigo profond (une vraie teinte, pas un
 * noir teinté), accent rose électrique pour la signature, périwinkle pour les
 * dégradés. Les couleurs d'état ne servent qu'à indiquer un état réel.
 */
const accent = {
  50: "#FFF1F6",
  100: "#FFE0EC",
  200: "#FFC2D9",
  300: "#FF9BC0",
  400: "#FF72A6",
  500: "#FF4D8D",
  600: "#E92B70",
  700: "#C01555",
  800: "#93103F",
  900: "#650A2B",
  DEFAULT: "#FF4D8D",
};

const accent2 = {
  50: "#EFF3FF",
  100: "#DDE5FF",
  200: "#BCCBFF",
  300: "#97ADFF",
  400: "#7A93FF",
  500: "#6C8CFF",
  600: "#4A66E8",
  700: "#3850BF",
  800: "#2A3C8F",
  900: "#1C2A63",
  DEFAULT: "#6C8CFF",
};

const mist = {
  100: "#E8ECF5",
  200: "#D3DAEA",
  300: "#AFBAD3",
  400: "#8C99B8",
  500: "#6D7B9C",
  600: "#52607F",
  700: "#3A4763",
  800: "#27324A",
  900: "#171F31",
};

const ink = {
  DEFAULT: "#0B1020",
  raised: "#121A30",
  line: "#22304F",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent,
        accent2,
        mist,
        ink,
        ok: "#2FD49A",
        warn: "#FFB020",
        fail: "#FF5C5C",
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: ink.DEFAULT,
            foreground: mist[100],
            primary: { ...accent, foreground: "#2A0616" },
          },
        },
      },
    }),
  ],
};
export default config;
