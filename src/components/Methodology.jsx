"use client";

import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const pillars = [
    {
        number: "01",
        title: "Técnica e Especificidade da Posição",
        description: "Treinamentos direcionados para aprimorar reflexo, posicionamento, jogo de pés, leitura de jogo e tomada de decisão."
    },
    {
        number: "02",
        title: "Desenvolvimento Mental",
        description: "Trabalho integrado com a psicologia esportiva para fortalecer controle emocional, concentração e confiança — aspectos decisivos."
    },
    {
        number: "03",
        title: "Integração ao Modelo Coletivo",
        description: "O treinamento do goleiro é pensado como parte estratégica do sistema de jogo, alinhando exigências individuais às necessidades táticas."
    }
];

export function Methodology() {
    return (
        <section id="methodology" data-theme="light" className="relative w-full py-32 px-6 bg-ice text-obsidian overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-24"
                >
                    <div className="flex items-center gap-6 mb-8 justify-center">
                        <h3 className="font-display uppercase tracking-[0.2em] text-xs font-bold text-electric-blue">02 / Metodologia</h3>
                        <div className="w-12 h-[1px] bg-electric-blue" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black uppercase tracking-tighter leading-none max-w-4xl">
                        Fundação, Estrutura, <span className="text-electric-blue">Performance.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.number}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                            className={cn(
                                "liquid-glass p-10 md:p-14 sharp-edge group relative block overflow-hidden",
                                "hover:-translate-y-4 transition-all duration-700 ease-[0.16,1,0.3,1] hover:shadow-2xl"
                            )}
                        >
                            {/* Card Background Premium CSS Texture - Hidden on mobile for perf */}
                            <div className="hidden md:block absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-obsidian/30 mix-blend-overlay border-none" />
                                <div
                                    className="absolute inset-0 opacity-[0.25] mix-blend-color-burn border-none"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                    }}
                                />
                            </div>

                            <div className="absolute top-0 right-0 bg-electric-blue text-white font-display text-xs tracking-widest uppercase font-bold px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 translate-y-[-100%] group-hover:translate-y-0">
                                PILAR {pillar.number}
                            </div>

                            <div className="relative z-10 text-5xl md:text-6xl font-display font-black text-obsidian/10 mb-8 group-hover:text-electric-blue/40 transition-colors duration-700">
                                {pillar.number}
                            </div>

                            <h4 className="relative z-10 text-2xl md:text-3xl font-display font-bold uppercase tracking-tight mb-4 leading-tight group-hover:text-electric-blue transition-colors duration-500">
                                {pillar.title}
                            </h4>

                            <p className="relative z-10 text-sm font-sans opacity-70 leading-relaxed font-medium">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="mt-16 liquid-glass sharp-edge p-8 border-l-4 border-l-electric-blue"
                >
                    <p className="text-lg md:text-xl font-medium tracking-wide leading-relaxed">
                        "A rotina envolve sessões específicas antes e após os treinos coletivos, análises detalhadas de desempenho, estudo de adversários e planejamento individualizado para cada atleta."
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
