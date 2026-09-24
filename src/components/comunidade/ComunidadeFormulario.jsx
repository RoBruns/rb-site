"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import "./ds.css";
import { COUNTRIES, PhoneInput } from "../form/PhoneInput";
import { SuccessScreen } from "../form/SuccessScreen";
import { EASE, stepVariants } from "../form/motion";
import { getTrackingId } from "../../utils/attribution";

const WEBHOOK_URL =
    process.env.NEXT_PUBLIC_COMUNIDADE_FORM_WEBHOOK ||
    "https://primary-production-5215.up.railway.app/webhook/comunidade-formulario";

const CONTEXTOS = [
    "Profissional",
    "Formação",
    "Iniciação",
    "Personal",
    "Escola de goleiros",
    "Feminino",
];

const TOTAL_STEPS = 4;

const fieldClass =
    "w-full rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-base text-ice outline-none transition-all duration-300 placeholder:text-ice/25 focus:border-electric-blue/55 focus:bg-white/[0.065] focus:shadow-[0_0_0_3px_rgba(127,179,255,0.09)]";

function ContinueButton({ children = "Continuar", disabled, loading, type = "button" }) {
    return (
        <motion.button
            type={type}
            disabled={disabled}
            whileHover={disabled ? undefined : { y: -2 }}
            whileTap={disabled ? undefined : { scale: 0.985 }}
            className={
                "cmn-btn cmn-btn-primary inline-flex min-h-[52px] items-center justify-center gap-2 bg-electric-blue px-7 py-3.5 text-sm font-semibold tracking-wide text-obsidian transition-opacity " +
                (disabled ? "cursor-not-allowed opacity-35" : "hover:bg-white")
            }
        >
            <span>{loading ? "Enviando..." : children}</span>
            {!loading && <span aria-hidden="true">→</span>}
        </motion.button>
    );
}

function BackButton({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ice/45 transition-colors hover:text-ice"
        >
            <span aria-hidden="true">←</span>
            Voltar
        </button>
    );
}

function StepShell({ eyebrow, title, subtitle, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
        >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric-blue sm:text-[11px]">
                {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2rem,7vw,3.1rem)] font-bold uppercase leading-[0.98] tracking-tight text-ice">
                {title}
            </h1>
            {subtitle && (
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-ice/55 sm:text-base">
                    {subtitle}
                </p>
            )}
            <div className="mt-9">{children}</div>
        </motion.div>
    );
}

export function ComunidadeFormulario() {
    const [[step, direction], setStep] = useState([0, 0]);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState(COUNTRIES[0]);
    const [phoneDigits, setPhoneDigits] = useState("");
    const [contextos, setContextos] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const go = (next) => setStep([next, next > step ? 1 : -1]);

    const emailValid = useMemo(() => /\S+@\S+\.\S+/.test(email.trim()), [email]);
    const whatsappE164 = `+${country.dial}${phoneDigits}`;

    const toggleContexto = (contexto) => {
        setContextos((current) =>
            current.includes(contexto)
                ? current.filter((item) => item !== contexto)
                : [...current, contexto]
        );
    };

    const submit = async () => {
        if (submitting || contextos.length === 0) return;

        setSubmitting(true);
        setSubmitError(false);

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // O n8n repassa para a RPC registrar_lead_comunidade (funil
                // Comunidade, etapa Lead). O rb_tid liga este lead a uma
                // venda futura pela atribuição (ver crm/atribuicao.md).
                body: JSON.stringify({
                    nome: nome.trim(),
                    whatsapp: whatsappE164,
                    email: email.trim().toLowerCase(),
                    contextos,
                    rb_tid: getTrackingId(),
                }),
            });

            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            go(4);
        } catch (error) {
            console.error("Falha ao enviar formulário da comunidade:", error);
            setSubmitError(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="cmn-scope relative min-h-[100svh] w-full overflow-hidden bg-obsidian font-sans text-ice selection:bg-electric-blue selection:text-obsidian">
            <div className="cmn-atmosfera" aria-hidden="true" />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            >
                <div className="cmn-luz left-1/2 top-[-15%] h-[70vw] max-h-[720px] w-[85vw] max-w-[900px] -translate-x-1/2" />
                <div className="cmn-luz bottom-[-18%] right-[-12%] h-[55vw] max-h-[560px] w-[55vw] max-w-[620px] opacity-70" />
            </div>

            {step < TOTAL_STEPS && (
                <div className="fixed left-0 top-0 z-50 flex w-full gap-1.5 px-1.5 pt-1.5">
                    {Array.from({ length: TOTAL_STEPS }).map((_, index) => (
                        <div
                            key={index}
                            className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/8"
                        >
                            <motion.div
                                className="h-full origin-left rounded-full bg-electric-blue"
                                initial={false}
                                animate={{ scaleX: index <= step ? 1 : 0 }}
                                transition={{ duration: 0.45, ease: EASE }}
                            />
                        </div>
                    ))}
                </div>
            )}

            <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-2xl flex-col px-5 py-16 sm:px-8 sm:py-20">
                <div className="mb-auto">
                    <img
                        src="/pgar-logo.png"
                        alt="PGAR"
                        className="h-7 w-auto opacity-80 sm:h-8"
                    />
                </div>

                <div className="flex flex-1 items-center py-10 sm:py-14">
                    <div className="w-full">
                        <AnimatePresence mode="wait" custom={direction}>
                            {step === 0 && (
                                <motion.div
                                    key="nome"
                                    custom={direction}
                                    variants={stepVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                >
                                    <StepShell
                                        eyebrow="Comunidade PGAR · 01 de 04"
                                        title="Qual é o seu nome?"
                                    >
                                        <form
                                            onSubmit={(event) => {
                                                event.preventDefault();
                                                if (nome.trim().length >= 2) go(1);
                                            }}
                                            className="space-y-7"
                                        >
                                            <input
                                                autoFocus
                                                autoComplete="name"
                                                value={nome}
                                                onChange={(event) => setNome(event.target.value)}
                                                placeholder="Seu nome completo"
                                                className={fieldClass}
                                            />
                                            <ContinueButton
                                                type="submit"
                                                disabled={nome.trim().length < 2}
                                            />
                                        </form>
                                    </StepShell>
                                </motion.div>
                            )}

                            {step === 1 && (
                                <motion.div
                                    key="telefone"
                                    custom={direction}
                                    variants={stepVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                >
                                    <BackButton onClick={() => go(0)} />
                                    <StepShell
                                        eyebrow="Comunidade PGAR · 02 de 04"
                                        title="Qual é o seu WhatsApp?"
                                        subtitle="Use o número em que você prefere receber nosso contato."
                                    >
                                        <form
                                            onSubmit={(event) => {
                                                event.preventDefault();
                                                if (phoneDigits.length >= 8) go(2);
                                            }}
                                            className="space-y-7"
                                        >
                                            <div className="[&>div>button]:rounded-l-2xl [&>div>button]:bg-white/[0.07] [&>div>input]:rounded-r-2xl [&>div>input]:rounded-l-none [&>div>input]:bg-white/[0.045] [&>div>input]:py-4 [&>div>input]:text-base [&>div>input]:focus:bg-white/[0.065]">
                                                <PhoneInput
                                                    country={country}
                                                    onCountry={setCountry}
                                                    digits={phoneDigits}
                                                    onDigits={setPhoneDigits}
                                                />
                                            </div>
                                            <ContinueButton
                                                type="submit"
                                                disabled={phoneDigits.length < 8}
                                            />
                                        </form>
                                    </StepShell>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="email"
                                    custom={direction}
                                    variants={stepVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                >
                                    <BackButton onClick={() => go(1)} />
                                    <StepShell
                                        eyebrow="Comunidade PGAR · 03 de 04"
                                        title="Qual é o seu e-mail?"
                                    >
                                        <form
                                            onSubmit={(event) => {
                                                event.preventDefault();
                                                if (emailValid) go(3);
                                            }}
                                            className="space-y-7"
                                        >
                                            <input
                                                autoFocus
                                                type="email"
                                                inputMode="email"
                                                autoComplete="email"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                                placeholder="voce@email.com"
                                                className={fieldClass}
                                            />
                                            <ContinueButton type="submit" disabled={!emailValid} />
                                        </form>
                                    </StepShell>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="contexto"
                                    custom={direction}
                                    variants={stepVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                >
                                    <BackButton onClick={() => go(2)} />
                                    <StepShell
                                        eyebrow="Comunidade PGAR · 04 de 04"
                                        title="Em quais contextos você trabalha?"
                                        subtitle="Você pode selecionar mais de uma opção."
                                    >
                                        <form
                                            onSubmit={(event) => {
                                                event.preventDefault();
                                                submit();
                                            }}
                                            className="space-y-7"
                                        >
                                            <div className="grid gap-3 sm:grid-cols-2">
                                                {CONTEXTOS.map((contexto) => {
                                                    const selected = contextos.includes(contexto);
                                                    return (
                                                        <label
                                                            key={contexto}
                                                            className={
                                                                "cmn-btn flex min-h-[56px] cursor-pointer items-center gap-3 border px-4 py-3.5 transition-all " +
                                                                (selected
                                                                    ? "border-electric-blue/55 bg-electric-blue/12 text-ice shadow-[0_0_24px_-12px_rgba(127,179,255,0.7)]"
                                                                    : "border-white/10 bg-white/[0.035] text-ice/70 hover:border-white/20 hover:bg-white/[0.06]")
                                                            }
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                checked={selected}
                                                                onChange={() => toggleContexto(contexto)}
                                                                className="sr-only"
                                                            />
                                                            <span
                                                                aria-hidden="true"
                                                                className={
                                                                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[11px] font-bold " +
                                                                    (selected
                                                                        ? "border-electric-blue bg-electric-blue text-obsidian"
                                                                        : "border-white/20 text-transparent")
                                                                }
                                                            >
                                                                ✓
                                                            </span>
                                                            <span className="text-sm font-medium">
                                                                {contexto}
                                                            </span>
                                                        </label>
                                                    );
                                                })}
                                            </div>

                                            <div className="space-y-3">
                                                <ContinueButton
                                                    type="submit"
                                                    disabled={contextos.length === 0 || submitting}
                                                    loading={submitting}
                                                >
                                                    Enviar
                                                </ContinueButton>
                                                {submitError && (
                                                    <p className="text-sm leading-relaxed text-red-300/90">
                                                        Não conseguimos enviar agora. Tente novamente em alguns instantes.
                                                    </p>
                                                )}
                                            </div>
                                        </form>
                                    </StepShell>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="sucesso"
                                    custom={direction}
                                    variants={stepVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="py-6 text-center"
                                >
                                    <SuccessScreen
                                        nome={nome}
                                        eyebrow="Informações recebidas"
                                        title="Formulário"
                                        titleAccent="concluído."
                                        body="Obrigado por compartilhar suas informações. Entraremos em contato em breve para passar mais detalhes sobre o ecossistema PGAR."
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <p className="mt-auto text-[11px] leading-relaxed text-ice/30">
                    Comunidade PGAR · Preparação de Goleiros de Alto Rendimento
                </p>
            </div>
        </main>
    );
}
