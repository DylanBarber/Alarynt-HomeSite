import { NextRequest, NextResponse } from "next/server";
import { parseContactForm, zodErrorToContactFormErrors } from "@/lib/contactForm";

function isAllowedOrigin(origin: string | null, host: string | null): boolean {
  if (!origin || !host) {
    return true;
  }

  try {
    const originHost = new URL(origin).host;
    return originHost === host;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!isAllowedOrigin(origin, host)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const legalLinksEnabled = process.env.NEXT_PUBLIC_ENABLE_LEGAL_LINKS === "true";
  const parsed = parseContactForm(payload, legalLinksEnabled);

  if (!parsed.success) {
    const errors = zodErrorToContactFormErrors(parsed.error);
    return NextResponse.json({ error: "Validation failed.", errors }, { status: 400 });
  }

  const normalizedPayload = parsed.data;

  return NextResponse.json(
    {
      ok: true,
      submittedAt: new Date().toISOString(),
      message: "Contact request accepted.",
      received: {
        name: normalizedPayload.name,
        email: normalizedPayload.email,
      },
    },
    { status: 200 },
  );
}
