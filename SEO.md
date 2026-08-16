# SEO — Indexation & Référencement

Documentation du référencement du portfolio.

## Meta tags (index.html)

- Langue française définie (`lang="fr"`)
- Titre et description personnalisés : « Rindra Léon — Développeur Frontend & Full-stack »
- Mots-clés, auteur, `theme-color`
- Canonical URL : `https://rindraleon.github.io/portfolio/`
- `robots` : `index, follow`

## Open Graph / Facebook & Twitter Cards

- OG title, description, URL, type
- OG image `og-image.jpg` (1200×630) avec dimensions, alt et site_name
- OG locale `fr_FR`
- Twitter `summary_large_image` aligné

## Données structurées (JSON-LD)

- `Person` : nom, jobTitle, description
- `address` (Madagascar)
- `knowsAbout` : TypeScript, React, Angular, Flutter, Tailwind CSS, NestJS, PostgreSQL
- `sameAs` : GitHub + LinkedIn

## Fichiers SEO

- `public/robots.txt` : règles par moteur, sitemap référencé, bots indésirables bloqués
- `public/sitemap.xml` : une seule URL canonique (le site est une SPA — les ancres `#section` ne sont pas indexables)

## Sections du site

1. Projets (`#projets`)
2. À propos (`#a-propos`)
3. Services (`#services`)
4. Contact (`#contact`)

## Déploiement

- Hébergé sur GitHub Pages : `https://rindraleon.github.io/portfolio/`
- `base: "/portfolio/"` configuré dans `vite.config.ts` (chemins des assets corrects)
- Workflow `.github/workflows/deploy.yml` (build Vite + `deploy-pages`)

## À faire (facultatif)

- Soumettre le sitemap à Google Search Console
- Soumettre le sitemap à Bing Webmaster Tools
- Ajouter un outil d'analyse (Google Analytics / Plausible)

## Vérifications

- Google Rich Results Test — valider le JSON-LD
- Facebook Sharing Debugger / Twitter Card Validator
- PageSpeed Insights / Lighthouse
