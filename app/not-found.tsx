import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header locale="es" />
      <main className="container py-24 min-h-[60vh] flex flex-col items-start justify-center gap-6">
        <span className="eyebrow">404</span>
        <h1 className="text-5xl md:text-7xl">Esta página no existe.</h1>
        <p className="text-fg-muted max-w-xl">
          Puede que haya cambiado de lugar o que el enlace esté roto. Volvé al inicio o escribinos
          si estás buscando algo específico.
        </p>
        <Link href="/" className="btn-primary">Volver al inicio</Link>
      </main>
      <Footer locale="es" />
    </>
  );
}
