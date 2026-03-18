import { NextRequest, NextResponse } from "next/server";
import {
  getAdminSessionCookieName,
  getSessionCookieValue,
  isValidAdminCredentials,
  validateAdminLoginPayload,
} from "@/lib/adminAuth";

function isAllowedOrigin(origin: string | null, host: string | null): boolean {
  if (!origin || !host) {
    return true;
  }

  try {
    return new URL(origin).host === host;
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

  const validation = validateAdminLoginPayload(payload);
  if (!validation.success) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  if (!isValidAdminCredentials(validation.data)) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true }, { status: 200 });
  response.cookies.set({
    name: getAdminSessionCookieName(),
    value: getSessionCookieValue(),
    path: "/",
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
