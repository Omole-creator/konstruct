import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Designs & Konstruct Ltd. handles the information you share with us.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Reveal className="mx-auto max-w-2xl px-4 sm:px-6">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-brand-navy">Privacy Policy</h1>
        <p className="mt-4 text-base text-brand-navy/60">Last updated: 2026</p>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-navy/75">
          <p>
            When you fill out the Get a Quote or Contact form on this site,
            we ask for your name, phone number, and optionally your email
            and project details. That information opens a WhatsApp chat with
            us, pre-filled with what you entered, so you can send it
            straight to our team.
          </p>
          <p>
            We use the information you send to respond to your enquiry and
            to give you an accurate quote. We don't sell, rent, or share
            your details with third parties, and we don't use them for
            anything beyond getting back to you about your project.
          </p>
          <p>
            If you'd like us to delete a message or contact detail you've
            sent us, reach out on WhatsApp at 0813 045 2210 and we'll take
            care of it.
          </p>
          <p>
            This page may be updated as the site changes. Any changes will
            appear here.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
