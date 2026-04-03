import { SiteHeader } from "@/components/customer-facing/SiteHeader";
import { SiteFooter } from "@/components/customer-facing/SiteFooter";

export const metadata = {
  title: "Privacy Policy | Alarynt",
  description: "How Alarynt collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />
      <main className="pt-24">
        <section className="py-24 px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-5xl font-bold mb-4 text-on-surface">Privacy Policy</h1>
            <p className="text-on-surface-variant mb-16 text-sm">Last updated: {new Date().getFullYear()}</p>

            <div className="space-y-12 text-on-surface-variant leading-relaxed">
              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Information We Collect</h2>
                <p>
                  When you submit a contact or demo request form on our site, we collect the information you provide
                  directly — including your name, email address, company name, and phone number. We may also collect a
                  brief message if you choose to include one.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">How We Use Your Information</h2>
                <p>
                  We use the information you submit solely to respond to your inquiry and to schedule or conduct a
                  product walkthrough or consultation. We do not sell, rent, or share your personal information with
                  third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Data Storage</h2>
                <p>
                  Submitted contact information is stored securely in our database. We retain this data only as long
                  as necessary to fulfill the purpose for which it was collected or as required by applicable law.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Analytics</h2>
                <p>
                  We use Vercel Web Analytics to understand aggregate traffic patterns on this site. This service does
                  not use cookies and does not collect personally identifiable information.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Third-Party Services</h2>
                <p>
                  Our contact form may use Cloudflare Turnstile for spam prevention. Cloudflare&apos;s use of data is
                  governed by their own privacy policy. We do not have access to any data Cloudflare collects for
                  verification purposes.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Your Rights</h2>
                <p>
                  You may request access to, correction of, or deletion of any personal information we hold about you
                  at any time. To make such a request, contact us via the form on our homepage.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                  updated date. Continued use of our site after any changes constitutes acceptance of the revised
                  policy.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Contact</h2>
                <p>
                  If you have any questions about this Privacy Policy, please reach out through the contact form on our{" "}
                  <a href="/#contact" className="text-primary underline hover:text-primary-fixed-dim transition-colors">
                    homepage
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
