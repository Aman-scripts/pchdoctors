import Image from "next/image";
import { ArrowRight, Camera, ThumbsUp, AtSign, Play, Mail, Phone, MapPin } from "lucide-react";

const footerColumns = [
  {
    title: "Get Started",
    links: [
      { label: "Home", href: "#" },
      { label: "Process", href: "#process" },
      { label: "Consultations", href: "#consultations" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Medical Marijuana Evaluation", href: "#services" },
      { label: "GLP-1 Weight Loss Program", href: "#services" },
      { label: "MMJ Card Renewals", href: "#pricing" },
      { label: "State Programs", href: "#faqs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Reviews", href: "#reviews" },
      { label: "FAQs", href: "#faqs" },
      { label: "Support", href: "#faqs" },
      { label: "Medical Disclaimer", href: "#faqs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact Us", href: "#faqs" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

const socials = [Camera, Play, ThumbsUp, AtSign];

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
                className="h-8 w-auto"
              />
            </div>

            <h2 className="font-heading mt-6 text-3xl font-medium leading-tight text-white">
              Get Certified Faster.
              <br />
              Care Smarter.
            </h2>
            <p className="mt-4 text-sm text-white/60">
              Connect with licensed physicians and get your medical marijuana
              recommendation in minutes, not days.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-[#f2a83c]" />
                contact@pchdoctors.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-[#f2a83c]" />
                +1 (424) 424 – 1618
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 shrink-0 text-[#f2a83c]" />
                910 W Pacific Coast Hwy Unit D Wilmington, CA 90744
              </li>
            </ul>

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
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0d6e74] text-white transition-colors hover:bg-[#0d6e74]/90"
                >
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-heading text-sm font-medium text-white/50">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/80 transition-colors hover:text-[#f2a83c]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-2xl border-t border-white/10 pt-6 text-xs text-white/40">
          Medical Disclaimer: This website provides general information about
          medical marijuana and is not intended as medical advice. Please
          consult with a licensed physician to determine if medical marijuana
          is right for your specific condition. The information provided has
          not been evaluated by the FDA.
        </p>

        <div className="mt-6 flex flex-col-reverse items-center gap-4 border-t border-white/10 py-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/50">
            © 2025 PCH Doctors. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative overflow-hidden pb-4">
        <p className="font-heading select-none text-center text-[16vw] font-medium leading-none text-white/5">
          PCH Doctors
        </p>
      </div>
    </footer>
  );
}
