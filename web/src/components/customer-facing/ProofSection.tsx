export function ProofSection() {
  return (
    <section className="py-24 px-8 bg-surface-container">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-headline text-4xl font-bold mb-4">Hard Proof</h2>
        <p className="text-on-surface-variant">Real transformations for teams just like yours.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-error/50">
          <p className="text-[0.6875rem] font-bold tracking-widest text-error/70 uppercase mb-4">Before Alarynt</p>
          <p className="text-xl font-headline italic text-on-surface-variant">
            &ldquo;We had 12 different spreadsheets for client reporting and it took our account manager 6 hours every
            Friday to compile them.&rdquo;
          </p>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary/50">
          <p className="text-[0.6875rem] font-bold tracking-widest text-primary uppercase mb-4">After Alarynt</p>
          <p className="text-xl font-headline text-on-surface">
            One live dashboard. Real-time updates. 0 hours of manual work. The account manager now spends Fridays
            finding new upsell opportunities.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-surface-container-high p-6 rounded-lg text-center">
          <p className="text-4xl font-headline font-bold text-primary mb-2">100%</p>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Data Ownership</p>
        </div>
        <div className="bg-surface-container-high p-6 rounded-lg text-center">
          <p className="text-4xl font-headline font-bold text-primary mb-2">15hr+</p>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Weekly Time Savings</p>
        </div>
        <div className="bg-surface-container-high p-6 rounded-lg text-center">
          <p className="text-4xl font-headline font-bold text-primary mb-2">4 Weeks</p>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Average MVP Build</p>
        </div>
      </div>
    </section>
  );
}
