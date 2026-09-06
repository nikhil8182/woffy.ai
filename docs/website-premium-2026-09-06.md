# Woffy design and content refresh | 6 September 2026

The founder requested a premium redesign across the site, then clarified that the entire product story and both physical editions must guide the imagery. No real photographs are used.

## Product direction

Reviewed every active route and the original source content. The existing concept animation provides the strongest visual reference: Cloud is a shaggy pink quadruped with floppy ears and cyan screen eyes; Titan is an angular silver quadruped with upright ears, articulated panels and amber eyes. The new studies preserve these distinct forms. Cutaways illustrate proposed systems, not engineering-ready construction.

The site restores the Loves / Connects / Protects vision, Kids / Companion / Care scenarios, home routines, expression, articulation, haptics, privacy controls and charging goals. Proposed capabilities remain labelled as development intentions. Robot-arm training is clearly distinguished from a completed autonomous companion. Unverified hardware numbers, availability claims, traction and performance guarantees are not presented as facts. Onwords is positioned in South India.

## Experience

- Ten generated studies: front, side, rear and cutaway for each edition, plus Cloud at home and Titan exploring. Twenty optimized WebP files including phone variants total approximately 1.32 MB; lower-page images are lazy loaded.
- Shared edition selection across the home hero and gallery. Keyboard-accessible angle controls announce changes. Design links carry the selected edition into the cutaway.
- Interactive internal-system callouts and exterior/cutaway switching. Each image retains its original proportions so callouts align at every size.
- Opt-in concept animation, gentle parallax, sticky product galleries and restrained transitions. Reduced-motion preferences remove transforms; native scrolling stays intact. No claim of a live 3D model or complete 360-degree asset.
- Coordinated home, story, design, roadmap, investors, chat, gesture experiment and policy pages. Sora and DM Sans are self-hosted.
- Chat retains actual AI/FAQ modes, bounded history, errors, retry and reset. Suggestions do not summon the phone keyboard. The guide knows the two editions and the limits of current development.
- Camera experiment opens only after an explicit action; stream/model/frame-loop cleanup covers stop, unmount, initialization errors and late permissions. Optional synthesized gesture sounds default off.
- Native signup dialog retains consent, validation, real storage, duplicate-safe success, focus management and Escape handling.

## Verification

Production builds and scoped lint passed. All 18 API/helper tests pass, including edition knowledge and existing provider/signup contracts. Eleven isolated mocked camera/chat lifecycle checks passed on the build server; no physical camera permission was granted.

Rendered checks cover 320/390 px phone, 768 px tablet and 1280/1440 px desktop layouts. All main routes have zero horizontal overflow at 320 px, including browsers with visible scrollbars. Verified both character forms, viewing-angle changes, responsive images, cutaway callouts and proportions, exterior switching, edition-aware links, native video playback, signup focus/Escape and the camera-off state. Existing checks also cover chat failure/retry without duplication and reduced-motion behavior.

Initial application JavaScript is approximately 334 kB (109 kB gzip), down from 652 kB (198 kB gzip) before the refresh. Camera code loads only on its experiment route.

Backup: tag `codex/woffy-before-premium-20260906` at `69eeff37`. The original checkout remains untouched. Deployment and production receipt are recorded separately in the workspace release note.
