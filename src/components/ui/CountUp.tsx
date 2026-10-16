"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

type CountUpProps = {
    value: number;
    decimals?: number;
    suffix?: string;
    className?: string;
};

/** Counts from 0 to `value` once it scrolls into view. Writes to the DOM directly (no re-renders). */
export default function CountUp({ value, decimals = 0, suffix = "", className }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const reduce = useReducedMotion();
    const final = `${value.toFixed(decimals)}${suffix}`;

    // The server renders the final value (no-JS, reduced motion); reset to 0 before it scrolls in.
    useEffect(() => {
        const el = ref.current;
        if (el && !reduce && !inView) el.textContent = `${(0).toFixed(decimals)}${suffix}`;
        // eslint-disable-next-line react-hooks/exhaustive-deps -- only on mount
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el || !inView || reduce) return;
        const controls = animate(0, value, {
            duration: 1.6,
            ease: EASE_OUT,
            onUpdate: (v) => {
                el.textContent = `${v.toFixed(decimals)}${suffix}`;
            },
        });
        return () => controls.stop();
    }, [inView, reduce, value, decimals, suffix]);

    return (
        <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
            {final}
        </span>
    );
}
