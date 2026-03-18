# Learning: RHF + Zod input/output typing mismatch
#learning

## Context
During the migration to React Hook Form + Zod, TypeScript build failed due to resolver generic mismatch.

## Mistake
- Used `z.infer` output type as RHF form generic while schema included optional fields with defaults.
- RHF resolver expected input shape while form code was typed as output shape.

## Resolution
- Split schema types into:
  - `ContactFormInput = z.input<typeof schema>` for `useForm` and form defaults.
  - `ContactFormData = z.output<typeof schema>` for parsed/normalized server-safe data.
- Updated zod error mapping helper to accept `ZodError<ContactFormInput>`.

## Rule Going Forward
- For RHF + Zod integrations, type `useForm` with `z.input` and consume parsed values as `z.output`.

## Related
- [Windows apply_patch path handling](../tooling/windows-apply-patch-paths.md)
- [Plan: Contact Form RHF + Zod Migration](../../plans/customer-facing-rhf-zod-migration.md)
