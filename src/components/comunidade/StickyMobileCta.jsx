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
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-0 left-0 z-50 w-full px-4 pb-4 md:hidden"
                >
                    <div
                        className="cmn-glass cmn-blur flex items-center justify-between gap-4 px-5 py-3.5"
                        style={{ borderRadius: "var(--cmn-r-lg)" }}
                    >
                        <div className="leading-tight">
                            <p className="font-display text-sm font-bold uppercase text-ice">
                                {PRICE_INSTALLMENT}
                            </p>
                            <p className="text-[11px] text-ice/45">
                                ou R$ 297 à vista · 6 meses iniciais
                            </p>
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
