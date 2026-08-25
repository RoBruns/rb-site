"use client";

import { motion } from "framer-motion";

/* Layout novo: em vez de parágrafos empilhados, as dúvidas viram
   "mensagens" soltas em vidro, com alinhamento alternado. Lembra a
   cabeça do preparador às onze da noite. */

const duvidas = [
    "Esse exercício serve para o goleiro que eu tenho ou eu só achei bonito?",
    "Como encaixo o treino na semana de jogo com o tempo que sobra?",
    "Se o treinador perguntar por que fiz assim, eu tenho resposta?",
    "Estou evoluindo ou só repetindo o que sempre fiz?",
];

export function Problema() {
    return (
        <section className="relative w-full py-16 sm:py-24 md:py-36">
            <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
                <div className="grid gap-9 sm:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div className="lg:sticky lg:top-32 lg:self-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-[clamp(1.9rem,8.2vw,2.6rem)] font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-5xl md:leading-[0.95]"
                        >
                            Referência é fácil de achar.
                            <br />
                            <span className="text-electric-blue">Critério, não.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
                            className="mt-5 text-[15px] leading-relaxed text-ice/65 sm:mt-7 sm:text-base"
                        >
                            Você estuda, salva exercício, assiste treino dos outros.
                            Mesmo assim, na hora de montar a semana, a dúvida volta
                            sempre pro mesmo lugar: isso serve para o goleiro que eu
                            tenho, na categoria que eu tenho, com o tempo que eu tenho?
                        </motion.p>
                    </div>

                    {/* Balões de dúvida */}
                    <div className="space-y-4">
                        {duvidas.map((d, i) => (
                            <motion.div
                                key={d}
                                initial={{ opacity: 0, y: 18, x: i % 2 ? 16 : -16 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{
                                    duration: 0.9,
                                    delay: i * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className={`cmn-glass px-5 py-4 sm:px-6 sm:py-5 ${
                                    i % 2 ? "lg:ml-14" : "lg:mr-14"
                                }`}
                                style={{
                                    borderRadius:
                                        i % 2
                                            ? "var(--cmn-r-lg) var(--cmn-r-lg) var(--cmn-r-sm) var(--cmn-r-lg)"
                                            : "var(--cmn-r-lg) var(--cmn-r-lg) var(--cmn-r-lg) var(--cmn-r-sm)",
                                }}
                            >
                                <p className="text-[14px] leading-relaxed text-ice/75 sm:text-[15px] md:text-base">
                                    {d}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-14 sm:mt-20 md:mt-28"
                >
                    <div className="cmn-hairline" />
                    <p className="mt-8 font-display text-xl font-bold uppercase leading-tight tracking-tight text-ice sm:mt-10 sm:text-2xl md:text-4xl">
                        Vontade não é o seu problema.{" "}
                        <span className="text-electric-blue">
                            O problema é decidir sozinho, sem ninguém com estrada para
                            conferir.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
