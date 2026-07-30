import { CLIENTS } from '@/data'

export function Clients() {
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