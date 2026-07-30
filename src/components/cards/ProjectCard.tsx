import { useState } from 'react'

export function ProjectCard({ project, aspectRatio }: { project: { id: number; title: string; category: string; year: string; tags: string[]; img: string }; aspectRatio: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <article
      style={{ borderRadius: 8, overflow: 'hidden', background: '#1c1b1b', cursor: 'pointer', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: 'relative', paddingBottom: aspectRatio, overflow: 'hidden' }}>
        <img src={project.img} alt={project.title} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          filter: hovered ? 'saturate(1)' : 'saturate(0.65)',
          transition: 'transform 0.5s ease, filter 0.5s ease',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered
            ? 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.25) 55%, transparent 100%)'
            : 'linear-gradient(to top, rgba(10,10,10,0.72) 0%, transparent 60%)',
          transition: 'background 0.4s ease',
        }} />

        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 24 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '4px 10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, color: '#a1a1aa',
              }}>{tag}</span>
            ))}
          </div>
          <h3 style={{
            fontFamily: '"Playfair Display", serif', fontWeight: 600, color: '#fff',
            fontSize: 'clamp(18px,2.2vw,26px)', letterSpacing: '-0.01em',
            transform: hovered ? 'translateY(0)' : 'translateY(4px)',
            transition: 'transform 0.35s ease',
          }}>{project.title}</h3>
          <div style={{
            display: 'flex', justifyContent: 'space-between', marginTop: 6,
            opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#a1a1aa' }}>{project.category}</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b6c4ff' }}>{project.year}</span>
          </div>
        </div>

        {/* Hover arrow badge */}
        <div style={{
          position: 'absolute', top: 16, right: 16, width: 32, height: 32, borderRadius: '50%',
          background: 'rgba(0,85,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0, transform: hovered ? 'scale(1)' : 'scale(0.75)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </article>
  )
}