"use client";

import { motion } from "framer-motion";
import { CheckoutButton } from "./CheckoutButton";
import { PRICE_CASH, PRICE_INSTALLMENT } from "./constants";

export function CtaFinal() {
    return (
        <section className="relative w-full py-24 md:py-36">

            <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-6xl"
                >
                    Prepare-se agora para trabalhar com mais{" "}
                    <span className="text-electric-blue">clareza depois.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
                    className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ice/65 md:text-lg"
                >
                    Nos próximos seis meses, você pode continuar reunindo referências sem um
                    processo claro ou começar a desenvolver método, critério e repertório para
                    o contexto em que atua. A Comunidade PGAR existe para acompanhar essa
                    construção.
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
                        {PRICE_CASH} à vista ou {PRICE_INSTALLMENT} · Seis meses iniciais ·
                        Benefícios disponíveis com assinatura ativa.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
