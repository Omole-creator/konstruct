import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";

import { getServiceBySlug, services } from "@/content/services";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-white pb-16 pt-16 sm:pt-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-1 text-xs text-brand-navy/50">
            <Link href="/services" className="hover:text-brand-blue">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-brand-navy">{service.name}</span>
          </nav>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
                {service.name}
              </h1>
              <p className="mt-5 text-brand-navy/70">{service.description}</p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/quote">Request a Quote</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal as="section" className="bg-brand-blue-tint py-16">
        <div className="mx-auto grid max-w-8xl gap-10 px-4 sm:px-6 sm:grid-cols-2 lg:px-10">
          <div>
            <h2 className="font-heading text-xl font-bold text-brand-navy">What's included</h2>
            <ul className="mt-5 space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-navy/70">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-brand-navy">Typical use cases</h2>
            <ul className="mt-5 space-y-3">
              {service.useCases.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-navy/70">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-16">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <h2 className="text-center font-heading text-xl font-bold text-brand-navy">Other services</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {services
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="rounded-full border border-brand-navy/15 px-5 py-2 text-sm font-medium text-brand-navy hover:border-brand-blue hover:text-brand-blue"
                >
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <CTASection />
      </Reveal>
    </>
  );
}
