export type Lang = "fr" | "en";

export const NAV_ITEMS: Record<Lang, { id: string; label: string }[]> = {
  fr: [
    { id: "apropos", label: "À propos" },
    { id: "experience", label: "Expérience" },
    { id: "stack", label: "Stack" },
    { id: "projets", label: "Projets" },
    { id: "process", label: "Process" },
  ],
  en: [
    { id: "apropos", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "stack", label: "Stack" },
    { id: "projets", label: "Projects" },
    { id: "process", label: "Process" },
  ],
};

export const UI: Record<Lang, Record<string, string>> = {
  fr: {
    themeToDark: "Passer en thème sombre",
    themeToLight: "Passer en thème clair",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    langToFr: "Passer le site en français",
    langToEn: "Passer le site en anglais",
    contactCta: "Me contacter",
    preloaderText: "Chargement du portfolio",

    heroAvailable: "Disponible — freelance & CDI",
    heroExpBadgeStrong: "2+ ans",
    heroExpBadgeRest: "d'expérience en production",
    heroTitleLine1: "Software",
    heroTitleLine2: "Engineer",
    heroParagraph:
      "Je développe des applications web modernes, performantes et évolutives, de l'interface utilisateur jusqu'au déploiement en production.",
    heroCtaPrimary: "Voir mes projets",
    heroCtaSecondary: "Télécharger mon CV",
    terminalTitle: "deploy — production",
    portraitAlt: "Portrait de Nomena Andrianiaina",

    aboutEyebrow: "01 — À propos",
    aboutHeading: "Je conçois, je livre, et je reste responsable de ce qui tourne.",
    aboutP1:
      "Ingénieur Logiciel sorti de l'École Nationale d'Informatique (ENI) de Fianarantsoa. Je conçois et je livre des applications web robustes, du design de l'architecture jusqu'au déploiement en production — plus de deux ans à construire des systèmes fiables et performants, à écrire des API solides et à automatiser tout ce qui peut l'être.",
    aboutP2:
      "Je travaille aussi bien sur l'expérience utilisateur que sur l'infrastructure qui la sert : pipelines CI/CD, conteneurisation, reverse proxy, observabilité et déploiements sans interruption.",

    expEyebrow: "02 — Expérience",
    expHeading: "Parcours",

    stackEyebrow: "03 — Stack technique",
    stackHeading: "Stack technique",
    stackSubheading:
      "Des technologies choisies pour ce qu'elles résolvent, pas pour leur popularité — et utilisées en production, pas seulement en side project.",

    projectsEyebrow: "04 — Projets",
    projectsHeading: "Systèmes construits et mis en production",
    projectsFilterAria: "Filtrer les projets",
    projectGithub: "GitHub",
    projectDemo: "Démo",
    projectImageAltSuffix: " — capture d'écran",

    processEyebrow: "05 — Processus",
    processHeading: "Du commit à la production",
    processSubheading:
      "Chaque commit suit le même chemin : rien ne part en production sans tests verts, image versionnée et rollback prêt.",

    contactEyebrow: "06 — Contact",
    contactHeading: "Parlons de votre prochain projet.",
    contactParagraph:
      "Un système à concevoir, une API à reprendre, une chaîne de déploiement à fiabiliser ? Décrivez le problème, je réponds sous 24 h.",
    cvLinkValue: "Télécharger le CV (PDF)",
    formName: "Nom",
    formNamePlaceholder: "Votre nom",
    formEmail: "Email",
    formEmailPlaceholder: "vous@entreprise.com",
    formMessage: "Message",
    formMessagePlaceholder: "Décrivez votre projet en quelques lignes…",
    formSubmit: "Envoyer le message",
    formSubmitSending: "Envoi…",
    formSubmitSent: "Message envoyé ✓",
    formSuccessNote: "Merci — je reviens vers vous sous 24 h.",
    formErrorNote: "Une erreur est survenue. Réessayez ou écrivez-moi directement à nomenaf.pro@gmail.com.",

    footerRole: "Software Engineer",
    footerTagline: "Design ✦ Build ✦ Operate",
  },
  en: {
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langToFr: "Switch site to French",
    langToEn: "Switch site to English",
    contactCta: "Get in touch",
    preloaderText: "Loading portfolio",

    heroAvailable: "Available — freelance & full-time",
    heroExpBadgeStrong: "2+ yrs",
    heroExpBadgeRest: "of production experience",
    heroTitleLine1: "Software",
    heroTitleLine2: "Engineer",
    heroParagraph:
      "I build modern, performant, scalable web applications — from the user interface all the way to production deployment.",
    heroCtaPrimary: "View my projects",
    heroCtaSecondary: "Download my CV",
    terminalTitle: "deploy — production",
    portraitAlt: "Portrait of Nomena Andrianiaina",

    aboutEyebrow: "01 — About",
    aboutHeading: "I design, I ship, and I stay accountable for what's running.",
    aboutP1:
      "Software Engineer, graduate of the École Nationale d'Informatique (ENI) in Fianarantsoa. I design and ship robust web applications, from architecture to production deployment — over two years building reliable, high-performing systems, writing solid APIs, and automating everything that can be automated.",
    aboutP2:
      "I work on the user experience just as much as the infrastructure behind it: CI/CD pipelines, containerization, reverse proxying, observability, and zero-downtime deployments.",

    expEyebrow: "02 — Experience",
    expHeading: "Journey",

    stackEyebrow: "03 — Tech stack",
    stackHeading: "Tech stack",
    stackSubheading:
      "Technologies picked for what they solve, not for their popularity — and used in production, not just in side projects.",

    projectsEyebrow: "04 — Projects",
    projectsHeading: "Systems built and shipped to production",
    projectsFilterAria: "Filter projects",
    projectGithub: "GitHub",
    projectDemo: "Demo",
    projectImageAltSuffix: " — screenshot",

    processEyebrow: "05 — Process",
    processHeading: "From commit to production",
    processSubheading:
      "Every commit follows the same path: nothing ships to production without green tests, a versioned image, and a ready rollback.",

    contactEyebrow: "06 — Contact",
    contactHeading: "Let's talk about your next project.",
    contactParagraph:
      "A system to design, an API to take over, a deployment chain to make reliable? Describe the problem — I reply within 24 hours.",
    cvLinkValue: "Download CV (PDF)",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "you@company.com",
    formMessage: "Message",
    formMessagePlaceholder: "Describe your project in a few lines…",
    formSubmit: "Send message",
    formSubmitSending: "Sending…",
    formSubmitSent: "Message sent ✓",
    formSuccessNote: "Thanks — I'll get back to you within 24 hours.",
    formErrorNote: "Something went wrong. Please try again or email me directly at nomenaf.pro@gmail.com.",

    footerRole: "Software Engineer",
    footerTagline: "Design ✦ Build ✦ Operate",
  },
};

export const HERO_FACTS: Record<Lang, { value: string; label: string }[]> = {
  fr: [
    { value: "2+ ans", label: "En production" },
    { value: "20+", label: "Systèmes livrés" },
    { value: "p95 < 100ms", label: "Latence API visée" },
    { value: "0", label: "Interruption au déploiement" },
  ],
  en: [
    { value: "2+ yrs", label: "In production" },
    { value: "20+", label: "Systems shipped" },
    { value: "p95 < 100ms", label: "Target API latency" },
    { value: "0", label: "Deployment downtime" },
  ],
};

export const ABILITIES: Record<Lang, string[]> = {
  fr: [
    "Conception d'API — REST versionnées, GraphQL, contrats testés",
    "Backend — Java / Spring Boot, Node.js, NestJS",
    "Frontend — React, Next.js, TypeScript strict",
    "Données — modélisation PostgreSQL, migrations, cache Redis",
    "Livraison continue — build reproductible, tests, rollback",
    "Exploitation — Docker, Linux, Nginx, métriques et alertes",
  ],
  en: [
    "API design — versioned REST, GraphQL, tested contracts",
    "Backend — Java / Spring Boot, Node.js, NestJS",
    "Frontend — React, Next.js, strict TypeScript",
    "Data — PostgreSQL modeling, migrations, Redis caching",
    "Continuous delivery — reproducible builds, tests, rollback",
    "Operations — Docker, Linux, Nginx, metrics and alerting",
  ],
};

export const STATS_LABELS: Record<Lang, string[]> = {
  fr: [
    "Projets livrés en production",
    "Couverture de tests moyenne",
    "Déploiements automatisés",
    "Du commit à la production",
  ],
  en: [
    "Projects shipped to production",
    "Average test coverage",
    "Automated deployments",
    "From commit to production",
  ],
};

export interface TimelineJob {
  role: string;
  company: string;
  period: string;
  summary: string;
  wins: string[];
  tech: string[];
}

export const TIMELINE: Record<Lang, TimelineJob[]> = {
  fr: [
    {
      role: "Développeur Full Stack JavaScript",
      company: "Alfa OI",
      period: "Mai 2026 — aujourd'hui",
      summary:
        "Développement d'applications web métier en JavaScript/TypeScript, de la conception des API à la mise en production.",
      wins: [
        "Modules full stack livrés en production sur un cycle de deux semaines",
        "API REST documentées mutualisées entre plusieurs applications internes",
        "Déploiements conteneurisés automatisés : mise en ligne ramenée à quelques minutes",
      ],
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "CI/CD"],
    },
    {
      role: "Développeur Full-stack",
      company: "Webradio.ai — France (télétravail)",
      period: "Février 2025 — Février 2026",
      summary:
        "Applications web pour le secteur des webradios, construites sur une architecture hexagonale modulaire.",
      wins: [
        "Architecture hexagonale : ajout de nouveaux modules sans toucher au domaine métier",
        "API REST optimisées pour les services tiers — temps de réponse divisé par deux sur les endpoints critiques",
        "Bibliothèque de composants réutilisables et tests unitaires : moins de régressions à chaque release",
      ],
      tech: ["Next.js", "Prisma", "MySQL", "REST API", "TypeScript"],
    },
    {
      role: "Développeur Full-stack Java / React",
      company: "Freelance",
      period: "Novembre 2024 — Janvier 2025",
      summary:
        "Application web et mobile connectée en iBeacon : gestion des utilisateurs, prise de rendez-vous et informations en temps réel.",
      wins: [
        "Synchronisation temps réel web ↔ mobile via des services backend centralisés",
        "Géolocalisation et messagerie instantanée livrées avec Ably, latence sous la seconde",
        "Projet mené seul de la conception à la mise en production, dans les délais",
      ],
      tech: ["Java", "Spring Boot", "React Native", "Next.js", "Ably", "PostgreSQL"],
    },
    {
      role: "Stagiaire Développeur Java / Mobile",
      company: "Orange Madagascar",
      period: "Juillet 2024 — Novembre 2024",
      summary:
        "Application touristique permettant d'explorer virtuellement les sites, hôtels et parcs de Madagascar.",
      wins: [
        "Exploration virtuelle à 360° sur des dizaines de sites référencés",
        "Recherche géographique servie par PostGIS, résultats quasi instantanés",
        "Application livrée et présentée à l'équipe métier en fin de stage",
      ],
      tech: ["Java", "Spring Boot", "React Native", "PostgreSQL", "PostGIS"],
    },
    {
      role: "Développeur Flutter (bénévole)",
      company: "ENI",
      period: "Mai 2024 — Juillet 2024",
      summary: "Application de gestion de budget et d'éducation financière destinée aux étudiants.",
      wins: [
        "Suivi de budget et notifications adoptés par les étudiants de la promotion",
        "Interfaces accessibles pensées pour un public non technique",
      ],
      tech: ["Flutter", "Dart", "Firebase", "SQLite"],
    },
    {
      role: "Stagiaire Développeur Java Spring Boot",
      company: "Ministère de l'Économie et du Plan",
      period: "Août 2023 — Novembre 2023",
      summary:
        "Plateforme de collaboration, de gestion de tâches et de communication interne au ministère.",
      wins: [
        "Découpage en microservices communicant via Feign : déploiement indépendant de chaque module",
        "API REST robustes ouvrant l'échange de données entre services auparavant cloisonnés",
      ],
      tech: ["Java", "Spring Boot", "Feign", "PostgreSQL", "Microservices"],
    },
  ],
  en: [
    {
      role: "Full Stack JavaScript Developer",
      company: "Alfa OI",
      period: "May 2026 — present",
      summary:
        "Development of business web applications in JavaScript/TypeScript, from API design to production deployment.",
      wins: [
        "Full-stack modules shipped to production on a two-week cycle",
        "Documented REST APIs shared across several internal applications",
        "Automated containerized deployments: releases cut down to a few minutes",
      ],
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "CI/CD"],
    },
    {
      role: "Full-stack Developer",
      company: "Webradio.ai — France (remote)",
      period: "February 2025 — February 2026",
      summary: "Web applications for the web-radio industry, built on a modular hexagonal architecture.",
      wins: [
        "Hexagonal architecture: new modules added without touching the business domain",
        "REST APIs optimized for third-party services — response time halved on critical endpoints",
        "Reusable component library and unit tests: fewer regressions on every release",
      ],
      tech: ["Next.js", "Prisma", "MySQL", "REST API", "TypeScript"],
    },
    {
      role: "Full-stack Developer — Java / React",
      company: "Freelance",
      period: "November 2024 — January 2025",
      summary:
        "Web and mobile application connected via iBeacon: user management, appointment booking, and real-time information.",
      wins: [
        "Real-time web ↔ mobile sync through centralized backend services",
        "Geolocation and instant messaging delivered with Ably, sub-second latency",
        "Project led solo from design to production, on schedule",
      ],
      tech: ["Java", "Spring Boot", "React Native", "Next.js", "Ably", "PostgreSQL"],
    },
    {
      role: "Java / Mobile Developer Intern",
      company: "Orange Madagascar",
      period: "July 2024 — November 2024",
      summary: "Tourism application for virtually exploring sites, hotels, and parks across Madagascar.",
      wins: [
        "360° virtual exploration across dozens of referenced sites",
        "Geographic search powered by PostGIS, near-instant results",
        "Application delivered and presented to the business team at the end of the internship",
      ],
      tech: ["Java", "Spring Boot", "React Native", "PostgreSQL", "PostGIS"],
    },
    {
      role: "Flutter Developer (volunteer)",
      company: "ENI",
      period: "May 2024 — July 2024",
      summary: "Budget management and financial literacy application for students.",
      wins: [
        "Budget tracking and notifications adopted by students in the cohort",
        "Accessible interfaces designed for a non-technical audience",
      ],
      tech: ["Flutter", "Dart", "Firebase", "SQLite"],
    },
    {
      role: "Java Spring Boot Developer Intern",
      company: "Ministry of Economy and Planning (Madagascar)",
      period: "August 2023 — November 2023",
      summary: "Collaboration, task management, and internal communication platform for the ministry.",
      wins: [
        "Split into microservices communicating via Feign: independent deployment per module",
        "Robust REST APIs opening up data exchange between previously siloed services",
      ],
      tech: ["Java", "Spring Boot", "Feign", "PostgreSQL", "Microservices"],
    },
  ],
};

export const STACK_CATEGORY_LABELS: Record<Lang, Record<string, string>> = {
  fr: {
    Frontend: "Frontend",
    Backend: "Backend",
    "Java / Jakarta EE": "Java / Jakarta EE",
    "Bases de données": "Bases de données",
    DevOps: "DevOps",
    Cloud: "Cloud",
    Outils: "Outils",
  },
  en: {
    Frontend: "Frontend",
    Backend: "Backend",
    "Java / Jakarta EE": "Java / Jakarta EE",
    "Bases de données": "Databases",
    DevOps: "DevOps",
    Cloud: "Cloud",
    Outils: "Tools",
  },
};

export const PROJECT_DESCRIPTIONS: Record<Lang, Record<string, string>> = {
  fr: {
    Dodoterla:
      "Plateforme de gestion de locations saisonnières à La Réunion : calendrier, réservations, arrivées et départs du jour, planning du ménage, partenaires, revenus et diffusion des annonces.",
    MyAlfa:
      "Logiciel de gestion pour indépendants, TPE et PME : factures, devis, banque, dépenses, stock et trésorerie centralisés et partagés avec l'expert-comptable, sur web et mobile.",
    TransacTPE:
      "Plateforme de cession et de reprise de TPE dans l'Océan Indien : annonces, recherche par secteur, territoire et budget, mise en relation entre cédants, acquéreurs et professionnels.",
    "Idyll Immo":
      "Gestion locative pour bailleurs, sans agence : bail, loyers, état des lieux, GED et défiscalisation réunis dans une plateforme conforme à la loi ALUR.",
    GMI: "Application de gestion du parc informatique pour entreprises : suivi en temps réel de l'état des équipements, affectation du personnel, demandes de matériel et signalement de maintenance.",
    "Dot Double Zero [.00]":
      "Site pour agents secrets : réception de missions et documents, commande à distance des gadgets et moyens de transport, assistance en temps réel entre coéquipiers via géolocalisation et signal de détresse.",
    "Chaaat App":
      "Réseau social de messagerie : discuter, partager des moments et rester connecté avec les personnes qui comptent, dans une interface simple et conviviale.",
    "Miray App":
      "Plateforme de questions-réponses entre étudiants : poser des questions, voter sur les réponses et suivre des sujets ou des utilisateurs pour rester informé.",
    "Elita team website":
      "Site vitrine d'une agence digitale : de l'idée à la mise en production, présentation des services et du savoir-faire de l'équipe.",
  },
  en: {
    Dodoterla:
      "Vacation rental management platform in Reunion Island: calendar, bookings, today's arrivals and departures, cleaning schedule, partners, revenue, and listing distribution.",
    MyAlfa:
      "Business management software for freelancers and small businesses: invoices, quotes, banking, expenses, stock, and cash flow centralized and shared with the accountant, on web and mobile.",
    TransacTPE:
      "Marketplace for selling and acquiring small businesses across the Indian Ocean: listings, search by sector, territory, and budget, connecting sellers, buyers, and professionals.",
    "Idyll Immo":
      "Agency-free rental management for landlords: leases, rent, inventory reports, document management, and tax optimization in one ALUR-compliant platform.",
    GMI: "IT equipment management application for businesses: real-time tracking of equipment status, staff assignment, equipment requests, and maintenance reporting.",
    "Dot Double Zero [.00]":
      "A website for secret agents: receiving missions and documents, remotely commanding gadgets and transport, and real-time teammate assistance via geolocation and a distress signal.",
    "Chaaat App":
      "A messaging social network: chat, share moments, and stay connected with the people who matter, in a simple and friendly interface.",
    "Miray App":
      "A Q&A platform for students: ask questions, vote on answers, and follow topics or users to stay informed.",
    "Elita team website":
      "Showcase website for a digital agency: from idea to production, presenting the team's services and expertise.",
  },
};

export const FILTER_CATS: Record<Lang, { key: string; label: string }[]> = {
  fr: [
    { key: "all", label: "Tous" },
    { key: "client", label: "Client" },
    { key: "personal", label: "Personnel" },
    { key: "hackathon", label: "Hackathon" },
    { key: "team", label: "Équipe" },
  ],
  en: [
    { key: "all", label: "All" },
    { key: "client", label: "Client" },
    { key: "personal", label: "Personal" },
    { key: "hackathon", label: "Hackathon" },
    { key: "team", label: "Team" },
  ],
};

export const STEP_NAMES: Record<Lang, string[]> = {
  fr: ["Code", "Git", "Pull Request", "GitHub Actions", "Docker", "Tests", "Déploiement", "Production", "Monitoring"],
  en: ["Code", "Git", "Pull Request", "GitHub Actions", "Docker", "Tests", "Deployment", "Production", "Monitoring"],
};
