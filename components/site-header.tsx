"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Consultations", href: "#consultations" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="hidden items-center justify-center gap-2 bg-gradient-to-r from-[#0a4f54] via-[#0d6e74] to-[#0a4f54] px-6 py-2.5 text-xs text-white sm:flex">
        <Sparkles className="size-3.5 text-[#f2a83c]" />
        <p>
          Now also accepting patients for our clinician-guided{" "}
          <a
            href="#"
            className="font-semibold text-[#f2a83c] underline decoration-[#f2a83c]/40 underline-offset-2 transition-colors hover:text-white"
          >
            weight loss program
          </a>
          .
        </p>
      </div>

      <div className="sticky top-0 z-50 bg-white">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-2 py-4">
          <Link href="#" className="flex items-center">
            <Image
              src="/pch-doctors-logo.png"
              alt="PCH Doctors"
              width={1251}
              height={512}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium text-neutral-600 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#0d6e74]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button className="rounded-full bg-[#0d6e74] px-5 py-5 text-white shadow-[0_8px_24px_rgba(13,110,116,0.35)] transition-shadow hover:bg-[#0d6e74]/90 hover:shadow-[0_10px_28px_rgba(13,110,116,0.45)]">
              Book Your Consultation
            </Button>
          </div>

          <button
            className="p-2 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={cn(
            "flex flex-col gap-1 overflow-hidden border-t border-neutral-100 bg-white px-6 transition-all lg:hidden",
            open ? "max-h-96 py-3" : "max-h-0 py-0"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-[#0d6e74]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="mt-1 w-full rounded-full bg-[#0d6e74] text-white hover:bg-[#0d6e74]/90">
            Book Your Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
