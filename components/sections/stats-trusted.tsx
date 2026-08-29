import { BadgeCheck, Building2, Home as HomeIcon } from "lucide-react";

const stats = [
  { value: "80+", label: "Projects completed" },
  { value: "100%", label: "Success rate" },
  { value: "24 hrs", label: "Average quote response" },
  { value: "3,300+", label: "Likes on one client's public shout-out" },
];

const trustedBy = [
  { name: "Angola Embassy", icon: Building2 },
  { name: "Governor's House, Bayelsa", icon: HomeIcon },
  { name: "Deji Adeyanju", icon: BadgeCheck },
];

export function StatsTrusted() {
  return (
    <section className="bg-brand-navy py-16">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs text-white/60 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-white/50">Trusted by</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedBy.map((entry) => (
              <div key={entry.name} className="flex items-center gap-2 text-white/85">
                <entry.icon className="h-5 w-5 text-brand-blue" />
                <span className="text-sm font-semibold sm:text-base">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
