"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const credenciais = [
    { valor: "+20", label: "anos no desenvolvimento de goleiros" },
    { valor: "Licença A", label: "Treinador de Goleiros · CBF" },
    { valor: "Desde 2009", label: "projeto Red Bull" },
];

export function QuemResponde() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

    return (
        <section className="relative w-full overflow-hidden bg-obsidian py-24 md:py-36">
            <div className="cmn-mesh" />

            {/* Nome em marca-d'água, como na página da mentoria */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-2 select-none whitespace-nowrap text-center font-display text-[18vw] font-bold uppercase leading-none tracking-tighter text-white/[0.022]"
            >
                Rodrigo Bruns
            </span>

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[11px] font-semibold uppercase tracking-[0.28em] text-electric-blue"
                >
                    Quem está do outro lado da tela
                </motion.p>

                <div className="mt-10 grid items-stretch gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
                    {/* Retrato */}
                    <div className="flex flex-col">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="cmn-glass-lit relative min-h-[420px] flex-1 overflow-hidden"
                        >
                            <motion.img
                                style={{ y: imgY, scale: 1.08 }}
                                src="/mentoria-rodrigo.png"
                                alt="Rodrigo Bruns, coordenador da preparação de goleiros do Red Bull Bragantino"
                                className="h-full w-full object-cover object-top will-change-transform"
                            />

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent px-6 pb-6 pt-20">
                                <p className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-ice md:text-4xl">
                                    Rodrigo{" "}
                                    <span className="text-electric-blue">Bruns</span>
                                </p>
                                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ice/45">
                                    Coordenador da preparação de goleiros
                                </p>
                            </div>
                        </motion.div>

                        {/* Credenciais */}
                        <div className="mt-4 grid grid-cols-3 gap-3">
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
                                    className="cmn-glass px-4 py-4"
                                    style={{ borderRadius: "var(--cmn-r-md)" }}
                                >
                                    <p className="font-display text-base font-bold uppercase leading-none tracking-tight text-electric-blue md:text-lg">
                                        {c.valor}
                                    </p>
                                    <p className="mt-2 text-[11px] leading-snug text-ice/45">
                                        {c.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Texto, em primeira pessoa */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-xl leading-[1.3] tracking-tight text-ice md:text-[1.65rem]"
                        >
                            Minha trajetória no futebol começou dentro de campo, como atleta
                            profissional. Ao encerrar a carreira de jogador, encontrei uma
                            nova missão: desenvolver goleiros e preparadores de goleiros.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                            className="mt-7 space-y-4 text-sm leading-relaxed text-ice/70 md:text-base"
                        >
                            <p>
                                Formado em Educação Física, especialista em Treinamento,
                                Técnica e Tática Desportiva e Licença A de Treinador de
                                Goleiros da CBF, construí minha experiência ao longo de mais
                                de 20 anos dedicados ao desenvolvimento de goleiros.
                            </p>
                            <p>
                                Desde 2009, faço parte do projeto Red Bull, contribuindo para
                                a construção de uma metodologia que conecta todas as etapas da
                                formação, da iniciação ao futebol profissional. Nesse período,
                                participei do desenvolvimento de atletas que alcançaram o mais
                                alto nível do futebol, incluindo convocações para seleções
                                nacionais.
                            </p>
                            <p>
                                Além da atuação prática no campo, também contribuo para a
                                formação de profissionais como palestrante em congressos,
                                cursos e programas nacionais e internacionais, com destaque
                                para as Licenças de Treinadores de Goleiros da CBF Academy.
                            </p>
                            <p className="text-ice/85">
                                Na Comunidade, sigo com o mesmo propósito que me trouxe até
                                aqui: compartilhar conhecimento, desenvolver pessoas e
                                contribuir para a evolução de goleiros e preparadores de
                                goleiros. Sou eu quem responde no grupo e quem conduz o
                                encontro de todo mês.
                            </p>
                        </motion.div>

                        <motion.blockquote
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="mt-9 border-l-2 border-electric-blue pl-6 md:pl-8"
                        >
                            <p className="font-display text-xl uppercase leading-snug tracking-tight text-ice md:text-2xl">
                                "Não há atalhos. Desempenho é resultado de método,
                                repetição, análise e trabalho contínuo."
                            </p>
                        </motion.blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
