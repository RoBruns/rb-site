"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, Radio, PlayCircle, Users } from "lucide-react";
import { BuyButton } from "./BuyButton";
import { Countdown } from "./Countdown";
import { PRICE_LABEL, DATE_FULL, TIME, SPOTS_LEFT } from "./constants";

const included = [
    {
        icon: CalendarDays,
        title: "Aula ao vivo",
        desc: DATE_FULL,
    },
    {
        icon: Clock,
        title: "Horário",
        desc: `Às ${TIME} (horário de Brasília)`,
    },
    {
        icon: Radio,
        title: "100% online",
        desc: "Participe de onde estiver, com chat aberto para perguntas",
    },
    {
        icon: PlayCircle,
        title: "Acesso à gravação",
        desc: "Não conseguiu ao vivo? A gravação fica disponível para você",
    },
    {
        icon: Users,
        title: "Grupo exclusivo",
        desc: "Link da aula, lembretes e materiais de apoio em um só lugar",
    },
];

export function MasterclassOffer() {
    return (
        <section
            id="inscricao"
            className="relative w-full bg-obsidian py-28 md:py-40 px-6 border-t border-white/10 overflow-hidden scroll-mt-24"
        >
            {/* Blue glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] max-w-[900px] bg-electric-blue/10 blur-[150px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98]"
                >
                    <span className="text-electric-blue">Tudo pronto</span> para você assistir
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
                    className="mt-6 text-center text-base md:text-lg text-ice/70 leading-relaxed max-w-xl mx-auto"
                >
                    Nessa aula, vou te mostrar a estrutura que uso todos os dias. Você sai com o
                    modelo de microciclo, que desenvolvi nos últimos 10 anos, pra aplicar no seu
                    próximo treino.
                </motion.p>

                {/* Offer card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-14 liquid-glass-dark border border-white/10 p-7 md:p-10"
                >
                    {/* Included list */}
                    <ul className="space-y-5">
                        {included.map((item) => {
                            const Icon = item.icon;
                            return (
                                <li key={item.title} className="flex gap-4 items-start">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-electric-blue/30 bg-electric-blue/10">
                                        <Icon className="h-5 w-5 text-electric-blue" strokeWidth={2} />
                                    </span>
                                    <div>
                                        <p className="font-display font-bold uppercase tracking-tight text-ice text-base md:text-lg leading-tight">
                                            {item.title}
                                        </p>
                                        <p className="mt-0.5 text-sm text-ice/60 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Price + CTA */}
                    <div className="mt-9 pt-8 border-t border-white/10 flex flex-col items-center text-center">
                        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ice/40">
                            A aula começa em
                        </p>
                        <Countdown className="mt-4" />

                        <p className="mt-9 text-[11px] font-bold uppercase tracking-[0.25em] text-ice/40">
                            Investimento · pagamento único
                        </p>
                        <div className="mt-3 flex items-baseline justify-center gap-3">
                            <span className="text-xl md:text-2xl text-ice/40 line-through font-medium">
                                R$ 197,90
                            </span>
                            <span className="font-display font-bold text-electric-blue text-5xl md:text-6xl leading-none">
                                {PRICE_LABEL}
                            </span>
                        </div>
                        <p className="mt-2.5 text-[11px] text-ice/50">
                            Quando as vagas esgotarem, o valor sobe.
                        </p>

                        {/* Faixa de escassez — destaque perto do CTA */}
                        <div className="mt-8 w-full max-w-sm border border-electric-blue/40 bg-electric-blue/10 px-5 py-4">
                            <div className="flex items-center justify-center gap-3">
                                <span className="relative flex h-2.5 w-2.5 shrink-0">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-blue/60" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-electric-blue" />
                                </span>
                                <span className="font-display font-bold uppercase tracking-tight text-electric-blue text-2xl md:text-3xl leading-none">
                                    {SPOTS_LEFT === 1
                                        ? "Última vaga"
                                        : `Restam ${SPOTS_LEFT} vagas`}
                                </span>
                            </div>
                            <p className="mt-2 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-ice/60">
                                Por este valor
                            </p>
                        </div>

                        <div className="mt-6 w-full sm:w-auto">
                            <BuyButton className="w-full sm:w-auto justify-center">
                                Quero participar
                            </BuyButton>
                        </div>

                        <p className="mt-5 text-xs text-ice/45 leading-relaxed max-w-sm">
                            Pagamento via Hubla, cartão ou Pix. Após a compra, você entra no grupo
                            exclusivo onde ficam o link da aula e os materiais.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
