import { useState } from 'react'
import { SERVICES } from '@/data'
import { Fade } from '@/components/ui/Fade'
import { Label } from '@/components/ui/Label'

export function Services() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="services" style={{ background: '#0e0e0e', padding: 'clamp(80px,10vw,160px) 0' }}>
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(32px,4vw,80px)', alignItems: 'start' }}>

          <Fade style={{ gridColumn: 'span 12' }} className="md:[grid-column:span_4]">
            <div style={{ position: 'sticky', top: 112 }}>
              <Label color="#b6c4ff">Mes Services</Label>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(30px,3.5vw,46px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#fff', marginTop: 16, marginBottom: 20 }}>
                Cinq expertises,<br />un engagement.
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: '#a1a1aa', textAlign: 'justify' }}>
                Je me concentre sur les technologies que je maîtrise pour vous offrir des solutions de qualité, performantes et maintenables.
              </p>
            </div>
          </Fade>

          <Fade delay={80} style={{ gridColumn: 'span 12' }} className="md:[grid-column:span_8]">
            {SERVICES.map((svc, i) => (
              <div key={svc.num} onClick={() => setOpen(open === i ? null : i)}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '28px 0' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#434656', minWidth: 24 }}>{svc.num}</span>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, flex: 1, fontSize: 'clamp(18px,2vw,24px)', color: open === i ? '#b6c4ff' : '#e5e2e1', transition: 'color 0.3s' }}>{svc.name}</h3>
                  <div style={{ flexShrink: 0, color: open === i ? '#b6c4ff' : '#a1a1aa', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s, color 0.3s' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div style={{ overflow: 'hidden', maxHeight: open === i ? '100px' : '0', opacity: open === i ? 1 : 0, transition: 'max-height 0.4s ease, opacity 0.35s ease' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: '#a1a1aa', paddingBottom: 28, paddingLeft: 48 }}>{svc.desc}</p>
                </div>
              </div>
            ))}
          </Fade>

        </div>
      </div>
    </section>
  )
}