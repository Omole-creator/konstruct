import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { services } from "@/content/services";
import { navLinks, siteConfig } from "@/content/site";
import { CallLink, WhatsAppLink } from "@/components/contact-links";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { EMAIL_ENQUIRIES, INSTAGRAM_URL, OFFICE_ADDRESS } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-8xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/designs-konstruct-logo.png"
              alt="Designs & Konstruct Ltd. logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="font-heading text-base font-bold">Designs &amp; Konstruct Ltd.</span>
          </Link>
          <p className="mt-4 max-w-xs text-base text-white/70">{siteConfig.tagline}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand-blue hover:text-brand-blue"
            aria-label="Designs & Konstruct on Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-base text-white/80 hover:text-brand-blue">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/quote" className="text-base text-white/80 hover:text-brand-blue">
                Send Your Enquiry
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Products &amp; Services</h3>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-base text-white/80 hover:text-brand-blue">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Get in Touch</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <CallLink className="flex items-center gap-3 text-base text-white/80 hover:text-brand-blue">
                <Phone className="h-4 w-4 shrink-0" />
                <span>Call: +234 808 951 2286</span>
              </CallLink>
            </li>
            <li>
              <WhatsAppLink className="flex items-center gap-3 text-base text-white/80 hover:text-brand-blue">
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>WhatsApp: 0813 045 2210</span>
              </WhatsAppLink>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL_ENQUIRIES}`}
                className="flex items-center gap-3 text-base text-white/80 hover:text-brand-blue"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>{EMAIL_ENQUIRIES}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-base text-white/50">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{OFFICE_ADDRESS}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="mx-auto max-w-8xl px-4 text-center text-xs text-white/50 sm:px-6 lg:px-10">
          © {year} Designs &amp; Konstruct Ltd. All rights reserved.{" "}
          <Link href="/privacy-policy" className="underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
