import { MockupForm } from "@/components/forms/mockup-form";

const steps = [
  "Tell us about your business.",
  "We design a homepage mockup for it.",
  "You decide if you want the full site.",
];

export function FinalCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="theme-dark bg-ink text-paper">
      <div className="container-page section-y grid-page gap-y-16">
        <div className="col-span-4 md:col-span-12 lg:col-span-5">
          <p data-reveal className="eyebrow text-muted-inverse">
            <span className="tabular-nums">(07)</span>
            <span className="ml-3">Free mockup</span>
          </p>
          <h2 id="contact-title" data-reveal className="mt-6 font-display text-display font-bold text-balance">
            Want a <span className="accent-serif">homepage mockup</span> for your business?
          </h2>
          <ol data-reveal className="mt-10 max-w-[28rem] border-t border-white/15 md:mt-14">
            {steps.map((step, i) => (
              <li key={step} className="flex gap-5 border-b border-white/15 py-4 leading-relaxed">
                <span className="font-display text-muted-inverse tabular-nums">0{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div data-reveal className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-2">
          <MockupForm />
        </div>
      </div>
    </section>
  );
}
