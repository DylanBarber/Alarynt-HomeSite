export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 px-8 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
          <img
            alt="Data dashboard visualization"
            className="w-full h-full object-cover grayscale opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUu6BBGDnzTZ_4HkV1rz264HMxGWXtGcpb8FzWs9X1LPU7U85AS9rU7lxM1Nka5OWfzDTAeLSbLJxG31eG1uGvs3ZqgiV7kbJ9yvdyQpDcWOFkUHN3taAyewS8taFSD8v2gSaheg6qbk_t2Xrd8qPxBsbmLKzHf5TXIGOcKNO2S9HFMfQpEXZRuh1KNLgiY4VZKJNsrgrZZBW1FSn3r-U7Iv-YyBM-S1edLfVOEmNaUwBQekHGYp6WfUX3sgwafSvxdgcyOsuLaEWB"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        </div>
        <div className="order-1 lg:order-2 space-y-12">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-6">Plain-Language Solutions</h2>
            <p className="text-on-surface-variant">We don&apos;t hide behind jargon. We deliver outcomes.</p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-container/20 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">filter_alt</span>
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold text-on-surface mb-2">Stop Drowning in Spreadsheets</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  We consolidate your scattered data into a single, automated warehouse. No more copy-pasting. No more
                  version control nightmares.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-container/20 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">lock</span>
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold text-on-surface mb-2">Your Data Stays Yours</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  We build on infrastructure that is dedicated to you. We don&apos;t lock you into proprietary black
                  boxes. If we part ways, you keep the keys to your system.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-container/20 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">auto_fix</span>
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold text-on-surface mb-2">Automate the Busywork</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Once the foundation is solid, we automate reporting, lead routing, and repetitive workflows. Let your
                  team focus on strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
