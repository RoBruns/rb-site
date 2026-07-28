"use client";

import { motion } from "framer-motion";

const itens = [
    {
        numero: "01",
        antes: "Hoje você aplica o treino e torce pra estar certo.",
        depois: "Você sabe justificar cada exercício que coloca no campo.",
        detalhe:
            "Quando o coordenador perguntar por que você escolheu aquele estímulo, você tem resposta. Não é achismo, é critério.",
    },
    {
        numero: "02",
        antes: "Hoje você junta exercício solto de rede social.",
        depois: "Você monta o seu treino a partir de um ciclo que faz sentido.",
        detalhe:
            "Deixa de colecionar atividade avulsa e passa a enxergar a semana inteira: o que vem antes, o que vem depois, e por quê.",
    },
    {
        numero: "03",
        antes: "Hoje você erra e só descobre meses depois.",
        depois: "Você pergunta na quinta e ajusta o treino na sexta.",
        detalhe:
            "O erro para de custar uma temporada e passa a custar uma mensagem no grupo.",
    },
    {
        numero: "04",
        antes: "Hoje você é o único preparador de goleiro que conhece.",
        depois: "Você tem uma sala cheia de gente no mesmo caminho.",
        detalhe:
            "Gente que enfrenta o mesmo problema que você, em clubes e categorias diferentes. É onde aparece indicação de vaga, também.",
    },
];

export function Transformacoes() {
    return (
        <section className="relative w-full bg-obsidian py-28 md:py-40 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98] max-w-3xl"
                >
                    O que muda{" "}
                    <span className="text-electric-blue">em seis meses.</span>
                </motion.h2>

                <div className="mt-20 space-y-20 md:space-y-28">
                    {itens.map((item) => (
                        <motion.div
                            key={item.numero}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start"
                        >
                            <span
                                aria-hidden="true"
                                className="font-display font-bold text-electric-blue/15 text-7xl md:text-9xl leading-none select-none"
                            >
                                {item.numero}
                            </span>

                            <div className="md:pt-4">
                                <p className="text-sm md:text-base text-ice/45 line-through decoration-ice/25">
                                    {item.antes}
                                </p>
                                <p className="mt-3 font-display font-bold uppercase tracking-tight text-ice text-2xl md:text-4xl leading-tight">
                                    {item.depois}
                                </p>
                                <p className="mt-4 text-base text-ice/65 leading-relaxed max-w-xl">
                                    {item.detalhe}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
