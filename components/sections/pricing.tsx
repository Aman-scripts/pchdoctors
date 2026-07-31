import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "New MMJ Card",
    description:
      "Full online medical marijuana consultation with a licensed physician, state-recognized recommendation provided digitally.",
    price: "$149",
    featured: true,
    features: [
      {
        title: "Quick Online Consultation",
        description: "Meet a licensed doctor via secure video or audio call.",
      },
      {
        title: "State-Recognized Certification",
        description: "Receive your medical marijuana recommendation digitally.",
      },
      {
        title: "Same-Day Approval or Refund",
        description: "Get certified within hours – or a full refund if not approved.",
      },
    ],
  },
  {
    name: "Renew MMJ Card",
    description:
      "Full online medical marijuana consultation with a licensed physician, state-recognized recommendation provided digitally.",
    price: "$129",
    featured: false,
    features: [
      {
        title: "Fast & Convenient",
        description: "Renew your certification online without repeat paperwork.",
      },
      {
        title: "Maintain Legal Access",
        description: "Ensure uninterrupted access to cannabis at dispensaries.",
      },
      {
        title: "Affordable Renewal Rates",
        description:
          "Competitive pricing to keep your care accessible and stress-free.",
      },
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#eef6f6]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[#0a2733] sm:text-4xl">
            Know Your Consultation <span className="text-[#0d6e74]">Costs</span>
          </h2>
          <p className="mt-4 text-neutral-600">
            Get started today with transparent rates for new patients and
            effortless renewals.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:mx-auto sm:max-w-3xl sm:grid-cols-2">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-6 ${
                plan.featured ? "bg-[#f2a83c]/20 ring-[#f2a83c]/40" : "bg-white"
              }`}
            >
              <h3 className="font-heading text-lg font-medium tracking-normal text-[#0a2733]">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{plan.description}</p>
              <div className="my-6 flex size-16 items-center justify-center rounded-full bg-[#0d6e74] text-lg font-bold text-white">
                {plan.price}
              </div>
              <ul className="space-y-4">
                {plan.features.map((f) => (
                  <li key={f.title} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#0d6e74]" />
                    <div>
                      <p className="text-sm font-medium text-[#0a2733]">{f.title}</p>
                      <p className="text-xs text-neutral-600">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Button className="rounded-full bg-[#0d6e74] px-6 py-5 text-white hover:bg-[#0d6e74]/90">
            Get Certified Now
          </Button>
          <p className="text-xs text-neutral-500">
            Get California MMJ recommendation $55.
          </p>
        </div>
      </div>
    </section>
  );
}
