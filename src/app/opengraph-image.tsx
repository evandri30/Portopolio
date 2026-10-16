import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
                    background: "#0d1520",
                    color: "#e4e9f0",
                    fontFamily: "monospace",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", fontSize: 30, lineHeight: 1.5 }}>
                    <div style={{ display: "flex" }}>
                        <span style={{ color: "#f3b33d" }}>SELECT&nbsp;</span>
                        <span style={{ color: "#8b98ab" }}>{profile.queryResult.map((c) => c.column).join(", ")}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span style={{ color: "#f3b33d" }}>FROM&nbsp;</span>
                        <span style={{ color: "#8b98ab" }}>engineers</span>
                    </div>
                    <div style={{ display: "flex", color: "#4fc1b0", marginTop: 12 }}>(1 row)</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4, fontFamily: "sans-serif" }}>
                        {profile.name}
                    </div>
                    <div style={{ display: "flex", fontSize: 32, color: "#8b98ab", marginTop: 16, fontFamily: "sans-serif" }}>
                        {profile.role}
                    </div>
                    <div style={{ display: "flex", height: 6, width: 160, background: "#f3b33d", marginTop: 40 }} />
                </div>
            </div>
        ),
        size,
    );
}
