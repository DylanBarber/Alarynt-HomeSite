import { SiteHeader } from "@/components/customer-facing/SiteHeader";
import { SiteFooter } from "@/components/customer-facing/SiteFooter";

export const metadata = {
  title: "Capabilities | Alarynt",
  description: "Specialized architectural frameworks for lean organizations of 10 to 50 people.",
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-24 px-8 overflow-hidden">
          <div className="perspective-grid absolute inset-0 opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-surface-container-highest text-primary text-[0.6875rem] font-bold uppercase tracking-widest rounded-full mb-6">
                Our Methodology
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-on-surface">
                Engineering clarity for{" "}
                <span className="text-primary-fixed-dim italic">evolving</span> teams.
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                Specialized architectural frameworks designed specifically for lean organizations of 10 to 50 people.
                We bridge the gap between technical complexity and operational speed.
              </p>
            </div>
          </div>
        </section>

        {/* The 10-50 Complexity Peak */}
        <section className="bg-surface-container-low py-20 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="font-headline text-3xl font-bold mb-6 text-on-surface">The 10-50 Complexity Peak</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                At this size, traditional &ldquo;off-the-shelf&rdquo; solutions are too rigid, but enterprise-scale
                consulting is too slow. Alarynt provides the middle path: custom architecture built on agile principles.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">groups</span>
                  <div>
                    <h4 className="font-bold text-on-surface">Lean Team Optimization</h4>
                    <p className="text-sm text-on-surface-variant">Systems that scale without adding headcount or overhead.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">bolt</span>
                  <div>
                    <h4 className="font-bold text-on-surface">Rapid Deployment</h4>
                    <p className="text-sm text-on-surface-variant">Methodologies optimized for high-velocity environments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-square bg-surface-container rounded-xl flex items-center justify-center p-12 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-4 w-full h-full relative z-10">
                  <div className="bg-primary-container/20 rounded-lg p-6 flex flex-col justify-end border-t border-white/10">
                    <span className="text-primary font-headline text-4xl font-black">10</span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Start State</span>
                  </div>
                  <div className="bg-tertiary-container/20 rounded-lg p-6 flex flex-col justify-end border-t border-white/10">
                    <span className="text-tertiary font-headline text-4xl font-black">50</span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Scale Point</span>
                  </div>
                  <div className="col-span-2 bg-surface-container-highest rounded-lg p-6 border-t border-white/5">
                    <p className="text-xs text-on-surface-variant italic">
                      &ldquo;We don&apos;t build for where you are; we build for the infrastructure you&apos;ll need when you hit 50.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Alarynt Engine */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">The Alarynt Engine</h2>
              <p className="text-on-surface-variant">Four distinct phases to transition from chaos to connectivity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Discovery */}
              <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl border-t border-outline-variant/20 hover:bg-surface-container transition-colors group">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-4xl text-primary">search</span>
                  <span className="text-outline-variant font-headline text-6xl font-black opacity-30 group-hover:opacity-100 transition-opacity">01</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Discovery</h3>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                  A deep immersion into your current workflows, stakeholder interviews, and identifying the
                  &ldquo;hidden&rdquo; manual labor slowing your team down.
                </p>
                <ul className="space-y-3 text-xs font-medium text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" /> Workflow Mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" /> Tech-Stack Inventory
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" /> Cultural Readiness Check
                  </li>
                </ul>
              </div>
              {/* Audit */}
              <div className="bg-surface-container-low p-8 rounded-xl border-t border-outline-variant/20 hover:bg-surface-container transition-colors group">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-4xl text-tertiary">analytics</span>
                  <span className="text-outline-variant font-headline text-6xl font-black opacity-30 group-hover:opacity-100 transition-opacity">02</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Audit</h3>
                <p className="text-on-surface-variant mb-4 text-sm leading-relaxed">
                  Evaluating data integrity and systemic risks. We find where the &ldquo;single source of truth&rdquo;
                  is broken.
                </p>
              </div>
              {/* Build */}
              <div className="bg-surface-container-low p-8 rounded-xl border-t border-outline-variant/20 hover:bg-surface-container transition-colors group">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-4xl text-primary-fixed-dim">architecture</span>
                  <span className="text-outline-variant font-headline text-6xl font-black opacity-30 group-hover:opacity-100 transition-opacity">03</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Build</h3>
                <p className="text-on-surface-variant mb-4 text-sm leading-relaxed">
                  Engineering the solution. Agile development cycles that prioritize functionality over fluff.
                </p>
              </div>
              {/* Support */}
              <div className="md:col-span-4 bg-surface-container-high p-8 rounded-xl border-t border-outline-variant/20 flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-4xl text-on-tertiary-container">support_agent</span>
                    <h3 className="font-headline text-2xl font-bold">Support &amp; Iteration</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    We don&apos;t &ldquo;hand off.&rdquo; We integrate. Ongoing performance monitoring and team
                    training to ensure long-term adoption.
                  </p>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  <div className="bg-surface/40 p-4 rounded-lg">
                    <p className="text-xs font-bold text-primary mb-1">Response Time</p>
                    <p className="text-xl font-headline font-bold">&lt; 4 Hours</p>
                  </div>
                  <div className="bg-surface/40 p-4 rounded-lg">
                    <p className="text-xs font-bold text-primary mb-1">Code Review</p>
                    <p className="text-xl font-headline font-bold">Weekly</p>
                  </div>
                  <div className="bg-surface/40 p-4 rounded-lg">
                    <p className="text-xs font-bold text-primary mb-1">Architecture</p>
                    <p className="text-xl font-headline font-bold">Dynamic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Outcomes */}
        <section className="py-24 px-8 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Common Outcomes</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Tangible metrics from our latest structural transformations.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="text-6xl font-headline font-black text-primary-container/20 absolute -top-10 -left-4 select-none">
                85%
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-3">Automated Reporting</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Eliminating manual spreadsheets, saving an average of 14 hours per week for operations leads.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="text-6xl font-headline font-black text-primary-container/20 absolute -top-10 -left-4 select-none">
                100%
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-3">Single Source of Truth</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Centralized data lakes that ensure every department is looking at the exact same numbers in
                  real-time.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="text-6xl font-headline font-black text-primary-container/20 absolute -top-10 -left-4 select-none">
                4x
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-3">System Scalability</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Infrastructure designed to handle four times the current load without requiring a system redesign.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary-container to-tertiary-container rounded-2xl p-12 text-center text-on-primary relative overflow-hidden shadow-2xl">
            <div className="perspective-grid absolute inset-0 opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Ready to audit your architecture?
              </h2>
              <p className="text-on-primary-container/80 text-lg mb-10 max-w-xl mx-auto">
                Schedule a 30-minute walkthrough and see how Alarynt can stabilize your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="bg-on-surface text-surface px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors"
                >
                  Book My Walkthrough
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
