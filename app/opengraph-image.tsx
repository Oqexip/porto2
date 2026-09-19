import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#17221e", color: "#f6f2eb", padding: "64px 72px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 2 }}><span>ILHAM SIKUMBANG</span><span>SOFTWARE + ELECTRONICS</span></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 700, letterSpacing: -4, lineHeight: 1.06 }}><span>Building software</span><span>for the web and the</span><span>physical world<span style={{ color: "#8fa8ff" }}>.</span></span></div>
      <div style={{ width: "100%", height: 2, background: "#66806b" }} />
    </div>, size
  );
}
