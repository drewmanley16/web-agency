export type ProcessStep = {
  day: string;
  title: string;
  body: string;
  /** What the client walks away with at the end of this step. */
  output: string;
};

export const processSteps: ProcessStep[] = [
  {
    day: "Day 1",
    title: "Intake and content",
    body: "A 30-minute call about your business, your customers, and what you want more of. You send logo, photos, services, and prices. We send a short checklist so nothing gets missed.",
    output: "Content gathered, site map agreed",
  },
  {
    day: "Days 2–3",
    title: "Design",
    body: "We write the copy and design the homepage and key pages around one goal: getting people to book. You see it in the browser, on your own phone, not as a static image.",
    output: "Clickable design preview",
  },
  {
    day: "Days 4–5",
    title: "Build and booking setup",
    body: "We build the real site, connect your booking tool, set up contact forms, and add local SEO to every page. Then we test it on real phones.",
    output: "Working site on a private link",
  },
  {
    day: "Day 6",
    title: "Review and revisions",
    body: "You go through the site and send us everything you want changed in one list. We make the changes the same day.",
    output: "One revision round, included",
  },
  {
    day: "Day 7",
    title: "Launch and Google setup",
    body: "We connect your domain, go live, and set up or clean up your Google Business Profile so you show up in local search and on Maps.",
    output: "Live site, listed on Google",
  },
];
