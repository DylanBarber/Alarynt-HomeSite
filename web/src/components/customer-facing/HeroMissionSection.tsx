export function HeroMissionSection() {
  return (
    <section id="mission" aria-labelledby="mission-heading" className="scroll-mt-28 px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-accent)]">
            Actionable insights, powered by AI
          </p>
          <h1 id="mission-heading" className="text-4xl font-bold tracking-tight sm:text-5xl">
            We turn your company&apos;s data chaos into an AI-ready system
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[var(--foreground)]/85">
            Alarynt turns messy, disconnected company data into structured insights and automated workflows so teams
            can decide faster and operate more efficiently.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-md bg-[var(--brand-cta)] px-5 py-3 text-sm font-semibold text-white" href="#contact">
              Request Demo
            </a>
            <a
              className="rounded-md border border-[var(--brand-muted)] bg-[var(--brand-surface)] px-5 py-3 text-sm font-semibold text-[var(--foreground)]"
              href="#capabilities"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
        <aside className="rounded-xl border border-[var(--brand-muted)] bg-[var(--brand-surface)] p-6 shadow-sm shadow-black/20">
          <h2 className="text-lg font-semibold">From raw spreadsheets to real-time insights</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)]/85">
            <li>• Your data, organized and actionable</li>
            <li>• Automated workflows that actually save time</li>
            <li>• AI is just the interface — we deliver the results</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
