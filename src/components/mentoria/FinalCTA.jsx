"use client";

import { motion } from "framer-motion";
import { CandidaturaForm } from "./CandidaturaForm";

export function FinalCTA() {
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
                    As vagas são limitadas e os{" "}
                    <span className="text-electric-blue">participantes serão selecionados.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="mt-7 text-base md:text-lg text-ice/70 leading-relaxed"
                >
                    Nem todo mundo vai entrar, e é por isso que funciona. Eu analiso cada inscrição e, 
                    se a mentoria fizer sentido para o seu momento, entro em contato para darmos o próximo passo.
                </motion.p>

                {/* Formulário de candidatura (nativo) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 border-t border-white/10 pt-10"
                >
                    <CandidaturaForm />
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
