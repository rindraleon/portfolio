import repos from "../../repos.json"

import type { Project, Stack } from "@/types"

interface RepoEntry {
  name: string
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  homepage: string | null
  topics: string[]
  fork: boolean
  created_at: string
  pushed_at: string
}

const RAW = repos as unknown as RepoEntry[]

const EXCLUDED = new Set(["portfolio", "profil", "site-template", "test-relia"])

interface Curation {
  title?: string
  stack: Stack
  role: string
  features: string[]
  tags: string[]
  img: string
  demo?: string
  highlight: boolean
}

const CURATION: Record<string, Curation> = {
  "essg-website": {
    stack: "React",
    role: "Développement Frontend",
    features: [
      "Back-office admin (React + shadcn/ui)",
      "Interface institutionnelle complète",
      "Intégration API & déploiement continu",
    ],
    tags: ["TypeScript", "React"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&auto=format",
    highlight: true,
  },
  "admin-dashboard": {
    stack: "Angular",
    role: "Développement Frontend (Angular)",
    features: [
      "Tableau de bord administrateur",
      "Angular + Tailwind CSS",
      "Composants réutilisables & typés",
    ],
    tags: ["Angular", "TypeScript"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&auto=format",
    highlight: true,
  },
  "front-office-essg": {
    stack: "React",
    role: "Développement Frontend",
    features: [
      "Espace client (Vite + React + TypeScript)",
      "Parcours utilisateur orienté conversion",
    ],
    tags: ["React", "Vite"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=600&fit=crop&auto=format",
    highlight: true,
  },
  "fanambi-connect": {
    stack: "React",
    role: "Intégration Frontend",
    features: [
      "React + Vite + shadcn/ui",
      "Composants UI accessibles",
    ],
    tags: ["React", "TypeScript"],
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&h=600&fit=crop&auto=format",
    highlight: false,
  },
  "blu-azur-integration": {
    stack: "React",
    role: "Intégration Web",
    features: [
      "Intégration maquette en React + Tailwind CSS",
      "Design responsive mobile-first",
    ],
    tags: ["React", "Tailwind"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&h=600&fit=crop&auto=format",
    highlight: false,
  },
  "e-commerce": {
    stack: "Full-stack",
    role: "Développement Full-stack",
    features: [
      "Frontend React + API NestJS",
      "Base de données PostgreSQL",
      "Déploiement conteneurisé (Docker)",
    ],
    tags: ["TypeScript", "NestJS", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop&auto=format",
    highlight: true,
  },
  "Antsan-ny-fitia": {
    stack: "Flutter",
    role: "Application Mobile",
    features: [
      "Application Flutter / Dart",
      "Paroles & répertoire de chants",
    ],
    tags: ["Flutter", "Dart"],
    img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=900&h=600&fit=crop&auto=format",
    highlight: false,
  },
  "Ny-tahirinay": {
    stack: "Flutter",
    role: "Application Mobile",
    features: [
      "Gestion des cotisations d'association",
      "Application Flutter / Dart",
    ],
    tags: ["Flutter", "Dart"],
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=600&fit=crop&auto=format",
    highlight: false,
  },
  "ny-paroasinay": {
    stack: "Flutter",
    role: "Application Mobile",
    features: [
      "Gestion de budget paroissial",
      "Application Flutter / Dart",
    ],
    tags: ["Flutter", "Dart"],
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&h=600&fit=crop&auto=format",
    highlight: false,
  },
}

const STACK_ORDER: Stack[] = ["React", "Angular", "Flutter", "Full-stack", "Web"]

function humanize(name: string): string {
  return name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

function inferStack(repo: RepoEntry): Stack {
  if (repo.language === "Dart") return "Flutter"
  return "Web"
}

function yearOf(iso: string): string {
  return iso.slice(0, 4)
}

function isShowcase(repo: RepoEntry): boolean {
  if (repo.fork) return false
  if (EXCLUDED.has(repo.name)) return false
  if (/backend/i.test(repo.name)) return false
  if (!repo.language) return false
  return true
}

function buildProjects(): Project[] {
  const curated = RAW.filter(isShowcase)

  const projects = curated.map((repo) => {
    const meta = CURATION[repo.name]

    const base: Project = {
      id: 0,
      title: meta?.title ?? humanize(repo.name),
      stack: meta?.stack ?? inferStack(repo),
      role: meta?.role ?? "Développement",
      features: meta?.features ?? [],
      github: repo.html_url,
      demo: meta?.demo ?? (repo.homepage ?? undefined),
      img:
        meta?.img ??
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=600&fit=crop&auto=format",
      year: yearOf(repo.created_at),
      highlight: meta?.highlight ?? false,
      tags: meta?.tags ?? (repo.topics.length ? repo.topics : []),
    }

    return base
  })

  return projects
    .sort((a, b) => {
      if (a.highlight !== b.highlight) return a.highlight ? -1 : 1
      return STACK_ORDER.indexOf(a.stack) - STACK_ORDER.indexOf(b.stack)
    })
    .map((p, i) => ({ ...p, id: i + 1 }))
}

export const PROJECTS = buildProjects()

export const PROJECT_STACKS: Stack[] = [
  ...new Set(PROJECTS.map((p) => p.stack)),
].sort((a, b) => STACK_ORDER.indexOf(a) - STACK_ORDER.indexOf(b))
