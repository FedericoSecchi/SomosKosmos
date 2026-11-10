# Redirecciones — Somos Kosmos

Fuente: `public/sitemap.xml` del repo Vite (285 URLs únicas, 25/10/2026).

## Canónicas que se mantienen (16)
```
https://somoskosmos.com/
https://somoskosmos.com/brief
https://somoskosmos.com/services/branding
https://somoskosmos.com/services/content-motion
https://somoskosmos.com/services/systems-automation
https://somoskosmos.com/services/websites
https://somoskosmos.com/project/calmo
https://somoskosmos.com/project/deltarowling
https://somoskosmos.com/project/fede-garcia
https://somoskosmos.com/project/mareboats
https://somoskosmos.com/project/nude
https://somoskosmos.com/project/orbita
https://somoskosmos.com/project/pancito
https://somoskosmos.com/project/security-alliance
https://somoskosmos.com/project/skyshot
https://somoskosmos.com/project/the-red-guild
```

## Redirección por typo (1)
```
/project/ehtexperience → /project/ethperience   (meta refresh + canonical)
```
La URL vieja (`ehtexperience`) sale del sitemap pero el HTML stub queda publicado 6 meses.

## Stubs programáticos a eliminar (264)

### /project/<slug>/<topic> — 11 proyectos × 24 topics = 264
Topics (24): brand-architecture · brand-design · brand-experience · brand-guidelines ·
brand-identity-system · brand-strategy · brand-visual-language · branding · branding-for-tech ·
branding-project · case-study · corporate-identity · creative-branding · design-system ·
digital-branding · identity-design · logo-design · modern-branding · product-branding ·
startup-branding · typography · visual-brand-system · visual-identity · visual-language

Cada una → stub HTML con `<meta http-equiv="refresh" content="0; url=/project/<slug>/">` +
`<link rel="canonical" href="https://somoskosmos.com/project/<slug>/">` + `<meta name="robots" content="noindex, follow">`. Fuera del sitemap.

### /topic/* — 4
```
/topic/branding-project-examples      → /services/branding/
/topic/design-system-branding          → /services/branding/
/topic/startup-branding-case-study     → /services/branding/
/topic/visual-identity-design          → /services/branding/
```
Mismo stub (`noindex`, meta refresh, canonical al servicio).

## Total
- 16 canónicas + 1 redirección por typo + 264 stubs programáticos + 4 topic-stubs = 285 URLs.
- Sitemap final publicado: ≈ 16 ES + 5 EN (home + 4 servicios) = **21 URLs**. El resto son stubs
  fuera del sitemap que caducan a los 6 meses.
