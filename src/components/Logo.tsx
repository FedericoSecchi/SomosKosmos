export default function Logo({
  variant = "dark",
  size = 120,
}: {
  variant?: "dark" | "light";
  size?: number;
}) {
  const src =
    variant === "dark"
      ? "/branding/logo-dark.png"
      : "/branding/logo-light.png";

  return (
    <img
      src={src}
      alt="Kosmos Studio logo"
      width={size}
      loading="eager"
      style={{ display: "block" }}
    />
  );
}
