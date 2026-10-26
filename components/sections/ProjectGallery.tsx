import Image from 'next/image';

export function ProjectGallery({ images, alt }: { images: string[]; alt: string }) {
  if (!images.length) return null;
  return (
    <section className="section">
      <div className="container">
        <ul className="grid gap-5 md:grid-cols-2">
          {images.map((src, i) => (
            <li key={src} className="overflow-hidden rounded-lg border border-line bg-surface">
              <Image
                src={src}
                alt={`${alt} — pieza ${i + 1}`}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
