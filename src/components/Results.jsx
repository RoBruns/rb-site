"use client";

import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export function Results() {
    return (
        <section id="results" data-theme="dark" className="relative w-full py-32 px-6 bg-obsidian text-ice overflow-hidden">
            {/* Imagem de Fundo Abstrata (Estádio/Conquista) */}
            <div className="absolute top-0 right-0 w-[100%] md:w-[70%] h-full opacity-30 pointer-events-none mix-blend-luminosity">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-obsidian/60 to-obsidian z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-electric-blue/10 mix-blend-overlay z-10" />
                <img
                    src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=1200&auto=format&fit=crop"
                    alt="Resultados - Estádio"
                    className="w-full h-full object-cover blur-sm"
                />
            </div>

            {/* Abstract Background Element */}
            <div className="absolute left-[-10%] bottom-[-10%] w-[50vw] h-[50vw] bg-electric-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* Left Column - Big Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col"
                >
                    <div className="flex items-center gap-6 mb-8">
                        <h3 className="font-display uppercase tracking-[0.2em] text-xs font-bold text-electric-blue">03 / Resultados</h3>
                        <div className="w-12 h-[1px] bg-electric-blue" />
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] mb-10 drop-shadow-xl">
                        Impacto <br />
                        <span className="text-electric-blue md:border-b-8 border-b-4 border-electric-blue pb-2 inline-block leading-[0.8] mt-2">Real.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/80 font-sans leading-relaxed tracking-wide font-medium xl:max-w-lg">
                        O trabalho desenvolvido por Rodrigo Bruns esteve presente em momentos marcantes do clube, como o título da Série B do Campeonato Brasileiro e o acesso à Série A em 2019.
                    </p>
                </motion.div>

                {/* Right Column - Glass Cards */}
                <div className="flex flex-col gap-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className={cn("liquid-glass-dark p-10 md:p-14 sharp-edge relative overflow-hidden group hover:bg-white/5 transition-colors duration-700")}
                    >
                        <div className="absolute top-0 right-0 w-full h-[3px] bg-gradient-to-l from-electric-blue to-transparent transform origin-right scale-x-50 group-hover:scale-x-100 transition-transform duration-700" />
                        <p className="text-lg md:text-xl text-ice/90 font-sans leading-relaxed font-medium">
                            Participou diretamente da formação e evolução de goleiros que hoje atuam no elenco profissional e em seleções de base, contribuindo para a consolidação do clube no cenário nacional.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={cn("liquid-glass-dark p-10 md:p-14 sharp-edge border border-electric-blue/30 group hover:border-electric-blue/70 transition-colors duration-700")}
                    >
                        <p className="text-xs md:text-sm text-electric-blue font-display uppercase tracking-[0.3em] font-black mb-6">Reconhecimento</p>
                        <p className="text-xl md:text-2xl text-ice font-sans leading-relaxed font-bold tracking-tight">
                            Apontado como uma das referências na preparação de goleiros no Brasil, combinando experiência, visão estratégica e compromisso diário com a excelência.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
