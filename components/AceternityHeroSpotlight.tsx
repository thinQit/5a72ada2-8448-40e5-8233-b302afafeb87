"use client";

import Image from "next/image";
import { Spotlight } from "@/components/ui/backgrounds/spotlight";
import { SparklesEffect } from "@/components/ui/backgrounds/sparkles";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AceternityHeroSpotlightProps {
  className?: string;
  imageSrc?: string;
}

export default function AceternityHeroSpotlight({
  className = "",
  imageSrc = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577700/site-images/hero-backgrounds/11829357.jpg",
}: Partial<AceternityHeroSpotlightProps>) {
  return (
    <section className={cn("relative overflow-hidden bg-white py-16 md:py-24", className)}>
      <Spotlight className="-top-20 left-0" fill="#FFCC00" />
      <SparklesEffect className="absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-3 inline-block rounded-full bg-[#FFCC00] px-4 py-1 text-xs font-bold uppercase tracking-wide text-[#333333]">
            New Proposition
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[#333333] md:text-5xl" style={{ fontFamily: "Verdana, sans-serif" }}>
            Same Hour Delivery
            <span className="block text-[#D40511]">When Every Minute Matters.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[#333333]/80">
            Get urgent parcels picked up and delivered within the hour with DHL reliability and live tracking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="bg-[#D40511] text-white hover:bg-[#b4040f]">Book Same Hour Delivery</Button>
            <Button variant="outline" className="border-[#D40511] text-[#D40511] hover:bg-[#fff5f5]">
              Request Business Quote
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={imageSrc}
            alt="DHL same hour delivery"
            width={900}
            height={600}
            unoptimized
            className="rounded-xl border object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
