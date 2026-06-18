"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const isFor = [
    "Quer trabalhar no padrão da Elite do Futebol Sul Americano.",
    "Cansou de cursos superficiais e quer se aprofundar em uma metodologia moderna e atual.",
    "Está disposto a estudar, aplicar e levar o trabalho a sério.",
    "Se sente inseguro sobre as estratégias que tem utilizado.",
    "Entende que precisa estar preparado para as melhores oportunidades do mercado.",
];

const isNotFor = [
    "Acredita que todas as metodologias são iguais.",
    "Procura mais um curso gravado para assistir no automático, sem participar.",
    "Quer fórmula mágica e não pretende aplicar nada no campo.",
    "Entende que já sabe tudo o que precisa saber sobre a profissão e não precisa se atualizar.",
    "Acha que a evolução na carreira depende APENAS de sorte.",
];

export function ForWhom() {
    return (
        <section className="relative w-full bg-obsidian py-28 md:py-40 px-6 border-t border-white/10">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98] mb-16"
                >
                    Esta mentoria é <span className="text-electric-blue">para você?</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h3 className="font-display font-bold uppercase tracking-tight text-electric-blue text-lg mb-6 pb-3 border-b border-electric-blue/30">
                            É para você que
                        </h3>
                        <ul className="space-y-5">
                            {isFor.map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Check
                                        className="w-5 h-5 text-electric-blue shrink-0 mt-0.5"
                                        strokeWidth={2.5}
                                    />
                                    <span className="text-sm md:text-base text-ice/75 leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h3 className="font-display font-bold uppercase tracking-tight text-ice/40 text-lg mb-6 pb-3 border-b border-white/10">
                            Não é para você que
                        </h3>
                        <ul className="space-y-5">
                            {isNotFor.map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <X
                                        className="w-5 h-5 text-ice/25 shrink-0 mt-0.5"
                                        strokeWidth={2.5}
                                    />
                                    <span className="text-sm md:text-base text-ice/50 leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
