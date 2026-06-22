"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const credentials = [
    { value: "+20", label: "anos no desenvolvimento de goleiros" },
    { value: "Licença A", label: "Treinador de Goleiros · CBF" },
    { value: "Desde 2009", label: "projeto Red Bull" },
];

export function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

    return (
        <section className="relative w-full bg-obsidian py-20 md:py-28 px-6 border-t border-white/10 overflow-hidden">
            {/* Oversized watermark name for authority */}
            <span
                aria-hidden
                className="pointer-events-none select-none absolute -top-4 md:top-6 left-0 right-0 text-center font-display font-bold uppercase tracking-tighter text-white/[0.025] text-[18vw] leading-none whitespace-nowrap"
            >
                Rodrigo Bruns
            </span>

            <div className="relative max-w-6xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-display uppercase tracking-[0.3em] text-xs font-bold text-electric-blue mb-8"
                >
                    Quem está do outro lado da tela
                </motion.p>

                <div className="grid lg:grid-cols-[0.85fr_1fr] gap-14 lg:gap-20 items-stretch">
                    {/* Portrait column — stretches to match the copy height */}
                    <div className="flex flex-col">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative flex-1 min-h-112 overflow-hidden"
                        >
                            <motion.img
                                style={{ y: imgY, scale: 1.06 }}
                                src="/mentoria-rodrigo.png"
                                alt="Rodrigo Bruns, treinador de goleiros do projeto Red Bull"
                                className="w-full h-full object-cover object-top will-change-transform grayscale-[0.15]"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                            {/* Name plate */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent pt-16 pb-5 px-5">
                                <h2 className="font-display font-bold uppercase tracking-tight text-ice text-3xl md:text-4xl leading-none">
                                    Rodrigo <span className="text-electric-blue">Bruns</span>
                                </h2>
                                <p className="mt-1.5 font-display uppercase tracking-[0.2em] text-[10px] font-bold text-ice/50">
                                    Cordenador da Preparação de Goleiros
                                </p>
                            </div>
                        </motion.div>

                        {/* Credentials strip */}
                        <div className="mt-px grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
                            {credentials.map((c, i) => (
                                <motion.div
                                    key={c.value}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                                    className="px-3 py-5"
                                >
                                    <p className="font-display font-bold uppercase tracking-tight text-electric-blue text-base md:text-lg leading-none">
                                        {c.value}
                                    </p>
                                    <p className="mt-2 text-[11px] text-ice/45 leading-snug">
                                        {c.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Copy column */}
                    <div>
                        {/* Lead paragraph — larger, sets the tone */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-ice text-xl md:text-[1.65rem] leading-[1.3] tracking-tight"
                        >
                            Minha trajetória no futebol começou dentro de campo, como atleta
                            profissional. Ao encerrar a carreira de jogador, encontrei uma nova
                            missão: desenvolver goleiros e preparadores de goleiros.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                            className="mt-7 space-y-4 text-sm md:text-base text-ice/70 leading-relaxed"
                        >
                            <p>
                                Formado em Educação Física, especialista em Treinamento, Técnica e
                                Tática Desportiva e Licença A de Treinador de Goleiros da CBF, construí
                                minha experiência ao longo de mais de 20 anos dedicados ao
                                desenvolvimento de goleiros.
                            </p>
                            <p>
                                Desde 2009, faço parte do projeto Red Bull, contribuindo para a
                                construção de uma metodologia que conecta todas as etapas da formação,
                                da iniciação ao futebol profissional. Nesse período, participei do
                                desenvolvimento de atletas que alcançaram o mais alto nível do futebol,
                                incluindo convocações para seleções nacionais.
                            </p>
                            <p>
                                Além da atuação prática no campo, também contribuo para a formação de
                                profissionais como palestrante em congressos, cursos e programas
                                nacionais e internacionais, com destaque para as Licenças de Treinadores
                                de Goleiros da CBF Academy.
                            </p>
                            <p>
                                Hoje, sigo com o mesmo propósito que me trouxe até aqui: compartilhar
                                conhecimento, desenvolver pessoas e contribuir para a evolução de
                                goleiros e preparadores de goleiros.
                            </p>
                        </motion.div>

                        <motion.blockquote
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="mt-9 border-l-2 border-electric-blue pl-6 md:pl-8"
                        >
                            <p className="font-display uppercase tracking-tight text-ice text-xl md:text-2xl leading-snug">
                                "Não há atalhos. Desempenho é resultado de método, repetição,
                                análise e trabalho contínuo."
                            </p>
                        </motion.blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
