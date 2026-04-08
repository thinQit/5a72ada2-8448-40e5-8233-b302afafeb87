import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-xl w-full rounded-xl border border-border bg-card p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl font-semibold mb-2">Page not found</p>
        <p className="text-muted-foreground mb-6">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Button asChild className="bg-primary text-primary-foreground transition-all duration-200 hover:scale-105">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
