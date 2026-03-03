import securityAllianceImage from "@/assets/projects/security-alliance/hero.jpg";
import securityGallery1 from "@/assets/projects/security-alliance/gallery-1.jpg";
import securityGallery2 from "@/assets/projects/security-alliance/gallery-2.jpg";
import securityGallery3 from "@/assets/projects/security-alliance/gallery-3.jpg";
import securityGallery4 from "@/assets/projects/security-alliance/gallery-4.jpg";
import theRedGuildImage from "@/assets/projects/the-red-guild/hero.jpg";
import redGuildGallery1 from "@/assets/projects/the-red-guild/gallery-1.jpg";
import redGuildGallery2 from "@/assets/projects/the-red-guild/gallery-2.jpg";
import redGuildGallery3 from "@/assets/projects/the-red-guild/gallery-3.jpg";
import redGuildGallery4 from "@/assets/projects/the-red-guild/gallery-4.jpg";
import redGuildGallery5 from "@/assets/projects/the-red-guild/gallery-5.jpg";
import redGuildGallery6 from "@/assets/projects/the-red-guild/gallery-6.jpg";
import orbitaImage from "@/assets/projects/orbita/hero.jpg";
import orbitaGallery1 from "@/assets/projects/orbita/gallery-1.jpg";
import orbitaGallery2 from "@/assets/projects/orbita/gallery-2.jpg";
import orbitaGallery3 from "@/assets/projects/orbita/gallery-3.jpg";
import orbitaGallery4 from "@/assets/projects/orbita/gallery-4.jpg";

export type ProjectLayout = "premium" | "default";

export interface Project {
  id: string;
  image: string;
  size: "large" | "medium";
  layout?: ProjectLayout;
  galleries?: string[];
}

export const projectsData: Project[] = [
  {
    id: "security-alliance",
    image: securityAllianceImage,
    size: "large",
    layout: "premium",
    galleries: [securityGallery1, securityGallery2, securityGallery3, securityGallery4],
  },
  {
    id: "the-red-guild",
    image: theRedGuildImage,
    size: "medium",
    layout: "premium",
    galleries: [
      redGuildGallery1,
      redGuildGallery2,
      redGuildGallery3,
      redGuildGallery4,
      redGuildGallery5,
      redGuildGallery6,
    ],
  },
  {
    id: "orbita",
    image: orbitaImage,
    size: "large",
    layout: "premium",
    galleries: [orbitaGallery1, orbitaGallery2, orbitaGallery3, orbitaGallery4],
  },
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};
