import { NextRequest, NextResponse } from "next/server";
import { searchQuerySchema } from "@/lib/validators";

type SearchItem = {
  id: string;
  type: "service" | "faq";
  title: string;
  description: string;
  href: string;
};

const SEARCH_INDEX: SearchItem[] = [
  {
    id: "svc-shd-std",
    type: "service",
    title: "Same Hour — Standard",
    description: "Pickup 15–30 min, live GPS tracking, signature confirmation.",
    href: "/1-hour-delivery",
  },
  {
    id: "svc-shd-priority",
    type: "service",
    title: "Same Hour — Priority Dispatch",
    description: "Priority assignment, proactive updates, photo proof option.",
    href: "/1-hour-delivery",
  },
  {
    id: "svc-shd-fragile",
    type: "service",
    title: "Same Hour — Fragile Care",
    description: "Care handling for sensitive items with direct-to-door delivery.",
    href: "/1-hour-delivery",
  },
  {
    id: "faq-same-hour",
    type: "faq",
    title: "What does “Same Hour” mean?",
    description:
      "Eligible routes are targeted within 60 minutes from pickup confirmation.",
    href: "/1-hour-delivery",
  },
  {
    id: "faq-proof",
    type: "faq",
    title: "Do you provide proof of delivery?",
    description:
      "Yes. Signature is standard, with photo proof available on select options.",
    href: "/1-hour-delivery",
  },
  {
    id: "faq-availability",
    type: "faq",
    title: "Where is service available?",
    description: "Same Hour Delivery is available in select metro areas.",
    href: "/contact",
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const parseResult = searchQuerySchema.safeParse({
      q: searchParams.get("q") ?? "",
      type: searchParams.get("type") ?? "all",
    });

    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid query parameters",
          issues: parseResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { q, type } = parseResult.data;
    const query = q.toLowerCase();

    const filtered = SEARCH_INDEX.filter((item) => {
      const inScope =
        type === "all" || (type === "services" && item.type === "service") || (type === "faqs" && item.type === "faq");

      if (!inScope) return false;

      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    });

    return NextResponse.json(
      {
        success: true,
        query: q,
        type,
        count: filtered.length,
        results: filtered,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/search error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
