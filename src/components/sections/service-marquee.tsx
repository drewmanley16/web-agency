import { siteConfig } from "@/config/site";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:gap-y-6">
      {siteConfig.audience.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 font-display text-[2.5rem] leading-none font-bold tracking-[-0.04em] md:px-10 md:text-[4rem]">
            {item}
          </span>
          <span aria-hidden="true" className="size-2.5 rotate-45 bg-accent md:size-3" />
        </li>
      ))}
    </ul>
  );
}

export function ServiceMarquee() {
  return (
    <section aria-label="Who we build for" className="theme-dark mt-20 overflow-hidden bg-ink py-8 text-paper md:mt-28 md:py-12">
      {/* Two identical rows; the track slides by exactly one row's width. */}
      <div className="flex w-max animate-marquee motion-reduce:w-full motion-reduce:flex-wrap">
        <Row />
        <div className="contents motion-reduce:hidden">
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
