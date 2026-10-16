"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

/** Fades and lifts its children slightly the first time they scroll into view. */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
