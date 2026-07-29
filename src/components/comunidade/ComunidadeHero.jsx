"use client";

import { motion } from "framer-motion";
import { CheckoutButton } from "./CheckoutButton";
import { PRICE_CASH, PRICE_INSTALLMENT } from "./constants";

const rise = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

/* Provas que flutuam sobre a foto, em vidro. Substituem o bloco de
   texto corrido do hero antigo. */
const provas = [
    { valor: "2019", label: "No Red Bull Bragantino desde" },
    { valor: "+20", label: "Anos formando goleiros" },
    { valor: "3", label: "Goleiros no profissional" },
];

export function ComunidadeHero() {
    return (
        <section className="relative w-full pt-28 pb-20 md:pt-36 md:pb-28">


            <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
                {/* ---------- Coluna de texto ---------- */}
                <div>
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="cmn-pill inline-flex items-center gap-2.5 px-4 py-2"
                    >
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-blue/70" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric-blue" />
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ice/60">
                            Comunidade de preparadores de goleiro
                        </span>
                    </motion.div>

                    <motion.h1
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 font-display text-[13vw] font-bold uppercase leading-[0.92] tracking-tight text-ice sm:text-6xl md:text-7xl lg:text-[76px]"
                    >
                        Nunca mais treine
                        <br />
                        <span className="text-electric-blue">sozinho.</span>
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 max-w-xl text-base leading-relaxed text-ice/70 md:text-lg"
                    >
                        Você deixa de adivinhar se o treino está certo e passa a ter
                        critério pra defender cada escolha sua. Do lado de quem prepara os
                        goleiros do Red Bull Bragantino, e de outros preparadores que vivem
                        o que você vive.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 1, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                    >
                        <CheckoutButton>Entrar na Comunidade</CheckoutButton>
                        <div className="text-sm leading-tight text-ice/55">
                            <span className="font-semibold text-ice/80">
                                {PRICE_INSTALLMENT}
                            </span>
                            <br />
                            ou {PRICE_CASH} à vista
                        </div>
                    </motion.div>

                    {/* Provas em vidro */}
                    <motion.ul
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-12 grid max-w-lg grid-cols-3 gap-3"
                    >
                        {provas.map((p) => (
                            <li
                                key={p.label}
                                className="cmn-glass-lit cmn-lift px-4 py-4"
                                style={{ borderRadius: "var(--cmn-r-md)" }}
                            >
                                <p className="font-display text-2xl font-bold leading-none text-electric-blue md:text-3xl">
                                    {p.valor}
                                </p>
                                <p className="mt-2 text-[11px] leading-snug text-ice/50">
                                    {p.label}
                                </p>
                            </li>
                        ))}
                    </motion.ul>
                </div>

                {/* ---------- Coluna da foto ---------- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative hidden lg:block"
                >
                    <div
                        className="cmn-glass-lit relative aspect-[4/5] overflow-hidden"
                        style={{ borderRadius: "var(--cmn-r-xl)" }}
                    >
                        <img
                            src="/mentoria-training.png"
                            alt="Rodrigo Bruns em campo, antes de um jogo, preparando o aquecimento dos goleiros"
                            className="h-full w-full object-cover object-[55%_center]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/10 to-transparent" />
                    </div>

                    {/* Etiqueta flutuante sobre a foto */}
                    <div
                        className="cmn-glass cmn-solid absolute -bottom-5 left-6 right-10 px-5 py-3.5"
                        style={{ borderRadius: "var(--cmn-r-md)" }}
                    >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-electric-blue">
                            Quem está do outro lado
                        </p>
                        <p className="mt-1 font-display text-lg font-bold uppercase leading-none tracking-tight text-ice">
                            Rodrigo Bruns
                        </p>
                        <p className="mt-1.5 text-[11px] leading-snug text-ice/45">
                            Coordenador da preparação de goleiros do Red Bull Bragantino
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
