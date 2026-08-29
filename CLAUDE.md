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
the 5 service offerings, the 3 real case studies, FAQ copy, and nav links.
Page components import from these rather than hardcoding copy, so editing
a service description or adding a gallery item means editing one array, not
hunting through page files.

**Service pages are one dynamic route, not five files.** `app/services/[slug]/page.tsx`
uses `generateStaticParams()` off `content/services.ts` to statically render
all 5 service pages at build time, each with its own metadata. Add a new
service by adding an entry to the `services` array; don't create new page
files for it.

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
load-time target: the source clips in `public/case-studies/governors-house-bayelsa/`
are 10-20MB phone recordings.

**Real work vs. stock photography is a hard line, not a styling choice.**
`content/projects.ts` (Angola Embassy, Governor's House Bayelsa, glass
railing) is the only content presented as the company's own completed
projects, used in the home carousel and the `/gallery` page. The images in
`public/images/` (the ones like `glass-steel-staircase-railing.webp`,
`frameless-glass-shower-enclosure.png`) are licensed stock photography used
only to illustrate services on the home page and service detail pages —
never captioned as if they were a Designs & Konstruct job. Keep this
separation when adding content; it's a credibility/honesty decision, not
an arbitrary one.

**Scroll-reveal is one shared primitive.** `components/reveal.tsx` wraps
children in an `IntersectionObserver`-driven fade/slide-in, no animation
library. Section-level content on every page is wrapped in `<Reveal>` for
the "content appears as you scroll" effect; the hero is not (it should be
visible immediately on load).

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

## Copy voice

House style, enforced across all page copy: no em dashes, no AI-sounding
words ("real"/"really", "seamless", "elevate", "unlock", "robust",
"cutting-edge", "unparalleled", "game-changer", "boasts", etc.), short
paragraphs, contractions, written like one person talking to another. Company
name is always "Designs & Konstruct Ltd." (or "Designs & Konstruct") — never
"Glass Glaziers," which is industry-descriptive language only.
