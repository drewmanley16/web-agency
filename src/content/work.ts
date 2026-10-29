export type CaseStudy = {
  business: string;
  type: string;
  location: string;
  preview: "salon" | "gym" | "restaurant";
  built: string[];
  result: string;
  /**
   * Keep `true` while the project and result are samples. Set to `false`
   * once you replace them with a real client and a real, verifiable number.
   */
  illustrative: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    business: "Sable & Co.",
    type: "Hair salon",
    location: "4 stylists",
    preview: "salon",
    built: [
      "5-page site with services and prices up front",
      "Online booking through their existing Square account",
      "Google Business Profile rebuilt with new photos and hours",
    ],
    result: "Online bookings up 40% in the first 60 days.",
    illustrative: true,
  },
  {
    business: "Northside Strength",
    type: "Gym",
    location: "Independent gym",
    preview: "gym",
    built: [
      "Class schedule that's actually readable on a phone",
      "Free-trial signup with automatic email follow-up",
      "Membership pricing page with no \"call for rates\"",
    ],
    result: "62 free-trial signups in the first month.",
    illustrative: true,
  },
  {
    business: "Casa Lupe",
    type: "Restaurant",
    location: "Family-run, 40 seats",
    preview: "restaurant",
    built: [
      "Menu as real text, not a PDF, so it loads and ranks",
      "Online ordering and reservations, one tap from the homepage",
      "Hours, map, and parking info on every page",
    ],
    result: "\"What are your hours?\" calls cut roughly in half.",
    illustrative: true,
  },
];
