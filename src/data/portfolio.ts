export const personalInfo = {
  name: "Hamza",
  lastName: "AIT YAHIATENE",
  title: "Data Scientist & Développeur Logiciel",
  email: "aityahiatenehamza0@gmail.com",
  phone: "07 48 41 41 22",
  location: "Lille, France",
  github: "https://github.com/Hamza-ay",
  linkedin: "https://www.linkedin.com/in/hamza-ait-yahiatene-7a795328a",
  bio: "Passionné par la data science et le développement d'applications intelligentes, je transforme des données brutes en insights stratégiques et en produits concrets. Mon Master en Traitement du Signal et des Images, combiné à une base solide en mathématiques appliquées, me permet de concevoir des pipelines de machine learning, des dashboards analytiques temps réel et des applications full-stack pilotées par la donnée.",
  aboutDescription: `Je m'appelle Hamza Ait Yahiatene, j'ai 25 ans et je suis fraîchement diplômé d'un Master en Traitement du Signal et des Images à l'Université du Littoral Côte d'Opale (Calais). Depuis mes études en mathématiques à l'Université Mouloud Mammeri de Tizi Ouzou en Algérie, j'ai toujours été fasciné par l'extraction de sens à partir des données. C'est cette curiosité qui m'a naturellement conduit vers la data science et le développement d'applications intelligentes.

Mon parcours académique m'a permis de construire une base solide en mathématiques appliquées — optimisation, statistiques, algèbre linéaire — que je combine avec une expertise pratique en machine learning (Scikit-learn, TensorFlow), analyse de données (Pandas, SQL) et visualisation. Ce double profil data + développement me permet de couvrir l'ensemble de la chaîne : de l'exploration des données à la mise en production de modèles et dashboards.

Ce qui me motive, c'est de transformer des données en décisions. Qu'il s'agisse de concevoir un pipeline de traitement d'images par IA, de construire des tableaux de bord analytiques temps réel pour la gestion immobilière, ou d'entraîner des modèles de classification — chaque projet a été une occasion de repousser mes limites.

Je suis convaincu que les meilleurs data scientists sont ceux qui savent aussi mettre en production. Mon expertise full-stack (React, NestJS, PostgreSQL) me donne une perspective unique pour intégrer l'intelligence artificielle directement dans des applications web performantes.`,
  availability: "Disponible immédiatement",
  typingWords: [
    "des modèles prédictifs",
    "des dashboards analytiques",
    "des pipelines de données",
    "des applications IA",
  ],
};

export const skills = {
  data: [
    { name: "Python", icon: "SiPython", color: "#3776AB" },
    { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00" },
  ],
  frontend: [
    { name: "React", icon: "SiReact", color: "#61DAFB" },
    { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
  ],
  backend: [
    { name: "NestJS", icon: "SiNestjs", color: "#E0234E" },
    { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
  ],
  tools: [
    { name: "Git", icon: "SiGit", color: "#F05032" },
    { name: "Claude Code", icon: "SiAnthropic", color: "#D4A574" },
  ],
};

export const experiences = [
  {
    period: "Fév. 2026 — Avr. 2026",
    title: "Stagiaire Développeur Web & Automatisations",
    company: "ON WEB DESIGN",
    location: "Lille",
    description: "Agence digitale",
    tasks: [
      "Développement de sites web responsives avec HTML5, CSS3, JavaScript, PHP",
      "Intégration et personnalisation de solutions CMS (WordPress) pour des clients B2B",
      "Développement d'APIs REST et intégrations tierces",
      "Conception de structures MCP pour l'automatisation des processus internes",
      "Optimisation SEO technique et performances",
    ],
    tags: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "API REST", "SEO"],
  },
  {
    period: "Oct. 2025 — Fév. 2026",
    title: "Stagiaire Développeur Full-Stack IA & Architecture MCP",
    company: "PROPERIS",
    location: "Lille",
    description: "SAS — Conciergerie Airbnb",
    tasks: [
      "Analyse de données opérationnelles avec PostgreSQL : dashboards temps réel, valorisation des stocks FIFO, métriques d'activité et KPIs",
      "Conception de visualisations de données interactives (Recharts) : graphiques de CA, suivi des interventions, statistiques par propriété et par agent",
      "Développement d'un service de machine learning pour l'optimisation des tournées de livraison (algorithme VROOM) et la prédiction de besoins en linge",
      "Développement d'un portail livreur pour le transfert de linge entre entrepôts et l'organisation de tournées quotidiennes de dépôt dans les logements",
      "Création d'APIs Node.js/TypeScript pour le suivi opérationnel temps réel et l'automatisation des workflows",
      "Pair programming IA-augmenté avec Claude Code et GitHub Copilot",
    ],
    tags: ["Python", "PostgreSQL", "Data Viz", "React", "NestJS", "TypeScript"],
  },
  {
    period: "Avr. 2024 — Juin 2024",
    title: "Stagiaire Développeur — Machine Learning",
    company: "DM-CONSULT-IT",
    location: "Wattignies",
    description: "",
    tasks: [
      "Développement et optimisation d'algorithmes de machine learning",
      "Conception logicielle, tests, debugging et suivi de projet",
    ],
    tags: ["Python", "Machine Learning", "TensorFlow"],
  },
];

export const education = [
  {
    period: "2023 — 2026",
    title: "Master — Traitement du Signal et des Images",
    school: "Université du Littoral Côte d'Opale — Calais",
    details: "Deep Learning, traitement d'images, reconnaissance de formes, classification d'images (TensorFlow), POO C++. Projets : réseau de neurones sur MNIST, transfer learning VGG16 sur CIFAR-10.",
  },
  {
    period: "Sept. 2022 — Juin 2023",
    title: "Master 1 — Recherche Opérationnelle",
    school: "Université Mouloud Mammeri de Tizi Ouzou — Algérie",
    details: "Programmation linéaire, gestion des stocks, optimisation combinatoire, modélisation mathématique.",
  },
  {
    period: "Sept. 2018 — Sept. 2022",
    title: "Licence en Mathématiques",
    school: "Université Mouloud Mammeri de Tizi Ouzou — Algérie",
    details: "1ère année Math-Info, puis spécialisation Mathématiques. Optimisation, probabilités et statistiques, algèbre linéaire, analyse, programmation.",
  },
];

const basePath = process.env.NODE_ENV === "production" ? "/hamza-portfolio" : "";

export const projects = [
  {
    title: "ImmoGen — Virtual Staging IA",
    description:
      "Plateforme SaaS de home staging virtuel par IA. Pipeline GPT-4o Vision pour analyse architecturale + GPT Image pour génération.",
    details: `ImmoGen est une plateforme SaaS de home staging virtuel qui exploite l'intelligence artificielle pour transformer des photos de biens immobiliers vides en intérieurs meublés et décorés. Le cœur du système repose sur un pipeline en deux étapes : GPT-4o Vision analyse d'abord la photo pour comprendre l'architecture de la pièce (dimensions, luminosité, style), puis GPT Image génère une version meublée en respectant les contraintes spatiales détectées.

L'application intègre un système de crédits avec paiement via Stripe et PayPal, un portail client pour gérer ses projets de staging, et un panneau d'administration complet. Le backend FastAPI orchestre les appels IA, gère les files d'attente de traitement et stocke les résultats. L'interface est entièrement responsive mobile et a été intégrée en tant que PWA (Progressive Web App), permettant aux utilisateurs d'installer l'application sur leur téléphone comme une app native. Le tout est déployé avec une architecture pensée pour la montée en charge, avec Redis pour le cache et la gestion des sessions.`,
    tags: ["Next.js", "FastAPI", "Python", "OpenAI", "PostgreSQL", "Redis", "Stripe"],
    images: [`${basePath}/projects/immogen.svg`],
    github: "#",
    live: "https://immogen.fr",
    featured: true,
  },
  {
    title: "Properis — Plateforme de Gestion Data-Driven",
    description:
      "Application full-stack pilotée par la donnée pour conciergerie Airbnb : dashboards analytiques, visualisation temps réel, optimisation ML des tournées, gestion de stocks FIFO.",
    details: `Properis est une plateforme complète de gestion conçue pour une conciergerie Airbnb, avec un fort accent sur l'analyse de données et la prise de décision data-driven. Elle couvre l'ensemble du cycle opérationnel avec des dashboards analytiques temps réel : suivi du chiffre d'affaires (HT/TTC), visualisation des interventions par propriété, métriques d'activité des agents, et valorisation des stocks de linge selon la méthode FIFO.

Le volet data science inclut un service de machine learning pour l'optimisation des tournées de livraison de linge via l'algorithme VROOM (Vehicle Routing), la prédiction des besoins en stocks par propriété, et l'analyse des patterns de réservation à partir des données iCal Airbnb/Booking. Les visualisations interactives (Recharts) permettent d'explorer les données à travers des graphiques de tendances, des tableaux croisés et des indicateurs clés de performance.

La plateforme intègre un portail livreur dédié à la logistique du linge : transferts entre un entrepôt principal et des entrepôts secondaires, et organisation de tournées quotidiennes optimisées pour déposer le linge propre dans les logements.

L'architecture repose sur plus de 14 microservices NestJS orchestrés par un API Gateway, chacun avec sa propre base PostgreSQL via Prisma ORM et communication par événements Redis Pub/Sub. Le frontend comprend quatre portails distincts — administration, agents terrain, livreurs et clients — tous développés en Next.js avec Tailwind CSS, responsive mobile et intégrés en PWA. L'ensemble est conteneurisé avec Docker et déployé sur OVH avec Nginx et monitoring complet.`,
    tags: ["PostgreSQL", "Python", "Data Viz", "NestJS", "React", "Docker"],
    images: [`${basePath}/projects/properis.svg`],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "NexYweb Coach — Plugin WordPress",
    description:
      "Plugin WordPress tout-en-un pour le coaching SEO : missions, gamification, intégration Google Site Kit, auto-updater.",
    details: `NexYweb Coach est un plugin WordPress développé pour une agence digitale, destiné à accompagner les clients dans l'amélioration de leur référencement naturel de manière ludique et progressive. Le plugin propose un système de missions SEO guidées — optimisation des balises, amélioration du contenu, maillage interne — avec un mécanisme de gamification (points, niveaux, badges) qui motive les utilisateurs à progresser.

L'intégration avec Google Site Kit permet de remonter les données réelles de Search Console et Analytics directement dans le tableau de bord du plugin, offrant ainsi un suivi concret des résultats. Un portail client dédié présente les statistiques et les recommandations personnalisées. L'interface du portail est responsive mobile et intégrée en PWA, permettant aux clients de suivre leur progression SEO depuis leur téléphone. Le plugin inclut également un système d'auto-update depuis un dépôt GitHub privé, permettant de distribuer les mises à jour sans passer par le répertoire officiel WordPress.`,
    tags: ["PHP", "WordPress", "SEO", "JavaScript", "Composer"],
    images: [`${basePath}/projects/nexyweb.svg`],
    github: "#",
    live: null,
    featured: true,
  },
  {
    title: "Reconnaissance de Nombres — Deep Learning",
    description:
      "Réseau de neurones profond entraîné sur le dataset MNIST pour la reconnaissance de chiffres manuscrits. Précision > 98%.",
    details: null,
    tags: ["Python", "TensorFlow", "Keras", "Deep Learning"],
    images: [`${basePath}/projects/mnist.svg`],
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Détection de Fake News — NLP",
    description:
      "Classification de vraies et fausses informations par machine learning : arbres de décision et SVM avec prétraitement Pandas.",
    details: null,
    tags: ["Python", "Scikit-learn", "Pandas", "NLP"],
    images: [`${basePath}/projects/nlp.svg`],
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Classification d'Images — Transfer Learning",
    description:
      "Modèle VGG16 pré-entraîné sur CIFAR-10 avec fine-tuning pour la classification d'images multi-classes.",
    details: null,
    tags: ["Python", "TensorFlow", "VGG16", "Transfer Learning"],
    images: [`${basePath}/projects/transfer.svg`],
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "WhatsApp Bot — Automatisation",
    description:
      "Bot WhatsApp pour la communication automatisée avec les clients : notifications d'interventions, rappels, suivi en temps réel.",
    details: null,
    tags: ["Node.js", "TypeScript", "WhatsApp API", "MCP"],
    images: [`${basePath}/projects/whatsapp.svg`],
    github: "#",
    live: null,
    featured: false,
  },
];

export const languages = [
  { name: "Français", level: "TCF C1 (courant)" },
  { name: "Anglais", level: "CLES B2 (professionnel)" },
  { name: "Kabyle", level: "Langue maternelle" },
];

export const interests = [
  { name: "Musculation", emoji: "💪" },
  { name: "Guitare", emoji: "🎸" },
  { name: "Percussion", emoji: "🥁" },
  { name: "Football (7 saisons en club)", emoji: "⚽" },
];
