'use client';

import { SparklesCore } from '@/components/ui/backgrounds/sparkles';
import { Button } from '@/components/ui/button';

interface CTASparklesProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  sparkleColor?: string;
}

export default function CTASparkles({
  headline = 'Don’t Miss This Week’s Top Offers',
  description = 'Join thousands of happy customers and get exclusive deals delivered to your inbox.',
  ctaLabel = 'Get Exclusive Deals',
  ctaHref = '#newsletter',
  secondaryCtaLabel = 'Browse Products',
  secondaryCtaHref = '#featured-products',
  sparkleColor = '#FFCC00',
}: Partial<CTASparklesProps>) {
  return (
    <section className="relative flex h-[30rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background">
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore id="cta-sparkles" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} particleColor={sparkleColor} />
      </div>
      <div className="relative z-10 px-4 text-center animate-fade-in-up">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">{headline}</h2>
        {description && <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-lg">{description}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-primary px-8 py-6 text-lg text-primary-foreground transition-all duration-200 hover:scale-105" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="border-primary px-8 py-6 text-lg text-foreground transition-all duration-200 hover:scale-105" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
