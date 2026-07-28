"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckoutButton } from "./CheckoutButton";
import { PRICE_CASH, PRICE_INSTALLMENT } from "./constants";

export function ComunidadeHero() {
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
            <motion.div
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: bgY, scale: bgScale }}
                className="absolute inset-0 w-full h-[130%] -top-[15%] z-0"
            >
                <div className="absolute inset-0 bg-obsidian/55 z-10" />
                <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-obsidian via-obsidian/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent md:via-transparent z-10" />
                <img
                    src="/mentoria-hero.jpeg"
                    alt="Rodrigo Bruns orientando goleiros no campo de treino do Red Bull Bragantino"
                    className="w-full h-full object-cover object-[35%_center] md:object-center will-change-transform"
                />
            </motion.div>

            <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-10 pt-24"
            >
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="text-[13px] sm:text-[15px] font-semibold uppercase tracking-[0.3em] text-electric-blue mb-7"
                >
                    Comunidade PGAR
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="font-display font-bold uppercase tracking-tight text-ice leading-[0.95] text-[13vw] sm:text-6xl md:text-7xl lg:text-[84px] max-w-4xl"
                >
                    Pare de treinar{" "}
                    <span className="text-electric-blue">no escuro.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="mt-8 max-w-2xl text-base md:text-xl text-ice/75 font-medium leading-relaxed"
                >
                    Todo mês você senta com quem prepara os goleiros do Red Bull
                    Bragantino, mostra o seu trabalho e descobre se está no caminho
                    certo.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                    className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5"
                >
                    <CheckoutButton>Entrar na Comunidade</CheckoutButton>
                    <p className="text-sm text-ice/55">
                        {PRICE_CASH} à vista ou {PRICE_INSTALLMENT}
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
