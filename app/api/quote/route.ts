import { NextResponse } from "next/server";
import { quoteRequestSchema } from "@/lib/validators";

const SERVICE_BASE_RATES: Record<string, number> = {
  "SHD-STD": 39,
  "SHD-PRIORITY": 59,
  "SHD-FRAGILE": 69,
  "SHD-BIZ": 0,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parseResult = quoteRequestSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid quote request payload",
          issues: parseResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const payload = parseResult.data;
    const baseRate = SERVICE_BASE_RATES[payload.serviceSku] ?? 0;
    const distanceFee = Math.round(payload.distanceKm * 1.25);
    const priorityFee = payload.priority === "priority" ? 15 : 0;
    const estimatedTotal = payload.serviceSku === "SHD-BIZ" ? null : baseRate + distanceFee + priorityFee;

    return NextResponse.json(
      {
        success: true,
        message: "Mock quote generated successfully.",
        confirmationId: `QTE-${Date.now()}`,
        quote: {
          currency: "USD",
          serviceSku: payload.serviceSku,
          estimatedTotal,
          breakdown:
            estimatedTotal === null
              ? "Business account pricing is custom and provided by sales."
              : {
                  baseRate,
                  distanceFee,
                  priorityFee,
                },
          disclaimer:
            "This is a mock estimate for prototype purposes only and not a final price.",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/quote error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
