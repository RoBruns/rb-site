"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section className="relative w-full bg-obsidian py-28 md:py-40 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[0.8fr_1fr] gap-14 lg:gap-20 items-center">
                    {/* Parallax portrait */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative aspect-[4/5] overflow-hidden order-1 lg:order-none"
                    >
                        <motion.img
                            style={{ y: imgY, scale: 1.12 }}
                            src="/mentoria-rodrigo.png"
                            alt="Rodrigo Bruns, treinador de goleiros do Red Bull Bragantino"
                            className="w-full h-full object-cover object-top will-change-transform"
                        />
                    </motion.div>

                    {/* Copy */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="font-display uppercase tracking-[0.25em] text-xs font-bold text-electric-blue mb-5"
                        >
                            Quem está do outro lado da tela
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-5xl leading-[0.98]"
                        >
                            Rodrigo <span className="text-electric-blue">Bruns</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                            className="mt-7 space-y-5 text-base md:text-lg text-ice/70 leading-relaxed"
                        >
                            <p>
                                Sou ex-goleiro profissional. Encerrei a carreira aos 26 anos para me
                                dedicar inteiramente à formação de atletas. Formado em Educação Física e
                                com Licença A da CBF, construí mais de duas décadas de trajetória no
                                treinamento de goleiros, começando nas categorias de base do futebol
                                paranaense.
                            </p>
                            <p>
                                Desde 2019, comando a preparação de goleiros do Red Bull Bragantino,
                                coordenando uma metodologia única que vai da base ao elenco
                                profissional. Fui parte da equipe campeã da Série B e do acesso à Série
                                A. Goleiros que formei, como Cleiton, Júlio César e Alex Alves, chegaram
                                ao elenco profissional e a seleções de base.
                            </p>
                            <p>
                                Sou reconhecido como uma das referências na preparação de goleiros no
                                Brasil e já levei meu trabalho para fora do país, palestrando pelo mundo
                                sobre treinamento de goleiros.
                            </p>
                        </motion.div>

                        <motion.blockquote
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="mt-10 border-l-2 border-electric-blue pl-6"
                        >
                            <p className="font-display uppercase tracking-tight text-ice text-xl md:text-2xl leading-snug">
                                "Não há atalhos. Desempenho é resultado de método, repetição, análise e
                                trabalho contínuo."
                            </p>
                        </motion.blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
