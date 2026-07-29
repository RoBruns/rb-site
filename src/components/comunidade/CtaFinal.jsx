"use client";

import { motion } from "framer-motion";
import { CheckoutButton } from "./CheckoutButton";
import { PRICE_CASH, PRICE_INSTALLMENT } from "./constants";

export function CtaFinal() {
    return (
        <section className="cmn-grain relative w-full overflow-hidden bg-obsidian py-24 md:py-36">
            <div className="cmn-mesh" />
            <div className="cmn-halo bottom-0 left-1/2 h-[40vw] max-h-[480px] w-[90vw] max-w-[1100px] -translate-x-1/2 translate-y-1/3" />

            <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-6xl"
                >
                    Daqui a seis meses você vai estar{" "}
                    <span className="text-electric-blue">seis meses na frente</span> ou no
                    mesmo lugar.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
                    className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ice/65 md:text-lg"
                >
                    A diferença entre um cenário e outro não é talento nem sorte. É ter
                    alguém experiente olhando o seu trabalho toda semana, em vez de você
                    continuar tentando adivinhar sozinho.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mt-11 flex flex-col items-center gap-4"
                >
                    <CheckoutButton>Entrar na Comunidade</CheckoutButton>
                    <p className="text-sm text-ice/50">
                        {PRICE_CASH} à vista ou {PRICE_INSTALLMENT}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
