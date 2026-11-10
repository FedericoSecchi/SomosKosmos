# Google Business Profile — Somos Kosmos

> En negocios locales y alojamiento la ficha suele mover más consultas que la web al principio.
> Reglas: nombre real del negocio (sin keywords agregadas), un perfil por negocio, reseñas sin
> incentivos. Si el cliente decide romper una regla, va a "Decisiones de riesgo" en ESTADO.md.

## Estado actual (fecha: 2026-11-10)
- ¿Existe y está verificada? **No existe** (diagnóstico del intake, PLAN §3). Propietario: Fede cuando se cree.
- Categoría principal sugerida: "Diseñador de sitios web" · Secundarias: "Diseñador gráfico",
  "Agencia de marketing" (solo si se confirman como servicios reales; ver `00-contexto.md`)
- Dirección: **sin dirección publicable** → perfil de zona de servicio (dirección oculta).
  Zona: [CONFIRMAR: ciudad publicable o "remoto desde Argentina"] (PLAN §9)
- Rating / reseñas / fotos: n/a hasta crear la ficha
- La web ya está lista para enlazarla: schema sin `address`, `areaServed` Argentina + remoto
  (`lib/site.ts`). Al confirmar ciudad, actualizar NAP en `lib/site.ts` y en la ficha a la vez.
- Se crea después del merge (PLAN §11), no bloquea el PR.

## Tareas
- [ ] Categoría principal = el servicio de la página más importante; secundarias solo reales
- [ ] Servicios/productos cargados con el mismo nombre que las páginas de la web
- [ ] Descripción (≤ 750 caracteres) con hechos de `00-contexto.md`, sin listas de ciudades
- [ ] Link a la web con UTM: `?utm_source=gbp&utm_medium=organic&utm_campaign=ficha`
- [ ] Botón/enlace de WhatsApp o reservas (Tickets y Activities en turismo, si aplica)
- [ ] Horarios y temporada (cerrado fuera de temporada marcado como corresponde)
- [ ] 10+ fotos reales: lugar, equipo, servicio en uso, exterior/interior
- [ ] Pedido de reseñas sin incentivo: link directo + mensaje para mandar después del servicio
- [ ] Responder todas las reseñas (también las negativas, con hechos y sin discutir)
- [ ] NAP idéntico en web, schema (`lib/site.ts`), redes y OTAs

## Mensaje para pedir reseñas (adaptar a la voz del dueño)
```
Gracias por venir, [nombre]! Si te gustó, nos ayuda muchísimo una reseña acá: [link]. Un abrazo!
```
