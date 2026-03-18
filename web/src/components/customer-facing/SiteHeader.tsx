import { AlaryntLogo } from "@/components/customer-facing/AlaryntLogo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--brand-muted)] bg-[var(--brand-surface)]/95 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-2 my-2 flex max-w-6xl flex-col gap-3 rounded-xl border border-[var(--brand-muted)]/80 bg-gradient-to-b from-[var(--brand-surface)] to-[var(--background)] px-3 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.28)] sm:mx-auto sm:my-0 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:rounded-none sm:border-0 sm:bg-none sm:px-6 sm:py-3 sm:shadow-none"
      >
        <a href="#mission" className="self-start rounded-md px-1 py-0.5 text-sm font-semibold tracking-wide sm:rounded-none sm:p-0">
          <AlaryntLogo />
        </a>
        <ul className="flex w-full items-center justify-between gap-1 rounded-lg border border-[var(--brand-muted)]/70 bg-[var(--background)]/35 p-1 text-xs text-[var(--foreground)] sm:w-auto sm:justify-normal sm:gap-6 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:text-sm">
          <li>
            <a
              className="block rounded-md px-3 py-1.5 font-medium transition-colors hover:bg-white/8 hover:no-underline sm:inline sm:rounded-none sm:p-0 sm:font-normal sm:hover:bg-transparent sm:hover:underline"
              href="#mission"
            >
              Mission
            </a>
          </li>
          <li>
            <a
              className="block rounded-md px-3 py-1.5 font-medium transition-colors hover:bg-white/8 hover:no-underline sm:inline sm:rounded-none sm:p-0 sm:font-normal sm:hover:bg-transparent sm:hover:underline"
              href="#capabilities"
            >
              Capabilities
            </a>
          </li>
          <li>
            <a
              className="block rounded-md px-3 py-1.5 font-medium transition-colors hover:bg-white/8 hover:no-underline sm:inline sm:rounded-none sm:p-0 sm:font-normal sm:hover:bg-transparent sm:hover:underline"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
