"use client";

import { motion } from "framer-motion";

export function Virada() {
    return (
        <section className="relative w-full py-24 md:py-36">

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-pill inline-block px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-electric-blue"
                >
                    A virada
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-6xl"
                >
                    Mais conteúdo não resolve.
                    <br />
                    <span className="text-electric-blue">Método aplicado resolve.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto mt-12 max-w-2xl space-y-5 text-left text-base leading-relaxed text-ice/70 md:text-lg"
                >
                    <p>
                        O ponto não é acumular mais exercícios ou seguir a última tendência.
                        É entender o contexto, escolher o estímulo com intenção, observar o
                        processo e ajustar o trabalho com consciência.
                    </p>
                    <p>
                        A Comunidade PGAR reúne formação, troca e acompanhamento para você
                        desenvolver uma metodologia própria. Não para copiar um modelo pronto,
                        mas para ganhar repertório e critério para aplicar princípios à sua
                        realidade.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-glass-glow mx-auto mt-12 max-w-2xl px-8 py-8"
                >
                    <p className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-ice md:text-2xl">
                        Você não precisa de uma resposta pronta para cada treino. Precisa de
                        critérios para construir as suas decisões.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
