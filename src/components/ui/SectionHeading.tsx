"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import RiseText from "@/components/ui/RiseText";
import { EASE_OUT } from "@/lib/motion";

type SectionHeadingProps = {
    title: string;
    rows?: number;
    className?: string;
};

export default function SectionHeading({ title, rows, className = "mb-14" }: SectionHeadingProps) {
    return (
        <div className={`relative flex items-end justify-between gap-6 pb-5 ${className}`}>
            <h2 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl [font-stretch:90%]">
                <RiseText text={title} />
            </h2>
            {rows !== undefined && (
                <Reveal delay={0.2} y={8} className="shrink-0 pb-1.5 font-mono text-xs text-muted">
                    <p>
                        <CountUp value={rows} /> {rows === 1 ? "row" : "rows"}
                    </p>
                </Reveal>
            )}
            {/* The rule under the heading, drawn left to right. */}
            <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px 0px" }}
                transition={{ duration: 1.2, ease: EASE_OUT }}
                className="absolute inset-x-0 bottom-0 h-px origin-left bg-line"
            />
        </div>
    );
}
