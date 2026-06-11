"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../utils/cn";
import heroBg from "../assets/hero_bg.jpeg";

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            data-theme="dark"
            className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-obsidian pt-24"
        >
            {/* Background Image with Parallax & simple opacity fade */}
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ y: bgY }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 origin-center"
            >
                {/* Overlays to blend with the obsidian background and add the blue tint */}
                <div className="absolute inset-0 bg-obsidian/40 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-electric-blue/30 mix-blend-overlay z-10 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent z-10" />

                <img
                    src={heroBg.src}
                    alt="Rodrigo Bruns Background"
                    className="w-full h-full object-cover object-[75%_center] md:object-center opacity-100 md:mix-blend-luminosity will-change-transform"
                />
            </motion.div>

            {/* Abstract Background Element - Hidden on mobile for perf */}
            <motion.div
                style={{ y: y1 }}
                className="hidden md:block absolute top-[20%] right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-electric-blue/20 blur-[100px] rounded-full pointer-events-none z-0 will-change-transform"
            />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center gap-8 md:gap-8">

                {/* Massive Typography - Asymmetric Structure */}
                <div className="flex flex-col relative z-20 w-full">
                    <motion.div
                        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
                    >
                        <motion.h1
                            initial={{ y: 40, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="text-[16vw] sm:text-[14vw] md:text-[9vw] lg:text-[150px] leading-[0.85] font-display font-bold tracking-tighter uppercase text-ice ml-[-0.05em] drop-shadow-2xl"
                        >
                            Rodrigo <br />
                            Bruns<span className="text-electric-blue">.</span>
                        </motion.h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -120]) }}
                        className="mt-6 md:mt-8 mr-auto md:ml-auto md:mr-24 max-w-full sm:max-w-[85%] md:max-w-[420px]"
                    >
                        <div className={cn("liquid-glass p-6 sm:p-8 md:p-10 sharp-edge relative overflow-hidden group hover:bg-white/10 transition-colors duration-700")}>
                            {/* Accent line inside glass */}
                            <div className="absolute left-0 top-0 w-1 md:w-1 h-full bg-electric-blue transition-all duration-500 group-hover:w-2" />

                            <p
                                className="text-[10px] sm:text-xs md:text-xs font-semibold leading-relaxed text-electric-blue uppercase tracking-[0.2em] mb-4"
                            >
                                Red Bull Bragantino
                            </p>
                            <h2
                                className="text-lg sm:text-xl md:text-3xl font-bold leading-tight uppercase tracking-tight font-display text-ice"
                            >
                                Especialista em Formação de Goleiros
                            </h2>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity, y: y2 }}
                    className="absolute bottom-12 left-6 flex flex-col items-center gap-4"
                >
                    <span className="text-xs uppercase tracking-[0.3em] font-bold rotate-90 origin-left translate-y-8 text-ice/50">
                        Descubra
                    </span>
                    <div className="w-[1px] h-16 bg-electric-blue/30 relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 64] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-[30%] bg-electric-blue"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
