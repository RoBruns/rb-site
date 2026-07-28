"use client";

import { motion } from "framer-motion";

const paragrafos = [
    <>
        Você monta o treino sozinho. Aplica sozinho.{" "}
        <span className="text-ice/95 font-semibold">E duvida sozinho.</span>
    </>,
    <>
        Salva exercício de rede social sem saber em que momento do ciclo ele
        entra. Copia o que viu num vídeo e aplica sem ter certeza se aquilo serve
        pro seu goleiro, pra sua categoria, pra sua semana.
    </>,
    <>
        No fim do treino, aquela pergunta que não vai embora: será que isso aqui
        está funcionando? E o pior, se estiver errado, você só vai descobrir daqui
        a seis meses, quando o resultado não aparecer.
    </>,
    <>
        Não é falta de dedicação. Você estuda, assiste, anota. O problema é que
        não existe ninguém do lado pra olhar o seu trabalho e dizer: esse caminho
        está certo, esse aqui não.
    </>,
];

export function Problema() {
    return (
        <section className="relative w-full bg-obsidian py-28 md:py-40 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98]"
                >
                    Ninguém corrige{" "}
                    <span className="text-electric-blue">o seu treino.</span>
                </motion.h2>

                <div className="mt-10 space-y-6 text-base md:text-lg text-ice/70 leading-relaxed">
                    {paragrafos.map((p, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
                        >
                            {p}
                        </motion.p>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mt-16 font-display font-bold uppercase tracking-tight text-ice text-2xl md:text-4xl leading-tight"
                >
                    Não falta esforço no seu trabalho.{" "}
                    <span className="text-electric-blue">
                        Falta alguém pra dizer se ele está certo.
                    </span>
                </motion.p>
            </div>
        </section>
    );
}
