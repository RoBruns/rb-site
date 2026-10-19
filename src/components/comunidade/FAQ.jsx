"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { perguntas } from "./faq-data";

export function FAQ() {
    return (
        <section className="relative w-full py-12 sm:py-20 md:py-28">
            <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center font-display text-[clamp(1.9rem,8.2vw,2.6rem)] font-bold uppercase leading-[1] tracking-tight text-ice md:text-5xl md:leading-[0.98]"
                >
                    Dúvidas antes de{" "}
                    <span className="text-electric-blue">entrar.</span>
                </motion.h2>

                <div className="mt-9 space-y-3 sm:mt-12">
                    {perguntas.map((item, i) => (
                        <motion.details
                            key={item.q}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                            className="cmn-glass group px-5 py-4 sm:px-6 sm:py-5 md:px-7"
                        >
                            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 sm:gap-5">
                                <span className="font-display text-[15px] font-bold uppercase leading-tight tracking-tight text-ice sm:text-base md:text-lg">
                                    {item.q}
                                </span>
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 group-open:border-electric-blue/40 group-open:bg-electric-blue/15">
                                    <Plus
                                        className="h-4 w-4 text-electric-blue transition-transform duration-300 group-open:rotate-45"
                                        strokeWidth={2.5}
                                    />
                                </span>
                            </summary>
                            <p className="mt-3.5 text-[14px] leading-relaxed text-ice/60 sm:mt-4 sm:pr-10 sm:text-[15px]">
                                {item.a}
                            </p>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
}
