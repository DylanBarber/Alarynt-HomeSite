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
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit, onInvalidSubmit)} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field id="name" label="Name" register={register("name")} error={errors.name?.message} required />
        <Field id="email" label="Work Email" type="email" register={register("email")} error={errors.email?.message} required />
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

      <div className="space-y-2">
        <label className="block text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest" htmlFor="message">
          The Biggest Mess Right Now
        </label>
        <textarea
          id="message"
          className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface py-3 px-3 min-h-28"
          placeholder="Spreadsheets, manual entry, broken APIs..."
          {...register("message")}
        />
      </div>

      {legalLinksEnabled ? (
        <label className="flex items-start gap-2 text-sm text-on-surface-variant" htmlFor="privacyAccepted">
          <input id="privacyAccepted" type="checkbox" className="mt-1" {...register("privacyAccepted")} />
          <span>
            I acknowledge the Privacy Statement for this form submission.
            {errors.privacyAccepted?.message ? (
              <span className="mt-1 block text-xs text-error">{errors.privacyAccepted.message}</span>
            ) : null}
          </span>
        </label>
      ) : null}

      <div aria-live="polite" className="text-sm">
        {statusMessage ? (
          <p className={status === "error" ? "text-error" : status === "success" ? "text-primary" : "text-on-surface-variant"}>
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

      <div className="text-center pt-2">
        <button
          className="w-full md:w-auto px-12 py-4 bg-primary text-on-primary font-bold rounded shadow-lg hover:bg-primary-fixed-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Submitting..." : "Book My Walkthrough"}
        </button>
      </div>
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
    <div className="space-y-2">
      <label className="block text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest" htmlFor={id}>
        {label}
        {required ? <span className="text-error"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        {...register}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface py-3 px-3"
      />
      {error ? (
        <span className="block text-xs text-error" id={errorId}>
          {error}
        </span>
      ) : null}
    </div>
  );
}
