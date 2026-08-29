"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { buildContactMessage, whatsappLink } from "@/lib/whatsapp";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company_website")) return;

    const message = buildContactMessage({
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    trackEvent("contact_form_submit");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="contact-name" className="mb-2 block text-base font-semibold text-brand-navy">
          Full name
        </label>
        <input id="contact-name" name="name" type="text" required className={inputClass} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-base font-semibold text-brand-navy">
          Phone number
        </label>
        <input id="contact-phone" name="phone" type="tel" required className={inputClass} placeholder="080..." />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-base font-semibold text-brand-navy">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="How can we help?"
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <MessageCircle className="h-4 w-4" />
        Send via WhatsApp
      </Button>

      {submitted ? (
        <p className="text-base text-brand-blue">
          WhatsApp should have opened in a new tab with your message ready to send. If it didn't, message us
          directly at 0813 045 2210.
        </p>
      ) : null}
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-base text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";
