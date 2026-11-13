"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { EASE_OUT } from "@/lib/motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string | null>(null);
    const lenis = useLenis();

    const { scrollY, scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

    // Hide while scrolling down, reveal on any upward scroll.
    useMotionValueEvent(scrollY, "change", (y) => {
        const prev = scrollY.getPrevious() ?? 0;
        setScrolled(y > 24);
        setHidden(y > prev && y > 200);
    });

    // Highlight the section currently crossing the middle of the viewport.
    useEffect(() => {
        const sections = navLinks
            .map((l) => document.querySelector<HTMLElement>(l.href))
            .filter((el): el is HTMLElement => el !== null);
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
            },
            { rootMargin: "-50% 0px -50% 0px" },
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    // Freeze page scroll while the mobile menu covers it.
    useEffect(() => {
        if (open) lenis?.stop();
        else lenis?.start();
    }, [open, lenis]);

    // The menu and its button are hidden from md up; close it there so scroll is never left frozen.
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const close = () => setOpen(false);
        mq.addEventListener("change", close);
        return () => mq.removeEventListener("change", close);
    }, []);

    return (
        <>
            <motion.header
                animate={{ y: hidden && !open ? "-110%" : "0%" }}
                transition={{ duration: 0.45, ease: EASE_OUT }}
                className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
                    scrolled || open ? "border-b border-line bg-ink/75 backdrop-blur-md" : "border-b border-transparent"
                }`}
            >
                <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
                    <a href="#home" className="flex items-center gap-1 text-lg font-semibold tracking-tight text-text">
                        {profile.shortName.toLowerCase()}
                        <span aria-hidden="true" className="inline-block h-[1.05em] w-[0.5em] translate-y-px bg-amber" />
                    </a>

                    <ul className="hidden items-center gap-1 text-sm md:flex">
                        {navLinks.map((link) => {
                            const isActive = active === link.href;
                            return (
                                <li key={link.href} className="relative">
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 rounded-full bg-panel ring-1 ring-line"
                                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                        />
                                    )}
                                    <a
                                        href={link.href}
                                        aria-current={isActive ? "true" : undefined}
                                        className={`relative block rounded-full px-3.5 py-1.5 transition-colors ${isActive ? "text-text" : "text-muted hover:text-text"}`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        className="-mr-2 rounded-full p-2 text-text md:hidden"
                    >
                        {open ? <X className="size-6" /> : <Menu className="size-6" />}
                    </button>
                </nav>

                <motion.div
                    aria-hidden="true"
                    style={{ scaleX: progress }}
                    className="absolute inset-x-0 -bottom-px h-px origin-left bg-amber"
                />
            </motion.header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-nav"
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.55, ease: EASE_OUT }}
                        className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-6 md:hidden"
                    >
                        <motion.ul
                            initial="hidden"
                            animate="shown"
                            variants={{ shown: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
                            className="space-y-1"
                        >
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.href}
                                    variants={{
                                        hidden: { opacity: 0, y: 24 },
                                        shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`block py-1 text-5xl font-semibold tracking-tight [font-stretch:85%] ${active === link.href ? "text-amber" : "text-text"}`}
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                        <p className="mt-12 font-mono text-sm text-muted">{profile.email}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
