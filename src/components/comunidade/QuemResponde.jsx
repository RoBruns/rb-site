"use client";

import { motion } from "framer-motion";

const credenciais = [
    { valor: "2019", label: "Preparador de goleiros do Red Bull Bragantino desde" },
    { valor: "+20", label: "Anos dedicados à formação de goleiros" },
    { valor: "Licença A", label: "Formação pela CBF" },
];

export function QuemResponde() {
    return (
        <section className="relative w-full bg-surface-dark py-28 md:py-40 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <img
                        src="/mentoria-rodrigo.png"
                        alt="Rodrigo Bruns, preparador de goleiros do Red Bull Bragantino"
                        className="w-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 border border-electric-blue/25 translate-x-3 translate-y-3 pointer-events-none" />
                </motion.div>

                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[11px] font-bold uppercase tracking-[0.3em] text-electric-blue"
                    >
                        Quem responde você
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-5 font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-5xl leading-[0.98]"
                    >
                        Rodrigo Bruns
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                        className="mt-7 space-y-5 text-base md:text-lg text-ice/70 leading-relaxed"
                    >
                        <p>
                            Ex-goleiro profissional, encerrou a carreira aos 26 anos para
                            se dedicar à formação de atletas. Desde 2019 comanda a
                            preparação de goleiros do Red Bull Bragantino, coordenando a
                            metodologia da base ao elenco profissional.
                        </p>
                        <p>
                            Fez parte da equipe campeã da Série B e do acesso à Série A em
                            2019. Sob o trabalho dele, Cleiton, Júlio César e Alex Alves
                            chegaram ao elenco profissional e a seleções de base.
                        </p>
                        <p className="text-ice/90 font-semibold">
                            É ele quem está no grupo respondendo, e é ele quem conduz o
                            encontro de todo mês.
                        </p>
                    </motion.div>

                    <div className="mt-10 grid grid-cols-3 gap-5 border-t border-white/10 pt-8">
                        {credenciais.map((c, i) => (
                            <motion.div
                                key={c.valor}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                            >
                                <p className="font-display font-bold text-electric-blue text-2xl md:text-3xl leading-none">
                                    {c.valor}
                                </p>
                                <p className="mt-2 text-[11px] text-ice/50 leading-snug">
                                    {c.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
