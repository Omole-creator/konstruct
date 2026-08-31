import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { CallLink, WhatsAppLink } from "@/components/contact-links";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { EMAIL_ENQUIRIES, EMAIL_SUPPORT, INSTAGRAM_URL, OFFICE_ADDRESS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Designs & Konstruct Ltd. by phone, WhatsApp, or the contact form. We usually respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">Contact Us</p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
              Let's talk about your project
            </h1>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-card">
                <h2 className="font-heading text-lg font-bold text-brand-navy">Reach us directly</h2>
                <div className="mt-4 space-y-3">
                  <CallLink className="flex items-center gap-3 text-base text-brand-navy/75 hover:text-brand-blue">
                    <Phone className="h-4 w-4 shrink-0 text-brand-blue" />
                    +234 808 951 2286
                  </CallLink>
                  <WhatsAppLink className="flex items-center gap-3 text-base text-brand-navy/75 hover:text-brand-blue">
                    <MessageCircle className="h-4 w-4 shrink-0 text-brand-blue" />
                    0813 045 2210
                  </WhatsAppLink>
                  <a
                    href={`mailto:${EMAIL_ENQUIRIES}`}
                    className="flex items-center gap-3 text-base text-brand-navy/75 hover:text-brand-blue"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-brand-blue" />
                    {EMAIL_ENQUIRIES}
                  </a>
                  <a
                    href={`mailto:${EMAIL_SUPPORT}`}
                    className="flex items-center gap-3 text-base text-brand-navy/75 hover:text-brand-blue"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-brand-blue" />
                    {EMAIL_SUPPORT} <span className="text-brand-navy/50">(customer care)</span>
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-base text-brand-navy/75 hover:text-brand-blue"
                  >
                    <InstagramIcon className="h-4 w-4 shrink-0 text-brand-blue" />
                    @designskonstruct
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-card">
                <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-brand-navy">
                  <Clock className="h-5 w-5 text-brand-blue" />
                  Business hours
                </h2>
                <div className="mt-4 space-y-1 text-base text-brand-navy/65">
                  <p>Monday to Friday: 8am to 6pm</p>
                  <p>Saturday: 9am to 3pm</p>
                  <p>Sunday: Closed (WhatsApp messages still welcome)</p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand-navy/10 bg-brand-blue-tint p-6">
                <h2 className="flex items-center gap-2 font-heading text-sm font-bold text-brand-navy">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                  Our office
                </h2>
                <p className="mt-2 text-base text-brand-navy/65">{OFFICE_ADDRESS}</p>
                <p className="mt-2 text-base text-brand-navy/65">
                  We also take on projects across Nigeria beyond Abuja.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <div className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-card sm:p-10">
              <h2 className="font-heading text-lg font-bold text-brand-navy">Send us a message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
