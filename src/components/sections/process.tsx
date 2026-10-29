import { processSteps } from "@/content/process";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/section-header";
import { revealDelay } from "@/lib/reveal";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="theme-dark border-t border-line bg-ink text-paper"
    >
      <div className="container-page section-y">
        <SectionHeader
          id="process-title"
          index="04"
          eyebrow="Process"
          inverse
          title={
            <>
              {siteConfig.launchDays} days, start to <span className="accent-serif">live</span>.
            </>
          }
          intro="No months of back-and-forth. A fixed schedule, one decision at a time, and you always know what happens next."
        />

        <ol className="mt-16 border-t border-white/15 md:mt-24">
          {processSteps.map((step, i) => {
            const isLaunch = i === processSteps.length - 1;
            return (
              <li
                key={step.day}
                data-reveal
                style={revealDelay(i * 60)}
                className="grid-page gap-y-3 border-b border-white/15 py-8 md:py-10"
              >
                <p className="col-span-4 flex items-center gap-3 md:col-span-3">
                  <span
                    aria-hidden="true"
                    className={`size-2 shrink-0 ${isLaunch ? "rounded-full bg-accent" : "rounded-[2px] bg-white/30"}`}
                  />
                  <span className="font-display text-title font-bold tabular-nums">{step.day}</span>
                </p>
                <h3 className="col-span-4 font-display text-title font-bold md:col-span-4 lg:col-span-3">
                  {step.title}
                </h3>
                <div className="col-span-4 md:col-span-5 md:col-start-8 lg:col-span-6 lg:col-start-7">
                  <p className="leading-relaxed text-muted-inverse">{step.body}</p>
                  <p className="eyebrow mt-5 text-paper">
                    <span aria-hidden="true" className={isLaunch ? "text-accent" : ""}>→</span> {step.output}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div data-reveal className="grid-page mt-12 gap-y-6 md:mt-16">
          <p className="col-span-4 font-display text-title font-bold md:col-span-4 md:col-start-4 lg:col-span-3 lg:col-start-4">
            One revision round is included.
          </p>
          <p className="col-span-4 leading-relaxed text-muted-inverse md:col-span-5 md:col-start-8 lg:col-span-6 lg:col-start-7">
            On Day 6 you send us one list of everything you want changed, and we make every change on that list.
            Anything new after that, like an extra page, gets a quote first. No surprise invoices.
          </p>
        </div>
      </div>
    </section>
  );
}
