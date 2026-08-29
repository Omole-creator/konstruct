import Image from "next/image";
import { Quote } from "lucide-react";

export function TestimonialSpotlight() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-8xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="order-2 lg:order-1">
          <Quote className="h-10 w-10 text-brand-blue/30" />
          <p className="mt-4 text-balance font-heading text-2xl font-bold leading-snug tracking-tight text-brand-navy sm:text-3xl">
            "I have a culture of promoting people who do quality work for me.
            Ehis does all my bathroom work, glass work including bulletproof
            windows, and more. He's extremely reliable and will never cheat."
          </p>
          <div className="mt-6">
            <p className="font-heading text-base font-bold text-brand-navy">Deji Adeyanju</p>
            <p className="text-sm text-brand-navy/60">Public Facebook recommendation, February 2025</p>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-brand-navy/65">
            A client with a public following of thousands took the time to
            recommend us by name, phone number included. That's the kind of
            trust we work to keep every time we're on site.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-brand-navy/10 shadow-card sm:-rotate-1">
            <Image
              src="/images/deji-adeyanju-facebook-recommendation.jpg"
              alt="A public Facebook post from Deji Adeyanju recommending Designs & Konstruct's glass work, including a staircase glass railing and a glass shower enclosure"
              width={1080}
              height={1450}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
