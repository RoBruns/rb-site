"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, DATE_FULL, TIME } from "./constants";
import { MasterclassPixel } from "./MasterclassPixel";

const steps = [
    "Entre no grupo exclusivo da masterclass pelo botão abaixo.",
    `Lá ficam o link da aula, os lembretes e os materiais de apoio.`,
    `No dia ${DATE_FULL.toLowerCase()}, às ${TIME}, é só entrar e participar ao vivo.`,
    "Não conseguiu no dia? A gravação fica disponível para você depois.",
];

export function ObrigadoMasterclass() {
    return (
        <main className="relative min-h-[100svh] w-full overflow-hidden bg-obsidian text-ice">
            <MasterclassPixel />
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    aria-hidden
                    className="absolute -top-[20%] left-1/2 h-[60vw] w-[60vw] max-w-[800px] -translate-x-1/2 rounded-full bg-electric-blue/10 blur-[160px]"
                    animate={{ y: [0, 30, 0], opacity: [0.6, 0.85, 0.6] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    aria-hidden
                    className="absolute bottom-[-15%] right-[-10%] h-[45vw] w-[45vw] max-w-[600px] rounded-full bg-electric-blue/[0.06] blur-[150px]"
                    animate={{ y: [0, -24, 0], opacity: [0.4, 0.65, 0.4] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-2xl flex-col justify-center px-6 py-24 sm:px-10">
                {/* Check badge */}
                <div className="relative mb-9 flex items-center justify-center">
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            className="absolute rounded-full border border-electric-blue/30"
                            initial={{ width: 80, height: 80, opacity: 0 }}
                            animate={{ width: [80, 220], height: [80, 220], opacity: [0.5, 0] }}
                            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: i * 0.7 }}
                        />
                    ))}
                    <motion.div
                        initial={{ scale: 0, rotate: -25 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.15 }}
                        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-electric-blue shadow-[0_0_50px_rgba(127,179,255,0.5)]"
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-obsidian">
                            <motion.path
                                d="M4 12.5l5 5L20 6.5"
                                stroke="currentColor"
                                strokeWidth={2.6}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.55, ease: "easeOut", delay: 0.45 }}
                            />
                        </svg>
                    </motion.div>
                </div>

                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-electric-blue"
                    >
                        Compra confirmada
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="font-display text-3xl font-bold uppercase tracking-tight text-ice sm:text-5xl"
                    >
                        Vaga garantida.{" "}
                        <span className="text-electric-blue">Nos vemos lá.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.72 }}
                        className="mx-auto mt-7 max-w-md text-base leading-relaxed text-ice/70 sm:text-lg"
                    >
                        Só falta um passo: entrar no grupo exclusivo da masterclass. É por lá que
                        você recebe o link da aula e os materiais.
                    </motion.p>
                </div>

                {/* WhatsApp CTA: ação principal */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.85 }}
                    className="mt-10 flex flex-col items-center"
                >
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex w-full items-center justify-center gap-3 border border-electric-blue bg-electric-blue px-9 py-5 text-sm font-bold uppercase tracking-widest text-obsidian transition-colors duration-400 hover:bg-transparent hover:text-electric-blue sm:w-auto"
                    >
                        <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
                        Entrar no grupo da masterclass
                    </a>
                    <p className="mt-4 text-xs text-ice/45">
                        Abre o WhatsApp com uma mensagem pronta. É só enviar.
                    </p>
                </motion.div>

                {/* Próximos passos */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-12 liquid-glass-dark border border-white/10 p-7 md:p-8"
                >
                    <p className="font-display uppercase tracking-[0.25em] text-xs font-bold text-electric-blue mb-5">
                        Próximos passos
                    </p>
                    <ul className="space-y-4">
                        {steps.map((s, i) => (
                            <li key={i} className="flex gap-4 items-start">
                                <span className="font-display font-bold text-electric-blue text-base leading-none mt-0.5">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-sm md:text-base text-ice/70 leading-relaxed">
                                    {s}
                                </span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.15 }}
                    className="mt-10 text-center font-display text-lg font-bold uppercase tracking-tight text-ice"
                >
                    Nos vemos na terça.
                </motion.p>
            </div>
        </main>
    );
}
