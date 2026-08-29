import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/sections/cta-section";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Common questions about turnaround times, warranties, service areas, and how quoting works with Designs & Konstruct Ltd.",
};

export default function FaqsPage() {
  return (
    <>
      <section className="bg-white pb-8 pt-16 text-center sm:pt-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">FAQs</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
            Questions we hear a lot
          </h1>
        </div>
      </section>

      <Reveal as="section" className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FaqAccordion items={faqs} />
        </div>
      </Reveal>

      <Reveal>
        <CTASection
          heading="Still have a question?"
          subheading="Send us a message on WhatsApp and we'll answer directly."
        />
      </Reveal>
    </>
  );
}
