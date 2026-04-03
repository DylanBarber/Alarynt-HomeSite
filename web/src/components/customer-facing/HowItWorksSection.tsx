const steps = [
  {
    number: "01",
    title: "Discovery Call",
    body: "We talk about your goals, your current mess, and where you're losing money. No sales pitch, just a reality check.",
  },
  {
    number: "02",
    title: "Data Audit",
    body: "We look under the hood. We find the broken links, duplicate entries, and the \"why\" behind your data friction.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    body: "We build your custom architecture and automation engine. You see progress in days, not months.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    body: "Data isn't \"set it and forget it.\" We're your on-call data engineers as your company evolves.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-4xl font-bold mb-16 text-center">The Road to Clarity</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative z-10">
              <div className="text-6xl font-headline font-black text-outline-variant/20 mb-4">{step.number}</div>
              <h4 className="font-headline text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-sm text-on-surface-variant">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
