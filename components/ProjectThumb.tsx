import Image from 'next/image';
import type { ProjectCase } from '@/content/projects';
import { KStar } from './KStar';

export function ProjectThumb({ project }: { project: ProjectCase }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.name} — ${project.oneLine}`}
        width={960}
        height={720}
        className="h-full w-full object-cover"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />
    );
  }
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-surface text-fg">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-lines opacity-60"
      />
      {/* Placeholder de marca, sin texto visible (casos sin imagen ni sitio online). */}
      <KStar className="relative w-10 h-10 text-accent" />
      <span className="sr-only">{project.name}</span>
    </div>
  );
}
