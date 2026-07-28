"use client";

import { motion } from "framer-motion";
import { CheckoutButton } from "./CheckoutButton";
import { PRICE_CASH, PRICE_INSTALLMENT } from "./constants";

export function CtaFinal() {
    return (
        <section className="relative w-full bg-obsidian py-28 md:py-40 px-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-obsidian/80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian z-10" />
                <img
                    src="/mentoria-cta.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            <div className="relative z-20 max-w-3xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98]"
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
                    className="mt-8 text-base md:text-lg text-ice/70 leading-relaxed max-w-xl mx-auto"
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
                    <p className="text-sm text-ice/55">
                        {PRICE_CASH} à vista ou {PRICE_INSTALLMENT}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
