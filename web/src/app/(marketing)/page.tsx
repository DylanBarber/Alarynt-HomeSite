import { CapabilitiesSection } from "@/components/customer-facing/CapabilitiesSection";
import { ContactDemoSection } from "@/components/customer-facing/ContactDemoSection";
import { HeroMissionSection } from "@/components/customer-facing/HeroMissionSection";
import { SiteFooter } from "@/components/customer-facing/SiteFooter";
import { SiteHeader } from "@/components/customer-facing/SiteHeader";
import { featureFlags } from "@/lib/config";

export default function CustomerFacingPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main>
        <HeroMissionSection />
        <CapabilitiesSection />
        <ContactDemoSection legalLinksEnabled={featureFlags.legalLinksEnabled} />
      </main>
      <SiteFooter />
    </div>
  );
}
