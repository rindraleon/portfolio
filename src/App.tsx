import { useState, useEffect, useRef, useCallback } from 'react'

/* ─── Scroll animation hook ─────────────────────────────────────────────── */
function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ─── Custom cursor ──────────────────────────────────────────────────────── */
function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY } }
    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHovering(!!(t.closest('a, button, [data-cursor-hover]')))
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onEnter)

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-0"
        style={{
          width: 8, height: 8,
          borderRadius: '50%',
          background: hovering ? '#0055ff' : '#b6c4ff',
          transition: 'background 0.3s',
        }}
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 40, height: 40,
          borderRadius: '50%',
          border: `1px solid ${hovering ? 'rgba(0,85,255,0.6)' : 'rgba(182,196,255,0.3)'}`,
          transition: 'border-color 0.3s, width 0.3s, height 0.3s',
          ...(hovering ? { width: 56, height: 56, marginLeft: -8, marginTop: -8 } : {}),
        }}
      />
    </>
  )
}

/* ─── Scroll Y hook ──────────────────────────────────────────────────────── */
function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const h = () => setY(window.scrollY)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  return y
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const NAV_LINKS = ['Work', 'Studio', 'Services', 'Contact']

const PROJECTS = [
  {
    id: 1, title: 'Obsidian Identity', category: 'Brand Strategy', year: '2024',
    tags: ['Branding', 'Visual Identity'],
    img: 'https://images.unsplash.com/photo-1702479744181-2d6b58941583?w=900&h=600&fit=crop&auto=format',
  },
  {
    id: 2, title: 'Velvet Touch', category: 'Art Direction', year: '2024',
    tags: ['Photography', 'Campaign'],
    img: 'https://images.unsplash.com/photo-1780145705554-87f849702c4b?w=700&h=900&fit=crop&auto=format',
  },
  {
    id: 3, title: 'Void Architecture', category: 'Digital Experience', year: '2023',
    tags: ['Web', 'Motion'],
    img: 'https://images.unsplash.com/photo-1507491910083-29fad9a7778e?w=700&h=500&fit=crop&auto=format',
  },
  {
    id: 4, title: 'Neon Residue', category: 'Editorial Design', year: '2023',
    tags: ['Print', 'Typography'],
    img: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=700&h=500&fit=crop&auto=format',
  },
  {
    id: 5, title: 'Flux Studio', category: 'Brand Identity', year: '2024',
    tags: ['Branding', 'Packaging'],
    img: 'https://images.unsplash.com/photo-1637825891028-564f672aa42c?w=700&h=500&fit=crop&auto=format',
  },
]

const SERVICES = [
  { num: '01', name: 'Brand Strategy', desc: 'Positioning, naming, and narrative systems that give organizations a reason to exist and a language to exist in.' },
  { num: '02', name: 'Visual Identity', desc: 'Marks, typographic systems, color theory, and the full vocabulary of visual expression — built to last decades.' },
  { num: '03', name: 'Digital Experience', desc: 'Websites, applications, and interactive installations that treat the browser as a stage, not a brochure.' },
  { num: '04', name: 'Art Direction', desc: 'Photography, film, and campaign production led with a singular editorial vision from concept to final frame.' },
  { num: '05', name: 'Motion & Film', desc: 'Title sequences, brand films, and motion systems that animate identity with restraint and intention.' },
]

const TESTIMONIALS = [
  {
    quote: "Lumina Noir didn't just redesign our brand — they redefined how we see ourselves. The work was technically flawless and conceptually bold.",
    author: 'Maren Lüdke', role: 'CEO, Maison Valois',
    img: 'https://images.unsplash.com/photo-1770062421988-7929b4748e29?w=200&h=200&fit=crop&auto=format',
  },
  {
    quote: "We had worked with four agencies before. Lumina Noir is categorically different. They listen first, then design. The result speaks for itself.",
    author: 'James Okafor', role: 'Founder, Celeste Group',
    img: 'https://images.unsplash.com/photo-1770070553064-3980a912f96b?w=200&h=200&fit=crop&auto=format',
  },
  {
    quote: "The restraint they bring is rare. Every decision felt considered. Nothing wasted, nothing missing. Our conversion rate increased 40% in three months.",
    author: 'Yuki Tanaka', role: 'CMO, Orion Labs',
    img: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=200&h=200&fit=crop&auto=format',
  },
]

const CLIENTS = ['Maison Valois', 'Celeste Group', 'Arkwright & Co.', 'Studio Fen', 'Verdant Capital', 'Orion Labs']

const AWARDS = [
  { title: 'Cannes Lions Gold', cat: 'Brand Identity', year: '2024' },
  { title: 'D&AD Pencil', cat: 'Digital Design', year: '2024' },
  { title: 'Webby Award', cat: 'Best Agency Site', year: '2023' },
  { title: 'Brand Impact', cat: 'Grand Prix', year: '2023' },
  { title: 'Cannes Lions Silver', cat: 'Motion Design', year: '2023' },
  { title: 'TDC Certificate', cat: 'Typography', year: '2022' },
]

/* ─── Fade wrapper ───────────────────────────────────────────────────────── */
function Fade({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useFadeIn()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ─── Nav ────────────────────────────────────────────────────────────────── */
function Nav({ scrollY }: { scrollY: number }) {
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
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-white select-none">
          Lumina<span style={{ background: 'linear-gradient(135deg,#b6c4ff,#d0bcff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Noir</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300"
              style={{ color: '#a1a1aa', fontFamily: 'Inter, sans-serif' }}
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
          style={{ border: '1px solid rgba(255,255,255,0.18)', borderRadius: '4px', fontFamily: 'Inter, sans-serif' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.background = 'transparent' }}
        >
          Start a Project
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
              style={{ color: '#a1a1aa', borderBottom: '1px solid rgba(255,255,255,0.05)', fontFamily: 'Inter, sans-serif' }}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */
function Hero() {
  const [phase, setPhase] = useState(0)
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 120)
    const t2 = setTimeout(() => setPhase(2), 400)
    const t3 = setTimeout(() => setPhase(3), 700)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const scrollY = useScrollY()
  const parallax = scrollY * 0.3

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0" style={{ transform: `translateY(${parallax}px)`, willChange: 'transform' }}>
        <img
          src="https://images.unsplash.com/photo-1558627563-3e383cddc94a?w=1920&h=1200&fit=crop&auto=format"
          alt="Abstract dark urban architecture at night"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) saturate(0.55)', transformOrigin: 'center top' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0) 35%, rgba(10,10,10,0.8) 80%, #0a0a0a 100%)' }} />
      </div>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: '30%', left: '20%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,85,255,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(87,27,193,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="relative px-6 md:px-20 max-w-[1440px] mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 transition-all duration-700"
          style={{ opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? 'none' : 'translateY(16px)' }}>
          <span className="w-8 h-px" style={{ background: '#b6c4ff' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b6c4ff' }}>
            Creative Studio — Est. 2018
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white font-bold leading-none mb-8 transition-all duration-700"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(52px, 8.5vw, 100px)',
            letterSpacing: '-0.02em',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'none' : 'translateY(24px)',
            transitionDelay: '80ms',
          }}
        >
          We design<br />
          <em className="not-italic" style={{ background: 'linear-gradient(135deg,#b6c4ff 0%,#d0bcff 60%,#ffb5a0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            presence.
          </em>
        </h1>

        {/* Body + CTAs */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 transition-all duration-700"
          style={{ opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? 'none' : 'translateY(16px)', transitionDelay: '80ms' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: 1.6, letterSpacing: '0.01em', color: '#a1a1aa', maxWidth: 420 }}>
            Lumina Noir is an independent creative studio working at the intersection of brand, digital, and culture. We build identities that endure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <PrimaryButton href="#work">
              View Work
              <ArrowRight />
            </PrimaryButton>
            <GhostButton href="#studio">Our Studio</GhostButton>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-20 pt-10 transition-all duration-700"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', opacity: phase >= 3 ? 1 : 0, transitionDelay: '200ms' }}>
          {[
            { val: '120+', label: 'Projects Delivered' },
            { val: '6', label: 'Years of Practice' },
            { val: '38', label: 'International Clients' },
            { val: '4', label: 'Cannes Lions' },
          ].map(({ val, label }) => (
            <div key={label}>
              <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 34, color: '#fff' }}>{val}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a1a1aa', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Button atoms ───────────────────────────────────────────────────────── */
function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href}
      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-white transition-all duration-400"
      style={{ background: '#0055ff', borderRadius: '4px', fontFamily: 'Inter, sans-serif' }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 28px rgba(0,85,255,0.45), 0 0 60px rgba(0,85,255,0.15)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}>
      {children}
    </a>
  )
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href}
      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-white transition-all duration-300"
      style={{ border: '1px solid rgba(255,255,255,0.18)', borderRadius: '4px', fontFamily: 'Inter, sans-serif' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.background = 'transparent' }}>
      {children}
    </a>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ─── Clients marquee ────────────────────────────────────────────────────── */
function Clients() {
  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '64px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 80, animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap' }}>
        {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
          <span key={i} style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: 20, color: '#353534', letterSpacing: '-0.01em', flexShrink: 0 }}>
            {c}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </section>
  )
}

/* ─── Work grid ──────────────────────────────────────────────────────────── */
function Work() {
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

function ProjectCard({ project, aspectRatio }: { project: typeof PROJECTS[0]; aspectRatio: string }) {
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

/* ─── Awards ticker ──────────────────────────────────────────────────────── */
function Awards() {
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

function AwardCard({ award }: { award: typeof AWARDS[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '32px 28px',
        background: hovered ? 'rgba(182,196,255,0.04)' : 'rgba(10,10,10,0.8)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        transition: 'background 0.35s ease',
        cursor: 'default',
      }}
    >
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: hovered ? '#b6c4ff' : '#434656', marginBottom: 12, transition: 'color 0.3s' }}>
        {award.year}
      </div>
      <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: 20, color: '#e5e2e1', lineHeight: 1.3, marginBottom: 8 }}>
        {award.title}
      </div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#a1a1aa' }}>{award.cat}</div>
    </div>
  )
}

/* ─── Studio ─────────────────────────────────────────────────────────────── */
function Studio() {
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
                {[
                  { name: 'Elena Voss', role: 'Creative Director' },
                  { name: 'Marcus Ihejirika', role: 'Strategy & Positioning' },
                  { name: 'Soo-Jin Park', role: 'Digital Lead' },
                  { name: 'Théo Blanchard', role: 'Art Direction' },
                ].map(({ name, role }) => (
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

function TeamRow({ name, role }: { name: string; role: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 0',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        transform: hovered ? 'translateX(10px)' : 'translateX(0)',
        transition: 'transform 0.3s ease',
        cursor: 'default',
      }}
    >
      <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: 17, color: hovered ? '#e5e2e1' : '#c3c5d9', transition: 'color 0.3s' }}>{name}</span>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a1a1aa' }}>{role}</span>
    </div>
  )
}

/* ─── Services accordion ─────────────────────────────────────────────────── */
function Services() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="services" style={{ background: '#0e0e0e', padding: 'clamp(80px,10vw,160px) 0' }}>
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(32px,4vw,80px)', alignItems: 'start' }}>

          <Fade style={{ gridColumn: 'span 12' }} className="md:[grid-column:span_4]">
            <div style={{ position: 'sticky', top: 112 }}>
              <Label color="#b6c4ff">What We Do</Label>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(30px,3.5vw,46px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#fff', marginTop: 16, marginBottom: 20 }}>
                Five disciplines,<br />one vision.
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: '#a1a1aa' }}>
                We don't do everything. We do the things we're exceptional at, and we do them in service of making your brand impossible to ignore.
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

/* ─── Testimonials ───────────────────────────────────────────────────────── */
function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(t)
  }, [])

  const current = TESTIMONIALS[active]

  return (
    <section style={{ padding: 'clamp(80px,10vw,160px) 0', background: '#0a0a0a' }}>
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <Fade className="text-center mb-16">
          <Label color="#b6c4ff" center>Client Voices</Label>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(30px,4vw,48px)', letterSpacing: '-0.02em', color: '#fff', marginTop: 16 }}>
            What they say.
          </h2>
        </Fade>

        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          {/* Quote */}
          <div style={{ minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <blockquote
              key={active}
              style={{
                fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                fontSize: 'clamp(20px,2.5vw,28px)', lineHeight: 1.5, color: '#e5e2e1',
                letterSpacing: '-0.01em',
                animation: 'fadeUp 0.5s ease forwards',
              }}
            >
              "{current.quote}"
            </blockquote>
          </div>

          {/* Author */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginTop: 40 }}>
            <img src={current.img} alt={current.author}
              style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', filter: 'saturate(0.6)', border: '1px solid rgba(255,255,255,0.12)' }} />
            <div>
              <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: 17, color: '#fff' }}>{current.author}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a1a1aa', marginTop: 4 }}>{current.role}</div>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 40 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{
                  width: i === active ? 24 : 6, height: 6, borderRadius: 3,
                  background: i === active ? '#0055ff' : 'rgba(255,255,255,0.15)',
                  border: 'none', cursor: 'pointer', transition: 'all 0.35s ease', padding: 0,
                }} />
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

/* ─── Process ────────────────────────────────────────────────────────────── */
function Process() {
  const steps = [
    { num: '1', title: 'Discovery', desc: 'Deep research into your market, audience, and competitive landscape. We find what is unsaid.' },
    { num: '2', title: 'Strategy', desc: 'Positioning, naming, narrative — the intellectual scaffolding everything else stands on.' },
    { num: '3', title: 'Design', desc: 'Translating strategy into form. Marks, systems, spaces, interactions — built with precision.' },
    { num: '4', title: 'Launch', desc: 'Careful deployment with detailed guidelines so the work lives correctly in the world.' },
  ]

  return (
    <section style={{ padding: 'clamp(80px,10vw,160px) 0', background: '#0e0e0e' }}>
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <Fade className="text-center mb-20">
          <Label color="#b6c4ff" center>How We Work</Label>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(30px,4vw,48px)', letterSpacing: '-0.02em', color: '#fff', marginTop: 16 }}>
            Process as craft.
          </h2>
        </Fade>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {steps.map((step, i) => (
            <Fade key={step.num} delay={i * 80}>
              <ProcessCard step={step} />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessCard({ step }: { step: { num: string; title: string; desc: string } }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '32px 28px', borderRadius: 8,
        background: hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(182,196,255,0.15)' : 'rgba(255,255,255,0.1)'}`,
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        transition: 'background 0.35s, border-color 0.35s',
        boxShadow: hovered ? '0 0 32px rgba(0,85,255,0.05)' : 'none',
      }}
    >
      <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 40, color: 'rgba(182,196,255,0.12)', marginBottom: 24 }}>{step.num}</div>
      <h3 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: 20, color: '#e5e2e1', marginBottom: 12 }}>{step.title}</h3>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: '#a1a1aa' }}>{step.desc}</p>
    </div>
  )
}

/* ─── CTA band ───────────────────────────────────────────────────────────── */
function CTABand() {
  return (
    <section style={{ padding: '0 clamp(24px,5.5vw,80px)', marginBottom: 'clamp(80px,10vw,160px)' }}>
      <Fade>
        <div style={{
          borderRadius: 8, border: '1px solid rgba(255,255,255,0.07)',
          background: '#0e0e0e', overflow: 'hidden', position: 'relative',
          padding: 'clamp(60px,8vw,120px) clamp(32px,5vw,80px)',
          textAlign: 'center',
          maxWidth: 1440, margin: '0 auto',
        }}>
          {/* Glow */}
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(0,85,255,0.1) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <Label color="#b6c4ff" center>Ready?</Label>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(36px,5.5vw,68px)', letterSpacing: '-0.02em', lineHeight: 1.08, color: '#fff', margin: '16px 0 24px' }}>
              Let's build something<br />
              <em className="not-italic" style={{ background: 'linear-gradient(135deg,#b6c4ff,#d0bcff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>worth remembering.</em>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: '#a1a1aa', maxWidth: 440, margin: '0 auto 48px' }}>
              We take on six new client relationships per year. If you have something worth doing, we would like to hear about it.
            </p>
            <PrimaryButton href="#contact">
              Start a Conversation <ArrowRight />
            </PrimaryButton>
          </div>
        </div>
      </Fade>
    </section>
  )
}

/* ─── Contact ────────────────────────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" style={{ background: '#0e0e0e', padding: 'clamp(80px,10vw,160px) 0' }}>
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(48px,6vw,96px)' }}>

          <Fade>
            <div>
              <Label color="#b6c4ff">Contact</Label>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(30px,4vw,48px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#fff', margin: '16px 0 24px' }}>
                New work,<br />new ideas.
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: '#a1a1aa', maxWidth: 360, marginBottom: 48 }}>
                We read every inquiry personally and respond within two business days. No automated replies, no generic responses.
              </p>
              {[
                { label: 'Email', value: 'hello@luminanoir.studio' },
                { label: 'Location', value: 'Berlin, DE — New York, NY' },
                { label: 'New Clients', value: 'Accepting in Q3 2024' },
              ].map(({ label, value }) => (
                <div key={label} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 20, marginBottom: 20 }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#434656', marginBottom: 6 }}>{label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#e5e2e1' }}>{value}</div>
                </div>
              ))}
            </div>
          </Fade>

          <Fade delay={100}>
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 32 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(0,85,255,0.12)', border: '1px solid rgba(0,85,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="#b6c4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: 26, color: '#fff' }}>Message received.</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#a1a1aa' }}>We will be in touch within two business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Elena Voss' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'elena@studio.co' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#434656', display: 'block', marginBottom: 10 }}>{label}</label>
                    <input id={id} type={type} placeholder={placeholder} required
                      value={form[id as keyof typeof form]}
                      onChange={e => setForm({ ...form, [id]: e.target.value })}
                      style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 12, fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#e5e2e1', outline: 'none', transition: 'border-color 0.3s' }}
                      onFocus={e => (e.currentTarget.style.borderBottomWidth = '2px', e.currentTarget.style.borderBottomColor = '#0055ff')}
                      onBlur={e => (e.currentTarget.style.borderBottomWidth = '1px', e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.15)')}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#434656', display: 'block', marginBottom: 10 }}>Tell Us About Your Project</label>
                  <textarea id="message" rows={5} placeholder="We are rebranding a 40-year-old architecture firm..." required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 12, fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#e5e2e1', outline: 'none', resize: 'none', transition: 'border-color 0.3s' }}
                    onFocus={e => (e.currentTarget.style.borderBottomWidth = '2px', e.currentTarget.style.borderBottomColor = '#0055ff')}
                    onBlur={e => (e.currentTarget.style.borderBottomWidth = '1px', e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.15)')}
                  />
                </div>
                <div>
                  <PrimaryButton href="#">
                    <span onClick={handleSubmit}>Send Message</span>
                    <ArrowRight />
                  </PrimaryButton>
                </div>
              </form>
            )}
          </Fade>

        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0a0a0a', padding: '48px clamp(24px,5.5vw,80px)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: 16, color: '#fff' }}>
            Lumina<span style={{ background: 'linear-gradient(135deg,#b6c4ff,#d0bcff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Noir</span>
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#434656', marginTop: 4 }}>© 2024 Lumina Noir Studio GmbH. All rights reserved.</div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
          {['Instagram', 'LinkedIn', 'Dribbble', 'Privacy'].map(link => (
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

/* ─── Helpers ────────────────────────────────────────────────────────────── */
function Label({ children, color, center }: { children: React.ReactNode; color: string; center?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: center ? 'center' : 'flex-start' }}>
      <span style={{ display: 'block', width: 24, height: 1, background: color, flexShrink: 0 }} />
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color }}>{children}</span>
    </div>
  )
}

/* ─── Root ───────────────────────────────────────────────────────────────── */
export default function App() {
  const scrollY = useScrollY()

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', cursor: 'none' }}>
      <Cursor />
      <Nav scrollY={scrollY} />
      <Hero />
      <Clients />
      <Work />
      <Awards />
      <Studio />
      <Services />
      <Testimonials />
      <Process />
      <CTABand />
      <Contact />
      <Footer />
    </div>
  )
}
