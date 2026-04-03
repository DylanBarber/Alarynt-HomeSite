import { CapabilitiesSection } from "@/components/customer-facing/CapabilitiesSection";
import { ContactDemoSection } from "@/components/customer-facing/ContactDemoSection";
import { FounderSection } from "@/components/customer-facing/FounderSection";
import { HeroMissionSection } from "@/components/customer-facing/HeroMissionSection";
import { HowItWorksSection } from "@/components/customer-facing/HowItWorksSection";
import { ProofSection } from "@/components/customer-facing/ProofSection";
import { SiteFooter } from "@/components/customer-facing/SiteFooter";
import { SiteHeader } from "@/components/customer-facing/SiteHeader";
import { WhoThisIsForSection } from "@/components/customer-facing/WhoThisIsForSection";
import { featureFlags } from "@/lib/config";

export default function CustomerFacingPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />
      <main className="pt-24">
        <HeroMissionSection />
        <WhoThisIsForSection />
        <CapabilitiesSection />
        <ProofSection />
        <HowItWorksSection />
        <FounderSection />
        <ContactDemoSection legalLinksEnabled={featureFlags.legalLinksEnabled} />
      </main>
      <SiteFooter />
    </div>
  );
}
