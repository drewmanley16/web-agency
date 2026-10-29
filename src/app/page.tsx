import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServiceMarquee } from "@/components/sections/service-marquee";
import { Problem } from "@/components/sections/problem";
import { BeforeAfter } from "@/components/sections/before-after";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { RevealObserver } from "@/components/ui/reveal-observer";
import { JsonLd } from "@/components/layout/json-ld";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div id="top" />
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <ServiceMarquee />
        <Problem />
        <BeforeAfter />
        <Work />
        <Process />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <RevealObserver />
      <JsonLd />
    </>
  );
}
