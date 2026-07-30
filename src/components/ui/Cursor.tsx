import { useState, useEffect, useRef } from "react"

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHovering(!!t.closest("a, button, [data-cursor-hover]"))
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onEnter)

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onEnter)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-0"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: hovering ? "#0055ff" : "#b6c4ff",
          transition: "background 0.3s",
        }}
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `1px solid ${
            hovering ? "rgba(0,85,255,0.6)" : "rgba(182,196,255,0.3)"
          }`,
          transition: "border-color 0.3s, width 0.3s, height 0.3s",
          ...(hovering
            ? { width: 56, height: 56, marginLeft: -8, marginTop: -8 }
            : {}),
        }}
      />
    </>
  )
}
