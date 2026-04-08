"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
  logoSrc?: string;
}

export default function Footer({
  className = "",
  logoSrc = "https://codexstudiofiles.blob.core.windows.net/discovery-attachments/a240ebe6-4b4e-461f-b612-c68bf8639300/5a72ada2-8448-40e5-8233-b302afafeb87/1775645661721-download.png?sv=2026-02-06&se=2026-04-09T10%3A54%3A21Z&sr=b&sp=r&sig=8p7MNp30yytrk%2BXU%2BOsHCglQmSjCxoYrdU%2F3wW4vFHI%3D",
}: Partial<FooterProps>) {
  return (
    <footer className={cn("border-t bg-[#FFCC00] text-[#333333]", className)}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Image src={logoSrc} alt="DHL Logo" width={140} height={48} unoptimized className="h-10 w-auto" />
          <p className="mt-4 text-sm" style={{ fontFamily: "Verdana, sans-serif" }}>
            Same Hour Delivery built for urgent shipments across cities.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-bold">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/1-hour-delivery">1 Hour Delivery</Link></li>
            <li><Link href="/b2b">Business Shipping</Link></li>
            <li><Link href="/b2c">Personal Shipping</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">About DHL</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/">Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Privacy Policy</Link></li>
            <li><Link href="/">Terms of Service</Link></li>
            <li><Link href="/">Cookies</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 py-4 text-center text-xs" style={{ fontFamily: "Verdana, sans-serif" }}>
        © 2026 DHL Same Hour Delivery. All rights reserved.
      </div>
    </footer>
  );
}
