"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const naoServe = [
    "Procura uma planilha pronta para copiar sem considerar o contexto.",
    "Espera uma fórmula infalível para alto rendimento.",
    "Quer garantia de vaga, promoção, indicação ou resultado profissional.",
];

const serve = [
    "Está começando ou já atua e quer reduzir tentativa e erro.",
    "Trabalha em escolinha, base ou clube e precisa adaptar princípios à sua realidade.",
    "Quer estruturar, desenvolver e validar uma metodologia própria com estudo, aplicação e troca.",
];

export function NaoEPraVoce() {
    return (
        <section className="relative w-full py-24 md:py-36">
            <div className="relative z-10 mx-auto max-w-5xl px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-5xl"
                >
                    Entre para desenvolver método.{" "}
                    <span className="text-electric-blue">Não para procurar atalho.</span>
                </motion.h2>

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="cmn-glass p-7 md:p-8"
                        style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ice/35">
                            Não é para você se
                        </p>
                        <ul className="mt-6 space-y-4">
                            {naoServe.map((t) => (
                                <li key={t} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5">
                                        <X
                                            className="h-3 w-3 text-ice/35"
                                            strokeWidth={3}
                                        />
                                    </span>
                                    <span className="text-[15px] leading-relaxed text-ice/50">
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
                        className="cmn-glass-glow cmn-lift p-7 md:p-8"
                    >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric-blue">
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
                                    <span className="text-[15px] leading-relaxed text-ice/85">
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
