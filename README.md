# Somos Kosmos — somoskosmos.com

Sitio del estudio. Next.js 14 (App Router) + TypeScript estricto + Tailwind, exportado como HTML
estático (`output: 'export'`): cada página sale con su texto en el HTML, sin depender de JS.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build
```

- Genera el sitio estático en `out/` (una carpeta por ruta, `trailingSlash: true`).
- Después corre `postbuild` (`scripts/set-html-lang.mjs`), que pone `<html lang="en">` en `out/en/**`.
- Para revisar el resultado tal cual se publica: `python3 -m http.server 4173 --directory out`.

## Deploy

**GitHub Pages, automático con cada push a `main`.** No hay deploy manual.

1. El workflow `.github/workflows/deploy.yml` corre en cada push a `main`.
2. Instala dependencias, corre `npm run build` y sube `out/` como artefacto de Pages.
3. `actions/deploy-pages` lo publica.

- Dominio: `public/CNAME` (`somoskosmos.com`) se copia a `out/` en el build. No borrarlo.
- Las ramas que no son `main` no se publican: los cambios se revisan en un PR y se publican al mergear.
- Si un deploy falla, mirá la pestaña **Actions** del repo; el build es el mismo que `npm run build` local.

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Páginas | `app/` (ES en la raíz, EN en `app/en/`) |
| Casos | `content/projects.ts` → `app/project/[slug]` |
| Servicios (datos) | `content/services.ts` |
| Datos del negocio (email, Calendly) | `lib/site.ts` |
| CTA del sitio (llamada de 20 min + email) | `components/CtaRow.tsx` |
| Sitemap y robots | `app/sitemap.ts`, `app/robots.ts` |
| Redirecciones de URLs viejas (stubs HTML) | `public/project/**`, `public/topic/**` |
| Plan SEO, estado y QA | `seo/` (`PLAN.md`, `ESTADO.md`, `qa-cierre.md`) |
