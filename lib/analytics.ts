export type LeadEvent = "call_click" | "whatsapp_click" | "quote_form_submit" | "contact_form_submit";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: LeadEvent, params?: Record<string, string>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}
