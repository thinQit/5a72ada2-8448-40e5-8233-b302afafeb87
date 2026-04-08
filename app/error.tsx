"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-xl w-full rounded-xl border border-border bg-card p-8 text-center">
        <h1 className="text-3xl font-bold mb-3">Something went wrong</h1>
        <p className="text-muted-foreground mb-6">
          We couldn’t load this page right now. Please try again.
        </p>
        <Button
          onClick={reset}
          className="bg-primary text-primary-foreground transition-all duration-200 hover:scale-105"
        >
          Try again
        </Button>
      </div>
    </main>
  );
}
