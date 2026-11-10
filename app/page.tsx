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
  title: {
    absolute:
      'Estudio de branding y diseño web para pymes — Somos Kosmos',
  },
  description:
    'Somos Kosmos: estudio de branding y diseño web para pymes, con base en Argentina. Diseño de marca y página web, contenido y automatizaciones, con un mismo equipo.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Estudio de branding y diseño web para pymes — Somos Kosmos',
    description:
      'Diseño de marca y páginas web para pymes. Un mismo equipo resuelve branding, sitio, contenido y automatizaciones. Sin vueltas infinitas.',
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
          eyebrow="Estudio creativo · Argentina"
          h1="Estudio de branding y diseño web para pymes que quieren que las elijan."
          lead="Somos Kosmos: una agencia creativa chica con base en Argentina. Convertimos tu marca en un sistema que funciona. Un mismo equipo resuelve identidad, sitio, contenido y automatizaciones, con tiempos y rondas definidas."
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
          intro="Brief corto, feedback honesto, plazos realistas. Sin vueltas infinitas. Sin desaparecer a mitad del proyecto."
          steps={[
            { title: '01 · Brief', text: 'Cuestionario corto para entender negocio, objetivos y lo que ya probaste.' },
            { title: '02 · Moodboard', text: 'Referencias y dirección antes de abrir Figma. Alineación por escrito.' },
            { title: '03 · Diseño y desarrollo', text: 'Marca y sitio en paralelo. 2–3 rondas de feedback por entregable.' },
            { title: '04 · Ajustes y publicación', text: 'QA, dominio y publicación.' },
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
