"use client";
import { motion } from "framer-motion";
import { skillCategories } from "@/constants/skills";

export default function Skill() {
    return (
        <section id="skills" className="py-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-100">Skills & Technologies</h2>
                    <div className="w-16 h-1 bg-blue-500 rounded mt-4"></div>
                </div>

                <div className="space-y-16">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="text-xl font-semibold text-slate-300 mb-6 flex items-center">
                                <span className="bg-slate-800 p-2 rounded-lg mr-3 text-blue-400">
                                    {/* Small aesthetic indicator */}
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                </span>
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.7, y: 30 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ type: "spring", stiffness: 120, damping: 15, delay: index * 0.05 }}
                                        whileHover={{ y: -8, scale: 1.1, rotate: 3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center space-x-3 p-4 bg-slate-900 border border-slate-800 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500/50 transition-colors duration-300 cursor-default group"
                                    >
                                        <div className="group-hover:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}