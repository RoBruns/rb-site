"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const perguntas = [
    {
        q: "Sou iniciante. Vou conseguir acompanhar?",
        a: "A Comunidade atende quem está começando e quem já atua. O desenvolvimento parte do contexto de cada preparador, com foco em construir clareza, repertório e método ao longo da assinatura.",
    },
    {
        q: "Trabalho em escolinha ou categorias de base. Serve para mim?",
        a: "Sim. Os princípios podem ser adaptados a realidades diferentes. A proposta é ajudar você a pensar o trabalho a partir do contexto que tem hoje, e não entregar uma receita única para todos.",
    },
    {
        q: "Por quanto tempo tenho acesso?",
        a: "A assinatura inicial dura seis meses. Comunidade, WhatsApp, encontros, cursos disponíveis e futuros cursos ou módulos liberados ficam disponíveis enquanto a assinatura estiver ativa.",
    },
    {
        q: "Posso renovar depois dos seis meses?",
        a: "Sim. Existe possibilidade de renovação após o período inicial. As condições operacionais da renovação serão informadas antes dessa etapa.",
    },
    {
        q: "Como funciona o WhatsApp?",
        a: "Durante a assinatura ativa, você participa do grupo da comunidade e tem acesso ao WhatsApp do Rodrigo para dúvidas e conversas sobre metodologia, rotina e carreira. A Comunidade não promete prazo de resposta, disponibilidade ilimitada ou acompanhamento individual contínuo.",
    },
    {
        q: "O que inclui a metodologia CIMO?",
        a: "CIMO significa Contexto, Intensidade, Mentalidade e Organização. É a base metodológica apresentada no curso para apoiar a leitura e a organização do trabalho de preparação de goleiros.",
    },
    {
        q: "O que está incluído nos seis primeiros meses?",
        a: "Grupo de WhatsApp da comunidade, acesso ao WhatsApp do Rodrigo enquanto a assinatura estiver ativa, encontro mensal da comunidade, um encontro individual de uma hora durante os seis primeiros meses, curso CIMO, curso de carreira e acesso aos cursos ou módulos que estiverem liberados durante a assinatura ativa.",
    },
];

export function FAQ() {
    return (
        <section className="relative w-full py-24 md:py-36">
            <div className="relative z-10 mx-auto max-w-3xl px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-5xl"
                >
                    Dúvidas antes de{" "}
                    <span className="text-electric-blue">entrar.</span>
                </motion.h2>

                <div className="mt-12 space-y-3">
                    {perguntas.map((item, i) => (
                        <motion.details
                            key={item.q}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                            className="cmn-glass group px-6 py-5 md:px-7"
                        >
                            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-5">
                                <span className="font-display text-base font-bold uppercase leading-tight tracking-tight text-ice md:text-lg">
                                    {item.q}
                                </span>
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 group-open:border-electric-blue/40 group-open:bg-electric-blue/15">
                                    <Plus
                                        className="h-4 w-4 text-electric-blue transition-transform duration-300 group-open:rotate-45"
                                        strokeWidth={2.5}
                                    />
                                </span>
                            </summary>
                            <p className="mt-4 pr-10 text-[15px] leading-relaxed text-ice/60">
                                {item.a}
                            </p>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
}
