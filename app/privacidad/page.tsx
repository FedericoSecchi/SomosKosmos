import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { pathFor } from '@/lib/urls';

const LOCALE = 'es' as const;

export const metadata: Metadata = {
  title: 'Política de privacidad — Somos Kosmos',
  description:
    'Cómo tratamos los datos que recibimos cuando nos escribís por WhatsApp, email o agendás una llamada.',
  alternates: { canonical: pathFor(LOCALE, ['privacidad']) },
  robots: { index: true, follow: true },
};

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
          <p className="text-fg-muted text-sm">
            Última actualización: [CONFIRMAR: fecha]. El texto definitivo lo redacta el equipo legal
            de Somos Kosmos; esta versión cumple con lo mínimo mientras se completa.
          </p>

          <h2 className="text-2xl mt-10">1. Quién administra tus datos.</h2>
          <p>
            Los datos los administra Somos Kosmos ([CONFIRMAR: razón social], Argentina).
            Para consultas sobre esta política escribinos a{' '}
            <a href="mailto:hello@somoskosmos.com" className="text-accent hover:underline">
              hello@somoskosmos.com
            </a>.
          </p>

          <h2 className="text-2xl mt-10">2. Qué datos recibimos.</h2>
          <p>
            Cuando nos escribís por WhatsApp o email, o agendás una llamada por Calendly, recibimos tu nombre, el canal de contacto que elegiste (número de teléfono o
            email) y la información que incluyas en el mensaje. También podemos registrar la fecha
            de la primera conversación.
          </p>
          <p>
            Si navegás la web, nuestro proveedor de analítica puede registrar datos agregados y
            anónimos (páginas visitadas, dispositivo, origen de la visita). No usamos herramientas
            de perfilado individual ni retargeting.
          </p>

          <h2 className="text-2xl mt-10">3. Para qué los usamos.</h2>
          <p>
            Para responder tu consulta, armarte una propuesta, hacer seguimiento del proyecto y
            cumplir con las obligaciones legales mientras dure la relación comercial. No vendemos
            tus datos a terceros.
          </p>

          <h2 className="text-2xl mt-10">4. Quién los puede ver.</h2>
          <p>
            Los datos quedan en nuestras herramientas de trabajo (correo, Google Workspace, WhatsApp
            Business, Calendly, un sistema interno de proyectos). Trabajamos con proveedores
            internacionales confiables; cada uno tiene su propia política de privacidad.
          </p>

          <h2 className="text-2xl mt-10">5. Cuánto tiempo los guardamos.</h2>
          <p>
            Mientras exista relación comercial o legal con vos. Si no avanzamos con un proyecto y
            no volvemos a tener contacto por 24 meses, se eliminan.
          </p>

          <h2 className="text-2xl mt-10">6. Tus derechos.</h2>
          <p>
            Podés pedirnos ver, corregir o borrar tus datos escribiendo a{' '}
            <a href="mailto:hello@somoskosmos.com" className="text-accent hover:underline">
              hello@somoskosmos.com
            </a>. Nos tomamos hasta 10 días hábiles en responder.
          </p>

          <p className="text-fg-muted text-sm mt-10">
            [CONFIRMAR: texto definitivo con el detalle legal (Ley 25.326 en Argentina, inscripción
            de base de datos si corresponde, cláusulas internacionales si trabajan con clientes de
            la UE).]
          </p>
        </section>
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
