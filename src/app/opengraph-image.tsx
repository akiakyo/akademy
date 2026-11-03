import { ImageResponse } from "next/og";
import { Aky } from "@/components/Aky";

export const alt = "akademy. Learn to code, one lesson at a time";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "#1f3d2b", border: "22px solid #6b4a2f", padding: 72, gap: 56 }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontSize: 44, fontWeight: 700, color: "#f2d06b" }}>akademy.</div>
        <div style={{ fontSize: 76, fontWeight: 700, color: "#f6f1e7", lineHeight: 1.1, marginTop: 20 }}>Learn to code, one lesson at a time.</div>
        <div style={{ fontSize: 30, color: "#dfe3d7", marginTop: 24 }}>Free tutorials and live compilers</div>
      </div>
      {Aky({ mood: "wave", size: 300 })}
    </div>,
    size,
  );
}
