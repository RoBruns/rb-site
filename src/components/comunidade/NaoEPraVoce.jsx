"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const naoServe = [
    "Você quer uma planilha pronta de exercícios para copiar e colar amanhã.",
    "Você acha que existe atalho para formar goleiro de alto nível.",
    "Você não pretende aplicar nada, só acumular material.",
];

const serve = [
    "Você já trabalha com goleiros e quer saber se está no caminho certo.",
    "Você está começando e não quer levar cinco anos para descobrir os próprios erros.",
    "Você aceita ouvir que algo no seu treino precisa mudar.",
];

export function NaoEPraVoce() {
    return (
        <section className="relative w-full bg-obsidian py-28 md:py-40 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-5xl leading-[0.98]"
                >
                    Antes de entrar,{" "}
                    <span className="text-electric-blue">seja honesto.</span>
                </motion.h2>

                <div className="mt-14 grid md:grid-cols-2 gap-10 md:gap-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ice/40">
                            Não perca seu dinheiro se
                        </p>
                        <ul className="mt-6 space-y-4">
                            {naoServe.map((t) => (
                                <li key={t} className="flex gap-3 items-start">
                                    <X
                                        className="h-5 w-5 shrink-0 text-ice/30 mt-0.5"
                                        strokeWidth={2.5}
                                    />
                                    <span className="text-[15px] text-ice/55 leading-relaxed">
                                        {t}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-electric-blue">
                            Entre se
                        </p>
                        <ul className="mt-6 space-y-4">
                            {serve.map((t) => (
                                <li key={t} className="flex gap-3 items-start">
                                    <Check
                                        className="h-5 w-5 shrink-0 text-electric-blue mt-0.5"
                                        strokeWidth={2.5}
                                    />
                                    <span className="text-[15px] text-ice/85 leading-relaxed">
                                        {t}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
