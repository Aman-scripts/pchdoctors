import { ShieldCheck, BadgeCheck, Pill, Headset, Star } from "lucide-react";

const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: "Licensed Clinicians",
    description: "Evidence-based care guided by clinical standards",
  },
  {
    icon: Pill,
    title: "FDA-Approved or Compounded Medications",
    description: "Prescribed based on clinical eligibility and provider judgment",
  },
  {
    icon: ShieldCheck,
    title: "Secure and Confidential Evaluations",
    description: "Private one-on-one secure video consultations",
  },
  {
    icon: Headset,
    title: "24/7 Reliable Assistance",
    description: "Dedicated support whenever questions arise",
  },
  {
    icon: Star,
    title: "Trusted Reviews",
    description: "Rated 4.9/5 stars by patients",
  },
];

export function Glp1WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a2733] via-[#0d3f45] to-[#0a2733] py-20"
    >
      <div className="pointer-events-none absolute -left-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-[#0d6e74]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-white/70">
          <span className="size-2 rounded-full bg-[#f2a83c]" />
          10+ YEARS OF EXPERIENCE
        </div>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-white sm:text-4xl">
            Why <span className="text-[#f2a83c]">Choose Us</span>
          </h2>
          <p className="max-w-md text-sm text-white/60 lg:mb-1">
            We are committed to offering a simple, safe, and
            clinician-guided weight loss program.
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-white/15" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="flex min-h-48 flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#f2a83c]/15 text-[#f2a83c]">
                <item.icon className="size-5" />
              </div>
              <h3 className="font-heading mt-4 text-base font-medium text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          Compounded medications are prepared by licensed compounding
          pharmacies and are not FDA-approved.
        </p>
      </div>
    </section>
  );
}
