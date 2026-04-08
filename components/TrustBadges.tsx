"use client";

import { Globe2, Medal, PackageCheck, ScanSearch } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { icon: Globe2, title: "150+ Countries Covered" },
    { icon: Medal, title: "Market Leader in Post, Parcels & Freight" },
    { icon: ScanSearch, title: "Real-Time Shipment Tracking" },
    { icon: PackageCheck, title: "Instant Proof of Delivery" },
  ];

  return (
    <section className="bg-[#F5F5F5] py-14">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        {badges.map((item) => (
          <div key={item.title} className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
            <item.icon className="size-5 text-[#D40511]" />
            <p className="text-sm font-semibold text-[#333333]">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
