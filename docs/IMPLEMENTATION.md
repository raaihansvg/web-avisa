# WebAvisa MVP implementation

Implemented FR-01–FR-11 in the existing App Router application. The original repository was the Next.js starter. All requested source files were present. Facts were checked against the supplied CV using pdftotext.

## Design adjustments

- Neutral monogram portrait placeholder replaces the stock stranger. Approved `public/images/avisa-cutout.png` is missing; `docs/avisa.jpeg` is not treated as approval for that asset.
- Contact replaces Hire Me; availability and phone omitted pending explicit approval.
- Internship date omitted; Aug 2023–Present appears only under education. Bogor appears only in contact.
- Certification uses SAP H4NA (2025), with no verification or unsupported proficiency claims.
- Hero lettering reduced to fit the full name; mobile tagline and portrait spacing adjusted. Native disclosure navigation supplies all destinations on mobile.
- Removed decorative registered-trademark symbol. Intro reads “Portfolio intro” to avoid suggesting actual network progress.
- System fonts avoid remote font requests. Darker secondary text improves contrast. Custom animation, typography and decorative classes have CSS definitions.
- Content is server-rendered. Intro/replay and motion live in a small client component. Reveal animates visible content rather than hiding it in advance. Reduced motion disables animation. RAF, timeout, observer and media/scroll listeners are cleaned up.
- Metadata includes title, description, Open Graph and Twitter text plus a local monogram icon. Canonical/deployment URL and portrait social image are omitted until supplied.

## Validation

- `npm run lint`: PASS after fixing an initial syntax extraction error.
- `npx tsc --noEmit`: PASS after that fix.
- `npm run build`: PASS after that fix; final rerun also recorded in delivery.
- `git diff --check`: PASS.
- Browser automation unavailable: computer-use inventory returned no browsers or apps. No browser, screenshot, console, physical mail-client, or interactive replay verification is claimed.
- Manual code review covers 320/375px (wrapping email, full mobile destinations, flexible portrait), 768px (desktop nav, grid), 1024px and desktop (side arrows, constrained content). All nav destinations correspond to existing IDs; anchor offset accommodates fixed navigation. Replay scrolls to top and restarts the finite intro; the decorative overlay never captures input. The email link uses the CV address with mailto.
- Existing Next.js warning: parent lockfile outside the Git repository is ignored. No unrelated config changes made.

## Before public launch

Owner/content approval remains required under the draft SRS. Supply an approved cutout portrait and confirm the exact SAP H4NA spelling. Confirm ongoing-role dates remain current. Phone and availability claims remain unpublished unless explicitly approved. Deployment URL is needed before setting canonical metadata. CV download and LinkedIn are omitted until approved assets/URLs exist. Complete real browser checks at the required viewport sizes, with keyboard, reduced motion, JavaScript disabled, multiple replays, and a configured email client.

## Owner-requested visual revision

The owner explicitly approved using `docs/avisa.jpeg`. Its original bytes are copied to `public/images/avisa-portrait.jpeg`; Next Image supplies responsive optimization, and CSS applies a centered crop plus a light warm, desaturated filter without regenerating facial details. This supersedes the placeholder approval note above.

At the owner's request, removed replay, side arrow controls, scroll prompt and intro halos. Replaced hero drift/parallax with a seamless right-to-left text loop (static for reduced motion). Intro is now visible in server-rendered markup from first paint and exits through finite CSS animation, including without JavaScript. Progress lasts 2.2 seconds, followed by a short hold and .8-second exit, with no animation restart at hydration. These changes supersede FR-02 replay and FR-10 side-control design requirements under the owner's latest instruction.

## Latest portrait composition

Owner supplied and approved the beach portrait (`docs/fotoavisa.png`, also attached in chat). Built-in imagegen produced `public/images/avisa-cutout.png` with transparency. Prompt: remove beach background only, preserve facial identity/expression, pose, glasses, beige hijab, cream cardigan, black dress, hands and bracelets; tight crop; natural alpha edges; no frame, text, shadow or halo. The hero places this cutout over the moving outline text, without the oval frame or portrait badge. Light color styling remains in CSS. This supersedes the earlier blazer portrait.
