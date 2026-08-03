import { Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";

const doctors = [
  {
    name: "Johnathan Chance Miller, MD",
    npi: "1235623372",
    bio: "Dr. Miller is a licensed physician providing clinically guided weight loss and metabolic care. He conducts personalized evaluations and may prescribe treatment when clinically appropriate.",
  },
  {
    name: "Vanessa Niles, MD",
    npi: "1922199470",
    bio: "Dr. Niles is a licensed physician with over 30 years of clinical experience. She provides personalized weight loss evaluations and determines appropriate treatment options based on individual needs.",
  },
  {
    name: "Benjamin Howard Krasne, MD",
    npi: "1306189832",
    bio: "Dr. Krasne is a board-certified physician specializing in personalized weight loss evaluations. He provides clinician-guided care and may prescribe GLP-1 treatment when appropriate.",
  },
  {
    name: "Cheryl-Lynn Marie Bugailiskis, MD",
    npi: "1871882035",
    bio: "Dr. Bugailiskis is a licensed physician offering personalized, physician-guided weight loss care. She evaluates each patient’s health history and goals to determine appropriate treatment options.",
  },
];

export function Glp1Doctors() {
  return (
    <section id="doctors" className="bg-[#eef6f6] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[#0a2733] sm:text-4xl">
            Our <span className="text-[#0d6e74]">Doctors</span>
          </h2>
          <p className="mt-4 text-neutral-600">
            Our team of licensed professionals guides your treatment from
            evaluation through ongoing care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="flex-row gap-4 p-6">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#0d6e74]/10 text-[#0d6e74]">
                <Stethoscope className="size-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-medium text-[#0a2733]">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-xs text-neutral-400">NPI: {doctor.npi}</p>
                <p className="mt-2 text-sm text-neutral-600">{doctor.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
