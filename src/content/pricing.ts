export type Plan = {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  features: string[];
  note?: string;
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Launch Site",
    price: "$1,000–$3,500",
    cadence: "one time",
    summary: "Everything you need to start getting booked online, live in 7 days.",
    features: [
      "Custom design, built mobile-first",
      "Copy written for you",
      "Online booking setup",
      "Local SEO on every page",
      "Google Business Profile setup",
      "One revision round",
    ],
    note: "Final price depends on the number of pages and your booking setup. You'll get a fixed quote before we start.",
    cta: "Book a free mockup",
    featured: true,
  },
  {
    name: "Care Plan",
    price: "$100–$200",
    cadence: "per month",
    summary: "We keep the site fast, secure, and up to date so you don't have to think about it.",
    features: [
      "Hosting and SSL",
      "Software and security updates",
      "Small changes: hours, prices, photos, staff",
      "Monthly check that booking and forms still work",
    ],
    cta: "Ask about care",
  },
  {
    name: "Custom Build",
    price: "Let's talk",
    cadence: "price on call",
    summary: "For businesses that need more than a launch site.",
    features: [
      "Multiple locations",
      "Online ordering or memberships",
      "Integrations with your existing tools",
      "Larger sites with many service pages",
    ],
    cta: "Book a call",
  },
];

export const paymentTerms = "50% deposit up front to book your launch week. The rest is due on launch day.";
