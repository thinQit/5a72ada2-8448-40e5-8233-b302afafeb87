export const dynamic = 'force-dynamic';

import AceternityHeroSpotlight from "@/components/AceternityHeroSpotlight";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import PricingComparisonTable from "@/components/PricingComparisonTable";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export default function OneHourDeliveryPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up overflow-hidden">
        <AceternityHeroSpotlight />
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-background">
        <ScrollReveal>
          <FeaturesCards3D
            badge="Service Options"
            title="Service options built for urgency"
            subtitle="Pick the level of speed and assurance you need—without complicated setup."
            features={[
              {
                icon: "Clock",
                title: "Standard",
                description: "Direct routing with live tracking and signature confirmation.",
              },
              {
                icon: "Zap",
                title: "Priority Dispatch",
                description: "Priority assignment for the fastest possible pickup and proactive updates.",
              },
              {
                icon: "Shield",
                title: "Fragile Care",
                description: "Extra handling instructions for sensitive items and packaging.",
              },
              {
                icon: "Building2",
                title: "Business Account",
                description: "Contract pricing, consolidated billing, and SLA options for teams.",
              },
            ]}
          />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-muted">
        <ScrollReveal>
          <PricingComparisonTable />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-background">
        <ScrollReveal>
          <FAQAccordion />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-muted">
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
      </section>
    </main>
  );
}
