import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon for iOS: same prompt + cursor mark as icon.svg, full-bleed (iOS rounds the corners). */
export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0D1520",
                }}
            >
                <svg width="120" height="120" viewBox="6 6 20 20">
                    <path
                        d="M8 10.5 L14 16 L8 21.5"
                        fill="none"
                        stroke="#E4E9F0"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect x="17" y="9" width="7" height="14" rx="1" fill="#F3B33D" />
                </svg>
            </div>
        ),
        size,
    );
}
