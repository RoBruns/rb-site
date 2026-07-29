"use client";

import { motion } from "framer-motion";

export function Virada() {
    return (
        <section className="relative w-full py-24 md:py-36">

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-pill inline-block px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-electric-blue"
                >
                    A virada
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-6xl"
                >
                    O que te falta não é conteúdo.
                    <br />
                    <span className="text-electric-blue">É um segundo olhar.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto mt-12 max-w-2xl space-y-5 text-left text-base leading-relaxed text-ice/70 md:text-lg"
                >
                    <p>
                        Você já tem acesso a mais informação do que consegue aplicar. O
                        YouTube está cheio. O Instagram está cheio. E mesmo assim a dúvida
                        continua, porque informação solta não responde a pergunta que
                        importa: isso serve pro meu contexto?
                    </p>
                    <p>
                        Quem trabalha em clube não evolui lendo mais. Evolui porque tem
                        alguém do lado apontando o que está errado antes que vire hábito.
                        Um coordenador, um par mais experiente, alguém que já passou por
                        aquilo.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-glass-glow mx-auto mt-12 max-w-2xl px-8 py-8"
                >
                    <p className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-ice md:text-2xl">
                        É exatamente isso que você não tem.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-ice/70">
                        E é exatamente isso que a Comunidade PGAR existe pra te dar.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
