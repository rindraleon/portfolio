import { useState, useEffect } from "react"
import { useScrollY } from "@/hooks"
import { HERO_STATS } from "@/data"
import { PrimaryButton, GhostButton, ArrowRight } from "@/components/ui/Buttons"

export function Hero() {
  const [phase, setPhase] = useState(0)
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 120)
    const t2 = setTimeout(() => setPhase(2), 400)
    const t3 = setTimeout(() => setPhase(3), 700)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  const scrollY = useScrollY()
  const parallax = scrollY * 0.3

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${parallax}px)`,
          willChange: "transform",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1558627563-3e383cddc94a?w=1920&h=1200&fit=crop&auto=format"
          alt="Abstract dark urban architecture at night"
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(0.3) saturate(0.55)",
            transformOrigin: "center top",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0) 35%, rgba(10,10,10,0.8) 80%, #0a0a0a 100%)",
          }}
        />
      </div>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "20%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,85,255,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "15%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(87,27,193,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative px-6 md:px-20 max-w-[1440px] mx-auto w-full">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-8 transition-all duration-700"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "none" : "translateY(16px)",
          }}
        >
          <span className="w-8 h-px" style={{ background: "#b6c4ff" }} />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#b6c4ff",
            }}
          >
            Développeur Full Stack
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white font-bold leading-none mb-8 transition-all duration-700"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(52px, 8.5vw, 100px)",
            letterSpacing: "-0.02em",
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "none" : "translateY(24px)",
            transitionDelay: "80ms",
          }}
        >
          Nous concevons
          <br />
          <em
            className="not-italic"
            style={{
              background:
                "linear-gradient(135deg,#b6c4ff 0%,#d0bcff 60%,#ffb5a0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            la présence.
          </em>
        </h1>

        {/* Body + CTAs */}
        <div
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 transition-all duration-700"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "none" : "translateY(16px)",
            transitionDelay: "80ms",
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              lineHeight: 1.6,
              letterSpacing: "0.01em",
              color: "#a1a1aa",
              maxWidth: 420,
              textAlign: "justify",
            }}
          >
            Développeur passionné spécialisé dans la création d'applications web
            et mobiles. Je transforme vos idées en solutions numériques
            performantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <PrimaryButton href="#work">
              Voir les Projets
              <ArrowRight />
            </PrimaryButton>
            <GhostButton href="#studio">Notre Studio</GhostButton>
          </div>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-10 mt-20 pt-10 transition-all duration-700"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            opacity: phase >= 3 ? 1 : 0,
            transitionDelay: "200ms",
          }}
        >
          {HERO_STATS.map(({ val, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: 34,
                  color: "#fff",
                }}
              >
                {val}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#a1a1aa",
                  marginTop: 4,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
