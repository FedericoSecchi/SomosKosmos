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
const PATH = ['services', 'branding'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('branding');

export const metadata: Metadata = {
  title: 'Diseño de identidad de marca — Somos Kosmos',
  description:
    'Diseñamos la identidad visual de tu marca: logo, tipografía, color, piezas y guías de uso real. Para pymes, startups y marcas personales que quieren una imagen clara.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Diseño de identidad de marca · Somos Kosmos',
    description:
      'Creamos una imagen clara y profesional para que te reconozcan y confíen en vos. Logo, tipografía, color y sistema completo.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.es,
    type: 'website',
  },
};

const FAQ = [
  {
    q: '¿Qué recibo al final del proyecto de branding?',
    a: 'Un sistema completo de identidad: logo en todas sus versiones, tipografía principal y secundaria, paleta de color, íconos o recursos gráficos propios, piezas de ejemplo para redes y una guía de marca con reglas de uso para que cualquier persona del equipo (o un proveedor) use la marca igual.',
  },
  {
    q: '¿Cuánto tarda un proceso de branding?',
    a: '[CONFIRMAR: tiempo típico]. Depende de la cantidad de puntos de contacto y de la velocidad de feedback. Hacemos 2–3 rondas por entregable para evitar que se eternice.',
  },
  {
    q: '¿Hacen rebranding si ya tengo una marca?',
    a: 'Sí. Es un trabajo distinto al de empezar de cero: parte del valor es decidir qué conservar y qué cambiar sin perder reconocimiento. Nude es un ejemplo: refrescamos la identidad sin romper lo que ya funcionaba.',
  },
  {
    q: '¿Puedo contratar branding y web juntos?',
    a: 'Sí, y es lo más eficiente. Trabajamos marca y sitio en paralelo con el mismo equipo. Lo ves en Calmo, The Red Guild y Nude.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Cotizamos cada proyecto por alcance (puntos de contacto, idiomas, cantidad de piezas). Te pasamos el "desde" por WhatsApp después de una llamada corta o un cuestionario de 5 preguntas.',
  },
  {
    q: '¿Entregan los archivos editables?',
    a: 'Sí. Dejamos los archivos de Figma, los vectores (SVG/PDF) y la guía de marca en PDF para que puedas seguir trabajando con cualquier equipo creativo después.',
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
          h1="Creamos una imagen clara y profesional para que te reconozcan y confíen en vos."
          lead="Diseñamos la identidad visual de tu marca: logo, tipografía, color y recursos propios. Terminamos con una guía corta y usable para que la marca viva igual en cada punto de contacto."
          primaryLabel="Contanos tu marca por WhatsApp"
          primaryText={WHATSAPP_TEXTS.branding}
          note="Diseñar sin estrategia no es una opción."
        />
        <Includes
          locale={LOCALE}
          h2="Qué incluye tu identidad de marca."
          items={[
            'Reunión de brief y cuestionario de posicionamiento.',
            'Moodboard visual y referencias validadas antes de diseñar.',
            'Diseño de logotipo e isotipo con variantes de uso.',
            'Tipografías principal y secundaria con reglas de combinación.',
            'Paleta de color con usos primarios y secundarios.',
            'Recursos gráficos propios: íconos, patrones, stickers.',
            'Piezas de ejemplo para redes, decks y papelería básica.',
            'Guía de marca en PDF con reglas de uso real.',
            'Archivos editables (Figma, SVG, PDF, PNG) listos para usar.',
          ]}
          note="Si querés que también hagamos la web, trabajamos marca y sitio en paralelo con el mismo equipo."
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Marcas que diseñamos."
          intro="Seguridad web3, cosmética natural, bienestar y gastronomía artesanal. Distintos rubros, mismo cuidado."
          slugs={['security-alliance', 'nude', 'orbita', 'pancito', 'calmo', 'the-red-guild']}
        />
        <Process
          locale={LOCALE}
          h2="Cómo trabajamos tu marca."
          intro="Trabajamos por hitos. Cada etapa tiene 2–3 rondas de feedback y una fecha de cierre acordada."
          steps={[
            { title: '01 · Brief y estrategia', text: 'Entender el negocio, el cliente y el territorio competitivo.' },
            { title: '02 · Moodboard', text: 'Dirección visual, referencias y tono validados por escrito.' },
            { title: '03 · Diseño del sistema', text: 'Logo, tipografía, color, recursos y piezas de ejemplo.' },
            { title: '04 · Guía y entrega', text: 'Guía de marca, archivos editables y reunión de lanzamiento.' },
          ]}
          closing="Ser uno más no es una opción."
        />
        <Pricing
          locale={LOCALE}
          h2="Cuánto cuesta tu identidad."
          priceFrom="[CONFIRMAR]"
          detail="El “desde” cubre marca para un negocio chico con hasta 5 puntos de contacto. Rebranding, marcas con varias líneas y sistemas más grandes se cotizan aparte."
          payment="Pago en transferencia: 50% al comenzar, 50% al entregar."
          primaryLabel="Pedí tu “desde”"
          primaryText={WHATSAPP_TEXTS.branding}
        />
        <Faq locale={LOCALE} h2="Preguntas frecuentes sobre branding." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="¿Hablamos de tu marca?"
          lead="Contanos qué tenés hoy (si tenés algo) y a dónde querés llegar. Te respondemos con una propuesta concreta."
          primaryLabel="Contanos tu marca por WhatsApp"
          primaryText={WHATSAPP_TEXTS.branding}
        />
      </main>
      <Footer locale={LOCALE} />
      <StickyCta locale={LOCALE} text={WHATSAPP_TEXTS.branding} />
    </>
  );
}
