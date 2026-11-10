import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { pathFor } from '@/lib/urls';
import { SITE } from '@/lib/site';

const LOCALE = 'es' as const;

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Qué datos recibimos cuando agendás una llamada por Calendly o nos escribís a hello@somoskosmos.com, para qué los usamos y cómo pedir que los borremos.',
  alternates: { canonical: pathFor(LOCALE, ['privacidad']) },
  robots: { index: true, follow: true },
};

function Mail() {
  return (
    <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
      {SITE.email}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('es', []) },
          { name: 'Privacidad', path: pathFor('es', ['privacidad']) },
        ])}
      />
      <Header locale={LOCALE} />
      <main className="container py-16 max-w-3xl">
        <span className="eyebrow block mb-3">Política</span>
        <h1 className="text-5xl md:text-7xl mb-10">Privacidad.</h1>

        <section className="space-y-6 text-fg leading-relaxed">
          <h2 className="text-2xl mt-10">1. Responsable.</h2>
          <p>
            Somos Kosmos. Para cualquier consulta sobre tus datos escribinos a <Mail />.
          </p>

          <h2 className="text-2xl mt-10">2. Qué datos recibimos.</h2>
          <p>
            Esta web no tiene formularios ni pide datos. Solo recibimos lo que vos nos mandás por
            alguno de estos dos canales:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Llamada por Calendly.</strong> Si agendás una llamada, lo hacés en Calendly, un
              servicio externo con su propia política de privacidad. Nos llegan los datos que cargás
              ahí (nombre, email y lo que escribas al reservar) y el horario elegido.
            </li>
            <li>
              <strong>Email.</strong> Si nos escribís a <Mail />, recibimos tu dirección de correo y
              lo que incluyas en el mensaje.
            </li>
          </ul>

          <h2 className="text-2xl mt-10">3. Analítica y cookies.</h2>
          <p>
            Esta web no usa herramientas de analítica ni cookies de seguimiento. Las fuentes
            tipográficas se sirven desde el mismo sitio.
          </p>

          <h2 className="text-2xl mt-10">4. Para qué los usamos.</h2>
          <p>
            Para responder tu consulta, hacer la llamada y, si avanzamos, armar la propuesta y
            trabajar en el proyecto. No vendemos ni cedemos tus datos.
          </p>

          <h2 className="text-2xl mt-10">5. Ver, corregir o borrar tus datos.</h2>
          <p>
            Pedínoslo por email a <Mail /> y lo hacemos.
          </p>
        </section>
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
