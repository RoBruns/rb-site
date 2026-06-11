"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Trajectory } from "../components/Trajectory";
import { Methodology } from "../components/Methodology";
import { Results } from "../components/Results";
import { Philosophy } from "../components/Philosophy";
import { Footer } from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        // skip empty hashes
        if (href === '#') return;

        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          // scroll with offset for fixed header
          lenis.scrollTo(element, { offset: -100, duration: 1.2 });
        }
      }
    };

    document.documentElement.addEventListener('click', handleAnchorClick);

    return () => {
      document.documentElement.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-obsidian font-sans text-ice selection:bg-electric-blue selection:text-white">
      <Header />
      <Hero />
      <Trajectory />
      <Methodology />
      <Results />
      <Philosophy />
      <Footer />
    </main>
  );
}
