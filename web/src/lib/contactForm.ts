import { z, ZodError } from "zod";

const phoneRegex = /^\+?[0-9()\-\s]{7,20}$/;

const baseContactFormSchema = z.object({
  name: z.string().trim().min(1, "This field is required."),
  email: z.string().trim().email("Enter a valid email address."),
  companyName: z.string().trim().min(1, "This field is required."),
  phoneNumber: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(phoneRegex, "Enter a valid phone number."),
  message: z.string().trim().max(4000).optional().default(""),
  termsAccepted: z.boolean().optional().default(false),
  privacyAccepted: z.boolean().optional().default(false),
});

export type ContactFormInput = z.input<typeof baseContactFormSchema>;
export type ContactFormData = z.output<typeof baseContactFormSchema>;
export type ContactFormErrors = Partial<Record<keyof ContactFormInput, string>>;

export function getContactFormSchema(legalLinksEnabled: boolean) {
  return baseContactFormSchema.superRefine((data, context) => {
    if (legalLinksEnabled && !data.privacyAccepted) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["privacyAccepted"],
        message: "Please acknowledge the privacy statement.",
      });
    }
  });
}

export function zodErrorToContactFormErrors(error: ZodError<ContactFormInput>): ContactFormErrors {
  const fieldErrors: ContactFormErrors = {};

  for (const issue of error.issues) {
    const field = issue.path[0];
    if (typeof field !== "string") {
      continue;
    }

    const typedField = field as keyof ContactFormInput;
    if (!fieldErrors[typedField]) {
      fieldErrors[typedField] = issue.message;
    }
  }

  return fieldErrors;
}

export function validateContactForm(payload: unknown, legalLinksEnabled: boolean): ContactFormErrors {
  const parsed = getContactFormSchema(legalLinksEnabled).safeParse(payload);
  if (parsed.success) {
    return {};
  }

  return zodErrorToContactFormErrors(parsed.error);
}

export function parseContactForm(payload: unknown, legalLinksEnabled: boolean) {
  return getContactFormSchema(legalLinksEnabled).safeParse(payload);
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
