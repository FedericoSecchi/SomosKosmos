import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCta } from '@/components/StickyCta';
import { Hero } from '@/components/sections/Hero';
import { Includes } from '@/components/sections/Includes';
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
const PATH = ['services', 'systems-automation'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('systems-automation');

export const metadata: Metadata = {
  title: 'Automatización de WhatsApp y procesos para negocios — Somos Kosmos',
  description:
    'Automatizamos mensajes, ventas y procesos de atención: bots de WhatsApp, flujos en n8n e integraciones. Para pymes que quieren dejar de responder y cargar todo a mano.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Automatización de WhatsApp y procesos · Somos Kosmos',
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
    a: 'Respuestas y seguimiento de clientes por WhatsApp, carga de datos entre sistemas (CRM, planillas, facturación), reservas y confirmaciones, envío de newsletters, generación de reportes y cualquier flujo que hoy hagas a mano y se repita. Hacemos todo lo que se pueda conectar por API o por WhatsApp Business.',
  },
  {
    q: '¿Hace falta tener algo antes de empezar?',
    a: 'Nos sirven: una cuenta de WhatsApp Business (o la posibilidad de abrirla), acceso a las herramientas que ya usás (planillas, CRM, calendarios, mails) y una lista corta de las cosas que te comen tiempo. Si no sabés por dónde empezar, lo mapeamos juntos en la primera llamada.',
  },
  {
    q: '¿Usan n8n u otra herramienta?',
    a: 'Usamos n8n cuando tiene sentido (open source, se autohospeda, se puede migrar). Para integraciones específicas también usamos la API de WhatsApp, OpenAI/Claude si hace falta un paso de IA, y lo que requiera el proyecto. Trabajamos sobre tu infraestructura, no sobre la nuestra.',
  },
  {
    q: '¿Después se puede cambiar?',
    a: 'Sí. Dejamos el flujo documentado y, si querés, un tablero simple para que modifiques respuestas y mensajes sin tocar código. Si lo preferís, nos quedamos con el mantenimiento mensual.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Cotizamos por alcance. Un bot de WhatsApp con 3 flujos simples no cuesta lo mismo que un sistema conectado al CRM que automatiza reservas y facturación. Te pasamos el "desde" después de una llamada corta.',
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
          h1="Tu negocio funcionando solo."
          lead="Automatizamos mensajes, ventas y procesos para que ahorres tiempo. Bots de WhatsApp, flujos en n8n, integraciones entre herramientas y sistemas de diseño que mantienen la marca en orden."
          primaryLabel="Contanos qué querés automatizar"
          primaryText={WHATSAPP_TEXTS.systems}
          note="Hacemos todo lo que se pueda conectar por API o por WhatsApp Business."
        />
        <Includes
          locale={LOCALE}
          h2="Qué podemos resolver."
          items={[
            'Bots de WhatsApp Business con menú, respuestas y derivación a persona.',
            'Flujos de atención y venta en n8n (open source, autohospedable).',
            'Integraciones entre CRM, planillas, calendarios y facturación.',
            'Respuesta y seguimiento automático de clientes nuevos.',
            'Confirmaciones de reservas, pagos y recordatorios.',
            'Envío de reportes mensuales por mail o Slack.',
            'Carga de datos de redes/formularios al CRM.',
            'Automatizaciones con IA cuando aportan (resúmenes, clasificación de leads).',
            'Sistemas de diseño en Figma para que las piezas salgan iguales.',
          ]}
          note="Casos puntuales (ejemplos propios) se agregan acá cuando el cliente autoriza mostrarlos [CONFIRMAR: ejemplo publicable]."
        />
        <Process
          locale={LOCALE}
          h2="Cómo lo hacemos."
          intro="Hacemos lo mínimo que funcione primero, lo probamos con datos reales y después escalamos. Nada de sistemas grandes que nadie usa."
          steps={[
            { title: '01 · Mapeo', text: 'Vemos qué hacés hoy a mano y por dónde se pierde tiempo.' },
            { title: '02 · MVP', text: 'Armamos la versión mínima útil del flujo y la activamos.' },
            { title: '03 · Pruebas', text: 'Datos reales durante 1–2 semanas, ajustes y mejoras.' },
            { title: '04 · Entrega', text: 'Documentación, panel de control y traspaso al equipo.' },
          ]}
          closing="Menos drama. Más progreso."
        />
        <Pricing
          locale={LOCALE}
          h2="Cuánto cuesta."
          priceFrom="[CONFIRMAR]"
          detail="El “desde” cubre un flujo chico (bot con 3–4 respuestas y una integración). Sistemas más grandes se cotizan por alcance."
          payment="Pago en transferencia: 50% al comenzar, 50% al entregar. Hay opción de mantenimiento mensual después."
          primaryLabel="Pedí tu “desde”"
          primaryText={WHATSAPP_TEXTS.systems}
        />
        <Faq locale={LOCALE} h2="Preguntas frecuentes sobre automatizaciones." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="¿Qué querés dejar de hacer a mano?"
          lead="Contanos el proceso que más tiempo te come. Te decimos si se puede automatizar y cuánto cuesta."
          primaryLabel="Contanos qué querés automatizar"
          primaryText={WHATSAPP_TEXTS.systems}
        />
      </main>
      <Footer locale={LOCALE} />
      <StickyCta locale={LOCALE} text={WHATSAPP_TEXTS.systems} />
    </>
  );
}
