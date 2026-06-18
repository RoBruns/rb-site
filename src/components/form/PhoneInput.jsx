"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../utils/cn";
import { EASE } from "./motion";
import { inputBase } from "./Field";

/* ------------------------------------------------------------------ */
/*  Phone — country codes + formatting                                 */
/* ------------------------------------------------------------------ */

export const COUNTRIES = [
    { code: "BR", dial: "55", flag: "🇧🇷", name: "Brasil", max: 11 },
    { code: "PT", dial: "351", flag: "🇵🇹", name: "Portugal", max: 9 },
    { code: "US", dial: "1", flag: "🇺🇸", name: "Estados Unidos", max: 10 },
    { code: "AR", dial: "54", flag: "🇦🇷", name: "Argentina", max: 10 },
    { code: "ES", dial: "34", flag: "🇪🇸", name: "Espanha", max: 9 },
    { code: "GB", dial: "44", flag: "🇬🇧", name: "Reino Unido", max: 10 },
    { code: "IT", dial: "39", flag: "🇮🇹", name: "Itália", max: 10 },
    { code: "FR", dial: "33", flag: "🇫🇷", name: "França", max: 9 },
    { code: "DE", dial: "49", flag: "🇩🇪", name: "Alemanha", max: 11 },
    { code: "MX", dial: "52", flag: "🇲🇽", name: "México", max: 10 },
];

export const onlyDigits = (s) => s.replace(/\D/g, "");

// Format digits for on-screen display, per country.
export function formatPhone(digits, country) {
    const d = digits.slice(0, country.max);
    if (country.dial === "55") {
        // (11) 94286-1882  /  (11) 4286-1882
        if (d.length <= 2) return d.length ? `(${d}` : "";
        const ddd = d.slice(0, 2);
        const rest = d.slice(2);
        if (rest.length <= 4) return `(${ddd}) ${rest}`;
        const splitAt = rest.length > 8 ? 5 : 4; // 9-digit vs 8-digit
        return `(${ddd}) ${rest.slice(0, splitAt)}-${rest.slice(splitAt)}`;
    }
    // Generic: group in 3s for readability
    return d.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
}

export function PhoneInput({ country, onCountry, digits, onDigits }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex">
            {/* Country selector */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex shrink-0 items-center gap-2 border border-r-0 border-white/10 bg-surface-light/60 px-4 text-ice transition-colors duration-300 micro-bevel hover:bg-surface-light"
            >
                <span className="text-lg leading-none">{country.flag}</span>
                <span className="text-sm font-semibold tabular-nums">+{country.dial}</span>
                <span
                    className={cn(
                        "text-[10px] text-ice/50 transition-transform duration-300",
                        open && "rotate-180"
                    )}
                >
                    ▼
                </span>
            </button>

            <input
                type="tel"
                inputMode="tel"
                value={formatPhone(digits, country)}
                onChange={(e) => onDigits(onlyDigits(e.target.value).slice(0, country.max))}
                placeholder={country.dial === "55" ? "(11) 94286-1882" : "Número"}
                className={cn(inputBase, "rounded-l-none")}
            />

            <AnimatePresence>
                {open && (
                    <>
                        {/* click-away */}
                        <div
                            className="fixed inset-0 z-30"
                            onClick={() => setOpen(false)}
                        />
                        <motion.ul
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: EASE }}
                            className="absolute top-full left-0 z-40 mt-2 max-h-64 w-64 overflow-auto border border-white/10 bg-surface-dark/95 py-1 shadow-2xl backdrop-blur-md micro-bevel"
                        >
                            {COUNTRIES.map((c) => (
                                <li key={c.code}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            onCountry(c);
                                            setOpen(false);
                                        }}
                                        className={cn(
                                            "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors duration-200 hover:bg-electric-blue/10",
                                            c.code === country.code
                                                ? "text-electric-blue"
                                                : "text-ice/80"
                                        )}
                                    >
                                        <span className="text-lg leading-none">{c.flag}</span>
                                        <span className="flex-1">{c.name}</span>
                                        <span className="tabular-nums text-ice/50">+{c.dial}</span>
                                    </button>
                                </li>
                            ))}
                        </motion.ul>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
