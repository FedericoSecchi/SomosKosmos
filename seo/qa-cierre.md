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
