# Learning: `.env.example` should be the setup source of truth

## Context
After adding MVP admin login credentials, README examples risk drifting from actual runtime keys unless a checked-in env template is maintained.

## Mistake
- Environment key documentation can end up duplicated only in README prose.
- This increases drift risk when keys are added/renamed.

## Correction
- Added `web/.env.example` with all current keys.
- Updated README to instruct copying from `.env.example` into `.env.local`.

## Rule Going Forward
- Whenever env keys change, update `.env.example` first, then mirror any explanatory context in README.

## Related
- [Learning: internal README should map runtime flags and API contracts](./internal-readme-should-map-runtime-flags-and-api-contracts.md)
- [Plan: Admin MVP Env Example + Credentials Documentation](../../plans/admin-mvp-env-example-and-credentials-doc.md)
