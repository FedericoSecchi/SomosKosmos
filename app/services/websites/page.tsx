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
const PATH = ['services', 'websites'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('websites');

export const metadata: Metadata = {
  title: 'Diseño de páginas web para pymes',
  description:
    'Hacemos sitios web a medida, en código propio: landings, sitios corporativos y páginas para turismo o comercios. Diseño, SEO base y publicación en 1–4 semanas.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Diseño de páginas web para pymes — Somos Kosmos',
    description:
      'Sitios en código, sin templates. Diseño UX/UI a medida, SEO base, formularios, CMS y QA. Cotizamos cada proyecto por alcance.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.es,
    type: 'website',
  },
};

const FAQ = [
  {
    q: '¿Cuánto tarda una web?',
    a: 'Una landing page para un negocio tarda entre 1 y 4 semanas, un sitio de 7 páginas entre 2 y 3 semanas y un sitio de artista entre 3 y 4 semanas. Depende de que tengas los textos y las fotos listos.',
  },
  {
    q: '¿Qué incluye el servicio de web?',
    a: 'Arquitectura de contenido, diseño UX/UI a medida, desarrollo responsive, SEO on-page base, formularios, integración con CMS si hace falta, QA en varios dispositivos y publicación con dominio.',
  },
  {
    q: '¿Trabajan con Wix u otros constructores?',
    a: 'No. Hacemos todo en código propio, sin plantillas ni constructores. El resultado es un sitio rápido, que Google lee y que se puede escalar.',
  },
  {
    q: '¿Cuánto cuesta una página web?',
    a: 'Cotizamos cada proyecto por alcance. Te pasamos el número en la primera llamada.',
  },
  {
    q: '¿Cómo es el pago?',
    a: 'Trabajamos con transferencia: 50% al comenzar el proyecto y 50% al entregar.',
  },
  {
    q: '¿Después de la entrega quién se ocupa de los cambios?',
    a: 'Si querés gestionar el sitio por tu cuenta, lo armamos con un CMS para que edites textos e imágenes. También ofrecemos mantenimiento mensual: las condiciones las vemos según el proyecto.',
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('es', []) },
          { name: 'Servicios', path: pathFor('es', ['services', 'websites']) },
          { name: 'Websites', path: pathFor('es', ['services', 'websites']) },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          slug: 'websites',
          name: SERVICE.title,
          description:
            'Diseño y desarrollo de sitios web a medida, en código propio, para pymes, marcas y proyectos personales. Incluye SEO on-page base, CMS, formularios y QA.',
          url: CANONICAL,
        })}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Header locale={LOCALE} />
      <main>
        <Hero
          locale={LOCALE}
          eyebrow="Servicio · Websites"
          h1="Diseño de páginas web para pymes: sitios que explican lo que hacés y ayudan a que te elijan."
          lead="Diseño web a medida, en código propio, sin plantillas ni constructores. Landings y sitios con UX/UI, SEO base, formularios y CMS si hace falta. Entregamos en 1–4 semanas con 2–3 rondas de feedback."
          note="Cotizamos por alcance: te pasamos el número en la primera llamada."
        />
        <Includes
          locale={LOCALE}
          h2="Qué incluye tu web."
          items={[
            'Brief con cuestionario para entender el negocio.',
            'Arquitectura de contenido antes de diseñar.',
            'Diseño UX/UI a medida, sin templates.',
            'Desarrollo responsive en código propio.',
            'SEO on-page base: titles, descripciones, hreflang, schema y sitemap.',
            'CMS para editar textos e imágenes sin tocar código.',
            'Formularios de contacto.',
            'QA en varios dispositivos antes de publicar.',
            'Dominio y publicación.',
          ]}
          note="Lo que no entra: estrategia de contenido y carga masiva de contenido. Blog, newsletter, press kit o tienda se pueden sumar después."
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Webs que hicimos."
          intro="Páginas web para empresas de turismo como MareBoats y DeltaRowing, y para proyectos de bienestar, web3, eventos tech y marca personal. Mismo foco: que se lea rápido y guíe a la acción."
          slugs={['calmo', 'the-red-guild', 'mareboats', 'ethperience', 'fede-garcia', 'deltarowling']}
        />
        <Process
          locale={LOCALE}
          h2="Cómo trabajamos."
          intro="Sin vueltas infinitas. Sin desaparecer a mitad del proyecto. 2–3 rondas de feedback por entregable."
          steps={[
            { title: '01 · Brief', text: 'Cuestionario para entender negocio, objetivos y referencias.' },
            { title: '02 · Moodboard', text: 'Referencias visuales y arquitectura de la web antes de diseñar.' },
            { title: '03 · Diseño y desarrollo', text: 'Diseño UX/UI y desarrollo en código, con 2–3 rondas de feedback.' },
            { title: '04 · Ajustes y publicación', text: 'QA en dispositivos, dominio y publicación.' },
          ]}
          closing="Menos drama. Más progreso."
        />
        <Pricing
          locale={LOCALE}
          h2="Cuánto cuesta."
        />
        <Faq locale={LOCALE} h2="Preguntas frecuentes sobre nuestras webs." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="¿Hablamos de tu web?"
          lead="¿Necesitás una página web para tu negocio? Contanos qué hacés y para qué querés usar el sitio. En la primera llamada vemos alcance, plazos y número."
        />
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
