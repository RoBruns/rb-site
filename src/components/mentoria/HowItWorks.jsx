"use client";

import { motion } from "framer-motion";

const fixed = [
    {
        n: "01",
        title: "Metodologia & Planejamento",
        desc: "Como estruturar o trabalho do goleiro ao longo da temporada, da periodização à sessão do dia.",
    },
    {
        n: "02",
        title: "Defesa do Gol",
        desc: "O fundamento central da posição: posicionamento, tomada de decisão e a técnica que sustenta a defesa.",
    },
    {
        n: "03",
        title: "Defesa do Espaço",
        desc: "Leitura de profundidade, saídas e domínio da área para o goleiro que joga além da linha do gol.",
    },
    {
        n: "04",
        title: "Jogo Ofensivo",
        desc: "Construção com os pés, reposição e a participação do goleiro como ponto de partida do jogo da equipe.",
    },
];

export function HowItWorks() {
    return (
        <section className="relative w-full bg-obsidian py-28 md:py-40 px-6 border-t border-white/10">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98] max-w-3xl"
                >
                    8 encontros. 1 método. <span className="text-electric-blue">Ao vivo, comigo.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="mt-6 max-w-2xl text-base md:text-lg text-ice/70 leading-relaxed"
                >
                    Quatro encontros de tema fixo, que constroem a base da metodologia. E quatro
                    encontros de tema livre, onde a pauta é definida por você e pelo grupo, para
                    resolver o que realmente importa no seu trabalho.
                </motion.p>

                {/* Fixed themes as clean list */}
                <div className="mt-16">
                    <p className="font-display uppercase tracking-[0.25em] text-xs font-bold text-electric-blue mb-2">
                        Tema fixo
                    </p>
                    <div className="border-t border-white/10">
                        {fixed.map((e, i) => (
                            <motion.div
                                key={e.n}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, delay: i * 0.07, ease: "easeOut" }}
                                className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_2fr] gap-x-6 gap-y-1 items-baseline py-6 border-b border-white/10 group"
                            >
                                <span className="font-display font-bold text-electric-blue/50 text-xl leading-none group-hover:text-electric-blue transition-colors duration-400">
                                    {e.n}
                                </span>
                                <h3 className="font-display font-bold uppercase tracking-tight text-ice text-lg md:text-xl">
                                    {e.title}
                                </h3>
                                <p className="col-start-2 md:col-start-3 text-sm text-ice/55 leading-relaxed">
                                    {e.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Free themes */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-14 border-l-2 border-electric-blue pl-6 md:pl-8"
                >
                    <p className="font-display uppercase tracking-[0.25em] text-xs font-bold text-electric-blue mb-3">
                        Tema livre · encontros 05 a 08
                    </p>
                    <h3 className="font-display font-bold uppercase tracking-tight text-ice text-2xl md:text-3xl">
                        Você no comando da pauta
                    </h3>
                    <p className="mt-4 max-w-2xl text-base md:text-lg text-ice/70 leading-relaxed">
                        Aqui você traz suas dúvidas reais. Um goleiro que não evolui, uma situação de
                        jogo que se repete, um treino que não está rendendo, uma decisão de carreira. Eu
                        respondo com a experiência de quem vive isso na elite todos os dias. Sem roteiro
                        engessado, o conteúdo é o que o grupo precisa.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mt-12 text-sm text-ice/45"
                >
                    Cada encontro é online e ao vivo. Você participa, pergunta e sai com algo para
                    aplicar já no próximo treino.
                </motion.p>
            </div>
        </section>
    );
}
