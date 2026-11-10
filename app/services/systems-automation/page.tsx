import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Includes } from '@/components/sections/Includes';
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
const PATH = ['services', 'systems-automation'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('systems-automation');

export const metadata: Metadata = {
  title: 'Automatización de WhatsApp y procesos para negocios',
  description:
    'Automatizamos mensajes, ventas y procesos de atención: bots de WhatsApp, flujos en n8n e integraciones. Para pymes que quieren dejar de responder y cargar todo a mano.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Automatización de WhatsApp y procesos — Somos Kosmos',
    description:
      'Tu negocio funcionando solo. Bots de WhatsApp, flujos en n8n, integraciones y seguimiento automático de ventas.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.es,
    type: 'website',
  },
};

const FAQ = [
  {
    q: '¿Qué pueden automatizar?',
    a: 'Respuestas y seguimiento de clientes por WhatsApp, procesos de venta, integraciones entre las herramientas que ya usás y cualquier flujo que hoy hagas a mano y se repita. Hacemos todo lo que se pueda conectar por API o por WhatsApp Business.',
  },
  {
    q: '¿Hace falta tener algo antes de empezar?',
    a: 'Nos sirven: una cuenta de WhatsApp Business (o la posibilidad de abrirla), acceso a las herramientas que ya usás (planillas, CRM, calendarios, mails) y una lista corta de las cosas que te comen tiempo. Si no sabés por dónde empezar, lo mapeamos juntos en la primera llamada.',
  },
  {
    q: '¿Hacen las automatizaciones con n8n o con otra herramienta?',
    a: 'Los flujos los armamos en n8n y los bots, sobre WhatsApp. Para cada integración usamos lo que pida el proyecto. [CONFIRMAR: otras herramientas que usan habitualmente]',
  },
  {
    q: '¿Después se puede cambiar?',
    a: 'Sí, el flujo se puede modificar después de la entrega. También ofrecemos mantenimiento mensual: las condiciones las vemos según el proyecto.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Cotizamos cada proyecto por alcance. Te pasamos el número en la primera llamada.',
  },
  {
    q: '¿Qué es un sistema de diseño y por qué lo ofrecen junto?',
    a: 'Un sistema de diseño es un conjunto de componentes, estilos y reglas para que tu marca se mantenga igual en todas las piezas (web, redes, mails, decks). Es la contracara del bot: automatiza la forma en que la marca comunica, no solo lo que responde.',
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('es', []) },
          { name: 'Servicios', path: pathFor('es', ['services', 'websites']) },
          { name: 'Sistemas & Automatizaciones', path: pathFor('es', ['services', 'systems-automation']) },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          slug: 'systems-automation',
          name: SERVICE.title,
          description:
            'Automatización de WhatsApp, procesos de ventas, flujos entre herramientas y sistemas de diseño para equipos chicos.',
          url: CANONICAL,
        })}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Header locale={LOCALE} />
      <main>
        <Hero
          locale={LOCALE}
          eyebrow="Servicio · Sistemas & Automatizaciones"
          h1="Automatización de WhatsApp para negocios que quieren dejar de responder todo a mano."
          lead="Tu negocio funcionando solo. Automatizamos mensajes, procesos de ventas y atención para que ahorres tiempo: bots de WhatsApp, flujos en n8n, integraciones entre herramientas y sistemas de diseño que mantienen la marca en orden."
          note="Hacemos todo lo que se pueda conectar por API o por WhatsApp Business."
        />
        <Includes
          locale={LOCALE}
          h2="Qué podemos resolver."
          items={[
            'Chatbot de WhatsApp para empresas: menú, respuestas y derivación a una persona.',
            'Flujos de atención y venta en n8n.',
            'Integraciones entre CRM, planillas, calendarios y facturación.',
            'Respuesta y seguimiento automático de clientes nuevos.',
            'Confirmaciones de reservas, pagos y recordatorios.',
            'Carga de datos de redes/formularios al CRM.',
            'Sistemas de diseño para que las piezas salgan iguales.',
          ]}
          note="Casos puntuales (ejemplos propios) se agregan acá cuando el cliente autoriza mostrarlos [CONFIRMAR: ejemplo publicable]."
        />
        <Process
          locale={LOCALE}
          h2="Cómo lo hacemos."
          intro="Arrancamos por el proceso que más tiempo te come y después sumamos. 2–3 rondas de feedback por entregable."
          steps={[
            { title: '01 · Mapeo', text: 'Vemos qué hacés hoy a mano y por dónde se pierde tiempo.' },
            { title: '02 · Primer flujo', text: 'Armamos el flujo que más tiempo te ahorra y lo activamos.' },
            { title: '03 · Pruebas', text: 'Lo probamos y ajustamos.' },
            { title: '04 · Entrega', text: 'Traspaso al equipo. [CONFIRMAR: qué se entrega al final]' },
          ]}
          closing="Menos drama. Más progreso."
        />
        <Pricing
          locale={LOCALE}
          h2="Cuánto cuesta."
        />
        <Faq locale={LOCALE} h2="Preguntas frecuentes sobre automatizaciones." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="¿Qué querés dejar de hacer a mano?"
          lead="Contanos el proceso que más tiempo te come. Te decimos si se puede automatizar y cuánto cuesta."
        />
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
