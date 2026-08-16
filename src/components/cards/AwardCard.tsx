import { useState } from "react"

export function AwardCard({
  item,
}: {
  item: { title: string; cat: string }
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
        height: "100%",
      }}
    >
      <div
        style={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 700,
          fontSize: "clamp(24px,2.6vw,34px)",
          color: "#fff",
          lineHeight: 1.2,
          marginBottom: 8,
        }}
      >
        {item.title}
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: hovered ? "#b6c4ff" : "#a1a1aa",
          transition: "color 0.3s",
        }}
      >
        {item.cat}
      </div>
    </div>
  )
}
