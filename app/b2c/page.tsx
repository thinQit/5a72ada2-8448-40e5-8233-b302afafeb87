export const dynamic = 'force-dynamic';

import AceternityHeroSpotlight from "@/components/AceternityHeroSpotlight";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export default function B2CPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up overflow-hidden">
        <AceternityHeroSpotlight />
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-background">
        <ScrollReveal>
          <FeaturesCards3D
            badge="How It Works"
            title="Ship urgent items today—without the stress"
            subtitle="A simple flow designed for fast conversion on mobile."
            features={[
              {
                icon: "MapPin",
                title: "Enter pickup + drop-off",
                description: "Add addresses and a contact name for both locations.",
              },
              {
                icon: "Settings2",
                title: "Choose options",
                description: "Add signature, photo proof, and delivery notes in seconds.",
              },
              {
                icon: "Navigation",
                title: "Track your courier",
                description: "See live location and ETA updates until delivery is complete.",
              },
              {
                icon: "BadgeCheck",
                title: "Get confirmation",
                description: "Receive proof of delivery and completion notifications.",
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
