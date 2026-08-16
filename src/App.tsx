import { BackToTop } from "@/components/ui/BackToTop"
import { Cursor } from "@/components/ui/Cursor"
import { SEO } from "@/components/ui/SEO"

import { Nav } from "@/components/sections/Nav"
import { Hero } from "@/components/sections/Hero"
import { Clients } from "@/components/sections/Clients"
import { Work } from "@/components/sections/Work"
import { Awards } from "@/components/sections/Awards"
import { Studio } from "@/components/sections/Studio"
import { Services } from "@/components/sections/Services"
import { Testimonials } from "@/components/sections/Testimonials"
import { Process } from "@/components/sections/Process"
import { CTABand } from "@/components/sections/CTABand"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

import { useScrollY } from "@/hooks"

export default function App() {
  const scrollY = useScrollY()

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <SEO />
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
      <BackToTop />
    </div>
  )
}
