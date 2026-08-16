import { useState } from "react"

import { Fade } from "@/components/ui/Fade"

import { Label } from "@/components/ui/Label"

import { PrimaryButton, ArrowRight } from "@/components/ui/Buttons"

import { CONTACT_INFO } from "@/data"

import emailjs from "@emailjs/browser"

const FIELD_STYLE: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(255,255,255,0.15)",
  paddingBottom: 12,
  fontFamily: "Inter, sans-serif",
  fontSize: 15,
  color: "#e5e2e1",
  outline: "none",
  transition: "border-color 0.3s",
}

function focusField(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderBottomColor = "#0055ff"
}

function blurField(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.15)"
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS n'est pas configuré. Vérifiez vos variables d'environnement.",
        )
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey,
      )

      setSubmitted(true)
      setForm({ name: "", email: "", message: "" })
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erreur inconnue"
      alert(`Le message n'a pas pu être envoyé.\n\n${errorMessage}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      style={{ background: "#0e0e0e", padding: "clamp(80px,10vw,160px) 0" }}
    >
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(48px,6vw,96px)",
          }}
        >
          <Fade>
            <div>
              <Label color="#b6c4ff">Contact</Label>
              <h2
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: "clamp(30px,4vw,48px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "#fff",
                  margin: "16px 0 24px",
                }}
              >
                Travaillons
                <br />
                ensemble.
              </h2>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "#a1a1aa",
                  maxWidth: 360,
                  marginBottom: 48,
                }}
              >
                Disponible pour des projets de développement web et mobile.
                N'hésitez pas à me contacter pour discuter de votre projet.
              </p>
              {CONTACT_INFO.map(({ label, value, href }) => (
                <div
                  key={label}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    paddingBottom: 20,
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#434656",
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        color: "#e5e2e1",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#b6c4ff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#e5e2e1")
                      }
                    >
                      {value}
                    </a>
                  ) : (
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        color: "#e5e2e1",
                      }}
                    >
                      {value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Fade>

          <Fade delay={100}>
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  paddingTop: 32,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(0,85,255,0.12)",
                    border: "1px solid rgba(0,85,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10l4 4 8-8"
                      stroke="#b6c4ff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    fontSize: 26,
                    color: "#fff",
                  }}
                >
                  Message reçu.
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 15,
                    color: "#a1a1aa",
                  }}
                >
                  Je vous recontacterai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 36 }}
              >
                {[
                  {
                    id: "name",
                    label: "Votre Nom",
                    type: "text",
                    placeholder: "Jean Dupont",
                  },
                  {
                    id: "email",
                    label: "Adresse Email",
                    type: "email",
                    placeholder: "vous@exemple.com",
                  },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "#434656",
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      required
                      value={form[id as keyof typeof form]}
                      onChange={(e) =>
                        setForm({ ...form, [id]: e.target.value })
                      }
                      style={FIELD_STYLE}
                      onFocus={focusField}
                      onBlur={blurField}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#434656",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    Parlez-moi de Votre Projet
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Décrivez votre projet, vos objectifs et vos délais..."
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{ ...FIELD_STYLE, resize: "none" }}
                    onFocus={focusField}
                    onBlur={blurField}
                  />
                </div>
                <div>
                  <PrimaryButton
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handleSubmit(e)
                    }}
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                    </span>
                    {!isSubmitting && <ArrowRight />}
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
