import { useState } from "react"

export function ProcessCard({
  step,
}: {
  step: { num: string title: string desc: string }
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "32px 28px",
        borderRadius: 8,

        background: hovered
          ? "rgba(255,255,255,0.05)"
          : "rgba(255,255,255,0.03)",

        border: `1px solid ${
          hovered ? "rgba(182,196,255,0.15)" : "rgba(255,255,255,0.1)"
        }`,

        backdropFilter: "blur(40px)",

        WebkitBackdropFilter: "blur(40px)",

        transition: "background 0.35s, border-color 0.35s",

        boxShadow: hovered ? "0 0 32px rgba(0,85,255,0.05)" : "none",
      }}
    >
      <div
        style={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 700,
          fontSize: 40,
          color: "rgba(182,196,255,0.12)",
          marginBottom: 24,
        }}
      >
        {step.num}
      </div>
      <h3
        style={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 600,
          fontSize: 20,
          color: "#e5e2e1",
          marginBottom: 12,
          textAlign: "justify",
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 14,
          lineHeight: 1.6,
          color: "#a1a1aa",
          textAlign: "justify",
        }}
      >
        {step.desc}
      </p>
    </div>
  )
}
