import { SITE, type Locale } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

export function CtaRow({
  locale,
  primaryLabel,
  primaryText,
  secondaryLabel,
  note,
  align = 'start',
}: {
  locale: Locale;
  primaryLabel: string;
  primaryText: string;
  secondaryLabel?: string;
  note?: string;
  align?: 'start' | 'center';
}) {
  const defaultSecondary = locale === 'es' ? 'Agendá una llamada de 20 min' : 'Book a 20-min call';
  return (
    <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start'}`}>
      <div className="flex flex-wrap gap-3">
        <a
          href={whatsappUrl(primaryText)}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp"
          className="btn-primary"
        >
          {primaryLabel}
        </a>
        <a
          href={SITE.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="calendly"
          className="btn-ghost"
        >
          {secondaryLabel ?? defaultSecondary}
        </a>
      </div>
      {note ? <p className="text-sm text-fg-muted">{note}</p> : null}
    </div>
  );
}
