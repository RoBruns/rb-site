"use client";

import { motion } from "framer-motion";

const credenciais = [
    { valor: "Licença A", label: "Formação pela CBF" },
    { valor: "Série B 2019", label: "Campeão e acesso à Série A" },
    { valor: "Base ao profissional", label: "Uma única metodologia" },
];

export function QuemResponde() {
    return (
        <section className="relative w-full overflow-hidden bg-obsidian py-24 md:py-36">
            <div className="cmn-mesh" />

            <div className="relative z-10 mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-glass-lit overflow-hidden"
                >
                    <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                        {/* Foto */}
                        <div className="relative min-h-[280px] md:min-h-full">
                            <img
                                src="/comunidade-rodrigo-rb.png"
                                alt="Rodrigo Bruns, preparador de goleiros do Red Bull Bragantino"
                                className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian/60 md:to-obsidian/80" />
                        </div>

                        {/* Texto */}
                        <div className="p-8 md:p-11">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/pgar-logo.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="h-5 w-auto opacity-70"
                                />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-electric-blue">
                                    Quem responde você
                                </span>
                            </div>

                            <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-none tracking-tight text-ice md:text-5xl">
                                Rodrigo Bruns
                            </h2>

                            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ice/70 md:text-base">
                                <p>
                                    Ex-goleiro profissional, encerrou a carreira aos 26 anos
                                    para se dedicar à formação de atletas. Desde 2019 comanda
                                    a preparação de goleiros do Red Bull Bragantino,
                                    coordenando a metodologia da base ao elenco profissional.
                                </p>
                                <p>
                                    Sob o trabalho dele, Cleiton, Júlio César e Alex Alves
                                    chegaram ao elenco profissional e a seleções de base.
                                </p>
                                <p className="font-semibold text-ice/90">
                                    É ele quem está no grupo respondendo, e é ele quem conduz
                                    o encontro de todo mês.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-2.5">
                                {credenciais.map((c) => (
                                    <div
                                        key={c.valor}
                                        className="cmn-pill px-4 py-2.5"
                                    >
                                        <p className="text-xs font-bold uppercase tracking-tight text-electric-blue">
                                            {c.valor}
                                        </p>
                                        <p className="mt-0.5 text-[10px] leading-none text-ice/45">
                                            {c.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
