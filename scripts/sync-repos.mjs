import { writeFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const USER = process.env.GITHUB_USER || "rindraleon"
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "repos.json")

const res = await fetch(
  `https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`,
  {
    headers: { Accept: "application/vnd.github+json" },
  },
)

if (!res.ok) {
  throw new Error(`GitHub API error: ${res.status} ${res.statusText}`)
}

const repos = await res.json()

const lean = repos.map((r) => ({
  name: r.name,
  full_name: r.full_name,
  html_url: r.html_url,
  description: r.description,
  language: r.language,
  homepage: r.homepage,
  topics: r.topics ?? [],
  fork: r.fork,
  created_at: r.created_at,
  pushed_at: r.pushed_at,
}))

await writeFile(OUT, JSON.stringify(lean, null, 2) + "\n")
console.log(`Wrote ${lean.length} repos to ${OUT}`)
