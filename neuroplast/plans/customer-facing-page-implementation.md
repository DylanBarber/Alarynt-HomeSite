# Plan: Customer Facing Page Implementation

## Goal
Implement the Customer Facing Page from `obsidian/` documentation as a Next.js app in `web/`.

## Source References
- `obsidian/Customer Facing Page.md`
- `obsidian/Customer Facing Page Architecture.md`
- `obsidian/Front-End Architecture.md`

## Work Breakdown
1. **Scaffold app**
   - Create Next.js TypeScript App Router project at `web/`
2. **Define architecture baseline**
   - Create root `ARCHITECTURE.md` if absent
3. **Build customer-facing route**
   - Add `src/app/(marketing)/page.tsx`
   - Implement sections: Hero/Mission, Capabilities, Contact/Demo, Admin Login
4. **Build validation and API path**
   - Add shared contact form validation module
   - Add `/api/contact` POST endpoint with payload checks and origin guard
5. **UX/accessibility/security basics**
   - Semantic sections, labels, focus-visible styles
   - Duplicate submit prevention + status messaging
6. **Quality checks**
   - Run `npm run lint`
   - Run `npm run build`
7. **Execution documentation**
   - Update changelog in `obsidian/changelog/YYYY-MM-DD.md`
   - Document learnings in `brain/learning/*`

## Validation Criteria
- Customer-facing page renders complete section model from docs
- Contact form validates required fields, email, and phone format
- Submission path succeeds/fails with visible UI feedback
- Build and lint complete successfully

## Changelog Links
- [Changelog - 2026-03-12](../project-concept/changelog/2026-03-12.md)
