import { siteConfig } from "@/config/site";
import { Mark } from "@/components/brand/mark";

/** Mark + wordmark: first word in the display grotesque, the rest in the serif accent. */
export function Logo({ className = "" }: { className?: string }) {
  const [first, ...rest] = siteConfig.name.split(" ");

  return (
    <a href="#top" aria-label={`${siteConfig.name}, back to top`} className={`group inline-flex items-center gap-2.5 ${className}`}>
      <Mark className="size-[22px] shrink-0 transition-transform duration-500 ease-out-soft group-hover:-rotate-6" />
      <span aria-hidden="true" className="text-[19px] leading-none whitespace-nowrap">
        <span className="font-display font-bold tracking-[-0.035em]">{first}</span>
        {rest.length > 0 && <span className="accent-serif ml-[0.22em] text-[1.08em]">{rest.join(" ")}</span>}
      </span>
    </a>
  );
}
