"use client";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#D40511] p-8 text-white md:p-12">
          <h3 className="text-3xl font-bold" style={{ fontFamily: "Verdana, sans-serif" }}>
            Ready to ship in under 60 minutes?
          </h3>
          <p className="mt-2 text-white/90">Activate DHL Same Hour Delivery for urgent business and personal shipments.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="bg-[#FFCC00] text-[#333333] hover:bg-[#e6b800]">Book Same Hour Delivery</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Request Business Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
