"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Os três eixos da oferta. Produto recorrente: aqui não existe linha de
   chegada, então cada card fala de "como o seu trabalho passa a ser",
   e não de "o que você conquista até tal mês". */

const itens = [
    {
        numero: "01",
        antes: "Decide sozinho e fica com a dúvida se acertou.",
        depois: "Mais confiança para decidir",
        detalhe:
            "Você passa a ter do seu lado mais de 20 anos de trabalho com goleiros e preparadores. Dá para levar a situação, ouvir uma leitura diferente da sua, ser questionado e sair com um caminho mais seguro do que o que você tinha sozinho.",
    },
    {
        numero: "02",
        antes: "Repete exercício sem saber que prioridade ele atende.",
        depois: "Mais clareza e método para treinar",
        detalhe:
            "Uma metodologia organizada e atual, alinhada ao que se usa hoje no alto rendimento. Você desenvolve critério para ler o goleiro, definir a prioridade da semana e montar treino com propósito.",
    },
    {
        numero: "03",
        antes: "Espera a oportunidade aparecer para então correr atrás.",
        depois: "Mais preparação para evoluir na carreira",
        detalhe:
            "Atualização profissional e uma visão clara das competências e dos comportamentos que o mercado cobra de um preparador de alto rendimento. Quando a vaga aparecer, você chega nela preparado.",
    },
];

export function Transformacoes() {
    return (
        <section className="relative w-full py-16 sm:py-24 md:py-36">
            <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-[clamp(1.95rem,8.6vw,2.75rem)] font-bold uppercase leading-[1] tracking-tight text-ice md:text-6xl md:leading-[0.98]"
                    >
                        Três coisas mudam{" "}
                        <span className="text-electric-blue">de verdade.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
                        className="mt-5 text-[15px] leading-relaxed text-ice/65 sm:mt-6 sm:text-base md:text-lg"
                    >
                        A Comunidade não tem linha de chegada. Enquanto você estiver
                        dentro, estuda, aplica no seu clube, volta para discutir e
                        ajusta. É esse ciclo que move as três coisas abaixo.
                    </motion.p>
                </div>

                <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-5 lg:grid-cols-3">
                    {itens.map((item, i) => (
                        <motion.article
                            key={item.numero}
                            initial={{ opacity: 0, y: 26 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.95,
                                delay: i * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="cmn-glass-lit cmn-lift relative p-6 sm:p-7 md:p-8"
                        >
                            {/* O número vive numa linha própria no mobile. Antes ele
                                era absolute e caía por cima da frase do "antes". */}
                            <span
                                aria-hidden="true"
                                className="pointer-events-none block select-none font-display text-4xl font-bold leading-none text-white/[0.07] sm:absolute sm:right-6 sm:top-5 sm:text-6xl sm:text-white/[0.045] md:text-7xl"
                            >
                                {item.numero}
                            </span>

                            <p className="relative mt-4 text-sm leading-relaxed text-ice/40 sm:mt-0 sm:max-w-[82%]">
                                {item.antes}
                            </p>

                            <ArrowRight
                                className="relative my-4 h-4 w-4 text-electric-blue/70"
                                strokeWidth={2.5}
                                aria-hidden="true"
                            />

                            <p className="relative font-display text-lg font-bold uppercase leading-tight tracking-tight text-ice sm:text-xl md:text-2xl">
                                {item.depois}
                            </p>

                            <p className="relative mt-3.5 text-[14px] leading-relaxed text-ice/60 sm:mt-4 sm:text-[15px]">
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
                    className="mt-10 max-w-2xl text-[15px] leading-relaxed text-ice/55 sm:mt-12 sm:text-base"
                >
                    Nada aqui garante vaga, promoção ou indicação. O que a Comunidade
                    faz é te deixar pronto para quando a oportunidade aparecer.
                </motion.p>
            </div>
        </section>
    );
}
