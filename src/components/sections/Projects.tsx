"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightPanel from "@/components/ui/SpotlightPanel";
import { projects } from "@/data/projects";
import { EASE_OUT } from "@/lib/motion";
import type { Project } from "@/types";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Pins the section on ≥1024px screens and turns vertical scroll into a horizontal gallery. */
export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [distance, setDistance] = useState(0);
    const [desktop, setDesktop] = useState(false);

    useIsoLayoutEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const measure = () => {
            setDesktop(mq.matches);
            const track = trackRef.current;
            const viewport = viewportRef.current;
            if (track && viewport) setDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (trackRef.current) ro.observe(trackRef.current);
        mq.addEventListener("change", measure);
        window.addEventListener("resize", measure);
        return () => {
            ro.disconnect();
            mq.removeEventListener("change", measure);
            window.removeEventListener("resize", measure);
        };
    }, []);

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
    const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.0005 });
    const x = useTransform(smooth, [0, 1], [0, -distance]);

    const pinned = desktop && distance > 0;

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative py-24 sm:py-32 lg:py-0"
            // Scroll length = horizontal distance + one screen, so the pin releases right as the last card lands.
            style={pinned ? { height: `calc(${distance}px + 100svh)` } : undefined}
        >
            <div className={pinned ? "sticky top-0 flex h-svh flex-col justify-center" : ""}>
                <SectionHeading title="Projects" rows={projects.length} className="mb-10 lg:mb-8" />

                <div ref={viewportRef} className="lg:overflow-visible">
                    <motion.div
                        ref={trackRef}
                        style={pinned ? { x } : undefined}
                        className="flex flex-col gap-5 lg:w-max lg:flex-row lg:gap-6"
                    >
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </motion.div>
                </div>

                {pinned && (
                    <div className="mt-8 h-px w-full bg-line" aria-hidden="true">
                        <motion.div style={{ scaleX: smooth }} className="h-px origin-left bg-amber" />
                    </div>
                )}
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const { title, subtitle, period, description, tech, metrics, link } = project;

    return (
        <motion.article
            initial={{ clipPath: "inset(8% 8% 8% 8% round 16px)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 12px)", opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE_OUT }}
            className="lg:w-[min(30rem,40vw)]"
        >
            <SpotlightPanel className="flex h-full flex-col p-6 sm:p-8 lg:h-[min(56svh,26rem)]">
                <div className="flex h-full flex-col">
                    <p className="font-mono text-xs text-muted">{period}</p>
                    <h3 className="mt-3 text-3xl leading-[1.02] font-semibold tracking-tight text-text [font-stretch:90%] sm:text-[2.6rem]">
                        {title}
                    </h3>
                    {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
                    <p className="mt-5 text-[15px] leading-relaxed text-text/80">{description}</p>

                    {metrics && (
                        <dl className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                            {metrics.map((m) => (
                                <div key={m.label} className="flex flex-col-reverse">
                                    <dt className="font-mono text-xs text-muted">{m.label}</dt>
                                    <dd className="text-2xl font-semibold tracking-tight text-amber">
                                        <CountUp value={m.value} decimals={m.decimals} suffix={m.suffix} />
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    )}

                    <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
                        <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
                            {tech.map((t) => (
                                <li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                                    {t}
                                </li>
                            ))}
                        </ul>
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link inline-flex items-center gap-1 border-b border-amber/40 pb-0.5 text-sm font-medium text-amber transition-colors hover:border-amber"
                            >
                                Open live demo
                                <ArrowUpRight
                                    className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                    aria-hidden="true"
                                />
                            </a>
                        )}
                    </div>
                </div>
            </SpotlightPanel>
        </motion.article>
    );
}
