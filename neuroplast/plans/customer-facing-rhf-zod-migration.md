# Plan: Contact Form RHF + Zod Migration
#plan

## Goal
Migrate the customer-facing Contact/Demo form from manual state + manual validation to React Hook Form + Zod while preserving current UX behavior.

## Inputs
- User decision: "just extend it" for `web/src/lib/contactForm.ts`
- Existing implementation:
  - `web/src/components/customer-facing/ContactDemoForm.tsx`
  - `web/src/lib/contactForm.ts`
  - `web/src/app/api/contact/route.ts`

## Related Learnings
- Use repository-relative paths with `apply_patch` on Windows:
  - `brain/learning/tooling/windows-apply-patch-paths.md`

## Work Breakdown
1. Install dependencies
   - `react-hook-form`
   - `zod`
   - `@hookform/resolvers`
2. Extend `contactForm.ts`
   - Add shared Zod schema
   - Add legal-link conditional validation
   - Add parse helper and zod-error mapping helper
3. Refactor `ContactDemoForm.tsx`
   - Move to RHF `useForm`
   - Use `zodResolver`
   - Preserve status messaging and analytics behavior
4. Update API route
   - Validate with shared schema parse helper
   - Return structured field errors on 400
5. Verification
   - Run lint and build
6. Documentation
   - Update daily changelog
   - Record execution learning per `/brain/think.md`

## Acceptance Criteria
- Client-side validation powered by Zod via RHF resolver
- Server-side validation powered by same shared schema logic
- Required/email/phone/privacy behaviors maintained
- Duplicate submit prevention maintained via `isSubmitting`
- `npm run lint` and `npm run build` succeed

## Changelog Links
- [Changelog - 2026-03-12](../project-concept/changelog/2026-03-12.md)
