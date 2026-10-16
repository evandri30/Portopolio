"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative">
            <Reveal>
                <SectionHeading title="Skills & Technologies" className="mb-16" />

                <div className="space-y-16">
                    {skillCategories.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-xl font-semibold text-neutral-300 mb-6 flex items-center">
                                <span className="bg-neutral-900 p-2 rounded-lg mr-3" aria-hidden="true">
                                    <span className="block w-2 h-2 rounded-full bg-blue-500" />
                                </span>
                                {category.title}
                            </h3>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.skills.map(({ name, icon: Icon, color }, index) => (
                                    <motion.li
                                        key={name}
                                        initial={{ opacity: 0, scale: 0.7, y: 30 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ type: "spring", stiffness: 120, damping: 15, delay: index * 0.05 }}
                                        whileHover={{ y: -8, scale: 1.1, rotate: 3 }}
                                        className="flex items-center gap-3 p-4 bg-neutral-950 border border-neutral-900 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500/30 transition-colors duration-300 cursor-default group"
                                    >
                                        <Icon
                                            className="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform duration-300"
                                            style={{ color }}
                                            aria-hidden="true"
                                        />
                                        <span className="font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">
                                            {name}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
