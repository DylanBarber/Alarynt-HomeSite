import { ContactDemoForm } from "@/components/customer-facing/ContactDemoForm";
import { links } from "@/lib/config";

type ContactDemoSectionProps = {
  legalLinksEnabled: boolean;
};

export function ContactDemoSection({ legalLinksEnabled }: ContactDemoSectionProps) {
  return (
    <section id="contact" className="py-24 px-8 bg-surface scroll-mt-20">
      <div className="max-w-4xl mx-auto bg-surface-container border border-outline-variant/20 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-12 text-center border-b border-outline-variant/10">
          <h2 className="font-headline text-4xl font-bold mb-4">Let&apos;s Talk</h2>
          <p className="text-on-surface-variant">Tell us about your data chaos. We&apos;ll tell you how to fix it.</p>
        </div>
        <div className="p-12">
          <ContactDemoForm legalLinksEnabled={legalLinksEnabled} />
          {legalLinksEnabled && (
            <div className="mt-4 flex gap-4 text-sm text-primary">
              <a className="underline" href={links.terms}>Terms of Agreement</a>
              <a className="underline" href={links.privacy}>Privacy Statement</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
