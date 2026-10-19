"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Os três eixos da oferta. Produto recorrente: aqui não existe linha de
   chegada, então cada card fala de "como o seu trabalho passa a ser",
   e não de "o que você conquista até tal mês". */

/* Ordem pelo que o público mais busca (pesquisa de 2026-09): carreira e
   rede vêm antes do método, que entra como validação do que ele já faz. */
const itens = [
    {
        numero: "01",
        antes: "Vai tocando a vida e espera a oportunidade aparecer.",
        depois: "Carreira com plano",
        detalhe:
            "Saiba onde você está, onde quer chegar e qual é o próximo passo, no clube ou fora dele, como escola de goleiros e personal.",
    },
    {
        numero: "02",
        antes: "Conhece pouca gente e não gosta de se mostrar.",
        depois: "Uma rede que trabalha no mercado",
        detalhe:
            "Troque no dia a dia com preparadores do profissional, da base, do feminino e do exterior, e com convidados de clubes grandes.",
    },
    {
        numero: "03",
        antes: "Seu método nunca foi colocado à prova por alguém de fora.",
        depois: "Método validado",
        detalhe:
            "Leve o seu jeito de trabalhar para o Rodrigo e compare com o que se faz no alto rendimento, da base ao profissional.",
    },
];

export function Transformacoes() {
    return (
        <section className="relative w-full py-12 sm:py-20 md:py-28">
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
                        Você leva o seu caso, conversa, aplica no seu clube e volta para
                        ajustar. É esse ciclo que move as três coisas abaixo.
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
            </div>
        </section>
    );
}
