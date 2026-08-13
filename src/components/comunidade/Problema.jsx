"use client";

import { motion } from "framer-motion";

/* Layout novo: em vez de parágrafos empilhados, as dúvidas viram
   "mensagens" soltas em vidro, com alinhamento alternado. Lembra a
   cabeça do preparador às onze da noite. */

const duvidas = [
    "Como ajustar o treino à semana de jogo e à realidade que eu tenho?",
    "Que princípio desse exercício faz sentido para a minha categoria?",
    "Como organizar um processo que não dependa só de tentativa e erro?",
    "Como explicar com clareza por que fiz essa escolha?",
];

export function Problema() {
    return (
        <section className="relative w-full py-24 md:py-36">
            <div className="relative z-10 mx-auto max-w-5xl px-6">
                <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div className="lg:sticky lg:top-32 lg:self-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ice md:text-5xl"
                        >
                            Referência não basta
                            <br />
                            <span className="text-electric-blue">quando falta critério.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
                            className="mt-7 text-base leading-relaxed text-ice/65"
                        >
                            Você estuda, salva exercícios, observa outros preparadores e
                            trabalha muito. Ainda assim, na hora de organizar a semana,
                            adaptar o treino à categoria ou explicar uma escolha, a dúvida
                            aparece: o que faz sentido para o contexto em que eu atuo?
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
                                className={`cmn-glass px-6 py-5 ${
                                    i % 2 ? "lg:ml-14" : "lg:mr-14"
                                }`}
                                style={{
                                    borderRadius:
                                        i % 2
                                            ? "var(--cmn-r-lg) var(--cmn-r-lg) var(--cmn-r-sm) var(--cmn-r-lg)"
                                            : "var(--cmn-r-lg) var(--cmn-r-lg) var(--cmn-r-lg) var(--cmn-r-sm)",
                                }}
                            >
                                <p className="text-[15px] leading-relaxed text-ice/75 md:text-base">
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
                    className="mt-20 md:mt-28"
                >
                    <div className="cmn-hairline" />
                    <p className="mt-10 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-ice md:text-4xl">
                        Não falta vontade de evoluir.{" "}
                        <span className="text-electric-blue">
                            Falta uma estrutura para transformar informação em método.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
