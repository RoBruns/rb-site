"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { PRICE_LABEL, DATE_FULL, TIME } from "./constants";

const faqs = [
    {
        q: "A aula é ao vivo ou gravada?",
        a: `Ao vivo. Acontecerá ${DATE_FULL.toLowerCase()}, às ${TIME}, com chat aberto para você tirar suas dúvidas. É uma aula, não uma gravação editada.`,
    },
    {
        q: "Não consigo no dia. Posso assistir depois?",
        a: "Sim. Quem comprar recebe acesso à gravação depois da aula. Você assiste no seu tempo, quantas vezes quiser.",
    },
    {
        q: "Como acesso depois de comprar?",
        a: "Assim que a compra for confirmada, você entra no grupo exclusivo da masterclass. Lá ficam o link da aula, os lembretes e o material de apoio.",
    },
    {
        q: "Preciso ter experiência para acompanhar?",
        a: "De certo modo, sim. A masterclass é pensada para quem já atua na área de preparação de goleiros, mas também serve para quem está começando e quer iniciar já com uma boa base.",
    },
    {
        q: "Quanto custa?",
        a: `${PRICE_LABEL}, pagamento único. O checkout é via Hubla, com cartão ou Pix.`,
    },
];

function Item({ faq, isOpen, onToggle }) {
    return (
        <div className="border-b border-white/10">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            >
                <span className="font-display font-bold uppercase tracking-tight text-ice text-lg md:text-xl leading-tight group-hover:text-electric-blue transition-colors duration-300">
                    {faq.q}
                </span>
                <Plus
                    className={`h-5 w-5 shrink-0 text-electric-blue transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth={2.5}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 pr-10 text-sm md:text-base text-ice/65 leading-relaxed">
                            {faq.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function MasterclassFAQ() {
    const [open, setOpen] = useState(0);

    return (
        <section className="relative w-full bg-obsidian py-24 md:py-32 px-6 border-t border-white/10">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold uppercase tracking-tight text-ice text-4xl md:text-5xl leading-[0.98] mb-12"
                >
                    Perguntas <span className="text-electric-blue">frequentes.</span>
                </motion.h2>

                <div className="border-t border-white/10">
                    {faqs.map((faq, i) => (
                        <Item
                            key={i}
                            faq={faq}
                            isOpen={open === i}
                            onToggle={() => setOpen(open === i ? -1 : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
