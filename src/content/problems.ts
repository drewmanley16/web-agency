export type Problem = {
  title: string;
  body: string;
  fix: string;
};

export const problems: Problem[] = [
  {
    title: "It's slow on a phone.",
    body: "Most of your visitors are on a phone, on cellular, in between other things. If your page takes five seconds to show up, they hit back and call the next place on the list.",
    fix: "Lightweight pages built to load in under two seconds on a phone. No bloated page builder, no autoplay video.",
  },
  {
    title: "There's no way to book.",
    body: "People decide to book at 10pm on the couch, not during your business hours. If the only option is a phone number, you lose everyone who would rather not call.",
    fix: "A Book now button on every screen, connected to the booking tool you already use, or a new one we set up for you.",
  },
  {
    title: "Google can't find you.",
    body: "Search \"barber near me\" and you're on page three. Or your hours are wrong, your photos are from 2017, and the top result is a competitor with worse reviews.",
    fix: "Local SEO built into every page, plus a fully set-up Google Business Profile on launch day.",
  },
];
