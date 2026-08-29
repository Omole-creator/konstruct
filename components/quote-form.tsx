"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Paperclip } from "lucide-react";

import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { trackEvent } from "@/lib/analytics";
import { buildQuoteMessage, whatsappLink } from "@/lib/whatsapp";

const projectTypes = ["Residential", "Commercial", "Industrial"];

export function QuoteForm() {
  const [hasAttachment, setHasAttachment] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field.
    if (data.get("company_website")) return;

    const message = buildQuoteMessage({
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? "") || undefined,
      projectType: String(data.get("projectType") ?? ""),
      serviceNeeded: String(data.get("serviceNeeded") ?? ""),
      description: String(data.get("description") ?? ""),
      hasAttachment,
    });

    trackEvent("quote_form_submit");
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

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
        </Field>
        <Field label="Phone / WhatsApp number" htmlFor="phone">
          <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="080..." />
        </Field>
      </div>

      <Field label="Email (optional)" htmlFor="email">
        <input id="email" name="email" type="email" className={inputClass} placeholder="you@example.com" />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Project type" htmlFor="projectType">
          <select id="projectType" name="projectType" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Service needed" htmlFor="serviceNeeded">
          <select id="serviceNeeded" name="serviceNeeded" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about your project" htmlFor="description">
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={inputClass}
          placeholder="What are you looking to have done, and where?"
        />
      </Field>

      <Field label="Photo or blueprint (optional)" htmlFor="attachment">
        <label
          htmlFor="attachment"
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-brand-navy/20 px-4 py-3 text-sm text-brand-navy/60 hover:border-brand-blue/40"
        >
          <Paperclip className="h-4 w-4 shrink-0" />
          <span>{hasAttachment ? "File selected" : "Choose a file"}</span>
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept="image/*,.pdf"
          className="hidden"
          onChange={(event) => setHasAttachment(Boolean(event.target.files?.length))}
        />
        <p className="mt-2 text-xs text-brand-navy/50">
          wa.me links can't carry files, so once WhatsApp opens with your details filled in, attach the photo or
          blueprint there before you hit send.
        </p>
      </Field>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <MessageCircle className="h-4 w-4" />
        Send via WhatsApp
      </Button>

      {submitted ? (
        <p className="text-sm text-brand-blue">
          WhatsApp should have opened in a new tab with your details filled in. If it didn't, check your pop-up
          blocker, or message us directly at 0813 045 2210.
        </p>
      ) : null}
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-brand-navy">
        {label}
      </label>
      {children}
    </div>
  );
}
