export const dynamic = 'force-dynamic';

import AceternityHeroSpotlight from "@/components/AceternityHeroSpotlight";
import CategoryNavBento from "@/components/CategoryNavBento";
import FeaturedProductsGrid from "@/components/FeaturedProductsGrid";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsMasonry from "@/components/TestimonialsMasonry";
import NewsletterInlineForm from "@/components/NewsletterInlineForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up overflow-hidden">
        <AceternityHeroSpotlight />
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-background">
        <ScrollReveal>
          <CategoryNavBento />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-muted">
        <ScrollReveal>
          <FeaturedProductsGrid />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-background">
        <ScrollReveal>
          <TrustBadges />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-muted">
        <ScrollReveal>
          <TestimonialsMasonry />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-background">
        <ScrollReveal>
          <NewsletterInlineForm />
        </ScrollReveal>
      </section>
    </main>
  );
}
