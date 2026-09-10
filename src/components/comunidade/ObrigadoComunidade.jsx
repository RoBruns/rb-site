"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    MessageCircle,
    ShieldCheck,
    LifeBuoy,
} from "lucide-react";
import "./ds.css";
import {
    AREA_MEMBROS_URL,
    SUPORTE_TELEFONE,
    SUPORTE_WHATSAPP_URL,
} from "./constants";

/* ------------------------------------------------------------------ */
/*  Página de destino do checkout da Comunidade.                       */
/*                                                                     */
/*  Ela existe para uma coisa só: confirmar a compra e levar a pessoa  */
/*  para dentro. Nada de venda, nada de rolagem longa — quem chega     */
/*  aqui já comprou. É a página que a pessoa reabre quando não         */
/*  consegue entrar em algo, então tudo tem de caber nela.             */
/*                                                                     */
/*  POR QUE O GRUPO NÃO TEM LINK DIRETO AQUI: a Hubla valida o número  */
/*  de WhatsApp do aluno antes de liberar o convite, e essa validação  */
/*  só acontece dentro da área de membros. Um link solto para o        */
/*  convite deixaria a pessoa entrar sem o número validado — ou, mais  */
/*  provável, bateria numa porta fechada. Por isso o único botão é o   */
/*  da área de membros, e o grupo aparece como passo a passo.          */
/*                                                                     */
/*  Segue o design system da Comunidade (.cmn-*), então herda a mesma   */
/*  atmosfera, o mesmo vidro e os mesmos botões pill da página de       */
/*  vendas.                                                            */
/* ------------------------------------------------------------------ */

/*  O caminho do grupo, na ordem em que a pessoa vai encontrar as
    telas. O passo 3 tem dois desfechos porque a Hubla mostra um modal
    diferente para quem já validou o número antes — e é exatamente aí
    que a pessoa trava se ninguém avisar.                              */
const passosGrupo = [
    {
        titulo: "Abra a área de membros",
        desc: "Use o botão acima e entre com o e-mail da compra.",
    },
    {
        titulo: 'Na página inicial, procure "Grupos"',
        desc: 'Logo abaixo do vídeo de boas-vindas aparece "Comunidade PGAR · WhatsApp". Clique em Entrar.',
    },
    {
        titulo: "Confirme seu número de WhatsApp",
        desc: "Abre um modal pedindo o número. Se você ainda não confirmou, digite o seu e confirme. Se já confirmou antes, o número aparece na tela — confira se é o mesmo WhatsApp que você usa hoje e, se não for, toque em Editar número.",
    },
    {
        titulo: 'Toque em "Abrir o convite"',
        desc: "Aí sim o WhatsApp abre com o convite do grupo. Sem confirmar o número antes, o convite não é liberado.",
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
                        Comece pela área de membros — o grupo de WhatsApp você abre
                        de dentro dela, e o passo a passo está logo abaixo.
                    </motion.p>
                </div>

                {/* ---------- Acesso: um só, a área de membros ----------
                    Tudo passa por aqui, inclusive o grupo. */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-glass-glow mt-10 p-6 sm:mt-12 sm:p-8"
                >
                    <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-electric-blue/25 bg-electric-blue/10">
                            <GraduationCap
                                className="h-5 w-5 text-electric-blue"
                                strokeWidth={2}
                            />
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="font-display text-base font-bold uppercase leading-tight tracking-tight text-ice sm:text-lg">
                                Área de membros
                            </p>
                            <p className="mt-1.5 text-[13px] leading-relaxed text-ice/60 sm:text-sm">
                                Seu ponto de partida. É onde ficam a Metodologia CIMO, o
                                Diagnóstico Profissional, todo material novo — e o convite
                                do grupo de WhatsApp.
                            </p>
                        </div>
                    </div>

                    <a
                        href={AREA_MEMBROS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cmn-btn cmn-btn-primary group mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 bg-electric-blue px-6 py-4 text-[15px] font-semibold tracking-wide text-obsidian hover:bg-white sm:gap-2.5"
                    >
                        Acessar a área de membros
                        <span
                            aria-hidden="true"
                            className="transition-transform duration-400 group-hover:translate-x-1"
                        >
                            →
                        </span>
                    </a>

                    <p className="mt-3 text-center text-[11px] leading-relaxed text-ice/45">
                        Entre com o mesmo e-mail que você usou na compra.
                    </p>
                </motion.div>

                {/* ---------- Como entrar no grupo ----------
                    O convite só existe dentro da área de membros, depois
                    da validação do número. Aqui a pessoa vê o caminho
                    inteiro antes de percorrê-lo, para não travar no modal
                    de confirmação. */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.97, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-glass-lit mt-4 p-6 sm:mt-5 sm:p-8"
                >
                    <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-electric-blue/25 bg-electric-blue/10">
                            <MessageCircle
                                className="h-5 w-5 text-electric-blue"
                                strokeWidth={2}
                            />
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="font-display text-base font-bold uppercase leading-tight tracking-tight text-ice sm:text-lg">
                                Como entrar no grupo
                            </p>
                            <p className="mt-1.5 text-[13px] leading-relaxed text-ice/60 sm:text-sm">
                                O grupo de WhatsApp é o dia a dia da comunidade. O convite
                                sai de dentro da área de membros, porque o seu número
                                precisa ser confirmado antes.
                            </p>
                        </div>
                    </div>

                    <ol className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
                        {passosGrupo.map((passo, i) => (
                            <li key={passo.titulo} className="flex items-start gap-4">
                                <span
                                    aria-hidden="true"
                                    className="mt-0.5 font-display text-base font-bold leading-none tracking-tight text-electric-blue"
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[14px] font-semibold leading-snug text-ice/90 sm:text-[15px]">
                                        {passo.titulo}
                                    </p>
                                    <p className="mt-1 text-[13px] leading-relaxed text-ice/55 sm:text-sm">
                                        {passo.desc}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    {/* O erro mais caro do fluxo: pular a confirmação. */}
                    <div className="mt-6 flex items-start gap-3 rounded-xl border border-dashed border-electric-blue/40 bg-electric-blue/[0.07] px-4 py-3.5 sm:mt-7">
                        <ShieldCheck
                            className="mt-0.5 h-4 w-4 shrink-0 text-electric-blue"
                            strokeWidth={2}
                        />
                        <p className="text-[12px] leading-relaxed text-ice/65 sm:text-[13px]">
                            Confirme o número no WhatsApp que você realmente usa. É por ele
                            que o grupo vai te reconhecer — e é o mesmo número que usamos
                            se precisarmos te reinserir depois.
                        </p>
                    </div>
                </motion.div>

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
                            Travou em algum passo ou não conseguiu entrar no grupo?
                            Guarde esta página e chame o suporte no WhatsApp.
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
