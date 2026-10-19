"use client";

import { motion } from "framer-motion";
import { MEMBROS_LABEL } from "./constants";

/* Prova social. Os contextos vêm dos membros reais (pesquisa e CRM,
   2026-10). O print é do grupo, com nome, foto e telefone dos membros
   censurados; o Rodrigo aparece porque mostra o expert respondendo. */
const contextos = [
    "Profissional Série B e C",
    "Base de clube",
    "Futebol feminino",
    "Escola de goleiros",
    "Personal",
    "Exterior",
];

export function QuemEstaDentro() {
    return (
        <section className="relative w-full py-12 sm:py-20 md:py-28">
            <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-blue sm:text-[11px] sm:tracking-[0.28em]"
                    >
                        Quem está dentro
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-4 font-display text-[clamp(1.95rem,8.6vw,2.75rem)] font-bold uppercase leading-[1] tracking-tight text-ice sm:mt-5 md:text-6xl md:leading-[0.98]"
                    >
                        Preparadores de todos os mercados,{" "}
                        <span className="text-electric-blue">numa conversa só.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: 0.16, ease: "easeOut" }}
                        className="mt-5 text-[15px] leading-relaxed text-ice/65 sm:mt-6 sm:text-base md:text-lg"
                    >
                        {MEMBROS_LABEL} já estão no grupo. Gente que vive a mesma rotina que
                        você, em contextos diferentes do seu. É daí que sai a troca que
                        nenhum curso entrega.
                    </motion.p>

                    <motion.ul
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: 0.22, ease: "easeOut" }}
                        className="mt-8 flex flex-wrap gap-2.5"
                    >
                        {contextos.map((c) => (
                            <li
                                key={c}
                                className="cmn-pill px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ice/80 sm:text-[13px]"
                            >
                                {c}
                            </li>
                        ))}
                    </motion.ul>
                </div>

                <motion.figure
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto w-full max-w-[380px]"
                >
                    <img
                        src="/comunidade-print-grupo.webp"
                        alt="Mensagens de membros no grupo de WhatsApp da Comunidade depois de um encontro com convidado"
                        loading="lazy"
                        className="w-full rounded-[28px] border border-electric-blue/30 shadow-[0_40px_90px_-24px_rgba(5,10,20,0.85),0_0_80px_-20px_rgba(127,179,255,0.35)]"
                    />
                    <figcaption className="mt-4 text-center text-[12px] leading-relaxed text-ice/45 sm:text-[13px]">
                        Mensagens no grupo depois de um encontro com convidado.
                    </figcaption>
                </motion.figure>
            </div>
        </section>
    );
}
