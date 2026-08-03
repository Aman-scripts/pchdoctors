import { ClipboardCheck, Activity, HeartPulse } from "lucide-react";

const timeline = [
  {
    phase: "Initial",
    label: "Phase",
    icon: ClipboardCheck,
    description:
      "Comprehensive clinical evaluation and development of a personalized dosing strategy based on your medical history and health goals.",
  },
  {
    phase: "Adjustment",
    label: "Phase",
    icon: Activity,
    description:
      "Ongoing assessment of treatment response with dose modifications guided by established clinical protocols.",
  },
  {
    phase: "Ongoing",
    label: "Care",
    icon: HeartPulse,
    description:
      "Continued medical supervision with integrated lifestyle support to promote sustainable, long-term weight management.",
  },
];

export function Glp1Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-medium tracking-normal text-[#0a2733] sm:text-4xl">
          What to <span className="text-[#0d6e74]">Expect</span> During Treatment
        </h2>
        <p className="mt-4 text-neutral-600">
          Below is a general overview of how your medically supervised
          weight management timeline may progress. Individual experiences
          may vary.
        </p>
      </div>

      <div className="relative mt-14 grid gap-6 sm:grid-cols-3">
        <div className="pointer-events-none absolute inset-x-0 top-10 hidden h-px bg-neutral-200 sm:block" />

        {timeline.map((step, i) => (
          <div key={step.phase} className="relative rounded-2xl bg-[#f7f9f9] p-6">
            <div className="flex items-center gap-3">
              <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0d6e74] text-white">
                <step.icon className="size-5" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-neutral-400">
                STEP {i + 1}
              </span>
            </div>
            <h3 className="font-heading mt-4 text-lg font-medium text-[#0a2733]">
              {step.phase} <span className="text-[#0d6e74]">{step.label}</span>
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-neutral-500">
        Large clinical trials, including <span className="font-semibold text-[#0a2733]">STEP</span> and{" "}
        <span className="font-semibold text-[#0a2733]">SURMOUNT</span>, show GLP-1
        therapies combined with lifestyle support can aid sustained weight
        reduction in appropriate patients. Individual results vary.
      </p>
    </section>
  );
}
