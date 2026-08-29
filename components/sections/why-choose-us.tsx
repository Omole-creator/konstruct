import Image from "next/image";
import { Award, Gauge, Ruler, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: Ruler,
    title: "Measured to the millimetre",
    description:
      "Glass doesn't forgive a bad measurement. Every panel is cut to the exact size your site needs, so it fits the frame without gaps or force.",
  },
  {
    icon: ShieldCheck,
    title: "Glass that breaks safe, not sharp",
    description:
      "We fit tempered and laminated glass where the building code calls for it, so if it ever does break, it breaks the way it's meant to, in small, blunt pieces, not shards.",
  },
  {
    icon: Gauge,
    title: "Fewer drafts, lower cooling bills",
    description:
      "A well-fitted, properly sealed window or curtain wall is one of the biggest levers on how much heat a building lets in or loses. We seal every job with that in mind.",
  },
  {
    icon: Award,
    title: "Trusted on buildings that can't afford mistakes",
    description:
      "Our glass work has gone up at the Angola Embassy and at the Governor's House in Bayelsa, projects where the details get checked twice.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-8xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">Why Choose Us</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Glass is unforgiving. So is our attention to detail.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-tint text-brand-blue">
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-brand-navy">{point.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-brand-navy/65">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card lg:aspect-auto lg:h-full lg:min-h-[420px]">
          <Image
            src="/images/aluminium-glass-sliding-doors-waterfront.webp"
            alt="Aluminium-framed glass sliding doors fitted along a waterfront property"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
