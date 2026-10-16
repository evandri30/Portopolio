"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

export default function Contact() {
    return (
        <section id="contact" className="py-20 text-center relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-blue-900 rounded-full blur-[120px] opacity-10 -z-10 pointer-events-none" />

            <Reveal className="bg-neutral-950 border border-neutral-900 p-10 rounded-3xl shadow-lg max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-white">Let&apos;s Connect</h2>
                <p className="text-neutral-400 mb-10 max-w-md mx-auto text-lg leading-relaxed">
                    I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>

                <div className="flex justify-center gap-8">
                    {profile.socials.map(({ label, href, icon: Icon, hoverClass }) => {
                        const external = href.startsWith("http");
                        return (
                            <motion.a
                                key={label}
                                href={href}
                                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                                whileHover={{ scale: 1.25, rotate: 10, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className={`p-4 bg-neutral-900 text-neutral-300 border border-neutral-800 rounded-full transition-colors duration-300 shadow-sm ${hoverClass}`}
                                aria-label={label}
                            >
                                <Icon size={28} />
                            </motion.a>
                        );
                    })}
                </div>
            </Reveal>
        </section>
    );
}
