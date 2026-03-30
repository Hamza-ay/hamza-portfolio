export const personalInfo = {
  name: "Hamza",
  lastName: "AIT YAHIATENE",
  title: "Developpeur Full-Stack",
  email: "aityahiatenehamza0@gmail.com",
  phone: "07 48 41 41 22",
  location: "Lille, France",
  github: "https://github.com/Hamza-ay",
  linkedin: "#",
  bio: "Developpeur Full-Stack avec une experience concrete en React, Next.js, Node.js et TypeScript. Competent en architecture MCP, integration d'APIs REST, automatisation de workflows et developpement IA-assiste. Formation solide en traitement du signal et mathematiques appliquees.",
  availability: "Disponible immediatement",
  typingWords: [
    "des applications web",
    "des APIs performantes",
    "des interfaces modernes",
    "des solutions IA",
  ],
};

export const skills = {
  frontend: [
    { name: "React", icon: "SiReact", color: "#61DAFB" },
    { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
    { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
    { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "NestJS", icon: "SiNestjs", color: "#E0234E" },
    { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
    { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
    { name: "Python", icon: "SiPython", color: "#3776AB" },
    { name: "PHP", icon: "SiPhp", color: "#777BB4" },
  ],
  tools: [
    { name: "Git", icon: "SiGit", color: "#F05032" },
    { name: "Docker", icon: "SiDocker", color: "#2496ED" },
    { name: "Linux", icon: "SiLinux", color: "#FCC624" },
    { name: "Nginx", icon: "SiNginx", color: "#009639" },
    { name: "Supabase", icon: "SiSupabase", color: "#3FCF8E" },
    { name: "WordPress", icon: "SiWordpress", color: "#21759B" },
  ],
  ai: [
    { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00" },
    { name: "Claude AI", icon: "SiAnthropic", color: "#D4A574" },
    { name: "GitHub Copilot", icon: "SiGithubcopilot", color: "#ffffff" },
  ],
};

export const experiences = [
  {
    period: "Fev. 2026 — Avr. 2026",
    title: "Stagiaire Developpeur Web & Automatisations",
    company: "ON WEB DESIGN",
    location: "Paris",
    description: "Agence digitale",
    tasks: [
      "Developpement de sites web responsives avec HTML5, CSS3, JavaScript, PHP",
      "Integration et personnalisation de solutions CMS (WordPress) pour des clients B2B",
      "Developpement d'APIs REST et integrations tierces",
      "Conception de structures MCP pour l'automatisation des processus internes",
      "Optimisation SEO technique et performances",
    ],
    tags: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "API REST", "SEO"],
  },
  {
    period: "Oct. 2025 — Fev. 2026",
    title: "Stagiaire Developpeur Full-Stack IA & Architecture MCP",
    company: "PROPERIS",
    location: "Lille",
    description: "SAS — Conciergerie Airbnb",
    tasks: [
      "Developpement d'interfaces React/Next.js pour la gestion des interventions et facturation",
      "Creation d'APIs Node.js/TypeScript pour le planning et suivi operationnel temps reel",
      "Architecture MCP : configuration de serveurs, developpement de tools metier",
      "Integration WhatsApp Bot pour notifications et communication automatisee",
      "Pair programming IA-augmente avec Claude Code et GitHub Copilot",
    ],
    tags: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MCP"],
  },
  {
    period: "Avr. 2024 — Juin 2024",
    title: "Stagiaire Developpeur — Machine Learning",
    company: "DM-CONSULT-IT",
    location: "Wattignies",
    description: "",
    tasks: [
      "Developpement et optimisation d'algorithmes de machine learning",
      "Conception logicielle, tests, debugging et suivi de projet",
    ],
    tags: ["Python", "Machine Learning", "TensorFlow"],
  },
];

export const education = [
  {
    period: "2023 — 2026",
    title: "Master — Traitement du Signal et des Images",
    school: "Universite du Littoral Cote d'Opale — Calais",
    details: "Deep Learning, traitement d'images, reconnaissance de formes, TensorFlow, POO C++",
  },
  {
    period: "2022 — 2023",
    title: "Master 1 — Recherche Operationnelle",
    school: "Universite Mouloud Mammeri de Tizi Ouzou — Algerie",
    details: "Programmation lineaire, gestion des stocks, optimisation",
  },
  {
    period: "2018 — 2022",
    title: "Licence en Mathematiques",
    school: "Universite Mouloud Mammeri de Tizi Ouzou — Algerie",
    details: "Optimisation, probabilites et statistiques, algebre lineaire, analyse",
  },
];

export const projects = [
  {
    title: "ImmoGen — Virtual Staging IA",
    description:
      "Plateforme SaaS de home staging virtuel par IA. Pipeline GPT-4o Vision pour analyse architecturale + GPT Image pour generation. Systeme de credits, Stripe/PayPal, portail client et admin.",
    tags: ["Next.js", "FastAPI", "Python", "OpenAI", "PostgreSQL", "Redis", "Stripe"],
    image: "/projects/immogen.svg",
    github: "#",
    live: "https://immogen.fr",
    featured: true,
  },
  {
    title: "Properis — Plateforme de Gestion",
    description:
      "Application full-stack de gestion pour conciergerie Airbnb : interventions, equipes, stocks, facturation, planning temps reel. Architecture microservices avec 14+ services NestJS.",
    tags: ["React", "Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker"],
    image: "/projects/properis.svg",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "NexYweb Coach — Plugin WordPress",
    description:
      "Plugin WordPress tout-en-un pour le coaching SEO : missions, gamification, integration Google Site Kit, portail client, auto-updater.",
    tags: ["PHP", "WordPress", "SEO", "JavaScript", "Composer"],
    image: "/projects/nexyweb.svg",
    github: "#",
    live: null,
    featured: true,
  },
  {
    title: "Reconnaissance de Nombres — Deep Learning",
    description:
      "Reseau de neurones profond entraine sur le dataset MNIST pour la reconnaissance de chiffres manuscrits. Precision > 98%.",
    tags: ["Python", "TensorFlow", "Keras", "Deep Learning"],
    image: "/projects/mnist.svg",
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Classification d'Images — Transfer Learning",
    description:
      "Modele VGG16 pre-entraine sur CIFAR-10 avec fine-tuning pour la classification d'images multi-classes.",
    tags: ["Python", "TensorFlow", "VGG16", "Transfer Learning"],
    image: "/projects/transfer.svg",
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "WhatsApp Bot — Automatisation",
    description:
      "Bot WhatsApp pour la communication automatisee avec les clients : notifications d'interventions, rappels, suivi en temps reel.",
    tags: ["Node.js", "TypeScript", "WhatsApp API", "MCP"],
    image: "/projects/whatsapp.svg",
    github: "#",
    live: null,
    featured: false,
  },
];

export const languages = [
  { name: "Francais", level: "C1 (courant)", flag: "🇫🇷" },
  { name: "Anglais", level: "B2 (professionnel)", flag: "🇬🇧" },
  { name: "Kabyle", level: "Langue maternelle", flag: "🏔️" },
];

export const interests = [
  { name: "Musculation", emoji: "💪" },
  { name: "Guitare", emoji: "🎸" },
  { name: "Percussion", emoji: "🥁" },
  { name: "Football", emoji: "⚽" },
];
