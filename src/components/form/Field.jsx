"use client";

import { motion } from "framer-motion";
import { item } from "./motion";

export const inputBase =
    "w-full bg-surface-dark/70 border border-white/10 px-5 py-3.5 text-ice placeholder-ice/25 outline-none transition-all duration-300 micro-bevel focus:border-electric-blue/70 focus:bg-surface-light/60 focus:shadow-[0_0_0_3px_rgba(127,179,255,0.12)]";

export function Field({ label, required, children }) {
    return (
        <motion.div variants={item} className="space-y-3">
            <label className="flex items-center gap-1.5 text-lg font-bold tracking-tight text-ice">
                {label}
                {required && <span className="text-electric-blue">*</span>}
            </label>
            {children}
        </motion.div>
    );
}
