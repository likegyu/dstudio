import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          backgroundColor: "#FFFDF9",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            fontSize: "24px",
            fontFamily: "Georgia, serif",
            color: "#2E2A25",
            fontWeight: 400,
            lineHeight: 1,
            marginTop: "-1px",
          }}
        >
          d.
        </span>
      </div>
    ),
    { ...size }
  );
}
