"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Produto recorrente: aqui não existe linha de chegada. A ideia é
   "como é fazer parte", não "o que você conquista até tal mês". */

const itens = [
    {
        numero: "01",
        antes: "Aplicar o treino e torcer pra estar certo.",
        depois: "Ter critério pra defender cada escolha sua.",
        detalhe:
            "Quando o coordenador perguntar por que você escolheu aquele estímulo, você tem resposta. Não é achismo, é critério.",
    },
    {
        numero: "02",
        antes: "Juntar exercício solto de rede social.",
        depois: "Enxergar a semana inteira, e não a atividade avulsa.",
        detalhe:
            "O que vem antes, o que vem depois, e por quê. O ciclo passa a fazer sentido na sua cabeça, não só no papel.",
    },
    {
        numero: "03",
        antes: "Errar e descobrir meses depois.",
        depois: "Perguntar na quinta e ajustar na sexta.",
        detalhe:
            "O erro para de custar uma temporada e passa a custar uma mensagem no grupo.",
    },
    {
        numero: "04",
        antes: "Ser o único preparador de goleiro que você conhece.",
        depois: "Ter uma sala cheia de gente que vive o mesmo que você.",
        detalhe:
            "Gente que enfrenta o mesmo problema, em clubes e categorias diferentes. É onde aparece indicação de vaga, também.",
    },
];

export function Transformacoes() {
    return (
        <section className="cmn-grain relative w-full overflow-hidden bg-obsidian py-24 md:py-36">
            <div className="cmn-halo left-1/2 top-0 h-[40vw] max-h-[500px] w-[80vw] max-w-[1000px] -translate-x-1/2 opacity-60" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-6xl"
                    >
                        Como é{" "}
                        <span className="text-electric-blue">fazer parte.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
                        className="mt-6 text-base leading-relaxed text-ice/65 md:text-lg"
                    >
                        Isso não é um curso que você termina. É um lugar onde você fica.
                        Enquanto estiver dentro, a rotina abaixo é a sua.
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
                    Quem está há mais tempo ajuda quem chegou ontem. Em algum momento,
                    esse alguém com resposta vai ser você.
                </motion.p>
            </div>
        </section>
    );
}
