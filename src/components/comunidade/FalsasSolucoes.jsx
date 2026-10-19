"use client";

import { motion } from "framer-motion";
import { BookOpen, MessagesSquare, Archive } from "lucide-react";

/* Por que mais um curso não resolve. Usa a crítica que o próprio público
   faz a quem "faz o curso e acabou" e o pedido por algo concreto "que eu
   consiga guardar" (call de vendas, 2026-10-13). Não ataca a licença da
   CBF: ela é complementar, e o Rodrigo dá aula nos cursos de licença. */
const fica = [
    {
        icon: MessagesSquare,
        titulo: "Encontro gravado",
        texto: "O que foi conversado ao vivo fica disponível para rever.",
    },
    {
        icon: BookOpen,
        titulo: "Diagnóstico por escrito",
        texto: "Seu Mapa de Carreira, preenchido por você, aula a aula.",
    },
    {
        icon: Archive,
        titulo: "Grupo para voltar ao assunto",
        texto: "A dúvida que surgir depois tem onde ser respondida.",
    },
];

export function FalsasSolucoes() {
    return (
        <section className="relative w-full py-12 sm:py-20 md:py-24">
            <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-[clamp(1.9rem,8.2vw,2.6rem)] font-bold uppercase leading-[1] tracking-tight text-ice md:text-5xl md:leading-[0.98]"
                    >
                        Você não é do tipo que{" "}
                        <span className="text-electric-blue">faz o curso e acabou.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
                        className="mt-5 text-[15px] leading-relaxed text-ice/65 sm:mt-6 sm:text-base md:text-lg"
                    >
                        Você estuda, lê, fez licença. Só que conteúdo não responde à sua
                        pergunta: no seu clube, com o seu goleiro, na sua carreira. E conversa
                        solta fica no vento. Aqui fica:
                    </motion.p>
                </div>

                <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
                    {fica.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <motion.div
                                key={f.titulo}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className="cmn-glass-lit cmn-lift p-6 sm:p-7"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-electric-blue/30 bg-electric-blue/10">
                                    <Icon className="h-5 w-5 text-electric-blue" strokeWidth={2} />
                                </span>
                                <p className="mt-5 font-display text-lg font-bold uppercase leading-tight tracking-tight text-ice sm:text-xl">
                                    {f.titulo}
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-ice/60">
                                    {f.texto}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
