"use client";

import { useRef, useState } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion";

type MarqueeProps = {
    children: React.ReactNode;
    speed?: number;
    className?: string;
};

/**
 * Endless horizontal ticker. The content is rendered twice and the track wraps at 50%,
 * so the loop is seamless. Runs faster while the page is being scrolled, slows to a stop
 * on hover; static under reduced motion.
 */
export default function Marquee({ children, speed = 40, className }: MarqueeProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const offset = useMotionValue(0);
    const velocity = useRef(1);
    const [hovered, setHovered] = useState(false);
    const reduce = useReducedMotion();
    const x = useTransform(offset, (v) => `${v}px`);
    const { scrollY } = useScroll();
    const scrollSpeed = useSpring(useVelocity(scrollY), { stiffness: 300, damping: 50 });

    useAnimationFrame((_, delta) => {
        const track = trackRef.current;
        if (!track || reduce) return;
        // Ease the velocity toward 0 on hover and back to 1 afterwards.
        velocity.current += ((hovered ? 0 : 1) - velocity.current) * 0.06;
        // Up to 4x extra speed while scrolling, in either direction (px/s of scroll → multiplier).
        const boost = Math.min(Math.abs(scrollSpeed.get()) / 500, 4);
        const half = track.scrollWidth / 2;
        let next = offset.get() - (speed * velocity.current * (1 + boost) * delta) / 1000;
        if (next <= -half) next += half;
        offset.set(next);
    });

    return (
        <div
            className={`overflow-hidden ${className ?? ""}`}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}
        >
            <motion.div ref={trackRef} style={{ x }} className="flex w-max">
                <div className="flex shrink-0">{children}</div>
                <div className="flex shrink-0" aria-hidden="true">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
