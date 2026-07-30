import { Fade } from "@/components/ui/Fade"
import { Label } from "@/components/ui/Label"
import { TeamRow } from "@/components/cards/TeamRow"
import { TEAM } from "@/data"

export function Studio() {
  return (
    <section id="studio" style={{ padding: "clamp(80px,10vw,160px) 0" }}>
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "clamp(32px,4vw,80px)",
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div className="col-span-12 md:col-span-9">
            <Fade delay={100}>
              <Label color="#b6c4ff">Le Studio</Label>
              <h2
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: "clamp(32px,4vw,52px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  color: "#fff",
                  marginTop: 16,
                  marginBottom: 24,
                }}
              >
                Développeur passionné
                <br />
                <em
                  className="not-italic"
                  style={{
                    background: "linear-gradient(135deg,#b6c4ff,#d0bcff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  par le code.
                </em>
              </h2>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "#a1a1aa",
                  marginBottom: 20,
                  textAlign: "justify",
                }}
              >
                Développeur full stack spécialisé dans la création
                d'applications web et mobiles. Chaque projet est une opportunité
                de créer des solutions innovantes et performantes.
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "#a1a1aa",
                  marginBottom: 40,
                  textAlign: "justify",
                }}
              >
                Ma pratique couvre le développement web avec TypeScript et
                React, les applications mobiles avec Flutter, et l'architecture
                backend. Je crois en des solutions robustes, maintenables et
                centrées sur l'utilisateur.
              </p>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                {TEAM.map(({ name, role }) => (
                  <TeamRow key={name} name={name} role={role} />
                ))}
              </div>
            </Fade>
          </div>

          {/* Image */}
          <Fade className="col-span-12 md:col-span-3">
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  background: "#1c1b1b",
                }}
              >
                <img
                  src="https://github.com/rindraleon.png"
                  alt="Photo de profil GitHub"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "saturate(0.7)",
                    transition: "filter 0.4s",
                    display: "block",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter = "saturate(1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = "saturate(0.7)")
                  }
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(0,85,255,0.07) 0%, transparent 60%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
              {/* Floating glass stat */}
              <div
                style={{
                  position: "absolute",
                  bottom: -20,
                  right: -16,
                  padding: "20px 24px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: 30,
                    color: "#fff",
                  }}
                >
                  Madagascar
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
                  Disponible
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
