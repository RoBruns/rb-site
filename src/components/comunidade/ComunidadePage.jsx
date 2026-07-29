"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "./ds.css";
import { ComunidadeNav } from "./ComunidadeNav";
import { ComunidadeHero } from "./ComunidadeHero";
import { Problema } from "./Problema";
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
        const lenis = new Lenis({
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
                    lenis.scrollTo(element, { offset: -90, duration: 1.2 });
                }
            }
        };

        document.documentElement.addEventListener("click", handleAnchorClick);
        return () => {
            document.documentElement.removeEventListener("click", handleAnchorClick);
            lenis.destroy();
        };
    }, []);

    return (
        <main className="cmn-scope w-full min-h-screen bg-obsidian font-sans text-ice selection:bg-electric-blue selection:text-obsidian">
            <ComunidadeNav />
            <ComunidadeHero />
            <Problema />
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
        </main>
    );
}
