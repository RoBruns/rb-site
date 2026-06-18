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
                            Você estuda, assiste a vídeos, monta treinos... Mas a dúvida permanece:{" "}
                            <span className="text-ice/90 font-semibold">
                                Será que esse é o melhor caminho?
                            </span>
                        </>,
                        <>
                            Muitos preparadores passam anos buscando evolução por tentativa e erro. Reúnem exercícios, 
                            referências e experiências de diferentes fontes, mas sem uma estrutura que conecte tudo isso 
                            em um processo claro de desenvolvimento.
                        </>,
                        <>
                            E é aí que muitos travam. Não por falta de dedicação. Não por falta de talento. Mas porque nunca 
                            tiveram acesso a um método que integre contexto, intensidade, mentalidade e organização
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
