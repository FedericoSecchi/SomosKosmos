import type { Locale } from '@/lib/site';
import { CtaRow } from '../CtaRow';

// Sin lista de precios: cada proyecto se cotiza por alcance (Fede, 10/11/2026).
const COPY = {
  es: {
    eyebrow: 'Inversión',
    quote: 'Cotizamos cada proyecto por alcance. Te pasamos el número en la primera llamada.',
    payment: 'Pago en transferencia: 50% al comenzar, 50% al entregar.',
  },
  en: {
    eyebrow: 'Investment',
    quote: "We quote every project by scope. We'll give you the number on the first call.",
    payment: 'Bank transfer: 50% at kickoff, 50% at delivery.',
  },
} as const;

export function Pricing({ locale, h2 }: { locale: Locale; h2: string }) {
  const c = COPY[locale];
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end">
          <div className="min-w-0">
            <span className="eyebrow block mb-3">{c.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl">{h2}</h2>
          </div>
          <div className="min-w-0 rounded-lg border border-line bg-surface p-6 md:p-8">
            <p className="font-display text-xl md:text-2xl text-fg">{c.quote}</p>
            <p className="text-sm text-fg-muted mt-3 mb-6">{c.payment}</p>
            <CtaRow locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
