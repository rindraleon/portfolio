import { useState } from 'react'
import { Fade } from '@/components/ui/Fade'
import { Label } from '@/components/ui/Label'
import { PrimaryButton, ArrowRight } from '@/components/ui/Buttons'
import { CONTACT_INFO } from '@/data'

export function Contact() {
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
              {CONTACT_INFO.map(({ label, value }) => (
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