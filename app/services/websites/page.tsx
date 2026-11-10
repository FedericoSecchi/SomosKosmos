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
const PATH = ['services', 'websites'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('websites');

export const metadata: Metadata = {
  title: 'Diseño de páginas web para pymes — Somos Kosmos',
  description:
    'Hacemos sitios web a medida, en código propio: landings, sitios corporativos y páginas para turismo o comercios. Diseño, SEO base y publicación en 1–4 semanas.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Diseño de páginas web para pymes · Somos Kosmos',
    description:
      'Sitios en código, sin templates. Diseño UX/UI a medida, SEO base, formularios, CMS y QA. "Desde" por WhatsApp.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.es,
    type: 'website',
  },
};

const FAQ = [
  {
    q: '¿Cuánto tarda una web?',
    a: 'Una landing bien hecha tarda entre 1 y 4 semanas, un sitio corporativo de 5 a 7 páginas entre 2 y 3 semanas, y un sitio con CMS para gestionar contenido entre 3 y 4 semanas. Depende de que tengas los textos y las fotos listas (si no, lo coordinamos).',
  },
  {
    q: '¿Qué incluye el servicio de web?',
    a: 'Arquitectura de contenido, diseño UX/UI a medida, desarrollo responsive, SEO on-page base, formularios, integración con CMS si hace falta, QA en varios dispositivos y publicación con dominio. Te dejamos todo documentado para que podás editar lo que cambia seguido.',
  },
  {
    q: '¿Trabajan con WordPress, Webflow o Wix?',
    a: 'No. Hacemos todo en código (Next.js), sin plantillas ni constructores. El resultado es más rápido, más legible para Google y más fácil de escalar que una web montada sobre un builder.',
  },
  {
    q: '¿Cuánto cuesta una página web?',
    a: 'Cotizamos cada proyecto por alcance: una landing no es lo mismo que un sitio con reservas o un catálogo de productos. Te pasamos el "desde" por WhatsApp con una llamada corta o un cuestionario de 5 preguntas.',
  },
  {
    q: '¿Cómo es el pago?',
    a: 'Trabajamos con transferencia: 50% al comenzar el proyecto y 50% al entregar. Para proyectos largos acordamos pagos intermedios por hito.',
  },
  {
    q: '¿Después de la entrega quién se ocupa de los cambios?',
    a: 'Si querés gestionar el sitio por tu cuenta, te dejamos un CMS liviano y un instructivo corto. Si preferís delegarlo, ofrecemos mantenimiento mensual.',
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
          primaryLabel="Contanos tu web por WhatsApp"
          primaryText={WHATSAPP_TEXTS.websites}
          note="Te pasamos el “desde” en la primera respuesta."
        />
        <Includes
          locale={LOCALE}
          h2="Qué incluye tu web."
          items={[
            'Reunión de brief y cuestionario para entender el negocio.',
            'Arquitectura de contenido y wireframes antes de diseñar.',
            'Diseño UX/UI a medida (sin templates), con sistema reutilizable.',
            'Desarrollo responsive en código (Next.js), rápido y accesible.',
            'SEO on-page base: titles, descripciones, hreflang, schema y sitemap.',
            'CMS liviano para editar textos, imágenes y entradas sin tocar código.',
            'Formularios de contacto y conexión con WhatsApp.',
            'QA en varios dispositivos y navegadores antes de publicar.',
            'Dominio, hosting y publicación guiada.',
            'Documentación corta de cómo mantener el sitio.',
          ]}
          note="Lo que no entra por default: estrategia editorial, carga masiva de contenido y ecommerce con cientos de productos. Se cotizan aparte si hacen falta."
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Webs que hicimos."
          intro="Páginas web para empresas de turismo como MareBoats y DeltaRowing, y para marcas de cosmética, deporte, web3 y marca personal. Mismo foco: que se lea rápido y guíe a la acción."
          slugs={['calmo', 'the-red-guild', 'mareboats', 'ethperience', 'fede-garcia', 'deltarowling']}
        />
        <Process
          locale={LOCALE}
          h2="Cómo trabajamos."
          intro="Sin vueltas infinitas. Sin desaparecer a mitad del proyecto. 2–3 rondas de feedback por entregable y entregas por hito."
          steps={[
            { title: '01 · Brief', text: 'Cuestionario corto para entender negocio, objetivos y referencias.' },
            { title: '02 · Moodboard y arquitectura', text: 'Referencias visuales y mapa de la web antes de abrir Figma.' },
            { title: '03 · Diseño y desarrollo', text: 'Diseño UX/UI y desarrollo en paralelo. Prototipos navegables.' },
            { title: '04 · QA y publicación', text: 'Testing en dispositivos, carga de contenido, dominio y publicación.' },
          ]}
          closing="Menos drama. Más progreso."
        />
        <Pricing
          locale={LOCALE}
          h2="Cuánto cuesta."
          priceFrom="[CONFIRMAR]"
          detail="Cotizamos cada proyecto por alcance. Una landing page para un negocio con un solo servicio arranca abajo de un sitio corporativo con CMS; un sitio con reservas o integraciones queda arriba. Te pasamos el número en el primer mensaje."
          payment="Pago en transferencia: 50% al comenzar, 50% al entregar."
          primaryLabel="Pedí tu “desde”"
          primaryText={WHATSAPP_TEXTS.websites}
        />
        <Faq locale={LOCALE} h2="Preguntas frecuentes sobre nuestras webs." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="¿Hablamos de tu web?"
          lead="¿Necesitás una página web para tu negocio? Contanos qué hacés y para qué querés usar el sitio. Te respondemos con alcance, plazos y el “desde”."
          primaryLabel="Contanos tu web por WhatsApp"
          primaryText={WHATSAPP_TEXTS.websites}
        />
      </main>
      <Footer locale={LOCALE} />
      <StickyCta locale={LOCALE} text={WHATSAPP_TEXTS.websites} />
    </>
  );
}
