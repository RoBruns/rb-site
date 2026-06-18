"use client";

import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export function PrimaryButton({ children, onClick, type = "button", disabled, loading }) {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            whileHover={disabled ? undefined : { scale: 1.015 }}
            whileTap={disabled ? undefined : { scale: 0.985 }}
            className={cn(
                "group relative inline-flex items-center gap-2.5 overflow-hidden bg-electric-blue px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-obsidian transition-colors duration-300 micro-bevel",
                disabled
                    ? "cursor-not-allowed opacity-40"
                    : "hover:bg-electric-blue/90"
            )}
        >
            {/* Sheen sweep on hover */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">{children}</span>
            {loading ? (
                <span className="relative h-4 w-4 animate-spin rounded-full border-2 border-obsidian/30 border-t-obsidian" />
            ) : (
                <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            )}
        </motion.button>
    );
}

export function BackLink({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="group mb-9 inline-flex items-center gap-2 text-sm font-medium text-ice/45 transition-colors duration-300 hover:text-ice"
        >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
            </span>
            Voltar
        </button>
    );
}
