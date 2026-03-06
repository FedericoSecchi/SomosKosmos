import { useParams, Navigate } from "react-router-dom";
import { projectTopics } from "@/seo/projectTopics";
import { getProjectById } from "@/data/projects";
import ProjectCase from "./ProjectCase";

/**
 * Validates topic param and renders ProjectCase for programmatic SEO topic pages.
 * Invalid topics redirect to the main project page.
 */
const ProjectTopic = () => {
  const { projectId, topic } = useParams<{ projectId: string; topic?: string }>();

  if (!topic || !projectTopics.includes(topic)) {
    return <Navigate to={projectId ? `/project/${projectId}` : "/"} replace />;
  }

  const project = projectId ? getProjectById(projectId) : undefined;
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return <ProjectCase />;
};

export default ProjectTopic;
