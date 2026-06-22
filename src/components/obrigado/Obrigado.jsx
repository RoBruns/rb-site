"use client";

import { motion } from "framer-motion";
import { SuccessScreen } from "../form/SuccessScreen";

/* ------------------------------------------------------------------ */
/*  Página de agradecimento pós-checkout                               */
/* ------------------------------------------------------------------ */

export function Obrigado() {
    return (
        <main className="relative min-h-[100svh] w-full overflow-hidden bg-obsidian text-ice">
            {/* Ambient background — soft drifting blue glows */}
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
                {/* Subtle grid for texture */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-2xl flex-col justify-center px-6 py-24 text-center sm:px-10">
                <SuccessScreen
                    eyebrow="Compra confirmada"
                    title="Obrigado pela sua"
                    titleAccent="confiança."
                    body="Sua vaga na mentoria está garantida. Em breve entraremos em contato pelo WhatsApp para te explicar os próximos passos — quando a mentoria começa e como será o planejamento."
                    closer="Nos vemos em breve!"
                />
            </div>
        </main>
    );
}
