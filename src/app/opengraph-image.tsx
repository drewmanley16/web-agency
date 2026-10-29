import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { MARK_CORNER_PATH, MARK_M_PATH } from "@/components/brand/mark";

export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0A0A0A";
const PAPER = "#FAF9F6";
const ACCENT = "#FF4D00";
const MUTED = "#A3A09A";

// Brand fonts (OFL-licensed), read once at build. Satori needs .woff/.ttf, not .woff2.
const grotesk = await readFile(join(process.cwd(), "assets/fonts/space-grotesk-latin-700-normal.woff"));
const serif = await readFile(join(process.cwd(), "assets/fonts/instrument-serif-latin-400-italic.woff"));

export default async function OpengraphImage() {
  const [first, ...rest] = siteConfig.name.split(" ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: INK,
          color: PAPER,
          fontFamily: "Grotesk",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="44" height="44" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="7" fill={PAPER} />
            <path d={MARK_CORNER_PATH} fill={ACCENT} />
            <path d={MARK_M_PATH} fill={INK} />
          </svg>
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 36 }}>
            <span style={{ letterSpacing: -1.2 }}>{first}</span>
            <span style={{ fontFamily: "Serif", fontSize: 39, marginLeft: 9 }}>{rest.join(" ")}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 88, lineHeight: 1, letterSpacing: -3.6 }}>
          <span>Websites for small</span>
          <span>businesses that actually</span>
          <span style={{ display: "flex", alignItems: "baseline" }}>
            bring in
            <span style={{ fontFamily: "Serif", fontSize: 96, letterSpacing: -1.5, marginLeft: 22 }}>customers.</span>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: MUTED }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: ACCENT }} />
          Live in {siteConfig.launchDays} days. Booking built in. {siteConfig.location}.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Grotesk", data: grotesk, weight: 700, style: "normal" },
        { name: "Serif", data: serif, weight: 400, style: "italic" },
      ],
    },
  );
}
