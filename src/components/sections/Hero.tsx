"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Hero() {
    const text = useTypewriter(profile.roles);

    return (
        <section id="home" className="relative flex min-h-screen flex-col items-center justify-center text-center py-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.15, 0.9, 1],
                        x: [0, 30, -30, 0],
                        y: [0, -30, 30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-900 rounded-full filter blur-[120px] opacity-40"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 0.8
                }}
                className="inline-block mb-4"
            >
                <div className="px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-900/20 text-blue-400 text-sm font-semibold tracking-wide backdrop-blur-sm hover:border-blue-700 transition-colors duration-300">
                    Available for new opportunities
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.2
                }}
                className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl text-white drop-shadow-lg"
            >
                Hi, I&apos;m <span className="text-blue-400">{profile.shortName}</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: 0.4
                }}
                className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl px-4 flex items-center justify-center min-h-8"
            >
                <span className="sr-only">{profile.roles.join(", ")}</span>
                <span className="font-semibold text-white" aria-hidden="true">
                    {text}
                </span>

                <motion.span
                    aria-hidden="true"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        ease: "linear"
                    }}
                    className="ml-1 text-neutral-500 font-light"
                >
                    |
                </motion.span>
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: 0.6
                }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={profile.cvPath}
                    download="CV_Evandri_Ridho_Hasmono.pdf"
                    className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:bg-blue-500 transition-all duration-300">
                    Download CV
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="px-8 py-3 rounded-full bg-transparent text-neutral-300 border border-neutral-800 font-medium hover:bg-neutral-900/60 hover:border-neutral-500 hover:text-white transition-all duration-300 shadow-sm">
                    Get in Touch
                </motion.a>
            </motion.div>
        </section>
    );
}