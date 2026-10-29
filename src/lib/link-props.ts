/** Off-site links open in a new tab so visitors don't lose the page. */
export function linkProps(href: string) {
  return /^https?:\/\//.test(href) ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };
}
