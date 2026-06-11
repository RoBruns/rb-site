"use client";

import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { useState, useEffect } from "react";

export function Header() {
    const [theme, setTheme] = useState("light");
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Check if we are at the top (Hero Section)
            if (window.scrollY < 50) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }

            const sections = document.querySelectorAll("[data-theme]");
            // A stable viewport Y position roughly where the center of the navbar sits
            const sampleY = 80;

            let currentTheme = "light";
            sections.forEach(sec => {
                const rect = sec.getBoundingClientRect();
                // If the top of the section is above our sample point and bottom is below it
                if (rect.top <= sampleY && rect.bottom > sampleY) {
                    currentTheme = sec.getAttribute("data-theme");
                }
            });

            setTheme(currentTheme);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Init on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isDarkBg = theme === "dark";

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4"
        >
            <div className={cn(
                "max-w-7xl mx-auto flex items-center justify-between transition-all duration-700",
                "px-6 py-4 sharp-edge",
                isAtTop ? "bg-transparent border border-white/0 text-ice" : (isDarkBg ? "liquid-glass text-ice" : "liquid-glass-invert text-obsidian")
            )}>
                <div className="font-display font-bold text-xl tracking-tighter uppercase transition-colors duration-500">
                    <span className={isDarkBg ? "text-ice" : "text-obsidian"}>R</span>
                    <span className="text-electric-blue">/</span>
                    <span className={isDarkBg ? "text-ice" : "text-obsidian"}>B</span>
                </div>

                <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
                    <a href="#trajectory" className="hover:text-electric-blue transition-colors uppercase">Trajetória</a>
                    <a href="#methodology" className="hover:text-electric-blue transition-colors uppercase">Metodologia</a>
                    <a href="#results" className="hover:text-electric-blue transition-colors uppercase">Resultados</a>
                </nav>

                <a href="#footer" className={cn(
                    "px-6 py-2 uppercase text-xs font-bold tracking-widest hover-sharp sharp-edge transition-colors duration-500",
                    isDarkBg ? "bg-ice text-obsidian hover:bg-white" : "bg-obsidian text-ice hover:bg-black"
                )}>
                    Contato
                </a>
            </div>
        </motion.header>
    );
}

