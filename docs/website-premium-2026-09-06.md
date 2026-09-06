# Woffy premium design pass | 6 September 2026

The founder's latest instruction authorizes a broader premium redesign across the website, new generated imagery, and scroll effects. It supersedes the earlier request for limited visual changes. The constraint against real photos remains in force.

## Direction

This feels like a considered companion-robot design studio. Preserve Woffy's ivory body, pink ears, dark face and cyan eyes. Use fog paper (#F2F4F1), deep teal ink (#152A2B), mineral mint (#BBD8D2), restrained coral (#DC6C50), and muted green-grey (#667572). Sora Variable provides the display type; DM Sans Variable supports body copy. Both are self-hosted.

The composition gives the character room, uses clear typography and fewer decorative panels, and tells a product story. Scroll-linked layers, a sticky detail image, and a full-width interior concept support that story. Native scrolling remains intact and reduced-motion preferences remove transforms.

## Implementation

- New home, navigation, footer, signup styling and favicon; mobile menu makes the page behind it inert while open.
- Coordinated Design, About, Roadmap and Investors pages with useful model comparisons, current research, evidence-based milestones, and direct contact.
- Refined chat with a desktop portrait panel, conversation-first mobile layout, readable messages, loading, retry, reset and keyboard controls. No simulated device telemetry or inactive microphone.
- Generated studio, close-up and home concepts, each optimized to WebP with responsive variants. All three primary images total 261,922 bytes. No real photos appear in the new pages.
- Lazy-loaded secondary pages and the camera experiment. Initial JavaScript decreased from 651.72 kB to approximately 320 kB before gzip.
- Shared accessible privacy, terms, cookies, loading and missing-page experiences.
- Existing signup and AI service behavior retained. Regional positioning is South India in public copy and the chat prompt.

## Verification

Production build, scoped ESLint and all 16 existing API/helper tests passed before final browser verification. Browser checks cover desktop, tablet and 320/390 px phones; responsive images; no page-level horizontal overflow on checked routes; native dialog focus/Escape; Cloud/Titan selection; FAQ expansion; actual scroll transforms and sticky positioning; reduced-motion behavior; chat connection failure, retry without duplication and reset. The initial image and full character framing were corrected after inspecting the rendered page.

Backup before editing: tag `codex/woffy-before-premium-20260906` at commit `69eeff37`. Original checkout remains untouched.
