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
const PATH = ['services', 'content-motion'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('content-motion');

export const metadata: Metadata = {
  title: 'Contenido para redes sociales de marcas',
  description:
    'Templates para redes, motion, fotografía y video para marcas y destinos turísticos. Producción con dron propia a través de SkyShot.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Contenido para redes y producción audiovisual — Somos Kosmos',
    description:
      'Piezas para redes y campañas pensadas para atraer y generar resultados. Templates reutilizables, motion, foto y video. Dron propio con SkyShot.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.es,
    type: 'website',
  },
};

const FAQ = [
  {
    q: '¿Hacen contenido mensual o puntual?',
    a: 'Podemos armar templates de Canva con tutorial para que vos manejes la frecuencia. [CONFIRMAR: si también producen piezas mensuales y cómo se contratan]',
  },
  {
    q: '¿Qué incluyen los templates de Canva?',
    a: 'Un set de más de 20 plantillas reutilizables basadas en tu identidad, con un tutorial para que cualquier persona las edite sin romper la marca.',
  },
  {
    q: '¿Producen video?',
    a: 'Sí, fotografía y video para marcas y para turismo, con footage aéreo vía SkyShot. [CONFIRMAR: formatos habituales y zonas donde filman]',
  },
  {
    q: '¿Y lo de dron?',
    a: 'La producción aérea la hacemos con SkyShot (skyshot.space), nuestro proyecto de contenido con dron, enfocado en turismo, naturaleza y relato de marca.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende del alcance. Un set de templates sale distinto que una producción de video con dron. Te pasamos el "desde" por WhatsApp.',
  },
  {
    q: '¿Pueden auditar nuestras redes antes?',
    a: 'Sí. Hacemos auditoría de redes y propuesta de mejora como paso previo si no sabés dónde conviene invertir.',
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('es', []) },
          { name: 'Servicios', path: pathFor('es', ['services', 'websites']) },
          { name: 'Contenido & Motion', path: pathFor('es', ['services', 'content-motion']) },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          slug: 'content-motion',
          name: SERVICE.title,
          description:
            'Diseño de contenido para redes, templates reutilizables, motion graphics, fotografía y video con producción de dron propia.',
          url: CANONICAL,
        })}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Header locale={LOCALE} />
      <main>
        <Hero
          locale={LOCALE}
          eyebrow="Servicio · Contenido & Motion"
          h1="Contenido para redes sociales de marcas: piezas y campañas pensadas para atraer y generar resultados."
          lead="Templates reutilizables, motion, fotografía y video. Producción con dron propia a través de SkyShot. Para marcas que quieren sostener presencia sin depender de un diseñador freelance distinto por mes."
          note="Si no sabés por dónde empezar, arrancamos con una auditoría de redes."
        />
        <Includes
          locale={LOCALE}
          h2="Qué podemos producir."
          items={[
            'Templates de Canva con tu marca, reutilizables y con tutorial de uso.',
            'Auditoría de redes y propuesta de mejoras.',
            'Diseño de piezas para redes sociales y campañas.',
            'Motion graphics para marcas.',
            'Fotografía y video para turismo y marcas.',
            'Video con dron para empresas de turismo (vía SkyShot).',
            'Refresh de decks.',
          ]}
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Trabajos de contenido y audiovisual."
          intro="Dron, foto y motion para marcas y destinos."
          slugs={['skyshot', 'calmo', 'nude', 'the-red-guild']}
        />
        <Process
          locale={LOCALE}
          h2="Cómo trabajamos."
          intro="Primero definimos qué querés que pase (más seguidores, más consultas, más ventas). Después pensamos las piezas."
          steps={[
            { title: '01 · Auditoría', text: 'Qué tenés hoy, qué funciona y qué conviene cambiar.' },
            { title: '02 · Dirección', text: 'Dirección de arte, tono y plan de piezas.' },
            { title: '03 · Producción', text: 'Diseño, motion, foto y video según el plan.' },
            { title: '04 · Entrega', text: 'Piezas listas para publicar.' },
          ]}
          closing="Diseñamos universos."
        />
        <Pricing
          locale={LOCALE}
          h2="Cuánto cuesta."
          priceFrom="[CONFIRMAR]"
          detail="El “desde” cubre [CONFIRMAR: alcance del precio de entrada, ej. set de templates]. Producción audiovisual (video, dron, foto) se cotiza por proyecto."
          payment="Pago en transferencia: 50% al comenzar, 50% al entregar."
        />
        <Faq locale={LOCALE} h2="Preguntas frecuentes sobre contenido." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="¿Qué contenido te está faltando?"
          lead="Contanos para qué lo necesitás: lanzamiento, campaña, temporada o rutina mensual. Te armamos la propuesta."
        />
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
