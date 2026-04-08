"use client";

import Image from "next/image";
import { Clock3, MapPin, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeaturedProductsGrid() {
  const cards = [
    {
      title: "Same Hour Lite",
      price: "From €14.99",
      badge: "Most Popular",
      imageSrc:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577105/site-images/ecommerce/17485352.jpg",
      specs: ["Up to 5kg", "In-city delivery", "Live tracking"],
    },
    {
      title: "Same Hour Business",
      price: "From €24.99",
      badge: "B2B",
      imageSrc:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577106/site-images/ecommerce/17485353.jpg",
      specs: ["Contract rates", "Priority handling", "Proof of delivery"],
    },
    {
      title: "Same Hour Premium",
      price: "From €39.99",
      badge: "Priority",
      imageSrc:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577136/site-images/ecommerce/16675632.jpg",
      specs: ["Sensitive items", "Direct route", "Dedicated courier"],
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-[#333333]" style={{ fontFamily: "Verdana, sans-serif" }}>
          Featured Same Hour Options
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((item) => (
            <Card key={item.title} className="overflow-hidden rounded-xl border bg-white shadow-sm">
              <Image src={item.imageSrc} alt={item.title} width={800} height={500} unoptimized className="h-44 w-full object-cover" />
              <div className="p-5">
                <Badge className="bg-[#FFCC00] text-[#333333] hover:bg-[#FFCC00]">{item.badge}</Badge>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-1 text-2xl font-bold text-[#D40511]">{item.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#333333]/80">
                  <li className="flex items-center gap-2"><Clock3 className="size-4 text-[#D40511]" /> {item.specs[0]}</li>
                  <li className="flex items-center gap-2"><MapPin className="size-4 text-[#D40511]" /> {item.specs[1]}</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="size-4 text-[#D40511]" /> {item.specs[2]}</li>
                </ul>
                <Button className="mt-5 w-full bg-[#D40511] text-white hover:bg-[#b4040f]">Ship Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
