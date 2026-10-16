"use client";

import { ReactLenis } from "lenis/react";

/**
 * Lenis smooth scrolling for the whole page. Lenis honors `prefers-reduced-motion`
 * on its own (`respectReducedMotion` defaults to true), so no extra check is needed here.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, anchors: { offset: -72 } }}>
            {children}
        </ReactLenis>
    );
}
