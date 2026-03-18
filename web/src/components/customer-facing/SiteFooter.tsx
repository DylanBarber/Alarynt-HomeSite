import { AlaryntLogo } from "@/components/customer-facing/AlaryntLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--brand-muted)] bg-[var(--brand-surface)] px-4 py-8 text-sm text-white/85 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 sm:flex-row">
        <p className="flex items-center gap-2">
          <AlaryntLogo variant="monochrome" />
          <span>© {new Date().getFullYear()} Alarynt</span>
        </p>
        <p>Your data, organized and actionable.</p>
      </div>
    </footer>
  );
}
