import { NextResponse } from "next/server";
import { contactRequestSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parseResult = contactRequestSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid contact request payload",
          issues: parseResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const payload = parseResult.data;

    return NextResponse.json(
      {
        success: true,
        message:
          "Thanks—your request has been sent. We’ll follow up shortly with next steps.",
        submission: {
          referenceId: `CNT-${Date.now()}`,
          requestType: payload.requestType,
          city: payload.city,
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
