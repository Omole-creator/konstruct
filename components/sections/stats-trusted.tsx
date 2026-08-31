import { BadgeCheck, Building2, Home as HomeIcon } from "lucide-react";

import { CountUp } from "@/components/count-up";

const stats = [
  { value: 150, suffix: "+", label: "Projects completed" },
  { value: 100, suffix: "%", label: "Success rate" },
  { value: 24, suffix: " hrs", label: "Average quote response" },
  { value: 3300, suffix: "+", label: "Likes on one client's public shout-out" },
];

const trustedBy = [
  { name: "Angola Embassy", icon: Building2 },
  { name: "Residential Clients", icon: HomeIcon },
  { name: "Deji Adeyanju", icon: BadgeCheck },
];

export function StatsTrusted() {
  return (
    <section className="bg-brand-navy py-16 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-base text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            Trusted By
          </p>
          <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-3">
            {trustedBy.map((entry) => (
              <div
                key={entry.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-6 text-center backdrop-blur-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue-light">
                  <entry.icon className="h-5 w-5" />
                </span>
                <span className="text-base font-semibold text-white">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
