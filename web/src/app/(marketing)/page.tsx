import { AdminLoginSection } from "@/components/customer-facing/AdminLoginSection";
import { CapabilitiesSection } from "@/components/customer-facing/CapabilitiesSection";
import { ContactDemoSection } from "@/components/customer-facing/ContactDemoSection";
import { HeroMissionSection } from "@/components/customer-facing/HeroMissionSection";
import { SiteFooter } from "@/components/customer-facing/SiteFooter";
import { SiteHeader } from "@/components/customer-facing/SiteHeader";
import { featureFlags, links } from "@/lib/config";

export default function CustomerFacingPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader adminLoginHref={links.adminLogin} />
      <main>
        <HeroMissionSection />
        <CapabilitiesSection />
        <ContactDemoSection legalLinksEnabled={featureFlags.legalLinksEnabled} />
        <AdminLoginSection forgotPasswordEnabled={featureFlags.forgotPasswordEnabled} />
      </main>
      <SiteFooter />
    </div>
  );
}
