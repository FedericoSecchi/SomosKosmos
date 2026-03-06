const TOPIC_LABELS: Record<string, string> = {
  branding: "branding",
  "design-system": "design system",
  typography: "typography",
  "visual-language": "visual language",
  "case-study": "case study",
};

export interface TopicContent {
  title: string;
  description: string;
}

/**
 * Generates SEO title and description for a project topic page.
 */
export function generateTopicContent(
  projectTitle: string,
  topic: string
): TopicContent {
  const label = TOPIC_LABELS[topic] ?? topic;
  return {
    title: `${projectTitle} ${label} | Kosmos Studio`,
    description: `${projectTitle} ${label} exploration by Kosmos Studio. Branding, visual identity and design system development.`,
  };
}
