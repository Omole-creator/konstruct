"use client";

import { MessageCircle } from "lucide-react";

import { trackEvent } from "@/lib/analytics";
import { WHATSAPP_BASE_URL } from "@/lib/whatsapp";

export function WhatsAppFloatButton() {
  return (
    <a
      href={WHATSAPP_BASE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click")}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      aria-label="Chat with Designs & Konstruct on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
    </a>
  );
}
