"use client";

import { motion } from "framer-motion";

export function Philosophy() {
    return (
        <section data-theme="dark" className="relative w-full min-h-[100svh] flex items-center justify-center py-24 px-6 bg-obsidian text-ice overflow-hidden">

            {/* Premium Goalkeeper Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-obsidian/85 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop"
                    alt="Goleiro Futebol Visão"
                    className="w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <div className="w-[2px] h-16 bg-electric-blue mx-auto mb-8" />
                    <h4 className="font-sans uppercase tracking-[0.3em] text-sm font-bold text-electric-blue">
                        04 / Visão e Missão
                    </h4>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-10 max-w-4xl"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium uppercase tracking-normal leading-[1.1]">
                        Sem Atalhos.<br />
                        <span className="text-white/40 block mt-2">Cada detalhe importa.</span>
                    </h2>

                    <div className="w-full max-w-md mx-auto h-[1px] bg-white/10" />

                    <p className="text-lg md:text-2xl font-sans font-light leading-relaxed tracking-wide text-white/80">
                        A evolução do goleiro exige disciplina, responsabilidade e preparação integral — técnica, física e mental. Desempenho é resultado de método, repetição, análise e trabalho contínuo.
                    </p>

                    <p className="text-base md:text-lg font-sans font-medium text-electric-blue mt-4 uppercase tracking-[0.1em]">
                        Formar, desenvolver e elevar o padrão.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
