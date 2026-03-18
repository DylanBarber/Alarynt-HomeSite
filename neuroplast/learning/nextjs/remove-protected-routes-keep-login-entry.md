# Learning: Remove protected routes while keeping login entry
#learning

## Context
When removing an authenticated module surface but keeping login, route-guard and post-login assumptions often still point to deleted destinations.

## Practice
- Remove protected module routes and their config sources together.
- Immediately update login success behavior so it does not redirect to removed routes.
- Update route guards/proxy behavior to allow only remaining admin entry routes.
- Run a reference search for removed paths (e.g., `/admin/onboarding`) before validation.

## Why it matters
This prevents broken redirects, dangling imports, and confusing UX after login when downstream pages no longer exist.

## Related
- [Plan: Admin Panel Removal, Keep Login](../../plans/admin-panel-removal-keep-login.md)
