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
        chamada: "A base do que você vai aplicar no campo.",
        texto:
            "O curso CIMO e o Diagnóstico Profissional ficam liberados desde o primeiro dia. E todo curso ou módulo novo que sair enquanto você estiver dentro entra na sua conta, sem cobrar de novo.",
        destaque: true,
    },
    {
        icon: MessagesSquare,
        titulo: "A comunidade e o WhatsApp",
        chamada: "Onde a dúvida do dia a dia é resolvida.",
        texto:
            "Grupo de preparadores e contato direto com o Rodrigo, para dúvidas de treino, rotina e carreira. O que nenhum curso gravado dá.",
        destaque: false,
    },
    {
        icon: Video,
        titulo: "Os encontros",
        chamada: "Uma vez por mês olhando o seu caso.",
        texto:
            "Um encontro em grupo por mês, ao vivo. Mais um encontro individual com o Rodrigo, quando você quiser.",
        destaque: false,
    },
];

const aulasDiagnostico = [
    [
        "01",
        "Onde você está, onde quer chegar",
        "Sua posição no mercado hoje, e a meta para os próximos 3 a 5 anos.",
    ],
    [
        "02",
        "O Preparador de Alto Rendimento",
        "Competências e mentalidade de quem ocupa as melhores posições do mercado.",
    ],
    [
        "03",
        "Diagnóstico e Plano de Desenvolvimento",
        "Metas SMART e um plano de ação, pra fechar o Mapa de Carreira.",
    ],
];

const fundamentosCimo = [
    ["C", "Contexto", "Quem é esse goleiro, em que categoria e momento da equipe."],
    ["I", "Intensidade", "Que estímulo o treino precisa dar, e por quê."],
    ["M", "Mentalidade", "Atenção, comportamento e atitude, treinados como o resto."],
    ["O", "Organização", "A sequência que faz uma semana puxar a próxima."],
];

export function ComoFunciona() {
    const [principal, ...secundarios] = pilares;

    return (
        <section className="relative w-full py-12 sm:py-20 md:py-28">

            <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-blue sm:text-[11px] sm:tracking-[0.28em]"
                    >
                        Como funciona na prática
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-4 font-display text-[clamp(1.95rem,8.6vw,2.75rem)] font-bold uppercase leading-[1] tracking-tight text-ice sm:mt-5 md:text-6xl md:leading-[0.98]"
                    >
                        Estudar, perguntar e organizar. Todo mês.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: 0.16, ease: "easeOut" }}
                        className="mt-5 text-[15px] leading-relaxed text-ice/65 sm:mt-6 sm:text-base md:text-lg"
                    >
                        Seus seis meses começam no dia em que você entra, sem
                        turma, sem data fixa.
                    </motion.p>
                </div>

                <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-[1.35fr_0.9fr]">
                    {/* Cursos: pilar principal da assinatura */}
                    <motion.article
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="cmn-glass-glow cmn-lift relative overflow-hidden p-6 sm:p-7 md:p-10"
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
                                <span className="shrink-0 rounded-full border border-electric-blue/25 bg-electric-blue/10 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-electric-blue sm:px-3 sm:text-[10px] sm:tracking-[0.2em]">
                                    Pilar principal
                                </span>
                            </div>

                            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-ice/45 sm:mt-7 sm:text-[11px] sm:tracking-[0.24em]">
                                {principal.titulo}
                            </p>
                            <p className="mt-3 font-display text-xl font-bold uppercase leading-tight tracking-tight text-ice sm:text-2xl md:text-3xl">
                                {principal.chamada}
                            </p>
                            <p className="mt-4 text-[14px] leading-relaxed text-ice/65 sm:mt-5 sm:text-[15px] md:text-base">
                                {principal.texto}
                            </p>

                            <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-obsidian/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-5">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-electric-blue">
                                        Método CIMO
                                    </p>
                                    <p className="mt-2 font-display text-lg font-bold uppercase leading-tight text-ice">
                                        Construa uma base para o seu processo.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-obsidian/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-electric-blue">
                                        Diagnóstico Profissional
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
                                    className="cmn-glass-lit cmn-lift p-6 sm:p-7 md:p-8"
                                >
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                        <Icon
                                            className="h-5 w-5 text-electric-blue"
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ice/45 sm:mt-6 sm:text-[11px] sm:tracking-[0.24em]">
                                        {p.titulo}
                                    </p>
                                    <p className="mt-2.5 font-display text-base font-bold uppercase leading-tight tracking-tight text-ice sm:text-lg md:text-xl">
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
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    className="cmn-glass-lit mt-10 overflow-hidden p-5 sm:mt-12 sm:p-6 md:p-8"
                >
                    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1.7fr] lg:items-center">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric-blue">
                                O Diagnóstico Profissional
                            </p>
                            <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-[1] tracking-tight text-ice sm:text-3xl md:text-4xl md:leading-[0.95]">
                                Um módulo que te ajuda a direcionar sua carreira.
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-ice/60">
                                Cada aula alimenta o Mapa de Carreira que você
                                preenche ao longo do módulo.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                            {aulasDiagnostico.map(([numero, titulo, texto]) => (
                                <div
                                    key={titulo}
                                    className="rounded-2xl border border-white/10 bg-obsidian/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                                >
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-display text-sm font-bold text-electric-blue">
                                            {numero}
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

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="cmn-glass-lit mt-6 overflow-hidden p-5 sm:mt-8 sm:p-6 md:p-8"
                >
                    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1.7fr] lg:items-center">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric-blue">
                                A metodologia CIMO
                            </p>
                            <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-[1] tracking-tight text-ice sm:text-3xl md:text-4xl md:leading-[0.95]">
                                Quatro pilares que formam a metodologia.
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-ice/60">
                                Não é treino pronto. É a ordem em que você pensa
                                antes de escolher o que fazer.
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
