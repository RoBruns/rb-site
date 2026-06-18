"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
                                     encontros online e ao vivo
                                </span>
                                , comigo. Você aprende, pergunta e aplica enquanto evolui.
                            </p>
                            <p>A estrutura serve a dois objetivos que andam juntos.</p>
                        </motion.div>

                        <div className="mt-8 space-y-6">
                            {[
                                "Aprender uma metodologia completa de preparação de goleiros, que conecte contexto, intensidade, mentalidade e organização.",
                                "Entender detalhes que realmente fazem a diferença para goleiro de alta performance",
                                "Construir confiança no próprio trabalho, acelerarando o crescimento profissional através de uma atuação mais alinhada ao alto rendimento."
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
            </div>
        </section>
    );
}
