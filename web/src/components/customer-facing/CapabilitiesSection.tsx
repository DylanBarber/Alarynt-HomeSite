const capabilities = [
  {
    title: "Data Transformation",
    description: "From raw spreadsheets to governed, decision-ready data foundations your team can trust.",
  },
  {
    title: "Tenant-specific MCP Server",
    description: "Launch isolated, tenant-safe infrastructure for secure model context and repeatable operations.",
  },
  {
    title: "Optional AI Setup",
    description: "Deploy practical AI workflows and KPI alerting where they create measurable time savings.",
  },
];

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="scroll-mt-28 border-y border-[var(--brand-muted)] bg-[var(--brand-surface)] px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="capabilities-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Capabilities
        </h2>
        <p className="mt-3 max-w-3xl text-[var(--foreground)]/75">
          Outcome-focused services for teams that need clean data, automated workflows, and AI insights without extra
          operational overhead.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-xl border border-[var(--brand-muted)] bg-[var(--brand-surface)] p-5 shadow-sm shadow-black/20"
              >
              <h3 className="text-lg font-semibold">{capability.title}</h3>
              <p className="mt-2 text-sm text-[var(--foreground)]/75">{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
