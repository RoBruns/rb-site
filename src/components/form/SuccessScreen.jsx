"use client";

import { motion } from "framer-motion";
import { EASE } from "./motion";

/* ------------------------------------------------------------------ */
/*  Success screen — the showpiece (parametrizado p/ reuso)            */
/* ------------------------------------------------------------------ */

export function SuccessScreen({
    nome,
    eyebrow,
    title,
    titleAccent,
    body,
    closer,
}) {
    const firstName = nome?.trim().split(" ")[0] || "";
    const resolvedEyebrow =
        eyebrow ?? (firstName ? `Tudo certo, ${firstName}` : "Tudo certo");

    return (
        <div className="relative flex flex-col items-center">
            {/* Radiating rings behind the check */}
            <div className="relative mb-10 flex items-center justify-center">
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="absolute rounded-full border border-electric-blue/30"
                        initial={{ width: 80, height: 80, opacity: 0 }}
                        animate={{
                            width: [80, 220],
                            height: [80, 220],
                            opacity: [0.5, 0],
                        }}
                        transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: i * 0.7,
                        }}
                    />
                ))}

                {/* Check badge */}
                <motion.div
                    initial={{ scale: 0, rotate: -25 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.15 }}
                    className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-electric-blue shadow-[0_0_50px_rgba(127,179,255,0.5)]"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-10 w-10 text-obsidian"
                    >
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

            <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-electric-blue"
            >
                {resolvedEyebrow}
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
                className="font-display text-3xl font-bold uppercase tracking-tight text-ice sm:text-5xl"
            >
                {title} <span className="text-electric-blue">{titleAccent}</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.72 }}
                className="mt-7 max-w-md text-base leading-relaxed text-ice/70 sm:text-lg"
            >
                {body}
            </motion.p>

            {closer && (
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
                    className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-ice"
                >
                    {closer}
                </motion.p>
            )}

            {/* Thin animated underline accent */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.95 }}
                className="mt-12 h-px w-40 origin-center bg-gradient-to-r from-transparent via-electric-blue/60 to-transparent"
            />
        </div>
    );
}
