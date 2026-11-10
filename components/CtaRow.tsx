import { SITE, type Locale } from '@/lib/site';

// CTA único del sitio: principal = llamada de 20 min en Calendly, secundario = email.
// data-event es el nombre del evento de medición (calendly_click / email_click), ver seo/medicion.md.
export const CTA_LABELS = {
  es: { call: 'Agendá una llamada de 20 min', emailPrefix: 'Escribinos a' },
  en: { call: 'Book a 20-min call', emailPrefix: 'Email us at' },
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
          className="btn-ghost"
        >
          {/* El email va en minúsculas y sin cortes: en 360 px la línea se parte antes del email, no adentro. */}
          <span>
            {labels.emailPrefix} <span className="normal-case whitespace-nowrap">{SITE.email}</span>
          </span>
        </a>
      </div>
      {note ? <p className="text-sm text-fg-muted">{note}</p> : null}
    </div>
  );
}
