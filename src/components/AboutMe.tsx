"use client";
import { motion } from "framer-motion";
import TechStackCard from "./TechStackCard";
import { techStackItems } from "@/constants/techStackItems";

export default function AboutMe() {
    return (
        <section id="about" className="py-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">About Me</h2>
                <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl shadow-lg shadow-slate-950/50 border border-slate-800 relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/20 rounded-bl-full pointer-events-none -z-10" />

                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                            className="text-slate-300 leading-relaxed text-lg"
                        >
                            I am a final-year Informatics student with a "learn-by-doing" mindset, dedicated to building scalable applications that solve real-world business problems. My expertise lies at the intersection of Full-stack Development and Data Science, allowing me to build robust systems while integrating intelligent, data-driven solutions.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                            className="text-slate-300 leading-relaxed text-lg"
                        >
                            What sets me apart is my experience in a hybrid role at PT Pelita Air Service. By combining Frontend Development with Business Analysis, I learned to translate complex stakeholder requirements into actionable technical specifications (BRDs & FRDs). I don't just write code; I build tools that align with business goals.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }}
                            className="pt-4"
                        >
                            <h3 className="text-slate-200 font-semibold text-xl mb-4">Core Technical Stack</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {techStackItems.map((item) => (
                                    <TechStackCard key={item.id} item={item} />
                                ))}
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                            className="text-slate-300 leading-relaxed text-lg"
                        >
                            I thrive in fast-paced environments and am always looking to push my technical boundaries. Whether it's architecting a web platform or developing computer vision models, I am ready to bring a blend of technical engineering and business understanding to a forward-thinking team.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}