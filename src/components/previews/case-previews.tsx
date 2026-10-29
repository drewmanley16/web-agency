import { Stars } from "./stars";

/* Small homepage previews for the Work cards. Decorative only; type is sized
   in container units so they scale with the card. */

export function SalonPreview() {
  return (
    <div aria-hidden="true" className="flex h-full flex-col bg-paper p-[6cqw] text-ink">
      <div className="flex items-center justify-between text-[3.2cqw]">
        <span className="font-display font-bold tracking-[-0.03em]">Sable &amp; Co.</span>
        <span className="rounded-full bg-accent px-[3cqw] py-[1.4cqw] font-medium">Book</span>
      </div>
      <p className="mt-[9cqw] font-display text-[10cqw] leading-[0.92] font-bold tracking-[-0.045em]">
        Hair that <br />
        <span className="font-serif font-normal tracking-[-0.02em] italic">feels</span> like you.
      </p>
      <div className="mt-auto flex items-end justify-between gap-[4cqw]">
        <div className="grid flex-1 grid-cols-3 gap-[2cqw]">
          <span className="aspect-[3/4] rounded-[1.5cqw] bg-stone" />
          <span className="aspect-[3/4] rounded-t-full bg-ink" />
          <span className="aspect-[3/4] rounded-[1.5cqw] bg-line" />
        </div>
        <div className="text-right text-[2.8cqw]">
          <Stars className="text-accent" size="2.6cqw" />
          <p className="mt-[1cqw] text-muted">4.9 · 380 reviews</p>
        </div>
      </div>
    </div>
  );
}

export function GymPreview() {
  const classes = [
    { time: "6:00", name: "Strength 101" },
    { time: "12:15", name: "Lunch Lift" },
    { time: "17:30", name: "Conditioning" },
  ];

  return (
    <div aria-hidden="true" className="flex h-full flex-col bg-ink p-[6cqw] text-paper">
      <div className="flex items-center justify-between text-[3.2cqw]">
        <span className="font-display font-bold tracking-[-0.02em] uppercase">Northside</span>
        <span className="rounded-full bg-accent px-[3cqw] py-[1.4cqw] font-medium text-ink">Free trial</span>
      </div>
      <p className="mt-[8cqw] font-display text-[11cqw] leading-[0.88] font-bold tracking-[-0.04em] uppercase">
        Get <span className="text-accent">strong.</span>
        <br />
        Stay strong.
      </p>
      <ul className="mt-auto text-[3cqw]">
        {classes.map((c) => (
          <li key={c.time} className="flex justify-between border-t border-white/15 py-[1.8cqw]">
            <span className="text-muted-inverse tabular-nums">{c.time}</span>
            <span>{c.name}</span>
            <span className="text-accent">Join</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RestaurantPreview() {
  const menu = [
    { name: "Tacos al pastor", price: "14" },
    { name: "Mole poblano", price: "22" },
    { name: "Elote", price: "7" },
  ];

  return (
    <div aria-hidden="true" className="flex h-full flex-col bg-stone p-[6cqw] text-ink">
      <div className="flex items-center justify-between text-[3.2cqw]">
        <span className="font-serif text-[4.4cqw] italic">Casa Lupe</span>
        <span className="rounded-full bg-ink px-[3cqw] py-[1.4cqw] font-medium text-paper">Order online</span>
      </div>
      <div className="mt-[7cqw] grid grid-cols-[1fr_auto] items-end gap-[4cqw]">
        <p className="font-display text-[9cqw] leading-[0.92] font-bold tracking-[-0.045em]">
          Open tonight <br />
          until 10.
        </p>
        <span className="relative block size-[18cqw] overflow-hidden rounded-full bg-accent">
          <span className="absolute inset-x-0 bottom-0 h-1/2 bg-ink" />
        </span>
      </div>
      <ul className="mt-auto text-[3cqw]">
        {menu.map((m) => (
          <li key={m.name} className="flex justify-between border-t border-ink/15 py-[1.8cqw]">
            <span>{m.name}</span>
            <span className="text-muted tabular-nums">${m.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const casePreviews = {
  salon: SalonPreview,
  gym: GymPreview,
  restaurant: RestaurantPreview,
};
