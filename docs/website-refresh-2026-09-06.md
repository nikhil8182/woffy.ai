# Woffy website refresh

## Design

Warm robotics workshop: paper #F5F3EC, ink #1B2925, amber #E9A53B, sage #DEE5D9. Self-hosted Bricolage Grotesque and DM Sans variable fonts. Six homepage beats: introduction, vision, real workbench, origin story, questions, updates. Compact navigation, consistent controls, reduced-motion support, visible focus, and a native modal dialog.

The Woffy robot illustration is an AI-generated design concept. The SO-101 image is a real photograph of the project learning bench. Neither represents a completed production companion robot. Hero WebP is 42.7 KB; bench WebP is 89.5 KB. Original generation is kept outside the deployment in output/imagegen.

## Content and behavior

Replaced unsupported hardware numbers, traction claims, old dated milestones, launch percentages, and public confidential investor material with current research status and evidence gates. All footer destinations now resolve to real pages or contacts. Added plain-language privacy, terms, and cookie notices. No marketing analytics initialization remains in the active application. Existing gesture experiment stays separately labelled as a browser demo.

Updates form requires email and explicit consent; name is optional. The server normalizes email and creates a SHA-256 keyed Firestore document, without public reads or overwrites. Duplicate submissions return the same success response. Rate protection, input bounds, and a honeypot limit abuse. Confirmation is shown on screen; no receipt email is promised because a sender is not configured. Optional Resend integration supports receipts when configured later.

Chat uses the configured OpenAI provider with a grounded project prompt, bounded history, timeouts, and actionable errors. A clearly labelled project FAQ remains available if the provider fails. No long-term application chat database; OpenAI requests specify store:false. Server credentials never enter the frontend bundle. Per-instance request limits are not a distributed firewall.

## Validation before production

- Production build on Server-Pc passed.
- ESLint passed on the refreshed app and APIs. The preserved legacy gesture experiment is excluded from the new lint scope.
- 16 service tests passed, including provider failure/recovery, history validation, consent, write failures, duplicate behavior, rate limits, and honeypot handling.
- Desktop and phone screenshots inspected. Supporting routes checked at 320, 390, 768, and 1280 px with no page overflow or placeholder links.
- Preview chat returned HTTP 200, mode ai, and correctly said purchasing and battery specifications are unconfirmed.
- Preview signup returned HTTP 200 from live Firebase. Repeating the same normalized founder address returned HTTP 200 without a new document.
- Exact Firestore rules verified in an isolated official emulator: initial create 200, duplicate 409, public read 403, invalid write 403. Production public reads also remain denied.

Source backup: commit 605bbb03, tag codex/woffy-before-refresh-20260906. The original local checkout was preserved. Tracked dependencies and environment files were removed from the source branch; earlier history remains recoverable.

## Correction: preserve the original website

The founder clarified that the request was for targeted UI corrections, not a complete redesign, and that real photos must not be used. The original layouts, pink/indigo styling, Woffy concept artwork, section composition, model switchers, and dark animated chat were restored from605bbb03. The replacement white/amber mascot and real SO-101 bench photograph were removed from the deployed site.

Retained only functional and focused interface corrections: secure signup, accessible dialog, working AI chat/history/retry, real navigation and policy links, mobile hero ordering, and clear concept/status labels. Supporting pages preserve their original visual structures while correcting unsupported claims and stale dates. The chat header now provides a home link. The earlier full redesign is superseded.
