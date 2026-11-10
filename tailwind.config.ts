import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: { center: true, padding: '1.25rem', screens: { '2xl': '1200px' } },
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        accent: { DEFAULT: 'var(--color-accent)', hover: 'var(--color-accent-hover)' },
        fg: { DEFAULT: 'var(--color-fg)', muted: 'var(--color-fg-muted)' },
        line: 'var(--color-line)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.125rem, 6vw, 5.625rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
      },
      borderRadius: { sm: '0.25rem', md: '0.5rem', lg: '1rem' },
      spacing: { section: '5rem' },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,.12), 0 8px 24px rgba(0,0,0,.08)',
        glow: '0 4px 20px rgba(111,226,60,.15)',
      },
      transitionTimingFunction: { spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
    },
  },
  plugins: [],
};

export default config;
