import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e1b4b 0%, #09090b 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 32,
            color: "#a5b4fc",
          }}
        >
          {siteConfig.initials}
          <span style={{ color: "#818cf8" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-2px",
            marginTop: 24,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            color: "#d4d4d8",
            marginTop: 16,
          }}
        >
          {siteConfig.role}
        </div>
      </div>
    ),
    size
  );
}
