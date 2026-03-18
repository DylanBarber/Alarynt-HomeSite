# Learning: Next.js proxy route protection for admin groups
#learning

## Context
While implementing the admin panel MVP auth gate in Next.js 16, route protection was first added with the legacy `middleware.ts` convention.

## Mistake
- Implemented access control in `middleware.ts`, which produced a deprecation warning in build output.

## Correction
- Migrated to `src/proxy.ts` with equivalent matcher and redirect logic for protected `/admin/*` paths.
- Kept login redirect behavior and authenticated-user bypass on `/admin/login` unchanged.

## Rule Going Forward
- For Next.js 16+ projects, prefer `proxy.ts` instead of `middleware.ts` for route gating.
- Treat framework deprecation warnings during build as immediate cleanup tasks in the same execution cycle.

## Related
- [Learning: Windows path handling with apply_patch](../tooling/windows-apply-patch-paths.md)
- [Plan: Admin Panel MVP (Session Stub)](../../plans/admin-panel-mvp-session-stub.md)
