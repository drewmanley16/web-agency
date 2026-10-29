import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { revealDelay } from "@/lib/reveal";

const stats = [
  { value: "7-day", label: "launch", detail: "From kickoff call to a live site in one week." },
  { value: "Mobile", label: "first", detail: "Designed for the phone your customers are holding." },
  { value: "Booking", label: "ready", detail: "Book, call, or order in one tap from any page." },
  { value: "Built", label: "to rank", detail: "Local SEO and Google Business Profile setup included." },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="container-page pt-14 md:pt-24 xl:pt-32">
      <p data-reveal className="eyebrow flex items-center gap-3 text-muted">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
        Website agency for small businesses
      </p>

      <h1
        id="hero-title"
        data-reveal
        className="mt-8 max-w-[22ch] font-display text-hero font-bold text-balance md:mt-10"
      >
        Your business deserves a website that <span className="accent-serif">books customers</span>, not just
        looks nice.
      </h1>

      <div className="grid-page mt-12 gap-y-14 md:mt-16 lg:mt-20">
        <div data-reveal className="col-span-4 md:col-span-7 lg:col-span-5" style={revealDelay(120)}>
          <p className="text-lead text-muted">
            We design, write, and launch a fast, mobile-first site with online booking built in. Kickoff to live in{" "}
            {siteConfig.launchDays} days.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#contact">Book a free homepage mockup</ButtonLink>
            <ButtonLink href="#work" variant="secondary" icon="down">
              See the work
            </ButtonLink>
          </div>
        </div>

        <WeekStrip />
      </div>

      <dl className="mt-20 grid grid-cols-2 border-t border-line md:mt-28 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.value}
            data-reveal
            style={revealDelay(i * 80)}
            className={`border-line py-7 pr-4 md:py-9 md:pr-8 ${i % 2 === 1 ? "border-l pl-4 md:pl-8" : ""} ${
              i >= 2 ? "border-t lg:border-t-0" : ""
            } ${i === 2 ? "lg:border-l lg:pl-8" : ""}`}
          >
            <dt className="font-display text-[1.375rem] leading-tight font-bold tracking-[-0.03em] md:text-[1.75rem]">
              {stat.value} <span className="text-muted">{stat.label}</span>
            </dt>
            <dd className="mt-3 max-w-[26ch] text-[15px] leading-relaxed text-muted">{stat.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** Seven cells, one per day. Day 7 is the launch. */
function WeekStrip() {
  return (
    <figure
      data-reveal
      style={revealDelay(240)}
      className="col-span-4 self-end md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9"
    >
      <div aria-hidden="true" className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 7 }, (_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div
              className={`aspect-square ${
                i === 6 ? "rounded-full bg-accent" : i === 0 ? "rounded-[3px] bg-ink" : "rounded-[3px] border border-line bg-stone"
              }`}
            />
            <span className="eyebrow text-center text-[10px] text-muted tabular-nums">D{i + 1}</span>
          </div>
        ))}
      </div>
      <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-line pt-4 text-sm text-muted">
        <span>
          <span className="text-ink">Day 1:</span> kickoff call
        </span>
        <span>
          <span className="text-ink">Day 7:</span> you&apos;re live
        </span>
      </figcaption>
    </figure>
  );
}
