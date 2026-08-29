"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const credenciais = [
    { valor: "Ex-atleta", label: "profissional" },
    { valor: "Licença A", label: "Treinador de Goleiros CBF" },
    { valor: "Pós-graduado", label: "em Treinamento, Técnica e Tática Desportiva" },
    { valor: "Bacharel", label: "em Educação Física" },
];

export function QuemResponde() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

    return (
        <section className="relative w-full overflow-hidden py-12 sm:py-20 md:py-28">

            {/* Nome em marca-d'água, como na página da mentoria.

                O wrapper com overflow-hidden é obrigatório: o texto é
                whitespace-nowrap e, no mobile, fica mais largo que a viewport.
                Sem o corte aqui, ele era a única coisa na página inteira que
                criava rolagem horizontal (441px de conteúdo em 390px de tela). */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-2 overflow-hidden"
            >
                <span className="block select-none whitespace-nowrap text-center font-display text-[15vw] font-bold uppercase leading-none tracking-tighter text-white/[0.022] md:text-[18vw]">
                    Rodrigo Bruns
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-blue sm:text-[11px] sm:tracking-[0.28em]"
                >
                    Quem conduz a comunidade
                </motion.p>

                <div className="mt-8 grid items-start gap-6 sm:mt-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
                    {/* Retrato */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="cmn-glass-lit relative h-[320px] overflow-hidden sm:h-[360px]"
                    >
                        <motion.img
                            style={{ y: imgY, scale: 1.08 }}
                            src="/mentoria-rodrigo.png"
                            alt="Rodrigo Bruns, atuante na preparação de goleiros do Red Bull Bragantino"
                            loading="lazy"
                            className="h-full w-full object-cover object-top will-change-transform"
                        />

                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent px-5 pb-5 pt-20 sm:px-6 sm:pb-6">
                            <p className="font-display text-2xl font-bold uppercase leading-none tracking-tight text-ice sm:text-3xl md:text-4xl">
                                Rodrigo{" "}
                                <span className="text-electric-blue">Bruns</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Texto, em primeira pessoa + credenciais */}
                    <div className="flex flex-col">
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-lg leading-[1.35] tracking-tight text-ice sm:text-xl md:text-[1.65rem]"
                        >
                            Meu trabalho é usar a minha experiência para te ajudar a evoluir.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                            className="mt-6 text-[14px] leading-relaxed text-ice/70 sm:mt-7 sm:text-sm md:text-base"
                        >
                            <p>
                                São mais de 20 anos de experiência. Como
                                coordenador da preparação de goleiros, tenho trabalhado lado a
                                lado com goleiros e preparadores, e hoje trago esse
                                conhecimento para ajudar quem enfrenta a mesma
                                dificuldade que eu já enfrentei, quem se sente perdido
                                como eu já me senti. E dar aquele direcionamento que faz a
                                diferença na sua carreira e na sua metodologia.
                            </p>
                        </motion.div>

                        {/* Credenciais */}
                        <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-4 sm:gap-3">
                            {credenciais.map((c, i) => (
                                <motion.div
                                    key={c.valor}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.1 + i * 0.08,
                                        ease: "easeOut",
                                    }}
                                    className="cmn-glass min-w-0 px-2.5 py-3 sm:px-3 sm:py-4"
                                    style={{ borderRadius: "var(--cmn-r-md)" }}
                                >
                                    <p className="font-display text-sm font-bold uppercase leading-none tracking-tight text-electric-blue sm:text-[13px] md:text-base">
                                        {c.valor}
                                    </p>
                                    <p className="mt-1.5 text-[10px] leading-snug text-ice/45 sm:mt-2 sm:text-[10px]">
                                        {c.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
