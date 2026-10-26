# Estado SEO — Somos Kosmos

Sitio: https://somoskosmos.com · Repo: https://github.com/FedericoSecchi/SomosKosmos.git · Inicio: 2026-10-26
Fuente de verdad del avance. Claude Code (modo ejecución de kosmos-web) retoma desde el primer ⬜.

## Fases del proyecto
| Fase | Estado | Fecha | Notas |
|---|---|---|---|
| 0 · Contexto (`00-contexto.md`) | ✅ | 2026-10-26 | del intake |
| 1 · Personas | ✅ | 2026-10-26 | en PLAN.md §5 y 02-arquitectura.md |
| 1 · Hipótesis de arquitectura | ✅ | 2026-10-26 | 02-arquitectura.md |
| 1 · Keywords con datos | ✅ | 2026-10-26 | sin Keyword Planner, por SERP |
| 1 · Mapa final y realismo | ✅ | 2026-10-26 | PLAN.md §5 |
| Plan aprobado en el intake (`PLAN.md`) | ✅ | 2026-10-26 | |
| Google Business Profile (`gbp.md`) | ⬜ | | sin dirección publicable todavía |
| 4 · Medición configurada (`medicion.md`) | ⬜ | | post-merge |

Modo: multipágina

## Páginas
| Slug | Prioridad | Brief | Contenido | Implementada | QA | Hechos OK cliente | Publicada |
|---|---|---|---|---|---|---|---|
| home | 1 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| services/websites | 2 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| services/branding | 3 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| services/systems-automation | 4 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| services/content-motion | 5 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| project/[slug] ×11 | 6 | — | — | ⬜ | ⬜ | — | ⬜ |
| /en/ y /en/services/* | 7 | — | — | ⬜ | ⬜ | — | ⬜ |
| /brief | 8 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| /privacidad | 9 | — | — | ⬜ | ⬜ | — | ⬜ |

Estados: ⬜ pendiente · 🟡 en curso · ✅ aprobado/hecho · ⛔ bloqueado

## Baseline del repo (2026-10-26)
- Rama de trabajo: `kosmos/web-2026` (desde `main` @ 77ec6cb).
- Build Vite de referencia: `npm run build` → **OK** en 1.54 s. `dist/index.html` 2.58 kB,
  bundle JS 643 kB (210 kB gzip), 285 URLs en `dist/sitemap.xml`. Warning: chunks > 500 kB y
  algunas imágenes del portfolio (gallery-4 Red Guild) pesan hasta 6 MB sin optimizar.
- `.github/workflows/deploy.yml` publica `dist/` en push a `main`. Se adapta a `out/` cuando el
  build de Next pase.
- `public/CNAME` = `somoskosmos.com`. No se toca.
- `netlify.toml` y nota de Netlify en `project_state/STATUS.md`: desactualizados, se borran en el
  commit de limpieza final.

## Pendientes del cliente (bloquean publicación)
Ver `PLAN.md § 9` para la lista completa. Resumen:
- [ ] Número de WhatsApp de ventas, quién responde y tiempo de respuesta
- [ ] Precio "desde" por servicio (ARS + USD)
- [ ] Ejemplo concreto de automatización publicable
- [ ] Ciudad publicable (o "remoto desde Argentina")
- [ ] 3–5 testimonios con nombre
- [ ] Fotos reales de equipo y proceso
- [ ] Thumbnails de ETHperience, DeltaRowing, Fede García, MareBoats, SkyShot, Pancito
- [ ] Nombre exacto "DeltaRowing"
- [ ] Links reales de Instagram, LinkedIn, Behance
- [ ] Texto de /privacidad
- [ ] Propiedad de GA4

## Decisiones tomadas sin consultar (y resúmenes de checkpoint)
- 2026-10-26 — El sitemap final publicado tiene solo URLs canónicas (16 ES + 5 EN = 21 URLs); los
  stubs programáticos (268) quedan como HTML con `noindex` + meta refresh + canonical pero fuera del
  sitemap, para que Google los descubra por su propia lista y los limpie. En 6 meses se borran.
- 2026-10-26 — Sin número de WhatsApp confirmado: `https://wa.me/?text=…` (destino abierto en WhatsApp Web/Mobile;
  el usuario elige el chat). Al confirmar el número solo cambia `WHATSAPP_PHONE` en `lib/site.ts`.
- 2026-10-26 — `defaultLocale: 'es-AR'`; `/en/` lleva prefijo. `/` sin prefijo = ES.
- 2026-10-26 — Los 4 videos de `public/videos/` se mantienen como background decorativo
  (`preload="none"`, `muted`, `playsinline`), no afectan LCP.
- 2026-10-26 — Los 6 thumbnails faltantes muestran placeholder SVG (fondo #222 + estrella K +
  nombre), listado en el PR como `[CONFIRMAR]`.
- 2026-10-26 — Equipo (Fede, Coti, Fran) no se publica hasta tener fotos reales ([CONFIRMAR]).

## Cambios de URL (redirecciones)
- 2026-10-26 — `/project/ehtexperience` → `/project/ethperience` (meta refresh + canonical;
  la vieja fuera del sitemap, el stub queda publicado 6 meses).
- 2026-10-26 — 264 `/project/<slug>/<topic>` → `/project/<slug>/` (stubs noindex, fuera del sitemap).
- 2026-10-26 — 4 `/topic/*` → `/services/branding/` (stubs noindex, fuera del sitemap).

## Decisiones de riesgo asumidas por el cliente
<!-- ej. keyword en nombre de GBP pese a la política. Fecha y quién decidió. -->
