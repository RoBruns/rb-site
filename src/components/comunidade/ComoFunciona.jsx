"use client";

import { motion } from "framer-motion";
import { MessagesSquare, Video, GraduationCap } from "lucide-react";

/* Layout: cursos e encontros lado a lado, mais altos; comunidade
   embaixo, largo e mais baixo. Mantém o fundo escuro (o design
   system de vidro precisa de escuro para funcionar). */

const pilaresTopo = [
    {
        icon: GraduationCap,
        titulo: "Os cursos",
        chamada: "A base do que você vai aplicar no campo.",
        texto:
            "Enquanto você estiver na comunidade, terá acesso à metodologia CIMO, o Diagnóstico Profissional e todo material novo que for lançado.",
        subcards: [
            {
                titulo: "Metodologia CIMO",
                texto: "Construa uma base para o seu processo.",
            },
            {
                titulo: "Diagnóstico Profissional",
                texto: "Prepare o próximo passo da sua trajetória.",
            },
        ],
    },
    {
        icon: Video,
        titulo: "Os encontros",
        chamada: "Onde você aprende e tira dúvidas ao vivo.",
        subcards: [
            {
                titulo: "Encontros em grupo",
                texto:
                    "Uma vez por mês, ao vivo, para você tirar dúvidas e aprender comigo e com outros profissionais.",
            },
            {
                titulo: "Encontro individual",
                texto:
                    "Esse é o momento em que entendo seu caso e te dou o direcionamento necessário.",
            },
        ],
    },
];

const pilarComunidade = {
    icon: MessagesSquare,
    titulo: "A comunidade e o WhatsApp",
    chamada: "Onde a dúvida do dia a dia é resolvida.",
    texto:
        "Grupo de preparadores e contato direto com o Rodrigo, para dúvidas de treino, rotina e carreira. O que nenhum curso gravado dá.",
};

const aulasDiagnostico = [
    [
        "01",
        "Onde você está, onde quer chegar",
        "Sua posição no mercado e objetivos futuros.",
    ],
    [
        "02",
        "O Preparador de Alto Rendimento",
        "Competências e mentalidade de quem ocupa as melhores posições do mercado.",
    ],
    [
        "03",
        "Diagnóstico e Plano de Desenvolvimento",
        "Metas e um plano de ação para definir seu Mapa de Carreira.",
    ],
];

const fundamentosCimo = [
    ["C", "Contexto", "Trazer o contexto do jogo para os treinos."],
    ["I", "Intensidade", "O que é necessário em cada processo."],
    ["M", "Mentalidade", "Como preparador e goleiro pensam o jogo."],
    ["O", "Organização", "A sequência que encaixa os ciclos de treinamento e jogos."],
];

export function ComoFunciona() {
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
                        Estude, pergunte e aplique.
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

                {/* Cursos e encontros lado a lado, em destaque */}
                <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
                    {pilaresTopo.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <motion.article
                                key={p.titulo}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{
                                    duration: 1,
                                    delay: i * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="cmn-glass-glow cmn-lift relative flex h-full flex-col overflow-hidden p-6 sm:p-7 md:p-10"
                            >
                                <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-electric-blue/10 blur-3xl" />
                                <div className="relative flex h-full flex-col">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-electric-blue/30 bg-electric-blue/10">
                                        <Icon
                                            className="h-5.5 w-5.5 text-electric-blue"
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-ice/45 sm:mt-7 sm:text-[11px] sm:tracking-[0.24em]">
                                        {p.titulo}
                                    </p>
                                    <p className="mt-3 font-display text-xl font-bold uppercase leading-tight tracking-tight text-ice sm:text-2xl md:text-3xl">
                                        {p.chamada}
                                    </p>
                                    {p.texto && (
                                        <p className="mt-4 text-[14px] leading-relaxed text-ice/65 sm:mt-5 sm:text-[15px] md:text-base">
                                            {p.texto}
                                        </p>
                                    )}

                                    <div
                                        className={
                                            i === 0
                                                ? "mt-auto grid gap-3 pt-6 sm:grid-cols-2"
                                                : "mt-6 grid gap-5"
                                        }
                                    >
                                        {p.subcards.map((s) => (
                                            <div
                                                key={s.titulo}
                                                className="rounded-2xl border border-white/10 bg-obsidian/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-5"
                                            >
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-electric-blue">
                                                    {s.titulo}
                                                </p>
                                                <p className="mt-2 text-sm leading-relaxed text-ice/70">
                                                    {s.texto}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Comunidade: largo e mais baixo, embaixo dos dois pilares */}
                <motion.article
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="cmn-glass-lit cmn-lift mt-4 flex flex-col gap-5 p-6 sm:mt-5 sm:flex-row sm:items-center sm:p-7 md:p-8"
                >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <MessagesSquare
                            className="h-5 w-5 text-electric-blue"
                            strokeWidth={2}
                        />
                    </span>

                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ice/45 sm:text-[11px] sm:tracking-[0.24em]">
                            {pilarComunidade.titulo}
                        </p>
                        <p className="mt-2 font-display text-base font-bold uppercase leading-tight tracking-tight text-ice sm:text-lg md:text-xl">
                            {pilarComunidade.chamada}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-ice/60">
                            {pilarComunidade.texto}
                        </p>
                    </div>
                </motion.article>

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
