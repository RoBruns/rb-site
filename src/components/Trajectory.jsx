"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

export function Trajectory() {
    return (
        <section id="trajectory" data-theme="dark" className="relative w-full min-h-[100svh] flex flex-col justify-center py-20 bg-obsidian text-ice overflow-hidden">
            {/* Abstract Geometry Background - Hidden on mobile for perf */}
            <div className="hidden md:block absolute top-0 right-0 w-[40vw] h-full bg-gradient-to-l from-electric-blue/5 to-transparent pointer-events-none" />
            <div className="hidden md:block absolute -left-[20vw] top-[20%] w-[50vw] h-[50vw] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col"
                >
                    {/* Header Section */}
                    <div className="flex flex-col gap-6 mb-24 max-w-5xl">
                        <motion.div variants={itemVariants} className="flex items-center gap-6">
                            <div className="w-12 h-[2px] bg-electric-blue" />
                            <h3 className="font-sans uppercase tracking-[0.2em] text-xs font-bold text-electric-blue">01 / A Trajetória</h3>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-5xl md:text-7xl lg:text-[96px] font-display font-bold uppercase tracking-normal leading-[1.05]"
                        >
                            De Curitiba ao <br className="hidden md:block" />
                            <span className="text-white/30">Alto Rendimento</span><span className="text-electric-blue">.</span>
                        </motion.h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        {/* Image Column */}
                        <motion.div variants={itemVariants} className="lg:col-span-4 w-full">
                            <div className="relative w-full aspect-[4/4.5] overflow-hidden liquid-glass-dark p-2 group hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-700">
                                <div className="w-full h-full relative overflow-hidden bg-obsidian/50">
                                    <div className="absolute inset-0 bg-electric-blue/10 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
                                    <img
                                        src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop"
                                        alt="Trajetória Fotografia"
                                        className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Column - Editorial Style */}
                        <div className="lg:col-span-8 flex flex-col gap-8 lg:py-4">
                            <motion.div variants={itemVariants} className="relative group flex flex-col gap-4 max-w-2xl">
                                <h4 className="text-xl md:text-2xl font-display uppercase tracking-wide text-electric-blue">O Começo</h4>
                                <p className="text-base md:text-lg text-white/80 font-sans leading-relaxed font-light">
                                    Nascido em Curitiba (PR), Rodrigo Bruns encerrou precocemente sua carreira como goleiro aos 26 anos para se dedicar integralmente à formação de atletas. Desde então, construiu uma carreira sólida no treinamento de goleiros, iniciando nas categorias de base do futebol paranaense e, posteriormente, integrando o projeto Red Bull no Brasil.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="w-full max-w-2xl h-[1px] bg-white/10" />

                            <motion.div variants={itemVariants} className="relative group flex flex-col gap-4 max-w-2xl">
                                <h4 className="text-xl md:text-2xl font-display uppercase tracking-wide text-electric-blue">A Consolidação</h4>
                                <p className="text-base md:text-lg text-white/80 font-sans leading-relaxed font-light">
                                    Ao longo da última década, passou a liderar a metodologia aplicada aos goleiros do Red Bull Bragantino, consolidando um modelo estruturado que conecta formação, alto rendimento e desenvolvimento contínuo.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
