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
      <div className="relative flex flex-col items-center gap-3 p-6 text-center">
        <KStar className="w-10 h-10 text-accent" />
        <span className="font-display font-bold uppercase tracking-wide text-base">
          {project.name}
        </span>
        <span className="text-xs text-fg-muted uppercase tracking-widest">
          Thumbnail pendiente
        </span>
      </div>
    </div>
  );
}
