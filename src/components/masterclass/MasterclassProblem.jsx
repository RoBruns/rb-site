"use client";

import { motion } from "framer-motion";

export function MasterclassProblem() {
    return (
        <section className="relative w-full bg-obsidian py-28 md:py-36 px-6 border-t border-white/10">
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
                            Você busca referências, assiste a tudo que encontra, testa no treino.
                            Mas uma dúvida não sai da cabeça:{" "}
                            <span className="text-ice/90 font-semibold">
                                por onde começo a construir algo de verdade?
                            </span>
                        </>,
                        <>
                            O problema não é falta de vontade. É que a maioria dos preparadores nunca
                            teve acesso a uma estrutura que conecte tudo: o contexto do jogo, a
                            intensidade do treino, a mentalidade do atleta e a organização do trabalho.
                        </>,
                        <>
                            Sem isso, é difícil saber o que está funcionando, por quê, e o que precisa
                            mudar. Você fica preso no campo, mas sem clareza sobre o que está
                            desenvolvendo.
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
                    className="mt-14 font-display font-bold uppercase tracking-tight text-ice text-2xl md:text-4xl leading-tight"
                >
                    Um método claro muda{" "}
                    <span className="text-electric-blue">tudo que você produz no campo.</span>
                </motion.p>
            </div>
        </section>
    );
}
