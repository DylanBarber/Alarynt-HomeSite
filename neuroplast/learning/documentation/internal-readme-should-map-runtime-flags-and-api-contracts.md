# Learning: internal README should map runtime flags and API contracts
#learning

## Context
While converting `web/README.md` from template text to internal developer documentation, the key risk was documenting generic framework behavior instead of the actual implementation details used by the app.

## Mistake
- I initially scoped README edits around structure and setup only, which could have omitted operational details developers actually need during onboarding.

## Correction
- Explicitly documented runtime feature flags from `src/lib/config.ts`.
- Included concrete contact API behavior and response shapes from `src/app/api/contact/route.ts`.
- Added file-level customization map so contributors can locate edit points quickly.

## Rule Going Forward
- For internal READMEs, always include:
  1. command-level setup and verification,
  2. runtime flags/env behavior,
  3. API contracts for local integration points,
  4. direct file-path map for common modifications.

## Related
- [Learning: changelog plan-link completeness](../process/changelog-plan-link-completeness.md)
- [Plan: Web README Internal Dev Update](../../plans/web-readme-internal-dev-focused-update.md)
