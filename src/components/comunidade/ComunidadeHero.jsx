"use client";

import { motion } from "framer-motion";
import { CheckoutButton } from "./CheckoutButton";
import { PRICE_CASH, PRICE_INSTALLMENT } from "./constants";

const rise = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const provas = [
    { valor: "Desde 2019", label: "no Red Bull Bragantino" },
    { valor: "+20 anos", label: "no desenvolvimento de goleiros" },
    { valor: "Licença A", label: "Treinador de Goleiros · CBF" },
];

export function ComunidadeHero() {
    return (
        <section className="relative flex min-h-[100svh] w-full flex-col justify-center pt-28 pb-20 sm:pb-16 md:pt-32 md:pb-20">
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
                    className="absolute -bottom-[6%] left-1/2 h-[62%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom opacity-30 md:bottom-0 md:left-[68%] md:h-[82%] md:-translate-x-1/2 md:opacity-100"
                />

                {/* Escurece o lado do texto, para leitura. Translúcido. */}
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/70 to-transparent md:via-obsidian/35" />

                {/* Dissolve a base do Rodrigo. A máscara da camada faz o
                    resto do trabalho no fim da seção. */}
                <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-obsidian/90 via-obsidian/45 to-transparent" />
            </div>

            {/* ---------- Conteúdo ---------- */}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
                <div className="max-w-2xl">
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
                        <span className="text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-ice/60 sm:text-[11px] sm:tracking-[0.24em]">
                            Comunidade para preparadores de goleiros
                        </span>
                    </motion.div>

                    <motion.h1
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-7 font-display text-[clamp(2.35rem,12.5vw,3.75rem)] font-bold uppercase leading-[0.92] tracking-tight text-ice md:text-7xl lg:text-[78px]"
                    >
                        Construa método para
                        <br />
                        <span className="text-electric-blue">
                            decidir melhor no campo.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-7 max-w-xl text-base leading-relaxed text-ice/70 md:text-lg"
                    >
                        Transforme referências soltas em mais clareza para organizar o seu
                        trabalho, adaptar princípios ao seu contexto e defender suas
                        escolhas. Ao lado de Rodrigo Bruns e de outros preparadores, você
                        desenvolve critério e preparo profissional para os próximos passos.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 1, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                    >
                        <CheckoutButton>Entrar na Comunidade</CheckoutButton>
                        <div className="text-sm leading-tight text-ice/55">
                            <span className="font-semibold text-ice/80">
                                6 meses iniciais · {PRICE_CASH} à vista ou {PRICE_INSTALLMENT}
                            </span>
                            <br />
                            Comunidade, cursos, encontros e WhatsApp disponíveis enquanto a
                            assinatura estiver ativa.
                        </div>
                    </motion.div>

                    <motion.ul
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-10 grid max-w-lg grid-cols-3 gap-2 sm:mt-11 sm:gap-3"
                    >
                        {provas.map((p) => (
                            <li
                                key={p.label}
                                className="cmn-glass-lit cmn-lift min-w-0 px-3 py-3 sm:px-4 sm:py-4"
                                style={{ borderRadius: "var(--cmn-r-md)" }}
                            >
                                <p className="font-display text-xl font-bold leading-none text-electric-blue sm:text-2xl md:text-3xl">
                                    {p.valor}
                                </p>
                                <p className="mt-2 text-[10px] leading-snug text-ice/50 sm:text-[11px]">
                                    {p.label}
                                </p>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
}
