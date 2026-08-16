import { useState } from "react"

import { PROJECTS, PROJECT_STACKS } from "@/data"

import { Fade } from "@/components/ui/Fade"

import { Label } from "@/components/ui/Label"

import { ProjectCard } from "@/components/cards/ProjectCard"

import type { Stack } from "@/types"

export function Work() {
  const [filter, setFilter] = useState<Stack | "Tous">("Tous")

  const visible =
    filter === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.stack === filter)

  return (
    <section id="projets" style={{ padding: "clamp(80px,10vw,160px) 0" }}>
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <Fade className="mb-10">
          <Label color="#b6c4ff">Projets Sélectionnés</Label>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: "clamp(36px,5vw,56px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#fff",
              marginTop: 16,
            }}
          >
            Découvrez mes réalisations.
          </h2>
        </Fade>

        <Fade className="mb-12">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {(["Tous", ...PROJECT_STACKS] as (Stack | "Tous")[]).map((s) => {
              const isActive = filter === s
              return (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "8px 16px",
                    borderRadius: 999,
                    cursor: "pointer",
                    border: isActive
                      ? "1px solid rgba(182,196,255,0.5)"
                      : "1px solid rgba(255,255,255,0.1)",
                    background: isActive
                      ? "rgba(182,196,255,0.08)"
                      : "transparent",
                    color: isActive ? "#e5e2e1" : "#a1a1aa",
                    transition: "all 0.2s ease",
                  }}
                >
                  {s}
                </button>
              )
            })}
          </div>
        </Fade>

        <div
          style={{ display: "grid", gap: 20 }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((project, index) => (
            <Fade key={project.id} delay={index * 60} className="h-full">
              <ProjectCard project={project} />
            </Fade>
          ))}
        </div>

        {visible.length === 0 && (
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 15,
              color: "#a1a1aa",
            }}
          >
            Aucun projet dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </section>
  )
}
