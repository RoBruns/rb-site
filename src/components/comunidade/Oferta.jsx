"use client";

import { motion } from "framer-motion";
import {
    MessagesSquare,
    MessageCircle,
    Video,
    UserRound,
    GraduationCap,
    Compass,
    Infinity as InfinityIcon,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import { CheckoutButton } from "./CheckoutButton";
import {
    PRICE_CASH,
    PRICE_INSTALLMENT_VALUE,
    PRICE_MENTORIA_GRUPO,
    LANCAMENTO_ATIVO,
    LANCAMENTO_SELO,
    LANCAMENTO_NOTA,
} from "./constants";

/*  Na ordem do que pesa na decisão. Sem valores riscados: a âncora
    é o nível acima, que existe e tem preço público.                   */
const inclui = [
    {
        icon: UserRound,
        titulo: "Encontro individual",
        desc: "Cerca de uma hora com o Rodrigo. A pauta é sua.",
    },
    {
        icon: MessageCircle,
        titulo: "Contato direto com o Rodrigo",
        desc: "WhatsApp para trocar mensagem durante os seis meses.",
    },
    {
        icon: MessagesSquare,
        titulo: "Grupo de preparadores",
        desc: "Profissional, base, feminino, escolas de goleiros e exterior no mesmo grupo.",
    },
    {
        icon: Video,
        titulo: "Encontros ao vivo",
        desc: "Um por mês, com temas do dia a dia e convidados. Tudo gravado.",
    },
    {
        icon: Compass,
        titulo: "Diagnóstico Profissional",
        desc: "Onde você está, onde quer chegar e o plano para chegar lá.",
    },
    {
        icon: GraduationCap,
        titulo: "Metodologia CIMO",
        desc: "Contexto, Intensidade, Mentalidade e Organização, o módulo inteiro.",
    },
    {
        icon: InfinityIcon,
        titulo: "O que for lançado",
        desc: "Todo material novo enquanto você for assinante.",
    },
];

export function Oferta() {
    return (
        <section
            id="oferta"
            className="relative w-full scroll-mt-20 py-12 sm:py-20 md:scroll-mt-24 md:py-28"
        >

            <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6">
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
                        className="mx-auto h-7 w-auto opacity-85 sm:h-8 md:h-10"
                    />
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ice/45 sm:text-xs">
                        Preparação de Goleiros de Alto Rendimento
                    </p>
                    <h2 className="mt-6 font-display text-[clamp(1.95rem,8.6vw,2.75rem)] font-bold uppercase leading-[1] tracking-tight text-ice sm:mt-7 md:text-6xl md:leading-[0.98]">
                        Seis meses,{" "}
                        <span className="text-electric-blue">tudo junto.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 28, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-glass-glow mt-10 overflow-hidden sm:mt-14"
                >
                    <div className="grid md:grid-cols-[1.15fr_1fr]">
                        {/* O que inclui */}
                        <div className="border-b border-white/10 p-6 sm:p-8 md:border-b-0 md:border-r md:p-10">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ice/40 sm:text-[11px] sm:tracking-[0.24em]">
                                A assinatura
                            </p>

                            <p className="mt-4 text-sm leading-relaxed text-ice/60">
                                Seis meses que começam no dia da sua compra. Sem turma e
                                sem data de início. No fim do período você decide se renova.
                            </p>

                            <ul className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
                                {inclui.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={item.titulo} className="flex items-start gap-4">
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-electric-blue/25 bg-electric-blue/10 sm:h-10 sm:w-10">
                                                <Icon
                                                    className="h-4.5 w-4.5 text-electric-blue"
                                                    strokeWidth={2}
                                                />
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-display text-[15px] font-bold uppercase leading-tight tracking-tight text-ice sm:text-base">
                                                    {item.titulo}
                                                </p>
                                                <p className="mt-1 text-[13px] leading-relaxed text-ice/55 sm:text-sm">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Preço */}
                        <div className="flex flex-col items-center justify-center p-6 text-center sm:p-8 md:p-10">

                            {LANCAMENTO_ATIVO && (
                                <div className="mb-5 flex items-center gap-2 rounded-full border border-electric-blue/40 bg-electric-blue/15 px-4 py-1.5">
                                    <Sparkles
                                        className="h-3.5 w-3.5 shrink-0 text-electric-blue"
                                        strokeWidth={2.2}
                                    />
                                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-electric-blue sm:text-xs">
                                        {LANCAMENTO_SELO}
                                    </p>
                                </div>
                            )}

                            {/* Parcela e total sempre juntos: a parcela tem
                                juros (pagos pelo cliente) e o total à vista
                                precisa estar visível ao lado dela. */}
                            <div>
                                <p className="text-sm font-medium text-ice/50">6x de</p>
                                <p className="font-display text-[clamp(3rem,14vw,3.75rem)] font-bold leading-none text-electric-blue md:text-7xl">
                                    {PRICE_INSTALLMENT_VALUE}
                                </p>
                                <p className="mt-4 text-[15px] text-ice/65">
                                    ou {PRICE_CASH} à vista
                                </p>
                            </div>

                            <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-ice/55">
                                Menos de R$ 150 por mês, mais ou menos o preço de um livro
                                técnico. A Mentoria em grupo, com o dobro de encontros e três
                                individuais, custa {PRICE_MENTORIA_GRUPO}.
                            </p>

                            {LANCAMENTO_ATIVO && (
                                <p className="mt-4 max-w-xs text-[12px] leading-relaxed text-ice/50">
                                    {LANCAMENTO_NOTA}
                                </p>
                            )}

                            <div className="mt-8 w-full">
                                <CheckoutButton className="w-full">
                                    Quero entrar na Comunidade
                                </CheckoutButton>
                            </div>

                            <div className="mt-5 flex items-center gap-2 rounded-full border border-electric-blue/25 bg-electric-blue/10 px-4 py-2">
                                <ShieldCheck
                                    className="h-5 w-5 shrink-0 text-electric-blue"
                                    strokeWidth={2}
                                />
                                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-electric-blue sm:text-xs">
                                    7 dias para desistir, reembolso total
                                </p>
                            </div>

                            <p className="mt-4 max-w-xs text-[11px] leading-relaxed text-ice/40 sm:text-xs">
                                Nos primeiros 7 dias, você pede o dinheiro de volta sem
                                precisar explicar o motivo. Assinatura de seis meses, com
                                renovação automática no cartão. No Pix, a renovação chega
                                por e-mail.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
