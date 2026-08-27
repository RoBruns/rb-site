"use client";

import { motion } from "framer-motion";

export function Virada() {
    return (
        <section className="relative w-full py-12 sm:py-20 md:py-28">

            <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-pill inline-block px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-blue sm:px-5 sm:text-[11px] sm:tracking-[0.28em]"
                >
                    A virada
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 font-display text-[clamp(1.95rem,8.6vw,2.75rem)] font-bold uppercase leading-[1] tracking-tight text-ice sm:mt-8 md:text-6xl md:leading-[0.98]"
                >
                    Você decide sozinho.
                    <br />
                    <span className="text-electric-blue">E não sabe se acertou.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto mt-8 max-w-2xl text-left text-[15px] leading-relaxed text-ice/70 sm:mt-12 sm:text-base md:text-lg"
                >
                    <p>
                        Referência você já tem de sobra. O que falta é alguém para
                        conferir sua metodologia antes de você colocar em prática, É isso que a
                        Comunidade PGAR entrega: A metodologia CIMO te mostra como alto rendimento trabalha,
                        o Diagnóstico Profissional dá o direcionamento da sua carreira, no grupo e nos encontros
                        você tira dúvidas com quem é referência no mercado.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-glass-glow mx-auto mt-8 max-w-2xl px-6 py-7 sm:mt-12 sm:px-8 sm:py-8"
                >
                    <p className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-ice sm:text-xl md:text-2xl">
                        Bolas anunciadas, quedas rasterias... você repete aquilo que fez
                        sendo goleiro. Sem direcionamento, você repete o que viveu, sem
                        saber se resolve o que o seu goleiro precisa e o que a sua equipe busca.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
