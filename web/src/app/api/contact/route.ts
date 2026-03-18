import { NextRequest, NextResponse } from "next/server";
import { parseContactForm, zodErrorToContactFormErrors } from "@/lib/contactForm";
import { getDb } from "@/lib/db";

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

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

async function verifyTurnstileToken(token: string): Promise<boolean> {
  if (!TURNSTILE_SECRET) return true;

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: TURNSTILE_SECRET, response: token }),
    });
    const data = await res.json();
    return data.success === true;
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

  const body = payload as Record<string, unknown>;
  const turnstileToken = typeof body.turnstileToken === "string" ? body.turnstileToken : "";

  if (TURNSTILE_SECRET) {
    if (!turnstileToken) {
      return NextResponse.json({ error: "Verification challenge is required." }, { status: 403 });
    }
    const valid = await verifyTurnstileToken(turnstileToken);
    if (!valid) {
      return NextResponse.json({ error: "Verification challenge failed. Please try again." }, { status: 403 });
    }
  }

  const legalLinksEnabled = process.env.NEXT_PUBLIC_ENABLE_LEGAL_LINKS === "true";
  const parsed = parseContactForm(payload, legalLinksEnabled);

  if (!parsed.success) {
    const errors = zodErrorToContactFormErrors(parsed.error);
    return NextResponse.json({ error: "Validation failed.", errors }, { status: 400 });
  }

  const data = parsed.data;

  try {
    const sql = getDb();
    const [row] = await sql`
      INSERT INTO contact_submissions (
        name, email, company_name, phone_number,
        message, terms_accepted, privacy_accepted
      ) VALUES (
        ${data.name}, ${data.email}, ${data.companyName}, ${data.phoneNumber},
        ${data.message}, ${data.termsAccepted}, ${data.privacyAccepted}
      )
      RETURNING id, submitted_at
    `;

    return NextResponse.json(
      {
        ok: true,
        submittedAt: row.submitted_at,
        message: "Contact request accepted.",
        received: { name: data.name, email: data.email },
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("Failed to persist contact submission:", err);
    return NextResponse.json(
      { error: "Unable to process your request. Please try again." },
      { status: 500 },
    );
  }
}
