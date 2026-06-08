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
                <div className="bg-neutral-900/30 p-8 sm:p-10 rounded-3xl shadow-lg border border-neutral-900 relative overflow-hidden">
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                            className="text-neutral-300 leading-relaxed text-lg"
                        >
                            I am a final-year Informatics student with a learn-by-doing mindset, dedicated to building scalable applications that solve complex technical challenges. My expertise lies at the intersection of Full-stack Development and Data Science, allowing me to build robust systems while integrating intelligent, data-driven solutions.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                            className="text-neutral-300 leading-relaxed text-lg"
                        >
                            What sets me apart is my ability to bridge the gap between complex data processing and seamless user experiences. I dont just write code; I engineer end-to-end solutions. Whether it is crafting highly interactive frontends, orchestrating containerized deployments, or training predictive machine learning models, I focus on leveraging modern tech stacks to build tools that are both powerful and scalable.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                            className="text-neutral-300 leading-relaxed text-lg"
                        >
                            I thrive in fast-paced environments and am always looking to push my technical boundaries. Whether its architecting a fluid web platform or developing computer vision models, I am ready to bring my combined expertise in software engineering and data science to a forward-thinking tech team.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}