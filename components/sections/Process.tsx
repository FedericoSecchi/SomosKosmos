import type { Locale } from '@/lib/site';

export function Process({
  locale,
  h2,
  intro,
  steps,
  closing,
}: {
  locale: Locale;
  h2: string;
  intro?: string;
  steps: { title: string; text: string }[];
  closing?: string;
}) {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow mb-3 block">{locale === 'es' ? 'Proceso' : 'Process'}</span>
          <h2 className="text-3xl md:text-5xl mb-3">{h2}</h2>
          {intro ? <p className="text-fg-muted">{intro}</p> : null}
        </div>
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card">
              <div>
                <span className="font-display text-accent text-xs tracking-widest">0{i + 1}</span>
                <h3 className="text-lg mt-2 mb-2">{s.title}</h3>
                <p className="text-fg-muted text-sm">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        {closing ? (
          <p className="mt-10 text-xl md:text-2xl font-display uppercase tracking-wide">
            {closing}
          </p>
        ) : null}
      </div>
    </section>
  );
}
