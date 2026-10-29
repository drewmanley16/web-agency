import type { ComponentProps, ReactNode } from "react";
import { ArrowDown, ArrowRight } from "./icons";
import { linkProps } from "@/lib/link-props";

type Variant = "primary" | "secondary" | "secondary-inverse";

const base =
  "group inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-[15px] font-medium tracking-[-0.01em] whitespace-nowrap transition-colors duration-300 ease-out-soft";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-ink hover:text-paper",
  secondary: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "secondary-inverse": "border border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

type ButtonLinkProps = Omit<ComponentProps<"a">, "children" | "href"> & {
  href: string;
  variant?: Variant;
  icon?: "right" | "down" | "none";
  children: ReactNode;
};

export function ButtonLink({ href, variant = "primary", icon = "right", className, children, ...props }: ButtonLinkProps) {
  const Icon = icon === "down" ? ArrowDown : icon === "right" ? ArrowRight : null;
  const nudge = icon === "down" ? "group-hover:translate-y-0.5" : "group-hover:translate-x-0.5";

  return (
    <a {...linkProps(href)} className={buttonClasses(variant, className)} {...props}>
      {children}
      {Icon && <Icon className={`size-3.5 transition-transform duration-300 ease-out-soft ${nudge}`} />}
    </a>
  );
}
