import type { Locale } from '@/lib/site';
import { CtaRow } from '../CtaRow';
import { KStar } from '../KStar';

export function Hero({
  locale,
  eyebrow,
  h1,
  lead,
  primaryLabel,
  primaryText,
  note,
}: {
  locale: Locale;
  eyebrow: string;
  h1: string;
  lead: string;
  primaryLabel: string;
  primaryText: string;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line" data-hero>
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-50" />
      <div className="container relative py-16 md:py-28">
        <div className="flex flex-col gap-6 max-w-4xl">
          <span className="eyebrow">
            <KStar className="w-3 h-3" /> {eyebrow}
          </span>
          <h1 className="font-display text-hero">{h1}</h1>
          <p className="text-fg-muted text-lg md:text-xl max-w-2xl">{lead}</p>
          <div className="mt-2">
            <CtaRow
              locale={locale}
              primaryLabel={primaryLabel}
              primaryText={primaryText}
              note={note}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
