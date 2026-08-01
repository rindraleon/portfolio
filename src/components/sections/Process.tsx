import { Fade } from "@/components/ui/Fade"

import { Label } from "@/components/ui/Label"

import { ProcessCard } from "@/components/cards/ProcessCard"

import { PROCESS_STEPS } from "@/data"

export function Process() {
  return (
    <section
      style={{ padding: "clamp(80px,10vw,160px) 0", background: "#0e0e0e" }}
    >
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <Fade className="text-center mb-20">
          <Label color="#b6c4ff" center>
            Notre Méthode
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
            Le processus comme art.
          </h2>
        </Fade>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <Fade key={step.num} delay={i * 80}>
              <ProcessCard step={step} />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
