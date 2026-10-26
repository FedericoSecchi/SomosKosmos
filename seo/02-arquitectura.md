# Arquitectura y mapa de keywords — Somos Kosmos

> Sin Keyword Planner: volúmenes "s/d". Keywords = hipótesis desde SERP (25/10/2026) y servicios reales.
> Search Console no aporta keywords de servicio (solo marca, 193 impresiones en 15 meses).
> Se mantienen las rutas actuales para no romper lo poco indexado.

## Árbol de URLs
```
/                                  home (ES)
├── services/websites              servicio
├── services/branding              servicio
├── services/systems-automation    servicio
├── services/content-motion        servicio
├── project/<slug>                 11 casos (plantilla única)
│   └── project/ethperience        (antes /project/ehtexperience → redirección)
├── privacidad                     nueva, mínima (política de datos de WhatsApp/GA4) [CONFIRMAR texto]
└── en/                            espejo en inglés de home y 4 servicios (hreflang es-AR / en)
```

## Mapa URL → cluster
| URL | Keyword principal | Vol./mes | Cluster (n) | Idioma | Persona | Veredicto SERP | Prioridad |
|---|---|---|---|---|---|---|---|
| / | agencia de branding y diseño web | s/d | 6 | es | P1, P2 | long-tail + marca (genérico tomado por directorios) | 1 |
| /services/websites | diseño de páginas web para pymes | s/d | 7 | es | P1 | atacar long-tail | 2 |
| /services/branding | diseño de identidad de marca | s/d | 6 | es | P1, P3 | atacar long-tail | 3 |
| /services/systems-automation | automatización de whatsapp para negocios | s/d | 6 | es | P1 | atacar ya (SERP menos saturada, a verificar) | 4 |
| /services/content-motion | contenido para redes sociales de marcas | s/d | 6 | es | P1 | atacar long-tail | 5 |
| /project/* | nombre del cliente + "branding"/"web" | s/d | 1 c/u | es | todas | marca (casos, no SEO de volumen) | 6 |
| /en/ | branding and web design studio | s/d | 4 | en | P2 | long-tail | 7 |
| /en/services/* | (equivalente EN de cada servicio) | s/d | 3–4 | en | P2 | long-tail | 8 |

## Personas
- **P1 — Dueño de pyme en Argentina/LatAm** (hotel, cabañas, comercio, servicios). Busca en español:
  "página web para mi negocio", "cuánto cuesta una página web", "diseño de logo para empresa".
  Decide por WhatsApp, quiere precio orientativo y tiempos. Miedo: que la agencia desaparezca.
- **P2 — Founder o equipo de afuera** (startup, web3, EE.UU./Europa). Busca en inglés, paga en USD,
  prefiere agendar una llamada. Mira portfolio y proceso antes que precio.
- **P3 — Marca personal / profesional / artista**. Quiere verse profesional y tener un lugar propio
  para mostrar su trabajo (caso Fede García; propuesta Sofía Watson).

## Canibalización revisada
- Home vs. /services/websites: la home apunta a "agencia de branding y diseño web" (marca + oferta
  completa); websites apunta a "páginas web para pymes" (servicio). La home no repite el detalle de
  cada servicio: resume en 1–2 líneas y enlaza.
- Casos por rubro (hoteles, turismo, comercios) van como bloques dentro de /services/websites con
  sus proyectos reales, NO como páginas por rubro (no hay contenido propio suficiente → doorway).

## Clusters descartados o enviados a FAQ/backlog
- "cuánto cuesta una página web" → FAQ de /services/websites con el "desde" (no página propia)
- Páginas por ciudad ("diseño web Córdoba") → descartadas hasta confirmar dirección y ficha GBP
- Blog → backlog; no hay demanda informacional medida
- Clusters de "agencia de marketing" / pauta → fuera: Ads no es servicio publicado en la web

## Páginas por zona
| Zona | Contenido propio disponible | Decisión |
|---|---|---|
| Córdoba | ninguno confirmado | no |

## Enlazado interno previsto
- Home → 4 servicios y 3–4 casos destacados
- Cada servicio → sus casos reales (filtrados por servicio) + 1 servicio complementario
  (websites ↔ branding; content-motion ↔ SkyShot; systems-automation ↔ websites)
- Cada caso → servicio correspondiente + siguiente caso
- Todas las páginas → CTA WhatsApp (principal) y agenda (secundario)
