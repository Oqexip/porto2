import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b0e14", color: "#f4f6fb", padding: "64px 72px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 2 }}><span>ILHAM SIKUMBANG</span><span>SOFTWARE + ELECTRONICS</span></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 82, fontWeight: 700, letterSpacing: -5, lineHeight: 1.04 }}><span>Building software</span><span>for the web and the</span><span>physical world<span style={{ color: "#a8c5e7" }}>.</span></span></div>
      <div style={{ width: "100%", height: 2, background: "#54769a" }} />
    </div>, size
  );
}
