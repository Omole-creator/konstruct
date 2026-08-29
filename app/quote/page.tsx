import type { Metadata } from "next";
import { Clock, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { QuoteForm } from "@/components/quote-form";
import { CallLink, WhatsAppLink } from "@/components/contact-links";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell Designs & Konstruct Ltd. about your glass project and get a custom quote. Call, WhatsApp, or fill out the form and we'll reply within 24 hours.",
};

export default function QuotePage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">Get a Quote</p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Tell us about your project
            </h1>
            <p className="mt-4 text-brand-navy/70">
              There are no fixed prices here, because no two glass jobs are
              the same. Fill in the form below and we'll get back to you with
              a clear quote, usually within 24 hours.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <CallLink className="flex items-center justify-center gap-2 rounded-xl border border-brand-navy/15 py-4 text-base font-semibold text-brand-navy hover:border-brand-blue hover:text-brand-blue">
              <Phone className="h-4 w-4" />
              Call: +234 808 951 2286
            </CallLink>
            <WhatsAppLink className="flex items-center justify-center gap-2 rounded-xl border border-brand-navy/15 py-4 text-base font-semibold text-brand-navy hover:border-brand-blue hover:text-brand-blue">
              <MessageCircle className="h-4 w-4" />
              WhatsApp: 0813 045 2210
            </WhatsAppLink>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-base text-brand-navy/55">
            <Clock className="h-4 w-4" />
            We usually respond within 24 hours
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-12 rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-card sm:p-10">
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
