import { useEffect } from "react"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export function SEO({
  title = "Rindra Léon — Développeur Frontend & Full-stack | Portfolio",
  description = "Portfolio de Rindra Léon, développeur frontend et full-stack basé à Madagascar. Applications web et mobiles modernes en TypeScript, React, Angular et Flutter.",
  image = "https://rindraleon.github.io/portfolio/og-image.jpg",
  url = "https://rindraleon.github.io/portfolio/",
  type = "website",
}: SEOProps) {
  useEffect(() => {
    document.title = title

    const updateMetaTag = (attr: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`)
      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attr, value)
        document.head.appendChild(element)
      }
      element.setAttribute("content", content)
    }

    updateMetaTag("name", "description", description)
    updateMetaTag("name", "author", "Rindra Léon")
    updateMetaTag("property", "og:title", title)
    updateMetaTag("property", "og:description", description)
    updateMetaTag("property", "og:url", url)
    updateMetaTag("property", "og:type", type)
    updateMetaTag("property", "og:image", image)
    updateMetaTag("property", "og:image:alt", title)
    updateMetaTag("property", "og:site_name", "Rindra Léon — Portfolio")
    updateMetaTag("property", "og:locale", "fr_FR")
    updateMetaTag("name", "twitter:card", "summary_large_image")
    updateMetaTag("name", "twitter:title", title)
    updateMetaTag("name", "twitter:description", description)
    updateMetaTag("name", "twitter:image", image)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", url)
  }, [title, description, image, url, type])

  return null
}
