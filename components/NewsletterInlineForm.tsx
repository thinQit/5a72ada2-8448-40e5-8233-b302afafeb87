"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterInlineForm() {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  return (
    <section className="bg-[#FFCC00] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-[#333333]" style={{ fontFamily: "Verdana, sans-serif" }}>
          Get launch rates for your city
        </h3>
        <p className="mt-1 text-sm text-[#333333]/80">Receive updates on Same Hour Delivery availability and business offers.</p>
        <form className="mt-5 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email address" />
          <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
          <Button type="button" className="bg-[#D40511] text-white hover:bg-[#b4040f]">Subscribe</Button>
        </form>
        <p className="mt-3 text-xs text-[#333333]/70">By subscribing, you agree to DHL privacy policy and communication terms.</p>
      </div>
    </section>
  );
}
