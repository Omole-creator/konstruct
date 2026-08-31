import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CallLink, WhatsAppLink } from "@/components/contact-links";

export function CTASection({
  heading = "Ready to talk about your glass work?",
  subheading = "Call us, message us on WhatsApp, or send your project details and we'll get back to you within 24 hours.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center gap-8 rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blue-dark px-6 py-12 text-center shadow-glow sm:px-12">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {heading}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/85">{subheading}</p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild variant="outline" size="lg">
              <CallLink className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call: +234 808 951 2286
              </CallLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <WhatsAppLink className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp: 0813 045 2210
              </WhatsAppLink>
            </Button>
          </div>

          <Button asChild variant="navy" size="lg">
            <Link href="/quote">Send Your Enquiry</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
