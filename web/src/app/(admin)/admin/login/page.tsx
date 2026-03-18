"use client";

import { FormEvent, useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    trackEvent("admin_login_viewed");
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      setErrorMessage("Unable to sign in. Check your credentials and try again.");
      trackEvent("admin_login_failed", { email });
      setIsSubmitting(false);
      return;
    }

    trackEvent("admin_login_success", { email });
    setSuccessMessage("Login successful. The admin panel is currently unavailable.");
    setIsSubmitting(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 py-10 text-[var(--foreground)] sm:px-6">
      <section className="w-full max-w-md rounded-xl border border-[var(--brand-muted)] bg-[var(--brand-surface)] p-6">
        <h1 className="text-2xl font-bold tracking-tight">Admin Login</h1>
        <p className="mt-2 text-sm text-[var(--foreground)]/70">Sign in to verify admin access.</p>

        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="admin-email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              className="w-full rounded-md border border-[var(--brand-muted)] bg-[var(--background)] px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="mb-1 block text-sm font-medium">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              className="w-full rounded-md border border-[var(--brand-muted)] bg-[var(--background)] px-3 py-2"
            />
          </div>

          {errorMessage ? (
            <p role="status" className="rounded-md border border-rose-500/50 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
              {errorMessage}
            </p>
          ) : null}

          {successMessage ? (
            <p role="status" className="rounded-md border border-emerald-500/50 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
              {successMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-[var(--brand-primary)] px-4 py-2 text-sm font-semibold text-[var(--background)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-4 text-xs text-[var(--foreground)]/60">
          MVP session stub credentials are configured via server env vars.
        </p>
      </section>
    </main>
  );
}
