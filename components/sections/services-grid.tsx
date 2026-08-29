import Link from "next/link";
import { ArrowRight, Layers, Ruler, ShieldCheck, Wrench, Compass } from "lucide-react";

import { services } from "@/content/services";

const icons = [Layers, Ruler, Wrench, ShieldCheck, Compass];

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => {
        const Icon = icons[i % icons.length];
        return (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex flex-col rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:bg-brand-blue-tint/40 hover:shadow-xl active:translate-y-0 active:scale-[0.98] active:bg-brand-blue-tint active:shadow-card"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-tint text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white group-active:bg-brand-blue group-active:text-white">
              <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            </span>
            <h3 className="mt-5 font-heading text-lg font-bold text-brand-navy">{service.name}</h3>
            {!compact && (
              <p className="mt-2 text-base text-brand-navy/65">{service.shortDescription}</p>
            )}
            <span className="mt-5 inline-flex items-center gap-1 text-base font-semibold text-brand-blue">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
