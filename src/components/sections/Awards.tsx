import { AWARDS } from '@/data'
import { Fade } from '@/components/ui/Fade'
import { Label } from '@/components/ui/Label'
import { AwardCard } from '@/components/cards/AwardCard'

export function Awards() {
  return (
    <section style={{ background: '#0e0e0e', padding: 'clamp(80px,8vw,120px) 0' }}>
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <Fade className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Label color="#b6c4ff">Recognition</Label>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(32px,4vw,48px)', letterSpacing: '-0.02em', lineHeight: 1.15, color: '#fff', marginTop: 16 }}>
              The work<br />gets noticed.
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: '#a1a1aa', maxWidth: 360 }}>
            Eleven industry awards in five years. We're proud of the recognition, but more proud that clients keep coming back.
          </p>
        </Fade>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, overflow: 'hidden' }}>
          {AWARDS.map((award, i) => (
            <Fade key={award.title} delay={i * 60}>
              <AwardCard award={award} />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}