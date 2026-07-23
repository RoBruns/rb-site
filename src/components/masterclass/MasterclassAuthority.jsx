"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const credentials = [
    { value: "+20", label: "anos formando goleiros" },
    { value: "+10", label: "anos no Red Bull Bragantino" },
    { value: "Licença A", label: "Treinador de Goleiros · CBF" },
];

export function MasterclassAuthority() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

    return (
        <section className="relative w-full bg-obsidian py-24 md:py-32 px-6 border-t border-white/10 overflow-hidden">
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
                    Quem vai te ensinar
                </motion.p>

                <div className="grid lg:grid-cols-[0.8fr_1fr] gap-12 lg:gap-20 items-stretch">
                    {/* Portrait */}
                    <div className="flex flex-col">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative flex-1 min-h-100 overflow-hidden"
                        >
                            <motion.img
                                style={{ y: imgY, scale: 1.06 }}
                                src="/mentoria-rodrigo.png"
                                alt="Rodrigo Bruns, preparador de goleiros do Red Bull Bragantino"
                                className="w-full h-full object-cover object-top will-change-transform grayscale-[0.15]"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent pt-16 pb-5 px-5">
                                <h2 className="font-display font-bold uppercase tracking-tight text-ice text-3xl md:text-4xl leading-none">
                                    Rodrigo <span className="text-electric-blue">Bruns</span>
                                </h2>
                                <p className="mt-1.5 font-display uppercase tracking-[0.2em] text-[10px] font-bold text-ice/50">
                                    Coordenador da Preparação de Goleiros
                                </p>
                            </div>
                        </motion.div>

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

                    {/* Copy */}
                    <div className="flex flex-col justify-center">
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-ice text-xl md:text-[1.65rem] leading-[1.3] tracking-tight"
                        >
                            Sou ex-goleiro profissional. Quando encerrei a carreira, entrei para o
                            outro lado: preparar goleiros e, com o tempo, preparar quem prepara.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                            className="mt-7 space-y-4 text-sm md:text-base text-ice/70 leading-relaxed"
                        >
                            <p>
                                Desde 2009 no projeto Red Bull, coordeno a preparação de goleiros do
                                Red Bull Bragantino da base ao profissional. Nesse percurso,
                                trabalhei no desenvolvimento de goleiros que chegaram ao mais alto nível do futebol.
                            </p>
                            <p>
                                Tenho Licença A de Treinador de Goleiros pela CBF e levo a metodologia
                                CIMO a congressos e cursos no Brasil e no exterior, incluindo as
                                Licenças da CBF Academy.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
