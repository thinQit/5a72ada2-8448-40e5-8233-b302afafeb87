"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import AceternityHeroSpotlight from "@/components/AceternityHeroSpotlight";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up overflow-hidden">
        <AceternityHeroSpotlight />
      </section>

      <section className="animate-fade-in-up py-16 md:py-20 bg-background">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-6">
            <ContactForm
              headline="Send a request"
              subheadline="We’ll respond with availability, next steps, and (if applicable) a quote."
              contactInfo={[
                { icon: "Mail", label: "Business sales", value: "samehour.sales@dhl.com" },
                { icon: "Headphones", label: "Dispatch support", value: "samehour.dispatch@dhl.com" },
                { icon: "Info", label: "General inquiries", value: "samehour.info@dhl.com" },
              ]}
            />
            <Card className="rounded-xl border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Demo contact action (client-only): click to simulate successful request submission.
              </p>
              <Button
                className="bg-primary text-primary-foreground transition-all duration-200 hover:scale-105"
                onClick={() => setSent(true)}
              >
                Submit request
              </Button>
              {sent ? (
                <p className="mt-4 text-sm text-foreground">
                  Thanks—your request has been sent. We’ll follow up shortly with next steps.
                </p>
              ) : null}
            </Card>
          </div>
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
