# Plan: Alarynt Brand Kit Rollout
#plan

## Goal
Apply the new Alarynt branding kit across the customer-facing web experience and project documentation, replacing prior brand naming everywhere in-repo.

## References
- `brain/learning/tooling/windows-apply-patch-paths.md`
- `brain/learning/typescript/rhf-zod-input-output-types.md`
- Brand kit provided in current task thread

## Work Breakdown
1. **Establish brand system tokens**
   - Update global CSS variables for palette and typography hooks.
   - Ensure heading/body/mono font roles map to the kit.
2. **Normalize brand identity in web app**
   - Update metadata/title/description to Alarynt.
   - Ensure all legacy brand references are replaced with Alarynt.
3. **Implement logo usage**
   - Add reusable logo component supporting wordmark, monochrome, and icon-only modes.
   - Integrate logo into header/footer and relevant UI points.
4. **Apply messaging and visual refresh**
   - Align hero/taglines/value phrases to new positioning.
   - Re-style primary CTAs and section surfaces to brand palette.
5. **Update project documentation and idea artifacts**
   - Update `ARCHITECTURE.md` brand naming.
   - Update Obsidian references if old branding appears.
6. **Validation and execution records**
   - Run lint/build checks.
   - Update changelog for today.
   - Document lessons learned in `brain/learning/`.

## Validation Criteria
- No remaining in-repo references to the previous brand name.
- Marketing page uses brand palette, typography roles, and new messaging.
- Lint and build complete successfully.
- Changelog and learning notes are updated.

## Changelog Links
- [Changelog - 2026-03-13](../project-concept/changelog/2026-03-13.md)
