"use client";

import { motion } from "framer-motion";
import {
    MessagesSquare,
    Video,
    GraduationCap,
    Infinity as InfinityIcon,
} from "lucide-react";
import { CheckoutButton } from "./CheckoutButton";
import { PRICE_CASH } from "./constants";

const inclui = [
    {
        icon: MessagesSquare,
        titulo: "Comunidade em grupo de WhatsApp",
        desc: "Troca entre preparadores durante a assinatura ativa.",
    },
    {
        icon: MessagesSquare,
        titulo: "WhatsApp do Rodrigo",
        desc: "Acesso para dúvidas e conversas durante a assinatura ativa.",
    },
    {
        icon: Video,
        titulo: "Encontros",
        desc: "Um encontro individual de uma hora nos seis primeiros meses e encontro mensal da comunidade.",
    },
    {
        icon: GraduationCap,
        titulo: "Curso CIMO",
        desc: "Contexto, Intensidade, Mentalidade e Organização.",
    },
    {
        icon: GraduationCap,
        titulo: "Curso de carreira",
        desc: "Incluído durante a assinatura ativa.",
    },
    {
        icon: InfinityIcon,
        titulo: "Cursos e módulos liberados",
        desc: "Acesso aos conteúdos disponíveis e aos futuros liberados durante a assinatura ativa.",
    },
];

export function Oferta() {
    return (
        <section
            id="oferta"
            className="relative w-full scroll-mt-24 py-24 md:py-36"
        >

            <div className="relative z-10 mx-auto max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    <img
                        src="/pgar-logo.png"
                        alt="PGAR"
                        className="mx-auto h-8 w-auto opacity-85 md:h-10"
                    />
                    <h2 className="mt-7 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-6xl">
                        Seis meses para fortalecer{" "}
                        <span className="text-electric-blue">o seu método.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 28, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-glass-glow mt-14 overflow-hidden"
                >
                    <div className="grid md:grid-cols-[1.15fr_1fr]">
                        {/* O que inclui */}
                        <div className="border-b border-white/8 p-8 md:border-b-0 md:border-r md:p-10">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ice/40">
                                A assinatura
                            </p>

                            <p className="mt-4 text-sm leading-relaxed text-ice/60">
                                Entre para uma assinatura inicial de seis meses de formação,
                                troca e acompanhamento. Depois desse período, há possibilidade
                                de renovação.
                            </p>

                            <ul className="mt-7 space-y-5">
                                {inclui.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={item.titulo} className="flex items-start gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-electric-blue/25 bg-electric-blue/10">
                                                <Icon
                                                    className="h-4.5 w-4.5 text-electric-blue"
                                                    strokeWidth={2}
                                                />
                                            </span>
                                            <div>
                                                <p className="font-display text-base font-bold uppercase leading-tight tracking-tight text-ice">
                                                    {item.titulo}
                                                </p>
                                                <p className="mt-1 text-sm leading-relaxed text-ice/55">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Preço */}
                        <div className="flex flex-col items-center justify-center p-8 text-center md:p-10">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ice/40">
                                6 meses iniciais
                            </p>

                            <div className="mt-5">
                                <p className="text-sm font-medium text-ice/50">6x de</p>
                                <p className="font-display text-6xl font-bold leading-none text-electric-blue md:text-7xl">
                                    R$ 55,18
                                </p>
                                <p className="mt-4 text-[15px] text-ice/65">
                                    ou {PRICE_CASH} à vista
                                </p>
                            </div>

                            <div className="mt-8 w-full">
                                <CheckoutButton className="w-full">
                                    Entrar na Comunidade
                                </CheckoutButton>
                            </div>

                            <p className="mt-5 max-w-xs text-xs leading-relaxed text-ice/40">
                                Assinatura inicial de seis meses. Após esse período, a
                                renovação pode ser feita conforme as condições que serão
                                informadas. Os benefícios listados dependem de assinatura ativa.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
