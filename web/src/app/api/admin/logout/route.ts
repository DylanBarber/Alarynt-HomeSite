import { NextResponse } from "next/server";
import { getAdminSessionCookieName } from "@/lib/adminAuth";

export async function POST() {
  const response = NextResponse.json({ ok: true }, { status: 200 });
  response.cookies.set({
    name: getAdminSessionCookieName(),
    value: "",
    path: "/",
    maxAge: 0,
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
