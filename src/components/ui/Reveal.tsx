"use client";

import { motion } from "framer-motion";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

/** Fades and slides its children up the first time they scroll into view. */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
