import { Stars } from "./stars";

const services = [
  { name: "Women's cut", price: "$65" },
  { name: "Men's cut", price: "$40" },
  { name: "Color", price: "from $95" },
  { name: "Balayage", price: "from $180" },
];

/** The rebuilt salon homepage. Decorative only. */
export function SalonAfter() {
  return (
    <div aria-hidden="true" className="flex h-full flex-col bg-paper text-ink">
      {/* Nav */}
      <div className="flex items-center justify-between border-b border-line px-[4cqw] py-[2.6cqw]">
        <span className="font-display text-[clamp(11px,2.6cqw,16px)] font-bold tracking-[-0.03em]">Juniper</span>
        <div className="flex items-center gap-[3cqw] text-[clamp(8px,1.7cqw,11px)]">
          <span className="hidden text-muted @[22rem]:inline">Services</span>
          <span className="hidden text-muted @[22rem]:inline">Reviews</span>
          <span className="rounded-full bg-accent px-[2.6cqw] py-[1.2cqw] font-medium">Book now</span>
        </div>
      </div>

      {/* Hero */}
      <div className="px-[4cqw] pt-[6cqw] pb-[5cqw]">
        <p className="text-[clamp(7px,1.4cqw,9px)] font-medium tracking-[0.16em] text-muted uppercase">
          Hair salon · Main Street · Open 7 days
        </p>
        <p className="mt-[2.4cqw] font-display text-[clamp(22px,7.4cqw,46px)] leading-[0.95] font-bold tracking-[-0.045em]">
          Cuts, color <br />
          and <span className="font-serif font-normal tracking-[-0.02em] italic">care</span>, booked
          <br /> in a minute.
        </p>
        <div className="mt-[4cqw] flex gap-[1.6cqw] text-[clamp(8px,1.8cqw,12px)] font-medium">
          <span className="rounded-full bg-accent px-[3.4cqw] py-[1.6cqw]">Book now</span>
          <span className="rounded-full border border-ink/20 px-[3.4cqw] py-[1.6cqw]">See prices</span>
        </div>
      </div>

      {/* Services + reviews */}
      <div className="mt-auto grid grid-cols-[1.25fr_1fr] gap-[3cqw] border-t border-line px-[4cqw] py-[4cqw]">
        <ul className="text-[clamp(8px,1.8cqw,12px)]">
          {services.map((s) => (
            <li key={s.name} className="flex justify-between border-b border-line py-[1.3cqw] first:pt-0">
              <span>{s.name}</span>
              <span className="text-muted tabular-nums">{s.price}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-[min(2cqw,12px)] bg-stone p-[2.6cqw]">
          <div className="flex items-center gap-[1.4cqw]">
            <span className="font-display text-[clamp(14px,4cqw,24px)] leading-none font-bold tracking-[-0.03em]">
              4.9
            </span>
            <Stars className="text-accent" size="clamp(6px,1.5cqw,10px)" />
          </div>
          <p className="mt-[0.8cqw] text-[clamp(6px,1.3cqw,9px)] text-muted">212 Google reviews</p>
          <p className="mt-[2cqw] text-[clamp(7px,1.55cqw,10px)] leading-snug">
            &ldquo;Booked at midnight, in the chair by 10. Best cut I&apos;ve had in years.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
