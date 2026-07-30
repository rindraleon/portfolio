import { Fade } from '@/components/ui/Fade'
import { Label } from '@/components/ui/Label'
import { PrimaryButton, ArrowRight } from '@/components/ui/Buttons'

export function CTABand() {
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
            <Label color="#b6c4ff" center>Prêt ?</Label>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(36px,5.5vw,68px)', letterSpacing: '-0.02em', lineHeight: 1.08, color: '#fff', margin: '16px 0 24px' }}>
              Construisons quelque chose<br />
              <em className="not-italic" style={{ background: 'linear-gradient(135deg,#b6c4ff,#d0bcff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>de performant.</em>
            </h2>
             <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: '#a1a1aa', maxWidth: 440, margin: '0 auto 48px', textAlign: 'justify' }}>
               Je suis disponible pour des projets de développement web et mobile. Si vous avez un projet en tête, discutons-en.
             </p>
            <PrimaryButton href="#contact">
              Démarrer une Conversation <ArrowRight />
            </PrimaryButton>
          </div>
        </div>
      </Fade>
    </section>
  )
}