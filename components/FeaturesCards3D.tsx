'use client';

import { CardContainer, CardBody, CardItem } from '@/components/ui/effects/3d-card-effect';
import { ShieldCheck, Truck, Tag, Sparkles, Gift, Star, Clock, Zap, Building2, BarChart3, MapPin, Navigation } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Clock, Zap, Building2, BarChart3, MapPin, Navigation, 
  ShieldCheck,
  Truck,
  Tag,
  Sparkles,
  Gift,
  Star,
};

export default function FeaturesCards3D({
  badge = 'Why Shop With Us',
  headline = 'Built for a better shopping experience',
  subheadline = 'From secure checkout to fast delivery, every detail is optimized for convenience.',
  features = [],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="bg-muted/50 py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="card-hover relative h-auto w-auto rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
                  <CardItem translateZ="50" className="mb-4">
                    <Icon className="h-8 w-8 text-secondary" />
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
