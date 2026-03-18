# Learning: premium dark theming needs token-only surfaces

## Context
While applying a premium dark theme to the customer-facing site, a few controls and cards still used light hardcoded classes (like `bg-white`), which caused inconsistent contrast and visual hierarchy.

## Mistake
- I initially relied on global token updates and missed all component-level hardcoded light surfaces.

## Correction
- Replaced remaining hardcoded light backgrounds and low-contrast error text with token-driven classes.
- Updated logo wordmark and heading defaults to ensure readability on dark backgrounds.

## Rule Going Forward
- For theme migrations, run a targeted sweep for hardcoded light classes (`bg-white`, light text/border assumptions) after token changes.
- Keep all sections on shared role-based tokens (background/surface/foreground/muted) to avoid drift.

## Related
- [Learning: Windows path handling with apply_patch](../tooling/windows-apply-patch-paths.md)
