import { useState } from "react"

import type { Project } from "@/types"

function StackBadge({ stack }: { stack: Project["stack"] }) {
  const accent =
    stack === "Angular"
      ? "#ff5f5f"
      : stack === "React"
        ? "#7cc0ff"
        : stack === "Flutter"
          ? "#4fd1c5"
          : stack === "Full-stack"
            ? "#d0bcff"
            : "#b6c4ff"

  return (
    <span
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        padding: "5px 10px",
        borderRadius: 4,
        background: "rgba(10,10,10,0.72)",
        border: `1px solid ${accent}66`,
        color: accent,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {stack}
    </span>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 12L12 2M12 2H5M12 2v7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col overflow-hidden"
      style={{
        borderRadius: 10,
        background: "#141414",
        border: project.highlight
          ? "1px solid rgba(182,196,255,0.18)"
          : "1px solid rgba(255,255,255,0.07)",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        height: "100%",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{ paddingBottom: "58%", background: "#1c1b1b" }}
      >
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            filter: hovered ? "saturate(1)" : "saturate(0.75)",
            transition: "transform 0.5s ease, filter 0.5s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 45%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            display: "flex",
            gap: 6,
            alignItems: "center",
          }}
        >
          <StackBadge stack={project.stack} />
          {project.highlight && (
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "5px 10px",
                borderRadius: 4,
                background: "rgba(0,85,255,0.2)",
                border: "1px solid rgba(0,85,255,0.4)",
                color: "#b6c4ff",
              }}
            >
              À la une
            </span>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "rgba(0,85,255,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0.75)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          <ArrowIcon />
        </div>
      </div>

      <div
        className="flex flex-col flex-1"
        style={{ padding: "20px 20px 20px", gap: 12 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <h3
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
              fontSize: "clamp(18px,2vw,23px)",
              letterSpacing: "-0.01em",
              color: "#fff",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#434656",
              flexShrink: 0,
            }}
          >
            {project.year}
          </span>
        </div>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#b6c4ff",
          }}
        >
          {project.role}
        </p>

        {project.features.length > 0 && (
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
            {project.features.map((f) => (
              <li
                key={f}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "#a1a1aa",
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#b6c4ff", flexShrink: 0, marginTop: 2 }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6.5L4.5 9L10 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        )}

        {project.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  padding: "3px 8px",
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#a1a1aa",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="mt-auto"
          style={{ display: "flex", gap: 16, paddingTop: 4 }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.06em",
              color: "#e5e2e1",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#b6c4ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#e5e2e1")}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#b6c4ff",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e5e2e1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#b6c4ff")}
            >
              <ArrowIcon />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
