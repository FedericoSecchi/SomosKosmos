export function KStar({ className = 'w-6 h-6', fill = 'currentColor' }: { className?: string; fill?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M50 2 L58 42 L98 50 L58 58 L50 98 L42 58 L2 50 L42 42 Z"
        fill={fill}
      />
    </svg>
  );
}
