"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "./gsap";

const NAME = "Nomena Andrianiaina";
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const SIMPLE_ICONS = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/";

const HERO_FACTS = [
  { value: "2+ ans", label: "En production" },
  { value: "20+", label: "Systèmes livrés" },
  { value: "p95 < 100ms", label: "Latence API visée" },
  { value: "0", label: "Interruption au déploiement" },
];

const ABILITIES = [
  "Conception d'API — REST versionnées, GraphQL, contrats testés",
  "Backend — Java / Spring Boot, Node.js, NestJS",
  "Frontend — React, Next.js, TypeScript strict",
  "Données — modélisation PostgreSQL, migrations, cache Redis",
  "Livraison continue — build reproductible, tests, rollback",
  "Exploitation — Docker, Linux, Nginx, métriques et alertes",
];

const INITIAL_STATS = [
  { value: 20, prefix: "+", suffix: "", label: "Projets livrés en production" },
  { value: 80, prefix: "", suffix: " %", label: "Couverture de tests moyenne" },
  { value: 100, prefix: "", suffix: " %", label: "Déploiements automatisés" },
  { value: 6, prefix: "< ", suffix: " min", label: "Du commit à la production" },
];

const TIMELINE = [
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
];

const STACK = [
  {
    name: "Frontend",
    items: [
      { name: "React", icon: DEVICON + "react/react-original.svg" },
      { name: "Next.js", iconLight: DEVICON + "nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: DEVICON + "typescript/typescript-original.svg" },
      { name: "JavaScript", icon: DEVICON + "javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: DEVICON + "tailwindcss/tailwindcss-original.svg" },
      { name: "Shadcn UI", iconLight: SIMPLE_ICONS + "shadcnui.svg" },
      { name: "Framer Motion", iconLight: SIMPLE_ICONS + "framer.svg" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: DEVICON + "nodejs/nodejs-original.svg" },
      { name: "Express.js", iconLight: DEVICON + "express/express-original.svg" },
      { name: "NestJS", icon: DEVICON + "nestjs/nestjs-original.svg" },
      { name: "REST API", mono: "{}" },
      { name: "GraphQL", icon: DEVICON + "graphql/graphql-plain.svg" },
      { name: "WebSocket", icon: DEVICON + "socketio/socketio-original.svg" },
      { name: "JWT", iconLight: SIMPLE_ICONS + "jsonwebtokens.svg" },
      { name: "OAuth 2.0", mono: "oa" },
    ],
  },
  {
    name: "Java / Jakarta EE",
    items: [
      { name: "Java", icon: DEVICON + "java/java-original.svg" },
      { name: "Spring", icon: DEVICON + "spring/spring-original.svg" },
      { name: "Spring Boot", icon: DEVICON + "spring/spring-original.svg" },
      { name: "Jakarta EE", mono: "jee" },
      { name: "Servlets / JSP", mono: "jsp" },
      { name: "Hibernate", icon: DEVICON + "hibernate/hibernate-original.svg" },
      { name: "JPA", mono: "jpa" },
      { name: "Maven", icon: DEVICON + "maven/maven-original.svg" },
      { name: "JUnit", icon: DEVICON + "junit/junit-original.svg" },
      { name: "Tomcat", icon: DEVICON + "tomcat/tomcat-original.svg" },
    ],
  },
  {
    name: "Bases de données",
    items: [
      { name: "PostgreSQL", icon: DEVICON + "postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: DEVICON + "mongodb/mongodb-original.svg" },
      { name: "Redis", icon: DEVICON + "redis/redis-original.svg" },
      { name: "Prisma", iconLight: DEVICON + "prisma/prisma-original.svg" },
    ],
  },
  {
    name: "DevOps",
    items: [
      { name: "Docker", icon: DEVICON + "docker/docker-original.svg" },
      { name: "Docker Compose", mono: "dc" },
      { name: "Git", icon: DEVICON + "git/git-original.svg" },
      { name: "GitHub Actions", iconLight: DEVICON + "githubactions/githubactions-original.svg" },
      { name: "CI/CD", mono: "ci" },
      { name: "Linux", icon: DEVICON + "linux/linux-original.svg" },
      { name: "Nginx", icon: DEVICON + "nginx/nginx-original.svg" },
      { name: "PM2", iconLight: SIMPLE_ICONS + "pm2.svg" },
      { name: "Bash", iconLight: DEVICON + "bash/bash-original.svg" },
    ],
  },
  {
    name: "Cloud",
    items: [
      { name: "AWS EC2", icon: DEVICON + "amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "AWS S3", iconLight: SIMPLE_ICONS + "amazons3.svg" },
      { name: "AWS IAM", iconLight: SIMPLE_ICONS + "amazoniam.svg" },
      { name: "Cloudflare", icon: DEVICON + "cloudflare/cloudflare-original.svg" },
      { name: "SSH", mono: "ssh" },
      { name: "Monitoring", icon: DEVICON + "grafana/grafana-original.svg" },
    ],
  },
  {
    name: "Outils",
    items: [
      { name: "GitHub", iconLight: DEVICON + "github/github-original.svg" },
      { name: "VS Code", icon: DEVICON + "vscode/vscode-original.svg" },
      { name: "Postman", icon: DEVICON + "postman/postman-original.svg" },
      { name: "Jest", icon: DEVICON + "jest/jest-plain.svg" },
      { name: "Vitest", icon: DEVICON + "vitest/vitest-original.svg" },
      { name: "Figma", icon: DEVICON + "figma/figma-original.svg" },
    ],
  },
].map((c) => ({ ...c, count: String(c.items.length).padStart(2, "0") }));

const PROJECTS = [
  {
    title: "GMI",
    cat: "Personnel",
    image: "/projects/gm-i.png",
    desc: "Application de gestion du parc informatique pour entreprises : suivi en temps réel de l'état des équipements, affectation du personnel, demandes de matériel et signalement de maintenance.",
    tags: ["NextAuth", "Next.js", "Java", "Spring Boot", "PostgreSQL"],
    githubLink: "https://github.com/andrianiainafn/gmi_client",
    demoLink: "https://gm-i.vercel.app/",
  },
  {
    title: "Dot Double Zero [.00]",
    cat: "Hackathon",
    image: "/projects/webcup24.png",
    desc: "Site pour agents secrets : réception de missions et documents, commande à distance des gadgets et moyens de transport, assistance en temps réel entre coéquipiers via géolocalisation et signal de détresse.",
    tags: ["Tailwind", "Next.js", "Three.js"],
    githubLink: "https://github.com/elita-webcup/elita-webcup",
    demoLink: "https://elita.madagascar.webcup.hodi.host/",
  },
  {
    title: "Chaaat App",
    cat: "Personnel",
    image: "/projects/chaaat.png",
    desc: "Réseau social de messagerie : discuter, partager des moments et rester connecté avec les personnes qui comptent, dans une interface simple et conviviale.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/andrianiainafn/chaat",
    demoLink: "https://chaat-afn.netlify.app/",
  },
  {
    title: "Miray App",
    cat: "Hackathon",
    image: "/projects/miray.png",
    desc: "Plateforme de questions-réponses entre étudiants : poser des questions, voter sur les réponses et suivre des sujets ou des utilisateurs pour rester informé.",
    tags: ["Tailwind", "Next.js", "NextAuth"],
    githubLink: "https://github.com/Elita-6/devhunt-client-starter-project",
    demoLink: "https://elita-devhunt.vercel.app/",
  },
  {
    title: "Elita team website",
    cat: "Équipe",
    image: "/projects/elita-website.png",
    desc: "Site vitrine d'une agence digitale : de l'idée à la mise en production, présentation des services et du savoir-faire de l'équipe.",
    tags: ["Tailwind", "Next.js"],
    githubLink: "https://github.com/andrianiainafn/CodigoElita_website",
    demoLink: "https://codigoelita.vercel.app/#services",
  },
];

const FILTER_CATS = ["Tous", "Personnel", "Hackathon", "Équipe"];

const NAV_ITEMS = [
  { id: "apropos", label: "À propos" },
  { id: "experience", label: "Expérience" },
  { id: "stack", label: "Stack" },
  { id: "projets", label: "Projets" },
  { id: "process", label: "Process" },
];

const STEP_NAMES = [
  "Code",
  "Git",
  "Pull Request",
  "GitHub Actions",
  "Docker",
  "Tests",
  "Déploiement",
  "Production",
  "Monitoring",
];

const LINKS = [
  { kind: "Email", value: "nomenaf.pro@gmail.com", href: "mailto:nomenaf.pro@gmail.com" },
  { kind: "GitHub", value: "github.com/andrianiainafn", href: "https://github.com/andrianiainafn" },
  {
    kind: "LinkedIn",
    value: "linkedin.com/in/andrianiaina-fanomezantsoa-nomena",
    href: "https://www.linkedin.com/in/andrianiaina-fanomezantsoa-nomena",
  },
  {
    kind: "Portfolio",
    value: "andrianiainafn-portfolio.vercel.app",
    href: "https://andrianiainafn-portfolio.vercel.app",
  },
  {
    kind: "CV",
    value: "Télécharger le CV (PDF)",
    href: "/cv/CV-Nomena-Andrianiaina-fullstack.pdf",
  },
];

const MARQUEE_BASE: { name: string; src: string; filter: string }[] = [
  ["React", DEVICON + "react/react-original.svg", "none"],
  ["Next.js", DEVICON + "nextjs/nextjs-original.svg", "var(--logo-inv)"],
  ["TypeScript", DEVICON + "typescript/typescript-original.svg", "none"],
  ["Node.js", DEVICON + "nodejs/nodejs-original.svg", "none"],
  ["NestJS", DEVICON + "nestjs/nestjs-original.svg", "none"],
  ["PostgreSQL", DEVICON + "postgresql/postgresql-original.svg", "none"],
  ["Redis", DEVICON + "redis/redis-original.svg", "none"],
  ["GraphQL", DEVICON + "graphql/graphql-plain.svg", "none"],
  ["Java", DEVICON + "java/java-original.svg", "none"],
  ["Spring Boot", DEVICON + "spring/spring-original.svg", "none"],
  ["Hibernate", DEVICON + "hibernate/hibernate-original.svg", "none"],
  ["Docker", DEVICON + "docker/docker-original.svg", "none"],
  ["Kubernetes-ready", DEVICON + "nginx/nginx-original.svg", "none"],
  ["GitHub Actions", DEVICON + "githubactions/githubactions-original.svg", "var(--logo-inv)"],
  ["AWS", DEVICON + "amazonwebservices/amazonwebservices-plain-wordmark.svg", "var(--logo-inv)"],
  ["Cloudflare", DEVICON + "cloudflare/cloudflare-original.svg", "none"],
  ["Linux", DEVICON + "linux/linux-original.svg", "none"],
  ["Tailwind", DEVICON + "tailwindcss/tailwindcss-original.svg", "none"],
  ["Prisma", DEVICON + "prisma/prisma-original.svg", "var(--logo-inv)"],
].map(([name, src, filter]) => ({ name, src, filter }));
const MARQUEE = MARQUEE_BASE.concat(MARQUEE_BASE);

const TERMINAL_SRC = [
  { gutter: "$", text: "git push origin main", color: "#E4E4E7" },
  { gutter: "→", text: "GitHub Actions · build & test", color: "#71717A" },
  { gutter: "✓", text: "148 tests passed  (12.4s)", color: "#4ADE80" },
  { gutter: "→", text: "docker build -t app:sha-9f3c1e .", color: "#71717A" },
  { gutter: "✓", text: "image pushed  ·  184 MB", color: "#4ADE80" },
  { gutter: "→", text: "deploy blue-green · aws ec2", color: "#71717A" },
  { gutter: "✓", text: "healthcheck 200 OK  ·  0 downtime", color: "#4ADE80" },
  { gutter: "◆", text: "live in production  ·  p95 84ms", color: "#22D3EE" },
];

function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.from(ref.current, {
      opacity: 0,
      y: 34,
      duration: 0.8,
      delay: delayMs / 1000,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return { ref };
}

// Staggers the direct children matching `selector` in as the container scrolls into view.
function useStaggerReveal<T extends HTMLElement>(
  selector: string,
  opts: { y?: number; stagger?: number; deps?: unknown[] } = {}
) {
  const ref = useRef<T | null>(null);
  const { y = 20, stagger = 0.06, deps = [] } = opts;

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll(selector);
      if (!items.length) return;
      gsap.from(items, {
        opacity: 0,
        y,
        duration: 0.7,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );

  return { ref };
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [wide, setWide] = useState(false);
  const [filter, setFilter] = useState("Tous");
  const [active, setActive] = useState(0);
  const [stats, setStats] = useState(
    INITIAL_STATS.map((s) => ({ ...s, display: "0" }))
  );
  const [termLines, setTermLines] = useState<typeof TERMINAL_SRC>([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadPct, setLoadPct] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spotRef = useRef<HTMLDivElement | null>(null);
  const statsGridRef = useRef<HTMLDivElement | null>(null);

  // Hero entrance timeline + hero-visual refs.
  const heroBadgeRef = useRef<HTMLDivElement | null>(null);
  const heroH1Ref = useRef<HTMLHeadingElement | null>(null);
  const heroPRef = useRef<HTMLParagraphElement | null>(null);
  const heroBtnRef = useRef<HTMLDivElement | null>(null);
  const heroFactsRef = useRef<HTMLDivElement | null>(null);
  const heroVisualRef = useRef<HTMLDivElement | null>(null);

  // Theme: read persisted preference on mount, keep <html data-theme> in sync.
  useEffect(() => {
    const saved = (localStorage.getItem("pf-theme") as "light" | "dark" | null) || "light";
    document.documentElement.setAttribute("data-theme", saved);
    setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("pf-theme", next);
    } catch {}
    setTheme(next);
  };

  // Responsive layout switch (nav links, hero terminal panel).
  useEffect(() => {
    const update = () => setWide(window.innerWidth >= 900);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Scroll progress bar.
  useEffect(() => {
    const onScroll = () => {
      const el = barRef.current;
      if (!el) return;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) * 100 : 0;
      el.style.width = pct + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for whichever section is currently in focus.
  useGSAP(() => {
    const sectionIds = ["apropos", "experience", "stack", "projets", "process", "contact"];
    const triggers = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
      .map((el) =>
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (self.isActive) setActiveSection(el.id);
          },
        })
      );
    return () => triggers.forEach((t) => t.kill());
  }, []);

  // Pointer spotlight glow that follows the cursor.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = spotRef.current;
      if (!el) return;
      el.style.opacity = "1";
      el.style.background = `radial-gradient(420px 420px at ${e.clientX}px ${e.clientY}px, rgba(139,92,246,.13), transparent 70%)`;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // Animated stat counters + card stagger, played once the stats grid scrolls into view.
  useGSAP(() => {
    const el = statsGridRef.current;
    if (!el) return;

    gsap.from(el.querySelectorAll(".pf-stat-card"), {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
    });

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        const progress = { t: 0 };
        gsap.to(progress, {
          t: 1,
          duration: 1.4,
          ease: "power3.out",
          onUpdate: () => {
            setStats(
              INITIAL_STATS.map((st) => ({
                ...st,
                display: st.prefix + Math.round(st.value * progress.t) + st.suffix,
              }))
            );
          },
        });
      },
    });
  }, []);

  // Boot-sequence preloader: simulated progress, then slides away to reveal the page.
  useGSAP(() => {
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const progress = { v: 0 };

    gsap
      .timeline()
      .to(progress, {
        v: 96,
        duration: 1.1,
        ease: "power2.out",
        onUpdate: () => setLoadPct(Math.round(progress.v)),
      })
      .to(progress, {
        v: 100,
        duration: 0.3,
        ease: "power1.out",
        onUpdate: () => setLoadPct(Math.round(progress.v)),
      })
      .to({}, { duration: 0.3 })
      .call(() => setLoading(false))
      .to(preloaderRef.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" })
      .set(preloaderRef.current, { visibility: "hidden", pointerEvents: "none" })
      .call(() => {
        document.documentElement.style.overflow = previousOverflow;
      });
  }, []);

  // Hero entrance: cascading GSAP timeline for the badges, headline, copy, CTAs, facts and visual.
  // Gated on the preloader finishing so the cascade plays as it slides away, not underneath it.
  useGSAP(
    () => {
      if (loading) return;
      gsap
        .timeline({ defaults: { ease: "power3.out", duration: 0.9 } })
        .from(heroBadgeRef.current, { opacity: 0, y: 22 })
        .from(heroH1Ref.current, { opacity: 0, y: 30 }, "-=0.72")
        .from(heroPRef.current, { opacity: 0, y: 22 }, "-=0.68")
        .from(heroBtnRef.current, { opacity: 0, y: 22 }, "-=0.64")
        .from(heroFactsRef.current, { opacity: 0, y: 22 }, "-=0.6")
        .from(heroVisualRef.current, { opacity: 0, y: 26, scale: 0.98 }, "-=0.8");
    },
    { dependencies: [loading] }
  );

  // Typewriter effect for the hero "deploy" terminal card.
  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const next = () => {
      i += 1;
      setTermLines(TERMINAL_SRC.slice(0, i));
      timer = setTimeout(next, i < TERMINAL_SRC.length ? 480 : 3600);
      if (i >= TERMINAL_SRC.length) i = 0;
    };
    timer = setTimeout(next, 500);
    return () => clearTimeout(timer);
  }, []);

  // Cycle the "commit to production" process steps.
  useEffect(() => {
    const tick = setInterval(() => setActive((a) => (a + 1) % STEP_NAMES.length), 950);
    return () => clearInterval(tick);
  }, []);

  // Drifting connected-particle network behind the hero.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let points: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    let raf = 0;

    const build = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(38, Math.max(18, w / 38)));
      points = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 0.7,
      }));
    };
    build();

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      ctx.clearRect(0, 0, w, h);
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 95) {
            ctx.strokeStyle =
              (dark ? "rgba(99,142,255," : "rgba(37,99,235,") +
              ((dark ? 0.09 : 0.07) * (1 - d / 95)).toFixed(3) +
              ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of points) {
        ctx.fillStyle = dark ? "rgba(148,197,255,.55)" : "rgba(59,130,246,.42)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => build();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  };

  const visibleProjects = filter === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  const aboutReveal = useReveal<HTMLDivElement>();
  const aboutTextReveal = useReveal<HTMLDivElement>(80);
  const abilitiesStagger = useStaggerReveal<HTMLDivElement>(":scope > div", { y: 14, stagger: 0.08 });
  const expReveal = useReveal<HTMLDivElement>();
  const stackReveal = useReveal<HTMLDivElement>();
  const projectsReveal = useReveal<HTMLDivElement>();
  const projectCardsStagger = useStaggerReveal<HTMLDivElement>(".pf-project-card", {
    y: 26,
    stagger: 0.08,
    deps: [filter],
  });
  const processReveal = useReveal<HTMLDivElement>();
  const processCardReveal = useReveal<HTMLDivElement>();
  const contactLeftReveal = useReveal<HTMLDivElement>();
  const contactLinksStagger = useStaggerReveal<HTMLDivElement>(".pf-link-row", { y: 16, stagger: 0.07 });
  const contactFormReveal = useReveal<HTMLFormElement>(100);

  return (
    <>
      <div
        ref={preloaderRef}
        role="status"
        aria-live="polite"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 22,
          background: "var(--bg)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt=""
          width={60}
          height={60}
          style={{
            width: 60,
            height: 60,
            objectFit: "contain",
            filter: "var(--logo-shade)",
            animation: "pfPreloaderPulse 1.7s ease-in-out infinite",
          }}
        />
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "var(--tx4)",
          }}
        >
          Chargement du portfolio
        </div>
        <div
          style={{
            width: 220,
            height: 2,
            borderRadius: 999,
            background: "var(--bd)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${loadPct}%`,
              background: "linear-gradient(90deg, #3B82F6, #06B6D4, #8B5CF6)",
              boxShadow: "0 0 10px rgba(6,182,212,.55)",
            }}
          />
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--tx5)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {String(loadPct).padStart(2, "0")}%
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(900px 520px at 15% -5%, var(--glow1), transparent 60%), radial-gradient(760px 460px at 88% 8%, var(--glow2), transparent 62%), radial-gradient(700px 500px at 50% 100%, var(--glow3), transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.85,
          backgroundImage: "radial-gradient(var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(1000px 620px at 50% 0%, #000 10%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(1000px 620px at 50% 0%, #000 10%, transparent 72%)",
        }}
      />
      <div
        ref={spotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0,
          transition: "opacity .5s ease",
        }}
      />

      <div
        ref={barRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: "0%",
          zIndex: 60,
          background: "linear-gradient(90deg, #3B82F6, #06B6D4, #8B5CF6)",
          boxShadow: "0 0 12px rgba(6,182,212,.6)",
        }}
      />

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(14px) saturate(160%)",
          background: "var(--header-bg)",
          borderBottom: "1px solid var(--bd)",
        }}
      >
        <nav
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          <a
            href="#top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "var(--tx)",
              fontWeight: 700,
              letterSpacing: "-.02em",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Logo NA"
              width={32}
              height={32}
              style={{ width: 32, height: 32, objectFit: "contain", display: "block", filter: "var(--logo-shade)" }}
            />
            <span style={{ fontSize: 15 }}>{NAME}</span>
          </a>
          <div style={{ flex: 1 }} />
          <div
            style={{
              gap: 26,
              fontSize: 14,
              color: "var(--tx3)",
              display: wide ? "flex" : "none",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`pf-nav-link${activeSection === item.id ? " is-active" : ""}`}
                style={{ color: activeSection === item.id ? "var(--tx)" : "var(--tx3)" }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Passer en thème clair" : "Passer en thème sombre"}
            title={theme === "dark" ? "Passer en thème clair" : "Passer en thème sombre"}
            className="pf-theme-btn"
            style={{
              width: 36,
              height: 36,
              flex: "none",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              borderRadius: 10,
              border: "1px solid var(--bd2)",
              background: "var(--surf1)",
              color: "var(--tx2)",
              fontSize: 15,
              lineHeight: 1,
            }}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <a
            href="#contact"
            className="pf-btn-contact"
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              color: "var(--btn-fg)",
              background: "var(--btn-bg)",
              padding: "9px 16px",
              borderRadius: 10,
            }}
          >
            Me contacter
          </a>
        </nav>
      </header>

      <main id="top" style={{ position: "relative", zIndex: 1 }}>
        <section
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            padding: "84px 24px 76px",
            overflow: "hidden",
          }}
        >
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0.4,
              maskImage: "linear-gradient(to bottom, #000 0%, #000 40%, transparent 66%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 40%, transparent 66%)",
            }}
          />
          <div
            style={{
              position: "relative",
              maxWidth: 1180,
              margin: "0 auto",
              width: "100%",
              display: "grid",
              gridTemplateColumns: wide ? "1.05fr .95fr" : "1fr",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <div
                ref={heroBadgeRef}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 30,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "7px 14px 7px 11px",
                    border: "1px solid rgba(6,182,212,.28)",
                    background: "rgba(6,182,212,.08)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 999,
                    fontSize: 12.5,
                    fontWeight: 500,
                    color: "var(--avail-fg)",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#06B6D4",
                      animation: "pulseRing 2.2s ease-out infinite",
                    }}
                  />
                  Disponible — freelance &amp; CDI
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    whiteSpace: "nowrap",
                    padding: "7px 14px",
                    border: "1px solid var(--bd2)",
                    background: "var(--surf1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 999,
                    fontSize: 12.5,
                    color: "var(--tx2)",
                  }}
                >
                  <strong style={{ fontWeight: 600, color: "var(--tx)" }}>2+ ans</strong> d&apos;expérience en
                  production
                </div>
              </div>
              <h1
                ref={heroH1Ref}
                style={{
                  margin: 0,
                  fontSize: "clamp(44px, 6.6vw, 86px)",
                  lineHeight: 0.98,
                  letterSpacing: "-.045em",
                  fontWeight: 700,
                  maxWidth: "15ch",
                  textWrap: "balance",
                }}
              >
                Software
                <span
                  style={{
                    display: "block",
                    lineHeight: 1.14,
                    paddingBottom: ".06em",
                    background: "linear-gradient(100deg, #3B82F6, #06B6D4 45%, #8B5CF6)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Engineer
                </span>
              </h1>
              <p
                ref={heroPRef}
                style={{
                  margin: "28px 0 0",
                  maxWidth: "56ch",
                  fontSize: "clamp(16px, 1.4vw, 18.5px)",
                  lineHeight: 1.65,
                  color: "var(--tx3)",
                  textWrap: "pretty",
                }}
              >
                Je développe des applications web modernes, performantes et évolutives, de l&apos;interface
                utilisateur jusqu&apos;au déploiement en production.
              </p>
              <div
                ref={heroBtnRef}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 14,
                  marginTop: 40,
                }}
              >
                <a
                  href="#projets"
                  className="pf-btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 22px",
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--btn-fg)",
                    background: "var(--btn-grad)",
                  }}
                >
                  Voir mes projets <span style={{ fontFamily: "var(--font-mono)" }}>→</span>
                </a>
                <a
                  href="/cv/CV-Nomena-Andrianiaina-fullstack.pdf"
                  download="CV-Nomena-Andrianiaina.pdf"
                  className="pf-btn-secondary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 22px",
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--tx)",
                    border: "1px solid var(--bd3)",
                    background: "var(--surf1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Télécharger mon CV
                </a>
              </div>
              <div
                ref={heroFactsRef}
                style={{
                  marginTop: 56,
                  paddingTop: 28,
                  borderTop: "1px solid var(--bd)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: "24px 30px",
                }}
              >
                {HERO_FACTS.map((h) => (
                  <div key={h.label}>
                    <div
                      style={{
                        fontSize: 26,
                        fontWeight: 600,
                        letterSpacing: "-.03em",
                        color: "var(--tx)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {h.value}
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--tx5)",
                      }}
                    >
                      {h.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={heroVisualRef}
              style={{
                display: "grid",
                gap: 16,
                maxWidth: 420,
                width: "100%",
                justifySelf: wide ? "end" : "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: 22,
                  padding: 1,
                  background:
                    "linear-gradient(150deg, rgba(59,130,246,.5), rgba(139,92,246,.35) 50%, var(--bd))",
                  boxShadow: "0 30px 70px var(--sh)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "1 / 1",
                    borderRadius: 21,
                    overflow: "hidden",
                    background: "var(--thumb-bg)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/portrait.webp"
                    alt="Portrait de Nomena Andrianiaina"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <CornerTrace corner="tl" />
                <CornerTrace corner="tr" />
                <CornerTrace corner="bl" />
                <CornerTrace corner="br" />
              </div>
              <div
                style={{
                  display: wide ? "block" : "none",
                  borderRadius: 18,
                  padding: 1,
                  background:
                    "linear-gradient(150deg, rgba(59,130,246,.55), rgba(139,92,246,.35) 45%, var(--bd))",
                }}
              >
                <div
                  style={{
                    borderRadius: 17,
                    background: "rgba(8,10,16,.94)",
                    backdropFilter: "blur(16px)",
                    overflow: "hidden",
                    boxShadow: "0 40px 90px var(--sh-strong)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 14px",
                      borderBottom: "1px solid rgba(255,255,255,.07)",
                      background: "rgba(17,24,39,.6)",
                    }}
                  >
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444", opacity: 0.8 }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B", opacity: 0.8 }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22C55E", opacity: 0.8 }} />
                    <span
                      style={{
                        marginLeft: 8,
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--tx5)",
                      }}
                    >
                      deploy — production
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "14px 16px 16px",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11.5,
                      lineHeight: 1.6,
                      height: 108,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      maskImage: "linear-gradient(to bottom, transparent, #000 18px)",
                      WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 18px)",
                    }}
                  >
                    {termLines.map((ln, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, color: ln.color }}>
                        <span style={{ color: "#3F3F46", userSelect: "none" }}>{ln.gutter}</span>
                        <span>{ln.text}</span>
                      </div>
                    ))}
                    <span
                      style={{
                        display: "inline-block",
                        width: 8,
                        height: 15,
                        background: "#06B6D4",
                        animation: "blink 1s steps(1) infinite",
                        verticalAlign: -2,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-hidden="true"
          style={{
            padding: "26px 0",
            borderTop: "1px solid var(--bd)",
            borderBottom: "1px solid var(--bd)",
            overflow: "hidden",
            maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          }}
        >
          <div style={{ display: "flex", width: "max-content", animation: "marquee 42s linear infinite" }}>
            {MARQUEE.map((m, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 26px", opacity: 0.55 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.src} alt="" loading="lazy" width={20} height={20} style={{ width: 20, height: 20, display: "block", filter: m.filter }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--tx3)", whiteSpace: "nowrap" }}>
                  {m.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="apropos" style={{ padding: "110px 24px", borderTop: "1px solid var(--bd)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div ref={aboutReveal.ref}>
              <p
                style={{
                  margin: "0 0 16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--accent2)",
                }}
              >
                01 — À propos
              </p>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(29px, 3.7vw, 46px)",
                  letterSpacing: "-.035em",
                  fontWeight: 600,
                  maxWidth: "22ch",
                  lineHeight: 1.1,
                }}
              >
                Je conçois, je livre, et je reste responsable de ce qui tourne.
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 48,
                marginTop: 48,
                alignItems: "start",
              }}
            >
              <div ref={aboutTextReveal.ref}>
                <p style={{ margin: 0, color: "var(--tx3)", fontSize: 16.5, lineHeight: 1.75, textWrap: "pretty" }}>
                  Développeur Full Stack JavaScript spécialisé dans la conception d&apos;applications web modernes,
                  performantes et évolutives. Plus de deux ans à concevoir des architectures front et back, à écrire
                  des API robustes et à automatiser tout ce qui peut l&apos;être.
                </p>
                <p style={{ margin: "18px 0 0", color: "var(--tx4)", fontSize: 15.5, lineHeight: 1.75, textWrap: "pretty" }}>
                  Je travaille aussi bien sur l&apos;expérience utilisateur que sur l&apos;infrastructure qui la sert :
                  pipelines CI/CD, conteneurisation, reverse proxy, observabilité et déploiements sans interruption.
                </p>
                <div ref={abilitiesStagger.ref} style={{ display: "grid", gap: 12, marginTop: 30 }}>
                  {ABILITIES.map((ab) => (
                    <div key={ab} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "var(--tx2)" }}>
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 2,
                          background: "linear-gradient(135deg, #06B6D4, #8B5CF6)",
                          flex: "none",
                        }}
                      />
                      {ab}
                    </div>
                  ))}
                </div>
              </div>
              <div
                ref={statsGridRef}
                style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}
              >
                {stats.map((st) => (
                  <div
                    key={st.label}
                    className="pf-stat-card"
                    style={{
                      padding: "26px 22px",
                      border: "1px solid var(--bd)",
                      borderRadius: 16,
                      background: "var(--card-bg)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "clamp(26px, 3vw, 36px)",
                        fontWeight: 700,
                        letterSpacing: "-.03em",
                        fontVariantNumeric: "tabular-nums",
                        background: "var(--stat-grad)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {st.display}
                    </div>
                    <div style={{ marginTop: 8, fontSize: 13.5, color: "var(--tx3)", lineHeight: 1.4 }}>{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" style={{ padding: "110px 24px", borderTop: "1px solid var(--bd)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div ref={expReveal.ref}>
              <p
                style={{
                  margin: "0 0 16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--accent2)",
                }}
              >
                02 — Expérience
              </p>
              <h2 style={{ margin: 0, fontSize: "clamp(29px, 3.7vw, 46px)", letterSpacing: "-.035em", fontWeight: 600 }}>
                Parcours
              </h2>
            </div>
            <div style={{ marginTop: 52, display: "grid", gap: 0 }}>
              {TIMELINE.map((job, i) => (
                <TimelineItem key={job.role + job.period} job={job} isLast={i === TIMELINE.length - 1} />
              ))}
            </div>
          </div>
        </section>

        <section id="stack" style={{ padding: "110px 24px", borderTop: "1px solid var(--bd)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div ref={stackReveal.ref}>
              <p
                style={{
                  margin: "0 0 16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--accent2)",
                }}
              >
                03 — Stack technique
              </p>
              <h2 style={{ margin: "0 0 8px", fontSize: "clamp(29px, 3.7vw, 46px)", letterSpacing: "-.035em", fontWeight: 600 }}>
                Stack technique
              </h2>
              <p style={{ margin: 0, color: "var(--tx4)", fontSize: 16, maxWidth: "58ch" }}>
                Des technologies choisies pour ce qu&apos;elles résolvent, pas pour leur popularité — et utilisées en
                production, pas seulement en side project.
              </p>
            </div>
            <div style={{ display: "grid", gap: 44, marginTop: 52 }}>
              {STACK.map((cat) => (
                <StackCategory key={cat.name} cat={cat} />
              ))}
            </div>
          </div>
        </section>

        <section id="projets" style={{ padding: "110px 24px", borderTop: "1px solid var(--bd)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div
              ref={projectsReveal.ref}
              style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "end", justifyContent: "space-between" }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 16px",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--accent2)",
                  }}
                >
                  04 — Projets
                </p>
                <h2 style={{ margin: 0, fontSize: "clamp(29px, 3.7vw, 46px)", letterSpacing: "-.035em", fontWeight: 600 }}>
                  Systèmes construits et mis en production
                </h2>
              </div>
              <div
                role="tablist"
                aria-label="Filtrer les projets"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  padding: 5,
                  border: "1px solid var(--bd)",
                  borderRadius: 999,
                  background: "var(--surf1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {FILTER_CATS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={c === filter}
                    onClick={() => setFilter(c)}
                    className={`pf-filter-tab${c === filter ? " is-active" : ""}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div
              ref={projectCardsStagger.ref}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
                gap: 20,
                marginTop: 44,
              }}
            >
              {visibleProjects.map((p) => (
                <article
                  key={p.title}
                  className="pf-project-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid var(--bd)",
                    borderRadius: 20,
                    overflow: "hidden",
                    background: "var(--card-bg)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "16 / 9",
                      backgroundColor: "var(--thumb-bg)",
                      overflow: "hidden",
                      borderBottom: "1px solid var(--bd)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={`Capture d'écran du projet ${p.title}`}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        fontFamily: "var(--font-mono)",
                        fontSize: 10.5,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: "var(--cat-fg)",
                        background: "var(--input-bg)",
                        border: "1px solid var(--bd2)",
                        padding: "5px 9px",
                        borderRadius: 7,
                      }}
                    >
                      {p.cat}
                    </span>
                  </div>
                  <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                    <h3 style={{ margin: 0, fontSize: 18.5, fontWeight: 600, letterSpacing: "-.02em" }}>{p.title}</h3>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--tx3)", flex: 1, textWrap: "pretty" }}>
                      {p.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 11,
                            color: "var(--tag-fg)",
                            background: "var(--tag-bg)",
                            border: "1px solid var(--tag-bd)",
                            padding: "4px 8px",
                            borderRadius: 6,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 18,
                        paddingTop: 6,
                        borderTop: "1px solid var(--bd)",
                        marginTop: 4,
                        fontSize: 13.5,
                        fontWeight: 500,
                      }}
                    >
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-project-link"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--tx2)" }}
                      >
                        GitHub <span style={{ fontFamily: "var(--font-mono)", color: "var(--tx5)" }}>↗</span>
                      </a>
                      <a
                        href={p.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-project-link"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--accent2)" }}
                      >
                        Démo <span style={{ fontFamily: "var(--font-mono)" }}>↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" style={{ padding: "110px 24px", borderTop: "1px solid var(--bd)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div ref={processReveal.ref}>
              <p
                style={{
                  margin: "0 0 16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--accent2)",
                }}
              >
                05 — Processus
              </p>
              <h2 style={{ margin: "0 0 8px", fontSize: "clamp(29px, 3.7vw, 46px)", letterSpacing: "-.035em", fontWeight: 600 }}>
                Du commit à la production
              </h2>
              <p style={{ margin: 0, color: "var(--tx4)", fontSize: 16, maxWidth: "58ch" }}>
                Chaque commit suit le même chemin : rien ne part en production sans tests verts, image versionnée et
                rollback prêt.
              </p>
            </div>
            <div
              ref={processCardReveal.ref}
              style={{
                marginTop: 48,
                padding: "30px 24px",
                border: "1px solid var(--bd)",
                borderRadius: 22,
                background: "var(--card-bg)",
                backdropFilter: "blur(8px)",
                overflowX: "auto",
              }}
            >
              <div style={{ display: "flex", alignItems: "stretch", gap: 0, minWidth: 880 }}>
                {STEP_NAMES.map((name, i) => {
                  const on = i <= active;
                  const current = i === active;
                  const hasLine = i < STEP_NAMES.length - 1;
                  return (
                    <div key={name} style={{ flex: 1, display: "flex", alignItems: "center", gap: 0 }}>
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textAlign: "center" }}>
                        <span className={`pf-step-badge${on ? " is-on" : ""}${current ? " is-current" : ""}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className={`pf-step-label${on ? " is-on" : ""}`}>{name}</span>
                      </div>
                      {hasLine && <span className={`pf-step-line${on ? " is-on" : ""}`} />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={{ padding: "110px 24px 120px", borderTop: "1px solid var(--bd)" }}>
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 56,
              alignItems: "start",
            }}
          >
            <div ref={contactLeftReveal.ref}>
              <p
                style={{
                  margin: "0 0 16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--accent2)",
                }}
              >
                06 — Contact
              </p>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(29px, 3.7vw, 46px)",
                  letterSpacing: "-.035em",
                  fontWeight: 600,
                  maxWidth: "18ch",
                  lineHeight: 1.1,
                }}
              >
                Parlons de votre prochain projet.
              </h2>
              <p style={{ margin: "22px 0 0", color: "var(--tx3)", fontSize: 16, lineHeight: 1.7, maxWidth: "46ch" }}>
                Un système à concevoir, une API à reprendre, une chaîne de déploiement à fiabiliser ? Décrivez le
                problème, je réponds sous 24 h.
              </p>
              <div ref={contactLinksStagger.ref} style={{ display: "grid", gap: 10, marginTop: 32 }}>
                {LINKS.map((l) => (
                  <a
                    key={l.kind}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    download={l.kind === "CV" ? "CV-Nomena-Andrianiaina.pdf" : undefined}
                    className="pf-link-row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "15px 18px",
                      border: "1px solid var(--bd)",
                      borderRadius: 14,
                      background: "var(--surf1)",
                      color: "var(--tx)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--tx5)",
                        width: 66,
                        flex: "none",
                      }}
                    >
                      {l.kind}
                    </span>
                    <span style={{ fontSize: 15 }}>{l.value}</span>
                    <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", color: "var(--tx5)" }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
            <form
              ref={contactFormReveal.ref}
              onSubmit={onSubmit}
              style={{
                padding: 28,
                border: "1px solid var(--bd)",
                borderRadius: 22,
                background: "var(--card-bg)",
                backdropFilter: "blur(10px)",
                display: "grid",
                gap: 18,
              }}
            >
              <div style={{ display: "grid", gap: 8 }}>
                <label htmlFor="cname" style={{ fontSize: 13, fontWeight: 500, color: "var(--tx2)" }}>
                  Nom
                </label>
                <input
                  id="cname"
                  name="name"
                  type="text"
                  required
                  placeholder="Votre nom"
                  style={{
                    width: "100%",
                    padding: "13px 15px",
                    borderRadius: 11,
                    border: "1px solid var(--bd2)",
                    background: "var(--input-bg)",
                    color: "var(--tx)",
                    fontSize: 15,
                  }}
                />
              </div>
              <div style={{ display: "grid", gap: 8 }}>
                <label htmlFor="cmail" style={{ fontSize: 13, fontWeight: 500, color: "var(--tx2)" }}>
                  Email
                </label>
                <input
                  id="cmail"
                  name="email"
                  type="email"
                  required
                  placeholder="vous@entreprise.com"
                  style={{
                    width: "100%",
                    padding: "13px 15px",
                    borderRadius: 11,
                    border: "1px solid var(--bd2)",
                    background: "var(--input-bg)",
                    color: "var(--tx)",
                    fontSize: 15,
                  }}
                />
              </div>
              <div style={{ display: "grid", gap: 8 }}>
                <label htmlFor="cmsg" style={{ fontSize: 13, fontWeight: 500, color: "var(--tx2)" }}>
                  Message
                </label>
                <textarea
                  id="cmsg"
                  name="message"
                  rows={5}
                  required
                  placeholder="Décrivez votre projet en quelques lignes…"
                  style={{
                    width: "100%",
                    padding: "13px 15px",
                    borderRadius: 11,
                    border: "1px solid var(--bd2)",
                    background: "var(--input-bg)",
                    color: "var(--tx)",
                    fontSize: 15,
                    resize: "vertical",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="pf-submit-btn"
                style={{
                  padding: "14px 20px",
                  border: 0,
                  borderRadius: 12,
                  cursor: "pointer",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--btn-fg)",
                  background: "var(--btn-grad)",
                }}
              >
                {sending ? "Envoi…" : sent ? "Message envoyé ✓" : "Envoyer le message"}
              </button>
              <p aria-live="polite" style={{ margin: 0, minHeight: 18, fontSize: 13.5, color: "var(--accent2)" }}>
                {sent ? "Merci — je reviens vers vous sous 24 h." : ""}
              </p>
            </form>
          </div>
        </section>

        <footer style={{ padding: "30px 24px 44px", borderTop: "1px solid var(--bd)" }}>
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px 24px",
              justifyContent: "space-between",
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              color: "var(--tx5)",
              letterSpacing: ".04em",
            }}
          >
            <span>© 2026 {NAME} — Software Engineer</span>
            <span>Design ✦ Build ✦ Operate</span>
          </div>
        </footer>
      </main>
    </>
  );
}

function TimelineItem({ job, isLast }: { job: (typeof TIMELINE)[number]; isLast: boolean }) {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <div ref={reveal.ref} style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 6 }}>
        <span
          style={{
            width: 11,
            height: 11,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #06B6D4, #8B5CF6)",
            boxShadow: "0 0 0 4px rgba(6,182,212,.12)",
            flex: "none",
          }}
        />
        {!isLast && (
          <span
            style={{
              flex: 1,
              width: 1,
              background: "linear-gradient(180deg, var(--bd3), transparent)",
              marginTop: 8,
            }}
          />
        )}
      </div>
      <div style={{ paddingBottom: 46 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 14px" }}>
          <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, letterSpacing: "-.02em" }}>{job.role}</h3>
          <span style={{ fontSize: 15, color: "var(--accent2)" }}>{job.company}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--tx5)", marginLeft: "auto" }}>
            {job.period}
          </span>
        </div>
        <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.7, color: "var(--tx3)", maxWidth: "74ch", textWrap: "pretty" }}>
          {job.summary}
        </p>
        <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 9 }}>
          {job.wins.map((w) => (
            <li key={w} style={{ display: "flex", gap: 11, fontSize: 14.5, lineHeight: 1.6, color: "var(--tx2)" }}>
              <span style={{ fontFamily: "var(--font-mono)", color: "#8B5CF6", flex: "none" }}>▸</span>
              <span>{w}</span>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
          {job.tech.map((tt) => (
            <span
              key={tt}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--tx3)",
                border: "1px solid var(--bd)",
                padding: "4px 8px",
                borderRadius: 6,
              }}
            >
              {tt}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StackCategory({ cat }: { cat: (typeof STACK)[number] }) {
  const reveal = useReveal<HTMLDivElement>();
  const chipsStagger = useStaggerReveal<HTMLDivElement>(".pf-chip", { y: 14, stagger: 0.035 });
  return (
    <div ref={reveal.ref}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <h3
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            color: "var(--tx2)",
          }}
        >
          {cat.name}
        </h3>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--bd2), transparent)" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--tx5)" }}>{cat.count}</span>
      </div>
      <div
        ref={chipsStagger.ref}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))", gap: 12 }}
      >
        {cat.items.map((t) => (
          <div
            key={t.name}
            className="pf-chip"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 11,
              padding: "13px 14px",
              border: "1px solid var(--bd)",
              borderRadius: 13,
              background: "var(--surf1)",
              backdropFilter: "blur(6px)",
            }}
          >
            {"icon" in t && t.icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={t.icon} alt="" loading="lazy" width={22} height={22} style={{ width: 22, height: 22, flex: "none", display: "block" }} />
            )}
            {"iconLight" in t && t.iconLight && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={t.iconLight}
                alt=""
                loading="lazy"
                width={22}
                height={22}
                style={{ width: 22, height: 22, flex: "none", display: "block", filter: "var(--logo-inv)" }}
              />
            )}
            {"mono" in t && t.mono && (
              <span
                style={{
                  width: 22,
                  height: 22,
                  flex: "none",
                  borderRadius: 6,
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  fontWeight: 500,
                  color: "var(--tx2)",
                  background: "var(--chip-off-bg)",
                  border: "1px solid var(--bd2)",
                }}
              >
                {t.mono}
              </span>
            )}
            <span style={{ fontSize: 13.5, color: "var(--tx2)", letterSpacing: "-.01em" }}>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const CORNER_POS: Record<"tl" | "tr" | "bl" | "br", React.CSSProperties> = {
  tl: { top: 10, left: 10 },
  tr: { top: 10, right: 10, transform: "scaleX(-1)" },
  bl: { bottom: 10, left: 10, transform: "scaleY(-1)" },
  br: { bottom: 10, right: 10, transform: "scale(-1, -1)" },
};

function CornerTrace({ corner }: { corner: "tl" | "tr" | "bl" | "br" }) {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      style={{ position: "absolute", zIndex: 2, pointerEvents: "none", ...CORNER_POS[corner] }}
    >
      <path d="M10 2 L22 2" fill="none" stroke="var(--accent2)" strokeWidth="1.4" strokeLinecap="round" opacity={0.45} />
      <path d="M2 10 L2 22" fill="none" stroke="var(--accent2)" strokeWidth="1.4" strokeLinecap="round" opacity={0.45} />
      <path d="M2 10 L10 2" fill="none" stroke="var(--accent3)" strokeWidth="1.4" strokeLinecap="round" opacity={0.75} />
      <circle cx="22" cy="2" r="1.6" fill="var(--accent2)" opacity={0.85} />
      <circle cx="2" cy="22" r="1.6" fill="var(--accent2)" opacity={0.85} />
    </svg>
  );
}
