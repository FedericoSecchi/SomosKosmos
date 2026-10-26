import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCta } from '@/components/StickyCta';
import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Process } from '@/components/sections/Process';
import { Clients } from '@/components/sections/Clients';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { WHATSAPP_TEXTS } from '@/lib/whatsapp';
import { absoluteUrl, pathFor, hreflangFor } from '@/lib/urls';
import { SITE } from '@/lib/site';

const PATH: string[] = [];
const LOCALE = 'es' as const;
const CANONICAL = pathFor(LOCALE, PATH);

export const metadata: Metadata = {
  title: 'Somos Kosmos — Branding y diseño web para pymes que quieren que las elijan',
  description:
    'Estudio creativo de branding, sitios en código, contenido y automatizaciones. Convertimos tu marca en un sistema que funciona. Del caos al Kosmos.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Somos Kosmos — Branding y diseño web para pymes',
    description:
      'Un mismo equipo resuelve marca, web, contenido y automatizaciones. Sin vueltas infinitas. Sin desaparecer a mitad del proyecto.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.es,
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('es', []) },
        ])}
      />
      <Header locale={LOCALE} />
      <main>
        <Hero
          locale={LOCALE}
          eyebrow="Branding · Web · Contenido · Automatizaciones"
          h1="Branding y diseño web para pymes que quieren que las elijan."
          lead="Convertimos tu marca en un sistema que funciona. Un mismo equipo resuelve identidad, sitio, contenido y automatizaciones, con tiempos y rondas definidas. Del caos al Kosmos."
          primaryLabel="Escribinos por WhatsApp"
          primaryText={WHATSAPP_TEXTS.home}
          note="Te respondemos [CONFIRMAR: tiempo] en horario laboral."
        />
        <Clients locale={LOCALE} h2="Marcas con las que trabajamos." />
        <ServicesGrid
          locale={LOCALE}
          h2="En lo que realmente somos buenos."
          intro="Cuatro servicios, un solo equipo. Podés contratar uno o combinarlos para resolver marca, web, contenido y automatizaciones sin saltar de agencia en agencia."
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Proyectos seleccionados."
          intro="Distintos rubros. El mismo foco: ordenar lo complejo y hacerlo entendible."
          slugs={['security-alliance', 'calmo', 'the-red-guild', 'orbita']}
        />
        <Process
          locale={LOCALE}
          h2="Cómo trabajamos."
          intro="Brief claro, feedback honesto, plazos realistas. Sin vueltas infinitas. Sin desaparecer a mitad del proyecto."
          steps={[
            { title: '01 · Brief', text: 'Cuestionario corto para entender negocio, objetivos y lo que ya probaste.' },
            { title: '02 · Moodboard', text: 'Referencias y dirección antes de abrir Figma. Alineación por escrito.' },
            { title: '03 · Diseño y desarrollo', text: 'Marca y sitio en paralelo. 2–3 rondas de feedback por entregable.' },
            { title: '04 · Ajustes y publicación', text: 'Testing, carga, dominio y QA. Te dejamos todo documentado.' },
          ]}
          closing="Menos drama. Más progreso."
        />
        <ClosingCta
          locale={LOCALE}
          h2="Del caos al Kosmos."
          lead="Contanos qué estás necesitando. Te pasamos el “desde” y los próximos pasos en el mismo mensaje."
          primaryLabel="Escribinos por WhatsApp"
          primaryText={WHATSAPP_TEXTS.home}
        />
      </main>
      <Footer locale={LOCALE} />
      <StickyCta locale={LOCALE} text={WHATSAPP_TEXTS.home} />
    </>
  );
}
