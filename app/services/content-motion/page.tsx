import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCta } from '@/components/StickyCta';
import { Hero } from '@/components/sections/Hero';
import { Includes } from '@/components/sections/Includes';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { WHATSAPP_TEXTS } from '@/lib/whatsapp';
import { absoluteUrl, pathFor, hreflangFor } from '@/lib/urls';
import { SITE } from '@/lib/site';
import { getService } from '@/content/services';

const LOCALE = 'es' as const;
const PATH = ['services', 'content-motion'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('content-motion');

export const metadata: Metadata = {
  title: 'Contenido para redes y producción audiovisual — Somos Kosmos',
  description:
    'Templates para redes, motion, fotografía y video para marcas y destinos turísticos. Producción con dron propia a través de SkyShot.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Contenido para redes y producción audiovisual · Somos Kosmos',
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
    a: 'Ambos. Podemos armar los templates y entregártelos para que vos manejes la frecuencia, o producir las piezas mensuales como pack. Lo discutimos según el presupuesto y quién administra las redes.',
  },
  {
    q: '¿Qué incluyen los templates de Canva?',
    a: 'Un set de 15–25 plantillas reutilizables (posteos, stories, reels de arranque, carruseles) basadas en tu identidad, con guías de uso para que cualquier persona las edite sin romper la marca.',
  },
  {
    q: '¿Producen video?',
    a: 'Sí, fotografía y video. Reels, piezas para campaña, aftermovies de eventos y material de producto. Trabajamos en Argentina y donde haga falta.',
  },
  {
    q: '¿Y lo de dron?',
    a: 'La producción aérea la hacemos a través de SkyShot (skyshot.space), el proyecto hermano de Kosmos. Ideal para turismo, inmuebles y destinos.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende del alcance. Un set de templates sale distinto que una producción de video con dron en un hotel. Te pasamos el "desde" después de una llamada corta.',
  },
  {
    q: '¿Pueden auditar nuestras redes antes?',
    a: 'Sí. Hacemos auditoría de redes y propuesta de mejora como paso previo si no sabés dónde conviene invertir. Es un entregable corto que después se descuenta si avanzás con contenido.',
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
          h1="Piezas para redes y campañas pensadas para atraer y generar resultados."
          lead="Templates reutilizables, motion, fotografía y video. Producción con dron propia a través de SkyShot. Para marcas que quieren sostener presencia sin depender de un diseñador freelance distinto por mes."
          primaryLabel="Pedí tu propuesta de contenido"
          primaryText={WHATSAPP_TEXTS.content}
          note="Si no sabés por dónde empezar, hacemos una auditoría corta de redes."
        />
        <Includes
          locale={LOCALE}
          h2="Qué podemos producir."
          items={[
            'Set de templates en Canva/Figma reutilizables con tutorial de uso.',
            'Auditoría de redes con hallazgos y propuesta de mejora.',
            'Diseño mensual de piezas para redes y campañas.',
            'Motion graphics para reels, intros y campañas digitales.',
            'Fotografía y video para marca, producto o destino.',
            'Producción con dron (vía SkyShot) para turismo e inmuebles.',
            'Refresh de decks y materiales comerciales.',
            'Materiales de campaña por hitos (lanzamiento, temporada, evento).',
          ]}
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Trabajos de contenido y audiovisual."
          intro="Dron, foto y motion para marcas y destinos. Más proyectos en producción."
          slugs={['skyshot', 'calmo', 'nude', 'the-red-guild']}
        />
        <Process
          locale={LOCALE}
          h2="Cómo trabajamos."
          intro="Primero definimos qué querés que pase (más seguidores, más consultas, más ventas). Después pensamos las piezas."
          steps={[
            { title: '01 · Auditoría', text: 'Qué tenés hoy, qué funciona y qué conviene cambiar.' },
            { title: '02 · Dirección', text: 'Dirección de arte, tono y plan de piezas por mes.' },
            { title: '03 · Producción', text: 'Diseño, motion, foto y video según el plan.' },
            { title: '04 · Entrega', text: 'Piezas listas para publicar, con calendario sugerido.' },
          ]}
          closing="Diseñamos universos."
        />
        <Pricing
          locale={LOCALE}
          h2="Cuánto cuesta."
          priceFrom="[CONFIRMAR]"
          detail="El “desde” cubre un pack mensual acotado o un set de templates. Producción audiovisual (video, dron, foto en locación) se cotiza por rodaje."
          payment="Mensual o por proyecto. Pago en transferencia: 50% al comenzar, 50% al entregar."
          primaryLabel="Pedí tu “desde”"
          primaryText={WHATSAPP_TEXTS.content}
        />
        <Faq locale={LOCALE} h2="Preguntas frecuentes sobre contenido." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="¿Qué contenido te está faltando?"
          lead="Contanos para qué lo necesitás: lanzamiento, campaña, temporada o rutina mensual. Te armamos la propuesta."
          primaryLabel="Pedí tu propuesta de contenido"
          primaryText={WHATSAPP_TEXTS.content}
        />
      </main>
      <Footer locale={LOCALE} />
      <StickyCta locale={LOCALE} text={WHATSAPP_TEXTS.content} />
    </>
  );
}
