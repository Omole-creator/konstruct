import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Installation & fitting, custom cutting & fabrication, repair & replacement, sealing & weatherproofing, and blueprint & architectural support from Designs & Konstruct Ltd.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/commercial-glass-balcony-facade.jpg"
            alt="A commercial building with glass balcony railings, representing the range of Designs & Konstruct's work"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">What We Do</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Glass work, handled end to end
          </h1>
          <p className="mt-5 text-white/75">
            From the first measurement to the final seal, here's where we
            come in for residential, commercial, and institutional projects.
          </p>
        </div>
      </section>

      <Reveal as="section" className="py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <ServicesGrid />
        </div>
      </Reveal>

      <Reveal>
        <CTASection />
      </Reveal>
    </>
  );
}
