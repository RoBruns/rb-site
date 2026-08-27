"use client";

import { motion } from "framer-motion";
import { CheckoutButton } from "./CheckoutButton";

const rise = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export function ComunidadeHero() {
    return (
        <section className="relative flex w-full flex-col justify-center pt-24 pb-14 sm:min-h-[100svh] sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
            {/* ---------- Fundo do hero, tela toda ----------

                REGRA: nada aqui pode ser opaco. A página tem uma
                atmosfera contínua por baixo; qualquer camada sólida de
                obsidian cria um degrau de cor onde ela termina, e esse
                degrau é a linha horizontal que aparecia entre o hero e a
                seção seguinte. Só se usa `to-transparent` a partir de
                cores translúcidas.                                     */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
                style={{
                    /* A camada inteira desaparece antes de chegar ao fim
                       da seção. É isso que elimina a linha horizontal:
                       não existe borda, existe desaparecimento. */
                    maskImage:
                        "linear-gradient(to bottom, #000 0%, #000 55%, transparent 96%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, #000 0%, #000 55%, transparent 96%)",
                }}
            >
                {/* Imagem de contexto, dessaturada e forçada para azul.
                    Dá textura ao fundo sem competir com o Rodrigo. */}
                <div
                    className="absolute inset-0 opacity-[0.3]"
                    style={{ filter: "grayscale(1) brightness(0.75)" }}
                >
                    <img
                        src="/mentoria-hero.jpeg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                {/* Tinta azul: em cima do cinza, vira monocromático azul */}
                <div className="absolute inset-0 bg-[#1a3a6b] opacity-55 mix-blend-color" />

                {/* Glow atrás do Rodrigo, dá destaque e separa do fundo */}
                <div className="absolute bottom-[2%] left-1/2 h-[70vh] w-[92vw] max-w-[820px] -translate-x-1/2 rounded-full bg-electric-blue/22 blur-[130px] md:left-[68%] md:w-[42vw]" />
                <div className="absolute bottom-[14%] left-1/2 h-[40vh] w-[60vw] max-w-[460px] -translate-x-1/2 rounded-full bg-electric-blue/18 blur-[80px] md:left-[68%] md:w-[24vw]" />

                {/* A foto. Zoom lento e contínuo. */}
                <motion.img
                    src="/comunidade-rodrigo-pgar.png"
                    alt=""
                    initial={{ scale: 1.07, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        opacity: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
                        scale: { duration: 16, ease: "easeOut" },
                    }}
                    className="absolute -bottom-[4%] left-1/2 h-[52%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom opacity-40 sm:h-[58%] sm:opacity-35 md:bottom-0 md:left-[68%] md:h-[82%] md:-translate-x-1/2 md:opacity-100"
                />

                {/* Escurece o lado do texto, para leitura. Translúcido. */}
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian/96 via-obsidian/82 to-obsidian/55 md:via-obsidian/35 md:to-transparent" />

                {/* Dissolve a base do Rodrigo. A máscara da camada faz o
                    resto do trabalho no fim da seção. */}
                <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-obsidian/90 via-obsidian/45 to-transparent" />
            </div>

            {/* ---------- Conteúdo ---------- */}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
                <div className="max-w-3xl">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="cmn-pill inline-flex max-w-full items-center gap-2 px-3 py-2 sm:gap-2.5 sm:px-4"
                    >
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-blue/70" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric-blue" />
                        </span>
                        <span className="text-[10px] font-semibold uppercase leading-none tracking-[0.14em] text-ice/60 sm:text-[11px] sm:tracking-[0.24em]">
                            Para preparadores de goleiros
                        </span>
                    </motion.div>

                    <motion.h1
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 font-display text-[clamp(2.1rem,9.6vw,3.5rem)] font-bold uppercase leading-[0.94] tracking-tight text-ice sm:mt-7 md:text-7xl md:leading-[0.92] lg:text-[78px]"
                    >
                        Treino não é chute.
                        <br />
                        <span className="text-electric-blue">
                            Aprenda com direção.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 max-w-xl text-[15px] leading-relaxed text-ice/70 sm:mt-7 sm:text-base md:text-lg"
                    >
                        Mais de 20 anos formando goleiros e preparadores, agora
                        reunidos em dois cursos e num grupo onde você pergunta,
                        discorda e testa. Você sai daqui com um jeito de pensar o
                        treino que funciona no seu clube, na sua categoria, com o
                        tempo que você tem.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 1, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 flex flex-col items-stretch gap-4 sm:mt-9 sm:flex-row sm:items-center"
                    >
                        <CheckoutButton className="w-full sm:w-auto">
                            Entrar na Comunidade
                        </CheckoutButton>
                        <div className="text-[13px] leading-snug text-ice/55 sm:text-sm">
                            Seis meses de comunidade, cursos e encontros.
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
