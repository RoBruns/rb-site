"use client";

import { motion } from "framer-motion";
import {
    MessagesSquare,
    Video,
    GraduationCap,
    Infinity as InfinityIcon,
    ShieldCheck,
    Tag,
} from "lucide-react";
import { CheckoutButton } from "./CheckoutButton";
import {
    PRICE_CASH,
    PRICE_INSTALLMENT_VALUE,
    PROMO_VISIVEL,
    PROMO_CUPOM,
    PROMO_PRICE_CASH,
    PROMO_PRICE_INSTALLMENT_VALUE,
    VAGAS_RESTANTES,
    VAGAS_TOTAIS,
} from "./constants";

/*  Cada item carrega o próprio valor de referência. O total riscado
    ao lado é a soma de `valor` — mexeu aqui, o ancoramento acompanha
    sozinho. `valor: null` fica fora da conta (caso dos bônus).          */
const inclui = [
    {
        icon: MessagesSquare,
        titulo: "Grupo de WhatsApp",
        desc: "O dia a dia da comunidade, com preparadores de contextos diferentes do seu.",
        valor: 200,
    },
    {
        icon: Video,
        titulo: "Encontros ao vivo",
        desc: "Um encontro individual mais encontros mensais em grupo.",
        valor: 500,
    },
    {
        icon: GraduationCap,
        titulo: "Metodologia CIMO",
        desc: "Os quatro pilares do método: Contexto, Intensidade, Mentalidade e Organização.",
        valor: 1000,
    },
    {
        icon: GraduationCap,
        titulo: "Diagnóstico Profissional",
        desc: "Um raio-x do mercado para te guiar ao próximo nível.",
        valor: 500,
    },
    {
        icon: InfinityIcon,
        titulo: "+ Bônus",
        desc: "Acesso a todo material lançado enquanto você for assinante.",
        valor: null,
        valorLabel: "Sem preço",
    },
];

const totalInclui = inclui.reduce((soma, item) => soma + (item.valor || 0), 0);

const brl = (n) => `R$ ${n.toLocaleString("pt-BR")}`;

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
                                Seis meses que começam no dia da sua compra. No fim do
                                período você decide se renova.
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
                                                <div className="flex items-baseline justify-between gap-3">
                                                    <p className="font-display text-[15px] font-bold uppercase leading-tight tracking-tight text-ice sm:text-base">
                                                        {item.titulo}
                                                    </p>
                                                    <p className="shrink-0 font-display text-[13px] font-bold leading-none tracking-tight text-ice/35 line-through decoration-ice/25 sm:text-sm">
                                                        {item.valor ? brl(item.valor) : item.valorLabel}
                                                    </p>
                                                </div>
                                                <p className="mt-1 text-[13px] leading-relaxed text-ice/55 sm:text-sm">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Fecha a conta: soma dos itens acima */}
                            <div className="mt-6 flex items-baseline justify-between gap-3 border-t border-white/10 pt-5 sm:mt-7">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ice/40 sm:text-xs sm:tracking-[0.2em]">
                                    Valor separado
                                </p>
                                <p className="font-display text-lg font-bold leading-none tracking-tight text-ice/40 line-through decoration-ice/30 sm:text-xl">
                                    {brl(totalInclui)}
                                </p>
                            </div>
                        </div>

                        {/* Preço */}
                        <div className="flex flex-col items-center justify-center p-6 text-center sm:p-8 md:p-10">

                            {/* Selo de vagas: só aparece enquanto o lote existe */}
                            {PROMO_VISIVEL && (
                                <div className="mb-5 flex items-center gap-2 rounded-full border border-electric-blue/40 bg-electric-blue/15 px-4 py-1.5">
                                    <span className="relative flex h-2 w-2 shrink-0">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-blue opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-blue" />
                                    </span>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-electric-blue sm:text-xs">
                                        {VAGAS_RESTANTES === 1
                                            ? "Última vaga com desconto"
                                            : VAGAS_RESTANTES + " de " + VAGAS_TOTAIS + " vagas com desconto"}
                                    </p>
                                </div>
                            )}

                            <div>
                                {/* Âncora: valor separado dos itens */}
                                <p className="font-display text-lg font-bold leading-none tracking-tight text-ice/30 line-through decoration-ice/25 sm:text-xl">
                                    {brl(totalInclui)}
                                </p>

                                {PROMO_VISIVEL ? (
                                    <>
                                        {/* Preço cheio, que passa a valer do 11º em diante */}
                                        <p className="mt-3 text-[13px] leading-relaxed text-ice/45 sm:text-sm">
                                            Depois das {VAGAS_TOTAIS} primeiras vagas:{" "}
                                            <span className="font-semibold text-ice/60 line-through decoration-ice/40">
                                                {PRICE_CASH}
                                            </span>
                                        </p>

                                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-electric-blue/80 sm:text-xs sm:tracking-[0.2em]">
                                            Com o cupom
                                        </p>
                                        <p className="mt-3 text-sm font-medium text-ice/50">6x de</p>
                                        <p className="font-display text-[clamp(3rem,14vw,3.75rem)] font-bold leading-none text-electric-blue md:text-7xl">
                                            {PROMO_PRICE_INSTALLMENT_VALUE}
                                        </p>
                                        <p className="mt-4 text-[15px] text-ice/65">
                                            ou {PROMO_PRICE_CASH} à vista
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-electric-blue/80 sm:text-xs sm:tracking-[0.2em]">
                                            Por
                                        </p>
                                        <p className="mt-3 text-sm font-medium text-ice/50">6x de</p>
                                        <p className="font-display text-[clamp(3rem,14vw,3.75rem)] font-bold leading-none text-electric-blue md:text-7xl">
                                            {PRICE_INSTALLMENT_VALUE}
                                        </p>
                                        <p className="mt-4 text-[15px] text-ice/65">
                                            ou {PRICE_CASH} à vista
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* O cupom precisa ficar óbvio: sem ele, não há desconto */}
                            {PROMO_VISIVEL && (
                                <div className="mt-6 w-full max-w-xs">
                                    <div className="flex items-center justify-center gap-2.5 rounded-xl border border-dashed border-electric-blue/45 bg-electric-blue/[0.07] px-4 py-3">
                                        <Tag
                                            className="h-4 w-4 shrink-0 text-electric-blue"
                                            strokeWidth={2}
                                        />
                                        <p className="text-[13px] leading-tight text-ice/70">
                                            Cupom{" "}
                                            <strong className="font-display font-bold uppercase tracking-wide text-electric-blue">
                                                {PROMO_CUPOM}
                                            </strong>
                                        </p>
                                    </div>
                                    <p className="mt-2 text-[11px] leading-relaxed text-ice/45">
                                        Já aplicado no checkout. O desconto vale em todas as
                                        mensalidades, inclusive nas renovações.
                                    </p>
                                </div>
                            )}

                            <div className="mt-8 w-full">
                                <CheckoutButton className="w-full">
                                    Entrar na Comunidade
                                </CheckoutButton>
                            </div>

                            <div className="mt-5 flex items-center gap-2 rounded-full border border-electric-blue/25 bg-electric-blue/10 px-4 py-2">
                                <ShieldCheck
                                    className="h-5 w-5 shrink-0 text-electric-blue"
                                    strokeWidth={2}
                                />
                                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-electric-blue sm:text-xs">
                                    7 dias de garantia, reembolso total
                                </p>
                            </div>

                            <p className="mt-4 max-w-xs text-[11px] leading-relaxed text-ice/40 sm:text-xs">
                                Assinatura inicial de seis meses. Com renovação automática no cartão.
                                Para pagamento no Pix, a renovação chegará por e-mail. Reembolso
                                garantido nos primeiros 7 dias da sua primeira assinatura.
                                {PROMO_VISIVEL &&
                                    " O cupom garante o valor promocional também nas renovações, enquanto a assinatura seguir ativa."}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
