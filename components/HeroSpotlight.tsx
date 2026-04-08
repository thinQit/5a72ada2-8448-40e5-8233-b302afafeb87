'use client';

import dynamic from 'next/dynamic';
import { TypewriterEffect } from '@/components/ui/text/typewriter-effect';
import { Button } from '@/components/ui/button';

const SpotlightEffect = dynamic(() => import('@/components/ui/backgrounds/spotlight').then((mod) => mod.Spotlight), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />,
});

interface HeroSpotlightProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroSpotlight({
  headline = 'Big Deals. Fast Delivery. Trusted Checkout.',
  subheadline = 'Discover curated products, limited-time offers, and everyday essentials in one seamless shopping experience.',
  primaryCta = { label: 'Shop Best Sellers', href: '#featured-products' },
  secondaryCta = { label: 'Browse Categories', href: '#categories' },
}: Partial<HeroSpotlightProps>) {
  const words = headline.split(' ').map((word) => ({ text: word }));

  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <SpotlightEffect className="-top-40 left-0 md:left-60 md:-top-20" fill="#FFCC00" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl p-4 pt-20 text-center md:pt-0 animate-fade-in-up">
        <TypewriterEffect
          words={words}
          className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          cursorClassName="bg-secondary"
        />
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">{subheadline}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-primary px-8 py-6 text-lg text-primary-foreground transition-all duration-200 hover:scale-105" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="border-primary px-8 py-6 text-lg text-foreground transition-all duration-200 hover:scale-105" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
