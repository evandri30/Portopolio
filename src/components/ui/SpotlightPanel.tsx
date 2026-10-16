"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type SpotlightPanelProps = {
    children: React.ReactNode;
    className?: string;
};

/** Bordered panel with a soft amber light that follows the pointer across it. */
export default function SpotlightPanel({ children, className }: SpotlightPanelProps) {
    const mx = useMotionValue(-500);
    const my = useMotionValue(-500);
    const glow = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgba(243, 179, 61, 0.08), transparent 70%)`;

    return (
        <div
            onPointerMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mx.set(e.clientX - rect.left);
                my.set(e.clientY - rect.top);
            }}
            onPointerLeave={() => {
                mx.set(-500);
                my.set(-500);
            }}
            className={`relative overflow-hidden rounded-xl border border-line bg-panel/60 ${className ?? ""}`}
        >
            <motion.div aria-hidden="true" style={{ background: glow }} className="pointer-events-none absolute inset-0" />
            <div className="relative h-full">{children}</div>
        </div>
    );
}
