"use client";

import { motion } from "framer-motion";

const vectors = [
    {
        letter: "C",
        name: "Contexto",
        line: "O treino começa antes de entrar em campo. Entender o jogo, o momento da equipe e as características do atleta e do adversário é o que define o que e como treinar.",
    },
    {
        letter: "I",
        name: "Intensidade",
        line: "Intensidade não é só esforço físico. É concentração, exigência e presença em cada repetição.",
    },
    {
        letter: "M",
        name: "Mentalidade",
        line: "O goleiro que chega ao alto nível tem algo além da técnica. Desenvolver mentalidade é parte fundamental do trabalho.",
    },
    {
        letter: "O",
        name: "Organização",
        line: "Sem planejamento, o treino depende da inspiração do dia. Com organização, ele depende do método.",
    },
];

export function MasterclassCimo() {
    return (
        <section
            id="cimo"
            className="relative w-full bg-obsidian py-28 md:py-40 px-6 border-t border-white/10 overflow-hidden scroll-mt-24"
        >
            {/* Oversized watermark */}
            <span
                aria-hidden
                className="pointer-events-none select-none absolute top-10 left-0 right-0 text-center font-display font-bold uppercase tracking-tighter text-white/[0.025] text-[26vw] leading-none whitespace-nowrap"
            >
                CIMO
            </span>

            <div className="relative max-w-5xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-display uppercase tracking-[0.3em] text-xs font-bold text-electric-blue mb-6"
                >
                    O método CIMO
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98] max-w-3xl"
                >
                    O que você vai aprender{" "}
                    <span className="text-electric-blue">nesta aula.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="mt-6 max-w-2xl text-base md:text-lg text-ice/70 leading-relaxed"
                >
                    CIMO é a estrutura que uso para preparar meus goleiros.
                    Quatro pilares que se complementam e formam a minha metodologia de desenvolvimento.
                </motion.p>

                <div className="mt-16 border-t border-white/10">
                    {vectors.map((v, i) => (
                        <motion.div
                            key={v.letter}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 py-10 border-b border-white/10 group"
                        >
                            <div className="flex items-baseline gap-4 md:flex-col md:items-start md:gap-1 md:w-44">
                                <span className="font-display font-bold text-electric-blue text-6xl md:text-7xl leading-none group-hover:scale-105 transition-transform duration-500 origin-left">
                                    {v.letter}
                                </span>
                                <h3 className="font-display font-bold uppercase tracking-tight text-ice text-xl md:text-2xl">
                                    {v.name}
                                </h3>
                            </div>

                            <div>
                                <p className="text-base md:text-lg text-ice/75 leading-relaxed max-w-xl">
                                    {v.line}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
