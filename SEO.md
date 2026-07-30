# SEO - Search Engine Optimization

## Améliorations SEO apportées

### 1. Meta Tags (index.html)
- ✅ Langue française définie (`lang="fr"`)
- ✅ Meta tags optimisés (title, description, keywords, author)
- ✅ Meta robots avec directives avancées (index, follow, max-image-preview, max-snippet)
- ✅ Canonical URL pour éviter le duplicate content
- ✅ Meta language et revisit-after

### 2. Open Graph / Facebook
- ✅ OG title, description, URL, type
- ✅ OG image avec dimensions (1200x630)
- ✅ OG image alt text pour l'accessibilité
- ✅ OG site_name et locale (fr_FR)

### 3. Twitter Cards
- ✅ Twitter card type (summary_large_image)
- ✅ Twitter title, description, image
- ✅ Twitter image alt text

### 4. Structured Data (JSON-LD)
- ✅ Schema.org Person markup
- ✅ Informations sur le développeur (nom, jobTitle, description)
- ✅ Compétences et technologies maîtrisées
- ✅ Lien vers le profil GitHub (sameAs)

### 5. Fichiers SEO
- ✅ robots.txt optimisé avec règles spécifiques par bot
- ✅ sitemap.xml avec toutes les sections du site
- ✅ Priorités et fréquences de mise à jour définies

### 6. Composant React SEO
- ✅ Composant SEO dynamique pour mettre à jour les meta tags
- ✅ Gestion du titre de page
- ✅ Mise à jour automatique des meta tags Open Graph et Twitter
- ✅ Gestion de la canonical URL

## Structure du site pour le SEO

### Sections indexées
1. **Homepage** (`/`) - Priorité 1.0
2. **Work/Projects** (`/#work`) - Priorité 0.9
3. **Studio** (`/#studio`) - Priorité 0.8
4. **Services** (`/#services`) - Priorité 0.8
5. **Contact** (`/#contact`) - Priorité 0.7

## Bonnes pratiques appliquées

### Performance
- Build optimisé avec Vite (gzip: 69.75 kB pour le JS)
- CSS optimisé (gzip: 4.19 kB)
- Pas de dépendances SEO lourdes

### Accessibilité
- Alt text sur les images OG
- Langue définie sur le document
- Structure sémantique

### Mobile
- Viewport meta tag configuré
- Images OG aux bonnes dimensions
- Design responsive avec Tailwind CSS

## Prochaines étapes recommandées

### À faire
- [ ] Créer l'image OG (og-image.jpg) - 1200x630px
- [ ] Ajouter les icônes de favicon (apple-touch-icon.png, favicon-32x32.png, favicon-16x16.png)
- [ ] Créer le fichier site.webmanifest
- [ ] Ajouter Google Analytics ou autre outil d'analyse
- [ ] Soumettre le sitemap à Google Search Console
- [ ] Soumettre le sitemap à Bing Webmaster Tools
- [ ] Ajouter des rich snippets pour les projets (si applicable)
- [ ] Optimiser les images du portfolio avec des attributs alt
- [ ] Ajouter des breadcrumbs (si applicable)
- [ ] Créer une page "À propos" séparée si nécessaire

### Vérifications
- [ ] Tester avec Google Rich Results Test
- [ ] Tester avec Facebook Sharing Debugger
- [ ] Tester avec Twitter Card Validator
- [ ] Vérifier la vitesse avec PageSpeed Insights
- [ ] Vérifier l'accessibilité avec Lighthouse

## Outils recommandés

- **Google Search Console** - Monitoring du référencement
- **Google Analytics** - Analyse du trafic
- **PageSpeed Insights** - Performance et Core Web Vitals
- **Lighthouse** - Audit complet (SEO, Performance, Accessibilité)
- **Schema Markup Validator** - Validation des structured data

## Notes

- Le site est en français, le SEO est donc orienté vers le marché francophone
- Les meta tags sont optimisés pour les moteurs de recherche français (Google.fr, Bing.fr)
- Le contenu est statique, parfait pour le SEO
- Le site utilise React avec SSR potentiel (peut être amélioré avec Next.js si nécessaire)