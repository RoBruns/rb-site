"use client";

import { motion } from "framer-motion";

export function Problem() {
    return (
        <section className="relative w-full bg-obsidian py-28 md:py-40 px-6 border-t border-white/10">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98]"
                >
                    Não falta esforço. <span className="text-electric-blue">Falta método.</span>
                </motion.h2>

                <div className="mt-10 space-y-6 text-base md:text-lg text-ice/70 leading-relaxed">
                    {[
                        <>
                            Você estuda, assiste a vídeos, monta treinos no fim de semana e leva tudo
                            para o campo na segunda. Mesmo assim, fica a dúvida:{" "}
                            <span className="text-ice/90 font-semibold">
                                isso que eu aplico aguenta o nível que eu quero alcançar?
                            </span>
                        </>,
                        <>
                            A maioria dos treinadores de goleiros aprende por tentativa e erro. Junta um
                            pedaço daqui, copia um exercício dali, e segue sem uma estrutura que conecte
                            técnica, cabeça e o jogo da equipe.
                        </>,
                        <>
                            No alto rendimento não é assim. Lá existe método: planejamento,
                            especificidade, leitura de jogo, controle emocional e integração ao sistema
                            do time. É isso que separa um treino que passa o tempo de um treino que
                            forma goleiro.
                        </>,
                    ].map((p, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
                        >
                            {p}
                        </motion.p>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mt-16 font-display font-bold uppercase tracking-tight text-ice text-2xl md:text-4xl leading-tight"
                >
                    Treinar goleiro de elite não é dom.{" "}
                    <span className="text-electric-blue">É processo. E processo se aprende.</span>
                </motion.p>
            </div>
        </section>
    );
}
