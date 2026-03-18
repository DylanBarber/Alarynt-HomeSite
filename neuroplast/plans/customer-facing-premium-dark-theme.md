# Plan: Customer-Facing Premium Dark Theme

## Goal
Apply a dark-only premium visual theme to the customer-facing site while preserving existing content structure, flows, and accessibility expectations.

## Source References
- `ARCHITECTURE.md`
- `obsidian/Customer Facing Page.md`
- `obsidian/Front-End Architecture.md`
- `obsidian/Alarynt Brand Usage Guide.md`
- `brain/inst.md`

## Work Breakdown
1. **Set dark design tokens**
   - Update global token values in `web/src/app/globals.css` for dark background, light foreground, elevated surfaces, and premium contrast accents.
2. **Align customer-facing components to dark tokens**
   - Replace light hardcoded classes (`bg-white`, light-only text colors) with tokenized backgrounds/text for readability.
   - Ensure CTA and secondary action buttons remain visually distinct.
3. **Logo/readability alignment**
   - Update wordmark text color usage for dark surfaces while preserving accent styling.
4. **Validation checks**
   - Run lint and build in `web/`.
   - Perform visual consistency spot-check assumptions through class/token inspection.
5. **Execution documentation**
   - Append today's changelog entry with dark theme changes.
   - Record a learning note under `brain/learning`.

## Validation Criteria
- Marketing page renders with a dark background and readable text hierarchy.
- Inputs/cards/surfaces no longer rely on white backgrounds.
- Primary and secondary CTAs remain clear on dark surfaces.
- `npm run lint` and `npm run build` succeed in `web/`.

## Changelog Links
- [Changelog - 2026-03-13](../project-concept/changelog/2026-03-13.md)
