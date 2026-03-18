import { ContactDemoForm } from "@/components/customer-facing/ContactDemoForm";
import { links } from "@/lib/config";

type ContactDemoSectionProps = {
  legalLinksEnabled: boolean;
};

export function ContactDemoSection({ legalLinksEnabled }: ContactDemoSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-28 bg-[var(--background)] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-xl border border-[var(--brand-muted)] bg-[var(--brand-surface)] p-6 sm:p-8">
        <h2 id="contact-heading" className="text-3xl font-bold tracking-tight">
          Request a tailored demo
        </h2>
        <p className="mt-2 text-[var(--foreground)]/75">Tell us about your goals and we&apos;ll show how Alarynt can operationalize your data stack.</p>
        <ContactDemoForm legalLinksEnabled={legalLinksEnabled} />
        {legalLinksEnabled ? (
          <div className="mt-4 flex gap-4 text-sm text-[var(--brand-accent)]">
            <a className="underline" href={links.terms}>
              Terms of Agreement
            </a>
            <a className="underline" href={links.privacy}>
              Privacy Statement
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
