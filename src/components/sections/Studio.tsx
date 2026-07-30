import { Fade } from '@/components/ui/Fade'
import { Label } from '@/components/ui/Label'
import { TeamRow } from '@/components/cards/TeamRow'
import { TEAM } from '@/data'

export function Studio() {
  return (
    <section id="studio" style={{ padding: 'clamp(80px,10vw,160px) 0' }}>
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(32px,4vw,80px)', alignItems: 'center' }}>

          {/* Image */}
          <Fade className="col-span-12 md:col-span-6" style={{ gridColumn: 'span 12' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 8, overflow: 'hidden', aspectRatio: '4/5', background: '#1c1b1b' }}>
                <img
                  src="https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=900&h=1100&fit=crop&auto=format"
                  alt="Studio portrait with dramatic moody lighting"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.7)', transition: 'filter 0.4s', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'saturate(1)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = 'saturate(0.7)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,85,255,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
              </div>
              {/* Floating glass stat */}
              <div style={{
                position: 'absolute', bottom: -20, right: -16,
                padding: '20px 24px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                borderRadius: 8,
              }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 30, color: '#fff' }}>Berlin</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a1a1aa', marginTop: 4 }}>Est. 2018</div>
              </div>
            </div>
          </Fade>

          {/* Text */}
          <div style={{ gridColumn: 'span 12' }} className="md:[grid-column:span_6]">
            <Fade delay={100}>
              <Label color="#b6c4ff">The Studio</Label>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.02em', lineHeight: 1.15, color: '#fff', marginTop: 16, marginBottom: 24 }}>
                A small studio with<br />
                <em className="not-italic" style={{ background: 'linear-gradient(135deg,#b6c4ff,#d0bcff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>uncommon ambition.</em>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: '#a1a1aa', marginBottom: 20 }}>
                We are a team of six. Every project is handled by the people who know it best — not passed down a chain or farmed to junior teams overseas.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: '#a1a1aa', marginBottom: 40 }}>
                Our practice spans strategy, visual identity, digital experience, and film. We believe the most powerful brand moments happen at the intersection of rigorous thinking and surprising form.
              </p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                {TEAM.map(({ name, role }) => (
                  <TeamRow key={name} name={name} role={role} />
                ))}
              </div>
            </Fade>
          </div>

        </div>
      </div>
    </section>
  )
}