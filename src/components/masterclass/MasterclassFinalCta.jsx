"use client";

import { motion } from "framer-motion";
import { BuyButton } from "./BuyButton";
import { Countdown } from "./Countdown";
import { PRICE_LABEL, DATE_FULL, TIME } from "./constants";

/* ------------------------------------------------------------------ */
/*  Última chamada após o FAQ — captura quem rolou a página inteira.   */
/*  O botão leva direto ao checkout (quem chegou aqui já viu a oferta).*/
/* ------------------------------------------------------------------ */

export function MasterclassFinalCta() {
    return (
        <section className="relative w-full bg-obsidian py-24 md:py-36 px-6 border-t border-white/10 overflow-hidden">
            {/* Blue glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] max-w-[800px] bg-electric-blue/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-6xl leading-[0.98]"
                >
                    {DATE_FULL}, às {TIME}.{" "}
                    <span className="text-electric-blue">Você dentro?</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="mt-10 flex flex-col items-center"
                >
                    <Countdown />

                    <div className="mt-10">
                        <BuyButton>Garantir minha vaga</BuyButton>
                    </div>

                    <p className="mt-5 text-xs text-ice/45 leading-relaxed">
                        {PRICE_LABEL} · pagamento único · acesso à gravação incluso
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
