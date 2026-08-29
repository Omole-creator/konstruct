export const COMPANY_NAME = "Designs & Konstruct Ltd.";

export const CALL_NUMBER_DISPLAY = "+234 808 951 2286";
export const CALL_NUMBER_TEL = "tel:+2348089512286";

export const WHATSAPP_NUMBER_DISPLAY = "0813 045 2210";
export const WHATSAPP_NUMBER_INTL = "2348130452210";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER_INTL}`;

export const INSTAGRAM_URL = "https://www.instagram.com/designskonstruct";

export function whatsappLink(message?: string) {
  if (!message) return WHATSAPP_BASE_URL;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

interface QuoteFormValues {
  name: string;
  phone: string;
  email?: string;
  projectType: string;
  serviceNeeded: string;
  description: string;
  hasAttachment: boolean;
}

export function buildQuoteMessage(values: QuoteFormValues) {
  const lines = [
    "Hello Designs & Konstruct, I would like a quote.",
    "",
    `*Name:* ${values.name}`,
    `*Phone/WhatsApp:* ${values.phone}`,
  ];

  if (values.email) {
    lines.push(`*Email:* ${values.email}`);
  }

  lines.push(
    `*Project Type:* ${values.projectType}`,
    `*Service Needed:* ${values.serviceNeeded}`,
    "",
    "*Project Description:*",
    values.description,
  );

  if (values.hasAttachment) {
    lines.push("", "(I have a photo or blueprint to attach here.)");
  }

  return lines.join("\n");
}

interface ContactFormValues {
  name: string;
  phone: string;
  message: string;
}

export function buildContactMessage(values: ContactFormValues) {
  return [
    "Hello Designs & Konstruct,",
    "",
    `*Name:* ${values.name}`,
    `*Phone:* ${values.phone}`,
    "",
    "*Message:*",
    values.message,
  ].join("\n");
}
