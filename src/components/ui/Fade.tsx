import { useFadeIn } from "@/hooks"

export function Fade({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  const { ref, visible } = useFadeIn()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,

        transform: visible ? "translateY(0)" : "translateY(32px)",

        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,

        ...style,
      }}
    >
      {children}
    </div>
  )
}
