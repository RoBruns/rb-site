"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const naoServe = [
    "Quer uma planilha pronta para copiar e colar no seu clube.",
    "Acha que existe fórmula infalível no alto rendimento.",
    "Está atrás de garantia de vaga, promoção ou indicação.",
];

const serve = [
    "Está começando, ou já atua, e cansou de aprender por tentativa e erro.",
    "Trabalha em escolinha, base ou clube e precisa adaptar o que aprende à sua realidade.",
    "Quer construir a própria metodologia e ter com quem conferir se ela está de pé.",
];

export function NaoEPraVoce() {
    return (
        <section className="relative w-full py-12 sm:py-20 md:py-28">
            <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-[clamp(1.9rem,8.2vw,2.6rem)] font-bold uppercase leading-[1] tracking-tight text-ice md:text-5xl md:leading-[0.98]"
                >
                    Entre para trabalhar.{" "}
                    <span className="text-electric-blue">Não para achar atalho.</span>
                </motion.h2>

                <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="cmn-glass p-6 sm:p-7 md:p-8"
                        style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ice/35 sm:text-[11px] sm:tracking-[0.24em]">
                            Não é para você se
                        </p>
                        <ul className="mt-5 space-y-4 sm:mt-6">
                            {naoServe.map((t) => (
                                <li key={t} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5">
                                        <X
                                            className="h-3 w-3 text-ice/35"
                                            strokeWidth={3}
                                        />
                                    </span>
                                    <span className="text-[14px] leading-relaxed text-ice/50 sm:text-[15px]">
                                        {t}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                        className="cmn-glass-glow cmn-lift p-6 sm:p-7 md:p-8"
                    >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-blue sm:text-[11px] sm:tracking-[0.24em]">
                            É para você se
                        </p>
                        <ul className="mt-6 space-y-4">
                            {serve.map((t) => (
                                <li key={t} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-blue/15">
                                        <Check
                                            className="h-3 w-3 text-electric-blue"
                                            strokeWidth={3}
                                        />
                                    </span>
                                    <span className="text-[14px] leading-relaxed text-ice/85 sm:text-[15px]">
                                        {t}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
