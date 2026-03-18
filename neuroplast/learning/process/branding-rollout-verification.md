# Learning: verify full-string brand migrations
#learning

## Context
During the Alarynt rebrand, a search initially showed one remaining legacy brand reference in an Obsidian workspace recent-files list.

## Mistake
- I replaced the primary occurrence but missed an additional entry in the same file section.

## Correction
- Re-ran content search for legacy brand strings after each patch cycle.
- Removed the remaining stale reference and confirmed no further matches.

## Rule Going Forward
- For rename/rebrand tasks, always run at least two validation passes:
  1. broad string search after main edits,
  2. final confirmation search after any cleanup patches.

## Related
- [Learning: Windows path handling with apply_patch](../tooling/windows-apply-patch-paths.md)
- [Plan: Alarynt Brand Kit Rollout](../../plans/alarynt-brand-kit-rollout.md)
