"use client";

import { ArrowRight, Building2, House, PackageSearch, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CategoryNavBento() {
  const items = [
    { title: "1 Hour Delivery", desc: "Urgent city dispatch in under 60 minutes.", icon: Truck },
    { title: "B2B Logistics", desc: "Priority movement for business-critical shipments.", icon: Building2 },
    { title: "B2C Express", desc: "Fast doorstep drop-offs for personal senders.", icon: House },
    { title: "Track & Proof", desc: "Real-time tracking and proof of delivery.", icon: PackageSearch },
  ];

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-[#333333]" style={{ fontFamily: "Verdana, sans-serif" }}>
          Explore DHL Same Hour Services
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title} className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
              <item.icon className="mb-3 size-7 text-[#D40511]" />
              <h3 className="text-xl font-bold text-[#333333]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#333333]/80">{item.desc}</p>
              <Button variant="link" className="mt-3 h-auto px-0 text-[#D40511]">
                Learn more <ArrowRight className="ml-2 size-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
