"use client";

import { motion } from "framer-motion";
import { MessagesSquare, Video, GraduationCap } from "lucide-react";

/* Layout novo: um pilar grande em destaque e dois menores ao lado,
   em vez de três colunas iguais. Mantém o fundo escuro (o design
   system de vidro precisa de escuro para funcionar). */

const pilares = [
    {
        icon: GraduationCap,
        titulo: "Os cursos",
        chamada: "O centro da sua evolução começa pela sua metodologia.",
        texto:
            "Acesse o curso CIMO, o curso de carreira e os próximos cursos ou módulos liberados durante a sua assinatura. É conteúdo para transformar repertório em decisões mais seguras no campo.",
        destaque: true,
    },
    {
        icon: MessagesSquare,
        titulo: "A comunidade e o WhatsApp",
        chamada: "Troca qualificada para a rotina de quem prepara goleiros.",
        texto:
            "Participe do grupo de WhatsApp da comunidade e tenha acesso ao WhatsApp do Rodrigo para conversas e dúvidas sobre metodologia, rotina e carreira, enquanto a assinatura estiver ativa.",
        destaque: false,
    },
    {
        icon: Video,
        titulo: "Os encontros",
        chamada: "Troca ao vivo para dar sequência ao seu processo.",
        texto:
            "A assinatura inclui um encontro mensal da comunidade e, nos seis primeiros meses, um encontro individual de uma hora com Rodrigo.",
        destaque: false,
    },
];

const fundamentosCimo = [
    ["C", "Contexto", "Leia o atleta, a equipe, a categoria e o momento antes de decidir."],
    ["I", "Intensidade", "Conecte o estímulo do treino ao objetivo e à demanda real."],
    ["M", "Mentalidade", "Trabalhe atenção, comportamento e atitude ao longo do processo."],
    ["O", "Organização", "Dê sequência e propósito às decisões que constroem o método."],
];

export function ComoFunciona() {
    const [principal, ...secundarios] = pilares;

    return (
        <section className="relative w-full py-24 md:py-36">

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[11px] font-semibold uppercase tracking-[0.28em] text-electric-blue"
                    >
                        Como funciona na prática
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-5 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ice md:text-6xl"
                    >
                        Uma assinatura para estudar, trocar e organizar o seu método.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: 0.16, ease: "easeOut" }}
                        className="mt-6 text-base leading-relaxed text-ice/65 md:text-lg"
                    >
                        Nos seis meses iniciais, você tem acesso às entregas abaixo.
                        Comunidade, WhatsApp, encontros, cursos disponíveis e futuros cursos
                        ou módulos dependem de a assinatura permanecer ativa.
                    </motion.p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_0.9fr]">
                    {/* Cursos: pilar principal da assinatura */}
                    <motion.article
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="cmn-glass-glow cmn-lift relative overflow-hidden p-7 md:p-10"
                    >
                        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-electric-blue/10 blur-3xl" />
                        <div className="relative">
                            <div className="flex items-center justify-between gap-4">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-electric-blue/30 bg-electric-blue/10">
                                <principal.icon
                                    className="h-5.5 w-5.5 text-electric-blue"
                                    strokeWidth={2}
                                />
                                </span>
                                <span className="rounded-full border border-electric-blue/25 bg-electric-blue/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-blue">
                                    Pilar principal
                                </span>
                            </div>

                            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-ice/45">
                                {principal.titulo}
                            </p>
                            <p className="mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-ice md:text-3xl">
                                {principal.chamada}
                            </p>
                            <p className="mt-5 text-[15px] leading-relaxed text-ice/65 md:text-base">
                                {principal.texto}
                            </p>

                            <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-obsidian/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-electric-blue">
                                        Método CIMO
                                    </p>
                                    <p className="mt-2 font-display text-lg font-bold uppercase leading-tight text-ice">
                                        Construa uma base para o seu processo.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-obsidian/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-electric-blue">
                                        Curso de carreira
                                    </p>
                                    <p className="mt-2 font-display text-lg font-bold uppercase leading-tight text-ice">
                                        Prepare o próximo passo da sua trajetória.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Dois pilares menores */}
                    <div className="grid gap-5">
                        {secundarios.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <motion.article
                                    key={p.titulo}
                                    initial={{ opacity: 0, y: 26 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.1 + i * 0.1,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="cmn-glass-lit cmn-lift p-7 md:p-8"
                                >
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                        <Icon
                                            className="h-5 w-5 text-electric-blue"
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-ice/45">
                                        {p.titulo}
                                    </p>
                                    <p className="mt-2.5 font-display text-lg font-bold uppercase leading-tight tracking-tight text-ice md:text-xl">
                                        {p.chamada}
                                    </p>
                                    <p className="mt-3.5 text-sm leading-relaxed text-ice/60">
                                        {p.texto}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="cmn-glass-lit mt-12 overflow-hidden p-6 md:p-8"
                >
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.7fr] lg:items-center">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric-blue">
                                A metodologia CIMO
                            </p>
                            <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ice md:text-4xl">
                                Menos improviso. Mais intenção em cada escolha.
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-ice/60">
                                Um método não é uma receita pronta: é uma forma de enxergar,
                                organizar e evoluir o seu trabalho.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {fundamentosCimo.map(([letra, titulo, texto]) => (
                                <div
                                    key={titulo}
                                    className="rounded-2xl border border-white/10 bg-obsidian/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-electric-blue/25 bg-electric-blue/10 font-display text-lg font-bold text-electric-blue">
                                            {letra}
                                        </span>
                                        <p className="font-display text-base font-bold uppercase tracking-tight text-ice">
                                            {titulo}
                                        </p>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-ice/55">
                                        {texto}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
