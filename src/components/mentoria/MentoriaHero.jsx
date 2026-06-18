"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MentoriaHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative min-h-[100svh] w-full flex items-center overflow-hidden bg-obsidian"
        >
            {/* Parallax photo */}
            <motion.div
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: bgY, scale: bgScale }}
                className="absolute inset-0 w-full h-[130%] -top-[15%] z-0"
            >
                <div className="absolute inset-0 bg-obsidian/45 z-10" />
                {/* Left-to-right gradient only on desktop; on mobile it darkens Rodrigo, so hide it */}
                <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent z-10" />
                {/* Bottom gradient: stronger on mobile to keep text legible without the left wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent md:via-transparent z-10" />
                <img
                    src="/mentoria-hero.jpeg"
                    alt="Rodrigo Bruns orientando goleiros do Red Bull Bragantino"
                    className="w-full h-full object-cover object-[35%_center] md:object-center will-change-transform"
                />
            </motion.div>

            <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-10"
            >
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="text-[15px] sm:text- font-semibold uppercase tracking-[0.35em] text-electric-blue mb-7"
                >
                    PREPARADOR de goleiros 
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="font-display font-bold uppercase tracking-tight text-ice leading-[0.95] text-[12vw] sm:text-6xl md:text-7xl lg:text-[80px] max-w-4xl"
                >
                    Te ajudo na busca do  {" "}
                    <span className="text-electric-blue">alto rendimento.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="mt-8 max-w-xl text-base md:text-lg text-ice/70 font-medium leading-relaxed"
                >
                    Mais de 20 anos no alto rendimento me ensinaram o que realmente faz diferença na preparação de goleiros.
                    <br />
                    Nesta mentoria, vou compartilhar esses aprendizados para que você atinja o próximo nível.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                    className="mt-10"
                >
                    <a
                        href="#candidatura"
                        className="group inline-flex items-center gap-3 border border-electric-blue bg-electric-blue text-obsidian px-8 py-4 uppercase text-sm font-bold tracking-widest hover:bg-transparent hover:text-electric-blue transition-colors duration-400"
                    >
                        Quero me candidatar
                        <span className="transition-transform duration-400 group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
