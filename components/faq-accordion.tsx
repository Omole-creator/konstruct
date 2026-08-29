"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { Faq } from "@/content/faqs";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-navy/10 rounded-2xl border border-brand-navy/10 bg-white shadow-card">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-heading text-base font-bold text-brand-navy">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-brand-blue transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? (
              <div className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-brand-navy/70">{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
