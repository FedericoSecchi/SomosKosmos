# Inventario del sitio Vite — pre-migración

Snapshot del repo en `main` (último commit 77ec6cb), tomado al crear la rama `kosmos/web-2026`.

## Rutas del router (`src/App.tsx`)
- `/` → `pages/Index.tsx`
- `/services/:serviceSlug` → `pages/ServiceLanding.tsx` (branding, websites, content-motion, systems-automation)
- `/topic/:topicSlug` → `pages/TopicLanding.tsx` ← **a eliminar (programático)**
- `/project/:projectId/:topic` → `pages/ProjectTopic.tsx` ← **a eliminar (programático)**
- `/project/:projectId` → `pages/ProjectCase.tsx`
- `/brief` → `pages/Brief.tsx`
- `*` → `pages/NotFound.tsx`

## Contenido reutilizable

### i18n (`src/i18n/locales/`)
- `es.ts` y `en.ts`: cadenas para header, hero, about, process, ethos, marquee, gallery, work,
  services (4), portfolio, contact, footer, serviceLanding, notFound, brief.
- Las claves `services.*.description` y `services.*.title` son candidatas a reusar si el copy nuevo
  las valida; en caso contrario, se traduce el copy nuevo.

### Proyectos (`src/data/projects.ts`)
- 11 proyectos. Campos: id, image, size, layout, galleries, seoTitle, seoDescription, seoImage,
  externalUrl.
- Thumbnails reales (en `src/assets/projects/`): security-alliance, the-red-guild, orbita, nude, calmo.
- Thumbnails = og-image genérico (no publicable, se reemplaza por placeholder K): ehtexperience,
  deltarowling, fede-garcia, mareboats, skyshot, pancito.
- `externalUrl` apunta al sitio real: todos excepto Orbita (sin `externalUrl` en el repo).
- Typo: `/project/ehtexperience` apunta a `ethperience.com` → ruta canónica pasa a `/project/ethperience/`.
- Typo histórico: `deltarowling` en el repo (el dominio real es `deltarowingadventure.com`);
  slug se mantiene para no romper, nombre a mostrar [CONFIRMAR].

### Marcas (`src/data/brands.ts`)
- 11 ids iguales a los proyectos. Un solo logo registrado por item. Logos reales en `public/branding/`.

### Servicios (`src/content/services/*.md`)
- Markdown largo por servicio (branding, websites, content-motion, systems-automation) con
  frontmatter y H2. Se usa como fuente editorial, no se publica tal cual: el copy nuevo lo rescribe.

### Imágenes
- `src/assets/projects/<id>/`: hero y galerías de 5 proyectos (security-alliance, the-red-guild,
  orbita, nude, calmo).
- `src/assets/work/`: fotos de la galería "Dentro del estudio" (stock/IA → se eliminan).
- `public/branding/`: favicon.ico, favicon.png, logo-dark.png, logo-light.png, og-image.jpg,
  og-image.svg.
- `public/videos/`: automatizacion.mov, branding.mov, website.mov, video-dji.mp4 → se usan como
  background de los 4 servicios (si el peso lo permite; verificar en el build Next).

### Deploy
- `.github/workflows/deploy.yml`: publica `dist/` en GitHub Pages en cada push a `main`.
- `public/CNAME`: `somoskosmos.com`.
- `netlify.toml`: dead code (el sitio no vive en Netlify). Se borra.

## Archivos a eliminar al cerrar la migración
- `src/seo/programmaticTopics.ts`, `projectTopics.ts`, `caseStudyGenerator.ts`,
  `generateTopicContent.ts`, `seoKeywords.ts`
- `src/pages/ProjectTopic.tsx`, `TopicLanding.tsx`, `ProgrammaticProjectPage.tsx`
- `scripts/generate-sitemap.ts`
- Todo `src/pages/*`, `src/components/*`, `src/i18n/*`, `src/content/services/*`, `src/App.tsx`,
  `src/main.tsx`, `index.html`, `vite.config.ts`, `postcss.config.js`, `tailwind.config.ts` (versión
  Vite), `eslint.config.js`, `tsconfig.app.json`, `tsconfig.node.json`, `netlify.toml`, `DEPLOYMENT.md`
- Dependencias: todas las `@radix-ui/*`, `shadcn` wrappers, `react-router-dom`, `vite`,
  `@vitejs/plugin-react-swc`, `react-helmet-async`, componentes `ui/*` no usados por Next.

## Rutas que valen la pena migrar como contenido (no 1-a-1)
- Textos de servicios en `src/content/services/*.md` → fuente para el nuevo copy, no se publican tal cual.
- Textos `es.ts/en.ts` → fuente para la versión EN si coincide con el nuevo copy.
