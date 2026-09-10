"use client";

import { motion } from "framer-motion";
import { GraduationCap, MessageCircle, LifeBuoy } from "lucide-react";
import "./ds.css";
import {
    AREA_MEMBROS_URL,
    GRUPO_WHATSAPP_URL,
    SUPORTE_TELEFONE,
    SUPORTE_WHATSAPP_URL,
} from "./constants";

/* ------------------------------------------------------------------ */
/*  Página de destino do checkout da Comunidade.                       */
/*                                                                     */
/*  Ela existe para uma coisa só: confirmar a compra e entregar os     */
/*  dois acessos. Nada de venda, nada de rolagem longa — quem chega    */
/*  aqui já comprou. Os dois links ficam sempre visíveis, porque esta  */
/*  é a página que a pessoa reabre quando não consegue entrar em algo. */
/*                                                                     */
/*  Segue o design system da Comunidade (.cmn-*), então herda a mesma   */
/*  atmosfera, o mesmo vidro e os mesmos botões pill da página de       */
/*  vendas.                                                            */
/* ------------------------------------------------------------------ */

/*  Cada acesso é um cartão. `nota` é a letra miúda que responde à
    dúvida mais comum de cada um antes que ela apareça.                */
const acessos = [
    {
        icon: GraduationCap,
        titulo: "Área de membros",
        desc: "Onde ficam a Metodologia CIMO, o Diagnóstico Profissional e todo material novo.",
        nota: "Entre com o mesmo e-mail que você usou na compra.",
        cta: "Acessar a área de membros",
        href: AREA_MEMBROS_URL,
        destaque: true,
    },
    {
        icon: MessageCircle,
        titulo: "Grupo de WhatsApp",
        desc: "O dia a dia da comunidade: é aqui que você tira dúvidas e troca com outros preparadores.",
        nota: "O convite abre direto no WhatsApp.",
        cta: "Entrar no grupo",
        href: GRUPO_WHATSAPP_URL,
        destaque: false,
    },
];

export function ObrigadoComunidade() {
    return (
        <main className="cmn-scope relative min-h-[100svh] w-full overflow-x-clip bg-obsidian font-sans text-ice selection:bg-electric-blue selection:text-obsidian">
            {/* Mesma camada de fundo da página de vendas */}
            <div className="cmn-atmosfera" aria-hidden="true" />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            >
                <div className="cmn-luz left-1/2 top-[-10%] h-[70vw] max-h-[720px] w-[80vw] max-w-[900px] -translate-x-1/2" />
                <div className="cmn-luz bottom-[-12%] right-[-10%] h-[45vw] max-h-[520px] w-[50vw] max-w-[580px] opacity-70" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-2xl flex-col justify-center px-5 py-16 sm:px-6 sm:py-24">
                {/* ---------- Selo de compra realizada ---------- */}
                <div className="relative mb-8 flex items-center justify-center sm:mb-10">
                    {/* Ondas saindo do check. Puramente decorativas. */}
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            aria-hidden="true"
                            className="absolute rounded-full border border-electric-blue/30"
                            initial={{ width: 76, height: 76, opacity: 0 }}
                            animate={{
                                width: [76, 210],
                                height: [76, 210],
                                opacity: [0.5, 0],
                            }}
                            transition={{
                                duration: 2.6,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: i * 0.7,
                            }}
                        />
                    ))}
                    <motion.div
                        initial={{ scale: 0, rotate: -25 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 220,
                            damping: 16,
                            delay: 0.15,
                        }}
                        className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-electric-blue shadow-[0_0_50px_rgba(127,179,255,0.5)] sm:h-20 sm:w-20"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-9 w-9 text-obsidian sm:h-10 sm:w-10"
                        >
                            <motion.path
                                d="M4 12.5l5 5L20 6.5"
                                stroke="currentColor"
                                strokeWidth={2.6}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: 0.55,
                                    ease: "easeOut",
                                    delay: 0.45,
                                }}
                            />
                        </svg>
                    </motion.div>
                </div>

                {/* ---------- Confirmação ---------- */}
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric-blue sm:text-[11px] sm:tracking-[0.35em]"
                    >
                        Compra realizada
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-5 font-display text-[clamp(1.95rem,8.6vw,2.75rem)] font-bold uppercase leading-[1] tracking-tight text-ice sm:mt-6 md:text-5xl md:leading-[0.98]"
                    >
                        Bem-vindo à{" "}
                        <span className="text-electric-blue">Comunidade.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.72 }}
                        className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ice/65 sm:mt-7 sm:text-base"
                    >
                        Seu pagamento foi confirmado e seus seis meses começam agora.
                        Faltam dois passos, e os dois estão logo abaixo.
                    </motion.p>
                </div>

                {/* ---------- Os dois acessos ---------- */}
                <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-5">
                    {acessos.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.titulo}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.85 + i * 0.12,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className={
                                    item.destaque
                                        ? "cmn-glass-glow p-6 sm:p-8"
                                        : "cmn-glass-lit p-6 sm:p-8"
                                }
                            >
                                <div className="flex items-start gap-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-electric-blue/25 bg-electric-blue/10">
                                        <Icon
                                            className="h-5 w-5 text-electric-blue"
                                            strokeWidth={2}
                                        />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="font-display text-base font-bold uppercase leading-tight tracking-tight text-ice sm:text-lg">
                                            {item.titulo}
                                        </p>
                                        <p className="mt-1.5 text-[13px] leading-relaxed text-ice/60 sm:text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                        "cmn-btn group mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 px-6 py-4 text-[15px] font-semibold tracking-wide sm:gap-2.5" +
                                        (item.destaque
                                            ? " cmn-btn-primary bg-electric-blue text-obsidian hover:bg-white"
                                            : " cmn-pill text-ice hover:border-white/25 hover:bg-white/10")
                                    }
                                >
                                    {item.cta}
                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-400 group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </a>

                                <p className="mt-3 text-center text-[11px] leading-relaxed text-ice/45">
                                    {item.nota}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ---------- Saída para quem travou ----------
                    A página serve de porto seguro: se um dos acessos não
                    abrir, o caminho para resolver não pode faltar aqui. */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.15 }}
                    className="mt-10 sm:mt-12"
                >
                    <div className="cmn-hairline" />
                    <div className="mt-6 flex flex-col items-center gap-4 text-center">
                        <p className="text-[13px] leading-relaxed text-ice/50">
                            Não conseguiu entrar em algum dos dois? Guarde esta página e
                            chame o suporte no WhatsApp.
                        </p>
                        <a
                            href={SUPORTE_WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cmn-btn cmn-pill group inline-flex min-h-[48px] items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold tracking-wide text-ice hover:border-white/25 hover:bg-white/10"
                        >
                            <LifeBuoy
                                className="h-4 w-4 shrink-0 text-electric-blue"
                                strokeWidth={2}
                            />
                            Falar com o suporte
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-400 group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </a>
                        <p className="text-[11px] leading-relaxed text-ice/40">
                            Ou salve o número:{" "}
                            <span className="font-semibold text-ice/60">
                                {SUPORTE_TELEFONE}
                            </span>
                        </p>
                    </div>
                </motion.div>

                {/* ---------- Assinatura ---------- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="mt-10 flex flex-col items-center gap-3 sm:mt-12"
                >
                    <img
                        src="/pgar-logo.png"
                        alt="PGAR"
                        className="h-6 w-auto opacity-70"
                    />
                    <p className="text-center text-[11px] text-ice/30">
                        Comunidade PGAR · Preparação de Goleiros de Alto Rendimento
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
