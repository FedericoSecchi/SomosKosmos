import { SITE, type Locale } from '@/lib/site';

// CTA único del sitio: principal = llamada de 20 min en Calendly, secundario = email.
// data-event es el nombre del evento de medición (calendly_click / email_click), ver seo/medicion.md.
export const CTA_LABELS = {
  es: { call: 'Agendá una llamada de 20 min', email: `Escribinos a ${SITE.email}` },
  en: { call: 'Book a 20-min call', email: `Email us at ${SITE.email}` },
} as const;

export function CtaRow({
  locale,
  note,
  align = 'start',
}: {
  locale: Locale;
  note?: string;
  align?: 'start' | 'center';
}) {
  const labels = CTA_LABELS[locale];
  return (
    <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start'}`}>
      <div className="flex flex-wrap gap-3">
        <a
          href={SITE.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="calendly"
          data-event="calendly_click"
          className="btn-primary"
        >
          {labels.call}
        </a>
        <a
          href={`mailto:${SITE.email}`}
          data-cta="email"
          data-event="email_click"
          className="btn-ghost break-all"
        >
          {labels.email}
        </a>
      </div>
      {note ? <p className="text-sm text-fg-muted">{note}</p> : null}
    </div>
  );
}
