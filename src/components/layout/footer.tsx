import { siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { linkProps } from "@/lib/link-props";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();

  return (
    <footer className="theme-dark border-t border-white/15 bg-ink text-paper">
      <div className="container-page grid-page gap-y-12 py-16 md:py-20">
        <div className="col-span-4 md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-[32ch] leading-relaxed text-muted-inverse">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Footer" className="col-span-4 md:col-span-2 md:col-start-7">
          <p className="eyebrow text-muted-inverse">Site</p>
          <ul className="mt-5 space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a {...linkProps(siteConfig.bookCallHref)} className="transition-colors hover:text-accent">
                Book a call
              </a>
            </li>
          </ul>
        </nav>

        <div className="col-span-4 md:col-span-3 md:col-start-10">
          <p className="eyebrow text-muted-inverse">Contact</p>
          <ul className="mt-5 space-y-3">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-accent">
                {siteConfig.email}
              </a>
            </li>
            <li className="text-muted-inverse">{siteConfig.location}</li>
          </ul>
        </div>
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-2 border-t border-white/15 py-6 text-sm text-muted-inverse sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Websites for local businesses, live in {siteConfig.launchDays} days.</p>
        </div>
      </div>
    </footer>
  );
}
