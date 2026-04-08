"use client";

import { Card } from "@/components/ui/card";

export default function TestimonialsMasonry() {
  const testimonials = [
    { name: "Fatima K.", role: "Operations Manager", company: "RetailHub", quote: "Our same-hour replenishment reduced stockouts by 37% in major cities." },
    { name: "Jonas R.", role: "E-commerce Lead", company: "GadgetFlow", quote: "DHL Same Hour is now our premium checkout option and customers love it." },
    { name: "Mina S.", role: "Founder", company: "Bloom Pharmacy", quote: "Critical medical deliveries arrive on time with full visibility." },
    { name: "Alex T.", role: "Supply Coordinator", company: "UrbanMart", quote: "Fast pickup windows and professional couriers made our teams more agile." },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-[#333333]" style={{ fontFamily: "Verdana, sans-serif" }}>
          Trusted by Growing Businesses
        </h2>
        <div className="columns-1 gap-4 md:columns-2">
          {testimonials.map((t) => (
            <Card key={t.name} className="mb-4 break-inside-avoid rounded-xl border bg-white p-5 shadow-sm">
              <p className="text-sm text-[#333333]/90">“{t.quote}”</p>
              <div className="mt-4">
                <p className="font-bold text-[#333333]">{t.name}</p>
                <p className="text-xs text-[#333333]/70">{t.role} · {t.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
