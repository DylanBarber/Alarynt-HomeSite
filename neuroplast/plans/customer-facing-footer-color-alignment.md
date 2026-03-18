# Plan: Customer-Facing Footer Color Alignment

## Goal
Align footer background color with the premium dark theme so it visually matches surrounding surfaces and preserves readable contrast.

## Source References
- `ARCHITECTURE.md`
- `brain/inst.md`
- `brain/learning/design/premium-dark-token-theming.md`
- `web/src/components/customer-facing/SiteFooter.tsx`

## Work Breakdown
1. **Confirm current footer token usage**
   - Verify footer is using a brand token inconsistent with dark surface sections.
2. **Apply token-consistent footer background**
   - Replace footer background token with `--brand-surface`.
3. **Validate implementation**
   - Run lint and build in `web/`.
4. **Document execution**
   - Update `obsidian/changelog/2026-03-13.md` with the footer color alignment change.
   - Record a learning note under `brain/learning/`.

## Validation Criteria
- Footer background uses `bg-[var(--brand-surface)]`.
- Footer remains readable with current text and border classes.
- `npm run lint` and `npm run build` pass in `web/`.

## Changelog Links
- [Changelog - 2026-03-13](../project-concept/changelog/2026-03-13.md)
