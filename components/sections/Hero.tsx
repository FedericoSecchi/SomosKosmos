import type { Locale } from '@/lib/site';
import { CtaRow } from '../CtaRow';
import { KStar } from '../KStar';

export function Hero({
  locale,
  eyebrow,
  h1,
  lead,
  note,
}: {
  locale: Locale;
  eyebrow: string;
  h1: string;
  lead: string;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line" data-hero>
      <div className="container relative pt-8 pb-14 md:pt-20 md:pb-28">
        <div className="flex flex-col gap-5 md:gap-6 max-w-4xl">
          <span className="eyebrow">
            <KStar className="w-3 h-3" /> {eyebrow}
          </span>
          <h1 className="font-display text-hero">{h1}</h1>
          <p className="text-fg-muted text-base md:text-xl max-w-2xl">{lead}</p>
          <div className="mt-2">
            <CtaRow
              locale={locale}
              note={note}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
