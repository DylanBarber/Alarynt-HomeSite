# Learning: footer backgrounds should use surface tokens in dark themes

## Context
While adjusting customer-facing visuals, the footer used a bright primary brand background token, which looked inconsistent against the rest of the premium dark page surfaces.

## Mistake
- I left the footer on `--brand-primary` while most structural sections used `--brand-surface`.

## Correction
- Updated `web/src/components/customer-facing/SiteFooter.tsx` to use `bg-[var(--brand-surface)]` for the footer background.
- Revalidated with `npm run lint` and `npm run build` in `web/`.

## Rule Going Forward
- In dark-themed layouts, reserve primary brand tokens for emphasis elements (CTAs, accents), and use shared surface tokens for structural containers like header/footer/sections.

## Related
- [Learning: premium dark theming needs token-only surfaces](./premium-dark-token-theming.md)
- [Plan: Customer-Facing Footer Color Alignment](../../plans/customer-facing-footer-color-alignment.md)
