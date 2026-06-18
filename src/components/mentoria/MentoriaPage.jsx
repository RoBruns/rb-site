"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MentoriaNav } from "./MentoriaNav";
import { MentoriaHero } from "./MentoriaHero";
import { Problem } from "./Problem";
import { Solution } from "./Solution";
import { HowItWorks } from "./HowItWorks";
import { ForWhom } from "./ForWhom";
import { About } from "./About";
import { Anchor } from "./Anchor";
import { FinalCTA } from "./FinalCTA";
import { MentoriaFooter } from "./MentoriaFooter";

export function MentoriaPage() {
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
        <main className="w-full min-h-screen bg-obsidian font-sans text-ice selection:bg-electric-blue selection:text-obsidian">
            <MentoriaNav />
            <MentoriaHero />
            <Problem />
            <Solution />
            <HowItWorks />
            <ForWhom />
            <About />
            <Anchor />
            <FinalCTA />
            <MentoriaFooter />
        </main>
    );
}
