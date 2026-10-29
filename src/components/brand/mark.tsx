/** Geometric "M" cut from a tile, on a 32-unit grid. Shared with icon.svg and the OG image. */
export const MARK_M_PATH = "M8 24V8h4.2l3.8 6.2L19.8 8H24v16h-4v-9.4l-4 6.3-4-6.3V24z";

/** Orange quarter circle in the bottom-right corner, trimmed to the tile's 7-unit radius. */
export const MARK_CORNER_PATH = "M22 32A10 10 0 0 1 32 22V25A7 7 0 0 1 25 32Z";

/**
 * The Manley Designs mark. The tile takes `currentColor`; the cut-out M uses
 * `--logo-knock` (paper by default, ink inside `.theme-dark`).
 */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="7" fill="currentColor" />
      <path d={MARK_CORNER_PATH} style={{ fill: "var(--color-accent)" }} />
      <path d={MARK_M_PATH} style={{ fill: "var(--logo-knock, var(--color-paper))" }} />
    </svg>
  );
}
