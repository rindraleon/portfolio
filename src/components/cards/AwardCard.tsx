import { useState } from "react"

export function AwardCard({
  award,
}: {
  award: { title: string cat: string year: string }
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "32px 28px",
        background: hovered ? "rgba(182,196,255,0.04)" : "rgba(10,10,10,0.8)",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        transition: "background 0.35s ease",
        cursor: "default",
      }}
    >
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: hovered ? "#b6c4ff" : "#434656",
          marginBottom: 12,
          transition: "color 0.3s",
        }}
      >
        {award.year}
      </div>
      <div
        style={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 600,
          fontSize: 20,
          color: "#e5e2e1",
          lineHeight: 1.3,
          marginBottom: 8,
          textAlign: "justify",
        }}
      >
        {award.title}
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          color: "#a1a1aa",
          textAlign: "justify",
        }}
      >
        {award.cat}
      </div>
    </div>
  )
}
