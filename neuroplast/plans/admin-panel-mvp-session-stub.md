# Plan: Admin Panel MVP (Session Stub)
#plan

## Goal
Implement the planned authenticated admin panel in `web/` using an MVP cookie/session stub for access control and navigation.

## References
- `neuroplast/project-concept/Admin Panel.md`
- `neuroplast/project-concept/Admin Panel Architecture.md`
- `neuroplast/project-concept/Front-End Architecture.md`
- `ARCHITECTURE.md`
- `neuroplast/act.md`

## Work Breakdown
1. Scaffold admin route group and deep-linkable module routes (`/admin/*`).
2. Implement MVP auth flow:
   - `/admin/login` UI
   - `POST /api/admin/login` cookie session issue
   - `POST /api/admin/logout` session clear
   - server-side guard for protected admin routes
3. Build reusable admin shell components:
   - header with tenant context
   - module navigation
   - shared card/status/empty-state primitives
4. Implement module pages:
   - Onboarding
   - Billing/Usage
   - Useful Links
   - Service Contact
5. Add config/content modules for route links and module payloads.
6. Run quality checks (`npm run lint`, `npm run build`).
7. Update architecture/changelog/learning artifacts per execution instructions.

## Validation Criteria
- `/admin/login` authenticates against MVP credentials and redirects to `/admin/onboarding`.
- Protected admin routes redirect unauthenticated users to `/admin/login`.
- All planned modules are present as deep-link routes.
- Shared admin shell and navigation are responsive and keyboard-friendly.
- Lint and build pass.

## Changelog Links
- [Changelog - 2026-03-16](../project-concept/changelog/2026-03-16.md)
