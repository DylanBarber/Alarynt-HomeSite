const ADMIN_SESSION_COOKIE = "alarynt_admin_session";
const SESSION_VALUE = "authenticated";

const DEFAULT_ADMIN_EMAIL = "admin@alarynt.local";
const DEFAULT_ADMIN_PASSWORD = "admin123";

export type AdminLoginPayload = {
  email: string;
  password: string;
};

export function getAdminSessionCookieName(): string {
  return ADMIN_SESSION_COOKIE;
}

export function getSessionCookieValue(): string {
  return SESSION_VALUE;
}

export function isAdminSessionValue(value: string | undefined): boolean {
  return value === SESSION_VALUE;
}

export function getAdminCredentials() {
  return {
    email: process.env.ADMIN_LOGIN_EMAIL ?? DEFAULT_ADMIN_EMAIL,
    password: process.env.ADMIN_LOGIN_PASSWORD ?? DEFAULT_ADMIN_PASSWORD,
  };
}

export function validateAdminLoginPayload(payload: unknown):
  | { success: true; data: AdminLoginPayload }
  | { success: false; error: string } {
  if (!payload || typeof payload !== "object") {
    return { success: false, error: "Invalid payload." };
  }

  const maybePayload = payload as Partial<AdminLoginPayload>;
  const email = typeof maybePayload.email === "string" ? maybePayload.email.trim() : "";
  const password = typeof maybePayload.password === "string" ? maybePayload.password : "";

  if (!email || !password) {
    return { success: false, error: "Email and password are required." };
  }

  return {
    success: true,
    data: {
      email,
      password,
    },
  };
}

export function isValidAdminCredentials(payload: AdminLoginPayload): boolean {
  const credentials = getAdminCredentials();
  return payload.email === credentials.email && payload.password === credentials.password;
}
