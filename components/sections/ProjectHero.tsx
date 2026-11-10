import type { Locale } from '@/lib/site';
import type { ProjectCase } from '@/content/projects';
import { CtaRow } from '../CtaRow';
import { ProjectThumb } from '../ProjectThumb';

export function ProjectHero({
  locale,
  project,
  primaryLabel,
  primaryText,
}: {
  locale: Locale;
  project: ProjectCase;
  primaryLabel: string;
  primaryText: string;
}) {
  const name = locale === 'es' ? project.name : (project.nameEN ?? project.name);
  const oneLine = locale === 'es' ? project.oneLine : (project.oneLineEN ?? project.oneLine);
  const servicesLabel = project.services.join(' · ');
  return (
    <section className="relative overflow-hidden border-b border-line" data-hero>
      <div className="container relative py-16 md:py-24 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">{servicesLabel}</span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">{name}</h1>
          <p className="text-fg-muted text-lg md:text-xl max-w-xl">{oneLine}</p>
          <div className="mt-2">
            <CtaRow locale={locale} primaryLabel={primaryLabel} primaryText={primaryText} />
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface">
          <ProjectThumb project={project} />
        </div>
      </div>
    </section>
  );
}
