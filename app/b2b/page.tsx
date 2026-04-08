export const dynamic = 'force-dynamic';

import AceternityHeroSpotlight from "@/components/AceternityHeroSpotlight";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export default function B2BPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up overflow-hidden">
        <AceternityHeroSpotlight />
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-background">
        <ScrollReveal>
          <FeaturesCards3D
            badge="For Business"
            title="Built for reliability, reporting, and repeat shipping"
            subtitle="Operational controls and visibility that help teams ship confidently."
            features={[
              {
                icon: "Receipt",
                title: "Contract pricing & billing",
                description: "Move from ad-hoc payments to predictable invoicing and negotiated rates.",
              },
              {
                icon: "FileCheck",
                title: "Proof of delivery audit trail",
                description: "Capture signatures, photos, and notes for compliance and assurance.",
              },
              {
                icon: "Headphones",
                title: "Dispatch escalation support",
                description: "Urgent support paths for critical shipments and exception handling.",
              },
              {
                icon: "BarChart3",
                title: "Operational visibility",
                description: "Live tracking with ETA updates and status clarity for stakeholders.",
              },
            ]}
          />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-muted">
        <ScrollReveal>
          <TrustBadges />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-background">
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
      </section>
    </main>
  );
}
