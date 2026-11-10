import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Includes } from '@/components/sections/Includes';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { absoluteUrl, pathFor, hreflangFor } from '@/lib/urls';
import { SITE } from '@/lib/site';
import { getService } from '@/content/services';

const LOCALE = 'es' as const;
const PATH = ['services', 'branding'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('branding');

export const metadata: Metadata = {
  title: 'Diseño de identidad de marca',
  description:
    'Diseñamos la identidad visual de tu marca: logo, tipografía, color, piezas y manual de marca. Para pymes, startups y marcas personales que quieren que las reconozcan.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Diseño de identidad de marca — Somos Kosmos',
    description:
      'Una identidad de marca para que te reconozcan y confíen en vos. Logo, tipografía, color y sistema completo.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.es,
    type: 'website',
  },
};

const FAQ = [
  {
    q: '¿Qué recibo al final del proyecto de branding?',
    a: 'Un sistema de identidad: logo, tipografía, paleta de color y una guía de marca con reglas de uso real, para que cualquier persona del equipo (o un proveedor) use la marca igual. [CONFIRMAR: piezas adicionales incluidas]',
  },
  {
    q: '¿Hacen rebranding de una empresa que ya tiene marca?',
    a: 'Sí. Es un trabajo distinto al de empezar de cero: parte del valor es decidir qué conservar y qué cambiar sin perder reconocimiento. Nude es un ejemplo: rediseño de marca y web para una marca natural de cuidado de la piel.',
  },
  {
    q: '¿Puedo contratar branding y web juntos?',
    a: 'Sí, y es lo más eficiente. Trabajamos marca y sitio en paralelo con el mismo equipo. Lo ves en Calmo, The Red Guild y Nude.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Cotizamos cada proyecto por alcance. Te pasamos el número en la primera llamada.',
  },
  {
    q: '¿Entregan los archivos editables?',
    a: '[CONFIRMAR: si se entregan archivos editables y en qué formatos]',
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('es', []) },
          { name: 'Servicios', path: pathFor('es', ['services', 'websites']) },
          { name: 'Branding', path: pathFor('es', ['services', 'branding']) },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          slug: 'branding',
          name: SERVICE.title,
          description:
            'Diseño de identidad visual, logotipo, tipografía, paleta de color y guías de marca con uso real para pymes, startups y marcas personales.',
          url: CANONICAL,
        })}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Header locale={LOCALE} />
      <main>
        <Hero
          locale={LOCALE}
          eyebrow="Servicio · Branding"
          h1="Diseño de identidad de marca para que te reconozcan y confíen en vos."
          lead="Branding para pymes, startups y marcas personales: diseñamos la identidad visual con logo, tipografía, color y recursos propios. Terminamos con un manual de marca para uso real, para que la marca viva igual en cada punto de contacto."
          note="Diseñar sin estrategia no es una opción."
        />
        <Includes
          locale={LOCALE}
          h2="Qué incluye tu identidad de marca."
          items={[
            'Brief con cuestionario para entender el negocio.',
            'Moodboard con referencias antes de diseñar.',
            'Diseño de logotipo, tipografía y paleta de color.',
            'Guía de marca con reglas de uso real.',
            '[CONFIRMAR: piezas y archivos adicionales que se entregan]',
          ]}
          note="Si querés que también hagamos la web, trabajamos marca y sitio en paralelo con el mismo equipo."
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Marcas que diseñamos."
          intro="Seguridad cripto, cuidado de la piel, bienestar y comida artesanal. Distintos rubros, mismo cuidado."
          slugs={['security-alliance', 'nude', 'orbita', 'pancito', 'calmo', 'the-red-guild']}
        />
        <Process
          locale={LOCALE}
          h2="Cómo trabajamos tu marca."
          intro="Cada entregable tiene 2–3 rondas de feedback."
          steps={[
            { title: '01 · Brief', text: 'Cuestionario para entender el negocio, el cliente y la competencia.' },
            { title: '02 · Moodboard', text: 'Dirección visual y referencias antes de diseñar.' },
            { title: '03 · Diseño del sistema', text: 'Logo, tipografía y color.' },
            { title: '04 · Guía y entrega', text: 'Guía de marca con reglas de uso real.' },
          ]}
          closing="Ser uno más no es una opción."
        />
        <Pricing
          locale={LOCALE}
          h2="Cuánto cuesta tu identidad."
        />
        <Faq locale={LOCALE} h2="Preguntas frecuentes sobre branding." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="¿Hablamos de tu marca?"
          lead="Contanos qué tenés hoy (si tenés algo) y a dónde querés llegar. Te respondemos con una propuesta concreta."
        />
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
