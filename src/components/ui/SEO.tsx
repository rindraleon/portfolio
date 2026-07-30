import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export function SEO({
  title = 'Portfolio — Développeur Créatif | Expériences Web Modernes',
  description = "Portfolio créatif d'un développeur spécialisé dans la création d'expériences web modernes et performantes. Découvrez mes projets en React, Vite et Tailwind CSS.",
  image = 'https://rindraleon.github.io/portfolio/og-image.jpg',
  url = 'https://rindraleon.github.io/portfolio/',
  type = 'website'
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (attr: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attr, value)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Primary meta tags
    updateMetaTag('name', 'title', title)
    updateMetaTag('name', 'description', description)
    updateMetaTag('name', 'author', 'Rindra Leon')
    updateMetaTag('name', 'language', 'French')
    updateMetaTag('name', 'revisit-after', '7 days')

    // Open Graph tags
    updateMetaTag('property', 'og:title', title)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:url', url)
    updateMetaTag('property', 'og:type', type)
    updateMetaTag('property', 'og:image', image)
    updateMetaTag('property', 'og:image:width', '1200')
    updateMetaTag('property', 'og:image:height', '630')
    updateMetaTag('property', 'og:image:alt', title)
    updateMetaTag('property', 'og:site_name', 'Portfolio')
    updateMetaTag('property', 'og:locale', 'fr_FR')

    // Twitter tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image')
    updateMetaTag('name', 'twitter:title', title)
    updateMetaTag('name', 'twitter:description', description)
    updateMetaTag('name', 'twitter:image', image)
    updateMetaTag('name', 'twitter:image:alt', title)

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [title, description, image, url, type])

  return null
}