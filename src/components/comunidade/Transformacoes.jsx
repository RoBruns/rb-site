"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Produto recorrente: aqui não existe linha de chegada. A ideia é
   "como é fazer parte", não "o que você conquista até tal mês". */

const itens = [
    {
        numero: "01",
        antes: "Consome referências e não sabe o que aplicar em cada situação.",
        depois: "Organiza o trabalho com mais clareza a partir do próprio contexto.",
        detalhe:
            "O objetivo é relacionar princípio, necessidade do goleiro, momento da semana e realidade disponível.",
    },
    {
        numero: "02",
        antes: "Trabalha muito, mas tem dificuldade de justificar escolhas.",
        depois: "Desenvolve mais critério e repertório para decidir e explicar o trabalho.",
        detalhe:
            "Método não é decorar exercícios: é saber por que uma escolha faz sentido naquele momento.",
    },
    {
        numero: "03",
        antes: "Ainda não estruturou uma metodologia própria.",
        depois: "Passa a desenvolver e validar a própria metodologia com estudo, aplicação e troca.",
        detalhe:
            "A CIMO oferece uma base para observar e organizar o processo sem transformar o treino em receita pronta.",
    },
    {
        numero: "04",
        antes: "Evolui isolado, dependendo apenas de tentativa e erro.",
        depois: "Conta com comunidade, encontros e canal de contato enquanto a assinatura estiver ativa.",
        detalhe:
            "A troca aproxima preparadores de contextos diferentes e amplia repertório para o dia a dia.",
    },
];

export function Transformacoes() {
    return (
        <section className="relative w-full py-24 md:py-36">

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-6xl"
                    >
                        O que muda na sua{" "}
                        <span className="text-electric-blue">forma de trabalhar.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
                        className="mt-6 text-base leading-relaxed text-ice/65 md:text-lg"
                    >
                        A Comunidade é um ambiente de desenvolvimento contínuo. Durante a
                        assinatura ativa, você estuda, aplica, troca e revisita o próprio
                        trabalho com mais intenção.
                    </motion.p>
                </div>

                <div className="mt-16 grid gap-5 md:grid-cols-2">
                    {itens.map((item, i) => (
                        <motion.article
                            key={item.numero}
                            initial={{ opacity: 0, y: 26 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.95,
                                delay: (i % 2) * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="cmn-glass-lit cmn-lift relative p-7 md:p-8"
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute right-6 top-5 select-none font-display text-6xl font-bold leading-none text-white/[0.045] md:text-7xl"
                            >
                                {item.numero}
                            </span>

                            <p className="relative max-w-[85%] text-sm leading-relaxed text-ice/40">
                                {item.antes}
                            </p>

                            <ArrowRight
                                className="relative my-4 h-4 w-4 text-electric-blue/70"
                                strokeWidth={2.5}
                                aria-hidden="true"
                            />

                            <p className="relative font-display text-xl font-bold uppercase leading-tight tracking-tight text-ice md:text-2xl">
                                {item.depois}
                            </p>

                            <p className="relative mt-4 text-[15px] leading-relaxed text-ice/60">
                                {item.detalhe}
                            </p>
                        </motion.article>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="mt-12 max-w-2xl text-base leading-relaxed text-ice/55"
                >
                    Preparar-se antes da oportunidade é parte do trabalho. A Comunidade
                    existe para apoiar esse processo, sem prometer atalhos ou resultados de
                    carreira.
                </motion.p>
            </div>
        </section>
    );
}
