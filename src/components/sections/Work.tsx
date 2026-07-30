import { useState } from 'react'
import { PROJECTS } from '@/data'
import { Fade } from '@/components/ui/Fade'
import { Label } from '@/components/ui/Label'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { ArrowRight } from '@/components/ui/Buttons'

export function Work() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Branding', 'Web', 'Photography', 'Print']

  return (
    <section id="work" style={{ padding: 'clamp(80px,10vw,160px) 0' }}>
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <Fade className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Label color="#b6c4ff">Selected Work</Label>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-0.02em', lineHeight: 1.1, color: '#fff', marginTop: 16 }}>
              Work that<br />speaks first.
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
                  padding: '8px 16px', borderRadius: 4, border: '1px solid',
                  borderColor: activeFilter === f ? 'rgba(182,196,255,0.5)' : 'rgba(255,255,255,0.1)',
                  color: activeFilter === f ? '#b6c4ff' : '#a1a1aa',
                  background: activeFilter === f ? 'rgba(182,196,255,0.05)' : 'transparent',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}>
                {f}
              </button>
            ))}
          </div>
        </Fade>

        {/* Asymmetric grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16 }}>
          <div style={{ gridColumn: 'span 12' }} className="md:[grid-column:span_7]">
            <Fade><ProjectCard project={PROJECTS[0]} aspectRatio="56%" /></Fade>
          </div>
          <div style={{ gridColumn: 'span 12' }} className="md:[grid-column:span_5]">
            <Fade delay={80}><ProjectCard project={PROJECTS[1]} aspectRatio="120%" /></Fade>
          </div>
          <div style={{ gridColumn: 'span 12' }} className="md:[grid-column:span_4]">
            <Fade delay={0}><ProjectCard project={PROJECTS[2]} aspectRatio="75%" /></Fade>
          </div>
          <div style={{ gridColumn: 'span 12' }} className="md:[grid-column:span_4]">
            <Fade delay={80}><ProjectCard project={PROJECTS[3]} aspectRatio="75%" /></Fade>
          </div>
          <div style={{ gridColumn: 'span 12' }} className="md:[grid-column:span_4]">
            <Fade delay={160}><ProjectCard project={PROJECTS[4]} aspectRatio="75%" /></Fade>
          </div>
        </div>

        <Fade className="text-center mt-16">
          <a href="#"
            className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300"
            style={{ color: '#a1a1aa', fontFamily: 'Inter, sans-serif' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#e5e2e1')}
            onMouseLeave={e => (e.currentTarget.style.color = '#a1a1aa')}>
            View All Projects <ArrowRight />
          </a>
        </Fade>
      </div>
    </section>
  )
}