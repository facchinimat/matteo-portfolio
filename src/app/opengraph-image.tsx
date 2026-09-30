import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "72px",
          background:
            "linear-gradient(135deg, #09090b 0%, #18181b 72%, #330000 100%)",
          color: "#fafafa",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            borderLeft: "5px solid #990000",
            paddingLeft: "48px",
          }}
        >
          <div
            style={{
              color: "#f87171",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Computer Science @ Stony Brook University
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            Matteo Facchini
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              color: "#d4d4d8",
              fontSize: 34,
            }}
          >
            Backend / Infrastructure / Systems
          </div>
        </div>
      </div>
    ),
    size,
  );
}