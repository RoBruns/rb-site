"use client";

import { motion } from "framer-motion";

export function Anchor() {
    return (
        <section className="relative w-full bg-obsidian py-28 md:py-40 px-6 border-t border-white/10">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98]"
                >
                    O que custa <span className="text-electric-blue">mais caro?</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="mt-8 space-y-5 text-base md:text-lg text-ice/70 leading-relaxed"
                >
                    <p>
                        Caro é passar mais uma temporada aprendendo por tentativa e erro. Caro é ver um
                        goleiro que você treina estacionar por falta de um método que você ainda não
                        tem. Caro é ficar de fora das oportunidades de alto rendimento porque o seu
                        trabalho não tem a estrutura que o nível exige.
                    </p>
                    <p className="text-ice font-semibold">
                        O acesso direto a quem faz isso na elite, ao vivo, podendo perguntar e aplicar,
                        é o caminho mais curto e mais seguro entre onde você está e onde você quer
                        chegar.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
