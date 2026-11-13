"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

const word = {
    hidden: { y: "105%" },
    shown: { y: 0, transition: { duration: 0.9, ease: EASE_OUT } },
};

/** Text whose words rise out of a mask one after another the first time it scrolls into view. */
export default function RiseText({ text }: { text: string }) {
    return (
        <motion.span
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, margin: "-80px 0px" }}
            variants={{ shown: { transition: { staggerChildren: 0.06 } } }}
        >
            {text.split(" ").map((w, i) => (
                <Fragment key={i}>
                    {/* Padding + negative margin keep descenders (g, y, p) inside the mask without changing line height. */}
                    <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                        <motion.span variants={word} className="inline-block">
                            {w}
                        </motion.span>
                    </span>{" "}
                </Fragment>
            ))}
        </motion.span>
    );
}
