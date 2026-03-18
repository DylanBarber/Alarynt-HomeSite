import { links } from "@/lib/config";

type AdminLoginSectionProps = {
  forgotPasswordEnabled: boolean;
};

export function AdminLoginSection({ forgotPasswordEnabled }: AdminLoginSectionProps) {
  return (
    <section id="admin-login" aria-labelledby="admin-login-heading" className="scroll-mt-28 px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-xl border border-[var(--brand-muted)] bg-[var(--brand-surface)] p-8 md:flex-row md:items-center">
        <div>
          <h2 id="admin-login-heading" className="text-2xl font-bold tracking-tight">
            Existing customer?
          </h2>
          <p className="mt-2 max-w-xl text-[var(--foreground)]/75">Use your credentials to access onboarding, usage visibility, and support workflows.</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <a
            className="rounded-md bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-[var(--background)]"
            href={links.adminLogin}
          >
            Go to Admin Login
          </a>
          {forgotPasswordEnabled ? (
            <a className="text-sm text-[var(--brand-accent)] underline" href={links.forgotPassword}>
              Forgot password?
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
