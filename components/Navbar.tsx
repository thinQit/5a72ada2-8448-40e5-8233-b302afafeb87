"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
  logoSrc?: string;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "1 Hour Delivery", href: "/1-hour-delivery" },
  { label: "B2B", href: "/b2b" },
  { label: "B2C", href: "/b2c" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({
  className = "",
  logoSrc = "https://codexstudiofiles.blob.core.windows.net/discovery-attachments/a240ebe6-4b4e-461f-b612-c68bf8639300/5a72ada2-8448-40e5-8233-b302afafeb87/1775645661721-download.png?sv=2026-02-06&se=2026-04-09T10%3A54%3A21Z&sr=b&sp=r&sig=8p7MNp30yytrk%2BXU%2BOsHCglQmSjCxoYrdU%2F3wW4vFHI%3D",
}: Partial<NavbarProps>) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80",
        className
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image src={logoSrc} alt="DHL Logo" width={130} height={44} unoptimized className="h-10 w-auto" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-[#333333] transition-colors hover:text-[#D40511]"
              style={{ fontFamily: "Verdana, sans-serif" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Track or search service" className="w-56 pl-9" />
          </div>
          <Button className="bg-[#D40511] text-white hover:bg-[#b4040f]">Ship Now</Button>
        </div>

        <Button size="icon" variant="ghost" className="ml-auto md:hidden" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </div>
    </header>
  );
}
