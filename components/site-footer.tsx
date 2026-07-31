import Image from "next/image";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = ["Home", "Process", "Consultations", "Reviews", "Pricing"];
const services = ["Medical Marijuana Evaluation", "GLP 1 Weight Loss Program"];

export function SiteFooter() {
  return (
    <footer className="bg-[#0a2733] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="w-fit rounded-lg bg-white p-2">
            <Image
              src="/pch-doctors-logo.png"
              alt="PCH Doctors"
              width={1251}
              height={512}
              className="h-9 w-auto"
            />
          </div>
          <p className="text-sm text-white/60">
            Nationwide medical marijuana consultations with licensed doctors via
            secure telemedicine.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-semibold text-[#f2a83c]">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={link} className="flex items-center gap-2">
                <ChevronRight className="size-3.5 text-[#f2a83c]" />
                {link}
              </li>
            ))}
          </ul>
          <h3 className="mb-4 mt-6 font-heading text-sm font-semibold text-[#f2a83c]">Services</h3>
          <ul className="space-y-3 text-sm text-white/70">
            {services.map((link) => (
              <li key={link} className="flex items-center gap-2">
                <ChevronRight className="size-3.5 text-[#f2a83c]" />
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-semibold text-[#f2a83c]">Contact Us</h3>
          <ul className="space-y-4 text-sm text-white/70">
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
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-semibold text-[#f2a83c]">Get Started Today</h3>
          <p className="mb-4 text-sm text-white/70">
            Ready to get your medical marijuana certification? Book your
            consultation now.
          </p>
          <Button className="rounded-full bg-[#0d6e74] text-white hover:bg-[#0d6e74]/90">
            Book Consultation
          </Button>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto max-w-6xl space-y-3 text-xs text-white/50">
          <p>© 2025 PCH Doctors. All rights reserved.</p>
          <p>
            Medical Disclaimer: This website provides general information about
            medical marijuana and is not intended as medical advice. Individual
            results may vary. Cannabis affects everyone differently. Please
            consult with a licensed physician to determine if medical marijuana
            is right for your specific condition. The information provided has
            not been evaluated by the FDA.
          </p>
        </div>
      </div>
    </footer>
  );
}
