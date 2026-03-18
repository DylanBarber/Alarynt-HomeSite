# Learning: Windows path handling with apply_patch
#learning

## Context
While creating files, absolute Windows paths passed to `apply_patch` produced an unintended root-level file named `C`.

## Mistake
- Used absolute path targets in patch headers.
- Resulted in incorrect file placement.

## Correction
- Removed the unintended file.
- Reapplied patches using repository-relative paths (e.g., `web/src/lib/contactForm.ts`).

## Rule Going Forward
- Prefer repository-relative paths for `apply_patch` operations to avoid path parsing ambiguity on Windows.

## Related
- [Plan: Customer Facing Page Implementation](../../plans/customer-facing-page-implementation.md)
