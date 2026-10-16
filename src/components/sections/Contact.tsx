"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { EASE_OUT } from "@/lib/motion";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const t = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(t);
    }, [copied]);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
        } catch {
            window.location.href = `mailto:${profile.email}`;
        }
    };

    return (
        <section id="contact" className="py-24 sm:py-32">
            <Reveal>
                <h2 className="max-w-[14ch] text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] font-bold tracking-[-0.015em] text-text [font-stretch:88%]">
                    {profile.contactHeadline}
                </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                    <a
                        href={`mailto:${profile.email}`}
                        className="rounded-full bg-amber px-6 py-3 font-medium text-ink transition-colors hover:bg-[#f7c565]"
                    >
                        Email me
                    </a>
                    <button
                        type="button"
                        onClick={copyEmail}
                        className="inline-flex items-center gap-2.5 rounded-full border border-line px-5 py-3 font-mono text-sm text-text transition-colors hover:border-muted"
                    >
                        <span className="relative size-4" aria-hidden="true">
                            <AnimatePresence initial={false} mode="popLayout">
                                <motion.span
                                    key={copied ? "check" : "copy"}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.25, ease: EASE_OUT }}
                                    className="absolute inset-0"
                                >
                                    {copied ? <Check className="size-4 text-teal" /> : <Copy className="size-4 text-muted" />}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        <span>{copied ? "Copied to clipboard" : profile.email}</span>
                        <span className="sr-only" aria-live="polite">
                            {copied ? "Email address copied" : ""}
                        </span>
                    </button>
                </div>

                <ul className="flex gap-3">
                    {profile.socials.map(({ label, href, icon: Icon }) => (
                        <li key={label}>
                            <motion.a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.94 }}
                                className="flex items-center gap-2 rounded-full border border-line px-4 py-3 text-muted transition-colors hover:border-muted hover:text-text"
                            >
                                <Icon className="size-5" aria-hidden="true" />
                                <span className="text-sm">{label}</span>
                            </motion.a>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </section>
    );
}
