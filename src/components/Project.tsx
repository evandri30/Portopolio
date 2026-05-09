"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/constants/projects";


export default function Project() {
    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
                    <div className="w-16 h-1 bg-blue-500 rounded mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.15 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm shadow-slate-950/50 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-shadow duration-300 flex flex-col h-full z-10 hover:z-20 relative"
                        >
                            {/* Gradient Placeholder Images */}
                            <div className={`h-48 w-full bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                                {item.image ? (
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                        <motion.div
                                            className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        ></motion.div>
                                    </>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="font-bold text-xl mb-3 text-slate-100 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
                                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{item.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-medium rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a href={item.link} className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group/link mt-auto">
                                    View Project
                                    <ArrowUpRight className="ml-1 w-4 h-4 transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}