# Plan: Remove Admin Panel Implementation, Keep Admin Login
#plan

## Goal
Remove the currently implemented admin panel surface from `web/` while preserving the existing customer-facing page and keeping the admin login flow available.

## References
- `neuroplast/act.md`
- `ARCHITECTURE.md`
- `web/src/app/(marketing)/page.tsx`
- `web/src/app/(admin)/admin/login/page.tsx`

## Work Breakdown
1. Remove admin panel implementation files:
   - `src/app/(admin)/admin/(panel)/*`
   - `src/components/admin/*`
   - `src/lib/adminConfig.ts`
2. Keep admin login implementation:
   - Preserve `/admin/login` page and `POST /api/admin/login`
   - Preserve server-side admin credential/session helpers
3. Align behavior after login:
   - Keep user on `/admin/login`
   - Show explicit success message: panel currently unavailable
4. Keep customer-facing page unchanged:
   - Preserve marketing page composition and admin-login entry links
5. Remove stale panel route assumptions:
   - Update proxy and config to eliminate `/admin/onboarding` dependency
6. Update architecture/concept/docs:
   - Update `ARCHITECTURE.md`
   - Update `web/README.md`
   - Update affected concept docs under `neuroplast/project-concept/`
7. Validate quality:
   - Run `npm run lint` and `npm run build` in `web/`
8. Record execution artifacts:
   - Add changelog entry for current date
   - Add at least one reusable learning note

## Validation Criteria
- Customer-facing page remains unchanged.
- `/admin/login` remains functional.
- Admin panel routes/components/config are removed from implementation.
- Lint and build pass.

## Changelog Links
- [Changelog - 2026-03-17](../project-concept/changelog/2026-03-17.md)
