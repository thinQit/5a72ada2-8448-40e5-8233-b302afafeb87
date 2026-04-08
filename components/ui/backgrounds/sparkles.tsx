import * as React from "react";
import { cn } from "@/lib/utils";

export type SparklesEffectProps = React.HTMLAttributes<HTMLDivElement>;

export function SparklesEffect({ className, ...props }: SparklesEffectProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),rgba(255,255,255,0))]",
        className
      )}
      {...props}
    />
  );
}

export const Sparkles = SparklesEffect;
export const SparklesCore = SparklesEffect;
export default SparklesEffect;
