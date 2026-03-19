"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useRef, useState } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { trackEvent } from "@/lib/analytics";
import { ContactFormInput, getContactFormSchema } from "@/lib/contactForm";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type ContactDemoFormProps = {
  legalLinksEnabled: boolean;
};

const initialValues: ContactFormInput = {
  name: "",
  email: "",
  companyName: "",
  phoneNumber: "",
  message: "",
  termsAccepted: false,
  privacyAccepted: false,
};

export function ContactDemoForm({ legalLinksEnabled }: ContactDemoFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const turnstileToken = useRef<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const schema = useMemo(() => getContactFormSchema(legalLinksEnabled), [legalLinksEnabled]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: initialValues,
  });

  async function onSubmit(values: ContactFormInput) {
    if (TURNSTILE_SITE_KEY && !turnstileToken.current) {
      setStatus("error");
      setStatusMessage("Please complete the verification challenge.");
      return;
    }

    setStatusMessage("Submitting your request...");
    trackEvent("contact_form_submit_attempt", { hasMessage: Boolean(values.message?.trim()) });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, turnstileToken: turnstileToken.current }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          setStatus("error");
          setStatusMessage("Please review your form details and try again.");
          return;
        }

        throw new Error("Submission failed");
      }

      setStatus("success");
      setStatusMessage("Thanks! We received your request and will reach out shortly.");
      reset(initialValues);
      turnstileToken.current = null;
      turnstileRef.current?.reset();
      trackEvent("contact_form_submit_success");
    } catch {
      setStatus("error");
      setStatusMessage("We could not submit your request. Please try again.");
      turnstileToken.current = null;
      turnstileRef.current?.reset();
      trackEvent("contact_form_submit_failure");
    }
  }

  function onInvalidSubmit() {
    setStatus("error");
    setStatusMessage("Please fix the highlighted fields and try again.");
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit, onInvalidSubmit)} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Name" register={register("name")} error={errors.name?.message} required />
        <Field id="email" label="Email" type="email" register={register("email")} error={errors.email?.message} required />
        <Field
          id="companyName"
          label="Company Name"
          register={register("companyName")}
          error={errors.companyName?.message}
          required
        />
        <Field
          id="phoneNumber"
          label="Phone Number"
          type="tel"
          register={register("phoneNumber")}
          error={errors.phoneNumber?.message}
          required
        />
      </div>

      <label className="block text-sm font-medium" htmlFor="message">
        Message (optional)
        <textarea
          id="message"
          className="mt-1 min-h-28 w-full rounded-md border border-[var(--brand-muted)] bg-[var(--background)] px-3 py-2"
          {...register("message")}
        />
      </label>

      {legalLinksEnabled ? (
        <label className="flex items-start gap-2 text-sm" htmlFor="privacyAccepted">
          <input id="privacyAccepted" type="checkbox" {...register("privacyAccepted")} />
          <span>
            I acknowledge the Privacy Statement for this form submission.
            {errors.privacyAccepted?.message ? (
              <span className="mt-1 block text-xs text-red-300">{errors.privacyAccepted.message}</span>
            ) : null}
          </span>
        </label>
      ) : null}

      <div aria-live="polite" className="text-sm">
        {statusMessage ? (
          <p
              className={
                status === "error"
                  ? "text-red-300"
                  : status === "success"
                    ? "text-[var(--brand-accent)]"
                    : "text-[var(--foreground)]/75"
              }
          >
            {statusMessage}
          </p>
        ) : null}
      </div>

      {TURNSTILE_SITE_KEY ? (
        <Turnstile
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY}
          onSuccess={(token) => { turnstileToken.current = token; }}
          onExpire={() => { turnstileToken.current = null; }}
          onError={() => { turnstileToken.current = null; }}
          options={{ theme: "dark", size: "invisible" }}
        />
      ) : null}

      <button
        className="rounded-md bg-[var(--brand-cta)] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-[var(--brand-cta)]/50"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Submitting..." : "Request Demo"}
      </button>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
};

function Field({ id, label, register, error, type = "text", required = false }: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <label className="block text-sm font-medium" htmlFor={id}>
      {label}
      {required ? <span className="text-red-300"> *</span> : null}
      <input
        id={id}
        type={type}
        {...register}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-1 w-full rounded-md border border-[var(--brand-muted)] bg-[var(--background)] px-3 py-2"
      />
      {error ? (
        <span className="mt-1 block text-xs text-red-300" id={errorId}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
