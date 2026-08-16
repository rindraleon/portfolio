import { useState } from "react"

export function TeamRow({ name, role }: { name: string; role: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        padding: "16px 0",

        borderBottom: "1px solid rgba(255,255,255,0.05)",

        transform: hovered ? "translateX(10px)" : "translateX(0)",

        transition: "transform 0.3s ease",

        cursor: "default",
      }}
    >
      <span
        style={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 600,
          fontSize: 17,
          color: hovered ? "#e5e2e1" : "#c3c5d9",
          transition: "color 0.3s",
          textAlign: "justify",
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#a1a1aa",
          textAlign: "justify",
        }}
      >
        {role}
      </span>
    </div>
  )
}
