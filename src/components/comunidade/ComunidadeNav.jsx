"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";

/* Nav flutuante em pill, destacada da borda da tela. */

export function ComunidadeNav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 top-0 z-50 w-full px-3 pt-2.5 sm:px-4 sm:pt-4 md:px-6 md:pt-5"
        >
            <div
                className={cn(
                    "mx-auto flex max-w-5xl items-center justify-between gap-3 px-3 py-2 transition-all duration-500 sm:gap-4 sm:px-5 sm:py-3 md:px-6",
                    scrolled ? "cmn-glass cmn-blur" : "border border-transparent"
                )}
                style={{ borderRadius: "var(--cmn-r-pill)" }}
            >
                <img
                    src="/pgar-logo.png"
                    alt="PGAR"
                    className="h-5 w-auto shrink-0 opacity-90 sm:h-6 md:h-7"
                />

                <span className="text-right text-xs font-semibold uppercase leading-tight tracking-[0.1em] text-ice/60 sm:text-sm sm:tracking-[0.14em]">
                    Preparação de Goleiros<br className="sm:hidden" /> de Alto Rendimento
                </span>
            </div>
        </motion.header>
    );
}
