"use client";

import { motion } from "framer-motion";
import { MessagesSquare, Video, GraduationCap } from "lucide-react";

/* Layout novo: um pilar grande em destaque e dois menores ao lado,
   em vez de três colunas iguais. Mantém o fundo escuro (o design
   system de vidro precisa de escuro para funcionar). */

const pilares = [
    {
        icon: MessagesSquare,
        titulo: "O grupo",
        chamada: "Sua dúvida de quinta, resolvida na quinta.",
        texto:
            "Um grupo no WhatsApp com o Rodrigo dentro e com os outros preparadores. Você manda o treino que montou, o vídeo do seu goleiro, a dúvida do momento, e recebe uma leitura de quem já viu aquilo acontecer no profissional.",
        destaque: true,
    },
    {
        icon: Video,
        titulo: "O encontro ao vivo",
        chamada: "Todo mês, ao vivo, com o Rodrigo.",
        texto:
            "Uma hora por mês para discutir metodologia, carreira e mercado. É onde entra o caso real: o seu, o do colega, o do clube.",
        destaque: false,
    },
    {
        icon: GraduationCap,
        titulo: "Os cursos",
        chamada: "Todos, inclusive os que ainda não existem.",
        texto:
            "O curso de metodologia já está na plataforma. E todo curso novo que o Rodrigo lançar entra aqui, sem você pagar nada a mais.",
        destaque: false,
    },
];

export function ComoFunciona() {
    const [principal, ...secundarios] = pilares;

    return (
        <section className="relative w-full py-24 md:py-36">

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[11px] font-semibold uppercase tracking-[0.28em] text-electric-blue"
                    >
                        Como funciona na prática
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-5 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-6xl"
                    >
                        Três coisas, e nenhuma delas é você sozinho.
                    </motion.h2>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
                    {/* Pilar em destaque */}
                    <motion.article
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="cmn-glass-glow cmn-lift flex flex-col justify-between p-8 md:p-10"
                    >
                        <div>
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-electric-blue/30 bg-electric-blue/10">
                                <principal.icon
                                    className="h-5.5 w-5.5 text-electric-blue"
                                    strokeWidth={2}
                                />
                            </span>

                            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-ice/45">
                                {principal.titulo}
                            </p>
                            <p className="mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-ice md:text-3xl">
                                {principal.chamada}
                            </p>
                            <p className="mt-5 text-[15px] leading-relaxed text-ice/65 md:text-base">
                                {principal.texto}
                            </p>
                        </div>
                    </motion.article>

                    {/* Dois pilares menores */}
                    <div className="grid gap-5">
                        {secundarios.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <motion.article
                                    key={p.titulo}
                                    initial={{ opacity: 0, y: 26 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.1 + i * 0.1,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="cmn-glass-lit cmn-lift p-7 md:p-8"
                                >
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                        <Icon
                                            className="h-5 w-5 text-electric-blue"
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-ice/45">
                                        {p.titulo}
                                    </p>
                                    <p className="mt-2.5 font-display text-lg font-bold uppercase leading-tight tracking-tight text-ice md:text-xl">
                                        {p.chamada}
                                    </p>
                                    <p className="mt-3.5 text-sm leading-relaxed text-ice/60">
                                        {p.texto}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="mt-12 max-w-2xl text-base leading-relaxed text-ice/60"
                >
                    Não existe turma e não existe data de início. Você entra hoje e o seu
                    acesso começa hoje, com o próximo encontro já marcado.
                </motion.p>
            </div>
        </section>
    );
}
