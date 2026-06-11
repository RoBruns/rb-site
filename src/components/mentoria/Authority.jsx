"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "+10", label: "anos à frente dos goleiros do Red Bull Bragantino" },
    { value: "+20", label: "anos dedicados à formação de atletas" },
    { value: "Licença A", label: "de treinador pela CBF" },
    { value: "Base ao pro", label: "uma só metodologia, do sub ao elenco principal" },
];

export function Authority() {
    return (
        <section className="relative w-full bg-obsidian border-t border-white/10 py-20 md:py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.value}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                            className="flex flex-col gap-2"
                        >
                            <span className="font-display font-bold text-3xl md:text-4xl text-electric-blue tracking-tight uppercase leading-none">
                                {s.value}
                            </span>
                            <span className="text-[13px] text-ice/55 leading-snug">{s.label}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mt-14 max-w-3xl text-base md:text-lg text-ice/70 leading-relaxed"
                >
                    Goleiros que passaram pelo meu trabalho hoje defendem o elenco profissional e
                    seleções de base. Entre eles{" "}
                    <span className="text-ice font-semibold">Cleiton</span>,{" "}
                    <span className="text-ice font-semibold">Júlio César</span> e{" "}
                    <span className="text-ice font-semibold">Alex Alves</span>. Em 2019, fui preparador
                    de goleiros titular na campanha do título da Série B e do acesso à Série A.
                </motion.p>
            </div>
        </section>
    );
}
