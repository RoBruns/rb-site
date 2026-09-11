"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckoutButton } from "./CheckoutButton";
import { PRICE_CASH, PRICE_INSTALLMENT } from "./constants";

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
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-0 left-0 z-50 w-full px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] sm:px-4 md:hidden"
                >
                    <div
                        className="cmn-blur flex items-center justify-between gap-3 border border-white/12 px-4 py-2.5 shadow-[0_-8px_32px_-8px_rgba(5,10,20,0.8)] sm:gap-4 sm:px-5 sm:py-3"
                        style={{ borderRadius: "var(--cmn-r-lg)" }}
                    >
                        <div className="min-w-0 leading-tight">
                            <p className="font-display text-sm font-bold uppercase leading-none text-ice">
                                {PRICE_INSTALLMENT}
                            </p>
                            <p className="mt-1 text-[10px] leading-none text-ice/45 sm:text-[11px]">
                                ou {PRICE_CASH} à vista · 6 meses
                            </p>
                        </div>
                        <CheckoutButton href="#oferta" size="sm" className="shrink-0">
                            Entrar
                        </CheckoutButton>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
