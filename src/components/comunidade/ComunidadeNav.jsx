"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { CheckoutButton } from "./CheckoutButton";

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
            className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-6 md:pt-5"
        >
            <div
                className={cn(
                    "mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 transition-all duration-500 md:px-6",
                    scrolled ? "cmn-glass" : "border border-transparent"
                )}
                style={{ borderRadius: "var(--cmn-r-pill)" }}
            >
                <img
                    src="/pgar-logo.png"
                    alt="PGAR"
                    className="h-5 w-auto opacity-90 md:h-6"
                />

                <CheckoutButton size="sm" href="#oferta" variant="glass">
                    Ver planos
                </CheckoutButton>
            </div>
        </motion.header>
    );
}
