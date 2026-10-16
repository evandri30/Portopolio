"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
    const listRef = useRef<HTMLOListElement>(null);
    const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.75", "end 0.6"] });
    const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <section id="experience" className="py-24 sm:py-32">
            <SectionHeading title="Experience" rows={experience.length} />

            <ol ref={listRef} className="relative space-y-20 pl-8 sm:pl-12">
                {/* Rail, and the part of it already "travelled" */}
                <span aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-line" />
                <motion.span
                    aria-hidden="true"
                    style={{ scaleY }}
                    className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-amber"
                />

                {experience.map((job) => (
                    <li key={job.company} className="relative">
                        <span
                            aria-hidden="true"
                            className={`absolute top-2 -left-8 size-[11px] rounded-full border-2 border-ink sm:-left-12 ${job.current ? "bg-teal" : "bg-muted"}`}
                        >
                            {job.current && (
                                <motion.span
                                    className="absolute inset-0 rounded-full bg-teal"
                                    animate={{ scale: [1, 2.6], opacity: [0.6, 0] }}
                                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                                />
                            )}
                        </span>

                        <Reveal className="grid gap-6 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10">
                            <div className="font-mono text-sm text-muted">
                                <p>{job.period}</p>
                                {job.current && <p className="mt-1 text-teal">Current role</p>}
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{job.role}</h3>
                                <p className="mt-1 text-lg text-muted">{job.company}</p>

                                <ul className="mt-6 max-w-2xl space-y-3 text-text/85">
                                    {job.highlights.map((h) => (
                                        <li key={h} className="relative pl-5 leading-relaxed">
                                            <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-amber" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools used">
                                    {job.tech.map((t) => (
                                        <li key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted">
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </li>
                ))}
            </ol>
        </section>
    );
}
