"use client";

import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { CALL_NUMBER_DISPLAY, CALL_NUMBER_TEL, WHATSAPP_BASE_URL, WHATSAPP_NUMBER_DISPLAY } from "@/lib/whatsapp";

export function CallLink({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={CALL_NUMBER_TEL}
      className={cn(className)}
      onClick={() => trackEvent("call_click")}
    >
      {children ?? CALL_NUMBER_DISPLAY}
    </a>
  );
}

export function WhatsAppLink({
  className,
  children,
  message,
}: {
  className?: string;
  children?: React.ReactNode;
  message?: string;
}) {
  const href = message
    ? `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_BASE_URL;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      onClick={() => trackEvent("whatsapp_click")}
    >
      {children ?? WHATSAPP_NUMBER_DISPLAY}
    </a>
  );
}
