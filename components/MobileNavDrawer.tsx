"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavDrawerProps {
  className?: string;
  logoSrc?: string;
}

const items = [
  { label: "Home", href: "/" },
  { label: "1 Hour Delivery", href: "/1-hour-delivery" },
  { label: "B2B", href: "/b2b" },
  { label: "B2C", href: "/b2c" },
  { label: "Contact", href: "/contact" },
];

export default function MobileNavDrawer({
  className = "",
  logoSrc = "https://codexstudiofiles.blob.core.windows.net/discovery-attachments/a240ebe6-4b4e-461f-b612-c68bf8639300/5a72ada2-8448-40e5-8233-b302afafeb87/1775645661721-download.png?sv=2026-02-06&se=2026-04-09T10%3A54%3A21Z&sr=b&sp=r&sig=8p7MNp30yytrk%2BXU%2BOsHCglQmSjCxoYrdU%2F3wW4vFHI%3D",
}: Partial<MobileNavDrawerProps>) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("md:hidden", className)}>
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu className="size-5" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/40">
          <div className="ml-auto h-full w-80 bg-white p-5 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <Image src={logoSrc} alt="DHL Logo" width={120} height={42} unoptimized className="h-9 w-auto" />
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="size-5" />
              </Button>
            </div>

            <nav className="space-y-3">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 font-semibold text-[#333333] hover:bg-[#F5F5F5]"
                  style={{ fontFamily: "Verdana, sans-serif" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button className="mt-8 w-full bg-[#D40511] text-white hover:bg-[#b4040f]">
              Book Same Hour Delivery
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
