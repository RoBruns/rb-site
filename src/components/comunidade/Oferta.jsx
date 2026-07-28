"use client";

import { motion } from "framer-motion";
import {
    MessagesSquare,
    Video,
    GraduationCap,
    Infinity as InfinityIcon,
} from "lucide-react";
import { CheckoutButton } from "./CheckoutButton";
import { PRICE_CASH, PERIOD_LABEL } from "./constants";

const inclui = [
    {
        icon: MessagesSquare,
        titulo: "Grupo com o Rodrigo",
        desc: "Suas dúvidas respondidas por quem prepara goleiro na Série A",
    },
    {
        icon: Video,
        titulo: "Encontro ao vivo todo mês",
        desc: "Metodologia, carreira e casos reais, enquanto você for membro",
    },
    {
        icon: GraduationCap,
        titulo: "Curso de metodologia completo",
        desc: "Ciclos de treino, aprendizado e condicionamento do goleiro",
    },
    {
        icon: InfinityIcon,
        titulo: "Todos os cursos futuros",
        desc: "Todo curso novo entra na sua assinatura sem custo adicional",
    },
];

export function Oferta() {
    return (
        <section
            id="oferta"
            className="relative w-full bg-obsidian py-28 md:py-40 px-6 overflow-hidden scroll-mt-24"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] max-w-[900px] bg-electric-blue/10 blur-[150px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98]"
                >
                    Menos de <span className="text-electric-blue">R$ 2 por dia</span> para
                    parar de trabalhar sozinho
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mt-14"
                >
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 border border-electric-blue/25 translate-x-3 translate-y-3 pointer-events-none"
                    />

                    <div className="relative liquid-glass-dark border border-white/10 p-7 md:p-10">
                        <ul className="space-y-5">
                            {inclui.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.titulo} className="flex gap-4 items-start">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-electric-blue/30 bg-electric-blue/10">
                                            <Icon
                                                className="h-5 w-5 text-electric-blue"
                                                strokeWidth={2}
                                            />
                                        </span>
                                        <div>
                                            <p className="font-display font-bold uppercase tracking-tight text-ice text-base md:text-lg leading-tight">
                                                {item.titulo}
                                            </p>
                                            <p className="mt-0.5 text-sm text-ice/60 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-9 pt-8 border-t border-white/10 flex flex-col items-center text-center">
                            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ice/40">
                                Acesso por 6 meses
                            </p>

                            <div className="mt-4 flex items-baseline justify-center gap-2">
                                <span className="text-2xl text-ice/50 font-medium">6x de</span>
                                <span className="font-display font-bold text-electric-blue text-6xl md:text-7xl leading-none">
                                    R$ 55,18
                                </span>
                            </div>

                            <p className="mt-4 text-base text-ice/70">
                                ou {PRICE_CASH} à vista
                            </p>

                            <div className="mt-8 w-full sm:w-auto">
                                <CheckoutButton className="w-full sm:w-auto">
                                    Entrar na Comunidade
                                </CheckoutButton>
                            </div>

                            <p className="mt-5 text-xs text-ice/45 leading-relaxed max-w-sm">
                                Pagamento pela Hubla, cartão ou Pix. O acesso ao grupo e à
                                plataforma chega no seu e-mail logo após a compra. A
                                assinatura renova {PERIOD_LABEL} e você cancela quando
                                quiser.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
