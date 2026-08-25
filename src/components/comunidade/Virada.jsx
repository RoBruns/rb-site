"use client";

import { motion } from "framer-motion";

export function Virada() {
    return (
        <section className="relative w-full py-16 sm:py-24 md:py-36">

            <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-pill inline-block px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-blue sm:px-5 sm:text-[11px] sm:tracking-[0.28em]"
                >
                    A virada
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 font-display text-[clamp(1.95rem,8.6vw,2.75rem)] font-bold uppercase leading-[1] tracking-tight text-ice sm:mt-8 md:text-6xl md:leading-[0.98]"
                >
                    Você já tem exercício demais.
                    <br />
                    <span className="text-electric-blue">O que falta é ordem.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto mt-8 max-w-2xl space-y-4 text-left text-[15px] leading-relaxed text-ice/70 sm:mt-12 sm:space-y-5 sm:text-base md:text-lg"
                >
                    <p>
                        Guardar mais exercício não muda o seu treino. O que muda é você
                        olhar para o goleiro, entender o momento dele e da equipe, e
                        escolher o estímulo sabendo o que espera dali. Depois olhar o
                        que aconteceu e corrigir a rota.
                    </p>
                    <p>
                        É isso que a Comunidade PGAR faz: o método CIMO te dá a régua,
                        os encontros e o grupo te dão com quem discutir, e o resto é
                        você aplicando no seu clube e voltando para contar como foi.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-glass-glow mx-auto mt-8 max-w-2xl px-6 py-7 sm:mt-12 sm:px-8 sm:py-8"
                >
                    <p className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-ice sm:text-xl md:text-2xl">
                        Ninguém decora resposta para duzentos treinos por ano. Você
                        constrói um jeito de decidir, e ele resolve os duzentos.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
