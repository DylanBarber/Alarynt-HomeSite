export function HeroMissionSection() {
  return (
    <section
      id="mission"
      className="relative min-h-[819px] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 perspective-grid opacity-20 pointer-events-none" />
      <div className="relative z-10 max-w-4xl">
        <span className="inline-block py-1 px-3 mb-6 text-[0.6875rem] font-bold uppercase tracking-widest bg-surface-container-high text-primary border border-outline-variant/20 rounded-full">
          Data Operations &amp; Strategy
        </span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8 leading-tight">
          We turn your company&apos;s data chaos into a system that{" "}
          <span className="italic text-primary">actually works</span>.
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          Most AI tools fail because the data underneath is a mess. We fix that
          first — then build the automations and insights your team actually
          needs.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-br from-primary-container to-tertiary-container text-white font-bold rounded shadow-lg hover:scale-[1.02] transition-transform"
          >
            Book My Walkthrough
          </a>
          <a
            href="#capabilities"
            className="px-8 py-4 border border-outline-variant/40 hover:bg-surface-bright/10 text-on-surface font-semibold rounded transition-colors"
          >
            Explore Our Capabilities
          </a>
        </div>
        <div className="p-6 rounded-xl bg-surface-container-low border-t border-outline-variant/10 max-w-lg mx-auto">
          <p className="text-sm text-on-surface-variant font-medium italic">
            &ldquo;Built for growing teams who know their data is holding them
            back but don&apos;t have a full-time data engineer to fix it.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
