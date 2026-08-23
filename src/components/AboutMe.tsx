"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section id="about" className="py-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-white">About Me</h2>
                <div className="bg-neutral-900/30 p-8 sm:p-10 rounded-3xl shadow-lg border border-neutral-900 relative overflow-hidden text-justify">
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                            className="text-neutral-300 leading-relaxed text-lg"
                        >
                            Software engineer and data enthusiast with a learn-by-doing mindset, working across TypeScript (Node.js, React, Next.js), Python (FastAPI, TensorFlow, PyTorch), and SQL to build full-stack applications and data-driven solutions that solve real business problems. I like understanding a problem end-to-end before writing code, from data structure to system design to how its actually used. Currently deepening my skills in agentic AI, scalable system design, and applied data science through hands-on projects, and always pushing to turn technical depth into things that actually work in production.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}