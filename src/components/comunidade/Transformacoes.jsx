"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Layout novo: cada transformação é um card de vidro com o "antes"
   apagado no topo e o "depois" em destaque, ligados por uma seta.
   Grid 2x2 no desktop, empilhado no mobile. */

const itens = [
    {
        numero: "01",
        antes: "Você aplica o treino e torce pra estar certo.",
        depois: "Você sabe justificar cada exercício que coloca no campo.",
        detalhe:
            "Quando o coordenador perguntar por que você escolheu aquele estímulo, você tem resposta. Não é achismo, é critério.",
    },
    {
        numero: "02",
        antes: "Você junta exercício solto de rede social.",
        depois: "Você monta o seu treino a partir de um ciclo que faz sentido.",
        detalhe:
            "Deixa de colecionar atividade avulsa e passa a enxergar a semana inteira: o que vem antes, o que vem depois, e por quê.",
    },
    {
        numero: "03",
        antes: "Você erra e só descobre meses depois.",
        depois: "Você pergunta na quinta e ajusta o treino na sexta.",
        detalhe:
            "O erro para de custar uma temporada e passa a custar uma mensagem no grupo.",
    },
    {
        numero: "04",
        antes: "Você é o único preparador de goleiro que conhece.",
        depois: "Você tem uma sala cheia de gente no mesmo caminho.",
        detalhe:
            "Gente que enfrenta o mesmo problema que você, em clubes e categorias diferentes. É onde aparece indicação de vaga, também.",
    },
];

export function Transformacoes() {
    return (
        <section className="cmn-grain relative w-full overflow-hidden bg-obsidian py-24 md:py-36">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[40vw] max-h-[500px] w-[80vw] max-w-[1000px] -translate-x-1/2 rounded-full bg-electric-blue/7 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-6xl"
                >
                    O que muda{" "}
                    <span className="text-electric-blue">em seis meses.</span>
                </motion.h2>

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
            </div>
        </section>
    );
}
