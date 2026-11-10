# Plan — Somos Kosmos (somoskosmos.com)

> Fecha: 25/10/2026 · Preparado en el intake (claude.ai) · Aprobado por: Fede ([fecha])
> Este documento es la fuente de verdad del trabajo. Claude Code lo ejecuta sin preguntar.

## 1. Resumen
- Qué vamos a hacer: rehacer somoskosmos.com en Next.js con export estático, con la identidad real de
  la marca (oscura/neón), copy en la voz de Kosmos y WhatsApp como CTA principal.
- Para quién y para qué: pymes de cualquier rubro (P1) y equipos de afuera (P2) que buscan marca + web.
  Objetivo: que la web genere consultas por WhatsApp y llamadas agendadas, y que Google y los bots de
  IA puedan leerla (hoy no pueden).
- Resultado entregable: PR en la rama `kosmos/web-2026` con home, 4 servicios, 11 casos, versión EN de
  home y servicios, y QA por página.

## 2. Tipo de trabajo y alcance
- Tipo: **D — sitio nuevo** (migración Vite SPA → Next.js SSG en el mismo repo, mismas rutas)
- Entra: home · 4 páginas de servicio · plantilla de caso + 11 casos · `/en/` de home y servicios ·
  página de privacidad mínima · sitemap, robots, JSON-LD, hreflang, OG · StickyCta de WhatsApp ·
  evento de conversión en GA4 · redirección de `/project/ehtexperience`
- No entra (backlog): blog · páginas por rubro o ciudad · casos en EN (se enlazan los de ES) ·
  formulario de brief · ficha de Google Business Profile · listados en directorios (Sortlist, Clutch)
- Repo · rama · hosting: `FedericoSecchi/SomosKosmos` · `kosmos/web-2026` · **GitHub Pages**
  (verificado 26/10/2026: `.github/workflows/deploy.yml` publica `dist/` en push a `main`;
  `public/CNAME` = somoskosmos.com) → `output: 'export'`, `trailingSlash: true`,
  `images.unoptimized: true`; el workflow pasa a publicar `out/`. `netlify.toml` y la nota de
  Netlify/Vercel en `project_state/STATUS.md` están desactualizados: se borran.
- Estado del repo (último commit 77ec6cb, 07/04/2026): Vite + React 18 + react-router + shadcn +
  i18n por contexto (`src/i18n/locales/es.ts` y `en.ts`, sin URLs por idioma) + `react-helmet-async`.
  Contenido reutilizable: `src/data/projects.ts` (11 proyectos con `externalUrl`), `src/data/brands.ts`,
  `src/content/services/*.md`, `src/assets/projects/`, `public/branding/`, `public/videos/`.
- **SEO programático a eliminar**: `src/seo/programmaticTopics.ts`, `projectTopics.ts`,
  `caseStudyGenerator.ts`, `generateTopicContent.ts`, `seoKeywords.ts`, páginas `ProjectTopic.tsx`,
  `TopicLanding.tsx`, `ProgrammaticProjectPage.tsx` y `scripts/generate-sitemap.ts`. Generan ~280 de
  las 296 URLs del sitemap actual (`/project/<id>/<topic>` × 25 por proyecto y `/topic/*`): plantillas
  casi idénticas por variante de keyword = *scaled content abuse* (regla 2 de la skill). Search Console
  no muestra ninguna con datos en 15 meses, así que no hay tráfico que perder.

## 3. Diagnóstico express
| Área | Estado | Hallazgo principal | Impacto |
|---|---|---|---|
| SEO on-page | ❌ | 15 meses: 193 impresiones, 13 clics, solo la home con datos; únicamente búsquedas de marca en inglés desde países ajenos al negocio | alto |
| Técnico | ❌ | SPA Vite: sin JS no hay texto; `/project/*` y `/services/*` invisibles para bots de IA; meta description en inglés; 33 H3 duplicados por el marquee | alto |
| Copy | ⚠️ | H1 genérico, "claro/claridad" ×6, servicios descritos por features; el mejor copy de la marca no está en la web | medio |
| UX / conversión | ❌ | Único CTA: `mailto:`; sin WhatsApp ni agenda; sin testimonios; fotos stock repetidas 3 veces; 6/11 casos con el og-image como thumbnail; redes en `#`; SkyShot enlaza a un github.io | alto |
| Marca / externo | ❌ | Web crema "Kosmos Studio" ≠ marca oscura/neón "Somos Kosmos"; sin GBP; no aparece buscando "Somos Kosmos" | alto |

## 4. Pasos que va a ejecutar Claude Code
1. Preparar rama, escribir los archivos de `seo/` de este plan, `scaffold.py`, build de referencia del
   sitio Vite actual (anotar en ESTADO.md). Inventariar antes de migrar: textos ES/EN existentes, datos
   de los 11 proyectos, imágenes en `public/` y `src/assets/`, rutas del router.
2. Base Next.js 14 + TS estricto + Tailwind en el mismo repo (reemplaza Vite en la rama; el código Vite
   se elimina recién cuando el build Next pasa y todas las rutas existen): tokens de marca (§6),
   layout con JSON-LD `Organization` + `ProfessionalService`, loader de contenido, `lib/site.ts`,
   `lib/urls.ts`, `lib/whatsapp.ts`, `StickyCta`, `sitemap.ts`, `robots.ts`, hreflang, OG por página.
   Deploy: ajustar el workflow existente al export de Next sin cambiar dominio ni `CNAME`.
3. Por cada página, en el orden de §5: competencia → encabezados → bloques → texto SEO → capa humana
   y conversión → FAQ → metadata → implementación → QA → commit.
4. Casos: una plantilla `/project/[slug]` con `generateStaticParams`, datos migrados del sitio actual.
   QA técnico por caso; sin keywords (no son páginas de volumen).
5. Versión EN de home y servicios (`/en/…`), reusando las traducciones existentes del repo cuando
   coincidan con el copy nuevo; si no, traducir el copy nuevo (no el viejo).
6. Enlaces internos, redirección de §7, auditoría técnica final, build limpio.
7. PR con resumen, QA por página, decisiones y pendientes del cliente. Frenar.

## 5. Páginas
| Orden | URL | Acción | Keyword principal | Vol. | Persona | Schema | Veredicto SERP |
|---|---|---|---|---|---|---|---|
| 1 | / | reescribir | estudio de branding y diseño web (antes "agencia…", ver ESTADO 2026-11-10) | s/d | P1, P2 | Organization, ProfessionalService, WebSite | long-tail + marca |
| 2 | /services/websites | reescribir | diseño de páginas web para pymes | s/d | P1 | Service, FAQPage | long-tail |
| 3 | /services/branding | reescribir | diseño de identidad de marca | s/d | P1, P3 | Service, FAQPage | long-tail |
| 4 | /services/systems-automation | reescribir | automatización de whatsapp para negocios | s/d | P1 | Service, FAQPage | atacar ya (verificar) |
| 5 | /services/content-motion | reescribir | contenido para redes sociales de marcas | s/d | P1 | Service, FAQPage | long-tail |
| 6 | /project/[slug] ×11 | ajustar (migrar) | — | — | todas | CreativeWork, BreadcrumbList | marca |
| 7 | /en/ y /en/services/* | nueva (EN) | branding and web design studio | s/d | P2 | igual que ES | long-tail |
| 8 | /brief | reescribir | — | — | P1, P2 | — | — |
| 9 | /privacidad | nueva | — | — | — | — | — |

/brief existe hoy (botón mailto). Pasa a ser la página de contacto: llamada de 20 min (Calendly) +
email, con las 4–5 preguntas que conviene traer resueltas (qué necesitás, para cuándo, referencias,
presupuesto aproximado). `noindex` no: es la URL a la que apuntan los CTA del header.

### home — detalle
- Intención: saber quiénes son, qué hacen y si les sirve para su negocio; contactar.
- Cluster: `seo/paginas/home/keywords.md`
- Estructura (bloques en orden):
  1. Hero: H1 con la keyword en lenguaje natural (ej. "Branding y diseño web para pymes que quieren
     que las elijan" — validar con copy_lint) + bajada con "Convertimos tu marca en un sistema que
     funciona." + CTA "Agendá una llamada de 20 min" + secundario por email
  2. Logos de clientes (una sola vez, como imágenes con alt; sin H3)
  3. Servicios: 4 tarjetas con el copy de marca (contexto) + "desde" + link a cada página
  4. Casos destacados: 4 (uno por servicio) con thumbnail real
  5. Proceso: 4 pasos reales (brief → moodboard → diseño y desarrollo → ajustes y publicación) +
     "Sin vueltas infinitas. Sin desaparecer a mitad del proyecto." + 2–3 rondas + 50/50
  6. Testimonios ([CONFIRMAR]; si no hay, el bloque no se renderiza)
  7. Equipo con fotos reales ([CONFIRMAR]; sin fotos stock)
  8. Cierre: "Del caos al Kosmos" + CTA
- CTA principal (todo el sitio, 10/11/2026): "Agendá una llamada de 20 min" →
  https://calendly.com/federico-secchimarino/llamada-de-proyecto-somos-kosmos · microcopy: "Llamada por
  Google Meet, de lunes a jueves de 9 a 18 (hora Argentina)."
- CTA secundario: "Escribinos a hello@somoskosmos.com" (mailto)
- Notas de competencia: SERP genérica tomada por directorios; diferenciar con hechos (tiempos, rondas,
  equipo completo, dron) y portfolio real, no con adjetivos.

### services/websites — detalle
- Intención: contratar una web o landing para un negocio; saber cuánto cuesta y cuánto tarda.
- Cluster: `seo/paginas/websites/keywords.md`
- Estructura: hero con "Creamos sitios que explican lo que hacés, ordenan la info y ayudan a que te
  elijan." + CTA · qué incluye (lista real de las propuestas) · tipos: landing / sitio / sitio con CMS
  con tiempos reales · casos por rubro (turismo: MareBoats, DeltaRowing; marcas: Nude, Calmo; personal:
  Fede García; web3: ETHperience, The Red Guild) · proceso · "desde" · FAQ · CTA final
- CTA: el del sitio (llamada de 20 min + email)

### services/branding — detalle
- Intención: crear o renovar la identidad de un negocio.
- Estructura: hero con "Creamos una imagen clara y profesional para que te reconozcan y confíen en vos."
  · qué incluye · casos (Security Alliance, Orbita, Pancito, Nude) · combinación branding + web ·
  proceso · "desde" · FAQ · CTA
- CTA: el del sitio (llamada de 20 min + email)

### services/systems-automation — detalle
- Intención: dejar de responder y cargar todo a mano.
- Estructura: hero con "Tu negocio funcionando solo." · qué automatizan (bots de WhatsApp, flujos
  en n8n, integraciones entre herramientas, respuestas y seguimiento de ventas; confirmado por Fede,
  26/10/2026) · quién lo hace (Fran, si se publica el equipo) · ejemplo concreto [CONFIRMAR] ·
  sistemas de diseño · "desde" · FAQ · CTA
- CTA: el del sitio (llamada de 20 min + email)

### services/content-motion — detalle
- Intención: tener contenido de marca constante y producción audiovisual.
- Estructura: hero con "Piezas para redes y campañas pensadas para atraer y generar resultados." ·
  qué incluye (templates de Canva + tutorial, auditoría de redes, motion, foto y video) · dron con
  SkyShot (enlace a https://skyshot.space) · casos · "desde" · FAQ · CTA
- CTA: el del sitio (llamada de 20 min + email)

## 6. Decisiones tomadas
| Decisión | Elección | Quién / cuándo |
|---|---|---|
| Tipo de trabajo | D — sitio nuevo en Next.js SSG, mismas rutas | Claude (regla 5 de la skill), 25/10/2026 |
| Público | Pymes de cualquier rubro, sin nicho; rubros como casos dentro de servicios | Fede, 25/10/2026 |
| Diseño | Identidad real: #222222 + #6FE23C, Syne en títulos, Space Grotesk en texto, stickers de marca, grilla fina | Fede, 25/10/2026 |
| CTA | Principal en todo el sitio: "Agendá una llamada de 20 min" (Calendly). Secundario: "Escribinos a hello@somoskosmos.com" (mailto). Sin WhatsApp (no hay número ni quién responda) y sin botón flotante. Antes: WhatsApp prellenado + Calendly (Fede, 25/10/2026) | Fede, 10/11/2026 |
| Precio | "Desde" visible por servicio | Fede, 25/10/2026 |
| Nombre | "Somos Kosmos" en todo el sitio, title y schema | Claude (consistencia con dominio y marca) |
| SEO programático | Se eliminan ~280 páginas generadas; quedan stubs de redirección | Claude (regla 2), 26/10/2026 |
| Tecnología mencionada | Solo código; nunca Webflow ni constructores | Fede, 26/10/2026 |
| Idiomas | ES por defecto (`es-AR`) + EN en `/en/` con hreflang | supuesto (§8) |

## 7. Restricciones
- URLs que NO se cambian: `/`, `/brief`, `/services/branding`, `/services/websites`, `/services/content-motion`,
  `/services/systems-automation`, `/project/security-alliance`, `/project/the-red-guild`,
  `/project/orbita`, `/project/nude`, `/project/calmo`, `/project/deltarowling`, `/project/fede-garcia`,
  `/project/mareboats`, `/project/skyshot`, `/project/pancito`
- URLs que cambian (con redirección): `/project/ehtexperience` → `/project/ethperience` (export
  estático: página HTML con `<meta http-equiv="refresh">` + `<link rel="canonical">` hacia la nueva,
  y la vieja fuera del sitemap). `/project/deltarowling` se mantiene aunque el nombre cambie.
- URLs programáticas que se eliminan: `/project/<id>/<topic>` → página stub con meta refresh +
  canonical a `/project/<id>` (generada con el mismo `generateStaticParams`, con `noindex`, fuera del
  sitemap); `/topic/*` (4) → stub a `/services/branding`. Lista exacta: copiar de `public/sitemap.xml`
  actual a `seo/redirecciones.md` antes de borrarlo. Los stubs se pueden quitar a los 6 meses.
- Contenido existente que se conserva tal cual: "Sin vueltas infinitas. Sin desaparecer a mitad del
  proyecto." · "Menos drama. Más progreso." · nombres y servicio de cada proyecto (salvo typos)
- Se eliminan: las 3 fotos stock/IA (hero y "Dentro del estudio"), el marquee de texto repetido, los
  links de redes en `#` (si no hay link real, no se muestra el ícono), el `mailto:` como CTA principal
  (el email queda en el footer)
- Prácticas descartadas: estrellas propias en schema; testimonios inventados; promesas de posición
  en Google; páginas por ciudad sin dirección real

## 8. Supuestos (defaults usados donde no hubo respuesta)
- ES + EN; EN solo home y servicios en esta etapa
- Disponibilidad de Calendly copiada del horario "Working Hours" existente (lun–jue 9–18 ART);
  Fede la ajusta si está en Europa
- Sin ficha GBP: schema sin `address`; `areaServed` = Argentina + "remote" hasta confirmar ciudad
- Moneda del "desde": ARS en ES y USD en EN, ambos [CONFIRMAR] (regla interna: se cotiza en moneda
  local del cliente o EUR)
- Tono: voseo; nada de "hemos"

## 9. Pendientes del cliente → `[CONFIRMAR]`
| Dato | Dónde impacta | Estado |
|---|---|---|
| Número de WhatsApp de ventas | — | ❌ descartado: no hay número ni quién responda; el CTA pasa a Calendly + email (Fede, 10/11/2026) |
| Link de Calendly (evento de 20 min) | CTA principal | ✅ creado 26/10/2026 |
| Precio "desde" por servicio (ARS y USD) | servicios, home, FAQ | pendiente |
| Alcance de Sistemas & Automatizaciones | `/services/systems-automation` | ✅ "hacemos todo" (Fede, 26/10) |
| Ejemplo concreto de automatización publicable | `/services/systems-automation` | pendiente |
| Ciudad publicable | schema, footer | pendiente |
| 3–5 testimonios con nombre | home, servicios | pendiente |
| Fotos reales de equipo y proceso | home (hero, equipo) | pendiente |
| Thumbnails de ETHperience, DeltaRowing, Fede García, MareBoats, SkyShot, Pancito | home, casos | pendiente |
| Nombre exacto "DeltaRowing" | caso | pendiente |
| Links de Instagram, LinkedIn, Behance | footer, schema `sameAs` | pendiente |
| Mostrar equipo con nombres | home | pendiente |
| Texto de privacidad | /privacidad | pendiente |
| Propiedad de GA4 | medición | pendiente |

## 10. Criterios de terminado
- QA técnico ✅ por página: build OK (TS estricto) · HTML estático con el texto (verificado en `out/`
  sin JS) · 1 H1 · `kw_coverage.py` ✅ · `copy_lint.py --brand "Somos Kosmos" --allow "Kosmos,SkyShot"` ✅ ·
  JSON-LD válido · CTA visible en 360×740 · tokens iguales en home e internas · cards con altura
  uniforme en 375/768/1280 · cero imágenes stock · cero links a `#`
- Las 16 URLs de §7 existen en `out/` y el sitemap tiene solo URLs canónicas (≈ 30 con EN, no 296)
- Ningún archivo de SEO programático queda en el repo; los stubs de redirección tienen `noindex`
- PR abierto con el resumen; nada mergeado
- Los `[CONFIRMAR]` no bloquean el PR: bloquean el merge (van listados con el mensaje al cliente)

## 11. Después del merge (medición)
- Search Console (ya existe `sc-domain:somoskosmos.com`): enviar sitemap, pedir indexación de servicios
- Bing Webmaster Tools
- GA4: eventos clave `calendly_click` y `email_click` (los links llevan `data-event` con ese nombre)
- Crear ficha de Google Business Profile si hay dirección o como área de servicio (`seo/gbp.md`)
- Perfiles en Sortlist y Clutch apuntando a la web (los directorios ya ganan la SERP genérica)
- Revisión a las 4, 8 y 12 semanas
