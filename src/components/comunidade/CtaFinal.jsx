"use client";

import { motion } from "framer-motion";
import { CheckoutButton } from "./CheckoutButton";
import { PRICE_CASH, PRICE_INSTALLMENT } from "./constants";

export function CtaFinal() {
    return (
        <section className="relative w-full py-12 sm:py-20 md:py-28">

            <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-[clamp(1.7rem,7.4vw,2.4rem)] font-bold uppercase leading-[1] tracking-tight text-ice md:text-5xl md:leading-[0.98]"
                >
                    <span className="text-electric-blue">O que você fez para sua evolução{" "}</span>
                    nos últimos meses?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
                    className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ice/65 sm:mt-8 sm:text-lg md:text-xl"
                >
                    Assim como os que passaram, os próximos 6 meses também irão passar.
                    <strong className="text-ice"> A diferença é o quão preparado você estará.</strong>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mt-9 flex w-full flex-col items-center gap-4 sm:mt-11"
                >
                    <CheckoutButton className="w-full sm:w-auto">
                        Entrar na Comunidade
                    </CheckoutButton>
                    <p className="text-[13px] leading-relaxed text-ice/50 sm:text-sm">
                        Apenas <strong className="text-ice">R$ 55,18</strong> por mês.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
