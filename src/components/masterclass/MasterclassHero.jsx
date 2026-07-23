"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BuyButton } from "./BuyButton";
import { Countdown } from "./Countdown";
import { DATE_FULL, TIME } from "./constants";

export function MasterclassHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative min-h-[100svh] w-full flex items-center overflow-hidden bg-obsidian"
        >
            {/* Parallax photo (full-bleed) */}
            <motion.div
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: bgY }}
                className="absolute inset-0 w-full h-[130%] -top-[15%] z-0 will-change-transform transform-gpu"
            >
                <img
                    src="/masterclass-bg.jpg"
                    alt="Rodrigo Bruns orientando goleiros do Red Bull Bragantino"
                    className="w-full h-full object-cover object-[65%_center] opacity-[0.28] grayscale brightness-90 contrast-[1.05] will-change-transform"
                />
                {/* Tint azul radial (igual ao Paper) */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(ellipse 60% 70% at 70% 35%, rgba(127,179,255,0.16) 0%, rgba(127,179,255,0.04) 45%, rgba(13,17,23,0) 75%)",
                    }}
                />
                {/* Scrim esquerda + base — desktop (igual ao Paper) */}
                <div
                    className="absolute inset-0 z-10 hidden md:block"
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, #0D1117 0%, rgba(13,17,23,0.85) 32%, rgba(13,17,23,0.2) 60%, rgba(13,17,23,0) 78%), linear-gradient(0deg, #0D1117 0%, rgba(13,17,23,0.3) 22%, rgba(13,17,23,0) 50%)",
                    }}
                />
                {/* Scrim mobile — legibilidade do texto */}
                <div className="absolute inset-0 z-10 md:hidden bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/20" />
            </motion.div>

            {/* Palco central — reproduz o artboard 1440 do Paper em qualquer largura */}
            <div className="relative z-10 mx-auto flex w-full max-w-[1440px] min-h-[100svh] items-center">
                {/* Blue glow behind Rodrigo */}
                <div className="absolute right-[4%] top-[8%] w-[560px] h-[560px] bg-electric-blue/10 blur-[90px] rounded-full pointer-events-none hidden lg:block" />

                {/* Cutout Rodrigo — ancorado à direita, sangrando na base */}
                <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    src="/masterclass-rodrigo-cutout.png"
                    alt="Rodrigo Bruns"
                    className="absolute right-[24px] xl:right-[48px] bottom-[-16vh] h-[104vh] max-h-[1000px] w-auto object-contain object-bottom hidden lg:block pointer-events-none z-10 will-change-transform transform-gpu"
                />

                {/* Bottom fade dissolvendo a base do Rodrigo no obsidian */}
                <div className="absolute right-0 bottom-0 w-[760px] h-[300px] bg-gradient-to-t from-obsidian via-obsidian/85 to-transparent pointer-events-none hidden lg:block z-20" />

                <motion.div
                    style={{ y: contentY, opacity: contentOpacity }}
                    className="relative z-30 w-full max-w-[820px] px-6 md:px-10 lg:px-0 lg:ml-[104px] pt-24 pb-12"
                >
                {/* Badge de data: masterclass ao vivo */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="inline-flex items-center gap-2.5 border border-electric-blue/40 bg-electric-blue/15 px-4 py-2 mb-7"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-blue opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-blue" />
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-electric-blue">
                        Masterclass ao vivo · {DATE_FULL} · {TIME}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="font-display font-bold uppercase text-ice text-[12vw] sm:text-6xl md:text-[68px] lg:text-[74px] leading-[0.92] tracking-[-0.01em] max-w-[620px]"
                >
                    A metodologia por trás dos goleiros de{" "}
                    <span className="text-electric-blue">alto rendimento.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="mt-8 max-w-2xl text-base md:text-lg text-ice/75 font-medium leading-relaxed"
                >
                    Em uma aula ao vivo, vou te mostrar o{" "}
                    <strong className="text-ice font-semibold">CIMO</strong>: a estrutura que uso
                    para preparar goleiros no alto rendimento.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                    className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5"
                >
                    <BuyButton href="#inscricao">Garantir minha vaga</BuyButton>
                    <p className="text-xs text-ice/55 leading-relaxed max-w-[16rem]">
                        Ao vivo, online. Com gravação disponível depois.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 1 }}
                    className="mt-12"
                >
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-ice/40 mb-3">
                        A masterclass começa em
                    </p>
                    <Countdown />
                </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
