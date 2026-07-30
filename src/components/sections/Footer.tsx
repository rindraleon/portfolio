import { FOOTER_LINKS } from '@/data'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0a0a0a', padding: '48px clamp(24px,5.5vw,80px)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: 16, color: '#fff' }}>
            Rindra<span style={{ background: 'linear-gradient(135deg,#b6c4ff,#d0bcff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Leon</span>
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#434656', marginTop: 4 }}>© 2024 Rindra Leon. Tous droits réservés.</div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
          {FOOTER_LINKS.map(link => (
            <a key={link} href="#"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#434656', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a1a1aa')}
              onMouseLeave={e => (e.currentTarget.style.color = '#434656')}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}