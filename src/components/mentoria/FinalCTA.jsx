"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const TALLY_SRC =
    "https://tally.so/embed/rjvgvR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export function FinalCTA() {
    useEffect(() => {
        const loadEmbeds = () => {
            if (window.Tally) {
                window.Tally.loadEmbeds();
            }
        };

        const existing = document.querySelector(
            'script[src="https://tally.so/widgets/embed.js"]'
        );

        if (existing) {
            loadEmbeds();
            return;
        }

        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = loadEmbeds;
        // Fallback: if the script fails, the iframe still renders via data-tally-src on its own
        script.onerror = loadEmbeds;
        document.body.appendChild(script);
    }, []);

    return (
        <section
            id="candidatura"
            className="relative w-full bg-obsidian py-28 md:py-40 px-6 overflow-hidden scroll-mt-24 border-t border-white/10"
        >
            {/* Subtle blue glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] max-w-[900px] bg-electric-blue/10 blur-[150px] rounded-full pointer-events-none z-0" />

            <div className="max-w-2xl mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98]"
                >
                    As vagas são limitadas.{" "}
                    <span className="text-electric-blue">A análise é individual.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="mt-7 text-base md:text-lg text-ice/70 leading-relaxed"
                >
                    Nem todo mundo vai entrar, e é por isso que funciona. Preencha o formulário de
                    candidatura abaixo. Eu analiso cada inscrição e, se a mentoria fizer sentido para o
                    seu momento, entro em contato com os próximos passos.
                </motion.p>

                {/* Formulário de qualificação (Tally) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 text-left border-t border-white/10 pt-10"
                >
                    <iframe
                        data-tally-src={TALLY_SRC}
                        loading="lazy"
                        width="100%"
                        height="500"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Candidatura para a Mentoria de Goleiros de Alto Rendimento"
                        className="w-full"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="mt-8 text-xs text-ice/40"
                >
                    Leva poucos minutos. Se a mentoria fizer sentido para o seu momento, eu entro em
                    contato com os próximos passos.
                </motion.p>
            </div>
        </section>
    );
}
