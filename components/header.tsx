"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { navLinks } from "@/content/site";
import { CallLink } from "@/components/contact-links";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/designs-konstruct-logo.png"
            alt="Designs & Konstruct Ltd. logo"
            width={72}
            height={72}
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            priority
          />
          <span className="font-heading text-base font-bold tracking-tight text-brand-navy sm:text-lg">
            Designs &amp; Konstruct <span className="text-brand-blue">Ltd.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === "Products & Services" ? (
              <div
                key={link.href}
                className="group relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-brand-navy transition-colors hover:text-brand-blue"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <div
                  className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-all duration-150 ${
                    servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="rounded-2xl border border-brand-navy/10 bg-white p-2 shadow-card">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-blue-tint hover:text-brand-blue"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-blue-tint"
                    >
                      View all services
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-navy transition-colors hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CallLink className="flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-blue">
            <Phone className="h-4 w-4" />
            Call Now
          </CallLink>
          <Button asChild size="sm">
            <Link href="/quote">Send Your Enquiry</Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-brand-navy lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-brand-navy/10 bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-brand-navy/5 py-3 text-sm font-medium text-brand-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-1 py-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="py-2 pl-4 text-sm text-brand-navy/70"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <CallLink className="flex items-center justify-center gap-2 rounded-full border border-brand-navy/15 py-3 text-sm font-semibold text-brand-navy">
              <Phone className="h-4 w-4" />
              Call Now
            </CallLink>
            <Button asChild>
              <Link href="/quote" onClick={() => setMobileOpen(false)}>
                Send Your Enquiry
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
