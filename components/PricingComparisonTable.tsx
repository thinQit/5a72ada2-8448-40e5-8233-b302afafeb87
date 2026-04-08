"use client";

import { Check } from "lucide-react";

export default function PricingComparisonTable() {
  const plans = [
    { name: "Lite", rate: "€14.99", tracking: true, pod: true, dedicated: false },
    { name: "Business", rate: "€24.99", tracking: true, pod: true, dedicated: false },
    { name: "Premium", rate: "€39.99", tracking: true, pod: true, dedicated: true },
  ];

  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-[#333333]" style={{ fontFamily: "Verdana, sans-serif" }}>
          Compare Service Options
        </h2>
        <div className="overflow-x-auto rounded-xl border bg-white">
          <table className="w-full min-w-[700px] text-sm">
            <thead className="bg-[#FFCC00] text-left">
              <tr>
                <th className="p-4 font-bold">Plan</th>
                <th className="p-4 font-bold">Starting Rate</th>
                <th className="p-4 font-bold">Live Tracking</th>
                <th className="p-4 font-bold">Proof of Delivery</th>
                <th className="p-4 font-bold">Dedicated Courier</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((p) => (
                <tr key={p.name} className="border-t">
                  <td className="p-4 font-semibold">{p.name}</td>
                  <td className="p-4 font-bold text-[#D40511]">{p.rate}</td>
                  <td className="p-4">{p.tracking && <Check className="size-4 text-[#D40511]" />}</td>
                  <td className="p-4">{p.pod && <Check className="size-4 text-[#D40511]" />}</td>
                  <td className="p-4">{p.dedicated && <Check className="size-4 text-[#D40511]" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
