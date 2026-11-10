# QA de cierre — 2026-11-10

Sobre `out/` (build `npm run build` OK, TS estricto, 28 rutas + 266 stubs de redirección).
Scripts: `kw_coverage.py`, `copy_lint.py --brand "Somos Kosmos" --allow "Kosmos,SkyShot"` y un
chequeo técnico propio del HTML (H1, title, description, canonical, hreflang, JSON-LD parseable,
links a `#`, links internos rotos, sitemap).

## Páginas con keywords
| Página | Principal en title/H1 | Cobertura | copy_lint | Notas |
|---|---|---|---|---|
| / | ✓ / ✓ | 100% (3/3) | 95 ✅ | 3 keywords descartadas con motivo en `keywords.md` |
| /services/websites | ✓ / ✓ | 86% | 98 ✅ | ✗ "página web para mi negocio" (la página habla de "tu negocio") |
| /services/branding | ✓ / ✓ | 100% | 98 ✅ | "diseño de logo para empresa" descartada |
| /services/systems-automation | ✓ / ✓ | 83% | 97 ✅ | ✗ "automatizar procesos de ventas" (el texto dice "automatizamos … procesos de ventas"; el script no reconoce la conjugación) |
| /services/content-motion | ✓ / ✓ | 100% | 97 ✅ | — |

## Páginas sin keywords (QA técnico + copy)
| Página | copy_lint | Técnico |
|---|---|---|
| /brief | 97 ✅ | OK |
| /privacidad | 99 ✅ | OK · se quitó "formulario de brief" (no existe) |
| /en/ y /en/services/* (5) | 99 ✅ (en conjunto) | OK · `lang="en"` vía postbuild |
| /project/* (11) | no corrido | OK · 7 casos con description de 173–200 caracteres (Google la recorta; no es error) |

## Técnico del sitio
- 1 H1 en las 24 páginas · JSON-LD presente y parseable en todas · 0 links a `#`
- 0 links internos rotos (antes: 12 desde EN hacia `/en/brief/` y `/en/project/*`)
- Sitemap: 23 URLs canónicas (7 ES + 5 EN + 11 casos), sin stubs
- Stubs: `/project/ehtexperience` → `/project/ethperience/`, 264 `/project/<slug>/<topic>`, 4 `/topic/*`,
  todos con `noindex` + meta refresh + canonical

## No verificado en esta pasada
- CTA visible en 360×740 / 390×844 y altura uniforme de cards: no se abrió navegador
- JSON-LD validado como JSON, no en Rich Results Test
- Keywords de la versión EN: no hay `keywords.md` para EN en el plan

---

# Correcciones antes del merge — 2026-11-10 (segunda pasada)

Un commit por punto en `kosmos/web-2026`. Build `npm run build` limpio (TS estricto, 28 rutas).
Verificación con Chrome headless manejado por DevTools Protocol (viewport real, sin iframes).

| # | Corrección | Verificación |
|---|---|---|
| 1 | Overflow del bloque de precios (446px a 360) | `scrollWidth == 360` en **23/23** páginas |
| 2 | Fuera lo que no está en `00-contexto.md` (mantenimiento, datos reales 1–2 semanas, infraestructura, panel/tablero, Slack, OpenAI/Claude, "todo documentado", Next.js, Webflow, etc.) | grep: solo quedan dentro de `[CONFIRMAR: …]`. kw_coverage de servicios sigue ✅ (83–100%) |
| 3 | Casos solo desde `legacy-vite/data/projects.ts` | 11 casos reescritos; Orbita: "Marca y experiencia digital" (lo único que dice la fuente) |
| 4 | Marca una vez en el title | **24/24** `<title>` y `og:title` terminan en " — Somos Kosmos", una sola vez |
| 5 | Logo `logo-light.png` en header/footer + grilla fina de fondo | Capturas abajo |
| 6 | Botón flotante de WhatsApp | A 360×740 en 22 páginas: CTA del hero sin scroll (≤ 639px), flotante oculto mientras se ve, visible después, 0 textos del footer tapados. `/privacidad` no tiene flotante |
| 7 | Borrados `legacy-vite/` y `DEPLOYMENT.md`; README con deploy real | Build limpio sin ellos; `out/CNAME` = somoskosmos.com |

Cambio extra que salió del punto 6: en 4 servicios el CTA del hero quedaba debajo del pliegue a
360×740 (H1 largo en 44px). H1 mobile pasa a 34px y el hero tiene menos padding arriba.

Pendiente menor: las meta descriptions de Orbita (54 car.) y The Red Guild (69 car.) quedan cortas
porque la fuente no dice más; se completan cuando haya datos del caso.

## Capturas (full page)
| | 360 | 1280 |
|---|---|---|
| Home | ![home 360](capturas/home-360.png) | ![home 1280](capturas/home-1280.png) |
| /services/websites | ![websites 360](capturas/websites-360.png) | ![websites 1280](capturas/websites-1280.png) |

Las capturas se toman con un viewport tan alto como la página, así que el CTA del hero queda
siempre a la vista y el botón flotante no aparece (es lo esperado).

> Tercera pasada: el botón flotante ya no existe y las capturas de arriba se regeneraron.

---

# Cierre de datos — 2026-11-10 (tercera pasada)

Un commit por punto en `kosmos/web-2026`. Verificación con Playwright (Chrome headless) sobre
`out/` servido en local.

| # | Cambio | Verificación |
|---|---|---|
| 1 | CTA: "Agendá una llamada de 20 min" (Calendly) + "Escribinos a hello@somoskosmos.com" (mailto), `data-event` = `calendly_click` / `email_click`. Fuera `StickyCta`, `lib/whatsapp.ts` y todo `wa.me`. `/brief` con esas dos opciones | `grep -rl wa.me out/` → **0 archivos** · 0 botones flotantes en 23 páginas |
| 2 | Precios: fuera "Desde [CONFIRMAR]" y el alcance del precio de entrada. Bloque fijo: "Cotizamos cada proyecto por alcance. Te pasamos el número en la primera llamada." + 50/50 | grep "desde"/"starting price" en el código → 0 |
| 3 | Tiempos: fuera FAQ de duración de branding y la duración de pruebas en automatizaciones. Websites sin cambios | — |
| 4 | Hechos de Fede (10/11/2026): mantenimiento mensual ("lo vemos según el proyecto"), archivos editables en branding, piezas mensuales en contenido, dron según zona | Cargados también en `00-contexto.md` |
| 5 | Privacidad: responsable "Somos Kosmos", contacto hello@; solo Calendly + email; el sitio no usa analítica ni cookies de seguimiento | copy_lint 100 |
| 6 | Thumbnails: captura 1280×800 del sitio real en WebP (`public/projects/<slug>/thumb.webp`) para ETHperience, DeltaRowing, Fede García, MareBoats, SkyShot y Pancito. Los 6 cargaron (SkyShot con 12 s de espera por su loader). Placeholder de marca sin texto visible | Revisadas a ojo las 6 capturas |
| 7 | Fuera lo que sigue sin dato: otras herramientas de automatización, nota de ejemplo publicable, "qué se entrega al final" | `grep -rl CONFIRMAR out/` → **0 archivos** |
| 8 | H1 del hero −25 % en desktop (`clamp(2.125rem, 6vw, 5.625rem)`: 102 → 77 px a 1280) y padding superior 112 → 80 px | Botones del hero ≤ 776 px en 1280×800 en **22/22** páginas con hero CTA |

Extra: en 360 px el botón de email cortaba la dirección a la mitad ("HELLO@SO / MOSKOSMOS.COM");
ahora el email va en minúsculas y la línea se parte antes. Y "landing page para negocio" vuelve
en la FAQ de tiempos de websites (se había perdido con el texto del precio).

## Resultado de los scripts (último build)
| Chequeo | Resultado |
|---|---|
| `npm run build` | OK, TS estricto, 28 rutas |
| `scrollWidth` a 360 | **23/23** = 360 |
| CTA del hero sin scroll a 360×740 | 22/22 (máx. 725 px, automatizaciones) · `/privacidad` no tiene hero CTA |
| CTA del hero sin scroll a 1280×800 | 22/22 (máx. 776 px, websites y automatizaciones) |
| `kw_coverage.py --geo Argentina` | home 100 % · websites 86 % · branding 100 % · automatizaciones 83 % · contenido 100 % — todos ✅ |
| `copy_lint.py` | home 94 · websites 98 · branding 98 · automatizaciones 96 · contenido 98 · brief 97 · privacidad 100 · EN (5 páginas) 99 — todos ✅ |
| Técnico | 1 H1 por página, 0 links internos rotos, sitemap 23 URLs, títulos con la marca una vez (24/24) |

`kw_coverage` sin `--geo` toma "negocios" como lugar y marca una inserción forzada falsa en el H1
de automatizaciones ("…para negocios que quieren…"); con `--geo Argentina` (como en las pasadas
anteriores) pasa.

Sigue igual: descriptions cortas de Orbita (54) y The Red Guild (69); "página web para mi negocio"
y "automatizar procesos de ventas" ausentes (ver qa de cada página).

## Capturas
| | 360 × 740 (pantalla inicial) | 1280 × 800 (pantalla inicial) |
|---|---|---|
| Home | ![home 360 fold](capturas/home-360x740-fold.png) | ![home 1280 fold](capturas/home-1280x800-fold.png) |
| /services/websites | ![websites 360 fold](capturas/websites-360x740-fold.png) | ![websites 1280 fold](capturas/websites-1280x800-fold.png) |

Página completa: `capturas/home-360.png`, `home-1280.png`, `websites-360.png`, `websites-1280.png`.
