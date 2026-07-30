export function Label({
  children,
  color,
  center,
}: {
  children: React.ReactNode
  color: string
  center?: boolean
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      <span
        style={{
          display: "block",
          width: 24,
          height: 1,
          background: color,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color,
        }}
      >
        {children}
      </span>
    </div>
  )
}
