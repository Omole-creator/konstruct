import type { Metadata } from "next";
import Link from "next/link";

import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedProjectsCarousel } from "@/components/sections/featured-projects-carousel";
import { StatsTrusted } from "@/components/sections/stats-trusted";
import { TestimonialSpotlight } from "@/components/sections/testimonial-spotlight";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Glass Design, Fabrication & Installation in Nigeria",
  description:
    "Designs & Konstruct Ltd. designs, cuts, and installs glass and glass-substitute products for homes, offices, and institutions. Request a quote today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Reveal as="section" className="py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">What We Do</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Five ways we work with glass
            </h2>
            <p className="mt-4 text-brand-navy/65">
              From the first cut to the final seal, here's where we come in.
            </p>
          </div>
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="pb-8">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">Featured Projects</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              A look at work we've completed
            </h2>
            <p className="mt-4 text-brand-navy/65">
              Tap any photo or video to see it up close. New slides move on their own, or scroll through at your
              own pace.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <FeaturedProjectsCarousel />
        </div>
        <div className="mt-6 text-center">
          <Link href="/gallery" className="text-base font-semibold text-brand-blue hover:underline">
            See the full gallery
          </Link>
        </div>
      </Reveal>

      <Reveal>
        <StatsTrusted />
      </Reveal>

      <Reveal>
        <TestimonialSpotlight />
      </Reveal>

      <Reveal>
        <WhyChooseUs />
      </Reveal>

      <Reveal>
        <CTASection />
      </Reveal>
    </>
  );
}
