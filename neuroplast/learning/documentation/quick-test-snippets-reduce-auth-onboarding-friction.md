# Learning: Quick-test snippets reduce auth onboarding friction

## Context
After introducing MVP admin auth, documentation covered env variables but lacked a concise behavior verification flow.

## Mistake
- Assumed env docs were enough for local validation.
- This leaves redirect/session expectations implicit and easy to misinterpret.

## Correction
- Added a short "MVP Admin Login Quick Test" section in `web/README.md` with expected login, redirect, and logout outcomes.

## Rule Going Forward
- For any auth or routing change, add a copy-paste-friendly quick test section showing expected path transitions.

## Related
- [Learning: `.env.example` should be the setup source of truth](./env-example-should-be-source-of-truth.md)
- [Plan: Admin MVP Login Quick-Test Documentation](../../plans/admin-mvp-login-quick-test-doc.md)
