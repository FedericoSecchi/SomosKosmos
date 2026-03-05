const SITE_URL = "https://somoskosmos.com";

export interface ProjectSchemaInput {
  /** Project title (for schema name and breadcrumb) */
  title: string;
  /** Meta/SEO description */
  description: string;
  /** Full URL of cover/og image */
  coverImage: string;
  /** URL path slug (e.g. project id) */
  slug: string;
  /** Optional keywords (string or array) */
  tags?: string | string[];
}

/**
 * Generates Schema.org CreativeWork JSON-LD for a project/case study page.
 */
export function generateProjectSchema(project: ProjectSchemaInput) {
  const url = `${SITE_URL}/project/${project.slug}`;
  const keywords =
    typeof project.tags === "string"
      ? project.tags
      : Array.isArray(project.tags)
        ? project.tags
        : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.coverImage,
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: "Kosmos Studio",
      url: SITE_URL,
    },
    creator: {
      "@type": "Organization",
      name: "Kosmos Studio",
    },
    datePublished: "2024-01-01",
    publisher: {
      "@type": "Organization",
      name: "Kosmos Studio",
      url: SITE_URL,
    },
    ...(keywords && (Array.isArray(keywords) ? { keywords } : { keywords: [keywords] })),
  };
}

/**
 * Generates Schema.org BreadcrumbList JSON-LD for project page hierarchy.
 */
export function generateBreadcrumbSchema(project: { title: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: SITE_URL + "/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${SITE_URL}/project/${project.slug}`,
      },
    ],
  };
}
