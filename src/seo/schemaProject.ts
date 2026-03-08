import type { Project } from "@/data/projects";

const SITE_URL = "https://somoskosmos.com";

function toAbsoluteUrl(url: string): string {
  if (url.startsWith("http")) return url;
  return url.startsWith("/") ? `${SITE_URL}${url}` : `${SITE_URL}/${url}`;
}

/**
 * Creates Schema.org CreativeWork JSON-LD for a project (for programmatic/landing pages).
 */
export function createProjectSchema(project: Project, title: string, description?: string) {
  const imageUrl = toAbsoluteUrl(project.image);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    image: imageUrl,
    creator: {
      "@type": "Organization",
      name: "Kosmos Studio",
    },
    description: description ?? project.seoDescription ?? "Branding and visual identity project",
  };
}
