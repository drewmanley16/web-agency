import { problems } from "@/content/problems";
import { SectionHeader } from "@/components/ui/section-header";
import { revealDelay } from "@/lib/reveal";

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="container-page section-y">
      <SectionHeader
        id="problem-title"
        index="01"
        eyebrow="The problem"
        title={
          <>
            Most small business sites lose the customer <span className="accent-serif">before</span> the phone ever
            rings.
          </>
        }
        intro="It's rarely the design. It's three boring, fixable problems that quietly send people to a competitor."
      />

      <ol className="mt-16 grid gap-4 md:mt-24 md:gap-6 lg:grid-cols-3">
        {problems.map((problem, i) => (
          <li
            key={problem.title}
            data-reveal
            style={revealDelay(i * 100)}
            className="group flex flex-col rounded-card border border-line bg-paper p-6 transition-colors duration-500 ease-out-soft hover:border-ink/40 md:p-8"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-sm font-medium text-muted tabular-nums">0{i + 1}</span>
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-line transition-colors duration-500 group-hover:bg-accent"
              />
            </div>

            <h3 className="mt-14 font-display text-title font-bold md:mt-20">{problem.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{problem.body}</p>

            <div className="mt-auto pt-10">
              <div className="border-t border-line pt-6">
                <p className="eyebrow flex items-center gap-2 text-ink">
                  <span aria-hidden="true" className="h-px w-4 bg-accent" />
                  The fix
                </p>
                <p className="mt-3 leading-relaxed">{problem.fix}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
