"use client";

import { motion } from "framer-motion";
import { MessagesSquare, Video, GraduationCap } from "lucide-react";

const pilares = [
    {
        icon: MessagesSquare,
        titulo: "O grupo",
        chamada: "Sua dúvida de quinta, resolvida na quinta.",
        texto:
            "Um grupo no WhatsApp com o Rodrigo dentro e com os outros preparadores. Você manda o treino que montou, o vídeo do seu goleiro, a dúvida do momento, e recebe uma leitura de quem já viu aquilo acontecer no profissional.",
    },
    {
        icon: Video,
        titulo: "O encontro ao vivo",
        chamada: "Todo mês, ao vivo, com o Rodrigo.",
        texto:
            "Uma hora por mês para discutir metodologia, carreira e o que está acontecendo no mercado. É onde entra o caso real: o seu, o do colega, o do clube. Enquanto você for membro, tem encontro todo mês.",
    },
    {
        icon: GraduationCap,
        titulo: "Os cursos",
        chamada: "Todos, inclusive os que ainda não existem.",
        texto:
            "O curso de metodologia já está na plataforma: ciclos de treino, aprendizado, condicionamento específico do goleiro. E todo curso novo que o Rodrigo lançar entra aqui, sem você pagar nada a mais, enquanto sua assinatura estiver ativa.",
    },
];

export function ComoFunciona() {
    return (
        <section className="relative w-full bg-ice text-obsidian py-28 md:py-40 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[11px] font-bold uppercase tracking-[0.3em] text-obsidian/50"
                >
                    Como funciona na prática
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-5 font-display font-bold uppercase tracking-tight text-obsidian text-4xl md:text-6xl leading-[0.98] max-w-3xl"
                >
                    Três coisas, e nenhuma delas é você sozinho.
                </motion.h2>

                <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-8">
                    {pilares.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <motion.div
                                key={p.titulo}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 1,
                                    delay: i * 0.12,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="border-t-2 border-obsidian/85 pt-7"
                            >
                                <span className="flex h-11 w-11 items-center justify-center border border-obsidian/20 bg-obsidian/5">
                                    <Icon className="h-5 w-5 text-obsidian" strokeWidth={2} />
                                </span>

                                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.25em] text-obsidian/45">
                                    {p.titulo}
                                </p>
                                <p className="mt-3 font-display font-bold uppercase tracking-tight text-obsidian text-xl md:text-2xl leading-tight">
                                    {p.chamada}
                                </p>
                                <p className="mt-4 text-[15px] text-obsidian/70 leading-relaxed">
                                    {p.texto}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mt-16 text-base md:text-lg text-obsidian/70 leading-relaxed max-w-2xl"
                >
                    Não existe turma e não existe data de início. Você entra hoje e o seu
                    acesso começa hoje, com o próximo encontro já marcado.
                </motion.p>
            </div>
        </section>
    );
}
