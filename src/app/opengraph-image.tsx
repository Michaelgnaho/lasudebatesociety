import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export const runtime = "edge";
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0e1e3d 0%, #1a3263 100%)",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 20,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#6fa8dc",
          marginBottom: 24,
        }}
      >
        Lagos State University
      </div>
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          textAlign: "center",
          padding: "0 60px",
        }}
      >
        {SITE_NAME}
      </div>
      <div
        style={{
          fontSize: 32,
          marginTop: 20,
          color: "#c8102e",
          fontWeight: 600,
        }}
      >
        {SITE_TAGLINE}
      </div>
    </div>,
    { ...size },
  );
}
