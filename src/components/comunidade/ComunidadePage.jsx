"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "./ds.css";
import { AttributionTracker } from "../AttributionTracker";
import { ComunidadeNav } from "./ComunidadeNav";
import { ComunidadeHero } from "./ComunidadeHero";
import { Virada } from "./Virada";
import { Transformacoes } from "./Transformacoes";
import { QuemResponde } from "./QuemResponde";
import { ComoFunciona } from "./ComoFunciona";
import { NaoEPraVoce } from "./NaoEPraVoce";
import { Oferta } from "./Oferta";
import { FAQ } from "./FAQ";
import { CtaFinal } from "./CtaFinal";
import { StickyMobileCta } from "./StickyMobileCta";
import { ComunidadeFooter } from "./ComunidadeFooter";

export function ComunidadePage() {
    /* Configuração idêntica à da MentoriaPage, que funciona. */
    useEffect(() => {
        const compactScreen = window.matchMedia("(max-width: 767px)");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (reducedMotion.matches) return;

        const lenis = compactScreen.matches
            ? null
            : new Lenis({
                  autoRaf: true,
                  duration: 1.2,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              });

        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                const href = target.getAttribute("href");
                if (href === "#") return;
                const element = document.querySelector(href);
                if (element) {
                    e.preventDefault();
                    if (lenis) {
                        lenis.scrollTo(element, { offset: -90, duration: 1.2 });
                    } else {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }
            }
        };

        document.documentElement.addEventListener("click", handleAnchorClick);
        return () => {
            document.documentElement.removeEventListener("click", handleAnchorClick);
            lenis?.destroy();
        };
    }, []);

    return (
        <main className="cmn-scope relative min-h-screen w-full overflow-x-clip bg-obsidian font-sans text-ice selection:bg-electric-blue selection:text-obsidian">
            <AttributionTracker />
            {/* Fundo contínuo: uma camada só para a página inteira.
                Nenhuma seção pinta fundo próprio, então não existe
                emenda entre elas. */}
            <div className="cmn-atmosfera" aria-hidden="true" />

            {/* Focos de luz ancorados na altura do documento. Como vivem
                aqui fora, atravessam a fronteira entre seções. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            >
                <div className="cmn-luz right-[-12%] top-[2%] h-[62vw] max-h-[680px] w-[62vw] max-w-[680px]" />
                <div className="cmn-luz left-[-15%] top-[26%] h-[55vw] max-h-[620px] w-[55vw] max-w-[620px] opacity-70" />
                <div className="cmn-luz left-1/2 top-[52%] h-[50vw] max-h-[600px] w-[85vw] max-w-[1100px] -translate-x-1/2 opacity-80" />
                <div className="cmn-luz right-[-10%] top-[74%] h-[50vw] max-h-[580px] w-[55vw] max-w-[640px] opacity-75" />
                <div className="cmn-luz bottom-[-8%] left-1/2 h-[45vw] max-h-[560px] w-[95vw] max-w-[1200px] -translate-x-1/2" />
            </div>

            <div className="relative z-10">
                <ComunidadeNav />
                <ComunidadeHero />
                <Virada />
                <Transformacoes />
                <QuemResponde />
                <ComoFunciona />
                <NaoEPraVoce />
                <Oferta />
                <FAQ />
                <CtaFinal />
                <StickyMobileCta />
                <ComunidadeFooter />
            </div>
        </main>
    );
}
