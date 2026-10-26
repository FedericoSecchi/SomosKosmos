import type { Locale } from '@/lib/site';
import { CtaRow } from '../CtaRow';

export function ClosingCta({
  locale,
  h2,
  lead,
  primaryLabel,
  primaryText,
  note,
}: {
  locale: Locale;
  h2: string;
  lead?: string;
  primaryLabel: string;
  primaryText: string;
  note?: string;
}) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="rounded-lg border border-line bg-surface p-8 md:p-12 flex flex-col gap-6 md:gap-8">
          <h2 className="text-3xl md:text-5xl max-w-3xl">{h2}</h2>
          {lead ? <p className="text-fg-muted max-w-2xl text-lg">{lead}</p> : null}
          <CtaRow
            locale={locale}
            primaryLabel={primaryLabel}
            primaryText={primaryText}
            note={note}
          />
        </div>
      </div>
    </section>
  );
}
