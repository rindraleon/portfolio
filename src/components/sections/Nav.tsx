import { useState } from 'react'
import { NAV_LINKS } from '@/data'
import { PrimaryButton } from '@/components/ui/Buttons'

export function Nav({ scrollY }: { scrollY: number }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const solid = scrollY > 60

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: solid ? 'rgba(10,10,10,0.88)' : 'transparent',
        backdropFilter: solid ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(24px)' : 'none',
        borderBottom: solid ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="mx-auto px-6 md:px-20 max-w-[1440px] flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-white select-none" style={{ textAlign: 'justify' }}>
          RINDRA<span style={{ background: 'linear-gradient(135deg,#b6c4ff,#d0bcff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Léon</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300"
              style={{ color: '#a1a1aa', fontFamily: 'Inter, sans-serif', textAlign: 'justify' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e5e2e1')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a1a1aa')}
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-white transition-all duration-300"
          style={{ border: '1px solid rgba(255,255,255,0.18)', borderRadius: '4px', fontFamily: 'Inter, sans-serif', textAlign: 'justify' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.background = 'transparent' }}
        >
          Démarrer un Projet
        </a>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-6 h-px bg-white transition-all duration-300" style={{
              transform: i === 0 && menuOpen ? 'translateY(5.5px) rotate(45deg)' : i === 2 && menuOpen ? 'translateY(-5.5px) rotate(-45deg)' : 'none',
              opacity: i === 1 && menuOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      <div className="md:hidden overflow-hidden transition-all duration-400" style={{ maxHeight: menuOpen ? '280px' : '0', background: 'rgba(10,10,10,0.97)' }}>
        <nav className="px-6 pb-6 pt-2 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="text-[11px] font-semibold tracking-[0.22em] uppercase py-3 transition-colors duration-300"
              style={{ color: '#a1a1aa', borderBottom: '1px solid rgba(255,255,255,0.05)', fontFamily: 'Inter, sans-serif', textAlign: 'justify' }}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}