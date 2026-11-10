import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CtaRow } from '@/components/CtaRow';
import { KStar } from '@/components/KStar';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { absoluteUrl, pathFor, hreflangFor } from '@/lib/urls';
import { SITE } from '@/lib/site';

const LOCALE = 'es' as const;
const PATH = ['brief'];
const CANONICAL = pathFor(LOCALE, PATH);

export const metadata: Metadata = {
  title: 'Iniciar un proyecto',
  description:
    'Agendá una llamada de 20 minutos o escribinos a hello@somoskosmos.com. Cotizamos cada proyecto por alcance y te pasamos el número en la primera llamada.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, false),
  },
  openGraph: {
    title: 'Iniciar un proyecto — Somos Kosmos',
    description: 'Una llamada de 20 minutos o un email. Vos elegís.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.es,
    type: 'website',
  },
};

const QUESTIONS = [
  '¿Qué necesitás? (marca, web, contenido, automatización — o combinación)',
  '¿Para qué negocio o proyecto? (rubro, ciudad y lo que ya existe)',
  '¿Para cuándo lo necesitás? (tenés fecha o es flexible)',
  '¿Hay referencias que te gustan? (links o nombres de marcas)',
  '¿Rango de presupuesto estimado? (nos ayuda a proponerte el alcance correcto)',
];

const CHANNELS = [
  {
    title: 'Agendá una llamada',
    detail: '20 minutos por Google Meet, de lunes a jueves de 9 a 18 (hora Argentina). Elegís el horario en Calendly.',
  },
  {
    title: 'Email',
    detail: 'Si preferís mandarlo escrito con links y archivos, escribinos a hello@somoskosmos.com.',
  },
];

export default function BriefPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('es', []) },
          { name: 'Iniciar un proyecto', path: CANONICAL },
        ])}
      />
      <Header locale={LOCALE} />
      <main>
        <section className="relative overflow-hidden border-b border-line" data-hero>
          <div className="container relative py-16 md:py-24">
            <div className="flex flex-col gap-6 max-w-3xl">
              <span className="eyebrow"><KStar className="w-3 h-3" /> Iniciar un proyecto</span>
              <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
                Contanos qué estás necesitando.
              </h1>
              <p className="text-fg-muted text-lg md:text-xl max-w-2xl">
                Agendá una llamada de 20 minutos o escribinos. Si ya tenés las respuestas de abajo,
                mejor: vamos directo al alcance y a los próximos pasos.
              </p>
              <div className="mt-2">
                <CtaRow
                  locale={LOCALE}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-3xl md:text-5xl mb-10">Cómo te podemos escuchar.</h2>
            <ul className="grid gap-5 md:grid-cols-2">
              {CHANNELS.map((c) => (
                <li key={c.title} className="card">
                  <div>
                    <h3 className="text-xl mb-2">{c.title}</h3>
                    <p className="text-fg-muted text-sm">{c.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <span className="eyebrow block mb-3">Qué conviene traer</span>
              <h2 className="text-3xl md:text-5xl">Nos ayuda arrancar con esto resuelto.</h2>
              <p className="text-fg-muted mt-4">
                No es obligatorio. Si no tenés las respuestas, lo resolvemos juntos en la llamada.
                Pero cuanto más claro llegues, más preciso te vamos a cotizar.
              </p>
            </div>
            <ol className="space-y-4">
              {QUESTIONS.map((q, i) => (
                <li key={q} className="flex items-start gap-4 border-t border-line pt-4">
                  <span className="font-display text-accent text-sm tracking-widest">0{i + 1}</span>
                  <span className="text-lg leading-snug">{q}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="rounded-lg border border-line bg-surface p-8 md:p-12 flex flex-col gap-5">
              <h2 className="text-3xl md:text-4xl">Del caos al Kosmos.</h2>
              <p className="text-fg-muted">
                Si tenés un proyecto en mente, no esperes a tener todo resuelto. Mandanos lo que sepas,
                lo ordenamos juntos.
              </p>
              <CtaRow
                locale={LOCALE}
                note="Preferimos un hola corto que un formulario largo."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
