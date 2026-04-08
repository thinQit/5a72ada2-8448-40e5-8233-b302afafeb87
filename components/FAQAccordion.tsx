"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQAccordion() {
  const faq = [
    { q: "What qualifies for Same Hour Delivery?", a: "Parcels within city service zones and accepted weight dimensions are eligible." },
    { q: "Can businesses schedule recurring pickups?", a: "Yes, B2B accounts can configure recurring pickup windows and priority slots." },
    { q: "Do I get proof of delivery?", a: "Yes. Every completed delivery includes digital proof with timestamp confirmation." },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-[#333333]" style={{ fontFamily: "Verdana, sans-serif" }}>
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faq.map((f, index) => (
            <AccordionItem key={f.q} value={"item-" + index}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
