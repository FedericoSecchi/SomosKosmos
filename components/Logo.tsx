// Logo de marca (public/branding/logo-light.png, 372×115): versión clara para fondo #222.
export function Logo({ height = 32, className = '' }: { height?: number; className?: string }) {
  const width = Math.round((height * 372) / 115);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/branding/logo-light.png"
      alt="Somos Kosmos"
      width={width}
      height={height}
      className={className}
      decoding="async"
    />
  );
}
