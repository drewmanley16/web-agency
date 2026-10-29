import type { ReactNode } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { SalonBefore } from "@/components/previews/salon-before";
import { SalonAfter } from "@/components/previews/salon-after";
import { revealDelay } from "@/lib/reveal";

const before = [
  "Takes 6+ seconds to load on a phone",
  "Text too small to read without zooming",
  "Booking means calling during business hours",
  "No prices, no reviews, broken photos",
];

const after = [
  "Loads in about a second",
  "Readable headline, clear services and prices",
  "Book now button on every screen",
  "Google rating and a real review, up front",
];

export function BeforeAfter() {
  return (
    <section aria-labelledby="demo-title" className="border-t border-line bg-stone/50">
      <div className="container-page section-y">
        <SectionHeader
          id="demo-title"
          index="02"
          eyebrow="Before / After"
          title={
            <>
              Same salon. <span className="accent-serif">Different</span> first impression.
            </>
          }
          intro="Here's what a typical rebuild looks like. Same business, same services, same phone number. The difference is whether a stranger on their phone books or bounces."
        />

        <p data-reveal className="mt-14 flex items-center gap-3 text-sm text-muted md:mt-20">
          <span className="eyebrow shrink-0 rounded-full border border-ink/20 px-3 py-1.5 whitespace-nowrap text-ink">Demo rebuild</span>
          Juniper Hair Co. is a fictional salon, built to show the difference.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-2">
          <Comparison
            label="Before"
            title="Dated salon homepage, mocked up for this demo"
            points={before}
            frame={
              <BrowserFrame
                url="http://www.juniperhairco-salon.net/index.html"
                status={<LoadingStatus />}
                className="h-full"
              >
                <SalonBefore />
              </BrowserFrame>
            }
          />
          <Comparison
            label="After"
            title="Rebuilt salon homepage, mocked up for this demo"
            points={after}
            accent
            delay={120}
            frame={
              <BrowserFrame url="juniperhair.co" status="Loaded in 1.1s" className="h-full">
                <SalonAfter />
              </BrowserFrame>
            }
          />
        </div>
      </div>
    </section>
  );
}

type ComparisonProps = {
  label: string;
  title: string;
  points: string[];
  frame: ReactNode;
  accent?: boolean;
  delay?: number;
};

function Comparison({ label, title, points, frame, accent, delay = 0 }: ComparisonProps) {
  return (
    <figure data-reveal style={revealDelay(delay)} className="flex min-w-0 flex-col">
      <div className="flex items-center justify-between pb-4">
        <span className="font-display text-title font-bold">{label}</span>
        <span
          aria-hidden="true"
          className={`size-2.5 ${accent ? "rounded-full bg-accent" : "rounded-[2px] bg-ink/25"}`}
        />
      </div>

      <div role="img" aria-label={title} className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[5/4] xl:aspect-[4/3]">
        {frame}
      </div>

      <figcaption>
        <span className="sr-only">{title}. </span>
        <ul className="mt-6 grid gap-x-6 sm:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="flex gap-3 border-t border-line py-3.5 text-[15px] leading-snug">
              <span
                aria-hidden="true"
                className={`mt-[0.45em] size-1.5 shrink-0 ${accent ? "rounded-full bg-accent" : "bg-ink/30"}`}
              />
              <span className={accent ? "" : "text-muted"}>{point}</span>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}

function LoadingStatus() {
  return (
    <span className="flex items-center gap-2">
      <span className="relative block h-1 w-12 overflow-hidden rounded-full bg-ink/10">
        <span className="absolute inset-y-0 left-0 w-2/5 bg-ink/35" />
      </span>
      Loading… 6.4s
    </span>
  );
}
