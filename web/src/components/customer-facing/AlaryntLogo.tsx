type AlaryntLogoProps = {
  variant?: "wordmark" | "monochrome" | "icon";
  className?: string;
};

export function AlaryntLogo({ variant = "wordmark", className = "" }: AlaryntLogoProps) {
  if (variant === "icon") {
    return (
      <span
        aria-label="Alarynt"
        className={`inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--brand-primary)] text-white ${className}`}
        role="img"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path d="M12 3L21 21H3L12 3Z" fill="currentColor" />
        </svg>
      </span>
    );
  }

  const textClass = variant === "monochrome" ? "text-white" : "text-[var(--foreground)]";
  const accentClass = variant === "monochrome" ? "text-white" : "text-[var(--brand-accent)]";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className={`inline-flex h-8 w-8 items-center justify-center rounded-md ${variant === "monochrome" ? "bg-white/15" : "bg-[var(--brand-primary)]"}`}
      >
        <svg viewBox="0 0 24 24" className={`h-4 w-4 ${variant === "monochrome" ? "text-white" : "text-white"}`}>
          <path d="M12 3L21 21H3L12 3Z" fill="currentColor" />
        </svg>
      </span>
      <span className={`text-lg font-bold tracking-tight ${textClass}`}>
        Alar<span className={accentClass}>y</span>nt
      </span>
    </span>
  );
}
