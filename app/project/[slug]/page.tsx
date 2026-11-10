import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectHero } from '@/components/sections/ProjectHero';
import { ProjectGallery } from '@/components/sections/ProjectGallery';
import { NextProject } from '@/components/sections/NextProject';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, creativeWorkSchema } from '@/lib/schema';
import { absoluteUrl, pathFor } from '@/lib/urls';
import { SITE } from '@/lib/site';
import { projects, getProject } from '@/content/projects';

const LOCALE = 'es' as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  const path = ['project', project.slug];
  const canonical = pathFor(LOCALE, path);
  const title = `${project.name}: caso de estudio`;
  return {
    title,
    description: project.summary,
    alternates: { canonical },
    openGraph: {
      title: `${title} — Somos Kosmos`,
      description: project.oneLine,
      url: absoluteUrl(canonical),
      locale: SITE.ogLocale.es,
      type: 'article',
      images: project.image
        ? [{ url: project.image, width: 1200, height: 900, alt: project.name }]
        : [{ url: SITE.ogImage }],
    },
  };
}

export default function ProjectCasePage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const path = ['project', project.slug];
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const nextIdx = (idx + 1) % projects.length;
  const next = projects[nextIdx]!;
  const canonical = pathFor(LOCALE, path);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('es', []) },
          { name: 'Trabajo', path: pathFor('es', []) + '#work' },
          { name: project.name, path: canonical },
        ])}
      />
      <JsonLd
        data={creativeWorkSchema({
          name: project.name,
          description: project.summary,
          url: canonical,
          image: project.image,
        })}
      />
      <Header locale={LOCALE} />
      <main>
        <ProjectHero
          locale={LOCALE}
          project={project}
        />
        <section className="section">
          <div className="container grid gap-10 md:grid-cols-[1fr_1.6fr] md:items-start">
            <aside className="md:sticky md:top-24 flex flex-col gap-4 text-sm">
              <div>
                <span className="eyebrow block mb-2">Servicio</span>
                <ul className="flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <li key={s}>
                      <Link
                        href={pathFor(LOCALE, ['services', s])}
                        className="rounded-full border border-line px-3 py-1 hover:border-accent hover:text-accent"
                      >
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {project.externalUrl ? (
                <div>
                  <span className="eyebrow block mb-2">Sitio en vivo</span>
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent break-all underline-offset-4 hover:underline"
                  >
                    {project.externalUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </a>
                </div>
              ) : null}
            </aside>
            <div className="prose-like text-fg">
              <p className="text-xl md:text-2xl leading-relaxed">{project.summary}</p>
              {project.needsThumbnail ? (
                <p className="mt-6 text-sm text-fg-muted">
                  [CONFIRMAR: thumbnail definitivo del caso. Mientras tanto se muestra el placeholder de marca.]
                </p>
              ) : null}
            </div>
          </div>
        </section>
        {project.gallery?.length ? (
          <ProjectGallery images={project.gallery} alt={project.name} />
        ) : null}
        <ClosingCta
          locale={LOCALE}
          h2={`¿Querés algo parecido a ${project.name}?`}
          lead={`Trabajamos ${project.services.join(' + ')} con el mismo equipo. Contanos tu proyecto y te pasamos el "desde".`}
        />
        <NextProject locale={LOCALE} next={next} />
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
