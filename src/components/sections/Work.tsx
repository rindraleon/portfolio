import { PROJECTS } from "@/data"
import { Fade } from "@/components/ui/Fade"
import { Label } from "@/components/ui/Label"
import { ProjectCard } from "@/components/cards/ProjectCard"

export function Work() {
  return (
    <section id="work" style={{ padding: "clamp(80px,10vw,160px) 0" }}>
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <Fade className="mb-16">
          <Label color="#b6c4ff">Tous les Projets</Label>
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

        {/* 4 colonnes grid */}
        <div
          style={{ display: "grid", gap: 16 }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project, index) => (
            <Fade key={project.id} delay={index * 80}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "inline" }}
              >
                <ProjectCard project={project} aspectRatio="56.25%" />
              </a>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
