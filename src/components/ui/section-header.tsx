import type { ReactNode } from "react";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  inverse?: boolean;
};

/**
 * Shared section opener: numbered eyebrow in the left 3 columns, headline
 * and optional intro in the remaining 9.
 */
export function SectionHeader({ index, eyebrow, title, intro, id, inverse }: SectionHeaderProps) {
  const muted = inverse ? "text-muted-inverse" : "text-muted";

  return (
    <header className="grid-page gap-y-6">
      <p data-reveal className={`eyebrow col-span-4 md:col-span-3 md:pt-3 ${muted}`}>
        <span className="tabular-nums">({index})</span>
        <span className="ml-3">{eyebrow}</span>
      </p>
      <div className="col-span-4 md:col-span-9 lg:col-span-8">
        <h2 id={id} data-reveal className="font-display text-display font-bold text-balance">
          {title}
        </h2>
        {intro && (
          <p data-reveal className={`mt-6 max-w-[38rem] text-lead md:mt-8 ${muted}`}>
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
