import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The reference site ships og:image pointing at localhost, so every share of it
// renders no card at all. This is the fix for that class of mistake (spec §5.2).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: "72px 80px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#a1a1a1" }}>
          HC<span style={{ color: "#3b82f6" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: "-2px" }}>
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 34,
              color: "#a1a1a1",
            }}
          >
            {`${site.role} · ${site.location}`}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#a1a1a1" }}>
          Written case studies on schema migration, data modelling and query
          performance
        </div>
      </div>
    ),
    size,
  );
}
