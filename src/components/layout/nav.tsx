"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "./logo";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll, close on Escape, and close if resized up to desktop.
  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    root.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onChange);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper transition-colors duration-300 ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[4.5rem]">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[15px] text-ink/70 transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={siteConfig.bookCallHref} className="h-10 px-5 text-[14px]">
            Book a call
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="-mr-2 flex size-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-300 ease-out-soft ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-300 ease-out-soft ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-paper md:hidden"
      >
        <nav aria-label="Mobile" className="container-page flex min-h-full flex-col pt-6 pb-10">
          <ul className="border-t border-line">
            {siteConfig.nav.map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={close}
                  className="flex items-baseline justify-between py-5 font-display text-4xl font-bold tracking-[-0.04em]"
                >
                  {item.label}
                  <span className="eyebrow text-muted tabular-nums">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <ButtonLink href={siteConfig.bookCallHref} onClick={close} className="w-full">
              Book a call
            </ButtonLink>
            <p className="mt-6 text-sm text-muted">
              Or email{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-ink underline underline-offset-4">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
