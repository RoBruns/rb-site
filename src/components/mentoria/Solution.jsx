"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const pillars = [
    {
        title: "Especificidade técnica",
        description:
            "Reflexo, posicionamento, jogo de pés, leitura de jogo e tomada de decisão, treinados como a posição exige no alto rendimento.",
    },
    {
        title: "Desenvolvimento mental",
        description:
            "Controle emocional, concentração e confiança. O lado da preparação que decide jogos e que quase ninguém treina de forma estruturada.",
    },
    {
        title: "Integração ao coletivo",
        description:
            "O goleiro como parte estratégica do sistema de jogo, alinhando as exigências individuais às necessidades táticas do time.",
    },
];

export function Solution() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section className="relative w-full bg-obsidian py-28 md:py-40 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    {/* Copy */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display font-bold uppercase tracking-tight text-ice text-3xl md:text-5xl leading-[0.98]"
                        >
                            A metodologia do alto rendimento vira{" "}
                            <span className="text-electric-blue">o seu método.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                            className="mt-7 space-y-5 text-base md:text-lg text-ice/70 leading-relaxed"
                        >
                            <p>
                                Esta não é mais uma sequência de aulas gravadas. São{" "}
                                <span className="font-semibold text-ice">
                                    8 encontros online e ao vivo
                                </span>
                                , comigo, em grupo. Você aprende, pergunta e aplica enquanto evolui.
                            </p>
                            <p>A estrutura serve a dois objetivos que andam juntos.</p>
                        </motion.div>

                        <div className="mt-8 space-y-6">
                            {[
                                "Dominar a metodologia de preparação de goleiros de elite, a mesma aplicada no dia a dia de um clube da Série A.",
                                "Sair capaz de formar goleiros de alto nível, prontos técnica, mental e taticamente para os desafios da posição.",
                            ].map((g, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.2 + i * 0.1,
                                        ease: "easeOut",
                                    }}
                                    className="flex gap-4 items-baseline border-l border-electric-blue/40 pl-5"
                                >
                                    <span className="font-display font-bold text-electric-blue text-lg leading-none">
                                        0{i + 1}
                                    </span>
                                    <p className="text-sm md:text-base text-ice/75 leading-relaxed">
                                        {g}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Parallax photo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        ref={ref}
                        className="relative aspect-[4/5] overflow-hidden"
                    >
                        <motion.img
                            style={{ y: imgY, scale: 1.12 }}
                            src="/mentoria-training.png"
                            alt="Rodrigo Bruns em treino de campo com goleiros"
                            className="w-full h-full object-cover object-top will-change-transform"
                        />
                    </motion.div>
                </div>

                {/* Pillars as clean rows */}
                <div className="mt-24 border-t border-white/10">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                            className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-12 py-8 border-b border-white/10 group"
                        >
                            <h3 className="font-display font-bold uppercase tracking-tight text-ice text-xl md:text-2xl group-hover:text-electric-blue transition-colors duration-400">
                                {p.title}
                            </h3>
                            <p className="text-sm md:text-base text-ice/60 leading-relaxed max-w-xl">
                                {p.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
