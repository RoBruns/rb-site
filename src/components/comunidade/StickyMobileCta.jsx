"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckoutButton } from "./CheckoutButton";
import { PRICE_INSTALLMENT } from "./constants";

export function StickyMobileCta() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const passouDoHero = window.scrollY > 600;

            const oferta = document.getElementById("oferta");
            let ofertaVisivel = false;
            if (oferta) {
                const rect = oferta.getBoundingClientRect();
                ofertaVisivel = rect.top < window.innerHeight && rect.bottom > 0;
            }

            setVisible(passouDoHero && !ofertaVisivel);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 90 }}
                    animate={{ y: 0 }}
                    exit={{ y: 90 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-obsidian/95 backdrop-blur-md border-t border-white/10 px-4 py-3"
                >
                    <div className="flex items-center justify-between gap-4">
                        <div className="leading-tight">
                            <p className="font-display font-bold uppercase text-ice text-sm">
                                {PRICE_INSTALLMENT}
                            </p>
                            <p className="text-[11px] text-ice/50">ou R$ 297 à vista</p>
                        </div>
                        <CheckoutButton size="sm" className="shrink-0">
                            Entrar
                        </CheckoutButton>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
