import type { Project } from "@/data/projects";

export interface CaseStudySection {
  title: string;
  text: string;
}

export interface GeneratedCaseStudy {
  headline: string;
  intro: string;
  sections: CaseStudySection[];
}

/**
 * Generates dynamic case study content for programmatic project × topic pages.
 */
export function generateCaseStudy(
  project: Project,
  projectTitle: string,
  topic: string
): GeneratedCaseStudy {
  const readableTopic = topic.replace(/-/g, " ");

  return {
    headline: `${projectTitle} ${readableTopic} case study`,
    intro: `This case study explores the ${readableTopic} process behind the ${projectTitle} project created by Kosmos Studio.`,
    sections: [
      {
        title: "Project Overview",
        text: `${projectTitle} is a branding and visual identity project developed by Kosmos Studio.`,
      },
      {
        title: "Design Approach",
        text: "The design process focused on creating a coherent visual identity system.",
      },
      {
        title: "Visual Identity",
        text: "The project includes logo design, typography and brand guidelines.",
      },
    ],
  };
}
