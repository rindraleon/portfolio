import { useScrollY } from "@/hooks"

export function BackToTop() {
  const y = useScrollY()
  const visible = y > 600

  return (
    <button
      aria-label="Retour en haut"
      title="Retour en haut"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed z-40 flex items-center justify-center transition-all duration-300"
      style={{
        right: 24,
        bottom: 24,
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "rgba(28,27,27,0.9)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "#e5e2e1",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(182,196,255,0.5)"
        e.currentTarget.style.color = "#b6c4ff"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"
        e.currentTarget.style.color = "#e5e2e1"
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 14V2M8 2L3 7M8 2l5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
