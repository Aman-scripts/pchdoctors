import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { SafeSecure } from "@/components/sections/safe-secure";
import { Reviews } from "@/components/sections/reviews";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <Hero />
      <Process />
      <SafeSecure />
      <Reviews />
      <Pricing />
      <Faq />
      <SiteFooter />
    </div>
  );
}
