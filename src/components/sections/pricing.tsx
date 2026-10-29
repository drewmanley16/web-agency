import { paymentTerms, plans, type Plan } from "@/content/pricing";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { Check } from "@/components/ui/icons";
import { revealDelay } from "@/lib/reveal";

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="container-page section-y">
      <SectionHeader
        id="pricing-title"
        index="05"
        eyebrow="Pricing"
        title={
          <>
            Clear prices. <span className="accent-serif">No</span> retainers you didn&apos;t ask for.
          </>
        }
        intro="Most small businesses need one thing: a launch site. Add the Care Plan if you'd rather never touch it again."
      />

      <ul className="mt-16 grid grid-cols-1 items-stretch gap-4 md:mt-24 lg:grid-cols-3 lg:gap-6">
        {plans.map((plan, i) => (
          <li key={plan.name} data-reveal style={revealDelay(i * 100)} className="flex">
            <PlanCard plan={plan} />
          </li>
        ))}
      </ul>

      <div
        data-reveal
        className="mt-10 flex flex-col gap-4 border-t border-line pt-6 text-[15px] md:flex-row md:items-center md:justify-between"
      >
        <p className="flex items-center gap-3">
          <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent" />
          {paymentTerms}
        </p>
        <p className="text-muted">Every quote is fixed before we start.</p>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const dark = plan.featured;
  const id = `plan-${plan.name.toLowerCase().replace(/\s+/g, "-")}`;
  const href = plan.name === "Launch Site" ? "#contact" : siteConfig.bookCallHref;

  return (
    <article
      aria-labelledby={id}
      className={`@container flex w-full flex-col rounded-card border p-6 transition-colors duration-500 ease-out-soft md:p-8 ${
        dark ? "theme-dark border-ink bg-ink text-paper" : "border-line bg-paper hover:border-ink/40"
      }`}
    >
      <div className="flex min-h-7 items-center justify-between gap-4">
        <h3 id={id} className="font-display text-title font-bold">
          {plan.name}
        </h3>
        {plan.featured && (
          <span className="eyebrow rounded-full bg-accent px-3 py-1.5 text-[11px] text-ink">Most popular</span>
        )}
      </div>

      <p className={`mt-4 max-w-[34ch] leading-relaxed ${dark ? "text-muted-inverse" : "text-muted"}`}>
        {plan.summary}
      </p>

      <div className={`mt-10 border-t pt-8 ${dark ? "border-white/15" : "border-line"}`}>
        <p
          className={`font-display text-[min(3rem,12cqw)] leading-none font-bold tracking-[-0.045em] tabular-nums ${
            dark ? "text-accent" : ""
          }`}
        >
          {plan.price}
        </p>
        <p className={`eyebrow mt-3 ${dark ? "text-muted-inverse" : "text-muted"}`}>{plan.cadence}</p>
      </div>

      <ul className="mt-8 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[15px] leading-snug">
            <Check className={`mt-0.5 size-4 shrink-0 ${dark ? "text-accent" : "text-ink"}`} />
            {feature}
          </li>
        ))}
      </ul>

      {plan.note && (
        <p className={`mt-8 text-sm leading-relaxed ${dark ? "text-muted-inverse" : "text-muted"}`}>{plan.note}</p>
      )}

      <div className="mt-auto pt-10">
        <ButtonLink href={href} variant={dark ? "primary" : "secondary"} className="w-full">
          {plan.cta}
        </ButtonLink>
      </div>
    </article>
  );
}
