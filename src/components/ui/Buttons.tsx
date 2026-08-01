export function PrimaryButton({
  href,
  children,
  onClick,
  disabled,
}: {
  href: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  disabled?: boolean
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-white transition-all duration-400"
      style={{
        background: "#0055ff",
        borderRadius: "4px",
        fontFamily: "Inter, sans-serif",
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        pointerEvents: disabled ? "none" : "auto",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.boxShadow =
            "0 0 28px rgba(0,85,255,0.45), 0 0 60px rgba(0,85,255,0.15)"
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      {children}
    </a>
  )
}

export function GhostButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-white transition-all duration-300"
      style={{
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: "4px",
        fontFamily: "Inter, sans-serif",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,1)"
        e.currentTarget.style.background = "rgba(255,255,255,0.03)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"
        e.currentTarget.style.background = "transparent"
      }}
    >
      {children}
    </a>
  )
}

export function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
