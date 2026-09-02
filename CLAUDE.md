# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing/lead-gen website for Designs & Konstruct Ltd., a Nigerian glass
glazing company (design, fabrication, and installation of glass and
glass-substitute products). Next.js App Router, TypeScript, Tailwind CSS.
No backend, no database, no e-commerce, no pricing anywhere on the site.

## Commands

**On this machine, do not use `npm run dev` / `npm run build` / `npx`.** The
project lives at a path containing `&` (`DESIGN & KONSTRUCT`), and on Windows
that breaks npm's and npx's own `.bin` shim resolution (`cmd.exe` treats `&`
as a command separator). This is a local-path issue only — it will not
affect Vercel builds, since those run from a clean path. Always invoke Next.js
directly through `node`, bypassing the shim:

```bash
node node_modules/next/dist/bin/next dev -p 3210
node node_modules/next/dist/bin/next build
node node_modules/next/dist/bin/next start
```

Same workaround applies to any other CLI in `node_modules/.bin`, e.g. the
Playwright CLI used for manual browser checks:

```bash
node node_modules/@playwright/cli/playwright-cli.js open http://localhost:3210/
```

There is no test suite. There is no lint script wired to CI; `next lint` is
available via the same direct-node pattern if needed.

## Architecture

**Content lives in `/content`, not scattered through JSX.** `services.ts`,
`projects.ts`, `faqs.ts`, and `site.ts` are the single source of truth for
the 8 service offerings, the 5 real case studies, FAQ copy, and nav links.
Page components import from these rather than hardcoding copy, so editing
a service description or adding a gallery item means editing one array, not
hunting through page files. The 3 shower/architectural/aluminum services
are kept first in the `services` array on purpose (client asked for them to
list before the original 5) — preserve that order if you add more.

**Service pages are one dynamic route, not one file per service.** `app/services/[slug]/page.tsx`
uses `generateStaticParams()` off `content/services.ts` to statically render
every service page at build time, each with its own metadata. Add a new
service by adding an entry to the `services` array; don't create new page
files for it.

**`lib/whatsapp.ts` is also the canonical source for every contact detail**,
not just the WhatsApp deep link: phone, WhatsApp number, Instagram, the two
email addresses (`EMAIL_ENQUIRIES`, `EMAIL_SUPPORT`), and `OFFICE_ADDRESS`
(Cadastral Zone 707, Lugbe Airport Road, FCT Abuja) all live there as
exported constants. Footer and `/contact` both import from it rather than
hardcoding the address or emails — do the same for any new contact touchpoint.

**Forms submit via WhatsApp deep link, not a server.** There is no API route
for the Get a Quote or Contact forms. `lib/whatsapp.ts` builds a formatted,
`*bold*`-labeled message string from the form fields and the form components
(`components/quote-form.tsx`, `components/contact-form.tsx`) open
`https://wa.me/2348130452210?text=<encoded message>` in a new tab on submit.
This means: no email/CRM integration, no captcha, only a honeypot field for
cheap spam insurance. A `wa.me` link cannot carry a file attachment, so the
quote form's file input is UX-only — the copy next to it tells the user to
attach the file inside the WhatsApp chat once it opens.

**One lightbox, two consumers.** `components/media-lightbox.tsx` exposes a
`MediaLightboxProvider` (mounted once in `app/layout.tsx`) and a `useLightbox()`
hook. Both the home page's `FeaturedProjectsCarousel` and the `/gallery`
page's `GalleryGrid` call `open()` from the same hook, so photo/video click-to-
expand behavior is defined once. Case-study videos are never autoplayed or
preloaded on page load — cards show a static poster JPG (pre-extracted with
ffmpeg into `public/case-studies/posters/`) and the actual `<video>` only
mounts inside the lightbox when clicked. This is deliberate for the mobile
load-time target: the source clips (e.g. in `public/case-studies/staircase-project/`)
are phone recordings, kept web-sized (roughly 10-20MB) via a bitrate-capped
ffmpeg re-encode.

**The featured carousel has prev/next arrows in addition to swipe/auto-advance.**
`components/sections/featured-projects-carousel.tsx` renders two absolutely-
positioned circular buttons at the left and right extremes of the track
(`goTo()` wraps the index with modulo in both directions), on top of the
existing touch-swipe scroll and the dot indicators below. All three ways of
navigating funnel through the same `goTo()`/`setIndex()` state, so keep new
navigation affordances wired through it rather than scrolling the track
directly.

**Real work vs. stock photography is a hard line, not a styling choice.**
`content/projects.ts` (Angola Embassy, staircase, shower glass, shower
doors, glass railing) is the only content presented as the company's own
completed projects, used in the home carousel and the `/gallery` page. The
images in `public/images/` (the ones like `glass-steel-staircase-railing.webp`,
`frameless-glass-shower-enclosure.png`) are licensed stock photography used
only to illustrate services on the home page and service detail pages —
never captioned as if they were a Designs & Konstruct job. Keep this
separation when adding content; it's a credibility/honesty decision, not
an arbitrary one. This applies to `content/services.ts`'s `image` field too
— it should point at a stock photo in `public/images/`, not a case-study
image from `public/case-studies/`, even though both are valid `src` values
Next's `<Image>` will happily render (a prior version of this file wired
the Shower Glass Solutions service image straight to a watermarked
case-study photo; it now points at `public/images/gold-framed-sliding-shower-door.jpg`).

**All real project media is watermarked.** Every file under
`public/case-studies/**` (photos and videos of the company's own completed
work) carries a large, diagonal, semi-transparent overlay of
`public/images/designs-konstruct-logo.png`, burned in with ffmpeg (scaled to
~50% of the source width, rotated ~-25deg, ~38% opacity, centered) — this
is to stop other companies from lifting the footage for their own
promotion. Poster JPGs are extracted from the *watermarked* video, not the
original, so the static preview and the video match. Stock photography in
`public/images/` is never watermarked, since it isn't the company's own
work. Apply the same treatment to any new case-study media before adding it
to `content/projects.ts` or `content/services.ts`.

**Scroll-reveal is one shared primitive.** `components/reveal.tsx` wraps
children in an `IntersectionObserver`-driven fade/slide-in, no animation
library. Every section on every page is wrapped in `<Reveal>` (including the
top hero-style block on Services, Gallery, FAQs, About, Contact, and Privacy
Policy) so the site reveals section by section on scroll, not all at once.
The home page `Hero` is the one exception to the `<Reveal>` wrapper itself —
it's above the fold and must be visible on load — but it still animates in
on mount: its badge, headline, subtitle, CTA row, and each of the 3 fan
images use the `animate-fade-in` / `animate-fade-up` CSS classes with
staggered inline `animationDelay` values, so it reveals piece by piece too.
Both animation classes use `animation-fill-mode: both`, which is what keeps
an element hidden during its delay instead of flashing visible first —
don't drop that if you touch `app/globals.css`.

**Stat counters animate via `components/count-up.tsx`.** Same
`IntersectionObserver` pattern as `Reveal`, but drives a `requestAnimationFrame`
count from 0 to a target number with an ease-out curve. Used by
`StatsTrusted` for the 80+/100%/24 hrs/3,300+ band. Pass the numeric `value`
and a `suffix` string (`"+"`, `"%"`, `" hrs"`) rather than hardcoding the
formatted string, so the count-up has an actual number to animate through.

**Brand colors come from the logo, not a generic palette.** `tailwind.config.ts`
defines `brand.blue` (#0068E8), `brand.navy` (#002060), and `brand.blue-light`
(#8EC6F5), sampled directly from `public/images/designs-konstruct-logo.png`
by pixel analysis. Don't introduce other blues; use these tokens.

**Analytics and contact tracking.** `lib/analytics.ts` exposes `trackEvent()`,
a no-op unless `window.gtag` exists (loaded conditionally in `app/layout.tsx`
from `NEXT_PUBLIC_GA_ID`, unset by default). `components/contact-links.tsx`
(`CallLink`, `WhatsAppLink`) wraps every `tel:`/`wa.me` link site-wide and
fires `call_click` / `whatsapp_click` events on click — use these components
for any new phone/WhatsApp link rather than a raw `<a>` tag, so click
tracking stays consistent.

**Body copy is 16px minimum.** Tailwind's `text-sm` (14px) is reserved for
genuine UI chrome: nav links, breadcrumbs, badges/eyebrow labels, image-card
captions, and footer column headers. Anything a visitor reads as content
(paragraphs, descriptions, FAQ answers, form labels/inputs, contact info)
should be `text-base` (16px) or larger. If you add a new paragraph, default
to `text-base`, not `text-sm`.

**Button variants are background-aware, not just style-aware.** `components/ui/button.tsx`
has `default` (solid brand blue, for light/white backgrounds), `navy`,
`outline` (white border/text, for dark or colored backgrounds), and `white`
(solid white with blue text, for use on the blue hero or other saturated
backgrounds where a blue button would disappear). Pick the variant based on
what the button sits on top of, not just which action it represents — e.g.
the hero's primary CTA uses `white`, not `default`, because the hero
background is a photo (`public/images/hero-background.jpg`) with a brand
navy-to-blue gradient overlay on top, not a flat color.

**The hero background is an `<Image fill>` behind a gradient-overlay `<div>`,
both plain DOM order, no `z-index`.** `components/sections/hero.tsx`'s
`<section>` has `position: relative` but no `z-index`, so it never
establishes its own stacking context — a negative `z-index` on the image or
overlay would escape to the document root's stacking context and render
*behind* the section's own opaque background, hiding it completely (this
happened once; don't reintroduce `-z-10`/`-z-20` here). Correct stacking
comes for free from DOM order alone: image first, gradient overlay next,
content last.

**The `link.label === "Products & Services"` string check in `components/header.tsx`
picks the nav item that gets the services mega-menu.** It's a plain string
match against `content/site.ts`'s `navLinks`, not a dedicated flag — if you
reword that nav label again, update the check in `header.tsx` alongside it
or the dropdown silently stops appearing.

## Deployment

Live at **https://www.designskonstruct.com** (custom domain; `designskonstruct.com`
and the project's `.vercel.app` URLs all redirect there). Vercel project name
is `konstruct` under the `omole-creator-s-projects` team, linked via `.vercel/project.json`
(gitignored) — `vercel --prod` from this directory deploys directly, and
pushes to `main` also trigger a Git-integration deploy.

Two non-obvious things had to be fixed post-deploy and must not regress:
- **`vercel.json` pins `"framework": "nextjs"`.** The project's dashboard
  Framework Preset had defaulted to "Other" at creation, which made Vercel
  serve the raw `public/` folder as static output instead of running the
  Next.js build (production domain returned `DEPLOYMENT_NOT_FOUND`). The
  `vercel.json` override is what makes detection correct regardless of the
  dashboard setting — don't remove it.
- **SSO/Vercel Authentication protection is disabled** on the project
  (`vercel project protection disable konstruct --sso`). It defaults to
  protecting all non-custom-domain deployment URLs behind a login wall,
  which would have blocked public visitors on the `.vercel.app` domain.

## Copy voice

House style, enforced across all page copy: no em dashes, no AI-sounding
words ("real"/"really", "seamless", "elevate", "unlock", "robust",
"cutting-edge", "unparalleled", "game-changer", "boasts", etc.), short
paragraphs, contractions, written like one person talking to another. Company
name is always "Designs & Konstruct Ltd." (or "Designs & Konstruct") — never
"Glass Glaziers," which is industry-descriptive language only.
