"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-20 text-center relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-blue-900 rounded-full blur-[120px] opacity-10 -z-10 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="bg-neutral-950 border border-neutral-900 p-10 rounded-3xl shadow-lg max-w-2xl mx-auto"
            >
                <h2 className="text-3xl font-bold mb-6 text-white">Lets Connect</h2>
                <p className="text-neutral-400 mb-10 max-w-md mx-auto text-lg leading-relaxed">
                    Im currently looking for new opportunities. Whether you have a question or just want to say hi, I try my best to get back to you!
                </p>

                <div className="flex justify-center space-x-8">
                    <motion.a
                        href="mailto:evandriridhoh@gmail.com"
                        whileHover={{ scale: 1.25, rotate: 10, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="p-4 bg-neutral-900 text-neutral-350 border border-neutral-850 hover:text-white hover:bg-red-500 rounded-full transition-colors duration-300 shadow-sm"
                        aria-label="Email"
                    >
                        <FaEnvelope size={28} />
                    </motion.a>
                    <motion.a
                        href="https://github.com/evandri30"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.25, rotate: 10, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="p-4 bg-neutral-900 text-neutral-350 border border-neutral-850 hover:text-black hover:bg-white hover:border-white rounded-full transition-colors duration-300 shadow-sm"
                        aria-label="GitHub"
                    >
                        <FaGithub size={28} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/evandriridho"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.25, rotate: 10, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="p-4 bg-neutral-900 text-neutral-350 border border-neutral-850 hover:text-white hover:bg-blue-600 rounded-full transition-colors duration-300 shadow-sm"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={28} />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}