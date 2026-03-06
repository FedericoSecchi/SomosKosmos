/**
 * SEO topic slugs for programmatic topic pages.
 * Each project can have URLs like /project/:slug/branding, /project/:slug/design-system, etc.
 */
export const projectTopics = [
  "branding",
  "design-system",
  "typography",
  "visual-language",
  "case-study",
] as const;

export type ProjectTopicSlug = (typeof projectTopics)[number];

export function isValidTopic(topic: string): topic is ProjectTopicSlug {
  return (projectTopics as readonly string[]).includes(topic);
}
