import type { NavLink } from "@/types"

export { PROJECTS, PROJECT_STACKS } from "./projects"

export const NAV_LINKS: NavLink[] = [
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export const SERVICES = [
  {
    num: "01",
    name: "Développement Web",
    desc: "Sites et applications web modernes avec React, Angular et TypeScript, pensés mobile-first et performants.",
  },
  {
    num: "02",
    name: "Interfaces & Intégrations",
    desc: "Intégration de maquettes, design systems et composants UI accessibles avec Tailwind CSS.",
  },
  {
    num: "03",
    name: "Applications Mobiles",
    desc: "Applications iOS et Android cross-platform avec Flutter et Dart pour une expérience native.",
  },
  {
    num: "04",
    name: "Full-stack & API",
    desc: "Du frontend à l'API (NestJS, PostgreSQL) pour des solutions complètes, robustes et scalables.",
  },
  {
    num: "05",
    name: "Applications Métier",
    desc: "Solutions sur mesure pour la gestion, la comptabilité et les besoins spécifiques de votre organisation.",
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "Rindra a développé notre site web avec professionnalisme et réactivité. Le résultat est exactement ce que nous attendions.",
    author: "ESSG Team",
    role: "Université de Fianarantsoa",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop&auto=format",
  },
  {
    quote:
      "Excellente maîtrise de Flutter et Dart. L'application mobile commandée fonctionne parfaitement.",
    author: "Association Ny Tahirinay",
    role: "Client Mobile",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop&auto=format",
  },
  {
    quote:
      "Un développeur talentueux qui comprend les besoins métiers et livre des solutions de qualité.",
    author: "Client E-Commerce",
    role: "Projet Commercial",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&auto=format",
  },
]

export const CLIENTS = [
  "ESSG",
  "Ny Tahirinay",
  "Antsan'ny Fitia",
  "Cantine SFA",
  "Blu Azur",
]

export const HIGHLIGHTS = [
  { title: "15+ Dépôts Publics", cat: "GitHub" },
  { title: "Projets Variés", cat: "Web · Mobile · Full-stack" },
  { title: "Contributeur Actif", cat: "Open Source" },
]

export const TEAM = [{ name: "Rindra", role: "Développeur Full Stack" }]

export const PROCESS_STEPS = [
  {
    num: "1",
    title: "Analyse des Besoins",
    desc: "Comprendre votre projet, vos objectifs et les fonctionnalités nécessaires.",
  },
  {
    num: "2",
    title: "Architecture",
    desc: "Conception de l'architecture technique et choix des technologies adaptées.",
  },
  {
    num: "3",
    title: "Développement",
    desc: "Codage avec les meilleures pratiques, tests et documentation.",
  },
  {
    num: "4",
    title: "Déploiement",
    desc: "Mise en production, formation et support continu.",
  },
]

export const CONTACT_INFO = [
  { label: "Email", value: "rindra.leon@gmail.com", href: "mailto:rindra.leon@gmail.com" },
  { label: "GitHub", value: "github.com/rindraleon", href: "https://github.com/rindraleon" },
  { label: "Localisation", value: "Madagascar" },
  { label: "Téléphone", value: "+261 34 29 340 64", href: "tel:+261342934064" },
]

export const HERO_STATS = [
  { val: "15+", label: "Projets GitHub" },
  { val: "3+", label: "Années d'Expérience" },
  { val: "5+", label: "Langages Maîtrisés" },
  { val: "100%", label: "Projets Livrés" },
]

export const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/rindraleon" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rindraleon" },
  { label: "Email", href: "mailto:rindra.leon@gmail.com" },
  { label: "Confidentialité", href: "#privacy" },
]
