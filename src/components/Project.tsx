"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/constants/projects";

export default function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const item = projects[currentIndex];

    // Variants for transition animation (smooth translation + fade)
    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        },
        exit: (dir: number) => ({
            x: dir < 0 ? 50 : -50,
            opacity: 0,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        })
    };

    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                    <div className="w-16 h-1 bg-blue-500 rounded mt-4"></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 md:px-0">
                    {/* Carousel Container */}
                    <div className="overflow-hidden min-h-[520px] md:min-h-[400px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="group bg-neutral-950 border border-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)] hover:border-blue-500/30 transition-all duration-300 flex flex-col md:flex-row h-full relative"
                            >
                                {/* Left Column: Image/Placeholder */}
                                <div className={`w-full md:w-1/2 min-h-[240px] md:min-h-[400px] ${item.color} relative overflow-hidden flex items-center justify-center`}>
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 450px"
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center text-center p-8 w-full h-full">
                                            <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                            <motion.div
                                                className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            ></motion.div>
                                            <span className="text-white/20 font-bold text-6xl tracking-widest uppercase select-none z-10">
                                                {item.title.substring(0, 2)}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Right Column: Content */}
                                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-2xl md:text-3xl mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-neutral-400 mb-6 leading-relaxed text-base text-justify">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div>
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {item.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1 bg-neutral-900 border border-neutral-800/80 text-neutral-300 text-xs font-medium rounded-full">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Link */}
                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group/link mt-auto"
                                            >
                                                View Project
                                                <ArrowUpRight className="ml-1.5 w-5 h-5 transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-all duration-300 shadow-md z-20 cursor-pointer"
                        aria-label="Previous Project"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-all duration-300 shadow-md z-20 cursor-pointer"
                        aria-label="Next Project"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                    index === currentIndex
                                        ? "bg-blue-500 w-8"
                                        : "bg-neutral-800 hover:bg-neutral-700"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}