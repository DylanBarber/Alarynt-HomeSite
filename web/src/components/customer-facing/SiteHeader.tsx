import { AlaryntLogo } from "@/components/customer-facing/AlaryntLogo";

type SiteHeaderProps = {
  adminLoginHref: string;
};

export function SiteHeader({ adminLoginHref }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--brand-muted)] bg-[var(--brand-surface)]/95 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <a href="#mission" className="text-sm font-semibold tracking-wide">
          <AlaryntLogo />
        </a>
        <ul className="flex items-center gap-4 text-sm text-[var(--foreground)] sm:gap-6">
          <li>
            <a className="hover:underline" href="#mission">
              Mission
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#capabilities">
              Capabilities
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="rounded-md bg-[var(--brand-primary)] px-3 py-2 text-[var(--background)]" href={adminLoginHref}>
              Admin Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
