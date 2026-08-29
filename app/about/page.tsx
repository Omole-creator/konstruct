import type { Metadata } from "next";
import Image from "next/image";
import { HardHat, ShieldCheck, Target, Users } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Designs & Konstruct Ltd. is a glass glazing company handling installation, fabrication, repair, and sealing for residential, commercial, and institutional clients across Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-16 sm:pt-20">
        <div className="mx-auto grid max-w-8xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">About Us</p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
              Glass is a small trade with a low tolerance for guesswork
            </h1>
            <p className="mt-5 text-brand-navy/70">
              Designs &amp; Konstruct Ltd. is a glass glazing company. We design,
              fabricate, and install glass and glass-substitute products for
              homes, offices, and institutions. That covers structural glass,
              windows, doors, curtain walls, skylights, shower enclosures,
              mirrors, and the sealing work that keeps all of it watertight.
            </p>
            <p className="mt-4 text-brand-navy/70">
              Most of the calls we get start the same way: a homeowner whose
              last glazier didn't seal the shower properly, or a developer
              who ordered the wrong glass for a project because nobody
              checked the drawing first. We exist to be the call you only
              have to make once.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/luxury-glass-staircase-living-room.jpg"
                alt="A glass staircase railing inside a living room with marble flooring"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="bg-brand-blue-tint py-16">
        <div className="mx-auto grid max-w-8xl gap-8 px-4 sm:px-6 sm:grid-cols-2 lg:px-10">
          <div className="rounded-2xl bg-white p-8 shadow-card">
            <Target className="h-8 w-8 text-brand-blue" />
            <h2 className="mt-4 font-heading text-xl font-bold text-brand-navy">Our mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/65">
              To fit glass that does its job quietly for years: no leaks, no
              loose panels, no callbacks. We measure carefully, use the
              glass type the job actually calls for, and seal every edge
              like our name is on it, because it is.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-card">
            <ShieldCheck className="h-8 w-8 text-brand-blue" />
            <h2 className="mt-4 font-heading text-xl font-bold text-brand-navy">Craftsmanship &amp; safety</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/65">
              Glass installed wrong isn't just a cosmetic problem, it's a
              safety one. We work to the standard each project calls for,
              from the tempered glass in a shower door to the framing on a
              multi-storey curtain wall.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <HardHat className="mx-auto h-8 w-8 text-brand-blue" />
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-brand-navy">
              The people behind the glass
            </h2>
            <p className="mt-4 text-brand-navy/65">
              Our team covers the full job: glaziers who measure and fit,
              fabricators who cut and shape the glass itself, and installers
              who handle everything from a single window to a full atrium
              roof. The same team that fitted a shower enclosure in someone's
              home has also worked scaffolding on an embassy roof.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-brand-navy py-20">
        <div className="mx-auto grid max-w-8xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/commercial-glass-balcony-facade.jpg"
              alt="A commercial building with glass balcony railings across multiple floors"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Users className="h-8 w-8 text-brand-blue" />
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white">
              Who we build for
            </h2>
            <ul className="mt-6 space-y-4 text-white/75">
              <li>
                <span className="font-semibold text-white">Homeowners</span>{" "}
                who need a shower enclosure, a staircase railing, or a broken
                pane replaced without the drama.
              </li>
              <li>
                <span className="font-semibold text-white">Businesses</span>{" "}
                fitting out a shopfront, an office partition, or a storefront
                that needs to look sharp from the street.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Institutions and government facilities
                </span>{" "}
                that need glass work held to a stricter standard, the kind of
                projects where a facilities manager checks every seam twice.
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <CTASection
          heading="Have a project in mind?"
          subheading="Tell us what you're building or fixing, and we'll tell you what it takes to get it right."
        />
      </Reveal>
    </>
  );
}
