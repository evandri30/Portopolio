"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    /** Lift distance in px. Use a small value for small items (tags, list rows). */
    y?: number;
    as?: keyof typeof tags;
};

const tags = { div: motion.div, li: motion.li };

/**
 * Fades and lifts its children slightly the first time they scroll into view.
 * For a staggered list, render one per item with `delay={i * step}`.
 */
export default function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
    const Tag = tags[as] as typeof motion.div;
    return (
        <Tag
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            // Vertical only: a horizontal inset would keep small items near the screen edge hidden forever.
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay }}
            className={className}
        >
            {children}
        </Tag>
    );
}
