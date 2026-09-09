import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Monogram favicon, replacing the Next.js scaffold default. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1c1c",
          color: "#fbf9f5",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          borderRadius: 14,
        }}
      >
        RV
      </div>
    ),
    size
  );
}
