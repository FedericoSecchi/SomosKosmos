interface SeoImageProps {
  src: string;
  projectTitle: string;
  topic?: string;
  className?: string;
  loading?: "lazy" | "eager";
}

/**
 * Image component with consistent SEO alt text for project/case study imagery.
 */
export default function SeoImage({
  src,
  projectTitle,
  topic,
  className,
  loading = "lazy",
}: SeoImageProps) {
  const alt = topic
    ? `${projectTitle} ${topic.replace(/-/g, " ")} visual identity design`
    : `${projectTitle} branding project visual identity design`;

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      style={className ? undefined : { width: "100%", height: "auto" }}
    />
  );
}
