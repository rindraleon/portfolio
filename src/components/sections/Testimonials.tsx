import { useState, useEffect } from "react"

import { TESTIMONIALS } from "@/data"

import { Fade } from "@/components/ui/Fade"

import { Label } from "@/components/ui/Label"

export function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % TESTIMONIALS.length),
      6000,
    )

    return () => clearInterval(t)
  }, [])

  const current = TESTIMONIALS[active]

  return (
    <section
      style={{ padding: "clamp(80px,10vw,160px) 0", background: "#0a0a0a" }}
    >
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <Fade className="text-center mb-16">
          <Label color="#b6c4ff" center>
            Voix des Clients
          </Label>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: "clamp(30px,4vw,48px)",
              letterSpacing: "-0.02em",
              color: "#fff",
              marginTop: 16,
            }}
          >
            Ce qu'ils disent.
          </h2>
        </Fade>

        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          {/* Quote */}
          <div
            style={{
              minHeight: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <blockquote
              key={active}
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",

                fontSize: "clamp(20px,2.5vw,28px)",
                lineHeight: 1.5,
                color: "#e5e2e1",

                letterSpacing: "-0.01em",
                textAlign: "justify",

                animation: "fadeUp 0.5s ease forwards",
              }}
            >
              "{current.quote}"
            </blockquote>
          </div>

          {/* Author */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              marginTop: 40,
            }}
          >
            <img
              src={current.img}
              alt={current.author}
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                objectFit: "cover",
                filter: "saturate(0.6)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  fontSize: 17,
                  color: "#fff",
                }}
              >
                {current.author}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#a1a1aa",
                  marginTop: 4,
                }}
              >
                {current.role}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginTop: 40,
            }}
          >
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 24 : 6,
                  height: 6,
                  borderRadius: 3,

                  background:
                    i === active ? "#0055ff" : "rgba(255,255,255,0.15)",

                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px) }
          to   { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </section>
  )
}
