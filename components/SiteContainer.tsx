"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SiteContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SiteContainer({
  children,
  className = "",
}: Partial<SiteContainerProps>) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
