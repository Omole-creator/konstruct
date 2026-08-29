import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CallLink } from "@/components/contact-links";

const fanImages = [
  {
    src: "/images/glass-steel-staircase-railing.webp",
    alt: "Glass and stainless steel staircase railing, an example of residential glazing",
    rotate: "-rotate-6",
    margin: "-mr-8 z-10",
    width: "w-[38%]",
    translate: "translate-y-6",
    delay: 500,
  },
  {
    src: "/images/commercial-glass-balcony-facade.jpg",
    alt: "A commercial building facade with glass balcony railings",
    rotate: "rotate-0",
    margin: "z-20",
    width: "w-[42%]",
    translate: "-translate-y-2",
    delay: 650,
  },
  {
    src: "/images/aluminium-glass-sliding-doors-waterfront.webp",
    alt: "Aluminium-framed glass sliding doors overlooking the water",
    rotate: "rotate-6",
    margin: "-ml-8 z-10",
    width: "w-[38%]",
    translate: "translate-y-6",
    delay: 800,
  },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(175deg,#001336_0%,#0068E8_50%,#0052BA_100%)]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 h-[640px] w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:6rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_65%,transparent_105%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[380px] -z-10 h-[420px] w-[130%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(255,255,255,0.35)_0%,transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white"
        aria-hidden
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-4 pt-16 text-center sm:px-6 sm:pt-24">
        <Link href="/services" className="group animate-fade-in" style={{ animationDelay: "0ms" }}>
          <span className="mx-auto flex w-fit items-center justify-center rounded-full border-[1.5px] border-white/25 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur sm:text-sm">
            Precision Glass Design &amp; Installation
            <ChevronRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>

        <h1
          className="animate-fade-in mt-7 text-balance bg-gradient-to-br from-white from-30% to-white/60 bg-clip-text text-4xl font-extrabold leading-[1.05] tracking-tighter text-transparent sm:text-5xl md:text-6xl"
          style={{ animationDelay: "150ms" }}
        >
          Glass work built to outlast the building around it
        </h1>

        <p
          className="animate-fade-in mt-6 max-w-2xl text-balance text-base tracking-tight text-white/80 sm:text-lg"
          style={{ animationDelay: "300ms" }}
        >
          Designs &amp; Konstruct Ltd. designs, cuts, and fits glass for homes,
          offices, and institutions, from a single shower enclosure to a full
          atrium roof, measured right and sealed to last.
        </p>

        <div
          className="animate-fade-in mt-9 flex w-full flex-row flex-nowrap items-center justify-center gap-3 sm:w-auto sm:gap-4"
          style={{ animationDelay: "450ms" }}
        >
          <Button asChild variant="white" size="lg" className="flex-1 sm:flex-none">
            <Link href="/quote">Request a Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1 sm:flex-none">
            <CallLink className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </CallLink>
          </Button>
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex w-full max-w-3xl items-center justify-center px-4 pb-16 sm:mt-16 sm:pb-24">
        {fanImages.map((image) => (
          <div
            key={image.src}
            style={{ animationDelay: `${image.delay}ms` }}
            className={`animate-fade-up relative aspect-[4/5] shrink-0 overflow-hidden rounded-2xl shadow-2xl shadow-black/30 outline outline-1 outline-white/20 ${image.width} ${image.margin} ${image.rotate} ${image.translate}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 320px, 45vw"
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}
