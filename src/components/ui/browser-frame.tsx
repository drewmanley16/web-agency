import type { ReactNode } from "react";

type BrowserFrameProps = {
  url: string;
  status?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

/**
 * CSS-only browser window. The body is a size container, so mock sites
 * inside can scale their type with `cqw` units.
 */
export function BrowserFrame({ url, status, children, className = "", tone = "light" }: BrowserFrameProps) {
  const chrome = tone === "dark" ? "bg-[#1a1a1a] border-white/10" : "bg-stone border-line";
  const pill = tone === "dark" ? "bg-white/8 text-muted-inverse" : "bg-paper text-muted";
  const dot = tone === "dark" ? "bg-white/20" : "bg-ink/15";

  return (
    <div className={`flex flex-col overflow-hidden rounded-card border ${chrome} ${className}`}>
      <div className="flex items-center gap-3 px-3 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className={`size-2 rounded-full ${dot}`} />
          <span className={`size-2 rounded-full ${dot}`} />
          <span className={`size-2 rounded-full ${dot}`} />
        </div>
        <div className={`flex min-w-0 flex-1 items-center justify-between gap-3 rounded-full px-3 py-1 text-[11px] ${pill}`}>
          <span className="truncate font-mono">{url}</span>
          {status && <span className="hidden shrink-0 sm:inline">{status}</span>}
        </div>
      </div>
      <div className="@container relative flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
