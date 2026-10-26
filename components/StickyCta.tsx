import { whatsappUrl } from '@/lib/whatsapp';
import type { Locale } from '@/lib/site';

export function StickyCta({ locale, text, label }: { locale: Locale; text: string; label?: string }) {
  const href = whatsappUrl(text);
  const defaultLabel = locale === 'es' ? 'Escribinos por WhatsApp' : 'Message us on WhatsApp';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      className="fixed bottom-4 right-4 z-50 btn-primary shadow-glow md:bottom-6 md:right-6"
      aria-label={label ?? defaultLabel}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 mr-2 -ml-1"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.07 0C5.47 0 .1 5.37.1 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.95 11.95 0 0 0 5.87 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.53-8.42zM12.07 21.8h-.01a9.78 9.78 0 0 1-4.98-1.37l-.36-.21-3.68.97.98-3.59-.24-.37a9.84 9.84 0 0 1-1.51-5.26c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.9 6.98c-.01 5.44-4.44 9.82-9.97 9.82zm5.4-7.37c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.76.96-.94 1.15c-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.11 3.22 5.11 4.52.71.3 1.27.48 1.71.62.72.23 1.37.2 1.89.12.58-.09 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
      <span className="hidden sm:inline">{label ?? defaultLabel}</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
