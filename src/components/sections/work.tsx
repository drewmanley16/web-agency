import { caseStudies } from "@/content/work";
import { SectionHeader } from "@/components/ui/section-header";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { casePreviews } from "@/components/previews/case-previews";
import { revealDelay } from "@/lib/reveal";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "");

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line">
      <div className="container-page section-y">
        <SectionHeader
          id="work-title"
          index="03"
          eyebrow="Work"
          title={
            <>
              Built for the way <span className="accent-serif">your</span> customers actually book.
            </>
          }
          intro="A salon, a gym, and a restaurant need different things from a homepage. Each one is designed around the single action that makes the business money."
        />

        <ul className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => {
            const Preview = casePreviews[study.preview];
            return (
              <li key={study.business} data-reveal style={revealDelay(i * 100)} className="group flex flex-col">
                <article className="flex h-full flex-col">
                  <div className="overflow-hidden rounded-card">
                    <BrowserFrame
                      url={`${slug(study.business)}.com`}
                      tone={study.preview === "gym" ? "dark" : "light"}
                      className="aspect-[4/3] transition-transform duration-700 ease-out-soft group-hover:scale-[1.015]"
                    >
                      <Preview />
                    </BrowserFrame>
                  </div>

                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-title font-bold">{study.business}</h3>
                    <p className="eyebrow shrink-0 text-muted">{study.type}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted">{study.location}</p>

                  <h4 className="eyebrow mt-8 text-muted">What we built</h4>
                  <ul className="mt-4 border-t border-line">
                    {study.built.map((item) => (
                      <li key={item} className="border-b border-line py-3 text-[15px] leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <p className="font-display text-[1.25rem] leading-snug font-bold tracking-[-0.02em]">
                      {study.result}
                    </p>
                    {study.illustrative && (
                      <p className="mt-3 flex items-center gap-2 text-[13px] text-muted">
                        <span aria-hidden="true" className="size-1.5 rounded-full border border-ink/40" />
                        Sample project. Result is illustrative.
                      </p>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
