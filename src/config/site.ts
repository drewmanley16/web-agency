/**
 * Site configuration. Everything you'd want to change in one place lives here.
 * Section copy (pricing, FAQ, work, etc.) lives in `src/content/`.
 */

function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  // ───────────────────────────────────────────────────────────────
  // REPLACE THESE
  // ───────────────────────────────────────────────────────────────
  name: "Manley Designs",
  email: "drewmanley16@gmail.com",
  location: "Eugene, OR",
  /**
   * Production URL, used for canonical links, Open Graph, and the sitemap.
   * Set NEXT_PUBLIC_SITE_URL to override. Otherwise on Vercel this is the
   * project's production domain (the .vercel.app URL, or your custom domain
   * once you add one), and localhost in development.
   */
  url: siteUrl(),
  /**
   * Where "Book a call" buttons point. Use "#contact" to send people to the
   * mockup form instead.
   */
  bookCallHref: "https://calendly.com/drewmanley16/30min",
  /** Where mockup form leads are emailed (see `src/app/api/mockup/route.ts`). */
  leadInbox: "drewmanley16@gmail.com",
  /**
   * Sender for lead emails. Resend's shared address only delivers to the
   * email on your Resend account. Once you own a domain and verify it in
   * Resend, change this to e.g. "Website <hello@youragency.com>".
   */
  emailFrom: "Website leads <onboarding@resend.dev>",

  // ───────────────────────────────────────────────────────────────
  // Positioning
  // ───────────────────────────────────────────────────────────────
  tagline: "Websites for small businesses that actually bring in customers.",
  description:
    "We design, write, and launch fast, mobile-first websites for salons, barbers, gyms, restaurants, contractors, and cleaners. Online booking built in. Live in 7 days.",
  audience: ["Salons", "Barbers", "Gyms", "Restaurants", "Contractors", "Cleaners", "Cafes", "Clinics"],
  launchDays: 7,

  nav: [
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
