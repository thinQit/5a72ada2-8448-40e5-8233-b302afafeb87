"use client";

interface LogoCloudProps {
  headline?: string;
  logos: { name: string; imageUrl: string }[];
}

export default function LogoCloud({ headline = 'Trusted by leading payment and logistics partners', logos = [] }: Partial<LogoCloudProps>) {
  return (
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        {headline && <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-foreground">{headline}</p>}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <img key={i} src={logo.imageUrl} alt={logo.name} className="h-8 max-w-[120px] object-contain opacity-60 transition-all duration-200 hover:scale-105 hover:opacity-100 md:h-10" />
          ))}
        </div>
      </div>
    </section>
  );
}
