export const personalInfo = {
  name: "Hamza",
  lastName: "AIT YAHIATENE",
  title: "Ingénieur DevOps",
  email: "aityahiatenehamza0@gmail.com",
  phone: "07 48 41 41 22",
  location: "Lille, France",
  github: "https://github.com/Hamza-ay",
  linkedin: "https://www.linkedin.com/in/hamza-ait-yahiatene-7a795328a",
  bio: "Ingénieur DevOps, je construis et fiabilise la chaîne qui mène du code à la production : intégration continue, déploiement automatisé, conteneurisation et supervision. Mon objectif est simple — qu'une mise en production devienne un non-événement, reproductible et sans intervention manuelle.",
  aboutDescription: `Je m'appelle Hamza Ait Yahiatene, j'ai 25 ans et je suis ingénieur DevOps à Lille. Diplômé d'un Master en Traitement du Signal et des Images à l'Université du Littoral Côte d'Opale, après des études de mathématiques à l'Université Mouloud Mammeri de Tizi Ouzou, j'ai découvert en mettant mes propres projets en production que le vrai défi n'était pas d'écrire le code, mais de le livrer de façon fiable et répétable. C'est là que mon métier a pris forme.

Mon travail consiste à automatiser tout ce qui peut l'être entre un commit et un utilisateur : chaînes d'intégration et de déploiement continus avec Jenkins, conteneurisation Docker, administration de serveurs Linux, Apache et Tomcat, configuration Nginx, gestion des bases PostgreSQL et supervision des services en fonctionnement.

Cette approche, je l'ai mise en pratique sur des plateformes réellement en production : architectures en microservices conteneurisées, déploiements orchestrés sur serveurs dédiés, pipelines de build automatisés et supervision continue. Chaque incident évité en amont vaut mieux qu'un correctif en urgence.

Ma formation en mathématiques appliquées reste un atout au quotidien : elle m'a appris à mesurer avant de décider. On n'améliore que ce que l'on sait observer — c'est vrai d'un modèle statistique comme d'une infrastructure.`,
  availability: "Disponible immédiatement",
  typingWords: [
    "des pipelines CI/CD",
    "des déploiements automatisés",
    "des infrastructures fiables",
    "des environnements conteneurisés",
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
    { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS3", icon: "SiCss", color: "#1572B6" },
  ],
  backend: [
    { name: "NestJS", icon: "SiNestjs", color: "#E0234E" },
    { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
  ],
  tools: [
    { name: "Git", icon: "SiGit", color: "#F05032" },
    { name: "Claude Code", icon: "SiAnthropic", color: "#D4A574" },
    { name: "Jenkins", icon: "SiJenkins", color: "#D24939" },
    { name: "Tomcat", icon: "SiApachetomcat", color: "#F8DC75" },
    { name: "Apache", icon: "SiApache", color: "#D22128" },
    { name: "Linux", icon: "SiLinux", color: "#FCC624" },
  ],
};

export const experiences = [
  {
    period: "Depuis sept. 2026",
    title: "Gérant — Entrepreneur individuel",
    company: "AHXIA",
    location: "Lille",
    description: "Entreprise individuelle — développement & automatisation",
    tasks: [
      "Création et direction de l'entreprise depuis le 4 septembre 2026",
      "Mise en place de chaînes d'intégration et de déploiement continus (Jenkins)",
      "Administration de serveurs Linux, Apache et Tomcat, conteneurisation Docker",
      "Automatisation de processus métier et intégration de services tiers",
      "Accompagnement technique de bout en bout : cadrage, développement, mise en production et suivi",
    ],
    tags: ["Entrepreneuriat", "DevOps", "CI/CD", "Linux", "Automatisation"],
  },
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
    title: "Properis — Architecture Microservices Conteneurisée",
    description:
      "Plateforme de gestion pour conciergerie Airbnb : une vingtaine de microservices conteneurisés, quatre portails, déploiement automatisé et supervision continue en production.",
    details: `Properis est une plateforme complète de gestion pour une conciergerie Airbnb, déployée en production et utilisée au quotidien. L'enjeu technique principal n'était pas le développement des fonctionnalités, mais la mise en place d'une architecture capable de tenir en production sans intervention manuelle.

L'infrastructure repose sur une vingtaine de microservices orchestrés par un API Gateway, communiquant par événements Redis Pub/Sub, le tout entièrement conteneurisé avec Docker. Le déploiement est automatisé de bout en bout : chaîne d'intégration continue déclenchée à chaque push, build des images, publication au registre, puis mise à jour des conteneurs sur le serveur. Nginx assure la terminaison TLS, le routage des quatre domaines et les en-têtes de sécurité. La supervision couvre les sondes de santé de chaque service, la remontée d'erreurs et la rotation des journaux.

Le volet sécurité a fait l'objet d'un travail dédié : durcissement SSH, pare-feu, détection d'intrusion, secrets distincts par service et rotation des clés, conteneurs exécutés sans privilèges root, limites de ressources par service et sauvegardes automatisées de la base.

Côté fonctionnel, la plateforme couvre l'ensemble du cycle opérationnel à travers quatre portails distincts — administration, agents terrain, livreurs et clients — avec synchronisation horaire des plateformes de réservation, optimisation automatique des tournées de livraison, contrôle qualité des photos par comparaison d'images et facturation mensuelle générée automatiquement.`,
    tags: ["Docker", "CI/CD", "Nginx", "PostgreSQL", "NestJS", "Redis"],
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
    title: "Ma Bulle Bien-Être — Plateforme LMS",
    description:
      "Plateforme de formation en ligne dédiée au bien-être : yoga, sophrologie, hypnose et gestion du stress. Deux interfaces séparées, recommandation personnalisée et relances automatiques.",
    details: `Ma Bulle Bien-Être est une plateforme de formation en ligne sur mesure, conçue pour une praticienne du bien-être souhaitant diffuser ses programmes de yoga, sophrologie, hypnose et gestion du stress. L'enjeu était de proposer un parcours guidé et progressif, là où la plupart des solutions du marché se contentent d'une bibliothèque de vidéos.

Le système de recommandation oriente chaque visiteur vers le programme adapté à son besoin, à partir d'un choix par ressenti ou par problématique. Un programme de sept jours offert sert de porte d'entrée et permet de découvrir la méthode avant tout achat. L'offre combine ensuite achats à l'unité, packs thématiques et abonnements.

L'architecture repose sur deux interfaces distinctes : un espace apprenant et un back-office d'administration en marque blanche, qui partagent le même socle de données et le même code métier via un monorepo. Le lecteur vidéo est entièrement personnalisé et anonymisé, de façon à diffuser les contenus sans exposer leur source ni les rendre accessibles hors plateforme.

Côté engagement, une relance par email se déclenche automatiquement quatre jours après l'abandon d'un programme, avec une protection contre les envois répétés. L'authentification a fait l'objet d'un soin particulier : réinitialisation de mot de passe sécurisée sur les deux portails, limitation du nombre de tentatives, jetons hachés et réponses identiques que le compte existe ou non. Interface responsive avec thème clair et sombre mémorisé.`,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Tailwind"],
    images: [`${basePath}/projects/mabulle.svg`],
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
