import { faqs } from "@/content/faq";
import { siteConfig } from "@/config/site";
import { Plus } from "@/components/ui/icons";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-line">
      <div className="container-page section-y grid-page gap-y-14">
        <div className="col-span-4 md:col-span-12 lg:col-span-4">
          <p data-reveal className="eyebrow text-muted">
            <span className="tabular-nums">(06)</span>
            <span className="ml-3">FAQ</span>
          </p>
          <h2 id="faq-title" data-reveal className="mt-6 font-display text-display font-bold text-balance">
            Straight <span className="accent-serif">answers</span>.
          </h2>
          <p data-reveal className="mt-6 max-w-[30ch] leading-relaxed text-muted lg:mt-8">
            Something else on your mind? Email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
            >
              {siteConfig.email}
            </a>
            . A person reads every message.
          </p>
        </div>

        <div data-reveal className="col-span-4 border-t border-line md:col-span-12 lg:col-span-7 lg:col-start-6">
          {faqs.map((faq) => (
            <details key={faq.question} name="faq" className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-[1.25rem] leading-snug font-bold tracking-[-0.02em] transition-colors hover:text-ink/70 md:py-7 md:text-[1.5rem] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 ease-out-soft group-open:rotate-45 group-open:border-accent group-open:bg-accent group-hover:border-ink">
                  <Plus className="size-3.5" />
                </span>
              </summary>
              <p className="max-w-[60ch] pr-12 pb-7 leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
