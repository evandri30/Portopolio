"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { EASE_OUT } from "@/lib/motion";

const NAME_DELAY = 0.15;
const TYPE_START_MS = 900;
const TYPE_MS = 28;
const PROMPT = "portfolio=# ";

type Token = { text: string; kind: "keyword" | "string" | "plain" };

/** The hero query, built from the columns the profile "returns". */
function buildQuery(): Token[] {
    const columns = profile.queryResult.map((c) => c.column).join(", ");
    return [
        { text: "SELECT ", kind: "keyword" },
        { text: `${columns}\n`, kind: "plain" },
        { text: "FROM ", kind: "keyword" },
        { text: "engineers\n", kind: "plain" },
        { text: "WHERE ", kind: "keyword" },
        { text: "name = ", kind: "plain" },
        { text: `'${profile.shortName}'`, kind: "string" },
        { text: ";", kind: "plain" },
    ];
}

const tokens = buildQuery();
const queryText = tokens.map((t) => t.text).join("");
/** Character offset where each token starts in `queryText`. */
const tokenStarts = tokens.map((_, i) => tokens.slice(0, i).reduce((n, t) => n + t.text.length, 0));

const tokenClass: Record<Token["kind"], string> = {
    keyword: "text-amber",
    string: "text-text",
    plain: "text-muted",
};

export default function Hero() {
    const reduce = useReducedMotion();
    const [typed, setTyped] = useState(0);
    const done = typed >= queryText.length;

    // Pointer-following spotlight over the dot grid.
    const mx = useMotionValue(-1000);
    const my = useMotionValue(-1000);
    const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(243, 179, 61, 0.09), transparent 70%)`;

    // Scrolling away: the name lifts and fades while the dot grid lags behind. Reduced motion
    // is handled inside the transforms, so the rendered markup never depends on it.
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
    const nameY = useTransform(scrollYProgress, (p) => (reduce ? 0 : p * -80));
    const nameOpacity = useTransform(scrollYProgress, (p) => (reduce ? 1 : 1 - p * 0.8));
    const gridY = useTransform(scrollYProgress, (p) => (reduce ? 0 : p * 120));

    useEffect(() => {
        // Reduced motion: show the whole query at once. Decided client-side only, so the
        // server HTML and the first client render stay identical (no hydration mismatch).
        if (reduce) {
            const t = setTimeout(() => setTyped(queryText.length), 0);
            return () => clearTimeout(t);
        }
        let interval: ReturnType<typeof setInterval>;
        const start = setTimeout(() => {
            interval = setInterval(() => {
                setTyped((n) => {
                    if (n >= queryText.length) {
                        clearInterval(interval);
                        return n;
                    }
                    return n + 1;
                });
            }, TYPE_MS);
        }, TYPE_START_MS);
        return () => {
            clearTimeout(start);
            clearInterval(interval);
        };
    }, [reduce]);

    // First and middle name on one line, surname on the next.
    const words = profile.name.split(" ");
    const nameLines = [words.slice(0, -1).join(" "), words.at(-1) ?? ""];

    return (
        <section
            id="home"
            ref={sectionRef}
            onPointerMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mx.set(e.clientX - rect.left);
                my.set(e.clientY - rect.top);
            }}
            className="relative isolate flex min-h-svh flex-col justify-center pt-24 pb-12"
        >
            {/* Dot grid + spotlight */}
            <motion.div
                aria-hidden="true"
                style={{ y: gridY }}
                className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-[radial-gradient(var(--color-line)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
            />
            <motion.div
                aria-hidden="true"
                style={{ background: spotlight }}
                className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
            />

            <motion.h1
                style={{ y: nameY, opacity: nameOpacity }}
                className="text-[clamp(3rem,10vw,9rem)] leading-[0.92] font-bold tracking-[-0.015em] text-text [font-stretch:88%]"
            >
                {nameLines.map((word, i) => (
                    <span key={word} className="block overflow-hidden pb-[0.08em]">
                        <motion.span
                            className="block"
                            initial={{ y: "105%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.1, ease: EASE_OUT, delay: NAME_DELAY + i * 0.12 }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </motion.h1>

            <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.6 }}
                >
                    <p className="max-w-md text-lg leading-relaxed text-muted sm:text-xl">
                        {profile.tagline} Based in {profile.location}.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {profile.cvs.map(({ label, path }) => (
                            <motion.a
                                key={path}
                                href={path}
                                download
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-medium text-ink transition-colors hover:bg-[#f7c565]"
                            >
                                <Download className="size-4" aria-hidden="true" />
                                {label}
                            </motion.a>
                        ))}
                        <motion.a
                            href={`mailto:${profile.email}`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center rounded-full border border-line px-6 py-3 font-medium text-text transition-colors hover:border-muted"
                        >
                            Email me
                        </motion.a>
                    </div>
                </motion.div>

                {/* SQL console */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.5 }}
                    className="overflow-hidden rounded-xl border border-line bg-panel/80 font-mono text-[13px] leading-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:text-sm"
                >
                    <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-xs text-muted">
                        <span>{PROMPT}</span>
                        <span>postgres</span>
                    </div>

                    <div className="p-4 sm:p-5">
                        <p className="sr-only">{queryText}</p>
                        <pre aria-hidden="true" className="min-h-[4.5rem] whitespace-pre-wrap">
                            <TypedQuery count={typed} />
                            {!done && <Caret />}
                        </pre>

                        <motion.div
                            initial={false}
                            animate={done ? "shown" : "hidden"}
                            variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
                            className="mt-4"
                        >
                            <motion.p
                                variants={rowVariants}
                                className="border-b border-dashed border-line pb-1 text-xs text-muted"
                            >
                                -[ RECORD 1 ]
                            </motion.p>
                            <dl className="mt-2">
                                {profile.queryResult.map(({ column, value }) => (
                                    <motion.div
                                        key={column}
                                        variants={rowVariants}
                                        className="grid grid-cols-[6.5rem_1ch_minmax(0,1fr)] gap-x-2 sm:grid-cols-[7.5rem_1ch_minmax(0,1fr)]"
                                    >
                                        <dt className="text-muted">{column}</dt>
                                        <span className="text-line" aria-hidden="true">|</span>
                                        <dd className="text-text">{value}</dd>
                                    </motion.div>
                                ))}
                            </dl>
                            <motion.p variants={rowVariants} className="mt-3 text-xs text-teal">
                                (1 row)
                            </motion.p>
                            {/* Back at the prompt: the caret keeps blinking after the query has run. */}
                            <motion.p variants={rowVariants} aria-hidden="true" className="mt-3 text-muted">
                                {PROMPT}
                                <Caret />
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    shown: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

/** Renders the first `count` characters of the query, keeping syntax colors per token. */
function TypedQuery({ count }: { count: number }) {
    return (
        <>
            {tokens.map((t, i) => {
                const visible = count - tokenStarts[i];
                if (visible <= 0) return null;
                const part = t.text.slice(0, visible);
                return (
                    <span key={i} className={tokenClass[t.kind]}>
                        {part}
                    </span>
                );
            })}
        </>
    );
}

function Caret() {
    return (
        <motion.span
            className="ml-px inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-amber"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
    );
}
