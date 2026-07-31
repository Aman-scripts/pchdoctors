import Image from "next/image";
import { ArrowRight, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Process", href: "#process" },
  { label: "Consultations", href: "#consultations" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
];

const services = ["Medical Marijuana Evaluation", "GLP 1 Weight Loss Program"];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0a2733] via-[#0d3f45] to-[#0a2733] text-white">
      <div className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-[#0d6e74]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-1/2 size-96 -translate-y-1/2 rounded-full bg-[#f2a83c]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="w-fit rounded-lg bg-white p-2">
              <Image
                src="/pch-doctors-logo.png"
                alt="PCH Doctors"
                width={1251}
                height={512}
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-4 text-sm text-white/60">
              Nationwide medical marijuana consultations with licensed doctors
              via secure telemedicine.
            </p>

            <div className="mt-8">
              <p className="mb-2 text-sm font-medium text-white/80">Newsletter:</p>
              <form className="flex items-center justify-between border-b border-white/20 pb-2">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f2a83c] text-white transition-colors hover:bg-[#f2a83c]/90"
                >
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-12">
            <div className="min-w-0">
              <h3 className="font-heading text-sm font-medium text-white/50">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[#f2a83c]"
                    >
                      <ChevronRight className="size-3.5 text-[#f2a83c]" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="font-heading text-sm font-medium text-white/50">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-white/80">
                    <ChevronRight className="size-3.5 text-[#f2a83c]" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="font-heading text-sm font-medium text-white/50">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex min-w-0 items-center gap-2 text-sm text-white/80">
                  <Mail className="size-4 shrink-0 text-[#f2a83c]" />
                  <span className="break-all">contact@pchdoctors.com</span>
                </li>
                <li className="flex min-w-0 items-center gap-2 text-sm text-white/80">
                  <Phone className="size-4 shrink-0 text-[#f2a83c]" />
                  <span className="break-words">+1 (424) 424 – 1618</span>
                </li>
                <li className="flex min-w-0 items-start gap-2 text-sm text-white/80">
                  <MapPin className="size-4 shrink-0 text-[#f2a83c]" />
                  <span className="break-words">
                    910 W Pacific Coast Hwy Unit D Wilmington, CA 90744
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-white/10 py-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/50">
            © 2025 PCH Doctors. All rights reserved.
          </p>
        </div>

        <p className="border-t border-white/10 pb-10 pt-6 text-xs text-white/40">
          Medical Disclaimer: This website provides general information about
          medical marijuana and is not intended as medical advice. Individual
          results may vary. Cannabis affects everyone differently. Please
          consult with a licensed physician to determine if medical marijuana
          is right for your specific condition. The information provided has
          not been evaluated by the FDA.
        </p>
      </div>

      <div className="pointer-events-none relative overflow-hidden pb-4">
        <p className="font-heading select-none text-center text-[16vw] font-medium leading-none text-white/5">
          PCH Doctors
        </p>
      </div>
    </footer>
  );
}
