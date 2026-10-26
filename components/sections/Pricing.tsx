import type { Locale } from '@/lib/site';
import { CtaRow } from '../CtaRow';

export function Pricing({
  locale,
  h2,
  priceFrom,
  detail,
  payment,
  primaryLabel,
  primaryText,
}: {
  locale: Locale;
  h2: string;
  priceFrom: string;
  detail?: string;
  payment?: string;
  primaryLabel: string;
  primaryText: string;
}) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <span className="eyebrow block mb-3">{locale === 'es' ? 'Inversión' : 'Investment'}</span>
            <h2 className="text-3xl md:text-5xl">{h2}</h2>
            {detail ? <p className="text-fg-muted mt-3 max-w-xl">{detail}</p> : null}
            {payment ? <p className="text-sm text-fg-muted mt-5">{payment}</p> : null}
          </div>
          <div className="rounded-lg border border-line bg-surface p-8">
            <p className="font-display text-5xl md:text-6xl text-accent">{priceFrom}</p>
            <p className="text-sm text-fg-muted mt-3 mb-6">
              {locale === 'es'
                ? 'Cotizamos cada proyecto por alcance. Te pasamos el "desde" por WhatsApp.'
                : "We quote every project by scope. We'll share the starting price on WhatsApp."}
            </p>
            <CtaRow
              locale={locale}
              primaryLabel={primaryLabel}
              primaryText={primaryText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
