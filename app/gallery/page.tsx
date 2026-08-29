import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { GalleryGrid } from "@/components/gallery-grid";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See completed glass glazing projects from Designs & Konstruct Ltd., including the Angola Embassy, the Governor's House in Bayelsa, and a frameless glass balustrade.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-white pb-8 pt-16 text-center sm:pt-20">
        <Reveal className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">Our Work</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
            Projects we've put our name on
          </h1>
          <p className="mt-5 text-base text-brand-navy/70">
            Filter by category, then tap any photo or video to see it up close.
          </p>
        </Reveal>
      </section>

      <Reveal as="section" className="pb-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <GalleryGrid />

          <div className="mt-16 text-center">
            <h2 className="font-heading text-xl font-bold text-brand-navy">
              Have something similar in mind?
            </h2>
            <p className="mt-2 text-base text-brand-navy/65">
              Send us your project details and we'll tell you what it takes.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/quote">Request a similar project quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
